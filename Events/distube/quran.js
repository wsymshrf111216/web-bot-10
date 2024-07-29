const { EmbedBuilder } = require('@discordjs/builders')
const client = require('../../index')
const db = require('pro.db')
const Client = require('..')


const Response = new EmbedBuilder()
.setColor("#140d0d")
.setTitle("🕋 quran")
.setTimestamp(Date.now())

const status = queue =>
  `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.names.join(', ') || 'Off'}\` | Loop: \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? 'All Queue' : 'This quran') : 'Off'
  }\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``
client.distube
  .on('playquran', (queue, quran) =>
    queue.textChannel.send({embeds: [Response.setDescription(`▶️ | Playing \`${quran.name}\` - \`${quran.formattedDuration}\`\nRequested by: ${
        quran.user
      }\n${status(queue)}`)]}
    )
  )
  .on('addquran', (queue, quran) =>
    queue.textChannel.send({embeds: [Response.setDescription(`✅ | Added ${quran.name} - \`${quran.formattedDuration}\` to the queue by ${quran.user}`)]})
  )
  .on('addList', (queue, playlist) =>
    queue.textChannel.send({embeds: [Response.setDescription(`✅ | Added \`${playlist.name}\` playlist (${
        playlist.quran.length
      } quran) to queue\n${status(queue)}`)]}
    )
  )
  .on('error', (channel, e) => {
    if (channel) channel.send(`❌ | An error encountered: ${e.toString().slice(0, 1974)}`)
    else console.error(e)
  })
  .on('empty', channel => channel.send({embeds: [Response.setDescription('Voice channel is empty! Leaving the channel...')]}))
  .on('searchNoResult', (message, query) =>
    message.channel.send({embeds: [Response.setDescription(`❌ | No result found for \`${query}\`!`)]})
  )
  .on('finish', queue => queue.textChannel.send({embeds: [Response.setDescription("`✅ Finished!`")]}))


