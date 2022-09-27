$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
  });







  


  let tel = document.querySelector('#tel');
  let el = document.querySelector('.span');
  let reg = /[!,@,#,$,%,^,&,*,(,)]/g;
  
  tel.oninput = function() {
          this.value = this.value.replace(reg, '');
  
  }




  