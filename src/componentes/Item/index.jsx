import React from "react";

const Item = ({title}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src="https://res.cloudinary.com/dml2fdgug/image/upload/v1671589327/react/serumbekim_wndclk.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Descripcion general del producto.</p>
                    <a href="/#" className="btn btn-primary">Agregar al Carrito</a>
                </div>
        </div>
    )
}

export default Item