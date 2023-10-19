/**
 * 예시: 전력 회사는 전력이 필요한 현장(site)에 인프라를 설치해 서비스를 제공한다.
 */
class Site {
  get customer() {
    // return this._customer;
    return this._customer === '미확인 고객' ? new UnknownCustomer() : this._customer; // info: 4단계
  }
}

class Customer {
  get name() {
    return this._name;
  }

  get billingPlan() {
    return this._billingPlan;
  }

  set billingPlan(value) {
    this._billingPlan = value;
  }

  get paymentHistory() {
    return this._paymentHistory;
  }

  // info: 1단계
  get isUnknown() {
    return false;
  }
}

// info: 2단계
class UnknownCustomer {
  get isUnknown() {
    return true;
  }

  // info: 7단계
  get name() {
    return '거주자';
  }

  // info: 7단계
  get billingPlan() {
    return registry.billingPlans.basic;
  }

  // info: 7단계
  set billingPlan(value) {
    // 무시
  }

  // info: 7단계
  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}

// info: 3단계
function isUnknown(arg) {
  // if (!((arg instanceof Customer) || (arg === '미확인 고객'))) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer)) { // info: 5단계
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  }
  return (arg === '미확인 고객');
}

// 클라이언트1
const aCustomer = site.customer;
// ...
// let customerName;
// // if (aCustomer === '미확인 고객') {
// if (isUnknown(aCustomer)) { // info: 3단계
//   customerName = '거주자';
// } else {
//   customerName = aCustomer.name;
// }
const customerName = aCustomer.name; // info: 7단계

// 클라이언트2
// const plan = (aCustomer === '미확인 고객') ? registry.billingPlans.basic : aCustomer.billingPlan;
// const plan = (isUnknown(aCustomer)) ? registry.billingPlans.basic : aCustomer.billingPlan; // info: 3단계
const plan = aCustomer.billingPlan; // info: 7단계

// 클라이언트3
// if (aCustomer !== '미확인 고객') {
// if (isUnknown(aCustomer)) { // info: 3단계
//   aCustomer.billingPlan = newPlan;
// }
aCustomer.billingPlan = newPlan; // info: 7단계

// 클라이언트4
// const weeksDelinquent = (aCustomer === '미확인 고객') ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
// const weeksDelinquent = (isUnknown(aCustomer)) ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear; // info: 3단계
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear; // info: 7단계

// 튀는 클라이언트(예외) // info: 8단계
// const name = !isUnknown(aCustomer) ? aCustomer.name : '미확인 거주자';
const name = aCustomer.isUnknown ? '미확인 거주자' : aCustomer.name;






















