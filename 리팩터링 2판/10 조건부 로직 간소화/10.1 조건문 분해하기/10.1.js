/**
 * 예시: 여름이면 할인율이 달라지는 어떤 서비스의 요금을 계산
 */
// if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
if (summer()) { // info: 조건식 함수로 추출
  // change = quantity * plan.summerRate;
  change = summerCharge(); // info: 로직도 함수로 추출
} else {
  // charge = quantity * plan.regularRate + plan.regularServiceCharge;
  charge = regularCharge(); // info: 이녀석도 함수로 추출
}

//info: 취향에 따라 3항 연산자로 변경
// charge = summer() ? summerCharge() : regularCharge();

function summer() {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
  return quantity * plan.summerRate;
}

function regularCharge() {
  return quantity * paln.regualrRate + plan.regularServiceCharge;
}
