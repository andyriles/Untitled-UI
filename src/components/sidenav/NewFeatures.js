import React from "react";
import PlayButton from "../../assets/Icons/_Play button.svg";
import FeatureImage from "../../assets/Images/Image.svg";
function NewFeatures() {
  return (
    <div className="card rounded-none bg-base-200 shadow-xl -mt-3 ">
      <div className="card-body ">
        <h2 className="card-title text-sm text-left ">
          New features available!
        </h2>
        <p className="text-sm">
          Checkout the new dashboard view. Pages now load faster
        </p>
      </div>
      <div className="relative">
        <div className="flex justify-center item-center">
          <img src={FeatureImage} alt="feature" />
        </div>
        {/* <button className=" btn rounded-full cursor-pointer absolute bottom-0 ml-2 mb-2">
          <img src={PlayButton} alt="play-button" />
        </button> */}
        <div className="filter hover:brightness-200 cursor-pointer absolute bottom-0 ml-2 mb-2">
          <img className="" src={PlayButton} alt="play-button" />
        </div>
      </div>
      <div className="flex justify-center item-center mt-1">
        <span className="link link-hover mr-3">Dismiss</span>
        <span className="link text-purple-500">What's new?</span>
      </div>
    </div>
  );
}

export default NewFeatures;
