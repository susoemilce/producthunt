  
import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Boton from '../ui/Boton';
import { FirebaseContext } from '../../firebase';

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.a`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
`;

const Header = () => {


    const { usuario, firebase } = useContext(FirebaseContext);

    return ( 
        <header
           className="head"
        >
            <ContenedorHeader>
                <div
                   className="adentro"
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>
                    

                    <Buscar />

                    <Navegacion />
                </div>

                <div
                 className="adentro"
                >
                    { usuario ? (
                        <>
                            <p
                              className="pa"
                            >Hola: {usuario.displayName} </p>
                            <Boton
                                bgColor="true"
                                onClick={() => firebase.cerrarSesion() }
                            >Cerrar Sesión</Boton>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Boton
                                    bgColor="true"
                                >Login</Boton>
                            </Link>
                            <Link href="/crear-cuenta">
                                <Boton>Crear Cuenta</Boton>
                            </Link>
                        </>
                    ) }
                </div>
            </ContenedorHeader>
        </header>
     );
}
 
export default Header;