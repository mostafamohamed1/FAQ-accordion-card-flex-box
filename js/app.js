const faqItems = document.querySelectorAll(".faq-item");
const arrOfElems = ["item-head", "arrow", "question"];

const removeActive = () => {
  faqItems.forEach((item) => {
    if (item.classList.contains("active")) item.classList.remove("active");
  });
};

document.addEventListener("click", function (e) {
  let flag = arrOfElems.filter((ele) =>
    e.target.className == ele ? true : false
  );

  if (flag[0]) {
    removeActive();
    e.target.closest(".faq-item").classList.add("active");
  }
});
