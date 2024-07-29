
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unwarn')
        .setDescription('Remove a warning from a user')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('Select a user to remove warning from')
            .setRequired(true))
        .addStringOption(option => 
            option.setName('reason')
            .setDescription('Enter the reason for removing warning'))
        ,
    async execute(interaction) {
        const { guild, user, options } = interaction;
        const targetUser = options.get('user').value;
        const reason = options.get('reason').value || 'no reason specified';

        // Your unwarning logic here
        // ...

        await interaction.reply(`${user} has removed a warning from ${targetUser} for ${reason}`);
    },
};
