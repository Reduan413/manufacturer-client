import React from "react";
import profileImg from "../../image/profileImg.jpg";

const MyProfile = () => {
  return (
    <div>
      <div class="hero  ">
        <div class="hero-content flex-col lg:flex-row">
          <img src={profileImg} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold text-secondary">Hello, I am Reduan </h1>
            <p class="py-3">
              I'm Reduan, web designer & developer , i enjoys building things
              that live on the internet. I have a strong passion over web
              technologies. I’m working on my developing skill to build
              exceptional websites and web apps.
            </p>
            <p class="py-3">
              I Currently I’m doing BSc. in Computer Science & Engineering at
              Daffodil International University.I completed Diploma in
              Engineering ( Computer Technology ) from National Institute of
              Technology(NIT).
            </p>
            <p class="py-3">
              My aim is to be a high skilled as a developer and I effectively
              push myself to accomplish my goals.I have Knowledge of HTML, CSS
              and different Frameworks, but I didn't have practical experience
              on the real field. so, At this time,my goal is successfully
              complete this course. Then arranging an internship or full-time
              job to implement the learning knowledge and develop my knowledge &
              skill.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-secondary text-center my-8">
          SKILLS EXPERIENCE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-12">
          <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h2 className="text-xl font-bold text-secondary">Experties</h2>

              <p className="text-justify">
                <ul class="steps steps-vertical text-start">
                  <li data-content="★" class="step step-primary p-1">
                    JavaScript
                  </li>
                  <li data-content="★" class="step step-primary ">
                    ES6
                  </li>
                  <li data-content="★" class="step step-primary ">
                    REST API
                  </li>
                  <li data-content="★" class="step step-primary ">
                    React.Js
                  </li>
                  <li data-content="★" class="step step-primary ">
                    HTML5
                  </li>
                  <li data-content="★" class="step step-primary ">
                    CSS3, SASS
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Bootstrap-5
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Tailwind
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h2 className="text-xl font-bold text-secondary">Comfortable</h2>

              <p className="text-justify">
                <ul class="steps steps-vertical text-start">
                  <li data-content="★" class="step step-primary ">
                    Node.js
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Express.js
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Mongodb
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Firebase
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h2 className="text-xl font-bold text-secondary">Tools</h2>

              <p className="text-justify">
                <ul class="steps steps-vertical text-start">
                  <li data-content="★" class="step step-primary ">
                    Git
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Github
                  </li>
                  <li data-content="★" class="step step-primary ">
                    VS Code
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Heroku
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Netlify
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Postman
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Figma
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h2 className="text-xl font-bold text-secondary">
                Personal Skills
              </h2>

              <p className="text-justify">
                <ul class="steps steps-vertical text-start">
                  <li data-content="★" class="step step-primary ">
                    Communication
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Leadership
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Organization
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Team Work
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-secondary text-center my-8">
          PROJECTS EXPERIENCE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-12">
          <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h2 className="text-xl font-bold text-secondary">
                YouTube Clone
              </h2>
              <p className="text-justify">
                <span>Technology:</span> React.js, CSS, Google YouTube API,
                Firebase, React Router
              </p>
              <p className="text-justify">
                <ul class="steps steps-vertical text-start">
                  <li data-content="★" class="step step-primary ">
                    User can Login using google authentication.
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Can see the detail of videos like youtube on the home page.
                  </li>
                  <li data-content="★" class="step step-primary ">
                    This site fully responsive.
                  </li>
                </ul>
              </p>
              <div>
                <button className="btn btn-outline btn-warning m-2 ">
                  <a href="https://raliyoutube.herokuapp.com/">Live Website</a>
                </button>
                <button className="btn btn-outline btn-success m-2 ">
                  <a href="https://github.com/Reduan413/yt-clone">Code Link</a>
                </button>
              </div>
            </div>
          </div>
          <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h2 className="text-xl font-bold text-secondary">
                YouTube Clone
              </h2>
              <p className="text-justify">
                <span>Technology:</span> React.js, CSS, Google YouTube API,
                Firebase, React Router
              </p>
              <p className="text-justify">
                <li>User can Login using google authentication.</li>

                <li>
                  Can see the detail of videos like youtube on the home page.
                </li>
              </p>
              <div>
                <button className="btn btn-outline btn-warning m-2 ">
                  <a href="https://raliyoutube.herokuapp.com/">Live Website</a>
                </button>
                <button className="btn btn-outline btn-success m-2 ">
                  <a href="https://raliyoutube.herokuapp.com/">Code Link</a>
                </button>
              </div>
            </div>
          </div>
          <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h2 className="text-xl font-bold text-secondary">SA Tech</h2>
              <p className="text-justify">
                <span>Technology:</span> React.js, CSS, Bootstrap, Node.js,
                Express.js, Firebase, MongoDB, React Router
              </p>

              <p className="text-justify">
                <ul class="steps steps-vertical text-start">
                  <li data-content="★" class="step step-primary ">
                    This project is Computer Inventory Management.
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Verification and Authentication Users can add and manage
                    items.
                  </li>
                  <li data-content="★" class="step step-primary ">
                    Verification and Authentication Users can Restock and
                    Delivery items.
                  </li>
                </ul>
              </p>
              <div>
                <button className="btn btn-outline btn-warning m-2 ">
                  <a href="https://inventory-management-37d5b.web.app/">
                    Live Website
                  </a>
                </button>
                <button className="btn btn-outline btn-success m-2 ">
                  <a href="#">Code Link</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
