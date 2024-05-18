import React, { useState } from "react";
import thumbnail1 from "../../pages/gallary/images/b11.jpg";
import { formatDate } from "../../../utils/formatDate";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/Variants";

const DUMMY_POSTS = {
  id: "1",
  thumbnail: thumbnail1,
  title: "This is the title of the very first post in this blog",
  desc: "Doctors are highly trained medical professionals who diagnose and treat illnesses, injuries, and health conditions. They undergo extensive education and training, often specializing in specific areas of medicine. Doctors provide patient care in various settings, collaborating with other healthcare professionals to ensure comprehensive treatment. They adhere to strict ethical standards and engage in continuing education to stay updated with medical advancements. Empathy, compassion, and effective communication are essential qualities for doctors, who play a vital role in promoting and maintaining the health and well-being of individuals and communities. Doctors are integral members of the healthcare system, possessing extensive knowledge and expertise in diagnosing and treating a wide range of medical conditions. Their rigorous education and training equip them with the skills necessary to provide comprehensive patient care, often specializing in specific areas of medicine such as cardiology, oncology, pediatrics, or surgery.To become a doctor, individuals typically undergo years of formal education, including undergraduate studies followed by medical school. Medical school curriculum covers topics ranging from anatomy and physiology to pharmacology and medical ethics. After completing medical school, aspiring doctors undergo residency training in their chosen specialty, gaining hands-on experience under the supervision of experienced physicians.Doctors play a crucial role in patient care, serving as primary caregivers who assess symptoms, order diagnostic tests, make diagnoses, and develop treatment plans. They work collaboratively with other healthcare professionals, including nurses, pharmacists, and specialists, to ensure patients receive comprehensive and coordinated care.",
};

const BlogDetail = () => {
  const [post, setPost] = useState(DUMMY_POSTS);

  return (
    <section>
      <div className="px-4 md:px-8 lg:px-16 mt-8 flex justify-center pb-8">
        <div className="md:border border-border md:w-[80%] rounded-3xl w-full">
          <motion.div
            variants={fadeIn("top", 0, 3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img
              src={post.thumbnail}
              className="w-full mx-auto rounded-tl-3xl rounded-tr-3xl"
              alt="Blog Thumbnail"
            />
          </motion.div>
          <div className="flex flex-col border-b border-border py-4 lg:mx-24">
            <h1 className="text-3xl md:text-[40px] leading-normal font-bold text-black text-start mt-6">
              {post.title}
            </h1>
            <div className="flex mt-2 text-md text-secondary">
              <p>@admin</p>
              <p>-</p>
              <p>{formatDate("03-03-2020")}</p>
            </div>
          </div>
          <p className="lg:mx-24 text-base md:text-lg leading-8 text-gray-700 my-6">
            {post.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
