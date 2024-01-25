// Shape 클래스의 속성: 가로와 세로
// Shape 클래스의 메소드 getArea()
    // 넓이 반환하는 메소드(가로*세로)

class Shape {
    constructor(hor, ver) {
        this.hor = hor;
        this.ver = ver;
    }

    getArea() {
        return (this.hor * this.ver);
    }
}


let rec1 = new Shape(3,4);
console.log("직사각형 넓이: ", rec1.getArea()); // 12가 나오는지 확인


console.log('-----선택 실습 클래스 상속-----');


console.log('--Rectangle--');
class Rectangle extends Shape {
    constructor(hor, ver) {
        super(hor, ver);
    }
    
    // getArea() <<상속받음
    
    getCross() {
        return (Math.sqrt(this.hor**2 + this.ver**2))
    }
}

let rec2 = new Rectangle(3,4);
console.log("직사각형 넓이: ", rec2.getArea());
console.log("직사각형 대각선: ", rec2.getCross());


console.log('--Triangle--');
class Triangle extends Shape {
    constructor(hor, ver) {
        super(hor, ver);
    }
    
    getArea() {
        return (this.hor * this.ver / 2)
    }
}

let tri = new Triangle(3,4);
console.log("삼각형 넓이: ", tri.getArea());


console.log('--Circle--');
class Circle extends Shape {
    constructor(hor, ver, radius) {
        super(hor, ver);
        this.radius = radius;
    }
    
    getArea() {
        return (this.radius**2 * Math.PI)
    }
}

let cir = new Circle(3,4,5);
console.log("원 넓이: ", cir.getArea());

/* 해답
// Shape 클래스 만들기
// 가로, 세로 속성(number)
// 넓이 구하는 메소드(return)
class Shape {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.area = Number(width * height);
    }
  
    getArea() {
      console.log(this.area); // 콘솔로 확인
      return this.width * this.height; //return 으로 확인
    }
  }
  
  let rec1 = new Shape(3, 4);
  console.log(rec1.getArea());
  rec1.getArea();
  
  // 선택 (상속 이용)
  // 1. Rectangle 클래스
  class Rectangle extends Shape {
    // constructor(width, height) {
    //   super(width, height);
    // } -> 상속받을거지만 속성 추가할 거 아니라면 굳이 없어도 됨
    getDiagonal() {
      return Math.sqrt(this.width ** 2 + this.height ** 2);
    }
  }
  
  // 2. Triangle 클래스
  class Triangle extends Shape {
    // 오버 라이딩
    getArea() {
      return (this.height * this.width) / 2;
    }
  }
  
  // 3. Circle 클래스
  // circle class 같은 경우에는 사실은 width,height 는 필요없어서
  // 클래스 자체를 새로 만드는게 낫지만 상속 연습을 위해 진행!
  class Circle extends Shape {
    constructor(width, height, circle) {
      super(width, height);
      this.circle = circle;
    }
    getArea() {
      return this.circle ** 2 * Math.PI;
    }
  }
  let rec = new Rectangle(6, 8);
  let tri = new Triangle(6, 8);
  let circle = new Circle(1, 1, 5);
  console.log("사각형 넓이" + rec.getArea());
  console.log("대각선 길이" + rec.getDiagonal());
  
  console.log("삼각형 넓이" + tri.getArea());
  console.log("원 넓이" + circle.getArea());
  */