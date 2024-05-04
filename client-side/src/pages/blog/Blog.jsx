import React, { useState } from "react";
import BlogCard from "./BlogCard";
import thumbnail1 from "../../assets/images/blog1.jpg";
import thumbnail2 from "../../assets/images/blog2.jpg";
import thumbnail3 from "../../assets/images/blog3.jpg";
import thumbnail4 from "../../assets/images/blog4.jpg";
import { Link } from "react-router-dom";
const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: thumbnail1,
    title: "This is the tittle of the very first post in this blog",
    desc: "Doctors are highly trained medical professionals who diagnose and treat illnesses, injuries, and health conditions. They undergo extensive education and training, often specializing in specific areas of medicine. Doctors provide patient care in various settings, collaborating with other healthcare professionals to ensure comprehensive treatment. They adhere to strict ethical standards and engage in continuing education to stay updated with medical advancements. Empathy, compassion, and effective communication are essential qualities for doctors, who play a vital role in promoting and maintaining the health and well-being of individuals and communities.",
  },
  {
    id: "2",
    thumbnail: thumbnail2,
    title: "This is the tittle of the very first post in this blog",
    desc: "Doctors are highly trained medical professionals who diagnose and treat illnesses, injuries, and health conditions. They undergo extensive education and training, often specializing in specific areas of medicine. Doctors provide patient care in various settings, collaborating with other healthcare professionals to ensure comprehensive treatment. They adhere to strict ethical standards and engage in continuing education to stay updated with medical advancements. Empathy, compassion, and effective communication are essential qualities for doctors, who play a vital role in promoting and maintaining the health and well-being of individuals and communities.",
  },
  {
    id: "3",
    thumbnail: thumbnail3,
    title: "This is the tittle of the very first post in this blog",
    desc: "Doctors are highly trained medical professionals who diagnose and treat illnesses, injuries, and health conditions. They undergo extensive education and training, often specializing in specific areas of medicine. Doctors provide patient care in various settings, collaborating with other healthcare professionals to ensure comprehensive treatment. They adhere to strict ethical standards and engage in continuing education to stay updated with medical advancements. Empathy, compassion, and effective communication are essential qualities for doctors, who play a vital role in promoting and maintaining the health and well-being of individuals and communities.",
  },
  {
    id: "4",
    thumbnail: thumbnail4,
    title: "This is the tittle of the very first post in this blog",
    desc: "Doctors are highly trained medical professionals who diagnose and treat illnesses, injuries, and health conditions. They undergo extensive education and training, often specializing in specific areas of medicine. Doctors provide patient care in various settings, collaborating with other healthcare professionals to ensure comprehensive treatment. They adhere to strict ethical standards and engage in continuing education to stay updated with medical advancements. Empathy, compassion, and effective communication are essential qualities for doctors, who play a vital role in promoting and maintaining the health and well-being of individuals and communities.",
  },
];
const Blog = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section>
      <div className="px-8 md:px-[200px] min-h-[80vh]">
        {posts ? (
          posts.map((post) => (
            <>
              {/* <Link to={user?`/posts/post/${post._id}`:"/login"}>
               */}
              <Link to={`/blog/${post.id}`}>
                <BlogCard key={post.id} post={post} />
              </Link>
            </>
          ))
        ) : (
          <h3 className="text-center font-bold mt-16">No posts available</h3>
        )}
      </div>
    </section>
  );
};

export default Blog;
