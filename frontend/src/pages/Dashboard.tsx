import { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { CreateContentModal } from "../components/CreateContentModal";
import { Card } from "../components/ui/Card";
import { useContent } from "../hooks/useContent";
import { useNavigate } from "react-router-dom";
//import { BACKEND_URL } from "../config";

// Icons
import { DocumentIcon } from "../icons/DocumentIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all"); 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const { contents, refresh, deleteContent } = useContent();

  const filteredContents = contents?.filter((item: any) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter; 
  });

  const getIcon = (type: string) => {
    if (type === "youtube") return <YoutubeIcon className="w-5 h-5 text-red-500" />;
    if (type === "twitter") return <TwitterIcon className="w-5 h-5 text-blue-400" />;
    return <DocumentIcon className="w-5 h-5 text-gray-500" />;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeFilter={activeFilter} 
        onSelect={(type) => setActiveFilter(type)} 
      />

      
      <div className="flex-1 p-8 overflow-y-auto ml-20 lg:ml-72 transition-all duration-300">
        <Topbar onAddClick={() => setIsModalOpen(true)} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {!contents && (
            <div className="text-gray-400">Loading...</div>
          )}

          {filteredContents && filteredContents.map((item: any) => (
            <Card
              key={item._id}
              title={item.title}
              icon={getIcon(item.type)}
              tags={item.tags || []}
              date="Today"
              onDelete={() => deleteContent(item._id)}
            >
              <p className="text-gray-600 break-all">{item.link}</p>
            </Card>
          ))}

          {filteredContents && filteredContents.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
              <p className="text-xl font-medium">No {activeFilter === 'all' ? '' : activeFilter} notes found.</p>
              <p className="text-sm mt-1">Try adding some content or changing your filter!</p>
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