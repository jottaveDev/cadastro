import React from 'react';
import Head from '../Componentes/Head';

const Feed = () => {
  return (
    <>
      <Head title="JE | Feed" description="Página de feed." />
      <h1
        style={{
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '4rem',
          fontFamily: 'Arial',
        }}
      >
        Você está logado
      </h1>
    </>
  );
};

export default Feed;
