import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-4">
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-0">
            <h5 className="text-lg font-bold mb-2 text-gray-900">About Us</h5>
            <p className="text-gray-600 pr-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-0">
            <h5 className="text-lg font-bold mb-2 text-gray-900">Quick Links</h5>
            <ul className="list-none mb-0">
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-0">
            <h5 className="text-lg font-bold mb-2 text-gray-900">Social Media</h5>
            <ul className="list-none mb-0">
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook-f mr-2"></i>Facebook</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter mr-2"></i>Twitter</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram mr-2"></i>Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-900">&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;