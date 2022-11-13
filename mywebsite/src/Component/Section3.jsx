import React from "react";
import Car from './Helper/images/smart-car.png'
import Ship from './Helper/images/ship.png'
import Bus from './Helper/images/bus.png'
import Driving from './Helper/images/driving.png'
//import Rectangle3 from './Helper/images/Rectangle 486.png'
function Section3(){
    return(
        <>
        <div className="container">
        <div className="row">
            <div className="col-4">
                <div className="content">
                    <div className="custom-bg">
                        <h4 className="text-warning mb-4">MOT CONSECTET</h4>
                        <h3 className="header mb-2">AMET,CONSECTET</h3>
                    </div>
                    <p>
                        Then Create your Pirate Team and enter the Grand Line.
                        Lorem totam maiores! Placeat, mollitia esse odio autem
                        Then Create your Pirate Team and enter the Grand Line.
                        Lorem totam maiores! Placeat, mollitia esse odio autem
                    </p>
                        <button className="btn btn-lg text-white rounded">
                            GET STARTED<span className="ms-5">--></span>
                        </button>
                </div>
            </div>
            <div className="col">
        <div className="d-flex flex-column">
            <div className="d-flex mb-4">
                <div className="content card me-4">
                    <img className="h-5 bg-header w-25" src={Car} />
                    <h4 className="">MOT<span className="h6"> CONSECTET</span></h4>
                    <p>Then Create your Pirate Team and enter the Grand Line.Placeat</p>
                </div>
                <div className="content card">
                    <img className="h-5 bg-header w-25" src={Car} />
                    <h4 className="">MOT<span className="h6"> CONSECTET</span></h4>
                    <p>Then Create your Pirate Team and enter the Grand Line.Placeat</p>
                </div>
            </div>
            <div className="d-flex">
                <div className="content card me-4">
                    <img className="h-5 bg-header w-25" src={Car} />
                    <h4 className="">MOT<span className="h6"> CONSECTET</span></h4>
                    <p>Then Create your Pirate Team and enter the Grand Line.Placeat</p>
                </div>
                <div className="content card">
                    <img className="h-5 bg-header w-25" src={Car} />
                    <h4 className="">MOT<span className="h6"> CONSECTET</span></h4>
                    <p>Then Create your Pirate Team and enter the Grand Line.Placeat</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
        </>
    )
}
export default Section3