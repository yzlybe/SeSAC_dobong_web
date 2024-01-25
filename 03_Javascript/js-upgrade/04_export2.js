export const animals =['dog', 'cat']; // commonJS 방식과 다르게 함수 선언문도 내보내기 가능
export function showAnimals(){
    animals.forEach((el)=>console.log(el));
}