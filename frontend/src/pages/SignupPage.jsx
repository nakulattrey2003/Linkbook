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
    <div className="flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white p-4 ">
      <div className="w-full max-w-2xl p-6 shadow-lg rounded-lg  dark:border-gray-700 bg-white dark:bg-gray-800 border-t-6 border-cyan-600 dark:border-t-cyan-500">
        <h2 className="text-2xl font-semibold text-left">
          Sign
          <span className="font-semibold text-cyan-600 dark:text-cyan-500">
            Up
          </span>
        </h2>
        <h2 className="text-sm text-gray-400 dark:text-gray-400 font-normal mb-6 text-left">
          Start managing your contacts easily and securely with{" "}
          <span className="font-semibold text-cyan-600 dark:text-cyan-500">
            Linkbook
          </span>{" "}
          in the cloud!...
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
              className="w-full text-sm p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
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
              className="w-full text-sm p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
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
              className="w-full text-sm p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              className="w-full text-sm p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 text-sm">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full text-sm p-2 rounded bg-gray-100 mb-4 dark:bg-gray-700 dark:border-gray-600"
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
          <label className="w-full mb-1 text-sm">Profile Picture</label>
          <input
            className="w-full text-sm p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button className="w-full text-sm px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-blue-600">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
