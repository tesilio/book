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

  // info: 이제 안쓰니까 삭제
  // get department() {
  //   return this._department;
  // }
  //
  // set department(value) {
  //   this._department = value;
  // }

  // info: 매니저 위임 메서드
  get manager() {
    return this._department.manager;
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
// info: 위임 메서드 사용으로 변경
// const manager = aPerson.department.manager;
const manager = aPerson.manager;
