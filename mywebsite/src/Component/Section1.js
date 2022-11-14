import React from "react";
import Batmenter from "./Helper/images/Batmenter.png.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
function Section1() {
  return (
    <>
      <div className="p-5 text-center text-sm-start">
        <div className="container d-sm-flex align-items-center">
          <div className="me-5">
            <h1>
              LOREM IPSUM DOLOR SIT
              <br />
              AMET, CONSECTETUR
            </h1>
            <p className="lead M-5">
              Then Create your Pirate Team and enter the Grand Line .<br />
              Lorem totam maiores! Placeat, mollitia esse odio autem
              <br />
              recusandae laborum corrupti quaerat minus dolorem earum fugit,
            </p>
            <button className="btn btn-lg text-white rounded">
              GET STARTED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <AiOutlineArrowRight />
            </button>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <img
              className="img-fluid w-75 d-md-block ms-5 text-sm-start"
              src={Batmenter}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section1;
