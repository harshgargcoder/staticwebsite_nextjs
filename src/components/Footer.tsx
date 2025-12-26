'use client';

function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            About Us
          </h3>
          <p className="text-sm leading-relaxed">
            Master the Craft of Coding is a learning-focused platform
            dedicated to helping developers build strong foundations,
            write clean code, and grow real-world skills through
            practical projects.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Learn
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Web Development</li>
            <li className="hover:text-white cursor-pointer">Frontend</li>
            <li className="hover:text-white cursor-pointer">Backend</li>
            <li className="hover:text-white cursor-pointer">System Design</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>India</li>
            <li>Email: hello@masterthecraft.dev</li>
            <li>For collaborations & learning queries</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Master the Craft of Coding. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
