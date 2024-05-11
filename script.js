let remove = document.querySelectorAll(".remove");
remove.forEach((remove) => {
  if (remove.placeholder) {
    remove.addEventListener("focus", (e) => {
      remove.placeholder = "";
    });
  } else {
    remove.addEventListener.preventDefault();
  }
});
