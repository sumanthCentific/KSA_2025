import { Avatar, AvatarImage, AvatarFallback } from "../ui/Avatar";
import categories from '../../assets/categories-icon.png';
import redirect1 from '../../assets/summaryRedirect1.png';
import profile from '../../assets/Profile.png.png';
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const handleCategoryClick = () => {
    navigate('/summaryredirection');
  };
  return (
    <header className="flex items-center justify-between bg-gray-800 h-[80px] p-4 rounded-lg shadow-lg">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <img style={{
          width: '30px'
        }} src={redirect1} onClick={handleCategoryClick} className="header-icon" />
        {/* Avatar */}
        <Avatar className="h-10 w-10">
          <AvatarImage src={profile} alt="Anthony's Avatar" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        {/* User Info */}
        <div>
          <div className="text-sm text-gray-400">Hello,</div>
          <div className="text-lg font-bold text-white">Anthony</div>
        </div>
      </div>

      {/* Right Section */}
      <button
        className="bg-gray-700 w-10 h-10 flex items-center justify-center rounded-full"
        aria-label="Search"
      >
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75L21 21m-6.75-3a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
