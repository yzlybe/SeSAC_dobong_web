const obj = `{
    "model": "아이오닉",
    "price":5000000,
    "isElectric":true,
    "option":["사이드미러", "스마트 스크린"]
}`; //+ 키 값은 무조건 큰따옴표 //? ,로 끝나니까 에러가 났는데 다른 배열들은 ,로 끝났지 않았나?

console.log(obj);
console.log(typeof obj);
console.log(obj.model); // undefined //+ string 형태로 들어오기때문

// JSON.parse(실제 제이슨 데이터) : json > object
const carInfo = JSON.parse(obj);
console.log("******OBJECT******");
console.log(carInfo);
console.log(typeof carInfo);
console.log(carInfo.model);

// JSON.stringify(객체) : object > json
console.log("******JSON******");
const carJson = JSON.stringify(carInfo);
console.log("json1", carJson);
const carJson2 = JSON.stringify(carInfo, null, 5); //+ 들여쓰기 5칸 이라는 뜻. 보기 쉽게 해준다!
console.log("json2", carJson2);
console.log(carJson2.model); // undefined
