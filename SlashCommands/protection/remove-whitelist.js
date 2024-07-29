const { SlashCommandBuilder, CommandInteraction, Client,PermissionFlagsBits } = require("discord.js");
const db = require("pro.db");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("remove-whitelist")
    .setDescription("to remove a whitelist member")
    .addUserOption(option => 
        option.setName("user")
              .setDescription("The Member")
              .setRequired(true))
              .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
  async execute(interaction) {
try {
    var user = interaction.options.getMember('user')

  let nqr = db.get(`whitelist_${interaction.guild.id}`)
  await db.set(`whitelist_${interaction.guild.id}`, nqr.filter(nqr => nqr !== user.id));
      interaction.reply(`Done remove a whitelist member`)
    
   }catch (err) {
  return interaction.reply({content: `The user is not available`, ephemeral: true })
  }}
};