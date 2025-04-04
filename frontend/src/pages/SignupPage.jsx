import React, { useState, useEffect } from "react";

export default function SignupPage() {
  const [theme, setTheme] = useState("light");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    image: null,
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white p-4">
      <div className="w-full max-w-2xl p-6 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-semibold mb-1 text-left">Sign Up</h2>
        <h2 className="text-md text-gray-400 dark:text-gray-400 font-normal mb-6 text-left">
          Start managing your contacts easily and securely in the cloud!...
        </h2>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-100 mb-4 dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </form>

        {/* Profile Picture */}
        <div className="justify-center mb-4">
          <label className="w-full mb-1 ">
            Profile Picture
          </label>
          <input
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button className="w-full px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-blue-600">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
