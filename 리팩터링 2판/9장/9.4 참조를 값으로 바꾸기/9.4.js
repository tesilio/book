/**
 * 예시: 사람 클래스가 있는데, 생성 시점에 전화번호가 올바르게 설정되지 못하게 짜여져 있다.
 */
class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  set officeAreaCode(value) {
    // this._telephoneNumber.areaCode = value;
    this._telephoneNumber = new TelephoneNumber(value, this.officeNumber); // info: 세터가 제거되어 생성해야함
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }

  set officeNumber(value) {
    // this._telephoneNumber.number = value; // info: 세터가 제거되어 생성해야함
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, value);
  }
}

class TelephoneNumber {
  constructor(areaCode, number) { // info: 세터를 제거하여 생성자에서 입력받기로 변경
    this._areaCode = areaCode;
    this._number = number;
  }

  get areaCode() {
    return this._areaCode;
  }

  // set areaCode(value) { // info: 세터 제거하기
  //   this._areaCode = value;
  // }

  get number() {
    return this._number;
  }

  // set number(value) { // info: 세터 제거하기
  //   this._number = value;
  // }

  equals(other) {
    if (!(other instanceof TelephoneNumber)) {
      return false;
    }
    return this.areaCode === other.areaCode && this.number === other.number;
  }
}

it('telephone equals', () => {
  assert(new TelephoneNumber('312', '555-0142').equals(new TelephoneNumber('312', '555-0142')));
});
