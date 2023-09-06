/**
 * 두 번째 예시
 */
let customerData = {
  '1920': {
    name: '마틴 파울러',
    id: '1920',
    usages: {
      '2016': {
        '1': 50,
        '2': 55,
      },
      '2015': {
        '1': 70,
        '2': 63,
      },
    },
  },
  '38672': {
    name: '닐 포드',
    id: '38673',
    usages: {
      '2016': {
        '1': 40,
        '2': 45,
      },
      '2015': {
        '1': 90,
        '2': 93,
      },
    },
  },
};

// 쓰는 예
const customerID = '1920';
const year = '2015';
const month = '2';
const amount = 57;
customerData[customerID].usages[year][month] = amount;

console.log(JSON.stringify(customerData, null, 2));

// 읽기 예
function compareUsage(customerID, laterYear, month) {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month];
  return {
    laterAmount: later,
    change: later - earlier,
  };
}

// info: 변수 캡슐화
function getRawDataOfCustomers() {
  // return customerData;
  // return customerData._data;
  return customerData.rawData;
}

function setRawDataOfCustomers(arg) {
  // customerData = arg;
  customerData = new CustomerData(arg);
}

// info: 쓰기 예
// getRawDataOfCustomers()[customerID].usages[year][month] = amount;
// setUsage(customerID, year, month, amount);
getCustomerData().setUsage(customerID, year, month, amount);
// function setUsage(customerID, year, month, amount) {
//   getRawDataOfCustomers()[customerID].usages[year][month] = amount;
// }

// info: 읽기 예
function compareUsage(customerID, laterYear, month) {
  // const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  // const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];

  // info: 읽는 코드를 독립 함수로 추출하여 클래스 메서드로 옮겨서 호출
  // const later = getCustomerData().usage(customerID, laterYear, month);
  // const earlier = getCustomerData().usage(customerID, laterYear - 1, month);

  // info: 복제한 값을 호출 - 단점 데이터 구조가 클수록 복제 비용이 커짐
  const later = getCustomerData().rawData[customerID].usages[laterYear][month];
  const earlier = getCustomerData().rawData[customerID].usages[laterYear - 1][month];
  return {
    laterAmount: later,
    change: later - earlier,
  }
}

// info: 전체 데이터 구조를 표현하는 클래스 정의
class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
}

function getCustomerData() {
  return customerData;
}
