import express from "express";
import { home, note, noteNew, wine, wineNew } from "./controller";

const router = express.Router();

router.get("/", home);
router.get("/wine/new", wineNew);
router.get("/wine/:id", wine);
router.get("/note/new", noteNew);
router.get("/note/:id", note);