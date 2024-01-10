// Date 객체
/* 현재 시간, 날짜에 대한 정보를 얻기 위해 사용
    원하는 값으로 초기화 가능
*/
let now = new Date()
console.log(now)

// new Date('날짜 문자열')
console.log(new Date('September 30, 2000 13:00:00'))
console.log(new Date(2002,3,2,1,1,20))

console.log(now.getFullYear(),'년');
console.log(now.getMonth(),'월'); // 월: 0~11
console.log(now.getDate(),'일'); // 며칠? //? :1~31
console.log(now.getHours(),'시'); // 시간 (0~23)
console.log(now.getMinutes(),'분'); // 분 (0~59)
console.log(now.getSeconds(),'초'); // 초 (0~59)
console.log(now.getMilliseconds(),'밀리초'); // 밀리초 (0~999)
console.log(now.getDay(),'요일'); // (0~6): 0 일요일 1 월요일 6 토요일

// Math 객체
console.log(Math.PI); // 파이
console.log(Math.E); // 자연로그 e
console.log(Math.SQRT2); // 루트2

// 메소드
console.log(Math.min(1,2,3,4,5,-5,-7.5));
console.log(Math.max(2,5,4,6,10,11,5));
console.log(Math.ceil(5.1)); // 올림 (ceil:천장)
console.log(Math.floor(5.1)); // 내림
console.log(Math.round(5.5)); // 반올림
console.log(Math.random()); // 0 <= x < 1 인 난수 생성
console.log(Math.floor(Math.random() * 3)); // 0 <= x < 3 인 난수 생성

console.log(Math.floor(Math.random() * 45) + 1); // 로또 번호 만들기

// object 관련 객체
const areaNum = {
    Seoul:'02',
    Inchen:'032',
    Busan:'051',
    Ulsan:'052',
    Gwangju:'062',
    Jeju:'064'
}

const obj = new Object({
    a:'10',
    b:'55'
})
console.log(obj) // 이런 식으로 object를 만들 수도 있다

// 각각 key와 value를 뽑아서 배열로 반환하는 객체의 메소드
const area = Object.keys(areaNum);
const number = Object.values(areaNum);

console.log(area)
console.log(number)

// 실습
console.log('-----실습-----')

let dayT = new Date().getDay();
if(dayT === 6 || dayT === 0){
    console.log('오늘은 주말')
}else{
    console.log('오늘은 평일')
}

console.log('-----실습-----')

console.log(Math.floor(Math.random() * 11))