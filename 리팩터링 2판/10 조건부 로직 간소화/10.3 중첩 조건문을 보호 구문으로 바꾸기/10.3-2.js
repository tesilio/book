/**
 * 예시2: 조건 반대로 만들기
 */
function adjustedCapital(anInstrument) {
  let result = 0;
  if (anInstrument.capital > 0) {
    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
      result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    }
  }
  return result;
}


/**
 * 리팩터링 후
 * @param anInstrument
 * @returns {number}
 */
function adjustedCapital2(anInstrument) {
  // let result = 0; // info: 필요없어짐
  if (anInstrument.capital <= 0
    || anInstrument.interestRate <= 0
    || anInstrument.duration <= 0
  ) { // info: 결과가 같은 조건이라 통합
    return 0;
  }
  return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}
