import React, { useState } from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/doctors/DoctorCard";
import Testimonial from "../../components/testimonial/Testimonial";

const Doctors = () => {
  const [doctorForm, setDoctorForm] = useState(true);
  const [doctorData, setDoctorData] = useState({
    SL: "",
    NAME: "",
    GENDER: "",
    DEPARTMENT: "",
    DEPT_ID: "",
    DESIGNATION: "",
    QUALIFICATIONS: [""],
    EXPERTISE: "",
    ACHIEVEMENTS: [""],
    OP_TIMINGS: Array(7).fill(""),
    KNOWN_LANGUAGES: "",
    PHOTO_PATH: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleQualificationsChange = (e, index) => {
    const newQualifications = [...doctorData.QUALIFICATIONS];
    newQualifications[index] = e.target.value;
    setDoctorData((prevData) => ({
      ...prevData,
      QUALIFICATIONS: newQualifications,
    }));
  };

  const handleAddQualification = () => {
    setDoctorData((prevData) => ({
      ...prevData,
      QUALIFICATIONS: [...prevData.QUALIFICATIONS, ""],
    }));
  };

  const handleRemoveQualification = (index) => {
    if (doctorData.QUALIFICATIONS.length > 1) {
      const newQualifications = [...doctorData.QUALIFICATIONS];
      newQualifications.splice(index, 1);
      setDoctorData((prevData) => ({
        ...prevData,
        QUALIFICATIONS: newQualifications,
      }));
    }
  };

  const handleAchievementsChange = (e, index) => {
    const newAchievements = [...doctorData.ACHIEVEMENTS];
    newAchievements[index] = e.target.value;
    setDoctorData((prevData) => ({
      ...prevData,
      ACHIEVEMENTS: newAchievements,
    }));
  };

  const handleAddAchievement = () => {
    setDoctorData((prevData) => ({
      ...prevData,
      ACHIEVEMENTS: [...prevData.ACHIEVEMENTS, ""],
    }));
  };

  const handleRemoveAchievement = (index) => {
    if (doctorData.ACHIEVEMENTS.length > 1) {
      const newAchievements = [...doctorData.ACHIEVEMENTS];
      newAchievements.splice(index, 1);
      setDoctorData((prevData) => ({
        ...prevData,
        ACHIEVEMENTS: newAchievements,
      }));
    }
  };

  const handleOpTimingsChange = (e, index) => {
    const newOpTimings = [...doctorData.OP_TIMINGS];
    newOpTimings[index] = e.target.value;
    setDoctorData((prevData) => ({
      ...prevData,
      OP_TIMINGS: newOpTimings,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setDoctorData((prevData) => ({
        ...prevData,
        PHOTO_PATH: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send doctorData to your backend or handle it as needed
    console.log(doctorData);
  };
  return (
    <>
      {doctorForm && (
        <section>
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Doctor Image:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                SL:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  name="SL"
                  value={doctorData.SL}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="NAME"
                  value={doctorData.NAME}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Gender:
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="GENDER"
                value={doctorData.GENDER}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHERS">Others</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Department:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="DEPARTMENT"
                  value={doctorData.DEPARTMENT}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Department ID:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  name="DEPT_ID"
                  value={doctorData.DEPT_ID}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Designation:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="DESIGNATION"
                  value={doctorData.DESIGNATION}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Known Languages:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="KNOWN_LANGUAGES"
                value={doctorData.KNOWN_LANGUAGES}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Op Timings:
              </label>
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (day, index) => (
                  <input
                    key={index}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                    type="text"
                    placeholder={day}
                    value={doctorData.OP_TIMINGS[index]}
                    onChange={(e) => handleOpTimingsChange(e, index)}
                  />
                )
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Qualifications:
              </label>
              {doctorData.QUALIFICATIONS.map((qualification, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder={`Qualification ${index + 1}`}
                    value={qualification}
                    onChange={(e) => handleQualificationsChange(e, index)}
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      className="ml-2 px-3 py-1 bg-red-500 text-white rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleRemoveQualification(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleAddQualification}
              >
                Add Qualification
              </button>
            </div>

            {/* Achievements */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Achievements:
              </label>
              {doctorData.ACHIEVEMENTS.map((achievement, index) => (
                <div key={index} className="flex mb-2">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder={`Achievement ${index + 1}`}
                    value={achievement}
                    onChange={(e) => handleAchievementsChange(e, index)}
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      className="ml-2 px-3 py-1 bg-red-500 text-white rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleRemoveAchievement(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleAddAchievement}
              >
                Add Achievement
              </button>
            </div>
            <br />

            {/* Submit button */}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </section>
      )}
      {!doctorForm && (
        <div>
          <section>
            <div className="container text-center">
              <h2 className="heading">Find a Doctor</h2>
              <div className="max-w-[570px] mt-[30px]  mx-auto bg-softWhite rounded-md flex items-center justify-between">
                <input
                  type="search"
                  placeholder="Search Doctor"
                  className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
                />
                <button className="search-btn">Search</button>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {doctors.map((doctor, index) => {
                  return <DoctorCard key={doctor.id} doctor={doctor} />;
                })}
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="xl:w-[470px] mx-auto">
                <h2 className="heading text-center">What our patients say</h2>
                <p className="text_para text-center">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care
                </p>
              </div>
              <Testimonial />
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Doctors;
