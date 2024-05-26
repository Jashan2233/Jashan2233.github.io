import { context } from "@/context/context";
import { useContext } from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      category: "ChillAB",
      title: " Airbnb Clone Express/React",
      img: "/img/news/1.jpg",
    },
    {
      id: 2,
      category: "Biscord",
      title: "Discord Clone Flask/React",
      img: "/img/news/Biscord.png",
    },
    {
      id: 3,
      category: "Techsy",
      title: "Etsy Clone Flask/React",
      img: "/img/news/techsy.png",
    },
  ];
  const { modalToggle, setBlogModal } = useContext(context);
  return (
    <div className="iknow_tm_news">
      <div className="iknow_tm_main_title">
        <span>Projects</span>
        <h3>My projects</h3>
      </div>
      <div className="news_list">
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <div className="list_inner">
                <div className="image">
                  <img src="/img/thumbs/37-27.jpg" alt="image" />
                  <div className="main" data-img-url={blog.img} />
                  <a
                    className="iknow_tm_full_link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      modalToggle(true);
                      setBlogModal(blog);
                    }}
                  />
                </div>
                <div className="details">
                  <span className="category">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setBlogModal(blog);
                      }}
                    >
                      {blog.category}
                    </a>
                  </span>
                  <h3 className="title">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setBlogModal(blog);
                      }}
                    >
                      {blog.title}
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Blog;
