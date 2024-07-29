const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, ComponentType} = require('discord.js');
const ms = require("ms")
let answer;
module.exports = {
  data: new SlashCommandBuilder()
    .setName("quest")
    .setDescription("أختر الإجابة الصحيحة")
    .setDefaultMemberPermissions(PermissionFlagsBits.ViewChannel),
  async execute(interaction, client){

    const quest = [
    {
        "q":"يعتبر الرقم خمسة في الترتيب الخامس من الارقام العربية",
        "i":true
    },
    {
        "q":"يعد الصاحبي ابو بكر الصديق رضي الله عنه أول الخلفاء الراشدين",
        "i":true
    },
    {
        "q":"تعتبر الجغرافيا العلم الذي يهتم بدراسة الظواهر الطبيعية والبشرية على سطح الأرض",
        "i":true
    },
    {
        "q":"أول من امتهن مهنة الرعي هو الامريكي جوزيف سلاند",
        "i":false
    },
    {
        "q":"يتكون قوس قزح من 8 الوان",
        "i":false
    },
    {
        "q":"يعد العالم الالماني خاركوف من المؤسسين لعلم الطب",
        "i":false
    },
    {
        "q":"أصل جبنة البارميزان هي من إيطاليا",
        "i":true
    },
    {
        "q":"تعد هضبة التبت من أكبر الهضاب في العالم",
        "i":true
    },
    {
        "q":"ماري كوري هي أول أمراة فازت بجائزة نوبل",
        "i":true
    },
    {
        "q":"تم إفتتاح اول بنك دم في العالم في نيويورك في سنة 1940",
        "i":true
    }
]
    
    function embedMessageNow(n){ return new EmbedBuilder() .setDescription(n) .setColor("Random") };
    await interaction.deferReply({ ephemeral: false })
 
    const row = new ActionRowBuilder().addComponents( 
      new ButtonBuilder() .setStyle(ButtonStyle.Success) .setCustomId("question.yes") .setLabel("✔ صح") ,
      new ButtonBuilder() .setStyle(ButtonStyle.Danger) .setCustomId("question.no") .setLabel("❌ خطأ")
    )
 
    const num = Math.floor(Math.random()*quest.length);
    
    const collect = await (await interaction.editReply({ embeds: [embedMessageNow(quest[num].q)], components: [row] })).createMessageComponentCollector({
      ComponentType: ComponentType.Button, time: ms("15s")
    });
 
    collect.on("collect", async i => {
      switch (i.customId) {
        case "question.yes":
          if(quest[num].i == true){ answer = true }else{ answer = 0 }
          break;
        case "question.no":
          if(quest[num].i == false){ answer = false }else{ answer = 0 }
          break;
      }
      if(quest[num].i == answer){
        interaction.editReply({embeds:[embedMessageNow(`أحسنت الإجابة صحيحة يا ${i.user.tag}(<@${i.user.id}>)`)], components: []})
      }else{
          interaction.editReply({embeds:[embedMessageNow(`للاسف، الإجابة غير صحيحة ${i.user.tag}(<@${i.user.id}>)`)], components: []})
      }
    }),

      
    
    collect.on("end", (collected) => { if(collected.size > 0) return
        interaction.editReply({ embeds: [ embedMessageNow(`للأسف، لم يختر أحد حتى الآن الإجابة الصحيحة`) ], components: [] })
    })
  },
};