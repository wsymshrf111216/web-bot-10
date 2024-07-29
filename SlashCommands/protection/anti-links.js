const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const db = require('pro.db')
module.exports ={
    data: new SlashCommandBuilder()
    .setName('anti-links')
    .setDescription('Block the links at your Discord Server')
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
      
        async execute(interaction, client) {
            const string = interaction.options.getString('status');
            let clientMember = await interaction.guild.members.fetch(client.user.id);
            if (!clientMember.permissions.has(PermissionFlagsBits.ManageGuild)) return interaction.reply({content: `Im Dont Have Permission`, ephemeral: true})
     
            if (string === 'on_anti') {
                const Db = db.fetch(`ANTILINKS_${interaction.guild.id}`)
                if (Db === true) return interaction.reply({content: `**The Blocker is Aready Enalad**`, ephemeral: true})
                db.set(`ANTILINKS_${interaction.guild.id}`, true)
                interaction.reply({ content: `URL Blocker has been Successfully Enabled`, ephemeral: true })}
            
            else if (string === 'off_anti') {
                const Db = db.fetch(`ANTILINKS_${interaction.guild.id}`) 
                if (Db === false) return interaction.reply({content: `**The Blocker is Aready Disabled**`, ephemeral: true})
               
                db.set(`ANTILINKS_${interaction.guild.id}`, false)
                interaction.reply({ content: `**URL Blocker has been Successfully Disabled**`, ephemeral: true })
             }
            
        }
}