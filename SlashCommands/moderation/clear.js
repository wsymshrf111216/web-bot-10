const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Clear a specific amount of messages from a target or channel.")
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Amount of messages to clear.')
                .setMinValue(1)
                .setMaxValue(99)
                .setRequired(true)
        ).addUserOption(option =>
            option.setName('target')
                .setDescription('Select a target to clear their messages.')
                .setRequired(false)
        ),

    async execute(interaction) {

        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages))
            return interaction.reply({ content: "😕 **You don't have `ManageMessages` permission**", ephemeral: true });

        const { channel, options } = interaction;

        const amount = options.getInteger('amount');
        const target = options.getUser("target");

        const messages = await channel.messages.fetch({
            limit: amount + 1,
        });

        if (target) {
            let i = 0;
            const filtered = [];

            (await messages).filter((msg) => {

                if (msg.author.id === target.id && amount > i) {
                    filtered.push(msg);
                    i++;
                }

            }); await channel.bulkDelete(filtered).then(messages => {
                interaction.reply({ content: `✔ Succesfully deleted ${messages.size} messages from ${target}.` });
            });

        } else {
            await channel.bulkDelete(amount, true).then(messages => {
                interaction.reply({ content: `✔ Succesfully deleted ${messages.size} messages from the channel.` });
            });
        }
    }
}