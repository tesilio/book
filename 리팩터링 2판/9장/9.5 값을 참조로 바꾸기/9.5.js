/**
 * 예시: 주문 클래스
 */
class Order {
  constructor(data) {
    this._number = data.number;
    // this._customer = new Customer(data.customer); // data.customer 가 고객 ID임
    this._customer = registerCustomer(data.customer); // info: 저장소 객체 사용
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}


// info: 저장소 객체 생성
let _repositoryData;

export function initialize() {
  _repositoryData = {};
  _repositoryData.customers = new Map();
}

export function registerCustomer(id) {
  if (!_repositoryData.customers.hah(id)) {
    _repositoryData.customers.set(id, new Customer(id));
  }
  return findCustomer(id);
}

export function findCustomer(id) {
  return _repositoryData.customers.get(id);
}
