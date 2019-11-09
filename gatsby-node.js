const path = require('path')
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        //console.log(JSON.stringify(node, undefined, 4))
        console.log('@@@@@@@@@', slug)
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
     query{
         allMarkdownRemark {
             edges {
             node {
                 fields {
                     slug
                 }
             }
            }   
         }
     }
    `)
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
    // result.data.allMarkdownRemark.edges.forEach(edge => {
    //     createPage({
    //       // Path for this page — required
    //       path: `/blog/${edge.node.fields.slug}`,
    //       component: blogTemplate,
    //       context: {
    //         // Add optional context data to be inserted
    //         // as props into the page component..
    //         //
    //         // The context data can also be used as
    //         // arguments to the page GraphQL query.
    //         //
    //         // The page "path" is always available as a GraphQL
    //         // argument.
    //       },
    //     })
    //   })
}