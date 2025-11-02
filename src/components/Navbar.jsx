import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="myContainer flex justify-between p-4  text-white py-5">
        <div className="font-bold text-2xl">
          <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600">OP/&gt;</span>
        </div>
        <div className="rounded-2xl bg-green-700 border border-white">
          <a href="https://github.com/priyan17singh" target="_blank">
            <button className="flex flex-row py-1 px-2">
              <img src="/icons/icons8-github-24.png" alt="github-icon" />
              <div className="font-bold">Github</div>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
