let isFocused = false,
    isClearQuiz1 = false,
    isClearQuiz2 = false,
    countClickStartButton = 0,
    countReload = 0,
    d = document,
    _checkchar_value = {},
    alertMessage = "";

window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    e.returnValue = '';
});

window.addEventListener('popstate', function(event) {
    window.history.pushState(null, null, null)
    if(countReload === 0) {
        alertMessage = "...";
    }else if(countReload === 1) {
        alertMessage = "......";
    }else if(countReload === 2) {
        alertMessage = "............";
    }else if(countReload === 3) {
        alertMessage = "...............戻りたい?";
    }else if(countReload === 4) {
        alertMessage = "............";
    }else if(countReload === 6) {
        alertMessage = "...............無理だよ";
    }else if(countReload === 7) {
        alertMessage = "...............多分...";
    }else if(countReload === 8) {
        alertMessage = "............";
    }
    if(!isClearQuiz1) {
        if(countReload === 13) {
            alertMessage = "...............まだやるの...?";
        }else if(countReload === 14) {
            alertMessage = "............";
        }else if(countReload === 19) {
            alertMessage = "...............そろそろ諦めたら...?";
        }else if(countReload === 20) {
            alertMessage = "............";
        }else if(countReload === 50) {
            alertMessage = "............あと50回";
        }else if(countReload === 51) {
            alertMessage = "............";
        }else if(countReload === 70) {
            alertMessage = "............あと30回";
        }else if(countReload === 71) {
            alertMessage = "............";
        }else if(countReload === 90) {
            alertMessage = "............あと10回";
        }else if(countReload === 91) {
            alertMessage = "............";
        }else if(countReload === 95) {
            alertMessage = "............あと5回";
        }else if(countReload === 96) {
            alertMessage = "............";
        }else if(countReload === 97) {
            alertMessage = "............あと3回";
        }else if(countReload === 98) {
            alertMessage = "............あと2回";
        }else if(countReload === 99) {
            alertMessage = "............あと1回";
        }else if(countReload === 100) {
            alertMessage = "............100回達成したよ！おめでとう！！";
        }else if(countReload === 101) {
            alertMessage = "............";
        }else if(countReload === 150) {
            alertMessage = "............150回";
        }else if(countReload === 151) {
            alertMessage = "............";
        }else if(countReload === 200) {
            alertMessage = "............200回";
        }else if(countReload === 201) {
            alertMessage = "............";
        }
        if (countReload >= 210){
            if(countClickStartButton >= 100) {
                alertMessage = "796251384";
            }else{
                alertMessage = "............スタートボタンを100回押してみたら？";
            }
        }
    }
    alert(alertMessage);
    countReload++;
});

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*100);
    });
}

function disableScroll(event) {
    event.preventDefault();
}

function check_chartype(obj, type){
    var text_obj = $(obj).val();
    var text_length = text_obj.length;
    if(type === "ABC") {
        if(text_obj.match(/^[A-Za-z]+$/)){
            if(text_length > 1){
                $(obj).val(_checkchar_value[obj.attr('id')]);
            }else{
                _checkchar_value[obj.attr('id')] = text_obj.toUpperCase();
                $(obj).val(_checkchar_value[obj.attr('id')]);
                let index = $(obj).index();
                $(obj).parent().find('input').eq(index + 1).focus();
            }
        }else{
            if(text_length === 0){
                _checkchar_value[obj.attr('id')] = "";
            }else{
                $(obj).val(_checkchar_value[obj.attr('id')]);
            }
        }
    }else if(type === "123") {
        if(text_obj.match(/^[1-9]+$/)){
            if(text_length > 1){
                $(obj).val(_checkchar_value[obj.attr('id')]);
            }else{
                _checkchar_value[obj.attr('id')] = text_obj;
                $(obj).val(_checkchar_value[obj.attr('id')]);
                let index = $(obj).index();
                $(obj).parent().find('input').eq(index + 1).focus();
            }
        }else{
            if(text_length === 0){
                _checkchar_value[obj.attr('id')] = "";
            }else{
                $(obj).val(_checkchar_value[obj.attr('id')]);
            }
        }
    }
}

document.addEventListener('touchmove', disableScroll, { passive: false });
document.addEventListener('mousewheel', disableScroll, { passive: false });

// $('#first-screen').on('click', function() {
//    for(let i = 0; i < 5; i++) {
//        window.history.pushState(null, null, null)
//    }
//    $(this).css('display', 'none');
//    document.removeEventListener('touchmove', disableScroll, { passive: false });
//    document.removeEventListener('mousewheel', disableScroll, { passive: false });
// });


$('#btn-start').on('click', async function() {
    countClickStartButton += 1;
    if(countClickStartButton === 3){
        await delay(1);
        $('#blackscreen').css('display','flex');
        await delay(1);
        $('#blackscreen').css('display','none');
        $('.blackscreen__circle').css('display','none');
        await delay(3);
        $('#blackscreen').css('display','flex');
        document.addEventListener('touchmove', disableScroll, { passive: false });
        document.addEventListener('mousewheel', disableScroll, { passive: false });
        //ブラックアウト後処理
        d.querySelector('.header__logo').querySelector('img').src = "assets/images/logoafter.png";
        $('body').addClass('black-thema');
        $('#section--first').addClass('quiz1');
        $('#section--first__row .card__title').text('Hint');
        $('#section--first__row .card__content').text('');
        $('#section--first__title').text('M E L U O W E');
        $('#btn-start').text('Look Back...');
        d.querySelector('.main_img').src = "assets/images/top-image_another.png";
        let str = [];
        $('#blackscreen__statement > span').each(function(i){
            $(this).css('opacity','1');
            str[i] = $(this).text();
            $(this).text('');
            let no = i;
            let self = this;
            let interval = setInterval(async function(){
                if(no == 0 || $('#blackscreen__statement > span').eq(no - 1).children('span:last').css('opacity') == 1){
                    clearInterval(interval);
                    for (var j = 0; j < str[no].length; j++) {
                        $(self).append('<span>'+str[no].substr(j, 1)+'</span>'); 
                        $(self).children('span:last').css('opacity','1')
                        await delay(3);
                    }
                }
            });
        });
        await delay(40);
        document.removeEventListener('touchmove', disableScroll, { passive: false });
        document.removeEventListener('mousewheel', disableScroll, { passive: false });
        $('#blackscreen').css('display','none');
    }
})

$('.section__input input:not(input:first-child)').keydown(function(event) {
    let keyCode = event.keyCode;
    if(keyCode === 8 && $(this).val().length === 0){
        let index = $(this).index();
        $(this).parent().find('input').eq(index - 1).focus();
    }
});

$('.section__input input:not(input:first-child)').focus(function() {
    if (isFocused) {
        isFocused = false;
        return;
    }
    if ($(this).val().length === 0) {
        for (let i = $(this).index() - 1; i >= 0; i = i - 1) {
            if ($(this).parent().find('input').eq(i).val().length >= 1) {
                isFocused = true;
                $(this).parent().find('input').eq(i + 1).focus();
                return;
            }
        }
        $(this).parent().find('input').eq(0).focus();
    }
});

$('#section--first__input input').on('input', async function(){
    let value = "";
    check_chartype($(this),'ABC');
    for(let i = 0; i <= $('#section--first__input input').length - 1; i++) {
        value += $('#section--first__input input').eq(i).val();
    }
    if(value.length >= 1) {
        $('#section--first__input input').attr('placeholder','');
    }
    if(value.length === 7) {
        if(value == "WELCOME") {
            $('#section--first__input').html('<div>W</div><div>E</div><div>L</div><div>C</div><div>O</div><div>M</div><div>E</div>');
            $('#section--first').addClass('quiz1--clear');
            isClearQuiz1 = true;
            $('#section--second').addClass('quiz2');
            await delay(2);
            $('#section--first__input div').css('background-color','#1d0836');
            await delay(1.5);
            $('#section--first__input div').css('background-color','#b39b30');
        }else{
            $('#section--first__input input').css('background-color','#741218');
            await delay(2);
            $('#section--first__input input').css('background-color','#1d0836');
            await delay(2);
            $('#section--first__input input').css('background-color','#741218');
            await delay(3);
            $('#section--first__input input').css('background-color','#1d0836');
        }
    }
});

$('#section--first__input input').keydown(function() {
    let value = "";
    for(let i = 0; i <= $('#section--first__input input').length - 1; i++) {
        value += $('#section--first__input input').eq(i).val();
    }
    if(value.length <= 1) {
        $('#section--first__input input').eq(0).attr('placeholder','A');
        $('#section--first__input input').eq(1).attr('placeholder','N');
        $('#section--first__input input').eq(2).attr('placeholder','S');
        $('#section--first__input input').eq(3).attr('placeholder','W');
        $('#section--first__input input').eq(4).attr('placeholder','E');
        $('#section--first__input input').eq(5).attr('placeholder','R');
        $('#section--first__input input').eq(6).attr('placeholder','.');
    }
});

function godeeper() {
    
}

// window.onunload = function(){
//     window.location.href = './real-escape-game-v5/';
// }
