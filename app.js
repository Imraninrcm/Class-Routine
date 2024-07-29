const days = document.querySelector("#days");
const dayContainers = {
  monday: document.querySelector("#monday"),
  tuesday: document.querySelector("#tuesday"),
  wednesday: document.querySelector("#wednesday"),
  thursday: document.querySelector("#thursday"),
  friday: document.querySelector("#friday"),
};

// Initially hide all days except Monday
Object.keys(dayContainers).forEach((day) => {
  if (day !== "monday") {
    dayContainers[day].classList.add("none");
  }
});

days.addEventListener("input", () => {
  // Hide all days
  Object.keys(dayContainers).forEach((day) => {
    dayContainers[day].classList.add("none");
  });

  // Show the selected day
  const selectedDay = days.options[days.selectedIndex].text.toLowerCase();
  dayContainers[selectedDay].classList.remove("none");
});
