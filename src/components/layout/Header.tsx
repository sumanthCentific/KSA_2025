import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
// import categories from '../../assets/categories-icon.png';
import redirect1 from '../../assets/menu.png';
import profile from '../../assets/Profile.png';
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const handleCategoryClick = () => {
    navigate('/summary');
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

        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.73047 22.8031C7.73047 22.3181 8.11413 21.925 8.5874 21.925L13.1577 21.925C13.631 21.925 14.0146 22.3181 14.0146 22.8031C14.0146 23.288 13.631 23.6812 13.1577 23.6812L8.5874 23.6812C8.11413 23.6812 7.73047 23.288 7.73047 22.8031Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.874023 11.0953C0.874023 5.4375 5.35006 0.85096 10.8715 0.85096C16.393 0.85096 20.8691 5.4375 20.8691 11.0953V16.3638C20.8691 18.4652 19.2065 20.1688 17.1557 20.1688H4.58739C2.53655 20.1688 0.874023 18.4652 0.874023 16.3638V11.0953ZM10.8715 2.60713C6.2966 2.60713 2.58788 6.4074 2.58788 11.0953V16.3638C2.58788 17.4953 3.48309 18.4126 4.58739 18.4126H17.1557C18.26 18.4126 19.1552 17.4953 19.1552 16.3638V11.0953C19.1552 6.4074 15.4465 2.60713 10.8715 2.60713Z" fill="white"/>
</svg>

        {/* <svg
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
        </svg> */}
      </button>
    </header>
  );
};

export default Header;