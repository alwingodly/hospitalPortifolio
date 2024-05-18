import React from "react";
import { formatDate } from "../../../utils/formatDate";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/Variants";
const BlogCard = ({ post }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      {/* Thumbnail Section */}
      <motion.div
       variants={fadeIn("top", 0, 3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.1 }}
      className="col-span-1 md:col-span-1 flex justify-center items-center">
        <img
          src={post.thumbnail}
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Content Section */}
      <div className="col-span-2 flex flex-col md:col-span-2">
        <p className="text-lg lg:text-xl font-semibold">{post.title}</p>
        <div className="lg:text-base flex items-center py-2 border-b border-solid">
          <p className="mr-2 text-sm text-secondary">@admin</p>
          <p className="text-secondary text-sm">{formatDate("03-03-2020")}</p>
        </div>

        {/* Description for large screens */}
        <p className="text-base lg:text-md leading-7 font-normal text-textColor mt-2 hidden lg:block w-full">
          {post.desc.slice(0, 280)}
          {post.desc.length > 280 && (
            <span className="text-sm text-secondary">...Read more</span>
          )}
        </p>

        {/* Description for medium screens */}
        <p className="text-base lg:text-md leading-7 font-normal text-textColor hidden md:block lg:hidden xl:hidden">
          {post.desc.slice(0, 150)}{" "}
          {post.desc.length > 150 && (
            <span className="text-sm text-secondary">...Read more</span>
          )}
        </p>

        {/* Description for small screens */}
        <p className="text-base lg:text-md leading-7 font-normal text-textColor hidden sm:block md:hidden lg:hidden xl:hidden">
          {post.desc.slice(0, 100)}{" "}
          {post.desc.length > 100 && (
            <span className="text-sm text-secondary">...Read more</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
