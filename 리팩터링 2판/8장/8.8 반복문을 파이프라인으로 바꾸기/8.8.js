/**
 * 예시
 */
const input = [
  {
    office: 'A',
    country: 'USA',
    telephone: '+1 312 373 1000',
  }
];
function acquireData(input) {
  const lines = input.split(`\n`);
  // let firstLine = true; // info: slice로 교체

  // info: 결과를 누적 변수에 추가
  // const result = [];
  // const loopItems = lines // info: 반복문에서 사용하는 루프 변수 생성
  const result = lines // info: 반복문에서 사용하는 루프 변수 생성
      .slice(1) // info: slice로 교체
      .filter(line => line.trim() !== '') // info: trim을 filter로 대체
      .map(line => line.split(',')) // info: 여러줄을 문자열 배열로 변환
      .filter(record => record[1].trim() === 'India') // info: 인도에 위치한 사무실 레코드 필터링
      .map(record => ({ // info: 레코드 반환 map으로 대체
        city: record[0].trim(),
        phone: record[2].trim(),
      }));
  // for (const line of loopItems) {
  //   // info: slice로 교체
  //   // if (firstLine) {
  //   //   firstLine = false;
  //   //   continue;
  //   // }
  //
  //   // info: trim을 filter로 대체
  //   // if (line.trim() === '') {
  //   //   continue;
  //   // }
  //
  //   // info: 여러줄을 문자열 배열로 반환
  //   // const record = line.split(',');
  //   const record = line;
  //
  //   // info: 인도에 위치한 사무실 레코드 filter로 대체
  //   // if (record[1].trim() === 'India') {
  //   //   result.push({
  //   //     city: record[0].trim(),
  //   //     phone: record[2].trim(),
  //   //   });
  //   // }
  //
  //   // info: map으로 대체
  //   // result.push({
  //   //   city: record[0].trim(),
  //   //   phone: record[2].trim(),
  //   // });
  //   result.push(line);
  // }
  return result;
}
