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


        main.on('click', '.key', function() {
              var c = this.querySelector('.c');
              c.pause();
              c.currentTime = 0;
              c.play();
          });
        $(document).on('keydown', function (e) {
          if(e.which == 82) {
            var c = this.querySelector('.see');
            c.pause();
            c.currentTime = 0;
            c.play();
            }
          if(e.which == 51) {
            var c = this.querySelector('.aaa');
            c.pause();
            c.currentTime = 0;
            c.play();
            }
          if(e.which == 52) {
            var c = this.querySelector('.bee');
            c.pause();
            c.currentTime = 0;
            c.play();
            }
          if(e.which == 78) {
            var c = this.querySelector('.dee');
            c.pause();
            c.currentTime = 0;
            c.play();
            }
          if(e.which == 74) {
            var c = this.querySelector('.eee');
            c.pause();
            c.currentTime = 0;
            c.play();
            }
          if(e.which == 75) {
            var c = this.querySelector('.eff');
            c.pause();
            c.currentTime = 0;
            c.play();
            }
          if(e.which == 76) {
            var c = this.querySelector('.gee');
            c.pause();
            c.currentTime = 0;
            c.play();
            }


        });

}

addTheSoundToTheKey();


});
