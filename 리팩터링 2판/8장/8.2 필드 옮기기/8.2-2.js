/**
 * 예시: 공유 객체로 이동하기
 */
class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    // info: 어서션 추가해보기, 모든 계좌가 동일한 이자율을 사용하는지 확인하는 용도
    assert(interestRate === this._type.interestRate);
    // info: 이자율을 직접 수정하고 가져오던 코드를 변경(어서션을 통과함!)
    // this._interestRate = interestRate;
  }

  get interestRate() {
    // return this._interestRate;
    // info: 이자율을 직접 수정하고 가져오던 코드를 변경(어서션을 통과함!)
    return this._type.interestRate;
  }
}

class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    // info: 이자율 필드와 필요한 접근자 생성
    this._interestRate = interestRate;
  }


  // info: 이자율 필드와 필요한 접근자 생성
  get interestRate() {
    return this._interestRate;
  }
}
