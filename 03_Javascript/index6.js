/* 1. for문 */
/* 
for(변수 선언과 초기값 할당;조건식(어디까지 증가 감소할 지);증감식){
    반복할 코드;
}
*/

// 1부터 5까지 출력하는 방법
for(let i = 0; i < 10 ; i=i+1){
    console.log('안녕',i);
}

for(let i = 0; i < 10 ; i+=2){
    console.log(`안녕하세요 ${i}`);
}

for(let i = 1; i <= 5; i++){
    console.log(i)
}
for(let i = 1; i < 6; i++){
    console.log(i)
}
for(let i = 0; i < 5; i++){
    console.log(i+1)
}

// 감소

for(let i = 5; i > 0; i--){
    console.log(i)
}

// 1부터 n까지의 덧셈
let n = 11;

let sum1 = 0;
// sum1 = 0+'1+2+3,,,,+ n(11)'
console.log('======')
for(let i = 1 ; i < n + 1 ; i++){
    console.log(i);
    // sum1=0+1
    // sum1=0+1+2
    // sum1=0+1+2+...+n
    sum1 += i;
}
console.log(sum1);

/* 배열과 함께 사용하는 for문 */
let fruits =['사과', '망고', '오렌지', '망고스틴']
console.log(fruits.length); // 배열의 길이 확인
for(let i = 0; i<fruits.length ; i++){
    console.log('I like', fruits[i])
}

// 배열 요소의 합 구하기
let numsArr = [99, 99, 98, 85, 77]
let sum2 = 0;
for(let i = 0; i<numsArr.length ; i++){
    sum2 += numsArr[i] //? sum2 = sum2 + numsArr[i]
}
console.log(sum2)

/* 2. while 문 */
/* 
초기화식
while(조건식){
    조건이 참일 때 실행할 문장;
    증갑식;
}
*/
let n2 = 1; // while의 초기화 식
while(n2 <= 5){ // 조건식
    console.log(n2); // 실행문
    n2++; // 증감식
}
console.log('----------')
n2 = 10;
while(n2 > 4){
    console.log(n2);
    n2--;
}

// 1~10 짝수만 출력 > while문 이용
n2 = 1;
while(n2 <= 10){
    if(n2 %2===0)
        console.log(n2);
    n2++;
}

// 10부터 1까지 감소하는데 홀수만 출력
n2 = 10;
while(n2 >=1){
    if(n2 %2===1){    
        console.log(n2)
    }
    n2--;
}

console.log('----------')

let b = 0;
while(true){
    console.log(b);
    b++;
    if(b >10) break;
}

console.log('----------')

let sum3 = 0;
for(let i =0; i <10; i++){
    if(i%2===0) continue; // i%2===0일 때 반복하지 않고 다음 반복으로 넘김
    sum3 += i;
}
console.log(sum3);

/* let n3 = 0;
while(confirm('계속 진행할까요?')){
    n3++;
    alert(`${n3}번째 alert 창`)
} */

//실습 합 구하기 while 두번째거 if for문
console.log('------실습------')

/* let mul13 = Number(prompt('숫자 입력'))
// for(let i = 0; i <=mul13; i++){
//     if(i %2===0){
//         continue;
//     }else if(i %13===0){
//         console.log(i);
//     }
// }

for(let i = 0; i <=mul13; i++){
    if(i %2===1 && i %13===0){
        console.log(i);
    }
} */

console.log('------실습------')

/* for(let i = 2; i <=9; i++){
    console.log(`---${i} 단---`)
    for(let j=1; j<=9; j++){
        console.log(`${i}× ${j} = ${i*j}`)
    }
} */

console.log('------실습------') //<<마무리하기

let num25 = 0;
let sum25 = num25;
while(num25<=100){
    if(num25 %2===0 || num25 %5===0){
        sum25 = sum25 + num25
    }
    num25++;
}
console.log(sum25)
