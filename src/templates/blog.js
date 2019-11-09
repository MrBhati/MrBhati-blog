import React from 'react'
import BlogHeader from '../commponent/BlogLayout/bogheader'
import BlogFooterstyle from '../commponent/BlogLayout/blogfooter.module.scss'
import BlogPostStyle from '../templates/blogpost.module.scss'
import { graphql, Link } from 'gatsby'
import '../style/index.scss'
import { FaKickstarter } from 'react-icons/fa';

export const query = graphql`
query($slug: String!) {
markdownRemark(fields: { slug: { eq: $slug } }){
    frontmatter { 
    title
    date
    }
    html
}
}
`
const blog = (props) => {
  return (
    <div className={BlogPostStyle.post}>
      <BlogHeader></BlogHeader>

      {/* ----------------------------------------------------------------  auther details  ------------------------------------------------------------------  */}
      <div class="container">
        <div class={BlogPostStyle.auther_contener}>
          <div class="row justify-content-md-center">
            <div class="col col-sm-12 col-lg-8">
              <div class="row">
                <div class="cal-md-2">
                  <img className={BlogPostStyle.author_image} src="https://surendrabhati.com/img/img21.jpg" />
                </div>
                <div class="cal-md-10">
                  <span className={BlogPostStyle.author_name}> Surendra Bhati</span>
                  {/* <span className={BlogPostStyle.author_post}> &nbsp; Web Developer</span> */}
                  <span className={BlogPostStyle.author_discription}> Hello, I'm Bhati Surendra, Fresher web developer specializing in front end development. </span>
                  <span className={BlogPostStyle.author_post_read_time}>9 min read </span>
                  <span className={BlogPostStyle.author_post_date}> · August 2nd 2019</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className={ BlogPostStyle.blanck_divider }></div>
 {/* -----------------------------------------------------------------------------  Bblog post ----------------------------------------------------------------------  */}
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-8">
             <h1 className={ BlogPostStyle.post_title }>{props.data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>

          </div>
        </div>
      </div>
      <div className={ BlogPostStyle.blanck_divider }></div> 
      {/* ----------------------------------------------------------------  news latter  ------------------------------------------------------------------  */}
      <div class="container" >
        <div class="row justify-content-md-center">
          <div class="col col-lg-8">
            <div className={BlogPostStyle.news_latter}>
              <span className={BlogPostStyle.news_latter_title}>Enjoyed this post? Ask any Qustion for post to auther</span>
              <form>
                <div class="form-group">
                  <input type="text" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write Qustion" className={BlogPostStyle.news_latter_textfiled} />
                  <button type="submit" className={BlogPostStyle.news_latter_btn}>Send Queary</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------  post next prev navigation  ------------------------------------------------------------------  */}
      <hr className={BlogPostStyle.hr_divider}></hr>
    
      <div class="container bottom_navigation" >
        <div class="row justify-content justify-content-md-center">
          <div class="col-lg-4 col-md-6 bottom_navigation">
            <div className={ BlogPostStyle.next_previous_btn }>
            <h6 className={BlogPostStyle.post_previous}>Previous</h6>
            </div>
            <Link className={BlogPostStyle.post_nav_title_previous}>What is JSX pragma? </Link>
         
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="float-right" className={ BlogPostStyle.next_previous_btn}>
            <h6 class="float-right" className={BlogPostStyle.post_next}>Next</h6> 
            </div>
        
            <Link className={BlogPostStyle.post_nav_title_next}>Gatsby Gazette: The August Edition.?</Link> 
             {/* <h3 class="float-right"className={BlogPostStyle.post_next}>  Next </h3>
           <Link className={BlogPostStyle.post_nav_title}> Gatsby Gazette: The August Edition.?</Link> */}
          </div>
          
        </div>

      </div>

      <div class="container aabcd" >
          <div class="row">
          <div class="col-6">
          <Link className={BlogPostStyle.post_previous_small}>Previous</Link>
          </div>
          <div class="col-6">
          <Link class="float-right" className={BlogPostStyle.post_next_small}>Next</Link> 
          </div>
          </div>
        </div>

      <div className={ BlogPostStyle.blanck_divider }></div>


      <div className={BlogFooterstyle.copyrights}>
                <div class="container">
                <div class="row justify-content-md-center">
  
                        <div class="col-sm-4">
                            <span className={BlogFooterstyle.design_by}> Design By surendra Bhati </span>
                        </div>
                        <div class="col-sm-4">
                            <span className={BlogFooterstyle.copyright}> ©2019 Mr. Bhati </span>
                        </div>
                    </div>
                </div></div>

    </div>


  )
}

export default blog