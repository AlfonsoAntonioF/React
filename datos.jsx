const guias = [
    {id: "1", 
    name: "Guia de Preparación para el Examen de Admisión- Basico", 
    description:"Descripcion del Guia 1", 
    precio: 175.00 , 
    area: "Ingeniería y ciencias exactas", 
    image:"ingeBasico.png", 
    categoria:"exactas"},
    {id: "2", name: "Guia de Preparación para el Examen de Admisión- Clasico", description:"Descripcion del Guia 2", precio: 253.00 ,area: "Económico-administrativas", image:"economicoClasico.png", categoria:"admin"},
    {id: "3", name: "Guia de Preparación para el Examen de Admisión- Premium", 
    description:"Descripcion del Guia 3", precio: 123.00 ,area: "Ciencias sociales y humanidades", 
    image:"socialesPremium.png", categoria:"humanidades"},
    {id: "4", name: "Guia de Preparación para el Examen de Admisión- Basico", description:"Descripcion del Guia 4", precio: 234.00 ,area: "Ciencias naturales y de la salud", image:"naturalesBasico.png", categoria:"naturales"}
  ]

  export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(guias)
        },200)
    })
  }

  export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(guias.find(
                pro => pro.id === productId
            ))
        },200)
    })
  }

  export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(guias.filter(
                pro => pro.categoria === productCategory
            ))
        },100)
    })
  }