$(document).ready(function() {
console.log('DOM');





    var happyBrthdy = [['two', 400],['two', 400],['three', 400],['two', 400],['five', 400],['four', 400],['two', 400],['two', 400],['three', 400],['two', 400],['six', 400],['five', 800],['two', 400],['two', 400],['nine', 400],['seven', 400],['five', 400],['four', 400],['three', 400],['eight', 400],['eight', 400],['seven', 400],['five', 400],['six', 400],['five', 400]];
    var softKitty = [['nine', 400]['seven', 400],['seven', 400],['eight', 400],['six', 400],['six', 400],['five', 400],['seven', 400],['nine', 400],['nine', 400],['seven', 400],['seven', 400],['eight', 400],['six', 400],['six', 400],['five', 400],['seven', 400],['five', 400]];
  // var twinkle = ['two' ,'two', 'six' ,'six', 'seven' ,'seven', 'six' ,'five' ,'five' ,'four' ,'four', 'three', 'three' ,'two' , 'six' ,'six' ,'five', 'five', 'three', 'three', 'two' ,'six' ,'six', 'five' ,'five', 'four' ,'four' 'three' ,'two' ,'two', 'six', 'six', 'seven', 'seven' ,'six', 'five', 'five', 'four', 'four', 'three', 'three', 'two']

    var index = 0;
    var btn = $('.music');

    btn.on('click', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).text('start');
        index = 0;

        $('.key').removeClass('curr');

      } else {
        var div = $('.'+ happyBrthdy[index][0]);
        div.addClass('curr');
        $(this).addClass('active');
        $(this).text('reset');
      }


    });

    $('main').on('click', '.key', function () {
      if (btn.hasClass('active')) {
        if ($(this).hasClass('curr')) {
          var div = $('.'+ happyBrthdy[index][0]);
          div.removeClass('curr');
          ++index;
          if (index<happyBrthdy.length) {
            setTimeout(function () {
              $('.'+ happyBrthdy[index][0]).addClass('curr');
            },happyBrthdy[index][1]);

          }  else {
              index = 0;
            }
        } else {
          var error = $(this);
          error.addClass('error');

          setTimeout(function () {
            error.removeClass('error');
            index = 0;
            $('.key').removeClass('curr');
            btn.trigger('click');

          }, 300);
        }

      }


    });

    var index2 = 0;
    var btn2 = $('.music2');

    btn2.on('click', function () {
      console.log('dziala');
      if ($(this).hasClass('active')) {
        console.log($(this).hasClass('active'));
        $(this).removeClass('active');
        $(this).text('start');
        index2 = 0;

        $('.key').removeClass('curr');

      } else {

        var div2 = $('.'+ softKitty[index2][0]);
        div2.addClass('curr');
        $(this).addClass('active');
        $(this).text('reset');
      }


    });

    $('main').on('click', '.key', function () {
      if (btn2.hasClass('active')) {
        if ($(this).hasClass('curr')) {

          var div2 = $('.'+ softKitty[index2][0]);
          div2.removeClass('curr');
          ++index2;
          if (index2<softKitty.length) {
            setTimeout(function () {
              $('.'+ softKitty[index2][0]).addClass('curr');
            },softKitty[index2][1]);

          }  else {
              index2 = 0;
            }
        } else {
          var error = $(this);
          error.addClass('error');

          setTimeout(function () {
            error.removeClass('error');
            index2 = 0;
            $('.key').removeClass('curr');
            btn2.trigger('click');

          }, 300);
        }

      }



    });



function hamburgerMenu() {

        var btn = $('.btn-menu');
        var  nav = $('#nav');
        var navUl = $('.nav-ul');


        function _btnMenuInit() {
         		   btn.on('click', function(){
         		   nav.toggleClass('hidden-nav');
         		   navUl.toggleClass('nav-mobile');
         		});
         }



        function _showBtn(){
        		btn.removeClass('hidden-btn');
         }

          function _hideBtn(){
         		btn.addClass('hidden-btn');
         }

         function _showNav(){

        			nav.removeClass('hidden-nav');
        			navUl.addClass('nav-mobile');
         }

         function _hideNav(){
        			nav.addClass('hidden-nav');
         }


        function test_match_media_with_listener(){   //przeklejony z prezentacji//
        	var mq = window.matchMedia("(max-width: 500px)");
        	mq.addListener(WidthChange);
        	WidthChange(mq);

        	// media query change
        	function WidthChange(mediaQuery) {

        		if(mediaQuery.matches) {
         			  _hideNav();
         			 _showBtn();
        			console.log('yes');

        		} else {
        		   _showNav();
        		    _hideBtn();
        			console.log('no');
        		}
        	}
        }
        test_match_media_with_listener();

     	_btnMenuInit();
}
hamburgerMenu();

//koniec//

function ShowPianoOrInstruction() {

  var button = $('.change').find('.button');
  //console.log(button);
  var showInstruction = $('.showInstruction');
  var btn = showInstruction.find('.button');
  //console.log(btn);
  var instruction = $(".instruction");
  var piano = $(".piano");
  var main = $('main');
  //var pianoShow = piano.detach();
  //var btnShow = showInstruction.detach();
  piano.hide();

    button.on('click', function () {
      //var detached = instruction.detach();
      //main.append(pianoShow);
      //pianoShow.append(btnShow);
      instruction.hide();
      piano.show();

    });
    btn.on('click', function () {
      instruction.show();
      piano.hide();
  });

}

ShowPianoOrInstruction();

function addTheSoundToTheKey() {

    var main = $('main');
    var key = $('.key');

        main.on('click', '.key', function() {
              var c = this.querySelector('.c');
              c.pause();
              c.currentTime = 0;
              c.play();
              $(this).css({background: '#b7aeae'});
              var div = $(this);
              c.onended = function () {
               div.css({background: 'inherit'});
              }

          });

        $(document).on('keydown', function (e) {
          if(e.which == 65) {
            var c = this.querySelector('.geeOne');
            c.pause();
            c.currentTime = 0;
            c.play();

            var two = $('.two');
            two.css({background: '#b7aeae'});
            c.onended = function () {
             two.css({background: 'inherit'});
            }
            }
          if(e.which == 83) {
            var c = this.querySelector('.aaa');
            c.pause();
            c.currentTime = 0;
            c.play();

            var two = $('.three');
            two.css({background: '#b5edf4'});
            c.onended = function () {
             two.css({background: 'inherit'});
            }
            }
          if(e.which == 68) {
            var c = this.querySelector('.bee');
            c.pause();
            c.currentTime = 0;
            c.play();

            var two = $('.four');
            two.css({background: '#b7aeae'});
            c.onended = function () {
             two.css({background: 'inherit'});
            }
            }
          if(e.which == 70) {
            var c = this.querySelector('.see');
            c.pause();
            c.currentTime = 0;
            c.play();

            var two = $('.five');
            two.css({background: '#b7aeae'});
            c.onended = function () {
             two.css({background: 'inherit'});
            }
            }
          if(e.which == 71) {
            var c = this.querySelector('.dee');
            c.pause();
            c.currentTime = 0;
            c.play();

            var two = $('.six');
            two.css({background: '#b7aeae'});
            c.onended = function () {
             two.css({background: 'inherit'});
            }
            }
          if(e.which == 72) {
            var c = this.querySelector('.eee');
            c.pause();
            c.currentTime = 0;
            c.play();

            var two = $('.seven');
            two.css({background: '#b7aeae'});
            c.onended = function () {
             two.css({background: 'inherit'});
            }
            }
          if(e.which == 74) {
            var c = this.querySelector('.eff');
            c.pause();
            c.currentTime = 0;
            c.play();

            var two = $('.eight');
            two.css({background: '#b7aeae'});
            c.onended = function () {
             two.css({background: 'inherit'});
            }
            }
          if(e.which == 75) {
            var c = this.querySelector('.gee');
            c.pause();
            c.currentTime = 0;
            c.play();

            var two = $('.nine');
            two.css({background: '#b7aeae'});
            c.onended = function () {
             two.css({background: 'inherit'});
            }
            }


        });

}

addTheSoundToTheKey();
































});
