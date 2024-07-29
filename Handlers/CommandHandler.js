const { Client } = require('discord.js')

/**
 * @param {Client} client 
 */
function loadSlashCommands(client) {
    const ascii = require('ascii-table')
    const fs = require('fs')
    const table = new ascii().setHeading("SlashCommands", "Type", "Status")

    let SlashCommandsArray = [];
    let developerArray = [];

    const SlashCommandsFolder = fs.readdirSync("./SlashCommands");
    for(const folder of SlashCommandsFolder) {
        const SlashCommandsFiles = fs.readdirSync(`./SlashCommands/${folder}/`)
        .filter((file) => file.endsWith(".js"));

        for (const file of SlashCommandsFiles) {
            const SlashCommandsFile = require(`../SlashCommands/${folder}/${file}`)

            client.SlashCommands.set(SlashCommandsFile.data.name, SlashCommandsFile)

            if(SlashCommandsFile.developer) developerArray.push(SlashCommandsFile.data.toJSON())
            else SlashCommandsArray.push(SlashCommandsFile.data.toJSON());

            table.addRow(file, folder, "✅");
            continue;
        }
    }

    client.application.SlashCommands.set(SlashCommandsArray)

    const developerGuild = client.guilds.cache.get(client.config.developerGuild)

    developerGuild.SlashCommands.set(developerArray);

    return console.log(table.toString(), "\nLoaded SlashCommands!")
}

module.exports = { loadSlashCommands }