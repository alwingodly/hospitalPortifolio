import React, { useState } from "react";

import thumbnail1 from "../assets/blog1.jpg";
import thumbnail2 from "../assets/blog2.jpg";
import thumbnail3 from "../assets/blog3.jpg";
import thumbnail4 from "../assets/blog4.jpg";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: thumbnail1,
    title: "This is the tittle of the very first post in this blog",
    desc: "This is the tittle of the very first post in this blog This is the tittle of the very first post in this blog This is the tittle of the very first post in this blog This is the tittle of the very first post in this blog",
    autherID: 1,
    category: "Agriculture",
  },
  {
    id: "2",
    thumbnail: thumbnail2,
    title: "This is the tittle of the very first post in this blog",
    desc: "This is the tittle of the very first post in this blog This is the tittle of the very first post in this blog This is the tittle of the very first post in this blog This is the tittle of the very first post in this blog",
    autherID: 2,
    category: "Agriculture",
  },
  {
    id: "3",
    thumbnail: thumbnail3,
    title: "This is the tittle of the very first post in this blog",
    desc: "This is the tittle of the very first post in this blog This is the tittle of the very first post in this blog This is the tittle of the very first post in this blog This is the tittle of the very first post in this blog",
    autherID: 3,
    category: "Agriculture",
  },
  {
    id: "4",
    thumbnail: thumbnail4,
    title: "This is the tittle of the very first post in this blog",
    desc: "This is the tittle of the very first post in this blog This is the tittle of the very first post in this blog This is the tittle of the very first post in this blog This is the tittle of the very first post in this blog",
    autherID: 4,
    category: "Agriculture",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
      {posts.length > 0? <div className="container posts_container">
        {posts.map(({ id, thumbnail, category, title, desc, autherID }) => (
          <PostItem
            key={id}
            thumbnail={thumbnail}
            category={category}
            description={desc}
            title={title}
            authorID={autherID}
          />
        ))}
      </div>: <h2 className="center">No posts founds</h2>}
    </section>
  );
};

export default Posts;
