import { expect } from 'chai';
import createStatementData from './createStatementData.js';

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
  return {
    'customer': 'BigCo',
    'performances': [
      {
        'playID': 'hamlet',
        'audience': 55,
        'play': {
          'name': 'Hamlet',
          'type': 'tragedy',
        },
        'amount': 65000,
        'volumeCredits': 25,
      },
      {
        'playID': 'as-like',
        'audience': 35,
        'play': {
          'name': 'As You Like It',
          'type': 'comedy',
        },
        'amount': 58000,
        'volumeCredits': 12,
      },
      {
        'playID': 'othello',
        'audience': 40,
        'play': {
          'name': 'Othello',
          'type': 'tragedy',
        },
        'amount': 50000,
        'volumeCredits': 10,
      },
    ],
    'totalAmount': 173000,
    'totalVolumeCredits': 47,
  };
}
describe('createStatementData', () => {
  it('예상한 값과 일치한다', () => {
    // Given
    const invoice = sampleInvoiceData();
    const plays = samplePlaysData();

    // When
    const result = createStatementData(invoice, plays);

    // Then
    expect(result).deep.equal(expectedResult());
  });
});



