import React from 'react'
import BlogHeader from './bogheader'
import BlogFooter from './blogfooter'
import BLogLayoutSyle from './bloglayout.module.scss'

import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogLayout = () => {

    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
         edges{
           node{
             frontmatter{   
               title
               date
             }
             fields{
               slug
             }
           }
         }
       }
     }
    `)
    console.log(data)
    // const author_profile = require('https://surendrabhati.com/img/img21.jpg');

    return (
        <div>
            <BlogHeader></BlogHeader>

            {/* <div className={BLogLayoutSyle.add_content_top_full_width}>
                <h2>Add content</h2>
            </div> */}
            <div class="container" >
                <div class="row">
                    <div class="col-lg-9  col-sm-12 ">
                        {data.allMarkdownRemark.edges.map((edge) => {
                            return (
                                <Link to={`./blog/${edge.node.fields.slug}`} className={BLogLayoutSyle.post_read_link}>
                                    
                                    <div class="container" className={BLogLayoutSyle.blog_post_contener}>
                                    <spane href="#"  className={BLogLayoutSyle.read_time}>6 min read</spane>
                                        <h4 className={BLogLayoutSyle.post_title}>{edge.node.frontmatter.title}</h4>

                                        <div class><p class="line_clamp" className={BLogLayoutSyle.post_content}>Gatsby’s rich data plugin ecosystem lets you build sites with the data you want — from one or many sources: Pull data from headless CMSs, SaaS services, APIs, databases, your file system, and more directly into your pages using GraphQL .... </p></div>
                                        <div class="d-flex flex-row">
                                            <div class="p-2" ><Link className={BLogLayoutSyle.post_author}>Surendra Bhati</Link>&nbsp;</div>
                                            <div class="p-2" className={BLogLayoutSyle.post_date}>On {edge.node.frontmatter.date}</div>
                                        </div>
                                    </div>

                                </Link>
                            )
                        })}

                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-lg-3  tags_div">
                        <div class="container" className={BLogLayoutSyle.side_content}>
                            <h4 className={BLogLayoutSyle.side_content_heading}>Popular tags</h4>

                            <ul className={BLogLayoutSyle.tags}>
                                <li><Link className={BLogLayoutSyle.tag}>gatsby</Link></li>
                                <li><Link className={BLogLayoutSyle.tag}>React.js</Link></li>
                                <li><Link className={BLogLayoutSyle.tag}>HTML</Link></li>
                                <li><Link className={BLogLayoutSyle.tag}>web development</Link></li>
                                <li><Link className={BLogLayoutSyle.tag}>Mobile</Link></li>
                            </ul>
                        </div>


                        <div class="container" className={BLogLayoutSyle.side_content}>
                            <h4 className={BLogLayoutSyle.side_content_heading}>Post Writer</h4>

                            <ul className={BLogLayoutSyle.author_list}>
                                <li>
                                    <div class="row">
                                        <div class="col-3">

                                            <img className={BLogLayoutSyle.author_image} src="https://surendrabhati.com/img/img21.jpg" />
                                        </div>
                                        <div class="col-9">
                                            <span className={BLogLayoutSyle.author_name}> Surendra Bhati</span>
                                            <span className={BLogLayoutSyle.author_post}> Web Developer</span>
                                            <hr></hr>

                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="row">
                                        <div class="col-3">

                                            <img className={BLogLayoutSyle.author_image} src="https://surendrabhati.com/img/img21.jpg" />
                                        </div>
                                        <div class="col-9">
                                            <span className={BLogLayoutSyle.author_name}> Surendra Bhati</span>
                                            <span className={BLogLayoutSyle.author_post}> Web Developer</span>
                                            <hr></hr>

                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="row">
                                        <div class="col-3">

                                            <img className={BLogLayoutSyle.author_image} src="https://surendrabhati.com/img/img21.jpg" />
                                        </div>
                                        <div class="col-9">
                                           <Link> <span className={BLogLayoutSyle.author_name}> Surendra Bhati</span></Link>
                                            <span className={BLogLayoutSyle.author_post}> Web Developer</span>
                                            <hr></hr>

                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="row">
                                        <div class="col-3">

                                            <img className={BLogLayoutSyle.author_image} src="https://surendrabhati.com/img/img21.jpg" />
                                        </div>
                                        <div class="col-9">
                                            <span className={BLogLayoutSyle.author_name}> Surendra Bhati</span>
                                            <span className={BLogLayoutSyle.author_post}> Web Developer</span>
                                            <hr></hr>

                                        </div>
                                    </div>
                                </li>
                           </ul>
                        </div>
                    </div>

                </div>
            </div>


            <hr className={
                BLogLayoutSyle.hr_divider
            }></hr>

            <BlogFooter></BlogFooter>
        </div>
    )
}
export default BlogLayout
