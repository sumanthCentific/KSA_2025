import LoginWindow from "./LoginWindow";

const Login = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
      {/* Main container with width constraints */}
      <div className="max-w-6xl mx-auto p-4 space-y-8">
        {/* Header */}

        {/* Main Content */}
        <main className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Section */}
          <aside className="space-y-6">
          <LoginWindow/>
          </aside>
        </main>
      </div>
    </div>
    );
};

export default Login;
