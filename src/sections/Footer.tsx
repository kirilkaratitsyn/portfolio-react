import { FaGithub, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer__containr py-10 flex flex-col justify-center items-center bg-white text-black">
        <span className="opacity-60 mb-2.5 md:text-[16px] text-[12px]">
          © {new Date().getFullYear()} Kiril Karatitsyn. All rights reserved.
        </span>
        <div className="links flex p-1 gap-5">
          <a 
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100"
            href="https://github.com/kirilwallstreetreserv"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a 
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100"
            href="https://www.instagram.com/kiril.karatitsyn?igsh=anUycG50cW1ha3li&utm_source=qr"
          >
            <FaInstagram className="w-8 h-8" />
          </a>
          <a 
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100"
            href="https://t.me/kirilkryt"
          >
            <FaTelegramPlane className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;