let countClickStartButton = 0, d = document;

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*100);
    });
}

function disableScroll(event) {
    event.preventDefault();
  }


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
