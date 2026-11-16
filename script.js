const pauseButton = document.getElementById("pauseBtn");

pauseButton.addEventListener("click", () => {
  const paused = document.body.classList.toggle("paused");
  pauseButton.textContent = paused ? "Resume animations" : "Pause animations";
  pauseButton.setAttribute("aria-pressed", String(paused));
});
