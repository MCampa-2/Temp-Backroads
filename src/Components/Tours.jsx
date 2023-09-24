import React from "react";
import { toursData } from "../data";

function Tours(){
    return(
        <section className="section" id="tours">
        <div className="section-title">
          <h2>featured <span>tours</span></h2>
        </div>

        <div className="section-center featured-center">
          {toursData.map((tours) =>{
            const {id,img,date,title,text,icon,location,time,cost} = tours;
            return <>
            <article key={id} className="tour-card">
            <div className="tour-img-container">
              <img src={img}className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>
                {text}
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className={icon}></i></span> {location}
                </p>
                <p>{time}</p>
                <p>{cost}</p>
              </div>
            </div>
          </article>
            </>
          })}
        </div>
      </section>
    )
};

export default Tours;