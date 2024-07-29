const { SlashCommandBuilder,PermissionFlagsBits } = require("discord.js");
const db = require('pro.db')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('anti-badwords')
    .setDescription('badwords in server')
    .addStringOption(option => 
        option 
        .setName('status')
        .setDescription('Pleas Select ON / OFF ')
        .setRequired(true)
        .setChoices(
            { name: 'ON' , value: 'on_anti'},
            { name: 'OFF', value: 'off_anti'},
        ))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild),
        async execute(interaction) {
            const string = interaction.options.getString('status');

            if (string === 'on_anti') {
                    const Db = db.fetch(`AntiBadwords_${interaction.guild.id}`)
                if (Db === true) return interaction.reply({content: `The Blocker is Aready Enalad`, ephemeral: true})
                db.set(`AntiBadwords_${interaction.guild.id}`, true)
                interaction.reply({ content: `Words Blocker has been Successfully Enabled` })
             }else if (string === 'off_anti') {
                const Db = db.fetch(`AntiBadwords_${interaction.guild.id}`) 
                if (Db === false) return interaction.reply({content: `The Blocker is Aready Disabled`, ephemeral: true})
               
                db.set(`AntiBadwords_${interaction.guild.id}`, false)
                interaction.reply({ content: `Words Blocker has been Successfully Disabled` })
  }
}}