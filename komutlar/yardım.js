const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor('RANDOM')
  .addField("** :tada: Eğlence Komutları :tada:**", `ca!eğlence = Eğlence Komutlarını Gösterir `)
  .addField("** :busts_in_silhouette: Kullanıcı Komutları :busts_in_silhouette:**", `ca!kullanıcı = Kullanıcı Komutlarını Gösterir  `)
  .addField("**:video_game:  Oyun Komutları :video_game: **", `ca!oyun = Oyun Komutlarını Gösterir.`)
  .addField("**:no_entry: Sunucu Yetkilisi Komutları :no_entry:**", `ca!yetkili = Sunucu Yetkilisi Komutlarını Gösterir.`)
  .addField("**:gear:️ Botun Ana Komutları :gear:️**", "ca!botkomutları = Botun Ana Komutlarını Gönderir.")
  .addField("**» Botun Yardım Sunucusu (Support Server)**", "[Yardım Sunucusu](https://discord.gg/fd2JJet)")
  .addField("**» Botun Davet Linki **", "[Davet Linki](https://discordapp.com/oauth2/authorize?client_id=523510192919412736&scope=bot&permissions=805829694)")
  .setFooter('CoolArrow Güncel Sürüm [ BETA v0.1.5 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
