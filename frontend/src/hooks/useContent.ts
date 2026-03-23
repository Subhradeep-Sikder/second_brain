import { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:3000/api/v1"; // backend URL (adjust if needed)

export function useContent() {
  const [contents, setContents] = useState([]);

  const fetchContent = async () => {
    try {
      const token = localStorage.getItem("token");
      
      // Hit your GET / endpoint
      const response = await axios.get(`${BACKEND_URL}/content`, {
        headers: {
          Authorization: `Bearer ${token}`, // Passes the JWT to your authMiddleware
        },
      });
      
      // Your backend sends back an object with a 'content' array
      setContents(response.data.content); 
    } catch (error) {
      console.error("Error fetching content:", error);
    }
   };

   const deleteContent = async (contentId: string) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BACKEND_URL}/content`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { contentId } // Sending ID in the request body
      });
      fetchContent(); // Refresh the list automatically
    } catch (e) {
      alert("Error deleting content");
    }
  };

  // Fetch the data as soon as the component loads
  useEffect(() => {
    fetchContent();
  }, []);

  return { contents, refresh: fetchContent,deleteContent };
}