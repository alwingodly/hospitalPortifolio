import React, { useState } from "react";
import thumbnail1 from "../../assets/images/blog1.jpg";
import { formatDate } from "../../../utils/formatDate";
const DUMMY_POSTS = {
  id: "1",
  thumbnail: thumbnail1,
  title: "This is the tittle of the very first post in this blog",
  desc: "Doctors are highly trained medical professionals who diagnose and treat illnesses, injuries, and health conditions. They undergo extensive education and training, often specializing in specific areas of medicine. Doctors provide patient care in various settings, collaborating with other healthcare professionals to ensure comprehensive treatment. They adhere to strict ethical standards and engage in continuing education to stay updated with medical advancements. Empathy, compassion, and effective communication are essential qualities for doctors, who play a vital role in promoting and maintaining the health and well-being of individuals and communities. Doctors are integral members of the healthcare system, possessing extensive knowledge and expertise in diagnosing and treating a wide range of medical conditions. Their rigorous education and training equip them with the skills necessary to provide comprehensive patient care, often specializing in specific areas of medicine such as cardiology, oncology, pediatrics, or surgery.To become a doctor, individuals typically undergo years of formal education, including undergraduate studies followed by medical school. Medical school curriculum covers topics ranging from anatomy and physiology to pharmacology and medical ethics. After completing medical school, aspiring doctors undergo residency training in their chosen specialty, gaining hands-on experience under the supervision of experienced physicians.Doctors play a crucial role in patient care, serving as primary caregivers who assess symptoms, order diagnostic tests, make diagnoses, and develop treatment plans. They work collaboratively with other healthcare professionals, including nurses, pharmacists, and specialists, to ensure patients receive comprehensive and coordinated care." 
};

const BlogDetail = () => {
  const [post, setPosts] = useState(DUMMY_POSTS);

  return (
    <section>
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            {post.title}
          </h1>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@admin</p>
          <div className="flex space-x-2">
            <p>{formatDate("03-03-2020")}</p>
          </div>
        </div>
        <img src={post.thumbnail} className="w-full  mx-auto mt-8" alt="" />
        <p className="mx-auto mt-8">{post.desc}</p>
      </div>
    </section>
  );
};

export default BlogDetail;
