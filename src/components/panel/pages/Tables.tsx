import React from "react";
import WrapperIntro from "../../../HOC/WrapperIntro";

const Tables = () => {
  return (
<>
<div className="card m-1 " id="onboarding6">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    <WrapperIntro
    steps={[
      {
        element: "#onboarding6",
        intro: "complete",
        position: "right",
      },
    ]}
    onComplete={() => {
    }}
  />
</>
  );
};

export default Tables;
