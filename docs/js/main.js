(function(){

  window.onload = function() {// when all dom elements loaded 
    setTimeout(()=>{ //create timer
      console.log('hello from main js');
      let lamp = document.querySelector('.img-wrap');//take container with our lamp
      lamp.classList.remove('lamp-off');
      lamp.classList.add('lamp-on');
    }, 2000);//that will start after 2 seconds 
  };

  AOS.init({
  duration: 1200,
  });

  // var color = true;
  // setInterval(()=>{
  //   var a = document.querySelector('.heading');
  //   if(color==true) {
  //     a.style.backgroundColor = 'yellow';
  //   } else {
  //     a.style.backgroundColor = 'blue';
  //   }
  //   color = !color;
  // },50);

})();
