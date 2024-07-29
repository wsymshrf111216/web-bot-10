const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('girl-avatar')
        .setDescription('Avatar girl Random'),

    async execute(interaction, client) {

      const cut = [
        'https://cdn.discordapp.com/attachments/905408201619570789/964308296062349362/a_4d413a627c9aecab0a7e58724021d2e4.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/958718350836531250/5319-egirl-hearts.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/966304223128080444/IMG_2617.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/966304181579300864/IMG_2615.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/958830880363794482/Zude_Special_Gif_17.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/963048122664255488/IMG_2177.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/958718373322170419/19.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/965693098330054696/syhbyz4.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/966304195139481610/IMG_2612.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/958827224998477844/a_620c38e6c46608cdda53ed57ba66efae.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/966304039774076948/IMG_2618.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/963752023642218516/a_c05908c311046b38c128a97ccf5394ed.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/964955309816807535/ezgif-2-0db0c0d345.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/966304039774076948/IMG_2618.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/963956167598559282/IMG_2328.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/965693088628617276/386.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/958718416531902534/zyBZdtfi.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/958718589278515341/a_108a53baa1c52699cf6634129de75496.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/958827224998477844/a_620c38e6c46608cdda53ed57ba66efae.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/967801659239592046/IMB_F5Czj3_1.gif',
        'https://cdn.discordapp.com/attachments/905408201619570789/964308357315981322/Uzgun_9.gif',
      ]
      const random = cut[Math.floor(Math.random() * cut.length)]
        let embed = new EmbedBuilder()
            .setAuthor({name : `${interaction.user.username}`, iconURL : `${interaction.user.displayAvatarURL({ dynamic : true })}`})
         
             .setColor("Random")
            .setImage(`${random}`)
           
        await interaction.reply({ embeds: [embed] });
    }
}