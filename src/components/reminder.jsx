import React from "react";

const Reminder = () => {
  return (
    <section id="reminder">
      <div className="container">
        <div className="row">
            <div className="reminder__container">
          <h3 className="reminder__title">Like what you're seeing? Want to see more?</h3>
          <div className="button__container">
            <button className="landing__btn click">Browse NFTs!</button>
            <button className="landing__btn click">Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reminder;
