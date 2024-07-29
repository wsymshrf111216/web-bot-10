const { EmbedBuilder , SlashCommandBuilder, Client, ChatInputCommandInteraction} = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
      .setName('devloper')
      .setDescription('Show The Bot devloper!'),
      
    async execute(interaction, client) {
       
        const embed = new EmbedBuilder()
            .setColor('#020000')
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('devlopers Bot')
            .setDescription(`**> WebBot Team 
> 𝐈_𝐍𝟕𝐑 The owner of the bot

> m7md Deputy bot owner 

> Manal Al-Samawla in the development of general orders 

> Nasser, who is responsible for developing the administration's orders. **`)
            .setTimestamp()
            .setFooter({ text: 'Developed By 𝐈_𝐍𝟕𝐑', iconURL: 'https://cdn.discordapp.com/avatars/647079793300340746/a05a3834f6c1d27bdd8be2b558adf015.webp?size=4096' });

        
        await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};
