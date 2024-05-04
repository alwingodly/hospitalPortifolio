import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText , setReviewText] = useState("")

  const handleSubmitReview = async(e)=>{
   e.preventDefault()
  }
  return (
    <form action="">
      <div>
        <h3 className="text-textColor text-[16px] leading-6 font-semibold mb-4 mt-0">How would you rate us the overall Experience?</h3>
        <div>
          {[...Array(5).keys()].map((index) => {
            const starValue = index + 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  (starValue <= rating && hover) || (starValue <= hover)
                    ? "text-yellow-500"
                    : "text-tertiary"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-textColor text-[16px] leading-6 font-semibold mb-4 mt-0">Share your feedback or sugguestions</h3>
       <textarea className="border border-solid border-secondary focus:outline outline-primary w-full px-4 py-3 rounded-md"
       rows = "5"
       placeholder="Write your message"
       onChange={e => setReviewText(e.target.value)}
       >

       </textarea>
      </div>
      <button type="submit" className="btn" onClick={handleSubmitReview}>Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
