import express from "express";
import { Content } from "../models/Content";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

// add content
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, link, type, tags } = req.body;
    const userId = (req as any).userId;

    // 1. Debug: Check if userId actually exists
    if (!userId) {
        console.error("Auth Error: userId is undefined. Check authMiddleware.");
    }

    const newContent = await Content.create({
      title,
      link,
      type,
      tags: tags || [], // Ensure this is an array
      userId: userId
    });

    res.json({ message: "Content added successfully" });

  } catch (error: any) {
    // 2. THIS IS THE FIX: Print the real error to your VS Code terminal
    console.error("MONGOOSE ERROR:", error.message);

    res.status(500).json({ 
      message: "Error adding content",
      error: error.message // 3. This will now show up in your Chrome Console!
    });
  }
});

// get content
router.get("/", authMiddleware, async (req, res) => {
  try {
    const content = await Content.find({
      userId: (req as any).userId
    })
      .populate("tags")
      .populate("userId", "username");

    res.json({
      content
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching content"
    });
  }
});

// delete content
router.delete("/", authMiddleware, async (req, res) => {
  try {
    const { contentId } = req.body;

    await Content.deleteOne({
      _id: contentId,
      userId: (req as any).userId
    });

    res.json({
      message: "Content deleted successfully"
    });

  } catch (error: any) {
    console.error("BACKEND_ERROR:", error); 
    res.status(500).json({
      message: "Error adding content",
      error: error.message 
    });
}
});

export default router;