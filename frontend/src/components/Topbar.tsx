import { Button } from "./ui/Button";
import { ShareIcon } from "../icons/ShareIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { api } from "../api";

interface TopbarProps {
  onAddClick: () => void;
}

export function Topbar({ onAddClick }: TopbarProps) {
  
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

  return (
    <div className="flex justify-between items-center mb-8 bg-white/50 backdrop-blur-sm sticky top-0 z-10 py-2">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
        All Notes
      </h1>
      
      {/* Actions */}
      <div className="flex gap-3 md:gap-4">
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
      </div>
    </div>
  );
}