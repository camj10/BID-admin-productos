import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const ProductoDetalle = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState({})

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/producto/${id}`);
            setProducto(respuesta.data);
        }

        getData();

    }, [id])

    return (
        <div className="card">
            <div className="card-header">
                Detalle de la Producto
            </div>
            <div className="card-body">
                <h5 className="card-title">Titulo: {producto.titulo}</h5>
                <p className="card-text">El producto es esta {producto.precio} y su descripcion es {producto.descripcion}</p>
                <Link className="btn btn-primary" to="/productos" >Volver</Link>
            </div>
        </div>
    )
}

export default ProductoDetalle