window.onresize = function () { 

	if(document.body.clientWidth > 320){
		var w = document.querySelectorAll('#xxx > span > a > i');

    for(var i=0; i<w.length; i++) {
      console.log(w[i]);
      w[i].classList.remove("fa-2x");
      w[i].classList.add("fa-3x");
    }
	}
	else{
		var w = document.querySelectorAll('#xxx > span > a > i');

		for(var i=0; i<w.length; i++) {
			console.log(w[i]);
			w[i].classList.remove("fa-3x");
			w[i].classList.add("fa-2x");
		}
	}
 };

 window.onload = function () { 

  if(document.body.clientWidth > 320){
    var w = document.querySelectorAll('#xxx > span > a > i');

    for(var i=0; i<w.length; i++) {
      console.log(w[i]);
      w[i].classList.remove("fa-2x");
      w[i].classList.add("fa-3x");
    }
  }
  else{
    var w = document.querySelectorAll('#xxx > span > a > i');

    for(var i=0; i<w.length; i++) {
      console.log(w[i]);
      w[i].classList.remove("fa-3x");
      w[i].classList.add("fa-2x");
    }
  }
 };


 $(function() {
  var data = [
  { 
    action: 'type',
    strings: ["bienvenido al blog^400"],
    output: '<span class="gray">+mimik@0.10.2 installed</span><br>&nbsp;',
    postDelay: 1000
  },
  { 
    action: 'type',
    strings: ["cd tests^400"],
    output: ' ',
    postDelay: 1000
  },
  { 
    action: 'type',
    //clear: true,
    strings: ['mimik run^400'],
    output: $('.mimik-run-output').html()
  },
  { 
    action: 'type',
    strings: ["that was easy!", ''],
    postDelay: 2000
  }
  
];
  runScripts(data, 0);
});

function runScripts(data, pos) {
    var prompt = $('.prompt'),
        script = data[pos];
    if(script.clear === true) {
      $('.history').html(''); 
    }
    switch(script.action) {
        case 'type':
          // cleanup for next execution
          prompt.removeData();
          $('.typed-cursor').text('');
          prompt.typed({
            strings: script.strings,
            typeSpeed: 30,
            callback: function() {
              var history = $('.history').html();
              history = history ? [history] : [];
              history.push('$ ' + prompt.text());
              if(script.output) {
                history.push(script.output);
                prompt.html('');
                $('.history').html(history.join('<br>'));
              }
              // scroll to bottom of screen
              $('section.terminal').scrollTop($('section.terminal').height());
              // Run next script
              pos++;
              if(pos < data.length) {
                setTimeout(function() {
                  runScripts(data, pos);
                }, script.postDelay || 1000);
              }
            }
          });
          break;
        case 'view':

          break;
    }
}



 