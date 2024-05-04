import React, { useState } from "react";
import BlogCard from "./BlogCard";
import thumbnail1 from "../../assets/images/blog1.jpg";
import thumbnail2 from "../../assets/images/blog2.jpg";
import thumbnail3 from "../../assets/images/blog3.jpg";
import thumbnail4 from "../../assets/images/blog4.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Editor from "../../components/Editor";
import "react-quill/dist/quill.snow.css";
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
  const [form, setForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [filePreview, setFilePreview] = useState("");
  const toggleForm = () => {
    setForm(!form);
  };
  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
  }

  const admin = useSelector((state) => state.auth.admin);
  return (
    <div className="mt-[30px]">
      {admin && (
        <div className="items-center flex justify-center">
          {form ? (
            <button className="admin-btn" onClick={toggleForm}>
              go back
            </button>
          ) : (
            <button className="admin-btn" onClick={toggleForm}>
              + Add a blog
            </button>
          )}
        </div>
      )}
      <section>
        {form ? (
          <>
           
            <form onSubmit={createNewPost} className="max-w-md mx-auto">
            {filePreview && (
                <div className=" flex justify-center">
                  <img
                    src={filePreview}
                    alt="Selected file"
                    className="max-w-[470px]"
                  />
                </div>
              )}
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 block w-full mt-4 focus:outline-none focus:border-primary"
              />
              <input
                type="file"
                onChange={(ev) => {
                  setFiles(ev.target.files);
                  // Update state to store the selected file
                  const selectedFile = ev.target.files[0];
                  if (selectedFile) {
                    // Create a temporary URL for the selected file
                    const filePreviewUrl = URL.createObjectURL(selectedFile);
                    // Update state to store the file preview URL
                    setFilePreview(filePreviewUrl);
                  }
                }}
                className="block w-full mt-4 focus:outline-none"
              />
             

              <Editor value={content} onChange={setContent} className="mt-4" />
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  style={{ marginTop: "5px" }}
                  className="admin-btn"
                >
                  Create Post
                </button>
              </div>
            </form>
          </>
        ) : (
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
              <h3 className="text-center font-bold mt-16">
                No posts available
              </h3>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
