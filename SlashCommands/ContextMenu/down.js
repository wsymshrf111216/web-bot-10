const { SlashCommandBuilder } = require("@discordjs/builders");
const discord = require("discord.js");
const {
  Client,
  CommandInteraction,
  MessageEmbed,
  MessageAttachment,
  MessageActionRow,
  MessageButton,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("down")
    .setDescription("lock down the channel"),
  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {
    if (!interaction.member.permissions.has(`MANAGE_CHANNELS`)) return;
    let embed = new MessageEmbed()
      .setDescription(
        `**ENG: Its time for taking a some rest please do not mention any one at this time, have a great night
        عربي: لطفا عدم ازعاج الادارة في الخاص او هنا فهذا وقت للراحة اتمنى لك نوما هنيئا **`
      )
      .setTimestamp()
      .setColor("YELLOW");
    let attachemnt = new MessageAttachment()
      .setName("GoodNight")
      .setFile(
        "https://cdn.discordapp.com/attachments/1125453863152001156/1141145085556301968/2e8c7e50cc136fad.mp4"
      );
    let button = new MessageActionRow().setComponents(
      new MessageButton()
        .setCustomId("gm")
        .setEmoji("🔓")
        .setLabel("GoodMorning")
        .setStyle("SUCCESS")
    );
    interaction.reply({
      embeds: [embed],
      components: [button],
      files: [attachemnt],
    });
    const permissions = [
      {
        id: interaction.guild.roles.cache.get("1082001529072009348"),
        allow: ["SEND_MESSAGES"],
      },
      {
        id: interaction.guild.roles.everyone,
        deny: ["SEND_MESSAGES"],
      },
    ];
    interaction.channel.permissionOverwrites.set(permissions);
    client.on("interactionCreate", async (interaction) => {
      if (interaction.isButton()) {
        if (interaction.customId === "gm") {
          if (!interaction.member.permissions.has(`MANAGE_CHANNELS`)) return;
          const embed = new MessageEmbed()
            .setDescription(
              `ENG: Good Morning Geniuses Feel free to send your issue, code suggestion here and  please be patient\n
              عربي: صباح الخير أيها العباقرة لا تتردد في إرسال مشكلتك او اقتراح كود هنا ويرجى التحلي بالصبر`
            )
            .setColor("GREEN")
            .setTimestamp();
          const permissions = [
            {
              id: interaction.guild.roles.everyone,
              allow: ["SEND_MESSAGES"],
            },
          ];
          const attachemnt = new MessageAttachment()
            .setFile("open url")
            .setName("goodMorning");
          await interaction.channel.permissionOverwrites.set(permissions);
          interaction.message.edit({
            embeds: [embed],
            components: [],
            files: [attachemnt],
          });
        }
      }
    });
  },
};