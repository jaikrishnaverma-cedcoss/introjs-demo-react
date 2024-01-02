import React from "react";
import WrapperIntro from "../../../HOC/WrapperIntro";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="onboarding4" className="d-flex align-content-start flex-wrap">
        {Array(11)
          .fill(11)
          .map((item, i) => (
            <div key={i + "card"} className="col-3 p-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://picsum.photos/200"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      <WrapperIntro
        steps={[
          {
            element: "#onboarding4",
            intro: "test 4",
            position: "right",
          },
        ]}
        hints={[
          {
            element: "#onboarding4",
            intro: "test 4",
            position: "right",
            hint: `test 4 hint`,
            hintPosition: "top",
          }
        ]}
        onComplete={() => {
          navigate("forms");
        }}
      />
    </>
  );
};

export default Dashboard;
