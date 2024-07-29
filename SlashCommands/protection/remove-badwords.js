const { SlashCommandBuilder, CommandInteraction, Client, PermissionFlagsBits } = require("discord.js");
const db = require("pro.db");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("remove-badword")
    .setDescription("to remove a badwords member")
    .addStringOption(option =>
      option.setName("badword")
        .setDescription("The Member")
        .setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
  async execute(interaction) {
    try {
      var badword = interaction.options.getString('badword')

      let nqr = db.get(`badwords_${interaction.guild.id}`)
      await db.set(`badwords_${interaction.guild.id}`, nqr.filter(nqr => nqr !== badword));

      interaction.reply(`Done remove a badword \`${badword}\``)

    } catch (err) {
      return interaction.reply({ content: `The badword \`${badword}\` is not available`, ephemeral: true })
    }
  }
};