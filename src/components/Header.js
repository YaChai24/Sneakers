function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="/img/logo_sneakers.png" alt="logo" width={40} height={40} />
        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p className="logo_store">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li>
          <img
            className="mr-10"
            src="img/cart.svg"
            alt="cart"
            width={18}
            height={18}
          ></img>
          <span>1205 руб.</span>
        </li>
        <li>
          <img
            className="mr-10"
            src="img/user.svg"
            alt="user"
            width={18}
            height={18}
          ></img>
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
