$(document).ready(function(){
  $('header nav').affix({
    offset: {
      top: 60
    }
    });
  $('body').scrollspy({
    target:'#nav-links-container',
    offset:100
  })
});