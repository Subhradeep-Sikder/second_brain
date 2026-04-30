interface SidebarItemProps {
  text: string;
  icon: React.ReactNode;
   onClick: () => void; 
   active?: boolean;    
}

export function SidebarItem({ text, icon, onClick, active }: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center p-3 rounded-lg cursor-pointer transition-all group
        justify-center lg:justify-start mb-1
        ${active
          ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300"
          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
        }
      `}
    >
      {/* Icon */}
      <div className={`
        transition-colors shrink-0
        ${active ? "text-indigo-600 dark:text-indigo-300" : "text-gray-500 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"}
      `}>
        {icon}
      </div>

      {/* Text - Hidden on small screens, visible on LG */}
      <span className={`
        ml-4 font-medium hidden lg:block whitespace-nowrap
        ${active ? "text-indigo-700 dark:text-indigo-200" : "text-gray-700 dark:text-gray-300"}
      `}>
        {text}
      </span>


      {active && (
        <div className="absolute right-0 w-1 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-l-full hidden lg:block" />
      )}
    </div>
  );
}