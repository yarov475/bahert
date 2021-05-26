let longread = document.querySelector('.longread');
    let sizeSetting = document.querySelector('.size-setting');
    let pixels = document.querySelector('.pixels');
     sizeSetting.onchange = function () {
      pixels.textContent = sizeSetting.value;
      longread.style.fontSize = sizeSetting.value + 'px';
    };