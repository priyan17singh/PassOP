import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Manager from "./components/Manager.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <div className="min-h-screen w-full bg-[#f0fdfa] relative overflow-hidden">
  {/* 🌿 Mint Fresh Breeze Background */}
  <div
  className="absolute inset-0 z-0 pointer-events-none"
  style={{
    backgroundImage: `
      linear-gradient(45deg, 
        rgba(222, 255, 235, 1) 0%, 
        rgba(187, 247, 208, 0.8) 25%, 
        rgba(134, 239, 172, 0.7) 50%, 
        rgba(74, 222, 128, 0.6) 75%, 
        rgba(34, 197, 94, 0.5) 100%
      ),
      radial-gradient(circle at 40% 30%, rgba(240, 253, 244, 0.8) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(187, 247, 208, 0.4) 0%, transparent 45%),
      radial-gradient(circle at 20% 80%, rgba(134, 239, 172, 0.4) 0%, transparent 40%)
    `,
    backgroundBlendMode: "overlay",
  }}
></div>


  {/* 🌿 Actual Page Content */}
  <div className="relative z-10">
    <Navbar />
    <div className="min-h-[80vh]">
      <Manager />
    </div>
    <Footer />
  </div>
</div>
<ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}  // ensures it closes even if hovered
        theme="dark"
        transition={Bounce}
      />

    
    </>
  );
}

export default App;

