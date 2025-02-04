function Card() {
  return (
    <div className="card text-center">
      <div className="favorite">
        <img src="/img/heart-unlicked.svg" alt="Unlicked"></img>
      </div>
      <img
        src="/img/sneakers/2.jpg"
        alt="Sneakers"
        width={133}
        height={112}
      ></img>
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column align-start">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img src="/img/plus.svg" alt="Plus" width={11} height={11}></img>
        </button>
      </div>
    </div>
  );
}

export default Card;
