onst readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".u-text-2");

readMoreBtn.addEventListener("click", (e) => {
  u-text-2.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const touchButton = document.querySelector(".float-text");
const card = document.querySelector(".float-card-info");
const close = document.querySelector(".gg-close-r");

touchButton.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}
