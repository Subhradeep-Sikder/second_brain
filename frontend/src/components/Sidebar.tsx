import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { SidebarItem } from "./SidebarItem";
export function Sidebar() {
  return (
    // w-20 is for icons only, lg:w-72 is full width on larger screens
    <div className="w-20 lg:w-72 h-screen border-r border-gray-200 bg-white flex flex-col transition-all duration-300">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-6 mb-4 justify-center lg:justify-start">
        <BrainIcon className="w-8 h-8 text-indigo-600 shrink-0" />
        {/* Hide 'Second Brain' text when sidebar is small */}
        <h1 className="text-2xl font-bold text-gray-900 hidden lg:block whitespace-nowrap">
          Second Brain
        </h1>
      </div>

      <div className="flex-1 px-4 space-y-2">
        <SidebarItem text="Tweets" icon={<TwitterIcon />} />
        <SidebarItem text="Videos" icon={<YoutubeIcon />} />
        <SidebarItem text="Documents" icon={<DocumentIcon />} />
      </div>
    </div>
  );
}