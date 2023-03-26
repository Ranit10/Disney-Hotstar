let movies = [
  {
    name: "Black Panther:              Wakanda Forever",
    des:
      "As tensions ease in, the preparations for Yash and Chikki's engagement begins in full swing.",
    img: "images/Black.png"
  },
  {
    name: "Taaza Khabar",
    des:
      "Vasya's slum-dog life is an uphill struggle. His only respite, and lady love, is Madhu, a sex worker. One day, his kindness gets rewarded when he receives an old lady's blessings.",
    img: "images/Tez.png"
  },
  {
    name: "Angar Tales",
    des:
      "Ranga organises a show of his favourite star's latest movie. When a local leader buys 200 tickets to show off his power, Ranga's self-respect is put at stake.",
    img: "images/Anger-Tales.png"
  },
  {
    name: "Pop Kaun ?",
    des:
      "Sahil Trivedi is all set to marry his girlfriend, Pihu, but his life takes a strange turn when he encounters a bitter truth and has one question, Who is my pop?",
    img: "images/pop-kun.png"
  },
  {
    name: "Gulmohar",
    des:
      "Batra family has just four days left to vacate their house of 34 years. Amidst the mayhem, uncertainties of the future, insecurities and secrets surface.",
    img: "images/Gul.png "
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];
// track the current slide
let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // create DOM elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all element
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up images
  imgElement.src = movies[slideIndex].img;
  slideIndex++;

  // setting element classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movies-title";
  p.className = "movies-des";
  sliders.push(slide);

  // adding Sliding
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}
setInterval(() => {
  createSlide();
}, 3000);

// video cards

const videocards = [...document.querySelectorAll(".video-card")];

videocards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let prebtns = [...document.querySelectorAll(".pre-btn")];
let nxtbtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtbtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  prebtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
