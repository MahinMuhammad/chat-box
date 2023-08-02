import { ChatHistory } from "@/data/chatHistory"
export default function handler(req, res) {
    res.status(200).json( ChatHistory )
  }
  