/**
 * 예시: 상수 -> name을 title로 바꿔야할 경우
 */
// const organization = {
//   name: '애크미 구스베리',
//   country: 'GB',
// };
// info: 클래스로 캡슐화
class Organization {
  constructor(data) {
    // this._name = data.name;
    // this._title = data.name; // info: 생성자와 접근자 구분
    // this._title = (data.title !== undefined) ? data.title : data.name; // info: title도 받을 수 있게 변경
    this._title = data.title; // info: name을 사용하는 코드 제거
    this._country = data.country;
  }

  // get name() {
  get name() { // info: 접근자도 name으로 수정
    // return this._name;
    return this._title; // info: 생성자와 접근자 구분
  }

  // set name(value) {
  set name(value) { // info: 접근자도 name으로 수정
    // this._name = value;
    this._title = value; // info: 생성자와 접근자 구분
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }
}

const organization = new Organization({
  // name: '애크미 구스베리',
  title: '애크미 구스베리', // info: 호출하는 모든 곳에서 title로 변경
  country: 'GB',
});
