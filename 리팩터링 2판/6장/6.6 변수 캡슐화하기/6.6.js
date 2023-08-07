import assert from 'assert';
/**
 * 예시
 */
let defaultOwner = {
  firstName: '마틴',
  lastName: '파울러',
};

spaceship.owner = defaultOwner;

defaultOwner = {
  firstName: '레베카',
  lastName: '파슨스',
};

// 1. 먼저 데이터를 읽고 쓰는 함수부터 정의
let defaultOwner = {
  firstName: '마틴',
  lastName: '파울러',
};

spaceship.owner = defaultOwner;

defaultOwner = {
  firstName: '레베카',
  lastName: '파슨스',
};
function getDefaultOwner() {
  return defaultOwner;
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
}

// 2. 게터/세터 함수를 호출하도록 수정
let defaultOwner = {
  firstName: '마틴',
  lastName: '파울러',
};

spaceship.owner = getDefaultOwner();

defaultOwner = setDefaultOwner({
  firstName: '레베카',
  lastName: '파슨스',
});
function getDefaultOwner() {
  return defaultOwner;
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
}

// 3. 변수 및 접근자 함수를 같은 파일로 옮기고 export
// defaultOwner.js
let defaultOwner = {
  firstName: '마틴',
  lastName: '파울러',
};
export function getDefaultOwner() {
  return defaultOwner;
}

export function setDefaultOwner(arg) {
  defaultOwner = arg;
}

/**
 * 값 캡슐화하기
 */
const owner1 = getDefaultOwner();
assert.equal('파울러', owner1.lastName, '처음 값 확인');
const owner2 = getDefaultOwner();
owner2.lastName = '파슨스';
assert.equal('파슨스', owner1.lastName, 'owner2를 변경한 후');

// 1. 게터가 데이터의 복제본을 반환하도록 수정
// defaultOwner.js
let defaultOwner = {
  firstName: '마틴',
  lastName: '파울러',
};
export function getDefaultOwner() {
  return JSON.parse(JSON.stringify(defaultOwner));
}

export function setDefaultOwner(arg) {
  defaultOwner = arg;
}

// 2. 값을 변경할 수 없게 만들기
let defaultOwner = {
  firstName: '마틴',
  lastName: '파울러',
};
export function getDefaultOwner() {
  return new Person(defaultOwner);
}

export function setDefaultOwner(arg) {
  defaultOwner = arg;
}

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }
  get lastName() {
    return this._lastName;
  }

  get firstName() {
    return this._firstName;
  }
}
