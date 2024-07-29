const { SlashCommandBuilder, Client, CommandInteraction, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder, ComponentType } = require("discord.js");
const fs = require("node:fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("help Menu"),


  
  async execute(interaction, client) {
    let publicFiles = fs.readdirSync("./SlashCommands/public").filter(file => file.endsWith(".js") && !file.includes("help"));
    let publicCmds = "";
   let moderationFiles = fs.readdirSync("./SlashCommands/moderation").filter(file => file.endsWith(".js") && !file.includes("help"));
    let moderationCmds = "";
    let protectionFiles = fs.readdirSync("./SlashCommands/protection").filter(file => file.endsWith(".js") && !file.includes("help"));
    let protectionCmds = "";
    let gamesFiles = fs.readdirSync("./SlashCommands/games").filter(file => file.endsWith(".js") && !file.includes("help"));
    let gamesCmds = "";
     let avatarFiles = fs.readdirSync("./SlashCommands/avatar").filter(file => file.endsWith(".js") && !file.includes("help"));
    let avatarCmds = "";
    let settingsFiles = 
fs.readdirSync("./SlashCommands/settings").filter(file => file.endsWith(".js") && !file.includes("help"));
    let settingsCmds = "";

    
    for (const file of publicFiles) {
      let command = require(`../public/${file}`);
      publicCmds += `**${command.data.name}** - \`${command.data.description}\`\n`
    }
    for (const file of moderationFiles) {
      let command = require(`../moderation/${file}`);
      moderationCmds += `**${command.data.name}** - \`${command.data.description}\`\n`
    }
    for (const file of protectionFiles) {
      let command = require(`../protection/${file}`);
      protectionCmds += `**${command.data.name}** - \`${command.data.description}\`\n`
    }
    for (const file of gamesFiles) {
      let command = require(`../games/${file}`);
      gamesCmds += `**${command.data.name}** - \`${command.data.description}\`\n`
    }
    for (const file of avatarFiles) {
      let command = require(`../avatar/${file}`);
      avatarCmds += `**${command.data.name}** - \`${command.data.description}\`\n`
    }
    for (const file of settingsFiles) {
      let command = require(`../settings/${file}`);
      settingsCmds += `**${command.data.name}** - \`${command.data.description}\`\n`
    }

    const row = new ActionRowBuilder()
      .addComponents(
        new StringSelectMenuBuilder()
          .setCustomId("help")
          .setPlaceholder("Select category")
          .addOptions(
            {
              label: "Home",
              description: 'To view the information',
              emoji: '1136009476244262922',
              value: "home_page",
            },
            {
              label: "Public Commands",
              description: 'To view the public commands',
              emoji: '1136009360993169408',
              value: "public_commands",
            },
            {
              label: "Admin Commands",
              description: 'To view the admin commands',
              emoji: '1136009500785123398',
              value: "moderation_commands",
            },
            {
              label: "Protection Commands",
              description: 'To view the protection commands',
              emoji: '1136009391762587800',
              value: "protection_commands",
            },
            {
              label: "Games Commands",
              description: 'To view the games commands',
              emoji: '1136009419348525097',
              value: "games_commands",
            },
            {
              label: "Avatar Commands",
              description: 'To view the avatar commands',
              emoji: '1136009529776144535',
              value: "avatar_commands",
            },
            {
              label: "Logs Commands",
              description: 'To view the logs commands',
              emoji: '1136009447446167613',
              value: "settings_commands",
            }
          )
      )

        var _0xeba1=["\x0D\x0A\x20\x20\x20\x20\x20\x20\x2A\x2A\x4D\x79\x20\x4E\x61\x6D\x65\x20\x3A\x20\x57\x65\x62\x42\x6F\x74\x20\u2728\x2A\x2A\x0D\x0A\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\x2A\x2A\x4D\x79\x20\x50\x72\x65\x66\x69\x78\x20\x3A\x20\x2F\x2A\x2A\x0D\x0A\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\x2A\x2A\x44\x65\x76\x65\x6C\x6F\x70\x65\x72\x20\x3A\x20\x49\x5F\x4E\x37\x52\x2A\x2A\x0D\x0A\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x2A\x2A\x42\x65\x73\x74\x20\x57\x65\x62\x42\x6F\x74\x20\u2728\x2A\x2A\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x5B\x5F\x5F\x2A\x2A\x49\x5F\x4E\x37\x52\x2A\x2A\x5F\x5F\x5D\x28\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x73\x2F\x36\x34\x37\x30\x37\x39\x37\x39\x33\x33\x30\x30\x33\x34\x30\x37\x34\x36\x29\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x5B\x5F\x5F\x2A\x2A\x49\x6E\x76\x69\x74\x65\x2A\x2A\x5F\x5F\x5D\x28\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x6F\x61\x75\x74\x68\x32\x2F\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x3F\x63\x6C\x69\x65\x6E\x74\x5F\x69\x64\x3D","\x69\x64","\x75\x73\x65\x72","\x26\x70\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E\x73\x3D\x38\x26\x73\x63\x6F\x70\x65\x3D\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x73\x2E\x63\x6F\x6D\x6D\x61\x6E\x64\x73\x25\x32\x30\x62\x6F\x74\x29","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x73\x65\x74\x49\x6D\x61\x67\x65","\x23\x31\x35\x32\x38\x36\x65","\x73\x65\x74\x43\x6F\x6C\x6F\x72","\x48\x61\x79\x20\x3A\x20\x20","\x75\x73\x65\x72\x6E\x61\x6D\x65","","\x64\x69\x73\x70\x6C\x61\x79\x41\x76\x61\x74\x61\x72\x55\x52\x4C","\x73\x65\x74\x41\x75\x74\x68\x6F\x72","\x73\x65\x74\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x72\x65\x70\x6C\x79"];
let home= new EmbedBuilder()[_0xeba1[13]](iconURL)[_0xeba1[12]]({name:`${_0xeba1[8]}${interaction[_0xeba1[2]][_0xeba1[9]]}${_0xeba1[10]}`,iconURL:`${_0xeba1[10]}${interaction[_0xeba1[2]][_0xeba1[11]]({dynamic:true})}${_0xeba1[10]}`})[_0xeba1[7]](_0xeba1[6])[_0xeba1[5]](lineURL)[_0xeba1[4]](`${_0xeba1[0]}${client[_0xeba1[2]][_0xeba1[1]]}${_0xeba1[3]}`);
 await interaction[_0xeba1[14]]({embeds:[home],components:[row],ephemeral:true})  
    const filter = i => i.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 120000, componentType: ComponentType.SelectMenu })

    collector.on("collect", async (i) => {
      let publicEmbed = new EmbedBuilder()
        .setColor("#15286e")
        
        .setDescription(publicCmds)
      let moderationEmbed = new EmbedBuilder()
        .setColor("#15286e")
        .setDescription(moderationCmds)
      let protectionEmbed = new EmbedBuilder()
        .setColor("#15286e")
        .setDescription(protectionCmds)
      let gamesEmbed = new EmbedBuilder()
        .setColor("#15286e")
        .setDescription(gamesCmds)
      let avatarEmbed = new EmbedBuilder()
        .setColor("#15286e")
        .setDescription(avatarCmds)
      let settingsEmbed = new EmbedBuilder()
        .setColor("#15286e")
        .setDescription(settingsCmds)
      

      let value = i.values[0];

      if (value == "home_page") {
        await i.update({ embeds: [home], components: [row] })
      } else if (value == "public_commands") {
        await i.update({ embeds: [publicEmbed], components: [row] })
      } else if (value == "moderation_commands") {
        await i.update({ embeds: [moderationEmbed], components: [row] })
      } else if (value == "protection_commands") {
        await i.update({ embeds: [protectionEmbed], components: [row] })
        } else if (value == "games_commands") {
        await i.update({ embeds: [gamesEmbed], components: [row] })
        } else if (value == "avatar_commands") {
        await i.update({ embeds: [avatarEmbed], components: [row] })
      } else if (value == "settings_commands") {
        await i.update({ embeds: [settingsEmbed], components: [row] })
      }
    })
    
  }
}