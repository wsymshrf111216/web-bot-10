const { EmbedBuilder , SlashCommandBuilder, Client, ChatInputCommandInteraction } = require('discord.js');
module.exports = {
 
  data: new SlashCommandBuilder()
    .setName("thx")
    .setDescription("feedback for serb")
    .addUserOption((option) => option .setName('user') 
    .setDescription('Select A User') .setRequired(true))
    .addStringOption((option) => option 
    .setName('message')
    .setDescription('Select A feedback')
    .setRequired(true)),
    
  async execute(interaction, client) {
    try {
      const user = interaction.options.getUser("user");
      const message = interaction.options.getString('message');
        interaction.reply({ content: `**- Thx For you'r Thank For**`, ephemeral: false })
       
      user.send({ content: message })
} catch (err) {
      console.log(err)
  }
 }
}