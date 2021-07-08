const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log('Logged in as ${client.user.tag}!')
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
})
client.on("message", msg => {
  if (msg.content === "hello") {
    msg.reply("hello how are u doin")
  }
})
client.on("message", msg=> {
  if (msg.content === "k xa yr") {
    msg.reply("thik xa ni , tero k xa")
  }
})
client.on("message", msg=> {
  if (msg.content === "i am sad"){
    msg.reply("why are you sad? please listen to this - https://www.youtube.com/watch?v=BnYSSMbZdaY")
  }
})
client.on("message", msg=> {
  if (msg.content === "sahi ho"){
    msg.reply("nepali ho ni sathi")
  }
})
client.on("message", msg => {
  if (msg.content === "/invite"){
    msg.reply("https://discord.com/api/oauth2/authorize?client_id=862348917098283058&permissions=8&scope=bot")
  }
})
client.login(process.env.TOKEN)
const mySecret = process.env['TOKEN']

