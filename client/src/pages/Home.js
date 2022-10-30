import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import templateimg from "../resources/templates/template1.png";
import template2img from "../resources/templates/template2.png";
import template3img from '../resources/templates/template3.png';
import template4img from '../resources/templates/template4.png';
import template5img from '../resources/templates/template5.png';
import template6img from '../resources/templates/template6.png';
import "../resources/templates.css";

import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: templateimg,
    },
    {
      title: "Good Resume",
      image: template2img,
    },
    {
      title: " Sample Resume",
      image: template3img,
    },
    {
      title: " Sample Resume",
      image: template4img,
    },
    {
      title: " Sections Resume",
      image: template5img,
    },
    {
      title: " Highlighted Sections Resume Sections Resume",
      image: template6img,
    },
  ];
  return (
    <DefaultLayout>
      <div className="row home">
        {templates.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={template.image}
                  height="400"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    TRY
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}

export default Home;