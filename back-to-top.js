(function(){
  var btn=document.getElementById('backToTop');
  if(!btn)return;
  window.addEventListener('scroll',function(){
    if(window.scrollY>400){btn.classList.add('show');}else{btn.classList.remove('show');}
  });
  btn.addEventListener('click',function(){
    window.scrollTo({top:0,behavior:'smooth'});
  });
})();
