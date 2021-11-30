"use strict"

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


function taxPrice( price, tax ){
    return price + price *  tax;
}

console.log(`コーヒーメーカーの税込価格は${taxPrice(8000,0.1)}です`);