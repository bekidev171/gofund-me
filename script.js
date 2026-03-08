// Smooth section scroll
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("yearSpan");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Cursor-follow hero animation (subtle orbs)
(function setupCursorOrbs() {
  const hero = document.querySelector(".hero-section");
  const orbPink = document.querySelector(".orb-pink");
  const orbGold = document.querySelector(".orb-gold");
  if (!hero || !orbPink || !orbGold) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 3;
  let pinkX = mouseX;
  let pinkY = mouseY;
  let goldX = mouseX;
  let goldY = mouseY;

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  function animate() {
    const ease = 0.12;
    pinkX += (mouseX - pinkX) * ease;
    pinkY += (mouseY - pinkY) * ease;

    goldX += (mouseX - goldX) * ease * 0.7;
    goldY += (mouseY - goldY) * ease * 0.7;

    orbPink.style.transform = `translate(${pinkX - 70}px, ${pinkY - 70}px)`;
    orbGold.style.transform = `translate(${goldX - 70}px, ${goldY - 70}px)`;

    requestAnimationFrame(animate);
  }

  animate();
})();

// Scroll reveal animations
(function setupScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
})();

// Impact counters (count up on scroll)
(function setupCounters() {
  const counters = document.querySelectorAll(".impact-number");
  if (!counters.length) return;

  function runCounter(el) {
    const target = Number(el.getAttribute("data-target") || "0");
    const duration = 1800;
    const start = 0;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(start + (target - start) * progress);
      el.textContent = value.toLocaleString("en-ET");
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  if (!("IntersectionObserver" in window)) {
    counters.forEach(runCounter);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target.querySelector(".impact-number");
          if (el && !el.dataset.counted) {
            el.dataset.counted = "true";
            runCounter(el);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll(".impact-card").forEach((card) => {
    observer.observe(card);
  });
})();

// Donation logic
let selectedAmount = null;

function updateSelectedAmountText() {
  const el = document.getElementById("selectedAmountText");
  if (!el) return;
  if (selectedAmount == null) {
    el.textContent = "";
  } else {
    el.textContent = `Selected donation amount: ${selectedAmount.toLocaleString(
      "en-ET"
    )} ETB`;
  }
}

function showPaymentSection() {
  const section = document.getElementById("paymentSection");
  if (!section) return;
  section.classList.add("visible");
}

function selectDonationAmount(amount) {
  selectedAmount = amount;

  document.querySelectorAll(".donation-card").forEach((card) => {
    card.classList.remove("selected");
    const cardAmount = card.getAttribute("data-amount");
    if (cardAmount && Number(cardAmount) === amount) {
      card.classList.add("selected");
    }
  });

  updateSelectedAmountText();
  showPaymentSection();
}

// Custom amount modal
function openCustomAmountModal() {
  const overlay = document.getElementById("customAmountOverlay");
  const input = document.getElementById("customAmountInput");
  if (!overlay || !input) return;
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  setTimeout(() => input.focus(), 50);

  // Clear selection highlight on fixed amount cards
  document.querySelectorAll(".donation-card").forEach((card) => {
    if (!card.classList.contains("donation-card-custom")) {
      card.classList.remove("selected");
    }
  });
}

function closeCustomAmountModal() {
  const overlay = document.getElementById("customAmountOverlay");
  if (!overlay) return;
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
}

function confirmCustomAmount() {
  const input = document.getElementById("customAmountInput");
  if (!input) return;
  const value = Number(input.value);
  if (!value || value <= 0) {
    input.focus();
    return;
  }
  selectedAmount = value;

  // Highlight custom card
  document.querySelectorAll(".donation-card").forEach((card) => {
    card.classList.remove("selected");
  });
  const customCard = document.querySelector(".donation-card-custom");
  if (customCard) {
    customCard.classList.add("selected");
  }

  updateSelectedAmountText();
  showPaymentSection();
  closeCustomAmountModal();
}

// Bank modal
function openBankModal(bankName) {
  const overlay = document.getElementById("bankOverlay");
  const title = document.getElementById("bankModalTitle");
  const accountNumberSpan = document.getElementById("bankAccountNumber");
  const accountRow = document.getElementById("bankAccountNumberRow");
  const telebirrNote = document.getElementById("telebirrNote");

  if (!overlay || !title || !accountNumberSpan || !accountRow || !telebirrNote)
    return;

  title.textContent = bankName;
  telebirrNote.textContent = "";

  // Defaults for non-Telebirr banks
  let accountNumber = "";
  switch (bankName) {
    case "Commercial Bank of Ethiopia (CBE)":
      accountNumber = "1000596373945";
    case "Awash Bank":
      accountNumber = "013471586924000";
      break;
    case "Bank of Abyssinia":
      accountNumber = "0128945 9999";
      break;
    case "Dashen Bank":
      accountNumber = "055 771 771 90011";
      break;
    case "Cooperative Bank of Oromia":
      accountNumber = "123 876 492 7";
      break;
    case "Telebirr":
      accountNumber = "";
      telebirrNote.textContent =
        "0945939481";
      break;
    default:
      accountNumber = "";
      break;
  }

  if (accountNumber) {
    accountNumberSpan.textContent = accountNumber;
    accountRow.style.display = "block";
  } else {
    accountNumberSpan.textContent = "";
    accountRow.style.display = "none";
  }

  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
}

function closeBankModal() {
  const overlay = document.getElementById("bankOverlay");
  if (!overlay) return;
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
}

// Close modals by clicking overlay background
["customAmountOverlay", "bankOverlay"].forEach((id) => {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      if (id === "customAmountOverlay") closeCustomAmountModal();
      if (id === "bankOverlay") closeBankModal();
    }
  });
});


