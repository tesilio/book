/**
 * 예시
 */
// 사람 클래스
class Person {
  _name;
  _department;

  constructor(name) {
    this._name = name;
  }

  // info: 필요없는 메서드 삭제
  // get manager() {
  //   return this._department.manager;
  // }

  // info: 부서를 얻는 게터 생성
  get department() {
    return this._department;
  }
}

// 부서 클래스
class Department {
  _chargeCode;
  _manager;

  get chargeCode() {
    return this._chargeCode;
  }

  set chargeCode(value) {
    this._chargeCode = value;
  }

  get manager() {
    return this._manager;
  }

  set manager(value) {
    this._manager = value;
  }
}

const aPerson = new Person('김세현');
// info: 클라이언트가 부서를 직접 사용하도록 수정
// const manager = aPerson.manager;
const manager = aPerson.department.manager;
