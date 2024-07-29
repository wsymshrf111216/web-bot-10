const { SlashCommandBuilder, CommandInteraction, Client,PermissionFlagsBits } = require("discord.js");
const db = require("pro.db");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("add-antimention")
    .setDescription("To Add A Antimention Member")
    .addUserOption(option => 
        option.setName("member")
              .setDescription("The Member")
              .setRequired(true))
              .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
  async execute(interaction, client) {
    let user = interaction.options.getUser("member");

    let antiMentions = await db.fetch(`antimention_${interaction.guild.id}`);

    if (!antiMentions?.includes(user.id)) {
      db.push(`antimention_${interaction.guild.id}`, user.id);
      await interaction.reply(`Added ${user.tag} To Antimention System Successfully`)
    } else {
      await interaction.reply(`${user.tag} Has Already In Antimention System`)
    }
  }
}