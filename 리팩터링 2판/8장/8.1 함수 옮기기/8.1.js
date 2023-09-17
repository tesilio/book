/**
 * 예시: 중첩 함수를 최상위로 옮기기
 */
function trackSummary(points) {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);
  return {
    time: totalTime,
    distance: totalDistance(points),
    pace,
  };

  // info: 지역화된 함수라 제거
  // // 총 거리 계산
  // function calculateDistance() {
  //   // let result = 0;
  //   // for (let i = 1; i < points.length; i += 1) {
  //   //   result += distance(points[i - 1], points[i]);
  //   // }
  //   // return result;
  //   //
  //   // info: distance, radians 현재 컨텍스트로 옮김
  //   // // 두 지점의 거리 계산
  //   // function distance(p1, p2) {
  //   //   // 하버사인 공식(haversine formula)은 다음 사이트를 참고하자. // http://uw.movable-type.co.uk/scripts/latlong.html
  //   //   const EARTH_RADIUS = 3959; // 단위: 마일(mile)
  //   //   const dLat = radians(p2.lat) - radians(p1.lat);
  //   //   const dLon = radians(p2.lon) - radians(p2.lon);
  //   //   const a = Math.pow(Math.sin(dLat / 2), 2)
  //   //     + Math.cos(radians(p2.lat))
  //   //     * Math.cos(radians(p1.lat))
  //   //     * Math.pow(Math.sin(dLon / 2), 2);
  //   //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   //   return EARTH_RADIUS * c;
  //   // }
  //   //
  //   // // 라디안 값으로 변환
  //   // function radians(degrees) {
  //   //   return degrees * Math.PI / 180;
  //   // }
  //
  //   // info: 복사한 함수 호출로 변경
  //   return top_calculateDistance(points);
  // }

  // 총 시간 계산
  function calculateTime() {
  }
}

// info: 최상위로 복사
function totalDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i += 1) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

// info: distance, radians 현재 컨텍스트로 옮김
// info: 의존하는 것이 없으니 최상위로 옮김
// 두 지점의 거리 계산
function distance(p1, p2) {
  // 하버사인 공식(haversine formula)은 다음 사이트를 참고하자. // http://uw.movable-type.co.uk/scripts/latlong.html
  const EARTH_RADIUS = 3959; // 단위: 마일(mile)
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p2.lon);
  const a = Math.pow(Math.sin(dLat / 2), 2)
    + Math.cos(radians(p2.lat))
    * Math.cos(radians(p1.lat))
    * Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}

// 라디안 값으로 변환
function radians(degrees) {
  return degrees * Math.PI / 180;
}
