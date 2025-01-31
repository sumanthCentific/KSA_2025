import { useEffect, useRef } from "react";
import WelcomeNote from "./features/WelcomeNote";


const GetStarted = () => {
    // Create a reference for the canvas element
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    
    useEffect(() => {
        // Any canvas-related logic can be placed here if needed
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                // Example of drawing something on the canvas
                ctx.fillStyle = 'lightgray';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white">
      {/* Main container with width constraints */}
      <div className="max-w-6xl mx-auto p-4 space-y-8">
        {/* Header */}

        {/* Main Content */}
        <main className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Section */}
          <aside className="space-y-6">
            <WelcomeNote />
          </aside>
        </main>
      </div>
    </div>
    );
};

export default GetStarted;
