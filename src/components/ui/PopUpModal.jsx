import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const PopUpModal = () => {
  const [isModalOpen, setModal] = useState(false);
  const [FormId, setForm] = useState(true);
  const [success, setSuccess] = useState(false)

  function toggleModal() {
    setModal(!isModalOpen);

    if (isModalOpen === true) {
      return document.body.classList.remove("modal--open");
    } else {
      return (document.body.classList += " modal--open");
    }
  }

  function switchForm(form) {
    if (form === "contact") {
      setForm(false);
      document.body.classList += " contact__open";
    } else {
      setForm(true);
      document.body.classList.remove("contact__open");
    }
  }



  function toggleSuccessState(){
      setSuccess(true)
      document.body.classList += " form-submitted";
      
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false)
      document.body.classList.remove("form-submitted");
    }, 4000);
    return () => clearTimeout(timer);
  }, [success]);


    function handleSubmit(e) {
      e.preventDefault();
    }

  return (
    <div>
      <div className="contact__button click" onClick={toggleModal}>
        <FontAwesomeIcon icon={faEnvelope} className="contact__button--icon" />
      </div>

      <div className="backdrop"></div>
      <div className="modal">
        <div className="option__selection--container">
          <div className="active__option"></div>
          <div
            className="modal__option modal__option--black"
            onClick={() => switchForm("sub")}
          >
            <h3 className="option__title">Subscription Form</h3>
          </div>
          <div
            className="modal__option modal__option--purple"
            onClick={() => switchForm("contact")}
          >
            <h3 className="option__title">Contact Form</h3>
          </div>
        </div>
        <div className="form__container">
          <div
            onClick={toggleModal}
            className="exit__button click link__hover-effect link__hover-effect--purple pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="faArrow" /> Go Back
          </div>
          {FormId ? (
            <form className="subscription__form" onSubmit={handleSubmit}>
              {" "}
              <h2 className="modal__title modal__title--contact">
                Sign up for our monthly newsletter!
              </h2>
              <h4 className="modal__sub-title modal__sub-title--contact">
                Find deals, trending NFTs, and new releases
              </h4>
              <div className="form__item">
                <label className="form__item--label">Full Name</label>
                <input className="input" type="text" />
              </div>
              <div className="form__item">
                <label className="form__item--label">Email</label>
                <input className="input" type="text" />
              </div>
              <div className="form__item">
                <label className="form__item--label">Phone Number</label>
                <input className="input" type="text" />
              </div>
              <div className="form__item checkbox">
                <input className="input checkbox__btn" type="checkbox" />
                <label className="form__item--label form__agreement">
                  In accordance with our Privacy Policy, you permit us to store
                  the data you have entered into this form for the purpose of
                  sending you the information you have requested.
                </label>
              </div>
              <button className="sub-form__submit" onClick={toggleSuccessState}>Sign Up!</button>
            </form>
          ) : (
            <div className="contact__container">
              <h2 className="modal__title modal__title--contact">
                Let's have a Chat!
              </h2>
              <h4 className="modal__sub-title modal__sub-title--contact">
                We are here to assist you!
              </h4>
              <form id="contact__form" onSubmit={handleSubmit}>
                <div className="form__item">
                  <label className="form__item--label">Name</label>
                  <input className="input" name="user_name" type="text" />
                </div>
                <div className="form__item">
                  <label className="form__item--label">Email</label>
                  <input className="input" name="user_email" type="text" />
                </div>
                <div className="form__item">
                  <label className="form__item--label">Message</label>
                  <textarea
                    className="input"
                    name="message"
                    type="text"
                  ></textarea>
                </div>
                <button id="contact__submit" className="form__submit" onClick={toggleSuccessState}>
                  Send it our way
                </button>
              </form>
            </div>
          )}
          <div className="success__state">
            <h2 className="success__message">Success! The form was submitted.</h2>
            <p className="sucsess__para">(This screen will disappear shortly)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;
