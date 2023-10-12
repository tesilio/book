/**
 * 예시: 직원 급여 계산 -> 현직 직원만 급여를 받아야하는 조건이 있음
 */
function payAmount(employee) {
  let result;
  if (employee.isSeparated) { // 퇴사한 직원인가?
    result = {
      amount: 0,
      reasonCode: 'SEP',
    };
  } else {
    if (employee.isRetired) {
      result = {
        amount: 0,
        reasonCode: 'RET',
      };
    } else {
      // 급여 계산 로직
      lorem.ipsum(dolor.sitamet);
      consectetur(adipiscing).elit();
      sed.do.eiusmod = temper.incididunt.ut(labore) && dolore(magna.aliqua);
      ut.enim.ad(minim.veniam);
      result = somFinalComputation();
    }
  }
  return result;
}

/**
 * 리팩터링 후
 * @param employee
 * @returns {*|{amount: number, reasonCode: string}}
 */
function afterRefactoring(employee) {
  if (employee.isSeparated) { // 퇴사한 직원인가?
    return {
      amount: 0,
      reasonCode: 'SEP',
    };
  }
  if (employee.isRetired) {
    return {
      amount: 0,
      reasonCode: 'RET',
    };
  }
  // 급여 계산 로직
  lorem.ipsum(dolor.sitamet);
  consectetur(adipiscing).elit();
  sed.do.eiusmod = temper.incididunt.ut(labore) && dolore(magna.aliqua);
  ut.enim.ad(minim.veniam);
  return somFinalComputation();
}
