

let header = document.querySelector("h1");
let image = document.querySelectorAll("img");
function insideA() {
  new Audio("sounds/a-crash.mp3").play();

  image[0].classList.add("bigger");
  setTimeout(function() {
    image[0].classList.remove("bigger");
  }, 100)
}
function insideS() {
  new Audio("sounds/s-kick-bass.mp3").play();

  image[1].classList.add("bigger");
  setTimeout(function() {
    image[1].classList.remove("bigger");
  }, 100)
}
function insideD() {
  new Audio("sounds/d-snare.mp3").play();

  image[2].classList.add("bigger");
  setTimeout(function() {
    image[2].classList.remove("bigger");
  }, 100)
}
function insideF() {
  new Audio("sounds/f-tom-1.mp3").play();

  image[3].classList.add("bigger");
  setTimeout(function() {
    image[3].classList.remove("bigger");
  }, 100)
}
function insideJ() {
  new Audio("sounds/j-tom-2.mp3").play();

  image[4].classList.add("bigger");
  setTimeout(function() {
    image[4].classList.remove("bigger");
  }, 100)
}
function insideK() {
  new Audio("sounds/k-tom-3.mp3").play();

  image[5].classList.add("bigger");
  setTimeout(function() {
    image[5].classList.remove("bigger");
  }, 100)
}
function insideL() {
  new Audio("sounds/l-tom-4.mp3").play();

  image[6].classList.add("bigger");
  setTimeout(function() {
    image[6].classList.remove("bigger");
  }, 100)
}

image[0].addEventListener("click", function() {
  insideA();
})
image[1].addEventListener("click", function() {
  insideS();
})
image[2].addEventListener("click", function() {
  insideD();
})
image[3].addEventListener("click", function() {
  insideF();
})
image[4].addEventListener("click", function() {
  insideJ();
})
image[5].addEventListener("click", function() {
  insideK();
})
image[6].addEventListener("click", function() {
  insideL();
})
document.body.addEventListener("keypress", function(e) {

  if(e.key == "a" || e.key == "A") {
    insideA();
  }
  else if(e.key == "s" || e.key == "S") {
    insideS();
  }
  else if(e.key == "d" || e.key == "D") {
    insideD();
  }
  else if(e.key == "f" || e.key == "F") {
    insideF();
  }
  else if(e.key == "j" || e.key == "J") {
    insideJ();
  }
  else if(e.key == "k" || e.key == "K") {
    insideK();
  }
  else if(e.key == "l" || e.key == "L") {
    insideL();
  }

});
