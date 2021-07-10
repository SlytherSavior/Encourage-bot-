const Discord = require("discord.js")
const fetch = require ("node-fetch")
const client = new Discord.Client()

const sadWords = ["sad","depressed","unhappy", "angry"]

const encouragements = [
  "Cheer up!",
  "Hang in there.",
  "Dont lose hope",
  "You are a great person / bot!"
]

function getQuote()  {
  return fetch("https://zenquotes.io/api/random")
   .then(res => {
      return res.json()
   })
   .then(data => {
     return data[0]["q"] + "-" + data[0]["a"]
   })
}

client.on("ready", () => {
  console.log('Logged in as ${client.user.tag}!')
  client.user.setActivity('$help', { type: "WATCHING" }).catch(console.error)
})
client.on("message", msg => {
  if(msg.author.bot) return
  if (msg.content === "$inspire") {
    getQuote().then(quote => msg.channel.send(quote))
  }
})
client.on("message", msg => {
  if(msg.author.bot) return
  if(msg.content === "$help") {
    msg.reply("***Thanks for getting this bot . Its just a simple bot developed by @Slytherrrr#1693 . I give inspiring quotes to you.                        Commands - $help,$yt,$inspire,$i am sad,$invite.  Note : The bot is still in development.***")
  }
})
client.on("message", msg => {
  if(msg.content === "$invite"){
    msg.reply("https://discord.com/api/oauth2/authorize?client_id=862348917098283058&permissions=8&scope=bot")
  }
})
client.on("message", msg => {
  if(msg.content === "$yt"){
    msg.reply("Subscribe to this legendary youtuber !!    https://www.youtube.com/channel/UCKGhP5D5l5UriOde9tGR8qA")
  }
})
client.on("message", msg => {
  if(msg.content === "$i am sad"){
    msg.reply("https://www.youtube.com/watch?v=BnYSSMbZdaY&t=1st")
  }

 if (sadWords.some(word => msg.content.includes(word))) {
   const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)]
   msg.reply(encouragement)
 } 
})
client.login(process.env.TOKEN)
const mySecret = process.env['TOKEN']

