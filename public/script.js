/* =====================================================================
   Supplier Sustainability Portal 2026 — decision-tree toggle
   Pure UI state. Nothing is calculated, stored, or transmitted.
   - Yes  -> Path A highlighted, Path B dimmed (still visible & readable)
   - No   -> Path B highlighted, Path A dimmed (still visible & readable)
   - Reset-> both paths back to equal, neutral weight
   ===================================================================== */
(function () {
  "use strict";

  var btnYes = document.getElementById("btn-yes");
  var btnNo = document.getElementById("btn-no");
  var btnReset = document.getElementById("btn-reset");
  var pathA = document.getElementById("path-a");
  var pathB = document.getElementById("path-b");
  var status = document.getElementById("decider-status");

  // If any required element is missing, do nothing (page still renders).
  if (!btnYes || !btnNo || !btnReset || !pathA || !pathB || !status) {
    return;
  }

  var STATUS = {
    yes: "You're on Path A — share your EcoVadis scorecard.",
    no: "You're on Path B — complete the sustainability assessment.",
    neutral: ""
  };

  function clearPathStates() {
    pathA.classList.remove("is-active", "is-dimmed");
    pathB.classList.remove("is-active", "is-dimmed");
  }

  function setChoice(choice) {
    clearPathStates();

    if (choice === "yes") {
      pathA.classList.add("is-active");
      pathB.classList.add("is-dimmed");
    } else if (choice === "no") {
      pathB.classList.add("is-active");
      pathA.classList.add("is-dimmed");
    }

    btnYes.setAttribute("aria-pressed", String(choice === "yes"));
    btnNo.setAttribute("aria-pressed", String(choice === "no"));

    var hasChoice = choice === "yes" || choice === "no";
    btnReset.hidden = !hasChoice;
    status.textContent = hasChoice ? STATUS[choice] : STATUS.neutral;
  }

  function reset() {
    setChoice("neutral");
    btnYes.focus();
  }

  btnYes.addEventListener("click", function () {
    setChoice("yes");
  });
  btnNo.addEventListener("click", function () {
    setChoice("no");
  });
  btnReset.addEventListener("click", reset);

  // Ensure a clean neutral starting state on load.
  setChoice("neutral");
})();
