import'./ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import {getProductById} from '../../../asyncMock'
import {ItemDetail} from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, serProduct] = useState(null)
    
    const { itemId} = useParams()
    
    useEffect(() => {
        getProductById('1')
        .then(Response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[itemId])
    
    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer