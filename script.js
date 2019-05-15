$(document).ready(function(){
  		$(".gambar9").click(function(){
   		 $(".deskripsi").html('an instrument for determining temperature');
  		  });
		});

	$(document).ready(function(){
  		$(".gambar8").click(function(){
   		 $(".deskripsi").html('    a general-purpose computer. designed to run software such as  word processor or Internet browser for an individual user');
  		  });
		});
	
	$(document).ready(function(){
  		$(".gambar7").click(function(){
   		 $(".deskripsi").text('a usually electronic device for performing mathematical calculations');
  		  });
		});
	
	$(document).ready(function(){
  		$(".gambar6").click(function(){
   		 $(".deskripsi").text('a usually flexible container that may be closed for holding, storing, or carrying something');
  		  });
		});
	
	$(document).ready(function(){
  		$(".gambar5").click(function(){
   		 $(".deskripsi").text('a tabular register of days according to a system usually covering one year and referring the days of each month to the days of the week');
  		  });
		});
	
	$(document).ready(function(){
  		$(".gambar4").click(function(){
   		 $(".deskripsi").text('an implement for writing or drawing, constructed of a narrow, solid pigment core in a protective casing');
  		  });
		});
	
	$(document).ready(function(){
  		$(".gambar3").click(function(){
   		 $(".deskripsi").text('a spherical representation of the earth');
  		  });
		});
	
	$(document).ready(function(){
  		$(".gambar2").click(function(){
   		 	$(".deskripsi").text('a device other than a watch for indicating or measuring time commonly by means of hands moving on a dial');
  		  });
		});
	
	$(document).ready(function(){
  		$(".gambar1").click(function(){
   		 	$(".deskripsi").text('a set of written, printed, or blank sheets bound together between a front and back cover');

  		  });
		});


    var x = document.getElementById("tepuk");
  function playAudio() {
    x.play();
    // body...
  }
  

function benar() {
  alert('apasih');
  // body...
}

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);