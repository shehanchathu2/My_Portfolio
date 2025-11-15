export default Footer = ({ name }) => {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-center md:text-left">
            <p>&copy; 2024 {name}. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Portfolio Component
