/**
 * 예시
 */
let tpHd = 'untitled';
result += `<h1>${tpHd}</h1>`;
tpHd = obj['articleTitle'];

// 1. 변수 캡슐화하기
let tpHd = 'untitled';

result += `<h1>${title()}</h1>`;
setTitle(obj['articleTitle']);

function title() {
  return tpHd;
}
function setTitle(arg) {
  tpHd = arg;
}
// 2. 변수 이름 바꾸기
let _title = 'untitled';

result += `<h1>${title()}</h1>`;
setTitle(obj['articleTitle']);

function title() {
  return _title;
}
function setTitle(arg) {
  tpHd = _title;
}

/**
 * 예시: 상수 이름 바꾸기
 */
const cpyNm = '애크미 구스베리';

// 원본의 이름을 바꾼 후, 원본의 원래 이름과 같은 복제본 생성
const companyName = '애크미 구스베리';
const cpyNm = companyName;

// 이후 기존 변수를 사용하는 곳을 점진적으로 변경
