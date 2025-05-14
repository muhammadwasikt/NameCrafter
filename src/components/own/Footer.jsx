import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-pink-500 to-orange-400 p-4 pt-3 pb-0 cursor-pointer ">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-accent">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">NameCrafter</h2>
          <p className="text-sm mt-1">Craft the perfect name effortlessly!</p>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex gap-6 pb-1">
          <a href="https://github.com/muhammadwasikt" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <Github size={24} />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <Instagram size={24} />
          </a>
          <a href="https://linkedin.com/in/muhammad-wasi-imran-khatri/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Small Line */}
      <div className="text-center text-xs text-accent pb-1">
        &copy; {new Date().getFullYear()} NameCrafter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
