//export をつけることでモジュール化できる.sử dụng modules có sẵn, ví dụ
//như tên biến name bên dưới chả hạn. lệnh export{} có thể nằm bất cứ vị
//trí nào trong thân file
export {};

let name = 'TypeScript';

let isFinished: boolean = true;
isFinished = false;
//isFinished = 1; ⇒Boolean chỉ cho phép true hoặc false!
isFinished = 1;
console.log({ isFinished });
