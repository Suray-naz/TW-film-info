import { useState } from "react";
import "./Film.css";
import FilmInfo from "./FilmInfo";

const FilmYear = ({ data }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleClick=(tarih)=>{
    setSelectedDate(tarih)
  };

  return (
    <div className="container shadow p-3 rounded-3 mt-5">
      <div className="d-flex">
        <div className="list">
          {data.map((tarih) => (
            <div key={tarih.id}>
              <button className="button mb-3 me-3 mt-3 p-1 w-100 fs-5 fw-bold shadow border-white bg-warning rounded-3" onClick={()=>handleClick(tarih.date)}>{tarih.date}</button>
            </div>
          ))}
          
        </div>
      </div>
      <div className="container d-flex">
        <FilmInfo selectDate={selectedDate} data={data}/>
      </div>
    </div>
  );
};

export default FilmYear;
