const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anime-avatar')
        .setDescription('Avatar Anime Random'),

    async execute(interaction, client) {

      const cut = [
        'https://cdn.discordapp.com/attachments/905408212830924842/968481858151137350/d8f9023f2833ac74ab008028b5544edd.jpg',
        'https://cdn.discordapp.com/attachments/905408215452364910/962403052017565696/e26329fe05bcd957ed3ffd2db05d2257.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968549498555088936/10.gif',
        'https://c.tenor.com/gpOUboethA0AAAAC/my-hero-academia-boku-no-hero-academia.gif',
        'https://c.tenor.com/VxOfmTnAo1gAAAAC/shoto-todoroki-my-hero-academia.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968549496101404742/6ce52ff3cf27d95d8b41574bed0049d2.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/972173424711573596/6CDABBCD-9CFE-401F-A91F-44EE5B9116ED.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968549905926873138/746EF1FA-E878-479B-800D-3EB8FB298CF1.gif',
        'https://c.tenor.com/GG1irLRnjk0AAAAC/minato-namikaze-flying-raijin.gif',
        'https://c.tenor.com/_mOzJuopBkUAAAAC/demon-slayer-kimetsu-no-yaiba.gif',
        'https://c.tenor.com/dcjQDZGOiLsAAAAC/tomioka-giyu-kimetsu-no-yaiba.gif',
        'https://c.tenor.com/vgS3-AbN_cEAAAAC/naruto-uzumaki-anime.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968549642558140446/C2A5EE73-D3B1-4B8D-B36D-1C64ED607F39.gif',
        'https://c.tenor.com/3Mk_x9XFzNEAAAAC/demon-slayer-nezuko.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968549136725082112/AC41E96A-F915-4722-8910-8BADE8CFEA91.gif',
        'https://c.tenor.com/txTk_QEANeMAAAAC/madara-laugh.gif',
        'https://c.tenor.com/rC9l2_E3yNUAAAAC/shingeki-no-kyojin-shingeki.gif',
        'https://c.tenor.com/Wp9oVFcaqxgAAAAC/demon-slayer-inosuke.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968603543131009034/77D8F2EE-FB39-4A94-83E3-1BA94B8743A9.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968549905071210576/A260CF6C-FE88-4F9E-97E7-8A9B746BDF4B.gif',
        'https://c.tenor.com/6dK8YVIoXXMAAAAC/netero-hxh.gif',
        'https://c.tenor.com/jkWRrwE-vlwAAAAC/netero-chimera.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968549070778032158/E5E618F2-4859-4B78-A389-DFD262761F7B.gif',
        'https://c.tenor.com/6ve9NOXQnY0AAAAC/izuku-midoriya-my-hero-academia.gif',
        'https://c.tenor.com/aW1JlCYm5N8AAAAC/naruto-uzumaki.gif',
        'https://c.tenor.com/-9-k3W7uOa4AAAAC/dabi.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968549640704237568/anime-sad.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968549070778032158/E5E618F2-4859-4B78-A389-DFD262761F7B.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968549640704237568/anime-sad.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968553790376648724/5281B021-0D37-4708-B609-827343D84EA4.gif',
        'https://c.tenor.com/aEWhFxi2aNEAAAAC/aomine.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968605755483775016/4D2B6B5E-BC03-45EA-91CC-1113F76427DE.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968605532506177596/1396255D-AA4F-41C3-AFD4-54B697DB5FAD.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968549640704237568/anime-sad.gif',
        'https://cdn.discordapp.com/attachments/968548885142335548/968549640704237568/anime-sad.gif',

      ]
      const random = cut[Math.floor(Math.random() * cut.length)]
        let embed = new EmbedBuilder()
            .setAuthor({name : `${interaction.user.username}`, iconURL : `${interaction.user.displayAvatarURL({ dynamic : true })}`})
         
             .setColor("Random")
            .setImage(`${random}`)
           
        await interaction.reply({ embeds: [embed] });
    }
}