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