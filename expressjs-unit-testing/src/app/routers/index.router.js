import { Router } from "express";

export function indexRouteHandler(req, res) {
  const name = req.query.name || "World";
  res.send(`Hello ${name}`);
}

const router = Router();
router.get("", indexRouteHandler);

export default router;