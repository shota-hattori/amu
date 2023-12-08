/*----------------------------------------------------
script.js
----------------------------------------------------*/
// jQuery
$(function () {
  // ページ内スクロール
  $('a[href*="#"]').click(function () {
    const speed = 400;
    const target = $(this.hash === '#' || '' ? 'html' : this.hash)
    if (!target.length) return;
    const targetPos = target.offset().top;
    $('html, body').animate({ scrollTop: targetPos }, speed, 'swing');
    return false;
  });
});