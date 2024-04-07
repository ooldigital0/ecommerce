const products = [
    {
        id:'1',
        name:'Guía Lunar',
        price: 300,
        category: 'ebook',
        img: 'https://elements-cover-images-0.imgix.net/93c6a8a5-9773-403f-a136-263e2ca6abb1?auto=compress%2Cformat&w=1370&fit=max&s=f347651283f5309f3111953f0c4bb73b',
        stock: 1500,
        description: 'Unite a los ciclos de la luna.'},

    {id: '2', name:'Guía Astrología',
    price: 300,
    category:'ebook',
    img: 'https://elements-preview-images-0.imgix.net/60e5d0c7-e9dd-4c0d-91e0-694cb7319d0f?auto=compress%2Cformat&w=1370&fit=max&s=d684aac5af3baccfbc373a34726b80e3',
    stock: 1500,
    description: 'Conoce las bases de la astrología.'},

    {id: '3', name:'Guía Ayurveda',
    price: 300,
    category:'ebook',
    img: 'https://elements-preview-images-0.imgix.net/99de8b43-c449-4525-a53e-ac064cb4f665?auto=compress%2Cformat&w=1370&fit=max&s=d26dcccf46f3b52a8f19c24a94483910',
    stock: 1500,
    description: 'Conoce tu biotipo y fluí con tu salud.'}
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