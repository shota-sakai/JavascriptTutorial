"use strict"
window.addEventListener('load', () => {
    // 3-7  コンソールでモンスターを倒せ
    // alert('戦闘スタート');
    
    // let enemyLife = 100;
    // while( enemyLife > 0  ){
    //     const atk = Math.floor(Math.random() * 30);
    //     enemyLife -=  atk;
    //     console.log(`モンスターに${atk}のダメージ ： 残りHP${enemyLife}`);
    // }
    
    // console.log('モンスターを倒した！');

    // 3-8 税込価格を計算する
    // function taxPrice( price, tax ){
    //     return price + price * tax;
    // }
    
    // console.log(`コーヒーメーカーの税込価格は${taxPrice(8000,0.1)}です`);
    // let str = `コーヒーメーカーの税込価格は${taxPrice(8000,0.1)}です`
    // document.getElementById('p-item').textContent = str;
    
    // 3-9 FizzBuzz
    // function FizzBuzz(num){
    //     if( num%3===0 && num%5===0 ){
    //         return 'FizzBuzz';
    //     }else if( num%3===0 ){
    //         return 'Fizz!';
    //     }else if( num%5===0 ){
    //         return 'Buzz!';
    //     }else{
    //         return num;
    //     }
    // }
    
    // for(let i=1; i<=30; i++){
    //     let result = FizzBuzz(i);
    //     console.log(result);
    // }
    
    
    // let i = 1;
    // while( i <= 30 ){
    //     console.log(FizzBuzz(i));
    //     i++;
    // }
    
    
    // 3-10 項目をリスト表示する
    // let array = ['デザインカンプ作成', 'データ整理', '勉強会申し込み', '牛乳を買う'];
    // array.push('歯医者に行く');
    // for(let e of array){
    //     const li = `<li>${e}</li>`
    //     document.getElementById("list").insertAdjacentHTML('beforeend', li);
    //     // console.log(li);
    // }
    
    
    // 3-11 アイテムの価格と在庫を表示する
    // let jsbook = {title: 'Javascript入門', price: 2500, stock: 3};
    // console.log(jsbook);
    // console.log(jsbook.title);
    // console.log(jsbook['price']);
    // jsbook.stock = 100;
    // console.log(jsbook.stock);
    
    // for(let p in jsbook){
    //     console.log(`${p}=${jsbook[p]}`);
    //     document.getElementById(p).textContent = jsbook[p];
    // }
    
    
    // 4-1 フォームの入力内容を取得する
    // document.getElementById("form").onsubmit = function(){
    //     event.preventDefault();
    //     const search = document.getElementById('form').word.value;
    //     document.getElementById('output').textContent = `「${search}」の検索中...`;
    // }
    
    // 4-2 わかりやすく日時を表示する
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    // const hour = now.getHours();
    const hour = 8;
    const min = now.getMinutes();
    
    let showHour = hour;
   
    if (showHour > 12 ){
        showHour = 'PM';
    }else{
        showHour = 'AM';
    }
    const output = `${year}/${month+1}/${date} ${showHour}${hour%12}:${min}`;
    document.getElementById('time').textContent = output;
})