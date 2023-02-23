import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductoForm from '../../components/ProductoForm'
import axios from 'axios';
import Swal from 'sweetalert2'

const ProductoEditar = () => {
    const navigate = useNavigate();

    const initialValues = {
        titulo: '',
        precio: 0,
        descripcion: '',
      }

    const { id } = useParams()
    const [producto, setProducto] = useState(initialValues)

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/producto/${id}`);
            setProducto(respuesta.data);
        }

        getData();

    }, [id])

    const actualizarProducto = async(values, actions) => {

        try {
            const respuesta = await axios.put(`${process.env.REACT_APP_API_URL}/producto/${id}`, values);
            console.log(respuesta);
            if (respuesta.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'GENIAL!!!',
                    text: `Se ha actualizado ${respuesta.data.nombre} perfectamente!`,
                });

                navigate('/productos');
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
            <h1>Editar Producto</h1>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6">
                    <ProductoForm 
                        initialValues={producto}
                        botonTexto="Actualizar"
                        onSubmit={actualizarProducto}
                    />
                </div>
            </div>
        </>
    )
}

export default ProductoEditar