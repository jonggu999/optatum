$(document).ready(function (){

  /* gnb */
  $(".sub").hide();

  $(".depth2").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".bg_box").stop().slideDown();
    $(this).find(".sub>li>a").css({"opacity":"100%"});
  },function(){
    $(this).find(".sub").stop().slideUp();
    $(".bg_box").stop().slideUp();
    $(this).find(".sub>li>a").css({"opacity":"0"});
  });/* //gnb */



  /* scroll */
  $(document).ready(function(){

    $(window).scroll(function(){
      let pos = $(this).scrollTop();
  
      if(pos>1200){//top
        $("header, .top_button").addClass("active");
      }else{
        $("header, .top_button").removeClass("active");
      };

      if(pos>750){//mebership
        $(".cst5").addClass("actb5");
        $(".cst5 h3").css({"color":"#BFBDBA"});
      }else{
        $(".cst5").removeClass("actb5");
        $(".cst5 h3").css({"color":"#0D0D0D"});
      };

    });
    
  });/* scroll */
  


  /* slider */
  let container = $('.slideshow'),
      slideGroup = container.find('.slideshow-slides'),
      slides = slideGroup.find('a'),
      nav = container.find('.slideshow-nav'),
      indicator = container.find('.slideshow-indicator'),
      slideCount = slides.length,
      indicatorHtml = '',
      currentIndex = 0,
      duration = 500,
      easing = 'easeInOutExpo',
      interval = 3500,
      timer;

  console.log(slides);
  
  slides.each(function(i){
    let newLeft = i * 100 + '%';
    $(this).css({left: newLeft});
    indicatorHtml += '<a href="">' + (i+1) + '</a>';
    console.log(indicatorHtml);
  });

  indicator.html(indicatorHtml);


  function goToSlide(index){
    slideGroup.animate({left:-100*index + '%'}, duration, easing);
    currentIndex = index;
    updateNav();
  };

  function updateNav(){

    let navPrev = nav.find('.prev');
    let navNext = nav.find('.next');

    if(currentIndex == 0){navPrev.addClass('disabled');}
    else{navPrev.removeClass('disabled');}
    if(currentIndex == slideCount-1){navNext.addClass('disabled');}
    else{navNext.removeClass('disabled');}

    indicator.find('a').eq(currentIndex).addClass('active').siblings().removeClass('active');
  };

  indicator.find('a').click(function(e){
    e.preventDefault();
    let idx = $(this).index();
    goToSlide(idx);
  });

  nav.find('a').click(function(e){
    e.preventDefault();
    if($(this).hasClass('prev')){goToSlide(currentIndex - 1);}
    else{goToSlide(currentIndex + 1);}
  });

  updateNav();

  function startTimer(){
    timer = setInterval(function(){
      let nextIndex = (currentIndex + 1) % slideCount;
      goToSlide(nextIndex);
    }, interval);
  };

  startTimer();

  function stopTimer(){clearInterval(timer);};
  container.mouseenter(function(){stopTimer();})
  .mouseleave(function(){startTimer();
  });
  /* //swiper */


});