
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warn')
        .setDescription('Warn a user')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('Select a user to warn')
            .setRequired(true))
        .addStringOption(option => 
            option.setName('reason')
            .setDescription('Enter the reason for warning'))
        ,
    async execute(interaction) {
        const { guild, user, options } = interaction;
        const targetUser = options.get('user').value;
        const reason = options.get('reason').value || 'no reason specified';

        // Your warning logic here
        // ...

        await interaction.reply(`${user} has warned <@!${targetUser}> for ${reason}`);
    },
};