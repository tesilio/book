/**
 * 호출자가 둘뿐인 단순한 상황에대한 예시
 * 만약 listRecentPhotos 에서만 위치 정보를 다르게 렌더링하도록 해야 한다면?
 */
function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>`);
  renderPhoto(outStream, person.photo);
  // emitPhotoData(outStream, person.photo);
  emitPhotoData(outStream, person.photo); // info: 인라인
  outStream.write(`<p>위치: ${person.photo.location}</p>\n`); // info: 첫 번째 호출 위치로 인라인
}

function listRecentPhotos(outStream, photos) {
  photos.filter(p => p.date > recentDateCutoff()).forEach(p => {
    outStream.write(`<div>\n`);
    // emitPhotoData(outStream, p);
    emitPhotoData(outStream, p); // info: 인라인
    outStream.write(`<p>위치: ${p.location}</p>\n`); // info: 두 번째 호출 위치로 인라인
    outStream.write(`</div>`);
  })
}

// info: 원래 함수를 지움!
// function emitPhotoData(outStream, photo) {
//   // outStream.write(`<p>제목: ${photo.title}</p>\n`);
//   // outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
//   zztmp(outStream, photo); // info: 이 함수에 남길 코드를 함수로 추출
//   outStream.write(`<p>위치: ${photo.location}</p>\n`);
// }

// info: 이 함수에 남길 코드를 함수로 추출(이동하지 않을 코드)
function emitPhotoData(outStream, photo) { // info: 함수명을 원래대로 바꿈!
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}
