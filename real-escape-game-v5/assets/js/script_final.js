$(document).ready(function() {
    console.log('1');
    if(location.search === '?q=96') {         //正規ルート
        console.log('2');
        $('#section-first--title').text('柔軟な思考によりサイトから脱出することができた');
        $('#section-first--content').text('おめでとう！あなたは全てのナゾを解き、脱出することに成功した！');
        $('#section-second--text2').text('強い意志を持てばナゾを解かずに脱出できるかも...?');
    }else if(location.search === '?q=99') {   //戻る連打ルート
        console.log('3');
        $('#section-first--title').text('固い決意と努力によってサイトから脱出することができた');
        $('#section-first--content').text('おめでとう！あなたはナゾを全く解かずに、戻りたい一心でボタンを押し続け、脱出することに成功した！');
        $('#section-second--text2').text('戻るボタンを押さずに脱出することもできるかも...?');
    }else if(location.search === '?q=39') {   //ヒント連打ルート
        console.log('4');
        $('#section-first--title').text('優しい心を持って平和にサイトから脱出した');
        $('#section-first--content').text('おめでとう！あなたは無理に脱出しようとせず、サイトの本当の謎をときあかして、脱出することに成功した！');
        $('#section-second--text2').text('もちろん戻るボタンを押しても脱出できる');
    }else{                                    //その他(おそらくURL直接入力ルート)
        console.log('5');
        $('#section-first--title').text('ずる賢い知識を使って無理矢理脱出した');
        $('#section-first--content').text('おめでとう！あなたはURLを直接打ち、脱出することに成功した！');
        $('#section-second--text2').text('せめてもう少し良い脱出方法はなかったの？');
    }
});
