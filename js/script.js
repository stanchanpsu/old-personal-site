function playNote(note) {
        document.getElementById(note).currentTime = 0;
		document.getElementById(note).play();
        setTimeout(function(){
            document.getElementById(note).pause();
        }, 1000);
}

$(document).ready(function(){
    $('.key').click(function(){
        // console.log(event.target.id);
        // var $audio = $("#"+ event.target.id + "Note").get(0).play()
        // $("#"+ event.target.id + "Note").get(0).delay(1000).get(0).pause();
        // console.log($audio);
        playNote(event.target.id + "Note");
    });
});