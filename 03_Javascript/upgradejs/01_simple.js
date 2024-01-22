// 구조 분해 할당
// 1. 배열의 구조분해 할당

const arr = ['tomato', 'kiwi', 'banana'];
console.log(arr[2]);
const [to, ki, ba] = arr;
console.log(ki);

const arr2 = ["빨", "주", "노", "초"];
const [red, orange, , green] = arr2;
console.log(red,green);

let x = "first";
let y = "second";
[x, y] = [y, x];
console.log(x, y);

// 구조분해 할당을 사용하지 않은 정석 방법
let x2 = "first";
let y2 = "second";
let temp;
temp = x2;
x2 = y2;
y2 = temp;

// 객체의 구조분해 할당
const obj = {
    title: "제목",
    content: "내용",
    number: 0,
};

console.log(obj.title);

const { title: t2, content, number } = obj;
console.log(t2);

// 전개구문...
const arr3 = [1, 2, 3, 4, 5];
const arr4 = ["a", "b", "c"];

console.log(arr3);
console.log(arr4);

for(let el of arr3){
    console.log(el);
}

console.log(...arr3);

// [1, 2, 3, 4, 5, 'a', 'b', 'c'] 만들기
const arr5 = arr3.concat(arr4); // concat 메소드 이용
const arr6 = [...arr3, ...arr4]; // 전개연선자 이용
console.log('==============');
console.log(arr5);
console.log(arr6);

const str = "alliehigh";
let strToArr = [...str]; // 전개연산자
let strToArr2=str.split(''); // 메소드 이용
console.log(strToArr);
console.log(strToArr2);

// object spread
const me1 = {
    name: "allie",
    height: 163,
    friend: null,
    married: false,
};
const me2 = {
    name: "진형",
    like: ["코딩하기", "놀러가기"],
    greeting: function () {
        console.log(`안녕하세요, 제 이름은 ${this.name}이고요, 키는 ${this.height}입니다.`); //함수 안에서 변수를 사용하려면 this.key 이용
    },
};

let me = {...me1, ...me2};
console.log(me);
me.greeting(); // 원래 함수 내엔 신장 값이 없지만 합쳐놨기 때문에 출력이 가능하다

console.log('======')
// 실습 : 두 문자열을 합쳐서 배열로 만들기(연산자 말고 다른 방법으로도 해보기)
const word1 = "abc";
const word2 = "xyz";
let word = [...word1, ...word2];
console.log(word);

let word1ToArr = word1.split('');
let word2ToArr = word2.split('');
let wordArr = (word1 + word2).split(''); //+ 따로따로 안하고 이렇게도 가능하다!
let wordToArr = word1ToArr.concat(word2ToArr);
console.log(wordToArr);

// rest 
const obj2 = {
    title: "제목",
    content: "내용",
    number: 0,
    key4: 'value4',
    key5: 'value5',
};

const { title:a, content:b, num:c, ...obj3 /*+ =나머지로 새로운 오브젝트를 만들어줌. 자주 안써서 따로 떼놓진 않지만 킵은 해두고 싶을 때 */ } = obj2;
console.log(obj3);
console.log('------------');
function test(...valuue) {
    console.log(...valuue);
    const [a, b, ...rest] = valuue; //+ 배열의 구조분해 문법과 rest를 동시에 사용하는 중
    console.log(a);
    console.log(b);
    console.log(rest);
}
test(1,2,3,4,5,6);

console.log('-----')
// quiz
// 매개변수가 몇개가 들어오든 합산해주는 함수 addNumber() // return 쓰기
function addNumber(...rest) {
    // console.log(rest);
    let sum =0;
    rest.forEach((el) => {
        sum += el;
    });

    return sum;
};
let result = addNumber(1, 2, 3, 4, 5, 6, 7); //28
console.log(result);

/* 강의안 //? 비교해보기 //!! forEach에 소괄호가 하나 모자랐다
function addNumber(...rest) {
	// console.log(rest);
	// rest = [1, 2, 3, 4, 5];
	let sum = 0;
	rest.forEach((el) => {
		sum += el;
	});

	return sum;
}

// addNumber(1, 2, 3, 4, 5);
let result = addNumber(1, 2, 3, 4, 5, 6, 7); //28
console.log(result); */