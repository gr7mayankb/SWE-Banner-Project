import React, { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [link, setLink] = useState("");
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [timer, setTimer] = useState("");
  const [priority, setPriority] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "Admin") navigate("/");
    if (role === "User") navigate("/banner");
  }, []);

  const AddData = async (e) => {
    e.preventDefault();
    console.log(link, description, visibility, timer);
    const formData = {
      tittle,
      link,
      description,
      visibility,
      timer,
      id: priority,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/banner/new",
        formData
      );
      console.log("Data successfully sent:", response.data);
    } catch (error) {
      console.error("There was an error sending the data:", error);
    }
  };
  return (
    <div>
      <div className="AdminForm">
        <div className="wrapper">
          <form action="submit">
            <h1>Admin</h1>

            <div className="input-box">
              <input
                type="text"
                placeholder="Banner Tittle"
                value={tittle}
                onChange={(e) => setTittle(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="link"
                placeholder="Banner Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className="input-box">
              <input
                type="time"
                placeholder="Banner Timer"
                value={timer}
                onChange={(e) => setTimer(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="number"
                placeholder="Banner Priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              />
            </div>
            <div className="input-box description">
              <input
                type="text"
                placeholder="Banner Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="toggle">
              <h3>Banner On/Off (Toggle Visibility)</h3>
              <input
                type="checkbox"
                className="checkbox"
                value={visibility}
                onChange={(e) => setVisibility(e.target.checked)}
              />
            </div>
            <button className="btn" type="submit" onClick={AddData}>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
