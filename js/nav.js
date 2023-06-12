// nav
// Smooth scrolling for anchor links
const navMenu = document.getElementById('nav-menu');
const navLinks = navMenu.getElementsByTagName('a');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작 방지

    const targetId = this.getAttribute('href'); // 클릭한 링크의 href 속성값 가져오기
    const targetElement = document.querySelector(targetId); // 해당 섹션 요소 선택

    if (targetElement) {
      // 해당 섹션이 존재하면 스무스 스크롤링 적용
      const scrollToOptions = {
        behavior: 'smooth',
        block: 'start'
      };

      targetElement.scrollIntoView(scrollToOptions);
    }
  });
}