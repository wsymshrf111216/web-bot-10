const { Client, UserContextMenuCommandInteraction, ApplicationCommandType, ContextMenuCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')

module.exports = {
    data: new ContextMenuCommandBuilder()
    
	.setName('Avatar')
    .setType(ApplicationCommandType.User),

    /**
    * @param { Client } client
    * @param { UserContextMenuCommandInteraction } interaction
    */

    async execute(interaction, client) {
        const User = interaction.guild.members.cache.get(interaction.targetId)
        const Embed = new EmbedBuilder()
            .setColor('Random')
            .setImage(User.user.displayAvatarURL({ size: 4096 }))
            .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
        const Row = new ActionRowBuilder()
            .addComponents(new ButtonBuilder() .setStyle(ButtonStyle.Link) .setLabel('Avatar URL') .setURL(User.user.displayAvatarURL({ size: 4096 })))
        interaction.reply({ embeds: [Embed], components: [Row] })
    }
}