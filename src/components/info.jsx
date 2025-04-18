import React from 'react'
import AppContext from '../context'

    const Info = ({ title, image, description }) => {
    const { setCartOpened } = React.useContext(AppContext)

    return (
        <div className="cartEmpty d-flex flex-column align-center justify-center flex">
        <img className="mb-20" width={120}  src={ image } alt="Empty"></img>
        <h2>{ title }</h2>

        <p className="opacity-6">{ description }</p>

        <button onClick={() => setCartOpened(false)}  className="greenButton">
        <img  src="/img/arrow.svg" alt="Arrow"></img>
        Вернуться назад
        </button>    
    </div>
    )
    }

export default Info;
