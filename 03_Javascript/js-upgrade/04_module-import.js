// 모듈 사용 - import 키워드를 이용
import {flr, getFlr} from './04_export1.js'; //+ 객체구조할당을 이용해 따로따로 가져오는 방법 //+ js 안써도 된다면서요 써야 작동하는데요..!
import * as flowers from './04_export1.js'; // 한 번에 가져오는 방법 //+ 따로따로 명시하는 게 효율 면에선 좋다

console.log(flr);
console.log(getFlr(2));
console.log(getFlr(3));

console.log(flowers);
console.log(flowers.flr);
console.log(flowers.getFlr(1));

import { showAnimals, animals } from './04_export2.js';
console.log(animals);
showAnimals();

import sayHi from './05_exportdefault.js'; // default 방식은 얘 하나만 가져오기 때문에 이름만 쓰면 된다. 중괄호를 쓸 필요가 없음.
sayHi();