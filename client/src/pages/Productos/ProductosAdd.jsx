import React from 'react'
import ProductoForm from '../../components/ProductoForm'
import axios from 'axios';
import Swal from 'sweetalert2'

const ProductosAdd = () => {
  const initialValues = {
    titulo: '',
    edad: 0,
    descripcion: 18
  }

  const crearProducto = async(values, actions) => {

    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/producto`, values);
        console.log(respuesta);
        if (respuesta.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'GENIAL!!!',
                text: `Se ha agregado ${respuesta.data.nombre} perfectamente!`,
            });

            actions.resetForm(initialValues);
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Ops que mal!!!',
            text: `Error: ${error?.response?.data?.message || error.message}`,
        })
    }
  }

  return (
    <>
        <h1>Agregar Producto</h1>
        <hr />
        <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
                <ProductoForm 
                    initialValues={initialValues}
                    botonTexto="Agregar"
                    onSubmit={crearProducto}
                />
            </div>
        </div>
    </>
  )
}

export default ProductosAdd