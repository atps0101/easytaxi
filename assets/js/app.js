
document.addEventListener('DOMContentLoaded', function() {

            let header = document.querySelector('header');
            let headerHeight = header.offsetHeight;
            window.addEventListener('scroll', function() {
            if (window.pageYOffset > headerHeight) {
                header.classList.add('header-bg');
            } else {
                header.classList.remove('header-bg');
            }
            });

            let hamb = document.getElementById('nav-hamb');
            hamb.addEventListener('click', function() {
                let nav = document.getElementById('header-nav');
                let body = document.querySelector('body');
                hamb.classList.toggle('open');
                nav.classList.toggle('open');
                body.classList.toggle('overhidd');
            });


            let dest_btn = document.getElementById('dest-show');
            dest_btn.addEventListener('click', function() {

              let dest_grids = document.getElementsByClassName('dest-grids')[0];
              let show_btn_text = document.getElementById('show-btn-text');

              dest_grids.classList.toggle('hide');
              // dest_grids.classList.toggle('hide');
              dest_grids.parentElement.classList.toggle('expanded');

              
              if (dest_grids.classList.contains('hide')) {
                show_btn_text.textContent = 'Show';
              } else {
                show_btn_text.textContent = 'Hide';
              }
            });

            const anchorLinks = document.querySelectorAll('a[href^="#"]');
            const headHeight = document.querySelector('.header-nav').offsetHeight; // Высота фиксированного заголовка
            
            const observer = new IntersectionObserver(function(entries) {
              entries.forEach(function(entry) {
                const targetId = entry.target.getAttribute('id');
                const link = document.querySelector(`a[href="#${targetId}"]`);
            
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                  // Удалить класс 'curr' из всех ссылок
                  anchorLinks.forEach(function(link) {
                    link.classList.remove('curr');
                  });
            
                  // Добавить класс 'curr' только к видимой секции
                  link.classList.add('curr');
                }
              });
            }, { threshold: [0, 0.5] });
            
            // Наблюдать за каждым разделом с якорем
            anchorLinks.forEach(function(link) {
              const targetId = link.getAttribute('href').substring(1);
              const targetSection = document.getElementById(targetId);
            
              if (targetSection) {
                observer.observe(targetSection);
              }
            });
            
            // Обработчик события для каждой ссылки
            anchorLinks.forEach(function(link) {
              link.addEventListener('click', function(e) {
                e.preventDefault(); // Отменяем стандартное действие ссылки
            
                const targetId = link.getAttribute('href').substring(1); // Получаем ID раздела из атрибута href
                const targetSection = document.getElementById(targetId);
            
                if (targetSection) {
                  // Закрыть меню, если оно открыто
                  let nav = document.getElementById('header-nav');
                  let body = document.querySelector('body');
                  let hamb = document.getElementById('nav-hamb');
                  if (nav.classList.contains('open')) {
                    nav.classList.remove('open');
                    body.classList.remove('overhidd');
                    hamb.classList.remove('open');
                  }
            
                  // Удалить класс 'curr' из всех ссылок
                  anchorLinks.forEach(function(anchor) {
                    anchor.classList.remove('curr');
                  });
            
                  // Добавить класс 'curr' к активной ссылке
                  link.classList.add('curr');
            
                  // Плавная прокрутка к разделу
                  targetSection.scrollIntoView({ behavior: 'smooth' });
                }
              });
            });
            

                
              });
  

            const whatsappLink = 'https://wa.me/+447896562710';
            const telLink = 'tel:+447896562710';
            const callButtons = document.querySelectorAll('.call');
            
            callButtons.forEach(function(button) {
              button.addEventListener('click', function(e) {
                e.preventDefault();
                if (isMobileDevice()) {
                  window.open(telLink, '_self');
                } else {
                  window.open(whatsappLink, '_blank');
                }
              });
            });
            
            function isMobileDevice() {
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            }

            const swiper = new Swiper('.swiper', {
              direction: 'horizontal', // Указали направление горизонтальное
              loop: true,
              speed: 1000,
              pagination: {
                el: '.swiper-pagination',
                clickable: true, // Если хотите, чтобы пагинация была кликабельной
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
            
  
  