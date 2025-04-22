import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
    {/* Hero Section */}
    <div className="relative bg-gray-900 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Pristege Shoes</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Crafting the finest footwear for every step of your journey.
        </p>
      </div>
    </div>

    {/* Our Story */}
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Pristege Shoes Craftsmanship"
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2015, **Pristege Shoes** began with a simple mission: to create footwear that blends **style, comfort, and durability**. What started as a small workshop has now grown into a globally recognized brand, trusted by thousands of customers.
          </p>
          <p className="text-gray-600 mb-4">
            Every pair of Pristege shoes is crafted with **premium materials** and **meticulous attention to detail**, ensuring you get the best experience with every step.
          </p>
          <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md transition duration-300">
            Shop Our Collection
          </button>
        </div>
      </div>
    </div>

    {/* Our Values */}
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quality */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Uncompromising Quality</h3>
            <p className="text-gray-600">
              We source the finest leathers and materials to ensure every shoe meets our high standards.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Sustainable Practices</h3>
            <p className="text-gray-600">
              We prioritize eco-friendly production methods to reduce our environmental footprint.
            </p>
          </div>

          {/* Customer First */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer-Centric</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority. We offer hassle-free returns and 24/7 support.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Meet the Team */}
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Team Member 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Alex Johnson"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-1">ZAHIM AHMED KHAN</h3>
            <p className="text-gray-600 mb-3">Founder & CEO</p>
            <p className="text-gray-500 text-sm">
              Passionate about footwear craftsmanship and innovation.
            </p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Sarah Lee"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-1">Sarah Lee</h3>
            <p className="text-gray-600 mb-3">Head Designer</p>
            <p className="text-gray-500 text-sm">
              Brings creativity and elegance to every Pristege design.
            </p>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="David Chen"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-1">David Chen</h3>
            <p className="text-gray-600 mb-3">Production Manager</p>
            <p className="text-gray-500 text-sm">
              Ensures every shoe meets our quality standards.
            </p>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Emma Rodriguez"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-1">Emma Rodriguez</h3>
            <p className="text-gray-600 mb-3">Customer Experience</p>
            <p className="text-gray-500 text-sm">
              Dedicated to making your shopping experience seamless.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Step into Style?</h2>
        <p className="text-xl mb-8">
          Explore our latest collection of premium footwear designed for comfort and elegance.
        </p>
        <button className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-md font-medium transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  </div>
  )
}

export default About