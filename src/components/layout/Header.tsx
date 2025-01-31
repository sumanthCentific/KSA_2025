import { Avatar, AvatarImage, AvatarFallback } from "../ui/Avatar";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <Avatar className="h-10 w-10">
          <AvatarImage src="/avatar-anthony.jpg" alt="Anthony's Avatar" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        {/* User Info */}
        <div>
          <p className="text-sm text-gray-400">Hello,</p>
          <p className="text-lg font-bold text-white">Anthony</p>
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
