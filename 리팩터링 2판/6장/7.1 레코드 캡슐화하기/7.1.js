/**
 * 첫 번째 예시
 */
const organization = {
  name: '애크미 구스베리',
  country: 'GB',
};

// 1. 상수 캡슐화하기
function getRawDataOfOrganization() {
  return organization;
}

// 클래스로 만들기
class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get name() {
    return this._name;
  }

  set name(aString) {
    this._name = aString;
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }
}

const organization2 = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
});

function getOrganization() {
  return organization2;
}
