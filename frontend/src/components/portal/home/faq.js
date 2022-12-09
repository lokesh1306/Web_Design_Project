import React from "react";
import Layout from "../layout/index";


const Faqcomponent = (props) => {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <br />
      <div class="accordion" id="accordionExampleY">
      <div class="accordion-item">
        <div className="faq-section">
          <h1>FAQ</h1>
        <h2 class="accordion-header" id="headingOneY">
          <button class="accordion-button" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#collapseOneY" aria-expanded="true" aria-controls="collapseOneY">
            <i class="fas fa-question-circle fa-sm me-2 opacity-70">Which payment methods are acceptable?</i>
          </button>
        </h2>
        <div id="collapseOneY" class="accordion-collapse collapse show" aria-labelledby="headingOneY"
          data-mdb-parent="#accordionExampleY">
          <div class="accordion-body">
            <strong>We accept PayPal payments, Discover, Mastercard, Visa or American Express.</strong>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwoY">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#collapseTwoY" aria-expanded="false" aria-controls="collapseTwoY">
            <i class="fas fa-question-circle fa-sm me-2 opacity-70">How do I obtain Essential Trip Information with full details of my trip?</i>
          </button>
        </h2>
        <div id="collapseTwoY" class="accordion-collapse collapse" aria-labelledby="headingTwoY"
          data-mdb-parent="#accordionExampleY">
          <div class="accordion-body">
            <strong>Make sure you bring these with you. Every trip has a set of Essential Trip Information, accessible on our website, that gives you in-depth information about all aspects of your trip. To access your Essential Trip Information, please visit your trip’s specific facts page on our website. The Essential Trip Information are accessible at the top of this page.</strong>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThreeY">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#collapseThreeY" aria-expanded="false" aria-controls="collapseThreeY">
            <i class="fas fa-question-circle fa-sm me-2 opacity-70">Is it possible to manage details through dashboard?</i>
          </button>
        </h2>
        <div id="collapseThreeY" class="accordion-collapse collapse" aria-labelledby="headingThreeY"
          data-mdb-parent="#accordionExampleY">
          <div class="accordion-body">
            <strong>Yes. You simply need to be logged in and go to your dashboard. There you’ll be able to do things like update your calendar to show your next availability, adjust your notification preferences, change your details and update your preferences.</strong> 
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFourY">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseFourY" aria-expanded="false" aria-controls="collapseFourY">
            <i class="fas fa-question-circle fa-sm me-2 opacity-70">Multiple tour bookings are allowed?</i>
          </button>
        </h2>
        <div id="collapseFourY" class="accordion-collapse collapse" aria-labelledby="headingFourY"
          data-mdb-parent="#accordionExampleY">
          <div class="accordion-body">
            <strong>Yes. To travel on any tour, you must be deemed Good to Go. If you have multiple tours on one booking, you only need to go through the process once</strong> 
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFiveY">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseFiveY" aria-expanded="false" aria-controls="collapseFiveY">
            <i class="fas fa-question-circle fa-sm me-2 opacity-70">I want to cancel my booking?</i>
          </button>
        </h2>
        <div id="collapseFiveY" class="accordion-collapse collapse" aria-labelledby="headingFiveY"
          data-mdb-parent="#accordionExampleY">
          <div class="accordion-body">
            <strong>Reach out to us right away. If it is beyond usual business hours, kindly contact the following travel agency to cancel any reservations you won't be able to maintain. To start the cancellation process and make sure you receive the full refund, please call the provider's 24-hour number.</strong> 
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFiveY">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseFiveY" aria-expanded="false" aria-controls="collapseFiveY">
            <i class="fas fa-question-circle fa-sm me-2 opacity-70">All taxes are included in the booking prices?</i>
          </button>
        </h2>
        <div id="collapseFiveY" class="accordion-collapse collapse" aria-labelledby="headingFiveY"
          data-mdb-parent="#accordionExampleY">
          <div class="accordion-body">
            <strong>The price you provide must include the base rate and all taxes and fees are included in the booking prices.Taxes and fees must represent all mandatory charges collected by the partner.</strong> 
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

const Faq = (props) => {
  return <Layout children={<Faqcomponent />} />;
};

export default Faq;