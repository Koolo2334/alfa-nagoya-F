$(document).ready(function() {
    if(location.search === ?q=96) {         //正規ルート
        $('#section-first--title').text('柔軟な思考によりサイトから脱出することができた');
        $('#section-first--content').text('おめでとう！あなたは全てのナゾを解き、脱出することに成功した！');
        $('#section-second--text2').text('強い意志を持てばナゾを解かずに脱出できるかも...?');
    }else if(location.search === ?q=99) {   //戻る連打ルート
        $('#section-first--title').text('固い決意と努力によってサイトから脱出することができた');
        $('#section-first--content').text('おめでとう！あなたはナゾを全く解かずに、戻りたい一心でボタンを押し続け、脱出することに成功した！');
        $('#section-second--text2').text('戻るボタンを押さずに脱出することもできるかも...?');
    }else if(location.search === ?q=39) {   //ヒント連打ルート
        $('#section-first--title').text('優しい心を持って平和にサイトから脱出した');
        $('#section-first--content').text('おめでとう！あなたは無理に脱出しようとせず、サイトの本当の謎をときあかして、脱出することに成功した！');
        $('#section-second--text2').text('もちろん戻るボタンを押しても脱出できる');
    }
}
