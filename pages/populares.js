import React, { useEffect, useState, useContext } from "react";
import styled from "@emotion/styled";
import Layout from "../components/layouts/layouts";
import DetallesProducto from "../components/layouts/DetallesProducto";
import { FirebaseContext } from "../firebase";
import useProductos from "../hooks/useProducto";

export default function Populares() {
const {productos}= useProductos('votos');
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
  );
}
