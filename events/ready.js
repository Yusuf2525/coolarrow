const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        "Bot Saldırıya Uğramıştır Sunuculara Gelen Kötü Olaylar Yüzünden Özür Dileriz ",
        "Destek sunucumuz saldırıya uğradı sunucumuza gelmek için ca!yardımsunucusu yazabilirsiniz",
        "💪 7/24 Aktif!",  
        "💡 ca!davet | Botumuzu ekleyin",
        "👨 Size Hizmet Vermekten Mutluluk duyuyoruz",
        "🔥 Yeni Gelen Özellikler İçin ca!Yenilikler 🔥",
        "ca!yardım 🔥 + ca!davet 🔥 + ca!öneri"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/yusuftr_25");
        }, 2 * 2500);
}
