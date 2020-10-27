//componente principal
import React from 'react';
import Head from 'next/head';
import Cabecera from './Header'
import {Global, css} from '@emotion/core'

const Layout_Principal = props => {
    return ( 
    < div className= "ui container">    
    <Global
    //estilos globales

    styles={
        css`:root{
            --gris: #3d3d3d;
            --gris2: #6F6F6F;
            --gris3: #e1e1e1
            --naranja: #DA552F;
        }
        h1{
            text:center;
        }
        
    `}
    />
    <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <title>Search Product</title>
         <link rel="shortcut icon" href="/logo.png" />
         <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.0.4/semantic.min.js" integrity="sha512-UjBAJccqSXAjUZHtp65XvPKXq7ESEJzN6dFNeaUv2j2y3xt3hKH4Mvt7YLlczlZyPdbBaEM/ZnF8rDSY8mX6sg==" crossOrigin="anonymous"></script>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.0.4/semantic.css" integrity="sha512-5STKL/lj2BI8fAWLtnoZ5AhqvXfIbElKUtTzkI4FyRcnLmKBH2ToWdNf2mDY/5NN4cc4nCRoOoN8fmAAf/wGrA==" crossOrigin="anonymous" />
         <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.0.4/semantic.js" integrity="sha512-aTGVgmeCdnnptV/DH6nIkgcQX7kkqUhwKogoA5ha4JWJBHjryTwNyIbAAGaHa01yBBB9kQed0hmH2iSSsW7SIg==" crossOrigin="anonymous"></script>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.0.4/semantic.min.css" integrity="sha512-qcO42W/LucepWxTfD4BFQAR47jeFZW3s14PQoh1v327z65K0bOp8HiTXeLdJXzZB4U9IyKwxkW2vj/W2U1fRBA==" crossOrigin="anonymous" />
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.0.4/components/icon.min.css" integrity="sha512-9P8+7mBxu0+UPN9obcVU7yHq+m7lWUWM9rHFLZwd2OeFfsMFCDKofbhWNXik8v0RrZl/ga2sAmxYZwbxxDQysw==" crossOrigin="anonymous" />
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.0.4/components/icon.css" integrity="sha512-HEVX3rU230fJkujOrzaLbtf12O5EaBltPNCxaedKaRAKriIpLoUpg5d9ni3gl22B0H193hGSDls/4t5zwiaWEQ=="crossOrigin="anonymous" />
    </Head>
      < Cabecera />
        <main>
            {props.children}
        </main>  
    </div>
     );
}
 
export default Layout_Principal;