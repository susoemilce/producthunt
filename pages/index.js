import React  from 'react'
import Layout from '../components/layouts/layouts';
import DetallesProducto from '../components/layouts/DetallesProducto';
import useProductos from '../hooks/useProducto';

const Home = () => {

  const { productos } = useProductos('creado');

  return (
    <div>
      <Layout>
        <div className="listado-productos">
            <div className="contenedor">
              <ul className="bg-white">
                  {productos.map(producto => (
                      <DetallesProducto
                          key={producto.id}
                          producto={producto}
                      />
                  ))}
              </ul>
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home