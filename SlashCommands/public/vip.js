const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vip')
        .setDescription('Vip Bot Info'),

    async execute(interaction, client) {

           const cut = [
   ``,
      ]
      const random = cut[Math.floor(Math.random() * cut.length)]
        let embed = new EmbedBuilder()
            .setAuthor({name : `${interaction.user.username}`, iconURL : `${interaction.user.displayAvatarURL({ dynamic : true })}`})
            .setThumbnail(`${interaction.guild.iconURL({ dynamic : true })}`)
             .setColor("Random")
            .setTitle(`vip`)
          .setDescription(`**السلام عليكم ورحمة الله وبركاته انا ويب بوت اقدم لكن vip وهي بــ 4﷼ كل شهر فقط المبلغ يذهب مباشر الــ منصة إحسان وفي المقابل يعطيك البوت اوامر خاص لكم**

**المميزات : اوامر خاص لكم**

**السعر : 4﷼ كل شهر**

**سيكون كل هذا قريبا ان شاء الله **`)
            .setFooter({ text : `${client.user.username}`, iconURL : `${client.user.displayAvatarURL()}`})
        await interaction.reply({ embeds: [embed] });
    }
}