// burger
document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".header__burger");
  const burgerMenu = document.querySelector(".header__menu");
  const navLink = document.querySelectorAll(".header__link");

  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    document.body.classList.toggle("overflow");
  });

  // close link click
  navLink.forEach((e) => {
    e.addEventListener("click", () => {
      if (burgerMenu.classList.contains("active")) {
        burgerMenu.classList.remove("active");
        document.body.classList.remove("overflow");
        document.getElementById("burger-checkbox").checked = false;
      }
    });
  });

  // close out nav list
  document.querySelector("main").addEventListener("click", () => {
    if (burgerMenu.classList.contains("active")) {
      burgerMenu.classList.remove("active");
      document.body.classList.remove("overflow");
      document.getElementById("burger-checkbox").checked = false;
    }
  });
});

// percent
document.addEventListener("DOMContentLoaded", () => {
  const range = document.querySelector(".order__range");
  const value = document.querySelector(".order__range-value");
  if (!range || !value) return;

  const update = () => {
    value.textContent = range.value + " %";
  };

  update();
  range.addEventListener("input", update);
});

// select
document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector(".order__select");
  if (!select) return;

  const trigger = select.querySelector(".order__select-trigger");
  const panel = select.querySelector(".order__select-panel");
  const options = select.querySelectorAll(".order__select-option");
  const hidden = select.querySelector(".order__select-input");

  trigger.addEventListener("click", () => {
    select.classList.toggle("order__select_open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const value = option.getAttribute("data-value");
      hidden.value = value;
      trigger.textContent = value;
      options.forEach((o) => o.classList.remove("order__select-option_active"));
      option.classList.add("order__select-option_active");
      select.classList.remove("order__select_open");
    });
  });

  document.addEventListener("click", (event) => {
    if (!select.contains(event.target)) {
      select.classList.remove("order__select_open");
    }
  });
});
