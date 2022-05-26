import { faListCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Summary = () => {
  return (
    <div className="mx-12">
      <h1 className="text-5xl font-bold text-secondary text-center my-8">
        MILLIONS BUSINESS TRUST US
      </h1>
      <div className=" shadow w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        <div className="stat ">
          <div className="stat-figure text-primary">
          <FontAwesomeIcon
            style={{ color: "#5F9EA0" }}
            icon={faUsers}
            className="fa-2x"
          />
          </div>
          <div className="stat-value text-primary mt-4">45</div>
          <div className="stat-desc text-1xl">Happy Clients</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          <FontAwesomeIcon
            style={{ color: "#5F9EA0" }}
            icon={faListCheck}
            className="fa-2x"
          />
          </div>
          <div className="stat-value text-secondary">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-value text-secondary">150+</div>
          <div className="stat-title">Feedbacks</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
