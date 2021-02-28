document.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-btn")) {
    let inputVal = prompt(
      "Please update your desired value here!",
      e.target.parentElement.parentElement.querySelector(".items").innerText
    );
    if (inputVal) {
      axios
        .post("/update-item", {
          tasks: inputVal,
          id: e.target.getAttribute("data-id"),
        })
        .then(function () {
          e.target.parentElement.parentElement.querySelector(
            ".items"
          ).innerText = inputVal;
        })
        .catch(function () {
          //do something is having an error at the post
        });
    }
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    if (confirm("Are you you want to delete this?")) {
      axios
        .post("/delete-item", {
          id: e.target.getAttribute("data-id"),
        })
        .then(function () {
          e.target.parentElement.parentElement.remove();
        })
        .catch(function () {
          //do something is having an error at the post
        });
    }
  }
});
