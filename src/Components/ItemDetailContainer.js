// import { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import products from '../data/products.json'

export default function ItemDetailContainer ({title}){
  const [detalle,setDetalle] = useState([]);
  const {id} =useParams();

  useEffect(()=>{
    const promesa = new Promise((resolve,rejected)=>{
      resolve(products)
    })
    promesa.then(result=>{
      if(id){
      const print=result.filter(prod => prod.id === Number(id))
      setDetalle(print)
      }
    })
  },[id])


  return (
    <>
    <h1 className="title">{title}</h1>
    {detalle.map(({product,img,price,description,id})=>{
      return(
          <div key={id} className="product">
            <h3>{product}</h3>
            <img src={img} alt="monitor" />
            <span>$ {price}</span>
            <p>{description}</p>
            <button className="btn__prod">Agregar al carrito</button>
            <Link to='/'><button className="btn__prod">Volver</button></Link>
          </div>
      )
    })}
    </>
  )
}