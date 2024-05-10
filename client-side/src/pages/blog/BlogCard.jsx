import React from "react";
import { formatDate } from "../../../utils/formatDate";

const BlogCard = ({post}) => {
  return (
    <div className="w-full flex space-x-4 mb-12">
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src={post.thumbnail}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col w-[65%]">
        <p className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-textColor font-[700]">
          {post.title}
        </p>
        <div className="text-sm items-center pb-2 text-teritory border-b border-solid">
          <p >@admin</p>
          {/* <div className="flex space-x-2 text-sm">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div> */}
          {
            formatDate("03-03-2020")
          }
        </div>
        <p className="text-[16px] leading-7 font-[400] text-textColor">
          {post.desc.slice(0, 300)} <span className="text-sm text-secondary">...Read more</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
