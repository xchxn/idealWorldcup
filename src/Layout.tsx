import React, { useEffect, useState } from 'react';
import './Layout.css';

type LayoutProps = {
    name: string;
  };

const Layout = ({name}: LayoutProps) => {

    return(
        <div>
            <h2>Hello, World!</h2>
            <h2>{name}</h2>
        </div>
    )
}

Layout.defalutProps = {
    name: 'master'
};

export default Layout;