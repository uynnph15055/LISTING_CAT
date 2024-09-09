const $ = (element) => {
  const elements = document.querySelectorAll(element);
  return elements.length === 1 ? elements[0] : elements;
};

const acc = $(".accordion");
const toggle = $("#switch");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.style.borderBottom = "0px";
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.style.maxHeight = null;
      }
    }

    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.style.borderBottom = "1px solid #ebebeb";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

toggle.addEventListener("change", function (e) {
  const checkboxValue = e.target.checked;
  const listTextChange = $(".toggle-change");
  if (checkboxValue) {
    $("#body").classList.add("bg-black");
    $(".form-button").classList.add("toggle-button");
    $(".header-title_logo").src = "./assets/images/toggle-icon-title.svg";
    for (let ind = 0; ind < listTextChange.length; ind++) {
      listTextChange[ind].classList.add("text-light");
    }
  } else {
    $("#body").classList.remove("bg-black");
    $(".form-button").classList.remove("toggle-button");
    for (let ind = 0; ind < listTextChange.length; ind++) {
      listTextChange[ind].classList.remove("text-light");
    }
    $(".header-title_logo").src = "./assets/images/icon-title.svg";
  }
});
