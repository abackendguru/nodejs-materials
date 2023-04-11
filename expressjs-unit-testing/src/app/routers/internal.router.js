import { Router } from "express";

export function internalRouteHandler(req, res) {
  const name = req.query.name || "World";
  res.send(`[Internal] Hello ${name}`);
}

const router = Router();
router.get("", internalRouteHandler);

export default router;