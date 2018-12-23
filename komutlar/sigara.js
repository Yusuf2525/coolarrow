const Discord = require('discord.js');

exports.run = (client, message) => {
  msg.send('Sigara İçiyorum!')
  msg.edit(' :smoking: :cloud: :cloud: :cloud: ')
  msg.edit(' :smoking: :cloud: :cloud: ')
  msg.edit(':smoking: :cloud: ')
  msg.edit(':smoking:  ')
  msg.edit(' Sigara Bitti. Sigara Sağlığa Zararlı Daha İçme Sakın ! ')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sigara','sigaraic'],
  permLevel: 2
};

exports.help = {
  name: 'sigaraic',
  description: 'Sigara içersiniz!',
  usage: 'sigaraic'
};
