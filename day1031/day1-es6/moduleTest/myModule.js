//module: 재사용 가능한 대상(함수, 객체, 변수)를 가직고 있는 파일
//export, import로 사용

function cube(val) {
    return val * val * val;
}

const foo = Math.PI * 2;

var user = {
    num: 111,
    name: "james dean",
    address: "seoul"
}

//export: 재사용 가능한 대상을 외부로 내보냄
//1. named export
export { cube, foo };
export { user };
    
//2. default export
export default {
    id: 12345,
    name: "jane kim",
    tel: "010-1234-5678"
};

