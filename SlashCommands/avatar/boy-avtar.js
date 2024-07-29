const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('boy-avatar')
        .setDescription('Avatar Boy Random'),

    async execute(interaction, client) {

      const cut = [
        'https://media.discordapp.net/attachments/608711476219478045/942448117545062470/selbg5.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/963958659119988736/IMG_2332.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/960915379738263612/IMG_1948.gif',
        'https://media.discordapp.net/attachments/608711476219478045/942116111028199474/1644688376859.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/963751972291358760/a_067a94982703a353cb79001f6ba04169.gif',
        'https://media.discordapp.net/attachments/608711476219478045/946349222435889152/a_03195f2f68674458c11c49e6ad695cc8.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/959180841907539968/2f07bf4593f2f9062fc47f52fbb4acc1.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/968665652657274930/1AD494F7-DA0E-413C-82A2-E19F6B028DFA.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/949415508816584714/6AEDD8C7-0FE1-414D-AFA5-5A9E04754FF7.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/953258452849930260/a_06444031a008c1dc7aa65fd5ad146d41.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/952860725741776926/a_b9b2ff986ff3949e9221bcc3d5ea7578.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/968527750803624028/4961bbe04a149019d7e85e3498b53d80.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/952397839198220348/mangif25.gif',
        'https://media.discordapp.net/attachments/880119639500263464/911606348909772830/3ad9c523894bdcb0f9e88832fcc98889.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/967157284687978497/a_5415dcf5b5667a32ed4543beb3465c1c.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/963751920261034024/a_3e0efc46b41de9d1a44aef48f31e4a08.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/967157303000326264/a_e5c102fb81cc70eacc08362907158af4.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/951469045939580988/yuhlol.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/961308724172062850/IMG_1980.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/961567576603901952/a_a0983eb000b97cdee728a7e3ec40d81b.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/959129904895647744/90e0fd5a7c7654024ea32fcd9380c92c.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/963751920261034024/a_3e0efc46b41de9d1a44aef48f31e4a08.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/945271617074888744/a_d0d9eccf761d35a3314a1df48616805c.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/953258492083437649/a_5731eaa71485c955438e4991f44b13f1.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/952397839516967012/mangif39.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/968527748236709908/88f7223fcb5f10c6147b72b4949feeef.gif',
        'https://cdn.discordapp.com/attachments/905408198306041886/951963483988172830/a_db28400d0ebd195d9d5652bf8f06918f.gif',
      ]
      const random = cut[Math.floor(Math.random() * cut.length)]
        let embed = new EmbedBuilder()
            .setAuthor({name : `${interaction.user.username}`, iconURL : `${interaction.user.displayAvatarURL({ dynamic : true })}`})
         
             .setColor("Random")
            .setImage(`${random}`)
           
        await interaction.reply({ embeds: [embed] });
    }
}