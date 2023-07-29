function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// call("Jo")
//   .then(function (name) {
//     console.log(name + " 반가워");
//     return back(name);
//   })
//   .then(function (txt) {
//     console.log(txt + "을 실행했구나");
//     return hell(txt);
//   })
//   .then(function (message) {
//     console.log("여기는 " + message);
//   });

async function exec() {
  let name = await call("Jo");
  console.log(name + " 반가워 ");
  let backs = await back(name);
  console.log(backs + "을 실행했구나");
  let hells = await hell(back);
  console.log("여기는 " + hells);
}

exec();
