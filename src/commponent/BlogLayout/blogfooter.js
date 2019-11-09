import React from 'react'
import { Link } from 'gatsby';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { IconContext } from "react-icons";
import BlogFooterstyle from './blogfooter.module.scss'
const BlogFooter = () => {
    return (
        <div className={BlogFooterstyle.footer_contener}>

            <div class=" justify-content-center">

                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <Link class="nav-link" className={BlogFooterstyle.socalicon_link}><IconContext.Provider value={{ color: "rebeccapurple", size: "2em" }}>
                            <div>
                                <FaLinkedin />
                            </div>
                        </IconContext.Provider></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" className={BlogFooterstyle.socalicon_link}><IconContext.Provider value={{ color: "rebeccapurple", size: "2em" }}>
                            <div>
                                <GoMarkGithub />
                            </div>
                        </IconContext.Provider></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" className={BlogFooterstyle.socalicon_link}><IconContext.Provider value={{ color: "rebeccapurple", size: "2em" }}>
                            <div>
                                <FaTwitter />
                            </div>
                        </IconContext.Provider></Link>
                    </li>
                </ul>

            </div>
            <div className={BlogFooterstyle.copyrights}>
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <span className={BlogFooterstyle.design_by}> Design By surendra Bhati </span>
                        </div>
                        <div class="col-6">
                            <span className={BlogFooterstyle.copyright}> ©2019 Mr. Bhati </span>
                        </div>
                    </div>
                </div></div>
        </div>
    )
}

export default BlogFooter