import React from 'react'
import { Link } from "react-router-dom"
import { useCart } from '../hooks/useCart'


function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
      <div className="d-flex align-center">  
        <img src="/img/logo_sneakers.png" width={40} height={40} alt="logotype" />
        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p className="logo_store">Магазин лучших кроссовок</p>
        </div>     
      </div>
      </Link>
      <ul className="d-flex align-center">
        <li onClick={props.onClickCart} className="cu-p">
          <img className="mr-10" src="img/cart.svg" alt="Корзина" width={18} height={18}></img>
          <span>{ totalPrice } руб.</span>
        </li>
        <li className="cu-p">
          <Link to="/favorites">
          <img className="mr-10" src="./img/heart.svg" alt="Закладки" width={18} height={18}></img>
          <span>Закладки</span>
          </Link>
        </li>
        <li>
          <Link to="/orders">
          <img className="mr-10" src="img/user.svg" alt="Профиль" width={18} height={18}></img>
          <span>Профиль</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
