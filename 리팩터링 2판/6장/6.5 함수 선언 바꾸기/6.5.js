/**
 * 함수 이름 바꾸기(간단한 절차)
 */

// 1. 너무 축약된 함수이름
function circum(radius) {
  return 2* Math.PI * radius;
}

// 2. 함수 선언 수정
function circumference(radius) {
  return 2 * Math.PI * radius;
}

// 3. circum() 을 호출한 곳을 모두 찾아서 circumference()로 바꿈

/**
 * 함수 이름 바꾸기(마이그레이션 절차)
 */

// 1. 너무 축약된 함수이름
function circum(radius) {
  return 2* Math.PI * radius;
}

// 2. 함수 본문 전체를 새로운 함수로 추출
function circum(radius) {
  return circumference(radius);
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}
// 3. 수정한 코드를 테스트
// 4. 예전 함수를 인라인(6.2절)
// 5. 모두 바꿨다면 기존 함수 모두 삭제

/**
 * 매개변수 추가하기
 */
class Book {
  _reservations;
  addReservation(customer) {
    this._reservations.push(customer);
  }
}

// 2. 본문을 새로운 함수로 추출
class Book {
  _reservations;
  addReservation(customer) {
    this.zz_addReservation(customer);
  }

  zz_addReservation(customer) {
    this._reservations.push(customer)
  }
}

// 3. 새 함수의 선언문과 호출문에 원하는 매개변수를 추가
class Book {
  _reservations;
  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority ===false);
    this._reservations.push(customer)
  }
}



/**
 * 매개변수를 속성으로 바꾸기
 */
function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

const newEnglanders = someCustomers.filter(c => inNewEngland(c));

// 1. 매개변수로 사용할 코드를 변수로 추출
function inNewEngland(aCustomer) {
  const stateCode = aCustomer.address.state;
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

// 2. 함수 추출하기
function xxNewinNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}
function inNewEngland(aCustomer) {
  const stateCode = aCustomer.address.state;
  return xxNewinNewEngland(stateCode);
}

// 3. 기존 함수의 입력 매개변수 인라인하기
function xxNewinNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}
function inNewEngland(aCustomer) {
  return xxNewinNewEngland(aCustomer.address.state);
}

// 4. 함수 인라인하기로 기존 함수의 본문을 호출문에 집어넣기
function xxNewinNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}
function inNewEngland(aCustomer) {
  return xxNewinNewEngland(aCustomer.address.state);
}

const newEnglanders = someCustomers.filter(c => xxNewinNewEngland(c.address.state));

// 5. 함수 선언 바꾸기를 다시 적용하여 새 함수와 기존 함수의 이름 교체
function inNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

const newEnglanders = someCustomers.filter(c => inNewEngland(c.address.state));
