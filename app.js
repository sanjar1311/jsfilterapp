const boxes = document.querySelectorAll(".box")
// const allBtn = document.querySelector(".all")

document.querySelector(".nav").addEventListener("click", e => {
  if(e.target.classList.contains("btn")) {
    let filterClass = e.target.dataset["f"]

    boxes.forEach(item => {
      item.classList.remove("hide")
      if(filterClass === "all-b") {
        item.classList.remove("hide")
      } else if(!item.classList.contains(filterClass)) {
        item.classList.add("hide")
      } else {
        item.classList.remove("hide")
      }
    })
  }
})