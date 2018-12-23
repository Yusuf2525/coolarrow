const Discord = require('discord.js');

exports.run = (client, message, args) => {
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
	let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın! :unlem: ');

    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + ` Duyuru Yaptı`)
    .setColor("#18BF7E")
    .setDescription(`${mesaj}`)
    .setThumbnail('http://www.zara.bel.tr/images/sayfalar/duyurular.png')
    return message.channel.sendEmbed(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuryap', 'duyur'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Güzel Bir Duyuru Görünümü Sağlar.',
  usage: 'duyuru [Duyuruda Yazıcak Şey]'
};
