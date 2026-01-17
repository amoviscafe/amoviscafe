// Read URL params
const params = new URLSearchParams(window.location.search);
const pkg = params.get("pkg");
const price = Number(params.get("price"));
const date = params.get("date");
const slot = params.get("slot");

// Booking page
if (document.getElementById("packageInfo")) {
  document.getElementById("packageInfo").innerText =
    `${pkg} Package • ₹${price}`;

  let selectedSlot = "";

  document.querySelectorAll(".slot").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".slot").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedSlot = btn.innerText;
    });
  });

  window.goNext = function () {
    const d = document.getElementById("date").value;
    if (!d || !selectedSlot) {
      alert("Please select date and time slot");
      return;
    }
    window.location.href =
      `details.html?pkg=${pkg}&price=${price}&date=${d}&slot=${encodeURIComponent(selectedSlot)}`;
  };
}

// Details page
if (document.getElementById("summaryTop")) {
  document.getElementById("summaryTop").innerText =
    `${pkg} • ${date} • ${slot}`;

  const peopleInput = document.getElementById("people");
  const pkgPriceEl = document.getElementById("pkgPrice");
  const extraEl = document.getElementById("extra");
  const totalEl = document.getElementById("total");

  pkgPriceEl.innerText = price;

  function calculate() {
    const people = Number(peopleInput.value);
    const extraPeople = Math.max(0, people - 4);
    const extraCharge = extraPeople * 200;
    const total = price + extraCharge;

    extraEl.innerText = extraCharge;
    totalEl.innerText = total;
  }

  peopleInput.addEventListener("input", calculate);
  calculate();

  window.confirmBooking = function () {
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;

    if (!name || mobile.length !== 10) {
      alert("Please enter valid name and mobile number");
      return;
    }

    alert(
      `Booking Confirmed 🎉\n\n` +
      `Name: ${name}\nMobile: ${mobile}\n\n` +
      `Package: ${pkg}\nDate: ${date}\nTime: ${slot}\n` +
      `Total: ₹${totalEl.innerText}`
    );
  };
}
