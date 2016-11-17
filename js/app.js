$(document).ready(function() {
console.log('DOM');




function ShowPianoOrInstruction() {

  var button = $('.change').find('.button');
  //console.log(button);
  var showInstruction = $('.showInstruction');
  var btn = showInstruction.find('.button');
  //console.log(btn);
  var instruction = $(".instruction");
  var piano = $(".piano");
  var main = $('main');
  var pianoShow = piano.detach();
  var btnShow = showInstruction.detach();

    button.on('click', function () {
      var detached = instruction.detach();
      main.append(pianoShow);
      pianoShow.append(btnShow);


      btn.on('click', function () {
        pianoShow.remove();
        main.append(detached);
    });


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
              $(this).css({background: '#b5edf4'});
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
            two.css({background: '#b5edf4'});
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
            two.css({background: '#b5edf4'});
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
            two.css({background: '#b5edf4'});
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
            two.css({background: '#b5edf4'});
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
            two.css({background: '#b5edf4'});
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
            two.css({background: '#b5edf4'});
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
            two.css({background: '#b5edf4'});
            c.onended = function () {
             two.css({background: 'inherit'});
            }
            }


        });

}

addTheSoundToTheKey();
































});
