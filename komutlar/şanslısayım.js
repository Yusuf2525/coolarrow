const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, params) => {
  message.channel.send(':diamond_shape_with_a_dot_inside: **Senin Şanslı Sayın** :diamond_shape_with_a_dot_inside: ')
    number = 8,31,25,2,4,23,1,37,5,29,6,7,33,27,36,10,22,32,12,28,39,13,30,21,15,11,35,8,9,38,24,14,19,20,17,16,26,34
    var random = Math.floor(Math.random() * (number - 1 + 15)) + 0;
    switch(random) {
        case 1: message.channel.send(':small_blue_diamond: 3 :small_blue_diamond: '); message.channel.send(" "); break;
        case 2: message.channel.send(':small_blue_diamond: 4 :small_blue_diamond: '); message.channel.send(' '); break;
        case 3: message.channel.send(':small_blue_diamond: 6 :small_blue_diamond: '); message.channel.send(' '); break;
        case 4: message.channel.send(':small_blue_diamond: 12 :small_blue_diamond: '); message.channel.send(' '); break;
        case 5: message.channel.send(':small_blue_diamond: 42 :small_blue_diamond: '); message.channel.send(' '); break;
        case 6: message.channel.send(':small_blue_diamond: 83 :small_blue_diamond: '); message.channel.send(' '); break;
        case 7: message.channel.send(':small_blue_diamond: 42 :small_blue_diamond: '); message.channel.send(' '); break;
        case 8: message.channel.send(':small_blue_diamond: 31 :small_blue_diamond: '); message.channel.send('\:small_blue_diamond: :grin: :small_blue_diamond:'); break;
        case 9: message.channel.send(':small_blue_diamond: 74 :small_blue_diamond: '); message.channel.send(' '); break;
        case 10: message.channel.send(':small_blue_diamond: 1 :small_blue_diamond: '); message.channel.send(' '); break;
        case 11: message.channel.send(':small_blue_diamond: 2 :small_blue_diamond: '); message.channel.send(' '); break;
        case 12: message.channel.send(':small_blue_diamond: 5 :small_blue_diamond: '); message.channel.send(' '); break;
        case 13: message.channel.send(':small_blue_diamond: 99 :small_blue_diamond: '); message.channel.send(' '); break;
        case 14: message.channel.send(':small_blue_diamond: 19 :small_blue_diamond: '); message.channel.send(' '); break;
        case 15: message.channel.send(':small_blue_diamond: 10 :small_blue_diamond: '); message.channel.send(' '); break;
        case 16: message.channel.send(':small_blue_diamond: 38 :small_blue_diamond: '); message.channel.send(' '); break;
        case 17: message.channel.send(':small_blue_diamond: 22 :small_blue_diamond: '); message.channel.send(' '); break;
        case 18: message.channel.send(':small_blue_diamond: 52 :small_blue_diamond: '); message.channel.send(' '); break;
        case 19: message.channel.send(':small_blue_diamond: 65 :small_blue_diamond: '); message.channel.send(' '); break;
        case 20: message.channel.send(':small_blue_diamond: 76 :small_blue_diamond: '); message.channel.send(' '); break;
        case 21: message.channel.send(':small_blue_diamond: 93 :small_blue_diamond: '); message.channel.send('\:small_blue_diamond: :grin: :small_blue_diamond: '); break;
        case 22: message.channel.send(':small_blue_diamond:  8 :small_blue_diamond: '); message.channel.send(' '); break;
        case 23: message.channel.send(':small_blue_diamond: 99 :small_blue_diamond: '); message.channel.send(' '); break;
        case 24: message.channel.send(':small_blue_diamond: 56 :small_blue_diamond: '); message.channel.send(' '); break;
        case 25: message.channel.send(':small_blue_diamond: 88 :small_blue_diamond: '); message.channel.send(' '); break;
        case 26: message.channel.send(':small_blue_diamond: 25 :small_blue_diamond: '); message.channel.send(' '); break;
        case 27: message.channel.send(':small_blue_diamond:  9 :small_blue_diamond: '); message.channel.send(' '); break;
        case 28: message.channel.send(':small_blue_diamond: 66 :small_blue_diamond: '); message.channel.send(' '); break;
        case 29: message.channel.send(':small_blue_diamond: 78 :small_blue_diamond: '); message.channel.send(' '); break;
        case 30: message.channel.send(':small_blue_diamond:  0 :small_blue_diamond: '); message.channel.send(' '); break;
        case 31: message.channel.send(':small_blue_diamond: 62 :small_blue_diamond: '); message.channel.send('\:small_blue_diamond: :grin: :small_blue_diamond: '); break;
        case 32: message.channel.send(':small_blue_diamond: 44 :small_blue_diamond: '); message.channel.send(' '); break;
        case 33: message.channel.send(':small_blue_diamond: 61 :small_blue_diamond: '); message.channel.send(' '); break;
        case 34: message.channel.send(':small_blue_diamond: 54 :small_blue_diamond: '); message.channel.send(' '); break;
        case 35: message.channel.send(':small_blue_diamond: 87 :small_blue_diamond: '); message.channel.send(' '); break;
        case 36: message.channel.send(':small_blue_diamond: 96 :small_blue_diamond: '); message.channel.send(' '); break;
        case 37: message.channel.send(':small_blue_diamond: 22 :small_blue_diamond: '); message.channel.send(' '); break;
        case 38: message.channel.send(':small_blue_diamond: 21 :small_blue_diamond: '); message.channel.send(' '); break;

};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şanslısayım'],
  permLevel: 0
};

exports.help = {
  name: 'şanslısayım',
  description: 'Şanslı Sayınızı Gösterir',
  usage: 'şanslısayım'
};
