import React from 'react'
import { Routes, Route } from "react-router-dom"
import axios from 'axios'
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import AppContext from "./context";



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState();
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false)  
  const [isLoading, setIsLoading] = React.useState(true)  

  
      
    React.useEffect(() => {
      async function fetchData () {
        // TODO: Сделать try catch + Promise.all
       try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all
          ([axios.get('https://7017ffb177ca5951.mokky.dev/cart'),
           axios.get('https://7017ffb177ca5951.mokky.dev/favorites'),
           axios.get('https://7017ffb177ca5951.mokky.dev/items')]);
        // const cartResponse = await axios.get('https://7017ffb177ca5951.mokky.dev/cart')
        // const favoritesResponse = await  axios.get('https://7017ffb177ca5951.mokky.dev/favorites')
        // const itemsResponse = await axios.get('https://7017ffb177ca5951.mokky.dev/items')


        setIsLoading(false)
        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
       }catch (error) {
        alert('Ошибка при запросе данных')
        console.error(error);
       }
      }
      
      fetchData();
    }, [])
    


    const onAddToCart = async(obj) => {
      try {
        const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
        if (findItem) {  
          setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id) ))
          await axios.delete(`https://7017ffb177ca5951.mokky.dev/cart/${findItem.id}`)
          } else {
          setCartItems((prev) => [...prev, obj]);
          const { data } =  await axios.post('https://7017ffb177ca5951.mokky.dev/cart', obj)
          setCartItems((prev) => prev.map(item => {
            if(item.parentId === data.parentId) {
              return { 
                ...item,
                id: data.id
              };
            }
            return item;
          }));
          }
      }catch (error) {
        alert('Ошибка при добавлении в корзину')
        console.error(error)
      }
    };


    const onRemoveItem = (id) => {
      try {
      axios.delete(`https://7017ffb177ca5951.mokky.dev/cart/${id}`)
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));
      }catch (error) {
        alert('Ошибка при удалении из корзины')
        console.error(error)
      }
    };


    const onAddToFavorite = async (obj) => {
        try {
        if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
          axios.delete(`https://7017ffb177ca5951.mokky.dev/favorites/${obj.id}`)
          setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        } else {
          const { data } = await axios.post('https://7017ffb177ca5951.mokky.dev/favorites', obj)
          setFavorites((prev) => [...prev, data])
        }
      }
      catch(error) {
        alert('Не удалось добавить в избранное')
        console.error(error)
      }  
    };

    const onChangeInput = (event) => {
      setSearchValue(event.target.value);
    };
  

    const isItemAdded = (id) => {
      console.log(id, 222)
      return cartItems.some((obj) => Number(obj.parentId) === Number(id))
    }

  return (
      <AppContext.Provider value = {{ items, cartItems, favorites, isItemAdded, onAddToFavorite, onAddToCart, setCartOpened, setCartItems}}>
        <div className="wrapper clear">
      <Drawer items={cartItems}   onClose={() => setCartOpened(false)} onRemove={onRemoveItem} opened={cartOpened}/>
      <Header onClickCart = {() => setCartOpened(true)} />
        
      <Routes>
        <Route path="" exact element={
        <Home
          items = {items}
          cartItems = {cartItems}
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
          onChangeInput = {onChangeInput}
          onAddToFavorite = {onAddToFavorite}
          onAddToCart = {onAddToCart}
          isLoading = {isLoading}
          />}> 
        </Route>
      </Routes>

      
      <Routes>
        <Route path="favorites" exact element={<Favorites />}></Route>
      </Routes>

      <Routes>
        <Route path="orders" exact element={<Orders />}></Route>
      </Routes>
    </div>
      </AppContext.Provider>
  );
}

export default App;
