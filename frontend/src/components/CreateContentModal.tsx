import { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { api } from "../api";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("document");
  const [tags, setTags] = useState("");

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You must be logged in!");
        return;
      }


      const formattedTags = tags
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      await api.post(
        "/content",
        {
          title,
          link,
          type,
          tags: formattedTags
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Content added successfully!");

      setTitle("");
      setLink("");
      setType("document");
      setTags("");

      onClose();

    } catch (err: any) {
      console.error("Submission Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Error adding content");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-[400px] p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Add New Content</h2>

        <div className="space-y-4 mb-6">
          <div>
             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
             <Input
               placeholder="Enter title"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
             />
          </div>

          <div>
             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Link / Content</label>
             <Input
               placeholder="Enter link/content"
               value={link}
               onChange={(e) => setLink(e.target.value)}
             />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg outline-none focus:border-indigo-500 text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-white"
            >
              <option value="document">Document</option>
              <option value="twitter">Tweet</option>
              <option value="youtube">Video</option>
              <option value="link">Link</option>
            </select>
          </div>

          <div>
             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tags (comma separated)</label>
             <Input
               placeholder="e.g. productivity, coding"
               value={tags}
               onChange={(e) => setTags(e.target.value)}
             />
          </div>
        </div>

        <div className="flex justify-end">
          <Button text="Save Content" variant="primary" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
