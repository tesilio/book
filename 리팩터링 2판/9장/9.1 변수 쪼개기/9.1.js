/**
 * 예시 1
 */
function distanceTravelled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // info: 1, 2번 절차
  // let acc = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  let primaryTime = Math.min(time, scenario.delay);
  // result = 0.5 * acc * primaryTime * primaryTime; // 전파된 거리
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리 // info: 3번 절차
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) { // 두 번째 힘을 반영해 다시 계산
    // let primaryVelocity = acc * scenario.delay;
    let primaryVelocity = primaryAcceleration * scenario.delay; // info: 3번 절차
    // acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    // let acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass; // info: 4번 절차
    const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass; // info: 6번 절차
    // result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
    result += primaryVelocity * secondaryTime + 0.5 * secondaryAcceleration * secondaryTime * secondaryTime; // info: 6번 절차
  }
  return result;
}

/**
 * 예시 2
 * 자바스크립트의 매개변수는 값에 의한 호출(call-by-value) 방식으로 전달되므로 매개변수를 수정해도 호출자에 영향을 주지 않는다.
 */
// function discount(inputValue, quantity) {
// function discount(originalInputValue, quantity) { // info 쪼개기
function discount(inputValue, quantity) { // info 변수 이름 바꾸기
  // let inputValue = originalInputValue; // info: 쪼개기
  let result = inputValue; // info: 변수 이름 바꾸기
  if (result > 50) {
    result = result - 2;
  }

  if (quantity > 100) {
    result = result - 1;
  }
  return result;
}
