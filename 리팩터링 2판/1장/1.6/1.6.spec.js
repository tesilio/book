const { expect } = require('chai');
const { statement } = require('./1.6');

const sampleInvoiceData = () => {
  return {
    customer: 'BigCo',
    performances: [
      {
        playID: 'hamlet',
        audience: 55,
      },
      {
        playID: 'as-like',
        audience: 35,
      },
      {
        playID: 'othello',
        audience: 40,
      },
    ],
  };
};

const samplePlaysData = () => {
  return {
    hamlet: {
      name: 'Hamlet',
      type: 'tragedy',
    },
    'as-like': {
      name: 'As You Like It',
      type: 'comedy',
    },
    othello: {
      name: 'Othello',
      type: 'tragedy',
    },
  };
};

const expectedResult = () => {
  return `청구 내역 (고객명: BigCo)
  Hamlet: $650.00 (55)석)
  As You Like It: $580.00 (35)석)
  Othello: $500.00 (40)석)
총액: $1,730.00
적립 포인트: 47점
`;
};

describe('1.6.js 테스트', () => {
  describe('statement', () => {
    it('예상한 값과 일치한다', () => {
      // Given
      const invoice = sampleInvoiceData();
      const plays = samplePlaysData();

      // When
      const result = statement(invoice, plays);

      // Then
      expect(result).equal(expectedResult());
    });
  });
});



