/**
 * 조건문이 있을 때의 슬라이드
 */
function testFunction() {
  let result;
  if (availableResources.length === 0) {
    result = createResource();
    // allocateResources.push(result);
  }  else {
    result = availableResources.pop();
    // allocateResources.push(result);
  }
  allocateResources.push(result); // info: 중복 코드를 조건문 밖으로 슬라이드
  return result;
}
