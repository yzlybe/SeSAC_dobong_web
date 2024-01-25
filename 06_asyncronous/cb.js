let product, price;
function goMart() {
  console.log("마트에 들어가서 어떤 음료를 살 지 고민..");
}

function pickDrink(callback) {
  // 3초동안 고민
  setTimeout(() => {
    console.log("고민 끝!");
    product = "콜라";
    price = 2000;
    callback();
  }, 3000);
}

function pay() {
  console.log(`상품명: ${product}, 가격:${price}`);
}

goMart();
pickDrink(pay); //+ 콜백함수를 사용할 때 인자로 들어가는 함수는 인자를 넣으면 안된다!
// pay();
