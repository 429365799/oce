
//------ 手机网页打开Menu的效果 ------//
var menu = document.getElementById('mobile-menu');
var navMobile = document.querySelector('.nav.mobile');
var navMobileAnim = document.querySelector('.nav>.nav-anim');

menu.addEventListener('click', function() {
  var isShow = navMobile.style.display === 'block';
  navMobile.style.display = isShow ? 'none' : 'block';

  // 先显示位置再动画出来
  setTimeout(function () {
    navMobileAnim.classList.toggle('active');
  }, 200);
});

//------ 滚动监听 ------//
var scrollTop = 0;
var container = document.getElementById('container');
window.onscroll = function (evt) {
  scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

  if (scrollTop > 80) {
    container.classList.add('scroll-active');
  }else {
    container.classList.remove('scroll-active');
  }
}

//------ 由于header固定，所以这里做个滚动高度补偿 ------//
var navItems = document.querySelectorAll('.nav.desktop li');
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function (evt) {
    setTimeout(function () {
        if (document.documentElement.scrollTop !== 0) {
          document.documentElement.scrollTop -= 100;

        }else if (document.body.scrollTop !== 0) {
          document.body.scrollTop -= 100;
        }

    }, 100);
  });
}

//------ Swiper 2 ------//
var mySwiper = new Swiper('.swiper-container', {
  autoplay: 3000,
  autoplayDisableOnInteraction: false,
  pagination : '.pagination',
  paginationClickable: true
});
