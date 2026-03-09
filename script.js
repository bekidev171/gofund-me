// Smooth section scroll
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Simple i18n (English / Amharic)
const translations = {
  en: {
    "nav.tagline": "Comprehensive Empowerment for Women",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.support": "Support Women",

    "home.heroTitle": "Empowering Women. Building Stronger Futures.",
    "home.heroText":
      "Supporting women facing financial challenges through community support, financial assistance, and sustainable opportunity across Ethiopia.",
    "home.heroSupportBtn": "Support Women",
    "home.heroLearnMoreBtn": "Learn More",
    "home.heroCardTitle": "HERCARE",
    "home.heroCardText": "Comprehensive Empowerment for Women in Ethiopia.",
    "home.heroCardItem1": "Financial assistance pathways",
    "home.heroCardItem2": "Skills and education support",
    "home.heroCardItem3": "Community and mentorship networks",

    "home.impactTitle": "Impact in Numbers",
    "home.impactText": "Real change made possible through collective support.",
    "home.impactWomenHelped": "Women Helped",
    "home.impactDonationsRaised": "Donations Raised",
    "home.impactCommunities": "Communities Reached",
    "home.impactPrograms": "Programs Created",
    "home.impactCurrency": "ETB",

    "home.storiesTitle": "Real Stories. Real Strength.",
    "home.storiesText":
      "Women leading, learning, and lifting their communities.",

    "home.missionTitle": "Our Mission",
    "home.missionText":
      "Our mission is to support women experiencing financial hardship by connecting them with financial assistance, opportunities, and community support.",
    "home.missionItem1Title": "Financial Stability",
    "home.missionItem1Text":
      "Guiding women toward safe and dignified financial pathways, including support for urgent needs.",
    "home.missionItem2Title": "Education & Skills",
    "home.missionItem2Text":
      "Opening doors to education, training, and skills that help women build sustainable futures.",
    "home.missionItem3Title": "Community Support",
    "home.missionItem3Text":
      "Creating supportive networks where women uplift one another and share opportunities.",

    "home.aboutTitle": "About the Initiative",
    "home.aboutText":
      "HERCARE was created to support women facing financial hardship by providing financial assistance, opportunities, and empowerment through community support. The initiative focuses on women across Ethiopia, ensuring that support is accessible, dignified, and grounded in partnership.",
    "home.goalsTitle": "Our Goals",
    "home.goal1Title": "Help 5,000 women next year",
    "home.goal1Text":
      "Expanding our reach so that more women can access support when they need it most.",
    "home.goal2Title": "Provide financial assistance programs",
    "home.goal2Text":
      "Designing responsible support programs that meet immediate needs and encourage long-term resilience.",
    "home.goal3Title": "Support women’s education and skills training",
    "home.goal3Text":
      "Partnering with local organizations to deliver skills, mentoring, and education.",
    "home.goal4Title": "Build strong community support networks",
    "home.goal4Text":
      "Connecting women with one another and with trusted community resources.",
    "home.visionTitle": "Our Vision",
    "home.visionText":
      "We envision a future where every woman has access to financial stability, opportunity, and the ability to live with dignity and independence.",

    "home.supportCtaTitle": "Support Women in Need",
    "home.supportCtaText":
      "Your support helps provide financial assistance and opportunities for women who need it most. Visit our dedicated Support Women page to choose a donation amount and see secure payment options.",
    "home.supportCtaButton": "Go to Support Women Page",

    "support.heroTitle": "Support Women in Need",
    "support.heroText":
      "Your contribution directly supports women in Ethiopia who are facing financial hardship, providing pathways to stability, opportunity, and dignity.",
    "support.chooseAmountTitle": "Choose Your Donation Amount",
    "support.chooseAmountText":
      "Select a suggested amount below or enter a custom amount. You will then see bank details to complete your transfer.",
    "support.donate50": "Donate 50 ETB",
    "support.donate100": "Donate 100 ETB",
    "support.donate250": "Donate 250 ETB",
    "support.customAmount": "Custom Amount",
    "support.paymentTitle": "Choose a Bank or Payment Method",
    "support.paymentNote":
      "Please select your preferred bank to view account details and transfer instructions.",
    "support.customModalTitle": "Enter Your Donation Amount",
    "support.customModalLabel": "Amount in ETB",
    "support.cancelBtn": "Cancel",
    "support.okBtn": "OK",
    "support.bankDetailsTitle": "Bank Details",
    "support.accountNameLabel": "Account Name:",
    "support.accountNameValue": "Women Support Initiative",
    "support.accountNumberLabel": "Account Number:",
    "support.bankInstructions":
      "Transfer your donation to this account and include your name as the reference.",

    "support.selectedAmountPrefix": "Selected donation amount:",

    "footer.tagline": "Comprehensive Empowerment for Women",
    "footer.home": "Home",
    "footer.about": "About Us",
    "footer.support": "Support Women",
    "footer.copy":
      "HERCARE – Women Support Initiative. All rights reserved.",
    "footer.partnership": "Partnership with:- SWA",
  },
  am: {
    "nav.tagline": "ሙሉ በሙሉ የሴቶች ማስቻል",
    "nav.home": "መነሻ",
    "nav.about": "ስለ እኛ",
    "nav.support": "ሴቶችን ይደግፉ",

    "home.heroTitle": "ሴቶችን እንደግፋለን። ጠንካራ ወደ ፊት እንገነባለን።",
    "home.heroText":
      "የገንዘብ ችግኝ የሚያጋጥሙን ሴቶች በማህበራዊ ድጋፍ፣ በገንዘብ ድጋፍ እና በተስፋ የሚያበረታታ እድል በኢትዮጵያ አቅራቢያ እንደግፋለን።",
    "home.heroSupportBtn": "ሴቶችን ይደግፉ",
    "home.heroLearnMoreBtn": "ተጨማሪ ይመልከቱ",
    "home.heroCardTitle": "HERCARE",
    "home.heroCardText": "በኢትዮጵያ ሴቶችን የሚያበረታታ የሙሉ ድጋፍ ፕሮግራም።",
    "home.heroCardItem1": "የገንዘብ ድጋፍ መንገዶች",
    "home.heroCardItem2": "የትምህርት እና የችሎታ ድጋፍ",
    "home.heroCardItem3": "የማህበረሰብ እና የመካሪዎች መድረኮች",

    "home.impactTitle": "ተጽዕኖ በቁጥር",
    "home.impactText": "እውነተኛ ለውጥ በተባበሩ ድጋፍ የተፈጠረ።",
    "home.impactWomenHelped": "የተደገፉ ሴቶች",
    "home.impactDonationsRaised": "የተሰበሰበ ድጋፍ",
    "home.impactCommunities": "የደረሱን ማህበረሰቦች",
    "home.impactPrograms": "የተጀመሩ ፕሮግራሞች",
    "home.impactCurrency": "ብር",

    "home.storiesTitle": "እውነተኛ ታሪኮች። እውነተኛ ኃይል።",
    "home.storiesText":
      "ሴቶች ማህበረሰባቸውን በመመራት፣ በመማር እና በማንሳት የሚያሳዩ ታሪኮች።",

    "home.missionTitle": "ተልእኳችን",
    "home.missionText":
      "የገንዘብ ችግኝ የሚያጋጥሙ ሴቶችን ከገንዘብ ድጋፍ፣ ከእድሎች እና ከማህበራዊ ድጋፍ ጋር በመገናኘት ለመደገፍ ተልእኳችን ነው።",
    "home.missionItem1Title": "የገንዘብ ድንጋጤ መቆጣጠር",
    "home.missionItem1Text":
      "ሴቶችን ወደ ደህና የተጠበቁ የገንዘብ መንገዶች ማመራት እና አስቸኳይ ፍላጎታቸውን መሟሟት።",
    "home.missionItem2Title": "ትምህርት እና ችሎታ",
    "home.missionItem2Text":
      "ሴቶች ጊዜያዊ እና ቋሚ የሆነ የሕይወት መሻሻል እንዲያገኙ የሚረዱ የትምህርት እና የስልጠና እድሎችን መክፈት።",
    "home.missionItem3Title": "የማህበረሰብ ድጋፍ",
    "home.missionItem3Text":
      "እርስ በርስ የሚደግፉ፣ እድሎችን የሚካፈሉ የሴቶች መድረኮችን መፍጠር።",

    "home.aboutTitle": "ስለ ፕሮግራሙ",
    "home.aboutText":
      "HERCARE የተፈጠረው የገንዘብ ችግኝ የሚያጋጥሙ ሴቶችን በገንዘብ ድጋፍ፣ በእድል እና በማህበራዊ ድጋፍ ለመደገፍ ነው። እቅዱ በኢትዮጵያ ዙሪያ ባሉ ሴቶች ላይ ተመስርቶ ድጋፉ የሚደርስ እና የክብር የተሞላ እንዲሆን ያደርጋል።",
    "home.goalsTitle": "ግቦቻችን",
    "home.goal1Title": "በሚቀጥለው ዓመት 5,000 ሴቶችን ማገልገል",
    "home.goal1Text":
      "እርዳታ በሚፈልጉበት ጊዜ ድጋፍ እንዲደርስባቸው የምንደርሰውን ሴቶች ቁጥር ማሳደግ።",
    "home.goal2Title": "የገንዘብ ድጋፍ ፕሮግራሞችን ማቅረብ",
    "home.goal2Text":
      "አስቸኳይ ፍላጎቶችን የሚያሟሉ በአጭር ጊዜ የሚረዱ እና በረዥም ጊዜ ጽኑ የሆነ መፍትሔ የሚያበረታቱ ፕሮግራሞችን መዘጋጀት።",
    "home.goal3Title": "የትምህርት እና የችሎታ ስልጠናን ማገልገል",
    "home.goal3Text":
      "ከአካባቢ ድርጅቶች ጋር በመተባበር ትምህርት፣ መመሪያ እና ስልጠና ማቅረብ።",
    "home.goal4Title": "ጠንካራ የማህበረሰብ ድጋፍ መስርያዎች መገንባት",
    "home.goal4Text":
      "ሴቶችን እርስ በርሳቸው እና ከታማኝ የማህበረሰብ መረጃ ምንጮች ጋር መገናኘት።",
    "home.visionTitle": "ራዕያችን",
    "home.visionText":
      "ማንኛዋም ሴት የገንዘብ ድንጋጤ፣ ዕድል እና ክብር የተሞላ ሕይወት እንዲኖራት የሚረዱ አገልግሎቶችን የምትደርስባቸው የወደፊት እይታ አለን።",

    "home.supportCtaTitle": "ሴቶችን በእገዛ ይደግፉ",
    "home.supportCtaText":
      "ድጋፎን በመስጠት ለገንዘብ ችግኝ የሚያጋጥሙ ሴቶች የገንዘብ ድጋፍን እና እድሎችን እንዲያገኙ ትረዳቸዋለህ። የመዋጮ መጠን ለመምረጥ እና እርግጠኛ የክፍያ አማራጮችን ለማየት የ“ሴቶችን ይደግፉ” ገጻችንን ይጎብኙ።",
    "home.supportCtaButton": "ወደ የሴቶችን ድጋፍ ገጽ ይሂዱ",

    "support.heroTitle": "ሴቶችን ይደግፉ",
    "support.heroText":
      "የምትሰጠው መዋጮ በገንዘብ ችግኝ የሚገኙ በኢትዮጵያ ሴቶች ላይ በቀጥታ ተጽእኖ ያሳድራል፣ ወደ ድንጋጤ መቆጣጠር እና ወደ ክብር የተሞላ ሕይወት መጓዝ ያግዛቸዋል።",
    "support.chooseAmountTitle": "የምትሰጡትን መዋጮ መጠን ይምረጡ",
    "support.chooseAmountText":
      "ከታች ያሉትን መጠኖች ይምረጡ ወይም የራስዎን መጠን ያስገቡ። ከዚያ የባንክ ዝርዝሮችን ታዩ እና መዋጮዎን መላክ ትችላላችሁ።",
    "support.donate50": "50 ብር መዋጮ",
    "support.donate100": "100 ብር መዋጮ",
    "support.donate250": "250 ብር መዋጮ",
    "support.customAmount": "ሌላ መጠን",
    "support.paymentTitle": "ባንክ ወይም የክፍያ መንገድ ይምረጡ",
    "support.paymentNote":
      "የመዋጮዎን መላክ ለመጨረስ የባንክ መረጃውን ለማየት የሚመችዎትን ባንክ ይምረጡ።",
    "support.customModalTitle": "የመዋጮዎን መጠን ያስገቡ",
    "support.customModalLabel": "መጠን በብር",
    "support.cancelBtn": "መሰረዝ",
    "support.okBtn": "እሺ",
    "support.bankDetailsTitle": "የባንክ ዝርዝሮች",
    "support.accountNameLabel": "የአካውንት ስም፦",
    "support.accountNameValue": "Women Support Initiative",
    "support.accountNumberLabel": "የአካውንት ቁጥር፦",
    "support.bankInstructions":
      "መዋጮዎን ወደዚህ አካውንት ይተላለፉ እና ስምዎን እንደ ማብራሪያ ያስገቡ።",

    "support.selectedAmountPrefix": "የተመረጠው የመዋጮ መጠን፦",

    "footer.tagline": "ሙሉ በሙሉ የሴቶች ማስቻል",
    "footer.home": "መነሻ",
    "footer.about": "ስለ እኛ",
    "footer.support": "ሴቶችን ይደግፉ",
    "footer.copy":
      "HERCARE – የሴቶች ድጋፍ ተቋም። የቅጂ መብት የተጠበቀ ነው።",
    "footer.partnership": "በአብረን እንሠራበት አካል፦ SWA",
  },
};

let currentLanguage = "en";

function applyTranslations() {
  const dict = translations[currentLanguage] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = dict[key];
    if (text) {
      el.textContent = text;
    }
  });
}

function updateLanguageButtons() {
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    const lang = btn.getAttribute("data-lang");
    if (lang === currentLanguage) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  try {
    localStorage.setItem("hercareLanguage", lang);
  } catch {}

  document.documentElement.lang = lang === "am" ? "am" : "en";
  updateLanguageButtons();
  applyTranslations();
  // Update any dynamic text that depends on language
  updateSelectedAmountText();
}

// Year in footer + initial language setup
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("yearSpan");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  try {
    const stored = localStorage.getItem("hercareLanguage");
    if (stored && translations[stored]) {
      currentLanguage = stored;
    }
  } catch {}

  document.documentElement.lang = currentLanguage === "am" ? "am" : "en";
  updateLanguageButtons();
  applyTranslations();
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
    const dict = translations[currentLanguage] || translations.en;
    const prefix =
      dict["support.selectedAmountPrefix"] || "Selected donation amount:";
    const currency =
      (dict["home.impactCurrency"] || "ETB").toLocaleString("en-ET");
    el.textContent = `${prefix} ${selectedAmount.toLocaleString(
      "en-ET"
    )} ${currency}`;
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
      break;
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

