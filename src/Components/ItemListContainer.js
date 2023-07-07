import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import products from '../data/products.json'

export default function ItemListContainer({title}) {
  const [catalogo, setCatalogo] = useState([])
  const {category}=useParams();

  useEffect(()=>{
    const promesa = new Promise ((resolve,rejected)=>{
      resolve(products)
    })
    promesa.then(result =>{
      if(category){
        setCatalogo(result.filter(prod => prod.category === category))
      }else{
        setCatalogo(result)
      }
    })

  },[category])

  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="container__products">
        {catalogo.map(({ product, img, description, stock, id }) => {
          return (
            <div key={id} className="product">
              <h3>{product}</h3>
              <img src={img} alt="monitor" />
              <p>{description}</p>
              <Link to={`/item/${id}`}><button className="btn__prod">Ver detalles del producto</button></Link>
              <span>Stock: {stock}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
