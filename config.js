const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© rattaTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94764458506";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_42_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1LFxuICAgICAgICA2MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICA2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIzLFxuICAgICAgICA3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDExLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA4LFxuICAgICAgICA4MyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgODUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1LFxuICAgICAgICA3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYxLFxuICAgICAgICA4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDkxLFxuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3LFxuICAgICAgICA2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4b1Y1RHJPZE5kRStNOHNtcEdmdU9UMVNCMTlDbzRaemZPZFZEWGM5V3RRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOd3M4VEZ1bVJiZU1LNlpHbm1uZ0dBXCIsXG4gIFwicGhvbmVJZFwiOiBcImZmNGJiODYwLWNkNmUtNDVlZC1iYTI3LWVjMzg5YzRkYjJmOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDM1LFxuICAgICAgNCxcbiAgICAgIDkyLFxuICAgICAgMTQ4LFxuICAgICAgMjIxLFxuICAgICAgMTY3LFxuICAgICAgMTI2LFxuICAgICAgMTY4LFxuICAgICAgNTksXG4gICAgICAyNTAsXG4gICAgICA1NixcbiAgICAgIDExOCxcbiAgICAgIDE4LFxuICAgICAgODMsXG4gICAgICAxMTYsXG4gICAgICA2NCxcbiAgICAgIDE2MyxcbiAgICAgIDE0NSxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NyxcbiAgICAgIDIzMixcbiAgICAgIDE2OCxcbiAgICAgIDI1MixcbiAgICAgIDE4LFxuICAgICAgNTksXG4gICAgICAyMjIsXG4gICAgICAxNSxcbiAgICAgIDE2OSxcbiAgICAgIDExMCxcbiAgICAgIDg1LFxuICAgICAgMTkzLFxuICAgICAgMjQxLFxuICAgICAgMTAwLFxuICAgICAgMTI5LFxuICAgICAgMjM3LFxuICAgICAgODIsXG4gICAgICAxNTQsXG4gICAgICAzNCxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBNFpLNUNBR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjczMzkwMzA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM5MzM3NjIzMDExNDQxOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXU0NU9vR0VNMi9sYm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpTnVtKytFV2QrNU1CK05WUnBpNktJUEV1UkZkbGZaN0RkejEvSFNaOGlRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtQSFlZYytvMGF0N0FORWc4cFgzVWo0a3ozemNWMFRDdlU1YUF6VGJZZ0J0U2hraU5iY1ZTWTY1T1RrTUhDMTAyRituU1JzbFcvekZ3VkZMTGdLbkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklrU0Zoa2k2Ky9yckVmMmNvS0pPdFowVGdFaVV1NGVxRUx3STErOUt5RXdHVnZkNzduMmVqVkhFVk4wOXA1ZC9mS1JKSDJmUkdsNG52NnVkbjdqZGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY3MzM5MDMwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNTk5NzYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1hrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLWGsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzL3VCRUVEY2VwR0NmOWlWSlg5eXh3UDVKSXhXL3RNcUZlSHNEN0EyUFFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MzQ1NTY0OTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ratta ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • ratta editz』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "RATTA-MD",
  ownername:process.env.OWNER_NAME|| "RATTA-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "RATTA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
