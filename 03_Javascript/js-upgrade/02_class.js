// class : 오브젝트를 만들 수 있는 틀!

/*
 속성
  - 만들어진 연도 year
  - 집의 이름 name
  - 창문의 갯수 window
 메소드
  - 건물의 나이 출력 getAge()
  - 창문의 개수 출력 getWindow()
*/

class House{
    constructor(year, name, window) {
        this.name = name;
        this.year = year;
        this.window = window; //+ 세개의 속성을 만들었다
    }

    // 메소드
    getAge() {
        console.log(`${this.name}은 건축한 지 ${2024 - this.year}년 됐어요.`)
    }

    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`)
    }
}

// const h1 = {
//     name: "old",
//     year: 1789,
//     window: 1,
// } //+ 생으로 배열을 만드는 방법

const house1 = new House(1789, "old", 1);
house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, "자이", 10);
house2.getAge();
house2.getWindow();

console.log("------상속------");
// extends 키워드를 사용해서 상속
// House 클래스의 함수와 속성을 사용할 수 있음
// House << Apartment
class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        super(year, name, window); // 상속받는 애들
        this.floor = floor;
        this.windowMaker = windowMaker; // 상속 안받는 애들
    }


        getAptInfo(){
            return `${this.year}년에 지어진 ${this.name}.
            총 층 수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
        }
        
        // overriding //+ 덮어쓰기 하는 것 //+ 다른 언어에도 있는 개념이다
        // 부모 클래스의 메소드를 이름은 똑같이 쓰고 싶지만
        // 내용은 다르게 만들고 싶을 때, 메소드 재선언
        getWindow() {
            return `${this.name}의 창문은 ${this.windowMaker}에서 만들었고, ${this.window}개 입니다.`
        }
        
        // getAge() << 상속받아서 사용 가능
};


// year, name, window, floor, windowMaker
const ap1 = new Apartment(2022, "raemian", 19, 50, "KCC");
console.log(ap1.getWindow()); // 오버라이딩 함수, 메소드 재정의
console.log("=======")
console.log(ap1.getAptInfo()); // 새로운 메소드 정의
ap1.getAge(); // 부모 메소드 그대로 상속
console.log(ap1);

/* 강의안 //? 비교해서 오류 잡기 //!! 메소드가 class 밖에 나와있었다
// class : 오브젝트를 만들 수 있는 틀!

/8
 속성
  - 만들어진 연도 year
  - 집의 이름 name
  - 창문의 갯수 window
 메소드
  - 건물의 나이 출력 getAge()
  - 창문의 개수 출력 getWindow()
8/

class House {
	constructor(year, name, window) {
		this.name = name;
		this.year = year;
		this.window = window;
	}

	// 메소드
	getAge() {
		console.log(`${this.name}은 건축한지 ${2024 - this.year}년 됐어요.`);
	}

	getWindow() {
		console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
	}
}

// const h1 = {
// 	name: "old",
// 	year: 1789,
// 	window: 1,
// 함수 ~~~
// };

const house1 = new House(1789, "old", 1);
house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, "자이", 10);
house2.getAge();
house2.getWindow();

console.log("--------상속----------");
// extends키워드를 사용해서 상속
// House 클래스의 함수와 속성을 사용할 수 있음
// House << Apartment
class Apartment extends House {
	constructor(year, name, window, floor, windowMaker) {
		super(year, name, window);
		this.floor = floor;
		this.windowMaker = windowMaker;
	}

	getAptInfo() {
		return `${this.year}년에 지어진 ${this.name}.
        총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
	}

	// overriding
	// 부모 클래스의 메소드를 이름은 똑같이 쓰고 싶지만
	// 내용은 다르게 만들고 싶을 때, 메소드 재선언
	getWindow() {
		return `${this.name}의 창문은 ${this.windowMaker}에서 만들었고, ${this.window}개 입니다.`;
	}

	// getAge() << 상속받아서 사용 가능
}

// year, name, window, floor, windowMaker
const ap1 = new Apartment(2022, "raemian", 19, 50, "KCC");
console.log(ap1.getWindow()); // 오버라이딩 함수, 메소드 재정의
console.log("**********");

console.log(ap1.getAptInfo()); // 새로운 메소드 정의
ap1.getAge(); //부모 메소드 그대로 상속
console.log(ap1);
*/

// 실습 //shape 클래스 만들기
console.log("---실습---")

