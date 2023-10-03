/**
 * 예시: 전체 급여와 가장 어린 나이를 계산하는 코드
 */
function getYoungestTotalSalary(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    // info: 부수효과가 있는 코드는 한쪽만 남기고 제거
    // if (p.age < youngest) {
    //   youngest = p.age;
    // }
    totalSalary += p.salary;
  }

  // info: 첫 단계는 반복문을 단순 복제하는 것.
  for (const p of people) {
    if (p.age < youngest) {
      youngest = p.age;
    }
    // info: 부수효과가 있는 코드는 한쪽만 남기고 제거
    // totalSalary += p.salary;
  }
  return `최연소: ${youngest}, 총 급여: ${totalSalary}`;
}
