(function ($) {
  "use strict";

  // 1. Set your date here
  // Note: I set it to 2026 for testing. Change back to 2025 for your event.
  var countDownDate = new Date("Jan 22, 2026 12:00:00").getTime();

  function updateCard(id, newValue) {
    var card = document.getElementById(id);
    if (!card) return;

    var top = card.querySelector(".top");
    var bottom = card.querySelector(".bottom");
    var topBack = card.querySelector(".top-back");
    var bottomBack = card.querySelector(".bottom-back");

    // Get the current value stored in the HTML
    var currentValue = card.getAttribute("data-value");

    // CHECK: Only animate if the string value is different
    // Since we converted newValue to String in the main loop, this comparison is now accurate.
    if (currentValue !== newValue) {
      // 1. Set the BACK flaps to the NEW number (hidden initially)
      topBack.innerText = newValue;
      bottomBack.innerText = newValue;

      // 2. Keep FRONT flaps at the OLD number (visible)
      top.innerText = currentValue;
      bottom.innerText = currentValue;

      // 3. Reset and Trigger Animation
      card.classList.remove("flip");
      void card.offsetWidth; // Force a browser reflow to restart animation cleanly
      card.classList.add("flip");

      // 4. Update the state immediately so we know it has changed
      card.setAttribute("data-value", newValue);

      // 5. Cleanup after animation (600ms)
      setTimeout(function () {
        card.classList.remove("flip");
        // Now set the front flaps to the new number
        top.innerText = newValue;
        bottom.innerText = newValue;
      }, 600);
    }
  }

  function startFlipCountdown() {
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      // Safety check: If timer ends, force zero and stop
      if (distance < 0) {
        clearInterval(x);
        updateCard("days-card", "00");
        updateCard("hours-card", "00");
        updateCard("minutes-card", "00");
        updateCard("seconds-card", "00");
        return;
      }

      // Calculate time
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // CRITICAL FIX: Convert numbers to Strings explicitly
      // This prevents the "Number vs String" mismatch that caused the constant flipping
      days = (days < 10 ? "0" + days : days).toString();
      hours = (hours < 10 ? "0" + hours : hours).toString();
      minutes = (minutes < 10 ? "0" + minutes : minutes).toString();
      seconds = (seconds < 10 ? "0" + seconds : seconds).toString();

      // Update cards
      updateCard("days-card", days);
      updateCard("hours-card", hours);
      updateCard("minutes-card", minutes);
      updateCard("seconds-card", seconds);
    }, 1000);
  }

  startFlipCountdown();
})(jQuery);
