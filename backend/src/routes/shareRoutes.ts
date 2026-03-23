import express from "express";
import { Link } from "../models/Link";
import { Content } from "../models/Content";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

// create share link
router.post("/share", authMiddleware, async (req, res) => {
  try {
    const userId = (req as any).userId;

    // 1. Check if a link already exists for this user
    const existingLink = await Link.findOne({
      userId: userId
    });

    // 2. If it exists, return the old hash instead of creating a new one
    if (existingLink) {
      return res.json({
        hash: existingLink.hash
      });
    }

    // 3. If it doesn't exist, only then create a new one
    const hash = Math.random().toString(36).substring(2, 10);
    
    await Link.create({
      hash: hash,
      userId: userId
    });

    res.json({
      hash: hash
    });

  } catch (error) {
    res.status(500).json({
      message: "Error managing share link"
    });
  }
});

// get shared content
// backend/src/routes/shareRoutes.ts

router.get("/:shareLink", async (req, res) => {
  try {
    const hash = req.params.shareLink;

    // 1. Find the link entry
    const link = await Link.findOne({ hash });

    // FIX: If the hash doesn't exist, stop immediately
    if (!link) {
      return res.status(404).json({
        message: "Invalid share link"
      });
    }

    // 2. Fetch the content belonging to that specific user
    // FIX: Ensure we are querying the Content model correctly 
    // using the userId found in the Link document.
    const content = await Content.find({
      userId: link.userId
    })
    .populate("userId", "username") // Only take the username, hide password/email
    .populate("tags");

    // 3. Optional: Add a check if the user has NO content
    if (!content) {
      return res.json({
        content: []
      });
    }

    res.json({
      content: content
    });

  } catch (error) {
    console.error("Share Link Error:", error); // Always log errors for debugging
    res.status(500).json({
      message: "Error fetching shared content"
    });
  }
});

export default router;