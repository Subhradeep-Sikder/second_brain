import { Button } from "./ui/Button";
import { ShareIcon } from "../icons/ShareIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

interface TopbarProps {
  onAddClick: () => void;
}

export function Topbar({ onAddClick }: TopbarProps) {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  //Share Brain Logic
  const handleShareBrain = async () => {
    try {
      const token = localStorage.getItem("token");


      const response = await api.post("/brain/share",
        { share: true },
        { headers: { Authorization: `Bearer ${token}` } }
      );


      const hash = response.data.hash;


      const shareUrl = `${window.location.origin}/share/${hash}`;

      //Copy to clipboard
      await navigator.clipboard.writeText(shareUrl);

      alert("🚀 Share link copied to clipboard!\n" + shareUrl);

    } catch (error: any) {
      console.error("Share error:", error.response?.data || error.message);
      alert("Failed to create share link. Are you logged in?");
    }
  };

  // Logout Logic
  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <div className="flex justify-between items-center mb-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 py-2 dark:border-b dark:border-gray-700">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
        All Notes
      </h1>

      {/* Actions */}
      <div className="flex gap-3 md:gap-4 items-center">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
          title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          {theme === "light" ? (
            <MoonIcon className="w-5 h-5" />
          ) : (
            <SunIcon className="w-5 h-5" />
          )}
        </button>

        <Button
          variant="secondary"
          text="Share Brain"
          startIcon={<ShareIcon className="w-5 h-5" />}
          onClick={handleShareBrain}
        />

        <Button
          variant="primary"
          text="Add Content"
          startIcon={<PlusIcon className="w-5 h-5" />}
          onClick={onAddClick}
        />

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm"
          title="Logout from your account"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
