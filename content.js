window.addEventListener('load', function () {
  console.log('load!');
  // FIXME
  setTimeout(function () {
    const button = document.createElement("gmail_button");
    button.innerHTML = "Gmail";
    // https://developer.mozilla.org/ja/docs/Web/CSS/cursor#%E5%85%AC%E5%BC%8F%E5%AE%9A%E7%BE%A9
    button.style.cursor = "pointer";
    button.onclick = function () {
      const url = 'https://mail.google.com/mail/u/0/#inbox';
      window.open(url, '_blank');
    };
    const targetDiv = document.getElementsByClassName('sc-6qqf7t-6');
    targetDiv[0].insertBefore(button, null);
  }, 1000);

});