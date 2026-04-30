// src/pages/SharedBrain.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "../components/ui/Card";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { BACKEND_URL } from "../config";

interface ContentItem {
  _id: string;
  title: string;
  type: string;
  link: string;
  tags: string[];
}

export function SharedBrain() {

  const { shareLink } = useParams<{ shareLink: string }>();
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);



  const getIcon = (type: string) => {
    if (type === "youtube") return <YoutubeIcon className="w-5 h-5 text-red-500" />;
    if (type === "twitter") return <TwitterIcon className="w-5 h-5 text-blue-400" />;
    return <DocumentIcon className="w-5 h-5 text-gray-500" />;
  };

  useEffect(() => {
    async function fetchSharedData() {

      console.log("Current shareLink from URL:", shareLink);


      if (!shareLink || shareLink === "undefined") {
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/brain/${shareLink}`, {
          timeout: 5000
        });

        setContent(response.data.content || []);
      } catch (error: any) {
        console.error("Fetch failed!", error.response?.data || error.message);
      } finally {

        setLoading(false);
      }
    }

    fetchSharedData();
  }, [shareLink]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 dark:text-gray-400 font-medium animate-pulse">Opening Brain...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Public Brain</h1>

        {content.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 p-20 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl text-gray-400 dark:text-gray-500">
            <p className="text-lg">This brain is empty or the link is invalid.</p>
            <p className="text-sm mt-2">Check the URL or ask the owner for a new link.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {content.map((item) => (
              <Card
                key={item._id}
                title={item.title}
                icon={getIcon(item.type)}

                tags={item.tags || []}
                date="Shared"
                link={item.link}
                onDelete={() => {}}
              >
                <div className="text-gray-600 dark:text-gray-400 wrap-break-words">{item.link}</div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
