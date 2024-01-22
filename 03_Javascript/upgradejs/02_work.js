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