import {useState, useEfect } from 'react'
import {getProducts } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [products, serProducts] = useState([])
  
  const { categoryId } = useParams ()
  
  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts
    
    asyncFunc(categoryId)
    .then(responde => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [categoryId])
  
  return (
      <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
      </div>
    )
}
  
  export default ItemListContainer;