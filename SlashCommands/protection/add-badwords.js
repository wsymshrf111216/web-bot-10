const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const db = require("pro.db");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('add-badwords')
    .setDescription('to add a badwords')
    .addStringOption(Option =>
      Option
        .setName('badword')
        .setDescription('the text you want to send with bot')
        .setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
  async execute(interaction) {

    var user = interaction.options.getString('badword')

    db.push(`badwords_${interaction.guild.id}`, user)

    interaction.reply(`Done Added New Badword \`${user}\``)
 }
}