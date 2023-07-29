/**
 * 함수 이름 바꾸기(간단한 절차)
 */

// 1. 너무 축약된 함수이름
function circum(radius) {
  return 2* Math.PI * radius;
}

// 2. 함수 선언 수정
function circumference(radius) {
  return 2 * Math.PI * radius;
}

// 3. circum() 을 호출한 곳을 모두 찾아서 circumference()로 바꿈

/**
 * 함수 이름 바꾸기(마이그레이션 절차)
 */

// 1. 너무 축약된 함수이름
function circum(radius) {
  return 2* Math.PI * radius;
}

// 2. 함수 본문 전체를 새로운 함수로 추출
function circum(radius) {
  return circumference(radius);
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

// 3. 수정한 코드를 테스트

// 4. 예전 함수를 인라인(6.2절)
