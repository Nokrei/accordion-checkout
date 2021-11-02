document.getElementById("accordion-payment-content").style.display = "none";
document.getElementById("accordion-form-content").style.display = "none";

const accordionItem = document.getElementById("accordion-item-content");
const accordionPayment = document.getElementById("accordion-payment-content");
const accordionForm = document.getElementById("accordion-form-content");

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
  } else {
    accordionPayment.style.display = "";
  }
};

const accordionThree = () => {
  if (accordionForm.style.display != "none") {
    accordionForm.style.display = "none";
  } else {
    accordionForm.style.display = "";
  }
};
