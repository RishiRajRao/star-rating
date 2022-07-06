var collection = document.getElementsByClassName("fa");
console.log(collection);

Array.from(collection).forEach((node) => {
  node.addEventListener("mouseover", colorOnHover);
  node.addEventListener("mouseout", colorOnHover);
});

// document.getElementsByClassName("fs").addEventListener("click", colorOnClick);

function colorOnHover(e) {
  console.log(e);
  Array.from(collection).forEach((node) =>
    parseInt(node.id) <= parseInt(e.target.id)
      ? node.classList.toggle("clr-red")
      : ""
  );
}
