const products = [
    {
        id:'1',
        name: 'Guía Lunar',
        price: 300,
        category: 'ebook',
        img: '',
        stock: 1500,
        description: 'Descripción de la guía',
    },
    {id: '2', name: 'Guía Astrología', 
    price: 300,
    category:'ebook',
    img: '',
    stock: 1500,
    description: 'Descripción de la guía',}
]

export const getProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        }, 600)   
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 600)
    })
}