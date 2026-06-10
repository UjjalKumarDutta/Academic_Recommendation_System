import { useState } from "react";
import { getRecommendation } from "../services/api";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualification: "",
    experience: "",
    profession: "",
    careerGoal: "",
  });

  const [error, setError] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      email,
      qualification,
      experience,
      profession,
      careerGoal,
    } = formData;

    if (
  !name.trim() ||
  !email.trim() ||
  !qualification.trim() ||
  !experience ||
  !profession.trim() ||
  !careerGoal.trim()
) {
  setError("Please fill all fields.");
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  setError("Please enter a valid email address.");
  return;
}

if (Number(experience) < 0) {
  setError("Experience cannot be negative.");
  return;
}

setError("");

try {
      const response = await getRecommendation(formData);

      setRecommendation(response.recommendation);
    } catch (error) {
      console.error(error);

      setError("Failed to get recommendation.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-10">
     <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl animate-fade-in">
       <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-700">
          Academic Pathway Recommendation
        </h1>

        {error && (
          <div className="mb-4 bg-red-100 text-red-700 p-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 p-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 p-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Highest Qualification
            </label>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 p-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
            >
              <option value="">Select Qualification</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>MBA</option>
              <option>PhD</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Years of Work Experience
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 p-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              placeholder="Enter years of experience"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Current Profession
            </label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 p-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              placeholder="Enter profession"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Career Goal
            </label>
            <textarea
              name="careerGoal"
              value={formData.careerGoal}
              onChange={handleChange}
              rows="4"
             className="w-full border-2 border-gray-200 p-3 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              placeholder="Describe your career goal"
            />
          </div>

          <button
            type="submit"
           className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Get Recommendation
          </button>
        </form>

        {recommendation && (
          <div className="mt-6 p-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl text-white shadow-lg">
            <h2 className="font-bold text-lg">
              Recommended Path
            </h2>

            <p className="mt-2 text-white text-lg font-bold">
              {recommendation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;