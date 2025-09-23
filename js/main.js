const date = document.querySelector(".current-date");
const counter = document.querySelector(".section-title");
const today = new Date();

function setCurrentdate() {
  const day = today.getDate();
  let month = today.getMonth();
  const year = today.getFullYear();
  if (month < 10) {
    month = `0${month}`;
  }
  date.innerHTML = `${day}.${month}.${year}`;
}

setCurrentdate();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionNumber = entry.target.getAttribute("data-number");
        counter.textContent = `NO.${sectionNumber}`;
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".observe").forEach((observe) => {
  observer.observe(observe);
});
