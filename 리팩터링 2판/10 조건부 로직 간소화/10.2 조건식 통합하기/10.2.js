/**
 * 예시: OR 사용하기
 */
function disabilityAmount(anEmployee) {
  // if (anEmployee.seniority < 2) {
  //   return 0;
  // }
  //
  // if (anEmployee.monthsDisabled > 10) {
  //   return 0;
  // }
  //
  // if (anEmployee.isPartTime) {
  //   return 0;
  // }
  // info: OR 조건으로 통합
  // if (anEmployee.seniority < 2 || anEmployee.monthsDisabled > 10 || anEmployee.isPartTime) {
  //   return 0;
  // }
  // info: 함수로 추출
  if (isNotEligibleForDisability()) {
    return 0;
  }

  function isNotEligibleForDisability() { // 장애 수당 적용 여부 확인
    return (anEmployee.seniority < 2 || anEmployee.monthsDisabled > 10 || anEmployee.isPartTime);
  }
}

/**
 * 예시: AND 사용하기
 */
function test() {
  // if (anEmployee.onVacation) {
  //   if (anEmployee.seniority > 10) {
  //     return 1;
  //   }
  // }
  // info: and 연산자로 결합
  if ((anEmployee.onVacation) && (anEmployee.seniority > 10)) {
    return 1;
  }
  return 0.5;
}


