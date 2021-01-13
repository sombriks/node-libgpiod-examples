// clicks and clacks
const lfwd = document.getElementById("left-fwd");
const rfwd = document.getElementById("right-fwd");
const lbwd = document.getElementById("left-bwd");
const rbwd = document.getElementById("right-bwd");

const forwardLeft = (onoff) => () => {
  lfwd.style.borderColor = onoff ? "black" : "green";
  console.log(`sending ${onoff} to forward left`);
  axios.get(`/left/forward/${onoff}`);
};

lfwd.addEventListener("mousedown", forwardLeft(0));
lfwd.addEventListener("mouseup", forwardLeft(1));
lfwd.addEventListener("touchstart", forwardLeft(0));
lfwd.addEventListener("touchend", forwardLeft(1));

const forwardRight = (onoff) => () => {
  rfwd.style.borderColor = onoff ? "black" : "green";
  console.log(`sending ${onoff} to forward right`);
  axios.get(`/right/forward/${onoff}`);
};

rfwd.addEventListener("mousedown", forwardRight(0));
rfwd.addEventListener("mouseup", forwardRight(1));
rfwd.addEventListener("touchstart", forwardRight(0));
rfwd.addEventListener("touchend", forwardRight(1));

const backwardLeft = (onoff) => () => {
  lbwd.style.borderColor = onoff ? "black" : "green";
  console.log(`sending ${onoff} to backward left`);
  axios.get(`/left/backward/${onoff}`);
};

lbwd.addEventListener("mousedown", backwardLeft(0));
lbwd.addEventListener("mouseup", backwardLeft(1));
lbwd.addEventListener("touchstart", backwardLeft(0));
lbwd.addEventListener("touchend", backwardLeft(1));

const backwardRight = (onoff) => () => {
  rbwd.style.borderColor = onoff ? "black" : "green";
  console.log(`sending ${onoff} to backward right`);
  axios.get(`/right/backward/${onoff}`);
};

rbwd.addEventListener("mousedown", backwardRight(0));
rbwd.addEventListener("mouseup", backwardRight(1));
rbwd.addEventListener("touchstart", backwardRight(0));
rbwd.addEventListener("touchend", backwardRight(1));

window.addEventListener(
  "keydown",
  (e) => {
    switch (e.key) {
      case "ArrowLeft":
        forwardRight(0)();
        backwardLeft(0)();
        break;
      case "ArrowRight":
        backwardRight(0)();
        forwardLeft(0)();
        break;
      case "ArrowUp":
        forwardLeft(0)();
        forwardRight(0)();
        break;
      case "ArrowDown":
        backwardLeft(0)();
        backwardRight(0)();
        break;
    }
  },
  true
);

window.addEventListener(
  "keyup",
  (e) => {
    switch (e.key) {
      case "ArrowLeft":
        forwardRight(1)();
        backwardLeft(1)();
        break;
      case "ArrowRight":
        backwardRight(1)();
        forwardLeft(1)();
        break;
      case "ArrowUp":
        forwardLeft(1)();
        forwardRight(1)();
        break;
      case "ArrowDown":
        backwardLeft(1)();
        backwardRight(1)();
        break;
    }
  },
  true
);
