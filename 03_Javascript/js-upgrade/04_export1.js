// 모듈 만들기 export 이용
// 한 번에 내보내기
//+ ES6 이용하려면 반드시 package.json에 module이 명시되어 있어야한다.

const flowers =['rose', 'sunflower', 'tulip'];
function getFlowers(idx){ //+ flowers에서 index 숫자에 맞춰 배열이 나오는 함수
    if(idx>=flowers.length || idx<0) return 'x'
    return flowers[idx];
}

// export {flowers, getFlowers}
export {flowers as flr, getFlowers as getFlr} //+ as 뒤의 별칭으로 내보낼 수 있다