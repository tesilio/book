/**
 * 예시: Person 클래스
 */
class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }

  get telephoneNumber() {
    // return `${this.officeAreaCode} ${this.officeNumber}`;
    // info: TelephoneNumber 클래스로 추출 및 옮기기
    // return this._telephoneNumber.telephoneNumber;
    // info: 이름 변경
    return this._telephoneNumber.toString();
  }

  get officeAreaCode() {
    // return this._officeAreaCode;
    // info: TelephoneNumber 클래스로 추출 및 옮기기
    return this._telephoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    // this._officeAreaCode = arg;
    // info: TelephoneNumber 클래스로 추출 및 옮기기
    this._telephoneNumber.areaCode = arg;
  }

  get officeNumber() {
    // return this._officeNumber;
    // info: TelephoneNumber 클래스로 추출 및 옮기기
    return this._telephoneNumber._number;
  }

  set officeNumber(arg) {
    // this._officeNumber = arg;
    // info: TelephoneNumber 클래스로 추출 및 옮기기
    this._telephoneNumber.number = arg;
  }
}

// info: 전화번호를 표현하는 TelephoneNumber 클래스 정의
class TelephoneNumber {
  // get officeAreaCode() {
  // info: 이름 바꾸기
  get areaCode() {
    return this._areaCode;
  }

  // info: 이름 바꾸기
  // set officeAreaCode(arg) {
  set areaCode(arg) {
    this._areaCode = arg;
  }

  // info: 이름 바꾸기
  get number() {
    return this._number;
  }

  // info: 이름 바꾸기
  set number(arg) {
    this._number = arg;
  }

  toString() {
    return `${this.areaCode} ${this.number}`;
  }
}
