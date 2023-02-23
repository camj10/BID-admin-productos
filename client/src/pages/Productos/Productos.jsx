import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import DeleteButton from '../../components/DeleteButton';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    
    const getData = async () => {
      const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/producto`);
      setProducto(respuesta.data);
    }

    getData();
  
  }, []);
  
  const quitarProducto = (productoID) => {
    setProducto(productos.filter((producto) => producto._id !== productoID));
  }


  return (
    <>
      <h1>Listado de Productos</h1>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          { productos.map( (producto, index) => <tr key={index} >
            <td>{ producto.titulo }</td>
            <td>{ producto.edad }</td>
            <td>{ producto.descripcion }</td>
            <td>
              <Link className="btn btn-primary" to={`/productos/${producto._id}`}>Detalle</Link>   
              <Link className="btn btn-success ms-2" to={`/productos/${producto._id}/editar`}>Editar</Link>   
              <DeleteButton id_producto={producto._id} successCallback={quitarProducto} />
            </td>
          </tr> ) }
        </tbody>
      </table>
      <Link to="/productos/agregar" className="btn btn-primary">Agregar Producto</Link>
    </>
  )
}

export default Productos