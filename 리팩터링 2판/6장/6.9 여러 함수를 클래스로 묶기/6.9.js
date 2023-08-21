/**
 * 예시
 */
const reading = {
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
};

/**
 * 클라이언트 1
 */
const rawReading = acquireReading();
const aReading = new Reading(aRea)
const baseCharge = aReading.baseCharge;

/**
 * 클라이언트 2
 */
const rawReading = acquireReading();
const aReading = new Reading(rawReading);



/**
 * 클라이언트 3
 */
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);
const taxableCharge = aReading.taxableCharge;

/**
 * 기본 요금 계산 함수
 * @param aReading
 * @returns {number}
 */
function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

/**
 * 1. 레코드를 캡슐화
 */
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }

  get quantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

/**
 * 2. 이미 만들어져있는 calculateBaseCharge() 변경
 */
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;

