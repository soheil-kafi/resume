import React from "react";
import "../../../css/footer.css";
import { SocialMedias } from "./social/socialMedias";
export const Footer = () => {
  return (
    <div className="bg-primary-color top-border light-color pt-3 pb-3">
      <div className="container">
        <div className="text-color text-center">contact me witch:</div>
        <div className="text-center my-2">social medias</div>
        <SocialMedias />

        <div className="text-center mt-3 mb-1">or my phone number</div>
        <div className="text-color text-center">09104605062</div>
      </div>
    </div>
  );
};
