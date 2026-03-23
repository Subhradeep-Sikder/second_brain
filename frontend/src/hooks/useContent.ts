import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";


export function useContent() {
  const [contents, setContents] = useState([]);

  const fetchContent = async () => {
    try {
      const token = localStorage.getItem("token");
      
      
      const response = await axios.get(`${BACKEND_URL}/content`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      
  
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

  useEffect(() => {
    fetchContent();
  }, []);

  return { contents, refresh: fetchContent,deleteContent };
}