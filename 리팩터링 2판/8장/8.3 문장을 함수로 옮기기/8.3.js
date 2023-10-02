/**
 * 예시: 사진 관련 데이터를 HTML로 내보내는 코드
 */
function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>>`);
  result.push(renderPhoto(person.photo));
  result.push(`<p>제목: ${person.photo.title}</p>`); // 제목 출력
  result.push(emitPhotoData(person.photo)); // info: 호출 변경
  return result.join('\n');
}

function photoDiv(p) {
  return [
    '<div>',
    // `<p>제목: ${p.title}</p>`,
    // emitPhotoData(p),
    emitPhotoData(p), // info: 함수 추출하기
    '</div>',
  ].join('\n');
}

// info: 함수 추출하기
function emitPhotoData(aPhoto) {
  return [
    `<p>제목: ${aPhoto.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`, // info: emitPhotoData 인라인
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`, // info: emitPhotoData 인라인
    // emitPhotoData(p), // info: 함수 추출하기
  ].join('\n');
}

// info: 인라인
// function emitPhotoData(aPhoto) {
//   const result = [];
//   result.push(`<p>위치: ${aPhoto.location}</p>`);
//   result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
//   return result.join('\n');
// }

