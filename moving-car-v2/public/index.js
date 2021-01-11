// clicks and clacks
const lfwd = document.getElementById("left-fwd");
const rfwd = document.getElementById("right-fwd");
const lbwd = document.getElementById("left-bwd");
const rbwd = document.getElementById("right-bwd");

const forwardLeft = (onoff) => () => {
  lfwd.style.borderColor = onoff ? "green" : "black";
  console.log(`sending ${onoff} to forward left`);
  axios.get(`/left/forward/${onoff}`);
};

lfwd.addEventListener("mousedown", forwardLeft(0));
lfwd.addEventListener("mouseup", forwardLeft(1));
lfwd.addEventListener("touchstart", forwardLeft(0));
lfwd.addEventListener("touchend", forwardLeft(1));

const forwardRight = (onoff) => () => {
  rfwd.style.borderColor = onoff ? "green" : "black";
  console.log(`sending ${onoff} to forward right`);
  axios.get(`/right/forward/${onoff}`);
};

rfwd.addEventListener("mousedown", forwardRight(0));
rfwd.addEventListener("mouseup", forwardRight(1));
rfwd.addEventListener("touchstart", forwardRight(0));
rfwd.addEventListener("touchend", forwardRight(1));

const backwardLeft = (onoff) => () => {
  lbwd.style.borderColor = onoff ? "green" : "black";
  console.log(`sending ${onoff} to backward left`);
  axios.get(`/left/backward/${onoff}`);
};

lbwd.addEventListener("mousedown", backwardLeft(1));
lbwd.addEventListener("mouseup", backwardLeft(0));
lbwd.addEventListener("touchstart", backwardLeft(1));
lbwd.addEventListener("touchend", backwardLeft(0));

const backwardRight = (onoff) => () => {
  rbwd.style.borderColor = onoff ? "green" : "black";
  console.log(`sending ${onoff} to backward right`);
  axios.get(`/right/backward/${onoff}`);
};

rbwd.addEventListener("mousedown", backwardRight(1));
rbwd.addEventListener("mouseup", backwardRight(0));
rbwd.addEventListener("touchstart", backwardRight(1));
rbwd.addEventListener("touchend", backwardRight(0));