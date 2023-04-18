window.document.addEventListener("DOMContentLoaded", async function () {
  // let btnClick = document.querySelector("#btn");
  // btnClick.addEventListener("click", function () {
  //   alert("hello html ");
  // });

  // For the first section
  let trigger = document.querySelector("#overview");
  trigger.addEventListener("click", function (event) {
    let parentHtml = document.querySelector("#parent");
    parentHtml.classList.remove("show");
    parentHtml.classList.add("hidden");
    let dummyHtml = document.querySelector("#testing");
    dummyHtml.classList.remove("hidden");
    dummyHtml.classList.add("show");
  });

  let hideDummy = document.querySelector("#hiddenBtn");
  hideDummy.addEventListener("click", function (event) {
    let parentHtml = document.querySelector("#parent");
    parentHtml.classList.remove("hidden");
    parentHtml.classList.add("show");
    let dummyHtml = document.querySelector("#testing");
    dummyHtml.classList.remove("show");
    dummyHtml.classList.add("hidden");
  });
});
