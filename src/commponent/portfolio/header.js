import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import header from './header.module.scss'


const Header = () => {
  const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }`)
  return (
    <div className={header.backgroundHeader}>


      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Mr Bhati</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">

              <li class="nav-item">
                <Link to="/" activeClassName={header.activeClass}>Home </Link>
              </li>

              <li class="nav-item">
                <Link to="/about" activeClassName={header.activeClass}>About</Link>
              </li>

              <li class="nav-item">
                <Link to="/test" activeClassName={header.activeClass}>Test</Link>
              </li>

              <li class="nav-item">
                <Link to="/blog" activeClassName={header.activeClass}>Blog</Link>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;