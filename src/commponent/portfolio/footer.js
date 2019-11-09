import React from "react"
import {useStaticQuery, graphql} from 'gatsby'

 
const Footer = () =>{
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }
    `)
    return(
<div>Copyright 2019 {data.site.siteMetadata.author}</div>

    )
}

export default Footer