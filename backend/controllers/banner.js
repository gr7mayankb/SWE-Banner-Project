// import { mySqlConnection } from "../config/db";
import { mySqlConnection } from "../config/db.js";

export const BannerData = (req, resp) => {
  const { tittle, link, timer, id, description, visibility } = req.body;
  const query = `INSERT INTO bannerdata (link, tittle, id, timer, visibility, description) VALUES (?, ?, ?, ?, ?, ?)`;

  mySqlConnection.query(
    query,
    [link, tittle, id, timer, visibility, description],
    (err, res) => {
      if (err) {
        console.log(err);
        resp.status(500).send("Error");
        return;
      }
      resp.status(201).json({
        success: true,
        message: "Data added successfully!",
      });
    }
  );
};

export const GetBannerData = (req, resp) => {
  const query = "SELECT * FROM bannerdata";

  mySqlConnection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      resp.status(500).send("Error fetching data");
      return;
    }
    resp.status(200).json(results);
  });
};

export const DeleteBanner = (req, res) => {
  const query = "DELETE FROM bannerdata ORDER BY id ASC LIMIT 1";

  mySqlConnection.query(query, (err, result) => {
    if (err) {
      console.error("Error deleting data:", err);
      res.status(500).send("Error deleting data");
      return;
    }
    res.send("First data entry deleted successfully");
  });
};
