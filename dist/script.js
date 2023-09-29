const navbar = document.querySelector("#navbar");
window.addEventListener("scroll", function () {
  navbar.classList.remove("translate-y-[300%]");
  navbar.classList.add("translate-y-[0%]");

  // *********************** CHECK IF USER AFK *********************** \\
  let inactivityTime = 0;
  const afkThreshold = 3000; // User afk limit time

  function resetTimer() {
    inactivityTime = 0;
  }

  function checkInactivity() {
    inactivityTime += 1000; // Increase the time counter by 1 second
    if (inactivityTime >= afkThreshold) {
      const navbar = document.querySelector("#navbar");

      navbar.classList.add("translate-y-[300%]");
      navbar.classList.remove("translate-y-[0%]");
    }
  }

  // Reset the timer on user activity
  window.addEventListener("mousemove", resetTimer);
  window.addEventListener("keydown", resetTimer);
  window.addEventListener("scroll", resetTimer);

  // Check for inactivity every second
  setInterval(checkInactivity, 1000);
});
