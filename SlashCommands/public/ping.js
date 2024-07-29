const { EmbedBuilder, Client, ChatInputCommandInteraction } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check the Ping"),

    async execute(interaction, client) {
        await interaction.reply({content: "Loading Progress Bar `%5`", ephemeral: true});
        await interaction.editReply({content: "Loading Progress Bar `%10`"});
        await interaction.editReply({content: "Loading Progress Bar `%15`"});
        await interaction.editReply({content: "Loading Progress Bar `%20`"});
        await interaction.editReply({content: "Loading Progress Bar `%25`"});
        await interaction.editReply({content: "Loading Progress Bar `%30`"});
        await interaction.editReply({content: "Loading Progress Bar `%35`"});
        await interaction.editReply({content: "Loading Progress Bar `%40`"});
        await interaction.editReply({content: "Loading Progress Bar `%45`"});
        await interaction.editReply({content: "Loading Progress Bar `%50`"});
        await interaction.editReply({content: "Loading Progress Bar `%55`"});
        await interaction.editReply({content: "Loading Progress Bar `%60`"});
        await interaction.editReply({content: "Loading Progress Bar `%65`"});
        await interaction.editReply({content: "Loading Progress Bar `%70`"});
        await interaction.editReply({content: "Loading Progress Bar `%75`"});
        await interaction.editReply({content: "Loading Progress Bar `%80`"});
        await interaction.editReply({content: "Loading Progress Bar `%85`"});
        await interaction.editReply({content: "Loading Progress Bar `%90`"});
        await interaction.editReply({content: "Loading Progress Bar `%95`"});
        await interaction.editReply({content: "Loading Progress Bar `%100`"});
        await interaction.editReply({content: "**✅ - Successfully loading progress bar to `%100` now you can show your ping 😀 .**"});
        const message = await interaction.editReply({ content: "**Getting Pong Message 🤣 !!**"});
        const embed = new EmbedBuilder()
        .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ size:1024, extension: "gif"||"png" })})
        .setTitle("📡 Ping Your Network :")
        .setDescription(`📈 Websocket Latecy : \`${client.ws.ping}\`\n📊 Bot Latecy : \`${message.createdTimestamp - interaction.createdTimestamp}\``)
        .setColor("Random")
        .setThumbnail(iconURL)
        .setFooter({text: client.user.tag, iconURL: client.user.displayAvatarURL({size:512, extension: "png"}) })
        .setTimestamp()
        await interaction.editReply({embeds: [embed]});
    }
}