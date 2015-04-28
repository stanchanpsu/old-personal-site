$(document).ready(function(){
    $(document).on("keydown",function(e){
        if (e.which == 68){
            $('#square').animate({height:"500px"});
        }
        else        {
            $('#square').animate({height:"200px"});
        }
        });
});
    