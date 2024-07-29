const { Client, SlashCommandBuilder, ChatInputCommandInteraction, ChannelType,PermissionFlagsBits } = require('discord.js')
const db = require('pro.db')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('log-channel')
        .setDescription('set log channel')
        .addChannelOption((Option) => Option.setName('channel').setDescription('Select the Channel').setRequired(false))
        .addStringOption((Option) => Option.setName('status') .setDescription('Enable / Disable') .addChoices({
            name: 'Enable',
            value: 'Enable'
        }, { name: 'Disable', value: 'Disable' }))
       .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),


        /**
         * @param { Client } Client
         * @param { ChatInputCommandInteraction } Interaction
         */

        async execute(Interaction, Client) {
            if(!Interaction.member.permissions.has('ManageChannels')) return Interaction.reply({ content: `${Interaction.user.username}, This Command Required **ManageChannels** Permission`, ephemeral: true })
            const Channel = Interaction.options.getChannel('channel') || Interaction.channel;
            const Choice = Interaction.options.getString('status')

            if(Choice === 'Enable') {
                db.set(`Log_channel_${Interaction.guild.id}`, Channel.id)
                Interaction.reply({ content: `The Log has been Enabled in ${Channel}` })
            } else if(Choice === 'Disable') {
                db.delete(`Log_channel_${Interaction.guild.id}`)
                Interaction.reply({ content: `The Log has been Disabled` })
            }
    }
}