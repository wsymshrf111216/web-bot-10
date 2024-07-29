const { EmbedBuilder } = require('discord.js')
const db = require('pro.db')
const { ClientPrefix } = require('../Config.js')
const Client = require('..')

Client.on('messageCreate', async Message => {
if (Message.author.bot) return;
  let user = Message.mentions.users.first();
  if (user) {
    let embed = new EmbedBuilder()
          .setAuthor({ name: Message.author.tag, iconURL: Message.author.displayAvatarURL() })
          .setDescription(`**The Bot Timedout You For \`15m\`\nReason : Mention Spam**`)
          .setColor("#FFBF00")
          .setThumbnail(Message.guild.iconURL() || Client.user.displayAvatarURL())
          .setFooter({ text: Client.user.username, iconURL: Client.user.displayAvatarURL() })
    let antim = await db.fetch(`antimention_${Message.guild.id}`);
    if (antim?.includes(user.id)) {
      if(db.get(`whitelist_${Message.guild.id}`).includes(Message.author.id)) return;
      let mentionsCounts = await db.fetch(`mention_${Message.author.id}`);
      if (mentionsCounts && mentionsCounts === 4) {
        await Message.delete();
        await Message.member.timeout(60_00, "Mentions Spam").catch(err => {})
        Message.author.send({ embeds: [embed] }).catch(err => {})
      } else if (!mentionsCounts || mentionsCounts === 0 || mentionsCounts < 4) {
        await Message.delete();
        db.add(`mention_${Message.author.id}`, 1);
      }
      setTimeout(() => {
        db.set(`mention_${Message.author.id}`, 0)
      }, 60_00)
    }
  }

	// Çɱɗş

	if(Message.content.indexOf(ClientPrefix) !== 0) return;

	const Args = Message.content.slice(ClientPrefix.length).trim().split(/ +/g)

	const Command = Args.shift().toLowerCase()

	const Cmd = Client.Çɱɗ.get(Command)

	if(!Cmd) return console.log('The Command is Invalid')

	Cmd.run(Client, Message, Args)

})