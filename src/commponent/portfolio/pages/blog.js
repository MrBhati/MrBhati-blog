import React from 'react'
import Layout from '../commponent/BlogLayout/bloglayout'
import {Link, graphql,useStaticQuery} from 'gatsby'


const Blogpage = () => {
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
    return(
     
         <Layout>
         <h1>post list</h1>
         <ol>
             {data.allMarkdownRemark.edges.map((edge) =>{
                 return(
                     <li>
                      
                         <h2>{edge.node.frontmatter.title}</h2>
                         <h4>{edge.node.frontmatter.date}</h4>
                         <Link to={`/blog/${edge.node.fields.slug}`}> Read More</Link>
                     </li>
                 )
             })}
         </ol>
         {/* <h1>{data.allMarkdownRemark.edges.node.frontmatter.title}</h1>
         <h3>Date: {data.allMarkdownRemark.edges.node.frontmatter.date}</h3> */}
         <hr/>
             </Layout>  
       
      
      
    )
}

export default Blogpage