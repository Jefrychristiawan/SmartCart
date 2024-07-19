import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? 'font-bold text-green-500' : 'font-bold';
  };

  return (
    <div className="flex justify-center space-x-8 my-6">
      <Link to="/" className={getLinkClass('/')}>
        Home
      </Link>
      <Link to="/shop" className={getLinkClass('/shop')}>
        Shop
      </Link>
      <Link to="/news" className={getLinkClass('/news')}>
        News
      </Link>
    </div>
  );
}