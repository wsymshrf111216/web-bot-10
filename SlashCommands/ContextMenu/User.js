const { Client, UserContextMenuCommandInteraction, ApplicationCommandType, ContextMenuCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, PermissionFlagsBits } = require('discord.js')
const { inviteTracker } = require('discord-inviter')


module.exports = {
    data: new ContextMenuCommandBuilder()
    
	.setName('User')
    .setType(ApplicationCommandType.User),

    /**
    * @param { Client } client
    * @param { UserContextMenuCommandInteraction } interaction
    */

    async execute(interaction, client) {
     const Member = interaction.options.getMember('user') || interaction.member;
        const Embed = new EmbedBuilder()
            .setThumbnail(Member.user.displayAvatarURL())
            .setColor('Random')
            .addFields({ name: 'Joined Discord', value: `<t:${parseInt(Member.user.createdAt / 1000)}:R>`, inline: true })
            .addFields({ name: 'Joined Server', value: `<t:${parseInt(Member.joinedAt / 1000)}:R>`, inline: true })
            .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
        interaction.reply({ embeds: [Embed] })
    }
}