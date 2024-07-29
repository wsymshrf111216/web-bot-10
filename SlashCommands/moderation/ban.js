const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Select a member and ban user.")
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .setDMPermission(false)
    .addUserOption(option => option
      .setName("member")
      .setDescription("Member To Be Banned")
      .setRequired(true))
    .addStringOption(option => option
      .setName("reason")
      .setDescription("The Reason For Ban")
      .setRequired(false)),
 
  async execute(interaction) {
    const { options } = interaction;

    let member = options.getMember("member");
    let reason = options.getString("reason") || "No Reason";
    let embed = new EmbedBuilder()
      .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
      .setColor("Random")
      .setTimestamp()
    if (member.id == interaction.member.id) return interaction.reply({ embeds: [embed.setDescription("**:x: | You Can't Ban Yourself**")], ephemeral: true });
    
    if (member.id == interaction.guild.ownerId) return interaction.reply({ embeds: [embed.setDescription("**:x: | You Can't Ban The Server Owner**")], ephemeral: true });
    
    if (member.roles.highest.position >= interaction.member.roles.highest.position) return interaction.reply({ embeds: [embed.setDescription("**:x: | You Can't Ban Someone Who Has Higher Or Same Role As You**")], ephemeral: true });
    
    if (!member.bannable) return interaction.reply({ embeds: [embed.setDescription("**:x: | I Can't Ban This Member**")], ephemeral: true });

    await member.ban({
      reason
    })
    
    await interaction.reply({ embeds: [embed.setDescription(`** ✈️!has been banned ${member.user.tag} , :white_check_mark:Reason : ${reason}**`)] })
  }
}