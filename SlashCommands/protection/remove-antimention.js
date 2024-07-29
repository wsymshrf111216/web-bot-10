const { SlashCommandBuilder, CommandInteraction, Client,PermissionFlagsBits } = require("discord.js");
const db = require("pro.db");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("remove-antimention")
    .setDescription("to remove a antimention member")
    .addUserOption(option => 
        option.setName("user")
              .setDescription("The Member")
              .setRequired(true))
              .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
  async execute(interaction) {
try {
  
    var user = interaction.options.getMember('user')

     let nqr = db.get(`antimention_${interaction.guild.id}`)
    db.delete(`antimention_${interaction.guild.id}`, user.id)  
      interaction.reply(`Done remove a antimention member`)
    
   }catch (err) {
  return interaction.reply({content: `The user is not available`, ephemeral: true })
   }}
  };