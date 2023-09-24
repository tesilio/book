class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(dateToday());
    this._setDiscountRate(discountRate);
  }

  get discountRate() {
    return this._contract._discountRate;
  }

  // info: 옮길 필드 캡슐화
  _setDiscountRate(aNumber) {
    this._contract._discountRate = aNumber;
  }

  becomePreferred() {
    // info: 캡슐화
    // this._discountRate += 0.03;
    this._setDiscountRate(this._discountRate += 0.03)
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    // info: 필드 옮기기
    this._discountRate = discountRate;
  }


  get discountRate() {
    return this._discountRate;
  }

  set discountRate(value) {
    this._discountRate = value;
  }
}
