import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from "./Layout";
import Tournament1 from './Tournament1'

const App:React.FC = () => {

  return (
    <>
      <Layout name="master" />
      <Tournament1 />
    </>
  );
}

export default App;
