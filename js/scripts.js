function allView(){
    $(".mobile").removeClass('visually-hidden');
    $(".web").removeClass('visually-hidden');
    btnBackground(1);
}

function mobileView(){
    $(".mobile").removeClass('visually-hidden');
    $(".web").addClass('visually-hidden');
    btnBackground(2);
}

function webView(){
    $(".mobile").addClass('visually-hidden');
    $(".web").removeClass('visually-hidden');
    btnBackground(3);
}

function btnBackground(val){
    if(val == 1){
        $("#btnAll").addClass('btn-dark');
        $("#btnMobile").removeClass('btn-dark');
        $("#btnWeb").removeClass('btn-dark');
    }else if(val == 2){
        $("#btnAll").removeClass('btn-dark');
        $("#btnMobile").addClass('btn-dark');
        $("#btnWeb").removeClass('btn-dark');        
    }else if(val == 3){
        $("#btnAll").removeClass('btn-dark');
        $("#btnMobile").removeClass('btn-dark');
        $("#btnWeb").addClass('btn-dark');
    }
}

