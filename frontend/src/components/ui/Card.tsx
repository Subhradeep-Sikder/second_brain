import type { ReactElement, ReactNode } from "react";
import { ShareIcon } from "../../icons/ShareIcon";
import { TrashIcon } from "../../icons/TrashIcon";

interface CardProps {
  title: string;
  icon?: ReactElement;
  tags: string[];
  date: string;
  children: ReactNode; 
  onDelete: () => void; 
}

export function Card({ title, icon, tags, date, children, onDelete }: CardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 w-80 shadow-sm flex flex-col transition-all hover:shadow-md">
      {/* Card Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-gray-700">
          <div className="w-5 h-5 text-gray-500">{icon}</div>
          <h3 className="font-medium text-md">{title}</h3>
        </div>
        <div className="flex gap-3 text-gray-400">
          <button className="hover:text-gray-600 transition-colors">
            <ShareIcon className="w-5 h-5" />
          </button>
          
         
          <button 
            onClick={onDelete} 
            className="hover:text-red-500 transition-colors cursor-pointer"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Card Body (Flexible Content) */}
      <div className="flex-1 text-gray-800 text-sm mb-6">
        {children}
      </div>

      {/* Card Footer (Tags & Date) */}
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full font-medium">
              #{tag}
            </span>
          ))}
        </div>
        <div className="text-xs text-gray-400 font-medium">
          Added on {date}
        </div>
      </div>
    </div>
  );
}