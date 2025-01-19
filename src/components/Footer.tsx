function Footer() {
  return (
    <footer>
      <div className="footer__container py-10 flex flex-col justify-center items-center">
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
            <img className="max-w-[32px]" src="source/github logo.png" alt="GitHub" />
          </a>
          <a 
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100"
            href="https://www.instagram.com/kiril.karatitsyn?igsh=anUycG50cW1ha3li&utm_source=qr"
          >
            <img className="max-w-[32px]" src="source/instagram-icon logo.png" alt="Instagram" />
          </a>
          <a 
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100"
            href="https://t.me/kirilkryt"
          >
            <img className="max-w-[32px]" src="source/telegram logo.png" alt="Telegram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;