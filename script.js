document.getElementById("accordion-payment-content").style.display = "none";
document.getElementById("accordion-form-content").style.display = "none";

const accordionItem = document.getElementById("accordion-item-content");
const accordionPayment = document.getElementById("accordion-payment-content");
const accordionPaymentIcon = document.getElementById("accordion-payment-icon");
const accordionForm = document.getElementById("accordion-form-content");
const accordionFormIcon = document.getElementById("accordion-form-icon");

const accordionOne = () => {
  if (accordionItem.style.display != "none") {
    accordionItem.style.display = "none";
  } else {
    accordionItem.style.display = "block";
  }
};

const accordionTwo = () => {
  if (accordionPayment.style.display != "none") {
    accordionPayment.style.display = "none";
    accordionPaymentIcon.style.transform = "rotate(0deg)";
  } else {
    accordionPayment.style.display = "";
    accordionPaymentIcon.style.transform = "rotate(180deg)";
  }
};

const accordionThree = () => {
  if (accordionForm.style.display != "none") {
    accordionForm.style.display = "none";
    accordionFormIcon.style.transform = "rotate(0deg)";
  } else {
    accordionForm.style.display = "";
    accordionFormIcon.style.transform = "rotate(180deg)";
  }
};
