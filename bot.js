const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("ready", () => {
  client.user.setGame(prefix + 'yardım | Yardım Komutları Güncellendi ! |' )
  console.log("Bağlandım!")
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('Aleyküm Selam,  Hoş Geldin');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.channel.sendMessage('Aleyküm Selam,  Hoş Geldin');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
    msg.channel.sendMessage('Aleyküm Selam,  Hoş Geldin');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SELAMIN ALEYKÜM') {
    msg.channel.sendMessage('Aleyküm Selam,  Hoş Geldin');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'sahip') {
    msg.channel.sendMessage('sahibim Yusuf Babadır :D');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'samet kimdir') {
    msg.channel.sendMessage('samet adamın dipçiğidir ewqewqe');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yardımsunucusu') {
    msg.channel.sendMessage('Yardım sunucum = https://discord.gg/fd2JJet ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'talha kimdir') {
    msg.channel.sendMessage('talha mahir abime göre şerefsiz bir bıllik bana göre ise sıradan bazen şerefsizleşen ve beni üzen kişi :D ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yusuf kimdir') {
    msg.channel.sendMessage('Yusuf benim yapımcım yani üstadımdır.Benim için çok uğraşıyor ama hep hata verip onu delirtiyorum :grin:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'mahir kimdir') {
    msg.channel.sendMessage('Mahir benim abim olur.İyi birisidir Adamın Dipçiğidir :smile:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yağmur kimdir') {
    msg.channel.sendMessage('Yağmur üstadımın Ölesiye sevdiği kızdır.Kendisi çok iyi biridir. Benim yengem olur :grin: .Üstadımın bana dediğine göre çok güzelmiş. ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yapımcı') {
    msg.channel.sendMessage('Yapımcım ƬƑ™Yusuf [🌹]#0025 dur Beni Çağırmak İsterseniz Ona Danışın :)');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yağmur güzelmi') {
    msg.channel.sendMessage('Evet çok güzel kızdır kendisi Yengem çok iyi çok zeki ve Çok güzeldir.Üstadımı güzelliğiyle etkiledi :smile: ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yunus kimdir') {
    msg.channel.sendMessage('Yunus un ben ta amına koyim çok piçdir ewqeq ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'arda kimdir') {
    msg.channel.sendMessage('Arda Şerefsizin önde gideni bir piçdir. Çok festtır.Ha bide Çok ama Çok romantikdir bi sevgilisinden ayrılsın varya ooooooooooo 3 yıl ağlar ewqewqeq :grin: :smile: ');
}
});

client.login(process.env.BOT_TOKEN);
