window.onscroll = function() {
  stickyFunction(blockTwo, 'sticky',positionTwo);
  stickyFunction(blockThree, 'sticky',positionThree);
  stickyFunction(blockFour, 'sticky',positionFour);

  stickyFunction(IndexOne, 'refIndex',positionTwo);
  stickyFunctionIndex(IndexTwo, 'ref',positionTwo,positionThree);
  stickyFunctionIndex(IndexThree, 'ref',positionThree,positionFour);
  stickyFunction(IndexFour, 'ref',positionFour);
};

var IndexOne = document.querySelector('#nav a.ref0');
var IndexTwo = document.querySelector('#nav a.ref1');
var IndexThree = document.querySelector('#nav a.ref2');
var IndexFour = document.querySelector('#nav a.ref3');


var blockTwo = document.querySelector('.section-title.fixed.ttwo');
var positionTwo = document.querySelector('.section-title.sub.two');

var blockThree = document.querySelector('.section-title.fixed.tthree');
var positionThree = document.querySelector('.section-title.sub.three');

var blockFour = document.querySelector('.section-title.fixed.ffour');
var positionFour = document.querySelector('.section-title.sub.four');

function stickyFunction(element, className, pospos) {
    var stickyTop = pospos.offsetTop;
  if (window.pageYOffset + 300 > stickyTop) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

function stickyFunctionIndex(element, className, posposOne,posposTwo) {
    var stickyTop = posposOne.offsetTop;
    var stickyBot = posposTwo.offsetTop;
        if (window.pageYOffset + 300 > stickyTop && window.pageYOffset + 300 < stickyBot) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}
