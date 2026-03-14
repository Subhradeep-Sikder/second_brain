import express from "express";
import { Link } from "../models/Link";
import { Content } from "../models/Content";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

// create share link
router.post("/share", authMiddleware, async (req, res) => {
  try {
    const hash = Math.random().toString(36).substring(2, 10);

    await Link.create({
      hash: hash,
      userId: (req as any).userId
    });

    res.json({
      message: "Share link created",
      link: `/api/v1/brain/${hash}`
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating share link"
    });
  }
});

// get shared content
router.get("/:shareLink", async (req, res) => {
  try {
    const hash = req.params.shareLink;

    const link = await Link.findOne({
      hash
    });

    if (!link) {
      return res.status(404).json({
        message: "Invalid share link"
      });
    }

    const content = await Content.find({
      userId: link.userId
    })
      .populate("userId", "username")
      .populate("tags");

    res.json({
      content
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching shared content"
    });
  }
});

export default router;