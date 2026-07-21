document.addEventListener('DOMContentLoaded', function(){
  var revealSelectors = '.card, .level-card, .teaser, .step, .faq-item, .value-chip, .req-item, .promo-box, .price-table, .lead-box, .testi-empty, .about-grid, .mvv-grid .card';
  var targets = document.querySelectorAll(revealSelectors);

  if('IntersectionObserver' in window){
    targets.forEach(function(el, i){
      el.classList.add('reveal-init');
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
    });
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('reveal-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function(el){ io.observe(el); });
  }

  var hero = document.querySelector('.hero');
  if(hero){ hero.classList.add('hero-in'); }
});
