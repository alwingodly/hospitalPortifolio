import React from "react";
import { formatDate } from "../../../utils/formatDate";

const BlogCard = ({ post }) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:space-x-4 mb-12">
      <div className="md:w-[35%] md:h-[200px] flex justify-center items-center">
        <img src={post.thumbnail} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col md:w-[65%] mt-4 md:mt-0">
        <p className="text-lg lg:text-xl font-semibold">
          {post.title}
        </p>
        <div className="text-sm lg:text-base flex items-center pb-2 border-b border-solid">
          <p className="mr-2">@admin</p>
          <p>{formatDate("03-03-2020")}</p>
        </div>
        <p className="text-base lg:text-md leading-7 font-normal text-textColor hidden lg:block">
          {post.desc.slice(0, 280)} <span className="text-sm text-secondary">...Read more</span>
        </p>
        <p className="text-base lg:text-md leading-7 font-normal text-textColor hidden md:block lg:hidden xl:hidden">
          {post.desc.slice(0, 150)} <span className="text-sm text-secondary">...Read more</span>
        </p>
        <p className="text-base lg:text-md leading-7 font-normal text-textColor hidden sm:block md:hidden lg:hidden xl:hidden">
          {post.desc.slice(0, 100)} <span className="text-sm text-secondary">...Read more</span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
