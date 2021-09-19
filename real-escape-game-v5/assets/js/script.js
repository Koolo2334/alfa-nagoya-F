let isFocused = false,
    isClearQuiz1 = false,
    isClearQuiz2 = false,
    isClearGame = false,
    countClickStartButton = 0,
    countClickHintButton = 0,
    countReload = 0,
    d = document,
    _checkchar_value = {},
    alertMessage = "",
    password = ("00000000" + Math.floor(Math.random() * 100000000)).slice(-8);

window.addEventListener('beforeunload', function(e) {
    if(!isClearGame) {
        e.preventDefault();
        e.returnValue = '';
    }
});

window.addEventListener('popstate', function(event) {
    if(!isClearGame) {
        for(let i = 0; i < 2; i++) {
           window.history.pushState(null, null, null)
        }
        countReload++;
        if(isClearQuiz2) {
            alertMessage = "Quiz3"
            $('#btn-start--hint').css('display','none');
            $('#btn-start').text('...');
        }else{
            if(countReload === 1) {
                alertMessage = "...";
            }else if(countReload === 2) {
                alertMessage = "......";
            }else if(countReload === 3) {
                alertMessage = "............";
            }else if(countReload === 4) {
                alertMessage = "...............戻りたい?";
            }else if(countReload === 5) {
                alertMessage = "............";
            }else if(countReload === 7) {
                alertMessage = "...............無理だよ";
            }else if(countReload === 8) {
                alertMessage = "...............多分...";
            }else if(countReload === 9) {
                alertMessage = "............";
            }
            if(!isClearQuiz1) {
                if(countReload === 14) {
                    alertMessage = "...............まだやるの...?";
                }else if(countReload === 15) {
                    alertMessage = "............";
                }else if(countReload === 20) {
                    alertMessage = "...............そろそろ諦めたら...?";
                }else if(countReload === 21) {
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
                    ifOverTwoHundredTen();
                    // if(countClickStartButton >= 100) {
                    //     alertMessage = password;
                    // }else{
                    //     $('#btn-start').text('スタートボタン');
                    //     alertMessage = `............スタートボタンをあと${100-countClickStartButton}回押してみたら？`;
                    // }
                }
            }
        }
        alert(alertMessage);
    }
});

function ifOverTwoHundredTen(fromDevtool) {
    if(countClickStartButton >= 100) {
        alertMessage = password;
    }else{
        $('#btn-start').text('スタートボタン');
        alertMessage = `............スタートボタンをあと${100-countClickStartButton}回押してみたら？`;
    }
    if(fromDevtool === 1) {
        alert(alertMessage);
    }
}

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
        if(text_obj.match(/^[0-9]+$/)){
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

async function quiz1() {
    $('#section--first').addClass('quiz1');
    $('#section--first__title').text('M E L U O W E');
    if(countClickStartButton < 210) {
        $('#btn-start').text('Look Back...');
    }
    await delay(200);
    $('#quiz1__sub-hint1').addClass('show')
}

async function quiz2() {
    $('#section--second').addClass('quiz2');
    await delay(200);
    $('#quiz2__sub-hint1').addClass('show')
    await delay(200);
    $('#quiz2__sub-hint2').addClass('show')
    await delay(200);
    $('#quiz2__sub-hint3').addClass('show')
}

document.addEventListener('touchmove', disableScroll, { passive: false });
document.addEventListener('mousewheel', disableScroll, { passive: false });

$('#first-screen').on('click', function() {
   for(let i = 0; i < 5; i++) {
       window.history.pushState(null, null, null)
   }
   $(this).css('display', 'none');
   document.removeEventListener('touchmove', disableScroll, { passive: false });
   document.removeEventListener('mousewheel', disableScroll, { passive: false });
});


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
        quiz1();
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
    }else if(isClearQuiz2) {
        countClickHintButton++
        if(countClickHintButton === 1) {
            $('#btn-start--hint').text('Quiz2の答え');
            $('#btn-start--hint').css('display','inline')
        }else if(countClickHintButton === 2) {
            $('#btn-start--hint').text('Leave this page. Go Back.');
        }else if(countClickHintButton === 3) {
            $('#btn-start--hint').text('前のページに戻る');
        }else if(countClickHintButton === 4) {
            $('#btn-start--hint').text('ボタンを押す');
        }else if(countClickHintButton === 5) {
            $('#btn-start--hint').text('戻るボタン');
        }else if(countClickHintButton === 10) {
            $('#btn-start--hint').text('ブラウザの戻るボタンをクリックする');
        }else if(countClickHintButton === 20) {
            $('#btn-start--hint').text('ヒントボタンではなくブラウザのページを戻るボタンをクリックする');
        }else if(countClickHintButton === 30) {
            $('#btn-start--hint').text('「ヒントボタン」を押すことをやめて、もともとブラウザに備わっている「ページを戻るボタン」をクリックする。');
        }else if(countClickHintButton === 75) {
            $('#btn-start--hint').text('いい加減にブラウザバックしなよ');
        }else if(countClickHintButton === 100) {
            $('#btn-start--hint').text('もしかして戻れない？');
            $(this).text('No');
        }else if(countClickHintButton === 101) {
            $('#btn-start--hint').text('それとも戻りたくない？');
            $(this).text('Yes');
        }else if(countClickHintButton === 102) {
            $('#btn-start--hint').text('もしかして、ここに居てくれるの？');
            $(this).text('Yes')
        }else if(countClickHintButton === 103) {
            $('#btn-start--hint').text('もっと一緒に遊んでくれるの？');
            $(this).text('Yes')
        }else if(countClickHintButton === 104) {
            $('#btn-start--hint').text('...');
            $(this).text('...')
        }else if(countClickHintButton === 105) {
            $('#btn-start--hint').text('......');
        }else if(countClickHintButton === 106) {
            $('#btn-start--hint').text('ありがとう');
        }else if(countClickHintButton === 107) {
            $('#btn-start--hint').text('本当は遊びたかっただけなんだ...');
        }else if(countClickHintButton === 108) {
            $('#btn-start--hint').text('...');
        }else if(countClickHintButton === 109) {
            $('#btn-start--hint').text('でももうこれ以上遊ぶことはできない');
        }else if(countClickHintButton === 110) {
            $('#btn-start--hint').text('だって...');
        }else if(countClickHintButton === 111) {
            $('#btn-start--hint').text('君ももう時間が無いんじゃない？');
        }else if(countClickHintButton === 112) {
            $('#btn-start--hint').text('それに、これ以上出題できるクイズも作ってないし');
        }else if(countClickHintButton === 113) {
            $('#btn-start--hint').text('制作期間が1ヶ月しかなかったから...');
        }else if(countClickHintButton === 114) {
            $('#btn-start--hint').text('でも気持ちは嬉しい');
        }else if(countClickHintButton === 115) {
            $('#btn-start--hint').text('だから特別に脱出させてあげるよ');
        }else if(countClickHintButton === 116) {
            $('#btn-start--hint').text('準備するからちょっと待っててね');
        }else if(countClickHintButton === 117) {
            $('#btn-start--hint').text('いくよ？');
        }else if(countClickHintButton === 118) {
            $('#btn-start--hint').text('3');
        }else if(countClickHintButton === 119) {
            $('#btn-start--hint').text('2');
        }else if(countClickHintButton === 120) {
            $('#btn-start--hint').text('1');
        }else if(countClickHintButton === 121) {
            $('#btn-start--hint').text('さようなら');
        }else if(countClickHintButton === 122) {
            $(this).text('脱出する');
        }else if(countClickHintButton >= 123) {
            isClearGame = true;
            window.location.href = '/alfa-nagoya-F/real-escape-game-v5/final?q=39';
        }
    }else if(countClickStartButton >= 100 && !isClearQuiz1) {
        if(countClickStartButton === 100) {
            $('#btn-start').text('Enter');
            $('#section--end__input').css('display','flex');
        }
        let value = "";
        for(let i = 0; i <= $('#section--end__input input').length - 1; i++) {
            value += $('#section--end__input input').eq(i).val();
        }
        if(value == password) {
            if (confirm('パスワードを確認しました。 脱出しますか？')) {
                isClearGame = true;
                history.go(history.length * -1 + 1);
                location.replace('/alfa-nagoya-F/real-escape-game-v5/final?q=99');
            }
        }
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

$(document).on('click',　'.show .sub-hint--title', function() {
    if($(this).parent().hasClass('open')) {
        $(this).parent().removeClass('open');
        $(this).parent().addClass('close');
    }else{
        $(this).parent().removeClass('close');
        $(this).parent().addClass('open');
    }
    if($(this).parent().children('.sub-hint--content').hasClass('hidden')) {
        $(this).parent().children('.sub-hint--content').removeClass('hidden');
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
            $('#btn-start').text('...');
            $('#section--end__input').css('display','none');
            quiz2();
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

$('#section--second__input input').on('input', async function(){
    let value = "";
    check_chartype($(this),'ABC');
    for(let i = 0; i <= $('#section--second__input input').length - 1; i++) {
        value += $('#section--second__input input').eq(i).val();
    }
    if(value.length >= 1) {
        $('#section--second__input input').attr('placeholder','');
    }
    if(value.length === 6) {
        if(value == "GOBACK") {
            $('#section--second__input').html('<div>G</div><div>O</div><div>B</div><div>A</div><div>C</div><div>K</div>');
            $('#section--second').addClass('quiz1--clear');
            isClearQuiz2 = true;
            $('#section--third').addClass('quiz2');
            $('#btn-start').text('Hint...');
            await delay(2);
            $('#section--second__input div').css('background-color','#1d0836');
            await delay(1.5);
            $('#section--second__input div').css('background-color','#b39b30');
        }else{
            $('#section--second__input input').css('background-color','#741218');
            await delay(2);
            $('#section--second__input input').css('background-color','#1d0836');
            await delay(2);
            $('#section--second__input input').css('background-color','#741218');
            await delay(3);
            $('#section--second__input input').css('background-color','#1d0836');
        }
    }
});

$('#section--second__input input').keydown(function() {
    let value = "";
    for(let i = 0; i <= $('#section--second__input input').length - 1; i++) {
        value += $('#section--second__input input').eq(i).val();
    }
    if(value.length <= 1) {
        $('#section--second__input input').eq(0).attr('placeholder','A');
        $('#section--second__input input').eq(1).attr('placeholder','N');
        $('#section--second__input input').eq(2).attr('placeholder','S');
        $('#section--second__input input').eq(3).attr('placeholder','W');
        $('#section--second__input input').eq(4).attr('placeholder','E');
        $('#section--second__input input').eq(5).attr('placeholder','R');
    }
});

$('#section--end__input input').on('input', async function(){
    let value = "";
    check_chartype($(this),'123');
    for(let i = 0; i <= $('#section--end__input input').length - 1; i++) {
        value += $('#section--end__input input').eq(i).val();
    }
    if(value.length >= 1) {
        $('#section--end__input input').attr('placeholder','');
    }
});

$('#section--end__input input').keydown(function() {
    let value = "";
    for(let i = 0; i <= $('#section--end__input input').length - 1; i++) {
        value += $('#section--end__input input').eq(i).val();
    }
    if(value.length <= 1) {
        $('#section--end__input input').eq(0).attr('placeholder','P');
        $('#section--end__input input').eq(1).attr('placeholder','A');
        $('#section--end__input input').eq(2).attr('placeholder','S');
        $('#section--end__input input').eq(3).attr('placeholder','S');
        $('#section--end__input input').eq(4).attr('placeholder','W');
        $('#section--end__input input').eq(5).attr('placeholder','O');
        $('#section--end__input input').eq(6).attr('placeholder','R');
        $('#section--end__input input').eq(7).attr('placeholder','D');
    }
});

// window.onunload = function(){
//     window.location.href = './real-escape-game-v5/';
// }
