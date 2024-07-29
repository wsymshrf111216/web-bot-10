const { SlashCommandBuilder, CommandInteraction, Client,PermissionFlagsBits } = require("discord.js");
const db = require("pro.db");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("add-whitelist")
    .setDescription("to add a whitelist member")
    .addUserOption(option => 
        option.setName("user")
              .setDescription("The Member")
              .setRequired(true))
              .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
  async execute(interaction) {
try {
    let user = interaction.options.getMember('user')
    db.push(`whitelist_${interaction.guild.id}`, user.id)
      interaction.reply(`Done add a whitelist member`)
   }catch (err) {
  return interaction.reply({content: `The user is not available`, ephemeral: true })
   }}
  };