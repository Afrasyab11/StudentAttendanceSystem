import { useState } from "react";
import data from "./db.json";
import { useNavigate } from "react-router-dom";
import "./attndnce.css";

const Attandance = () => {
  const [Name, setname] = useState("");
  const [id, setid] = useState("");
  const [Attendance, setattendance] = useState("");

  let navigate = useNavigate();
  const markAttendance = () => {
    let state = data;
    if (id && Name && Attendance !== null) {
      let a = id,
        b = Name,
        c = Attendance;

      data.push({ id: a, Name: b, Attendance: c });
      console.log(data);
      navigate("/View-attandance-sheet");
    } else {
      alert("all field required");
    }
  };

  return (
    <div>
      <form className="attend-form">
        <h4 className="attend-tittle">Attandance Sheet</h4>
        <input
          className="attend-id"
          type="number"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setid(e.target.value)}
        />
        <br></br>
        <input
          className="attend-name"
          type="text"
          placeholder="Enter name"
          value={Name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          className="attend-mark"
          type="text"
          placeholder="Enter Attendance"
          value={Attendance}
          onChange={(e) => setattendance(e.target.value)}
        ></input>
        <button
          className="attend-submit"
          type="button"
          onClick={markAttendance}
        >
          Mark Attendance
        </button>
      </form>
    </div>
  );
};

export default Attandance;
