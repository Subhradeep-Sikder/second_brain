import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { SidebarItem } from "./SidebarItem";

// ✅ ADDED: Interface to handle props from Dashboard
interface SidebarProps {
  onSelect: (type: string) => void;
  activeFilter: string;
}

export function Sidebar({ onSelect, activeFilter }: SidebarProps) {
  return (
    <div className="w-20 lg:w-72 h-screen border-r border-gray-200 bg-white flex flex-col transition-all duration-300 fixed left-0 top-0 z-20">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-6 mb-4 justify-center lg:justify-start">
        <BrainIcon className="w-8 h-8 text-indigo-600 shrink-0" />
        <h1 className="text-2xl font-bold text-gray-900 hidden lg:block whitespace-nowrap">
          Second Brain
        </h1>
      </div>

      <div className="flex-1 px-4 space-y-2">
        {/* ✅ ADDED: All Notes filter (standard practice) */}
        <SidebarItem 
          text="All Notes" 
          icon={<BrainIcon className="w-5 h-5" />} 
          onClick={() => onSelect("all")}
          active={activeFilter === "all"}
        />

        <SidebarItem 
          text="Tweets" 
          icon={<TwitterIcon className="w-5 h-5" />} 
          onClick={() => onSelect("twitter")}
          active={activeFilter === "twitter"}
        />

        <SidebarItem 
          text="Videos" 
          icon={<YoutubeIcon className="w-5 h-5" />} 
          onClick={() => onSelect("youtube")}
          active={activeFilter === "youtube"}
        />

        <SidebarItem 
          text="Documents" 
          icon={<DocumentIcon className="w-5 h-5" />} 
          onClick={() => onSelect("document")}
          active={activeFilter === "document"}
        />
      </div>
    </div>
  );
}