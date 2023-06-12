window.addEventListener('scroll', fadeIn);

function fadeIn() {
  var viewElement = document.getElementById('view');
  var descriptionElement = document.getElementById('service_description');
  var personaElement = document.getElementById('persona2');
  var ellipse1Element = document.getElementById('Ellipse1');
  var ellipse2Element = document.getElementById('Ellipse2');


  var viewPosition = viewElement.getBoundingClientRect().top;
  var descriptionPosition = descriptionElement.getBoundingClientRect().top;
  var personaPosition = personaElement.getBoundingClientRect().top;
  var ellipse1Position = ellipse1Element.getBoundingClientRect().top;
  var ellipse2Position = ellipse2Element.getBoundingClientRect().top;


  var screenPosition = window.innerHeight / 1.5;

  if (viewPosition < screenPosition) {
    viewElement.style.opacity = '1';
    viewElement.style.transform = 'translateY(0)';
  } else {
    viewElement.style.opacity = '0';
    viewElement.style.transform = 'translateY(20px)';
  }

  if (descriptionPosition < screenPosition) {
    descriptionElement.style.opacity = '1';
    descriptionElement.style.transform = 'translateY(0)';
  } else {
    descriptionElement.style.opacity = '0';
    descriptionElement.style.transform = 'translateY(20px)';
  }

  // 페르소나
  if (personaPosition < screenPosition) {
    personaElement.style.opacity = '1';
    personaElement.style.transform = 'translateY(0)';
  } else {
    personaElement.style.opacity = '0';
    personaElement.style.transform = 'translateY(20px)';
  }

  if (ellipse1Position < screenPosition) {
    ellipse1Element.style.opacity = '1';
    ellipse1Element.style.transform = 'translateX(0)';
  } else {
    ellipse1Element.style.opacity = '0';
    ellipse1Element.style.transform = 'translateX(-100px)';
  }
  
  if (ellipse2Position < screenPosition) {
    ellipse2Element.style.opacity = '1';
    ellipse2Element.style.transform = 'translateX(0)';
  } else {
    ellipse2Element.style.opacity = '0';
    ellipse2Element.style.transform = 'translateX(100px)';
  }

  // if (personaPosition < screenPosition) {
  //   var scrollPercentage = (screenPosition - personaPosition) / screenPosition;
  //   var opacity = Math.min(1, scrollPercentage);
  //   personaElement.style.opacity = opacity;
  // } else {
  //   personaElement.style.opacity = '0';
  // }

//   var descriptionCenter = descriptionElement.getBoundingClientRect().left + descriptionElement.offsetWidth / 2;
//   var windowCenter = window.innerWidth / 2;
//   var centerOffset = windowCenter - descriptionCenter;
//   descriptionElement.style.transform += ' translateX(' + centerOffset + 'px)';
}

var personaElement = document.getElementById('persona2');
var windowHeight = window.innerHeight;

window.addEventListener('scroll', function() {
  var distanceFromTop = personaElement.getBoundingClientRect().top;
  var opacity;

  if (distanceFromTop - windowHeight <= 0) {
    var scrollPercentage = Math.abs(distanceFromTop) / windowHeight;
    opacity = Math.min(1, scrollPercentage * 4); // 2는 페이드인 속도 조절을 위한 계수입니다
  } else {
    opacity = 0;
  }

  personaElement.style.opacity = opacity;
});

// solid
var solidElement = document.getElementById('solid');
var maxHeight = 200; // 최대 높이 값


window.addEventListener('scroll', function() {
    solidElement.style.height = maxHeight + 'px';
});


