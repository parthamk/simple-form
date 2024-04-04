import React from 'react';

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Basic Form Submission</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-800 font-bold mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-800 font-bold mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="5"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter your address"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;