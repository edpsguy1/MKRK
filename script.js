/* 수랏간 김상궁 랜딩페이지 — Lucide 아이콘 렌더링 */
(function renderIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  } else {
    setTimeout(renderIcons, 120);
  }
})();
