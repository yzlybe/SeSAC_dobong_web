function print(a: number, b: number, c: number): void {
  //+ 함수의 리턴 타입은 꼭 쓸 필요는 없다. 타입스크립트가 추론해서 적용해줌
  console.log(a);
  console.log(b);
  console.log(c);
}

print(1, 2, 3);
// print(1, 2, 3, 4); // err
// print(1, 2); // err

function print2(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}

print2(1, 2, 3);
print2(1, 2);

// void type
function sayHello(): void {
  console.log("hello");
}

sayHello();

// string return
function concatStr(a: string, b: number): string {
  return a + b;
}

// 원의 넓이를 구하는 함수
function circleArea(r: number): number {
  return r * r * Math.PI;
}

console.log(concatStr("안녕", 2));
console.log(circleArea(5));
//+ console.log(circleArea('5')); // number형이 아니기에 오류가 난다

// 함수 표현식으로
const triangleArea = (w: number, h: number): number => (w * h) / 2;
console.log("삼각형의 넓이", triangleArea(2, 4));

interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const jh: Greet = {
  name: "allie",
  hi() {
    return "안녕 내 이름은 " + this.name + "이야";
  },
  bye(a: number) {
    return `작별인사를 ${a}번 했습니다.`;
  },
};

console.log(jh.hi());
console.log(jh.bye(5));

// never type
// 항상 함수의 끝에 절대 도달하지 않는 경우에만 never 차입 할당 가능
function goingOn(): never {
  while (true) {
    console.log("끝나지 않는 함수입니다.");
    //     if (a > 10) break; // 특정 조건일 때 빠져나올 수 있음 >> never type X
  }
}

// goingOn();

// 숫자가 오면 더하기
// 문자가 오면 문자 이어주기
/* function addSomething(x: string | number, y: string | number): string | number {
  return x + y;
} */ //+ 유니온 타입은 기본적으로 연산이 안된다

// 오버로딩, 오버라이딩
/* 
- 오버라이딩: 클래스에서 상속을 했을 때, 메소드 재정의
- 오버로딩: 함수에서 매개변수의 개수나 타입, 함수의 타입이 다를 때
          같은 이름으로 매개변수의 종류와 개수를 다르게 선언할 수 있음.
          함수의 이름을 똑같이 사용하기 때문에 비슷한 기능일 때만 사용할 수 있음.
*/
// 오버로딩
function addSomething(x: string, y: string): string;
function addSomething(x: number, y: number): number;
function addSomething(x: any, y: any): any {
  return x + y;
}

console.log(addSomething(1, 1)); // 2
console.log(addSomething("안녕", "하세요")); // "안녕하세요"

// addSomething(1, "2") // err

// 실습문제1
function sum1(a: number, b: number): void {
  console.log(a + b);
}

sum1(5, 11); // 16

// 실습문제2
function sum2(...numbers: number[]) {
  let result: number = 0;
  for (let i of numbers) {
    result += i;
  }
  return result;
}

console.log(sum2(1, 2, 3, 4, 10)); // 20
console.log(sum2(1, 2, 3)); // 6
