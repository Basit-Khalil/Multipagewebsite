import React from 'react';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      
        <p>&copy; Design Pop 2024: All Rights Reserved</p>
        <div className="instagram">
        <a
          href="https://www.instagram.com/designpop.pk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="ins"
        >
          <FaInstagram style={{ fontSize: '20px' }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;


