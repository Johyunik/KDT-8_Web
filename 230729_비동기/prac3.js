function changeColor(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(color);
    }, 1000);
  });
}

function changeColor2(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(color);
    }, 1000);
  });
}

function changeColor3(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(color);
    }, 1000);
  });
}

function changeColor4(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(color);
    }, 1000);
  });
}

function changeColor5(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(color);
    }, 1000);
  });
}

changeColor("red")
  .then(function (color) {
    document.querySelector("body").style.backgroundColor = "red";
    return changeColor2(color);
  })
  .then(function (color) {
    document.querySelector("body").style.backgroundColor = "orange";
    return changeColor3(color);
  })
  .then(function (color) {
    document.querySelector("body").style.backgroundColor = "yellow";
    return changeColor4(color);
  })
  .then(function (color) {
    document.querySelector("body").style.backgroundColor = "green";
    return changeColor5(color);
  })
  .then(function (color) {
    document.querySelector("body").style.backgroundColor = "blue";
  });
