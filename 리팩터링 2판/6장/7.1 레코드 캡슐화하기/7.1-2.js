/**
 * 두 번째 예시
 */
const customerData = {
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

// todo: 241 -> 이번 캡슐화도 앞에서와 마찬가지로 변수 캡슐화66절부터 시작한다.
