import { FaGithub, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer__containr max-w-[1440px] mx-auto pb-5 py-1 flex flex-col justify-center items-center bg-white text-black">
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
          <a 
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100"
            href="https://www.linkedin.com/in/kiril-karatitsyn-bb278b332/"
          >
            <svg className="w-8 h-8 text-[#000000]" viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z"/>
            </svg>
          </a>
          <a 
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100"
            href="https://www.upwork.com/freelancers/~0165dda3529105e6f3"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
              <title>Upwork icon</title>
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;