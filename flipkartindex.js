let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image .slide');
const totalLength = slides.length;

function showSlides(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalLength;
  showSlides(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + totalLength) % totalLength;
  showSlides(currentIndex);
}


document.querySelector('.btn-container:first-child').addEventListener('click', previousSlide);
document.querySelector('.btn-container:last-child').addEventListener('click', nextSlide);


showSlides(currentIndex);
setInterval(nextSlide,3000)

//NEW ONE OF SCROLLING BUTTON AT LOWER SIDE OF THE PAGE
const tabs = document.querySelectorAll(".scoller a");
const rightArrowContainer = document.querySelector(" .scoller .right-arrow");
const leftArrowContainer = document.querySelector(".scoller .left-arrow");
const tabsList = document.querySelector(".scoller ul");

const removeAllActiveClass = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeAllActiveClass();
    tab.classList.add("active");
  });
});

const manageIcons = () => {
  if (tabsList.scrollLeft >= 20) {
    leftArrowContainer.classList.add("active");
  } else {
    leftArrowContainer.classList.remove("active");
  }

  let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;

  if (tabsList.scrollLeft >= maxScrollValue) {
    rightArrowContainer.classList.remove("active");
  } else {
    rightArrowContainer.classList.add("active");
  }
};

// Initial call to manage icons
manageIcons();

rightArrowContainer.addEventListener("click", () => {
  tabsList.scrollLeft += 100;
  setTimeout(manageIcons, 50);
});

leftArrowContainer.addEventListener("click", () => {
  tabsList.scrollLeft -= 100;
  setTimeout(manageIcons, 50);
});

// Update icons on manual scroll

const talb = document.querySelectorAll(".mange-scoll a");
const rightArrowContainers = document.querySelector(".mange-scoll .right-arrows");
const leftArrowContainers = document.querySelector(".mange-scoll .left-arrows");
const tablelist = document.querySelector(".mange-scoll ul");

const removeAllActiveClasss = () => {
  talb.forEach((tabb) => {
    tabb.classList.remove("actives");
  });
};

talb.forEach((tabb) => {
  tabb.addEventListener("click", () => {
    removeAllActiveClasss();
    tabb.classList.add("actives");
  });
});

const manageIcon = () => {
  if (tablelist.scrollLeft >= 30) {
    leftArrowContainers.classList.add("actives");
  } else {
    leftArrowContainers.classList.remove("actives");
  }

  let maxScrollValues = tablelist.scrollWidth - tablelist.clientWidth - 30;

  if (tablelist.scrollLeft >= maxScrollValues) {
    rightArrowContainers.classList.remove("actives");
  } else {
    rightArrowContainers.classList.add("actives");
  }
};

// Initialize icons state
manageIcon();

rightArrowContainers.addEventListener("click", () => {
  tablelist.scrollLeft += 200;
  setTimeout(manageIcon, 50);
});

leftArrowContainers.addEventListener("click", () => {
  tablelist.scrollLeft -= 150;
  setTimeout(manageIcon, 50);
});

tablelist.addEventListener("scroll", manageIcon);



