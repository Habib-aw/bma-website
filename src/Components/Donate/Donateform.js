import React, { useState, useEffect } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  PaymentRequestButtonElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import "./donate.css";
function Donateform() {
  const domain = "server.baitulmamur.academy";
  const protocol = "https";
  function paymentError(msg) {
    return (
      <div className="errorMsg">
        <h5>An Error has occured, details below</h5>
        <div>{msg}</div>
      </div>
    );
  }
  function Error(msg) {
    return <div className="errorMsg">{msg}</div>;
  }
  const elements = useElements();
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [donationAmount, setDonationAmount] = useState(5);
  const [next, setNext] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const donationAmountNum = ["5", "10", "25", "50", "100"];
  const cardNumberOptions = {
    iconStyle: "solid",
    style: {
      base: {
        color: "rgb(0, 0, 35)",
        fontFamily: '"Podkova", "Courier New", serif',
      },
    },
    placeholder: "Card Number",
  };
  const cardOptions = {
    style: {
      base: {
        color: "rgb(0, 0, 35)",
        fontFamily: '"Podkova", "Courier New", serif',
      },
    },
  };
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [other, setOther] = useState(false);
  const [clicked, setClicked] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const checkNext = () => {
    if (isNaN(+donationAmount) || donationAmount === "") {
      setErrorMsg("Please enter a number");
      setError(true);
      return;
    } else if (
      !Number.isInteger(+donationAmount) &&
      donationAmount.toString().split(".")[1].length > 2
    ) {
      setErrorMsg("Please enter a valid amount of money");
      setError(true);
      return;
    } else if (donationAmount < 1) {
      setErrorMsg("Please donate at minimum £1");
      setError(true);
      return;
    }
    if (donationAmount > Math.floor(donationAmount)) {
      if (donationAmount.toString().split(".")[1].length === 1) {
        setDonation(donationAmount + "0");
      }
    }
    setError(false);
    setNext(true);
  };
  function set(num, i) {
    setOther(false);
    var click = Array(clicked.length).fill(false);
    click[i] = true;
    setClicked(click);
    setDonationAmount(num);
  }
  function setOtherF() {
    setOther(true);
    setClicked([false, false, false, false, false, true]);
    setDonationAmount(5);
  }

  function setDonation(amount) {
    if (amount > 999999999999999999) {
      return;
    }
    setDonationAmount(amount);
  }
  function setBack() {
    setError(false);
    setNext(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setLoading(true);
    console.log("pay attempt");
    if (!elements || !stripe) {
      return;
    }
    // e.target.Name.value
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(
        CardNumberElement,
        CardCvcElement,
        CardExpiryElement
      ),
      billing_details: {
        name: e.target.Name.value,
      },
    });
    if (!error) {
      const { id } = paymentMethod;
      try {
        const { accepted, message, clientSecret, backendError } = await fetch(
          protocol + "://" + domain + "/create-payment-intent",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id,
              amount: Math.round(donationAmount * 100),
            }),
          }
        ).then((r) => r.json());
        console.log("client secret on normal payment", clientSecret);
        if (accepted) {
          console.log(message);
          await stripe
            .confirmCardPayment(clientSecret)
            .then(function (response) {
              if (response.error) {
                console.log("Error 4", response.error.message);
                setDisabled(false);
                setErrorMsg(response.error.message);
                setError(true);
              } else if (
                response.paymentIntent &&
                response.paymentIntent.status === "succeeded"
              ) {
                setPaymentSuccess(true);
              }
            });
          // const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
          //     payment_method: {
          //         card: elements.getElement(
          //             CardNumberElement,
          //             CardCvcElement,
          //             CardExpiryElement
          //             ),
          //         },
          //     });

          //     if (stripeError) {
          //         console.log("api error",stripeError.message);
          //         return;
          //     }
          // setPaymentSuccess(true);
        } else {
          setErrorMsg(backendError.raw.message);
          setError(true);
          console.log(message);
          console.log("Error 3", backendError.raw.message);
          setDisabled(false);
        }
      } catch (e) {
        setErrorMsg(e);
        setError(true);
        console.log("Error 2", e);
        setDisabled(false);
      }
    } else {
      setErrorMsg(error.message);
      setError(true);
      console.log("Error 1", error.message);
      setDisabled(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    // const donation = donationAmount * 100;
    // console.log(donationAmount, "abc", donation);
    if (!stripe || !elements) {
      return;
    }
    const pr = stripe.paymentRequest({
      currency: "gbp",
      country: "GB",
      requestPayerEmail: false,
      requestPayerName: false,
      total: {
        label: "Baitul Mamur Academy Donation",
        amount: Math.round(donationAmount * 100),
      },
    });
    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });
    pr.on("paymentmethod", async (e) => {
      console.log("entered here");
      const { clientSecret } = await fetch(
        protocol + "://" + domain + "/create-pay-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            paymentMethodType: "card",
            currency: "gbp",
            amount: Math.round(donationAmount * 100),
          }),
        }
      ).then((r) => r.json());
      console.log("secret recieved", clientSecret);
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: e.paymentMethod.id,
        },
        { handleActions: false }
      );
      if (error) {
        console.log("11111111111111111111111111111110000000000000", error);
        e.complete("fail");
        return;
      }
      e.complete("success");
      if (paymentIntent.status == "requires_action") {
        stripe.confirmCardPayment(clientSecret);
      }
      setPaymentSuccess(true);
    });
  }, [donationAmount, stripe, elements]);
  return (
    <>
      {paymentSuccess ? (
        <h1 className="d-flex justify-content-center p-5 thanks">
          Jazak Allahu khair for your donation of <br />£{donationAmount}
        </h1>
      ) : (
        <form className="donation" onSubmit={handleSubmit}>
          {next ? (
            <>
              <div className={(loading ? "" : "hidePayForm") + " loading"}>
                <div class="loadingWrapper">
                  <div class="loadingImg">
                    <div></div>
                  </div>
                </div>
              </div>
              <div className={loading ? "hidePayForm" : ""}>
                <button className=" btn backBtn" onClick={() => setBack()}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      viewBox="0 0 354 511.51"
                      className="backArrow"
                    >
                      <path
                        fill-rule="nonzero"
                        d="M350.65 117.68 221.03 255.76l129.62 138.08c4.67 4.96 4.43 12.76-.53 17.43l-100.74 96.79c-4.9 4.72-12.71 4.57-17.43-.33L3.35 264.21c-4.49-4.78-4.44-12.19 0-16.9L231.86 3.88c4.66-4.96 12.47-5.2 17.43-.53l100.92 96.99c4.88 4.69 5.06 12.42.44 17.34zM195.13 247.31l129.21-137.64-83.05-79.8L29.25 255.76l212.04 225.89 83.05-79.8-129.21-137.64c-4.43-4.71-4.49-12.12 0-16.9z"
                      />
                    </svg>
                  </div>
                  <div>back</div>
                </button>
                <h2 className="donate-subtitle">Payment method</h2>
                <h5 className="d-flex justify-content-center">
                  Amount: £{donationAmount}
                </h5>
                <div className="payment-method-details">
                  {next && paymentRequest && (
                    <PaymentRequestButtonElement
                      options={{ paymentRequest }}
                      id="payButton"
                    />
                  )}
                  <div id="nameDonateWrapper">
                    <input
                      id="nameDonate"
                      name="Name"
                      type="text"
                      placeholder="Name"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div id="cardNum">
                    <CardNumberElement
                      options={cardNumberOptions}
                      className="payElement"
                    />
                  </div>
                  <div className="cvcExp">
                    <div id="cvc">
                      <CardExpiryElement
                        options={cardOptions}
                        className="payElement"
                      />
                    </div>
                    <div id="exp">
                      <CardCvcElement
                        options={cardOptions}
                        className="payElement"
                      />
                    </div>
                  </div>
                </div>
                {error ? paymentError(errorMsg) : null}
                <div className="buttonsMethod">
                  <button
                    type="submit"
                    className="btn button"
                    disabled={disabled}
                  >
                    Pay
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="donate-subtitle">
                How much would you like to donate
              </h2>
              <div className="donation-btns">
                {donationAmountNum.map((num, i) => {
                  return (
                    <React.Fragment key={i}>
                      <input
                        type="radio"
                        id={num}
                        name="donate"
                        value="donate"
                        onClick={() => set(num, i)}
                      />
                      <label
                        id={clicked[i] ? "bg-highlight" : ""}
                        htmlFor={num}
                      >
                        £{num}
                      </label>
                    </React.Fragment>
                  );
                })}
                <input
                  type="radio"
                  id="other"
                  name="donate"
                  value="donate"
                  className="donate-btn"
                  onClick={() => setOtherF()}
                />
                <label id={clicked[5] ? "bg-highlight" : ""} htmlFor="other">
                  Other
                </label>
                {other ? (
                  <div style={{ marginTop: 12 }}>
                    <span>£</span>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={donationAmount}
                      onChange={(e) => setDonation(e.target.value)}
                      autoComplete="off"
                    ></input>
                  </div>
                ) : null}
              </div>
              {error && other ? Error(errorMsg) : null}
              <div className="buttonsAmount">
                <button
                  type="button"
                  className="button btn"
                  onClick={() => checkNext()}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </form>
      )}
    </>
  );
}

export default Donateform;
