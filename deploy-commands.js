const fs = require("node:fs");

const { REST, Routes } = require('discord.js');
const { ClientId } = require('./Config.js')

const rest = new REST({ version: '10' }).setToken(process.env.token);

module.exports = (client) => {
  const commands = [];

  fs.readdirSync("./commands/").forEach(async dir => {
    const commandsFiles = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith(".js"))
    for (const file of commandsFiles) {
      const command = require(`../commands/${dir}/${file}`)
      commands.push(command.data.toJSON())
      client.slashCommands.set(command.data.name, command)
    };
  });

  (async () => {
    try {
      console.log(`Started refreshing ${commands.length} application (/) commands.`);
      
      const data = await rest.put(Routes.applicationCommands(ClientId), { body : commands })

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
      console.log(error)
    };
  })();
};