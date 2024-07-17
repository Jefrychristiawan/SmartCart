import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Navbar() {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const getLinkClass = (path) => {
    return activeLink === path ? 'font-bold text-green-500' : 'font-bold';
  };

  return (
    <div className="flex justify-center space-x-8 my-6">
      <Link to="/" className={getLinkClass('/')} onClick={() => handleLinkClick('/')}>
        Home
      </Link>
      <Link to="/shop" className={getLinkClass('/shop')} onClick={() => handleLinkClick('/shop')}>
        Shop
      </Link>
      <Link to="/news" className={getLinkClass('/news')} onClick={() => handleLinkClick('/news')}>
        News
      </Link>
    </div>
  );
}

