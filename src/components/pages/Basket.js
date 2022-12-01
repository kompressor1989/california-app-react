import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { MainContext, useRef } from "../../App"



function Basket () {
    const {idbasket, setBasket} = useContext(MainContext);
	const {store, setStore} = useContext(MainContext);
	const {count, setCount} = useContext(MainContext);
    const [totalPrice, setTotal] = useState(0)
    
    let totalPriceTmp = 0;

    useEffect(() => {
		
		if (!idbasket || idbasket.length === 0)  {

			let idbasketTmp = idbasket;
			idbasketTmp = localStorage.getItem('BasketTmp');
			idbasketTmp = JSON.parse(idbasketTmp);
			setBasket(idbasketTmp)
			
        } 

		
	},[idbasket]);

   useEffect(() => {
    setTotal(totalPriceTmp)
   },[totalPriceTmp]
   )

   

    function settotalPrice(result, resultTmp) {
        // totalPriceTmp = totalPrice;
        totalPriceTmp= 0;
        if(!idbasket || idbasket.length === 0) return;
        
        result.forEach(e => {
            let price = +e.price * +e.quantity
            totalPriceTmp+=+price
            
        });
        console.log(totalPriceTmp);
        
        return (totalPriceTmp=totalPriceTmp.toFixed(2));
        
    }

    // setTotal(totalPriceTmp)
  
    function removeCart(e, id){
        console.log(id)
        if (!id) return;
        let idbasketTmp = idbasket
        idbasketTmp = idbasketTmp.filter(item => +item !== +id)
        setBasket(idbasketTmp)
        if(!idbasketTmp || idbasketTmp.length ===0) localStorage.clear('BasketTmp')
        localStorage.setItem('BasketTmp', JSON.stringify(idbasketTmp));
        setCount(+idbasketTmp.length)

    }

    

    function add() {
      
        if(!idbasket || idbasket.length === 0) return;
        if(idbasket) {
            const result = store.filter(item => {item.quantity = 1;  
            return idbasket.includes(item.id)});
            
            settotalPrice(result)
            
            return result.map(item => {
               
            return (
               
                <li key={item.id} className="cart__item">
                    <Link to={`/product/${item.id}/`}><img src={item.image} width="50" alt={item.category}></img></Link>
                    <span className="title"><Link to={`/product/${item.id}/`}>{item.title}</Link></span>
                    <span className="price">{item.price} $</span>
                    <input onChange={(e) => {const value = +e.target.value;  if(!value || isNaN(value)) return; item.quantity = value; let resultTmp = result;console.log(resultTmp); settotalPrice(resultTmp)}} type="number" min="1" max="100" placeholder="1"></input>
                    <button className="btn__remove" key={item.id} onClick={(e) => removeCart(e, item.id) } >X</button>
                </li>
            )
            
        })
        }
        
    }


    return (
        <>
            <h1>Your basket</h1>
            <ul className="basket__list">{add()}</ul>
            <h4 className="basket__total">Total: {totalPriceTmp} $</h4>
        </>
           
        )
}

export default Basket