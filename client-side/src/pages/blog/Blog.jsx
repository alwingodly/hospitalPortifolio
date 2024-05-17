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
import { IoMdImages } from "react-icons/io";
import DOMPurify from 'dompurify';

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: thumbnail1,
    title: "This is the title of the very first post in this blog",
    desc: "Doctors are highly trained medical professionals...",
  },
  {
    id: "2",
    thumbnail: thumbnail2,
    title: "This is the title of the very first post in this blog",
    desc: "Doctors are highly trained medical professionals...",
  },
  {
    id: "3",
    thumbnail: thumbnail3,
    title: "This is the title of the very first post in this blog",
    desc: "Doctors are highly trained medical professionals...",
  },
  {
    id: "4",
    thumbnail: thumbnail4,
    title: "This is the title of the very first post in this blog",
    desc: "Doctors are highly trained medical professionals...",
  },
];

const Blog = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [form, setForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState(null);
  const [filePreview, setFilePreview] = useState("");
  const toggleForm = () => {
    setForm(!form);
  };

  async function createNewPost(ev) {
    ev.preventDefault();

    const sanitizedTitle = DOMPurify.sanitize(title);
    const sanitizedContent = DOMPurify.sanitize(content);

    const data = new FormData();
    data.set("title", sanitizedTitle);
    data.set("content", sanitizedContent);
    if (files && files[0]) {
      data.set("file", files[0]);
    }

    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      // Assuming the response contains the new post data
      const newPost = await response.json();
      setPosts([...posts, newPost]);
      toggleForm(); // Hide the form after submission
    }
  }

  const admin = useSelector((state) => state.auth.admin);
  return (
    <div className="mt-4 mx-4 md:mx-6 lg:mx-32">
      {admin && (
        <div className="flex justify-center">
          {!form && (
            <button className="admin-btn" onClick={toggleForm}>
              + Add a blog
            </button>
          )}
        </div>
      )}
      <section>
        {form ? (
          <>
            <h2 className="text-center mb-4 sub-heading">Add a new blog</h2>
            <form onSubmit={createNewPost} className="mx-auto md:flex md:justify-around md:items-center">
              <div className="md:w-1/2 w-full md:px-4 py-6">
                {filePreview ? (
                  <div className="flex justify-center">
                    <img src={filePreview} alt="Selected file" className="max-w-full md:max-w-[470px]" />
                  </div>
                ) : (
                  <div className="h-56 w-full border bg-softwhite border-dotted border-primary flex justify-center items-center">
                    <label htmlFor="fileUpload">
                      <IoMdImages className="h-12 w-12" />
                    </label>
                  </div>
                )}
              </div>
              <div className="md:w-1/2 w-full md:px-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(ev) => setTitle(ev.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 block w-full mt-4 focus:outline-none focus:border-primary mb-4"
                />
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,image/*"
                  onChange={(ev) => {
                    setFiles(ev.target.files);
                    const selectedFile = ev.target.files[0];
                    if (selectedFile) {
                      const filePreviewUrl = URL.createObjectURL(selectedFile);
                      setFilePreview(filePreviewUrl);
                    }
                  }}
                  className="hidden"
                  id="fileUpload"
                />
                <Editor value={content} onChange={setContent} className="mt-4" />
                <div className="flex justify-around mt-4">
                  <button type="submit" className="admin-btn mt-2 w-full md:w-auto md:mt-0">Create Post</button>
                  <button type="button" className="admin-btn" onClick={toggleForm}>Go Back</button>
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className="px-4 md:px-20 lg:px-30 min-h-[80vh]">
            {posts ? (
              posts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  <BlogCard post={post} />
                </Link>
              ))
            ) : (
              <h3 className="text-center font-bold mt-16">No posts available</h3>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
