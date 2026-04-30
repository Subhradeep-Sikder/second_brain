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
  link?: string;
}

export function Card({ title, icon, tags, date, children, onDelete, link }: CardProps) {
  const handleShare = async () => {
    if (!link) {
      alert("No link to share");
      return;
    }

    try {
      await navigator.clipboard.writeText(link);
      alert("Link copied to clipboard! 🎉");
    } catch (error) {
      alert("Failed to copy link");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 w-80 shadow-sm flex flex-col transition-all hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-700/50">
      {/* Card Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <div className="w-5 h-5 text-gray-500 dark:text-gray-400">{icon}</div>
          <h3 className="font-medium text-md text-gray-900 dark:text-white">{title}</h3>
        </div>
        <div className="flex gap-3 text-gray-400 dark:text-gray-500">
          <button
            onClick={handleShare}
            className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            title="Copy link to clipboard"
          >
            <ShareIcon className="w-5 h-5" />
          </button>


          <button
            onClick={onDelete}
            className="hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Card Body (Flexible Content) */}
      <div className="flex-1 text-gray-800 dark:text-gray-300 text-sm mb-6">
        {children}
      </div>

      {/* Card Footer (Tags & Date) */}
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/40 px-3 py-1 rounded-full font-medium">
              #{tag}
            </span>
          ))}
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">
          Added on {date}
        </div>
      </div>
    </div>
  );
}
