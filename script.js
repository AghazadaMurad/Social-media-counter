"ues strict";

const counters = document.querySelectorAll(".counter");

counters.forEach((counterEl) => {
  counterEl.innerText = "0";
  const uptadeCounter = () => {
    const target = +counterEl.getAttribute("data-target");
    const counter = +counterEl.innerHTML;
    const increment = target / 500;

    if (counter < target) {
      counterEl.innerHTML = `${Math.ceil(counter + increment)}`;
      setTimeout(uptadeCounter, 1);
    } else {
      counterEl.innerText = target;
    }
  };
  uptadeCounter();
});
