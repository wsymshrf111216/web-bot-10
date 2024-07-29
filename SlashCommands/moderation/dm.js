const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dm')
        .setDescription('Send a direct message to a user.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to send the message to.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('message')
                .setDescription('The message to send to the user.')
                .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const message = interaction.options.getString('message');

        try {
            await user.send(`You have received a message from ${interaction.user.tag}: ${message}`);
            await interaction.reply(`Message sent to ${user.tag}.`);
        } catch (error) {
            console.error(`Failed to send message to ${user.tag}.`, error);
            await interaction.reply(`Failed to send message to ${user.tag}.`);
        }
    },
};