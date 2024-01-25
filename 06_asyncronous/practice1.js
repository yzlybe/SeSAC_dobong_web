/* callback단
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}

function hell(cb) {
  //promise로 만들 땐 cb부분이 없어져야 한다~
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

// call -> back -> hell 순서로 실행
call("kim", function (name) {
  console.log(name + "반가워");
  back(function (txt) {
    console.log(txt + "을 실행했구나");
    hell(function (message) {
      console.log("여기는 " + message);
    });
  });
});
*/

/* promise단
function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

call("kim")
  .then((name) => {
    console.log(name + "반가워");
    return back();
  })
  .then((txt) => {
    console.log(txt + "을 실행했구나");
    return hell();
  })
  .then((message) => {
    console.log("여기는" + message);
  });
*/

/* async단 */
function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// async function excute(name) {
//   await call(name);
//   console.log(name + "반가워");
//   let txt = await back();
//   console.log(txt + "을 실행했구나");
//   let message = await hell();

//   console.log("여기는 " + message);
// }

// excute("kim");

//

async function excute() {
  let name = await call("kim");
  console.log(name + "반가워");
  let txt = await back();
  console.log(txt + "을 실행했구나");
  let message = await hell();
  console.log("여기는 " + message);
}

excute();

/* 해답
// 1. promise then으로 실행
callPromise("allie") // callPromise 의 결과가
  .then((result) => {
    console.log(result + "반가워");
    // 리턴의 결과가 다음 then의 parameter로 들어감
    return backPromise();
  })
  .then((txt) => {
    console.log(txt + "를 실행했구나");
    return hellPromise();
  })
  .then((msg) => {
    console.log("여기는 " + msg);
  });

// 2. async await 로 실행
async function asyncF() {
  //resolve혹은 reject의 결과가 반환되어 변수에 저장됨
  let name = await callPromise("allie");
  console.log(name + "반가워");
  let back = await backPromise();
  console.log(back + "을 실행했구나");
  let hell = await hellPromise();
  console.log("여기는" + hell);
}

asyncF(); //함수 호출!!
*/
