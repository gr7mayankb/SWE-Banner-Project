import express from "express";
import {
  BannerData,
  GetBannerData,
  DeleteBanner,
} from "../controllers/banner.js";
const app = express.Router();

//For Creating banner.
app.post("/new", BannerData);
app.get("/get", GetBannerData);
app.delete("/del", DeleteBanner);

export default app;
