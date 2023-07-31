// 단축키: CMD + ALT + N
// 함수 호출 부분 선택 시 뒤에서부터!
function rating(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

