import React from 'react';
import Head from 'next/head'
import Header from './Header'
const Master_layout = ({children}) => {
    return ( 
        <div className="background">
                  <Head>
                      <title>Send Image </title>
                      <link rel="stylesheet" href="https://unpkg.com/papercss@1.8.1/dist/paper.min.css"/>
                       <link rel="stylesheet" href="https://unpkg.com/papercss@1.8.1/dist/paper.css"/>
                  </Head>
                     <Header/>
                  <div className="paper container background">
                        {children}
                  </div>

        </div>
     );
}
 
export default Master_layout;