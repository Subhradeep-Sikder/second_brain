interface SidebarItemProps {
  text: string;
  icon: React.ReactNode;
}

export function SidebarItem({ text, icon }: SidebarItemProps) {
  return (
    <div className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors group justify-center lg:justify-start">
      {/* Icon always stays visible */}
      <div className="text-gray-600 group-hover:text-indigo-600 transition-colors shrink-0">
        {icon}
      </div>

      {/* FIX: This hides the text on mobile/small screens and shows it on large screens */}
      <span className="ml-4 text-gray-700 font-medium hidden lg:block whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}