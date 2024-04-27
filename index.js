import { Client, GatewayIntentBits } from 'discord.js'
import { config } from 'dotenv'
import { google } from 'googleapis'
// import { schedule } from 'node-cron'

config()
// schedule

const discordClient = new Client({
  intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds],
})

const youtubeClient = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY,
})

let latestVideoId = ''

discordClient.login(process.env.DISCORD_TOKEN)
discordClient.on('ready', () => {
  console.log(`🤖 online! Logado como ${discordClient.user.tag}`)
  checkNewVideos()
})

async function checkNewVideos() {
  const channelId = process.env.CHANNEL_ID
}
