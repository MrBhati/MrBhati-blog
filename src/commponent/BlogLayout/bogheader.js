import React from 'react'
import BlogStyle from './blogheader.module.scss'
import {Link} from 'gatsby'
const BlogHeader = () =>    
{
    return(
        <div classN className={BlogStyle.blog_header}>
           <div><h2 className={BlogStyle.top_center_heading}>Mr. Bhati</h2></div> 
           <nav class="navbar navbar-expand-lg navbar-light bg-light navStyle">
  <a class="navbar-brand" className={BlogStyle.navbar_left_heading}  href="#">Mr. Bhati</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link className={BlogStyle.nav_link} to="" >Programing</Link>
      </li>
      <li class="nav-item">
        <Link className={BlogStyle.nav_link} to="" >Gaming</Link>
      </li>
      <li class="nav-item">
        <Link className={BlogStyle.nav_link} to="" >Life Style</Link>
      </li>
    </ul>

    
  </div>
</nav>
        </div>
    )
}

export default BlogHeader