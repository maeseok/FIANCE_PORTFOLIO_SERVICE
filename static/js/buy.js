function noEvent(event) {
  // (8 == event.keyCode) : back space

  // (116 == event.keyCode) : F5 새로고침 단축키

  // F5 단축키 (새로고침 금지)

  // back space키로 (이전 페이지로 이동 금지)

  if (116 == event.keyCode || 8 == event.keyCode) {
    event.keyCode = 2;

    return false;

    // event.ctrlKey : Ctrl

    // (78 == event.keyCode) : H

    // (82 == event.keyCode) : R

    // ctrl + r (컨트롤, R 키로 새로고침하는 것을 금지)

    // ctrl + h (컨트롤, H 키로 페이지 목록 접근 금지)
  } else if (event.ctrlKey && (78 == event.keyCode || 82 == event.keyCode)) {
    return false;
  }
}

document.onkeydown = noEvent;

location.href = "/portfolio/buyreturn";
