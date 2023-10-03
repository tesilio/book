/**
 * 예시: 전체 급여와 가장 어린 나이를 계산하는 코드 - 더 가다듬기
 */
function getYoungestTotalSalary(people) {
  // let youngest = people[0] ? people[0].age : Infinity;
  // info: 함수 추출
  // let totalSalary = 0;
  // for (const p of people) {
  //   totalSalary += p.salary;
  // }

  // info: 문장 슬라이드 및 함수 추출
  // let youngest = people[0] ? people[0].age : Infinity;
  // for (const p of people) {
  //   if (p.age < youngest) {
  //     youngest = p.age;
  //   }
  // }
  return `최연소: ${youngestAge()}, 총 급여: ${totalSalary()}`;

  // info: 함수 추출
  function totalSalary() {
    // let result = 0;
    // for (const p of people) {
    //   result += p.salary;
    // }
    // return result;

    // info: 반복문 파이프라인으로 바꾸기
    return people.reduce((total, p) => total + p.salary, 0);
  }

  // info: 함수 추출
  function youngestAge() {
    // let result = people[0] ? people[0].age : Infinity;
    // for (const p of people) {
    //   if (p.age < result) {
    //     result = p.age;
    //   }
    // }
    // return result;
    // info: 반복문 파이프라인으로 바꾸기, 알고리즘 교체하기
    return Math.min(...people.map(p => p.age));
  }
}
