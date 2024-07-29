const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('banners')
        .setDescription('Banners Random'),

    async execute(interaction, client) {

      const cut = [
        'https://cdn.discordapp.com/attachments/905408208099770439/967546270891798598/a8173a38dbab3e438a87aeb105c0a861.jpg',
        'https://cdn.discordapp.com/attachments/905408208099770439/968268274137694248/135ab19f5f561776f5586280a86646ea.jpg',
        'https://cdn.discordapp.com/attachments/905408208099770439/967935361768620052/3095cd276cd4dbd2595c7f123780da61.jpg',
        'https://cdn.discordapp.com/attachments/905408208099770439/967547376959107132/24e7c4ecb0f328f894ff8b8a737d9852.jpg',
        'https://cdn.discordapp.com/attachments/905408208099770439/968268326629441676/a934427f9fb7e082346ad88276a07947.jpg',
        'https://cdn.discordapp.com/attachments/905408208099770439/967547393757311066/1daae7682dceade663c7d33eab80035f.jpg',
        'https://cdn.discordapp.com/attachments/905408208099770439/967547328913358898/dc34f77b23db369b85680a7018737b7e.jpg',
        'https://cdn.discordapp.com/attachments/905408208099770439/967548174359199754/a793e180770b42cdab298d8b393733da.jpg',
        'https://cdn.discordapp.com/attachments/905408208099770439/967111141153185832/unknown.png',
        'https://cdn.discordapp.com/attachments/905408208099770439/967547788428705792/87d46ab66a438797408ca7e6ec15ca7c.jpg',
        'https://cdn.discordapp.com/attachments/905408208099770439/968268545769218059/b7ec31a49c1e3c69f5e349e406ef4200.jpg',


      ]
      const random = cut[Math.floor(Math.random() * cut.length)]
        let embed = new EmbedBuilder()
            .setAuthor({name : `${interaction.user.username}`, iconURL : `${interaction.user.displayAvatarURL({ dynamic : true })}`})
         
             .setColor("Random")
            .setImage(`${random}`)
           
        await interaction.reply({ embeds: [embed] });
    }
}