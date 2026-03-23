import { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { api } from "../api"; // Assuming api.ts has the hardcoded baseURL now

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

      // Convert comma-separated string → array of strings
      const formattedTags = tags
        .split(",")
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      // We use the 'api' instance which points to http://localhost:3000/api/v1
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
            // FIX: Ensure Bearer prefix is used to match your split(" ")[1] logic
            Authorization: `Bearer ${token}` 
          }
        }
      );

      alert("Content added successfully!");

      // Reset fields
      setTitle("");
      setLink("");
      setType("document");
      setTags("");

      // Close modal and the Dashboard will call refresh() via its own onClose handler
      onClose();

    } catch (err: any) {
      // Improved error logging to see the exact backend failure
      console.error("Submission Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Error adding content");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg w-[400px] p-6 relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-6 text-gray-900">Add New Content</h2>

        <div className="space-y-4 mb-6">
          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
             <Input
               placeholder="Enter title"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
             />
          </div>

          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Link / Content</label>
             <Input
               placeholder="Enter link/content"
               value={link}
               onChange={(e) => setLink(e.target.value)}
             />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-indigo-500 text-sm bg-white"
            >
              {/* Ensure these match your backend Schema enum exactly */}
              <option value="document">Document</option>
              <option value="twitter">Tweet</option>
              <option value="youtube">Video</option>
              <option value="link">Link</option>
            </select>
          </div>

          <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
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