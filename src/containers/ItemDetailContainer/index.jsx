import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../componentes/ItemDetail';
import productJson from '../../data/products.json';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()

  
  useEffect(()=> {

   
    const getProductDetail = () => {

      const obtenerProducto = new Promise((res, rej) => {
        setTimeout(()=> {
          res(productJson)
        }, 3000)
      })

      obtenerProducto
      .then( productos => {
        if (id) { 
          const detalleProducto = productos.find(producto => producto.id.toString() === id) 
          
          setDetail(detalleProducto) 
        }
      })
      .catch(error => console.log(error))
    }

    getProductDetail()


  }, [id])

  return (
    <div>
        {
          Object.keys(detail).length === 0 
            ? <h2>Loading ...</h2>
            : <ItemDetail detail={detail}/>
        }
    </div>
  )
}

export default ItemDetailContainer