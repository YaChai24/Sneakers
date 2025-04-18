import React from "react";
import axios from "axios";
import Card from "../components/Card";


function Orders () {
    const [ orders, setOrders ] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)  
    React.useEffect(() => {
        async function fetchData () {
            try {
            const { data } = await axios.get('https://7017ffb177ca5951.mokky.dev/orders')
            setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
            setIsLoading(false);
            }
            catch (error) {
                alert('Не удалось получить заказы')  
                console.error(error);
            }
        }
        fetchData()
    }, [])

    return (
    <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
        </div>

        <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
        <Card
            key={index}
            loading = {isLoading}
            {...item}/>
        ))}
        </div> 
        </div>
    );
}

export default Orders;