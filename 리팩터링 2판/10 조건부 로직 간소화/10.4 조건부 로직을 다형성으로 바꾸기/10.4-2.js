import { expect } from 'chai';

/**
 * 예시
 * 신용 평가 기관에서 선박의 항해 투자 등급을 계산하는 코드
 * 평가 기관은 위험요소와 잠재 수익에 영향을 주는 다양한 요인을 기초로 항해 등급을 'A'와 'B'로 나눈다
 * 위험요소로는 항해 경로의 자연조건과 선장의 항해 이력을 고려한다
 */
function rating(voyage, history) { // 투자 등급
  return new createRating(voyage, history).value;
}

// info: 1. 함수들을 Rating 클래스로 묶음
class Rating {
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    if (vpf * 3 > (vr + chr * 2)) {
      return 'A';
    } else {
      return 'B';
    }
  }

  get voyageRisk() { // 항해 경로 위험요소
    let result = 1;
    if (this.voyage.length > 4) {
      result += 2;
    }
    if (this.voyage.length > 8) {
      result += this.voyage.length - 8;
    }
    if (['중국', '동인도'].includes(this.voyage.zone)) {
      result += 4;
    }
    return Math.max(result, 0);
  }

  get captainHistoryRisk() { // 선장의 항해 이력 위험요소
    let result = 1;
    if (this.history.length < 5) {
      result += 4;
    }
    result += this.history.filter(v => v.profit < 0).length;

    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    let result = 2;

    if (this.voyage.zone === '중국') {
      result += 1;
    }

    if (this.voyage.zone === '동인도') {
      result += 1;
    }

    result += this.voyageAndHistoryLengthFactor;
    return result;
  }

  get voyageAndHistoryLengthFactor() {
    let result = 0;
    if (this.history.length > 8) {
      result += 1;
    }

    if (this.voyage.length > 14) {
      result -= 1;
    }
    return result;
  }
}

// info: 변형 동작을 담을 빈 서브클래스 만들기
class ExperiencedChinaRating extends Rating {
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }

  get voyageAndHistoryLengthFactor() {
    let result = 0;
    result += 3;

    if (this.history.length > 10) {
      result += 1;
    }

    if (this.voyage.length > 12) {
      result += 1;
    }

    if (this.voyage.length > 18) {
      result -= 1;
    }
    return result;
  }
}

function createRating(voyage, history) {
  if (voyage.zone === '중국' && history.some(v => '중국' === v.zone)) {
    return new ExperiencedChinaRating(voyage, history);
  } else {
    return new Rating(voyage, history);
  }
}


/**
 * 아래는 테스트
 */
const sampleVoyage = () => {
  return {
    zone: '서인도',
    length: 10,
  };
};

const sampleHistory = () => {
  return [
    {
      zone: '동인도',
      profit: 5,
    },
    {
      zone: '서인도',
      profit: 15,
    },
    {
      zone: '중국',
      profit: -2,
    },
    {
      zone: '서아프리카',
      profit: 7,
    },
  ];
};

const expectedResult = 'B';

describe('10.4-2', () => {
  it('rating', () => {
    const voyage = sampleVoyage();
    const history = sampleHistory();

    const result = rating(voyage, history);

    expect(result).equal(expectedResult);
  });
});

























