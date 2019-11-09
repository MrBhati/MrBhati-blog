import React from 'react'
import Header from '../commponent/portfolio/header'
import Footer from '../commponent/portfolio/footer'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import layoutstyle from './portfolio/layout.module.scss'



const Layout = (prons) => {
    return (
        <div> <Header></Header>
             <div className={layoutstyle.layout}>
           
            {
prons.children
            }
           
        </div>
        <Footer></Footer>
        </div>
       
    )
}

export default Layout