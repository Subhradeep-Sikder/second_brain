import { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { CreateContentModal } from "../components/CreateContentModal";
import { Card } from "../components/ui/Card";
import { useContent } from "../hooks/useContent";
import { useNavigate } from "react-router-dom";

// Icons
import { DocumentIcon } from "../icons/DocumentIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Check token before loading dashboard
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/"); // redirect to login
    }
  }, [navigate]);

  // ✅ Extract deleteContent from your hook
  const { contents, refresh, deleteContent } = useContent();

  // Icon helper
  const getIcon = (type: string) => {
    if (type === "youtube") return <YoutubeIcon className="w-5 h-5 text-red-500" />;
    if (type === "twitter") return <TwitterIcon className="w-5 h-5 text-blue-400" />;
    return <DocumentIcon className="w-5 h-5 text-gray-500" />;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8 overflow-y-auto">
        <Topbar onAddClick={() => setIsModalOpen(true)} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

          {/* Show loading */}
          {!contents && (
            <div className="text-gray-400">Loading...</div>
          )}

          {/* Render content */}
          {contents && contents.map((item: any) => (
            <Card
              key={item._id}
              title={item.title}
              icon={getIcon(item.type)}
              tags={item.tags || []}
              date="Today"
              // ✅ Pass the delete function here
              onDelete={() => deleteContent(item._id)}
            >
              <p className="text-gray-600 wrap-break-words">{item.link}</p>
            </Card>
          ))}

          {/* Empty state */}
          {contents && contents.length === 0 && (
            <div className="text-gray-400">
              No notes found. Click "Add Content" to start!
            </div>
          )}
        </div>
      </div>

      <CreateContentModal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          refresh();
        }}
      />
    </div>
  );
}