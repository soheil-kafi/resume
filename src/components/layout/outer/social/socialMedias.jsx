import React from "react";

export const SocialMedias = () => {
  return (
    <div className="d-flex justify-content-around">
      <div className="bg-primary-color my-outline p-2 card light-color cursor">
        <a
          href="https://t.me/soheil_sior"
          className="light-color"
          target="_blank"
        >
          <div className="text-center">telegram</div>

          <div className="text-center text-color">@soheil_sior</div>
          <div className="mt-3 text-center">also you can click </div>
        </a>
      </div>
      <div className="bg-primary-color my-outline p-2 card light-color cursor">
        <a
          href="https://github.com/soheil-kafi"
          className="light-color"
          target="_blank"
        >
          <div className="text-center">github</div>

          <div className="text-center text-color">soheil-kafi</div>
          <div className="mt-3 text-center">also you can click</div>
        </a>
      </div>
      <div className="bg-primary-color my-outline p-2 card light-color cursor">
        <div className="text-center">Email</div>

        <div className="text-center text-color">
          soheyikafi86
          <br />
          @gmail.com
        </div>
        <div className="mt-3 text-center"> you can`t click :(</div>
      </div>
    </div>
  );
};
