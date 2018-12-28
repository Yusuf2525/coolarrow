const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Yenilikler**", `ca!yardım Komutları Yenilendi Bakmak için *ca!yardım* Yazınız. \nca!nah Komutu Eklendi Bakmak İçin *ca!yardım* Yazınız. \nca!tkm Komutu Eklendi Bakmak İçin *ca!yardım* Yazınız. \nca!havadurumu Komutu Eklendi Bakmak İçin *ca!yardım* Yazınız. \nca!stresçarkı Komutu Eklendi Bakmak İçin *ca!yardım* Yazınız. \nca!öneri Komutu Eklendi Bakmak İçin *ca!yardım* Yazınız. \nca!emojiyazı Komutu Eklendi Bakmak İçin *ca!yardım* Yazınız. \nca!report , ca!ban , ca!sustur Komutları Yenilendi Bakmak İçin *ca!yardım* Yazınız. `)


  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeni', 'new', 'news', 'yenilikler'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bota eklenen Yeni Komutları Ve Düzeltilen Hatalar Hakkında Bilgi Verir.',
  usage: 'yenilikler'
};
