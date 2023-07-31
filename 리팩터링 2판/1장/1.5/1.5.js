function statement(invoice, plays) {
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    // 청구 내역 출력
    result += `  ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience})석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;
  return result;

  function totalAmount() {
    let result = 0;
    for (let perf of invoice.performances) {
      result += amountFor(perf);
    }
    return result;
  }

  function totalVolumeCredits() {
    let result = 0;
    for (let perf of invoice.performances) {
      // 포인트를 적립한다.
      result += volumeCreditsFor(perf);
    }
    return result;
  }

  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  function volumeCreditsFor(aPerformance) {
    let result = 0;
    // 포인트를 적립한다.
    result += Math.max(aPerformance.audience - 30, 0);

    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ('comedy' === playFor(aPerformance).type) {
      result += Math.floor(aPerformance.audience / 5);
    }
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  // 한 번의 공연에 대한 요금을 계산하는 함수 -> switch 문에서 추출함
  function amountFor(aPerformance) { // 값이 바뀌지 않는 변수는 매개변수로 전달
    let result = 0; // 명확한 이름으로 변경
    switch (playFor(aPerformance).type) {
      case 'tragedy': // 비극
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case 'comedy': // 희극
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
    }
    return result;
  }
}

module.exports.statement = statement;
