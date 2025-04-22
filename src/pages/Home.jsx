import React from "react";
import Card from "../components/Card";

function Home ({ items,  searchValue, setSearchValue, onChangeInput, onAddToFavorite,  onAddToCart, isLoading }) {
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    const renderItems = () => {
        return (isLoading ? [...Array(8)] : filteredItems )
        .map((item, index) => (
            <Card
                key={index}
                onFavorite = {(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                loading = {isLoading}
                {...item}
            />
            ))
    }
    
    return (
    <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search"></img>
            {searchValue && <img onClick={() => setSearchValue('')}  className="clear cu-p" src="img/btn-remove.svg" alt="Clear"></img>}
            <input onChange={onChangeInput} value={searchValue} placeholder="Поиск..." type="text"></input>
        </div>
        </div>

        <div className="d-flex flex-wrap">
        {renderItems()}
        </div>
        </div>);
}

export default Home;