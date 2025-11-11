import React from 'react'
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const Blog = () => {

    const posts = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/assets/images/catg.webp`,
      date: "Apr 10",
      author: "John Mathew",
      title: "Signature Selections in Fashion",
      description:
        "Mauris augue neque gravida in. Habitasse platea dictumst vestibulum rhoncus est pellentesque…",
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/assets/images/catg2.webp`,
      date: "Apr 10",
      author: "John Mathew",
      title: "Collection For Every Occasion",
      description:
        "Habitant morbi tristique senectus et netus et malesuada fames ac. Aenean et…",
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/assets/images/catg.webp`,
      date: "Apr 10",
      author: "John Mathew",
      title: "Collection For Every Occasion",
      description:
        "Habitant morbi tristique senectus et netus et malesuada fames ac. Aenean et…",
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/assets/images/catg.webp`,
      date: "Apr 10",
      author: "John Mathew",
      title: "Collection For Every Occasion",
      description:
        "Habitant morbi tristique senectus et netus et malesuada fames ac. Aenean et…",
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/assets/images/catg.webp`,
      date: "Apr 10",
      author: "John Mathew",
      title: "Collection For Every Occasion",
      description:
        "Habitant morbi tristique senectus et netus et malesuada fames ac. Aenean et…",
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/assets/images/catg2.webp`,
      date: "Apr 10",
      author: "John Mathew",
      title: "Collection For Every Occasion",
      description:
        "Habitant morbi tristique senectus et netus et malesuada fames ac. Aenean et…",
    },
  ];



  const smallPosts = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/assets/images/catg1.webp`,
      date: "Apr 10",
      title: "Signature Selections in Fashion",
      desc: "Mauris augue neque gravida in. Habitasse platea...",

    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/assets/images/catg3.webp`,
      date: "Apr 10",
      title: "Collection for Every Occasion",
      desc: "Habitant morbi tristique senectus et netus et...",
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/assets/images/catg4.webp`,
      date: "Mar 22",
      title: "Sprinting Through Style",
      desc: "Cras ornare arcu dui vivamus arcu felis...",
    },
  ];



  return (
    <>
      <div  className='container'>
    <p  className='custom-contact-text'>Blog</p>
   </div>




  <div className="container my-5">
        <div className="row g-4">
          {/* Sidebar */}
          <div className="col-lg-3 col-md-12">
            <div className="sidebar">
              <h4 className="mb-3">Categories</h4>
              <ul className="list-unstyled sidebar-list">
                <li>Home <span>+</span></li>
                <li>Shop <span>+</span></li>
                <li>Blog <span>+</span></li>
                <li>Pages <span>+</span></li>
                <li>About</li>
              </ul>

              <h4 className="mt-4 mb-3">Tags</h4>
              <div className="tags">
                {["Boots", "Formal", "Loafer", "Sneakers", "Sports"].map(
                  (tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  )
                )}
              </div>
              <h3 className="mb-4 recent-title mt-5">Recent posts</h3>
              <div className="small-posts ">
                {smallPosts.map((post) => (
                  <div className="d-flex mb-4" key={post.id}>
                    <img src={post.img} alt={post.title} className="small-img" />
                    <div className="ms-3">
                      <p className="date-text">{post.date}</p>
                      <h6 className="fw-bold">{post.title}</h6>
                      <p className="text-muted small">{post.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Blog Posts */}
          <div className="col-lg-9 col-md-12">
            <div className="row g-4">
              {posts.map((post) => (
                <div className="col-md-6" key={post.id}>
                  <div className="blog-card">
                    <img src={post.image} alt={post.title} className="img-fluid" />
                    <div className="blog-info mt-3">
                      <p className="text-muted small mb-2">
                        <FaCalendarAlt className="me-2" /> {post.date} &nbsp; | &nbsp;
                        <FaUser className="me-2" /> {post.author}
                      </p>
                      <h5>{post.title}</h5>
                      <p>{post.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
    
    </>
  )
}

export default Blog