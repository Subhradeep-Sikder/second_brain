import express from "express";
import { Content } from "../models/Content";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

// add content
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, link, type, tags } = req.body;

    await Content.create({
      title,
      link,
      type,
      tags,
      userId: (req as any).userId
    });

    res.json({
      message: "Content added successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Error adding content"
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

  } catch (error) {
    res.status(500).json({
      message: "Error deleting content"
    });
  }
});

export default router;