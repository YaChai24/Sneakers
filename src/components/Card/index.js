import React from 'react'
import ContentLoader from "react-content-loader"
import styles  from './Card.module.scss';
import AppContext from "../../context";


function Card({ id,  title, imageUrl, price, onFavorite, onPlus, favorited = false, loading = false}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, imageUrl, price }; 
  
  const onClickPlus = () => {
    onPlus(obj);
  }

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  }
  
  return (
    <div className={styles.card}>
      {
        loading ? 
        <ContentLoader                  
        speed={2}
        width={170}
        height={210}
        viewBox="0 0 170 210"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="2" y="15" rx="10" ry="10" width="150" height="90" /> 
        <rect x="1" y="120" rx="3" ry="3" width="150" height="15" /> 
        <rect x="0" y="140" rx="3" ry="3" width="93" height="15" /> 
        <rect x="0" y="175" rx="8" ry="8" width="80" height="24" /> 
        <rect x="127" y="171" rx="8" ry="8" width="32" height="32" />
      </ContentLoader> :
      <>
        {onFavorite && (
        <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? "./img/heart-licked.svg" : "./img/heart-unlicked.svg"} alt="Unlicked"></img>
      </div>)}

      <img src={imageUrl} alt="Sneakers" width={133} height={112}></img>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column align-start">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
      
        {onPlus && (<img className={styles.plus} onClick={onClickPlus} src={isItemAdded(id) ? './img/btn-checked.svg' : './img/btn-plus.svg'} alt="Plus" ></img>)}
        
      </div>
      </>
        }
      
    </div>
  );
}

export default Card;
