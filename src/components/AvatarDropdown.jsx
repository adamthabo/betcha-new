import React, { useState } from "react";

export function AvatarDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
        alt="avatar"
      />
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50">
          <div className="p-2 hover:bg-gray-800 cursor-pointer">Profile</div>
          <div className="p-2 hover:bg-gray-800 cursor-pointer">Settings</div>
          <div className="p-2 hover:bg-gray-800 cursor-pointer">Log out</div>
        </div>
      )}
    </div>
  );
}
