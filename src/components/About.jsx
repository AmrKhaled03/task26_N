import React from "react";
import "../App.css";

const About = () => {
  return (
    <div className="about my-5 py-3" id="about">
      <div className="container d-flex justify-content-center align-items-center flex-column text-center">
        <div className="row text-center">
          <div className="col-lg-12">
            <h1 className="special-heading mb-5">About Us</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className=" aboutsec col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex jusify-content-center align-items-center text-center ">
            <ul>
              <li>
                At <strong>[Squeeze]</strong>, we are dedicated to bringing you
                the finest and most refreshing juices nature has to offer.
              </li>
              <li>
                We believe that a great juice starts with the best ingredients,
                and we are committed to sourcing the highest quality fruits to
                create our delightful blends.
              </li>
              <li>We make our juices with fresh fruits and diet stevia</li>
              <li>
                Quality is at the core of everything we do. From the orchard to
                your glass, we take great care in ensuring that each drop of our
                juice meets the highest standards. Our fruits are handpicked at
                the peak of ripeness to capture their natural flavors and
                nutritional benefits.
              </li>
              <li>
                Our juices are a celebration of nature's bounty. From classic
                apple and orange juices to more exotic blends like tropical
                fruit medleys, we offer a wide range of flavors to tantalize
                your taste buds. Each sip is a burst of freshness and vitality.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
