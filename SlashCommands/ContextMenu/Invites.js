const { Client, UserContextMenuCommandInteraction, ApplicationCommandType, ContextMenuCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, PermissionFlagsBits } = require('discord.js')
var { inviteTracker } = require("discord-inviter")
module.exports = {
    data: new ContextMenuCommandBuilder()

	.setName('Invites')
    .setType(ApplicationCommandType.User),

    /**
    * @param { Client } client
    * @param { UserContextMenuCommandInteraction } interaction
    */
    async execute(interaction, client) {
        const User = interaction.guild.members.cache.get(interaction.targetId)
            let clientMember = await interaction.guild.members.fetch(client.user.id);
            if (!clientMember.permissions.has(PermissionFlagsBits.SendMessages)) return interaction.reply({content: `Im Dont Have Permission`, ephemeral: true})
            let user = interaction.options.getMember('user') || interaction.member;
            let invite = await inviteTracker.getMemberInvites(user);
            interaction.reply(`${user.user.tag} Has Got ${invite.count} Invite(s)`);
    }
}