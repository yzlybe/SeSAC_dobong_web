function printSome<T>(x: T, y: T): T {
  console.log(x);
  console.log(y);
  return y;
}

printSome<number>(1, 2);
printSome<string>("hi", "hello");

function printSome2<T, K>(x: T, y: K): void {
  console.log(x);
  console.log(y);
}

printSome2<number, string>(1, "안녕하세요");

function arrLength1(arr: any[]): number {
  return arr.length;
}

function getValue1(value: string): string {
  return value;
}

// generic으로 만들어보기
function arrLength2<T>(arr: T[]): number {
  return arr.length;
}

function getValue2<T>(value: T): T {
  return value;
}

console.log(arrLength2<string>(["a", "b", "c", "d"]));
console.log(getValue2<number[]>([1, 2, 3, 4, 5, 6]));

// 실습문제

function arrElement<T>(arr: T[], index: number): T | boolean {
  return arr.length - 1 < index ? false : arr[index];
}

console.log(arrElement<string>(["a"], 1)); // false

//

// #### interface & generic
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

// T 타입으로 string을 사용
const iphone15: Phone<string> = {
  company: "apple",
  createAt: new Date("2023-10-13"),
  option: "black",
};

// T 타입으로 객체 타입 적용
type iphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<iphoneOption> = {
  company: "apple",
  createAt: new Date("2024-10-16"),
  option: {
    color: "silver",
    storage: 256,
  },
};

console.log("-----------");
console.log(iphone15);
console.log(iphone16);

// 타입스크립트는 초기화된 값을 바탕으로 타입을 자동추론함
let aa = 1;
let bb = "string";
let cc = true;

// aa = "안녕하세요"; // 불가능(aa가 number형으로 자동추론됨)
