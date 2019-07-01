(function() {
    const avatar = document.querySelector('.avatar');

  const updateAvatarBgColor = function() {
    avatar.style.backgroundColor =
      "hsl(" + 360 * Math.random() + ',' +
        (60 + 40 * Math.random()) + '%,' + 
        (85 + 10 * Math.random()) + '%)';
  }

  document.querySelector('main').addEventListener('click', function(event) {
    if (event.target.tagName !== 'A') {
      updateAvatarBgColor();
    }
  });

  updateAvatarBgColor();

  avatar.classList.add('transition-on');
})();