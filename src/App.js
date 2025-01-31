function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo_sneakers.png" alt="logo" width={40} height={40} />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="logo_store">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-32">
            <img
              className="mr-10 align-center"
              src="img/cart.svg"
              alt="cart"
              width={18}
              height={18}
            ></img>
            <span>1205 руб.</span>
          </li>
          <li>
            <img
              className="mr-10 align-center"
              src="img/user.svg"
              alt="user"
              width={18}
              height={18}
            ></img>
            <span className="align-center">Профиль</span>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">
          <div className="card text-center">
            <img
              src="/img/sneakers/1.jpg"
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
                <img
                  src="/img/plus.svg"
                  alt="Plus"
                  width={11}
                  height={11}
                ></img>
              </button>
            </div>
          </div>

          <div className="card text-center">
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
                <img
                  src="/img/plus.svg"
                  alt="Plus"
                  width={11}
                  height={11}
                ></img>
              </button>
            </div>
          </div>

          <div className="card text-center">
            <img
              src="/img/sneakers/3.jpg"
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
                <img
                  src="/img/plus.svg"
                  alt="Plus"
                  width={11}
                  height={11}
                ></img>
              </button>
            </div>
          </div>

          <div className="card text-center">
            <img
              src="/img/sneakers/4.jpg"
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
                <img
                  src="/img/plus.svg"
                  alt="Plus"
                  width={11}
                  height={11}
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
