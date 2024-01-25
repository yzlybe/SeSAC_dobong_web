// 모듈을 불러서 사용
// 가지고 오고 싶은 함수/변수만 구조분해할당을 이용해서 가져올 수 있음
const {sayName} = require('./03_exports1'); //+ 확장자는 써도 안써도 상관x //+ 따로 불러오는 방법
// 한 번에 가져오기 (객체로 불러옴)
const exports1 = require('./03_exports1'); //+ 한 번에 불러오는 방법. 객체로 불러온다.


// sayName('yz')
console.log(exports1);
exports1.sayName('yz'); // 한 번에 불러오면 객체로 불러오기 때문에 이런 방식으로 사용해야 한다.

const { sayHi2, sayHi3 } = require('./03_exports2'); //+ 설명을 위해 require를 여기 썼지만 require는 위쪽에 한 번에 몰아서 써주는 게 좋다.
sayHi2();
sayHi3('안녕하세요');