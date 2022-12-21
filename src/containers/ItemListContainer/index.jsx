import React from "react";
import Item from "../../componentes/Item";
import './styles.scss';

const ItemListContainer = () => {
    return (
        <div className="ItemListContainer">
            <Item title={'Titulo Producto 1'}/>
            <Item title={'Titulo Producto 2'}/>
            <Item title={'Titulo Producto 3'}/>
            <Item title={'Titulo Producto 4'}/>
            <Item title={'Titulo Producto 5'}/>
            <Item title={'Titulo Producto 6'}/>
            <Item title={'Titulo Producto 7'}/>
            <Item title={'Titulo Producto 8'}/>
        </div>
    )
}

export default ItemListContainer