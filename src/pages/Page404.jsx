import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../Componentes/Head';

const Page404 = () => {
  return (
    <>
      <Head title="Error 404" description="Página não encontrada." />
      <div style={{ display: 'grid', placeContent: 'center', height: '100vh' }}>
        <h1 style={{ color: 'white', fontSize: '3rem' }}>
          Página não encontrada
        </h1>
        <Link
          to="/"
          style={{
            display: 'block',
            marginTop: '1rem',
            color: 'white',
            textAlign: 'center',
            fontSize: '1.5rem',
          }}
        >
          Voltar para Home
        </Link>
      </div>
    </>
  );
};

export default Page404;
