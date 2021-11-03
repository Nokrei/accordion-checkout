// document.getElementById("accordion-payment-content").style.display = "none";
// document.getElementById("accordion-form-content").style.display = "none";

const hidden = {
  height: "0",
  opacity: "0",
  padding: "0",
  visibility: "hidden",
  position: "relative",
  zIndex: "-1",
  margin: "0",
};

const visible = {
  height: "180px",
  opacity: "1",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  visibility: "visible",
  position: "relative",
  zIndex: "1",
};

const accordionItem = document.getElementById("accordion-item-content");
const accordionPayment = document.getElementById("accordion-payment-content");
const accordionPaymentIcon = document.getElementById("accordion-payment-icon");
const accordionForm = document.getElementById("accordion-form-content");
const accordionFormIcon = document.getElementById("accordion-form-icon");

Object.assign(accordionPayment.style, hidden);
Object.assign(accordionForm.style, hidden);

const accordionOne = () => {
  if (accordionItem.style.display != "none") {
    accordionItem.style.display = "none";
  } else {
    accordionItem.style.display = "block";
  }
};

const accordionTwo = () => {
  if (accordionPayment.style.opacity != "0") {
    Object.assign(accordionPayment.style, hidden);
    accordionPaymentIcon.style.transform = "rotate(0deg)";
  } else {
    Object.assign(accordionPayment.style, visible);
    accordionPaymentIcon.style.transform = "rotate(180deg)";
  }
};

const accordionThree = () => {
  if (accordionForm.style.opacity != "0") {
    Object.assign(accordionForm.style, hidden);
    accordionFormIcon.style.transform = "rotate(0deg)";
  } else {
    Object.assign(accordionForm.style, visible);
    accordionFormIcon.style.transform = "rotate(180deg)";
  }
};
