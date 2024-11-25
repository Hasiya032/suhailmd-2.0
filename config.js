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
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_05_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMixcbiAgICAgICAgNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM3LFxuICAgICAgICA0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDU4LFxuICAgICAgICA5OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MixcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM0LFxuICAgICAgICA1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxODksXG4gICAgICAgIDEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib1kxajR1SlB0T05qZmJUQksxaGRZSXdOVUsySDUzM3BqV2toRDlBdHNiST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2NDQ1ODUwNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOERGNDEwMzBCRUUwNDY5RTdDQjQzODhBRUNDQjE5MjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyNTU0MzUwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhyMlF4M2RyVFVTUzhzekROcWRPeFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTcxMGFiNzUtZGQzNy00NTI0LWJkODUtOTEyZThmYTAzNzJlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgyLFxuICAgICAgMjQ3LFxuICAgICAgMTgwLFxuICAgICAgMTQ3LFxuICAgICAgMTMsXG4gICAgICAyMTksXG4gICAgICA4MCxcbiAgICAgIDgsXG4gICAgICAxOTMsXG4gICAgICAyMTEsXG4gICAgICAxNTEsXG4gICAgICAxNjAsXG4gICAgICAxMTgsXG4gICAgICAyMzQsXG4gICAgICAyNCxcbiAgICAgIDExOSxcbiAgICAgIDEwMixcbiAgICAgIDIyOSxcbiAgICAgIDYyLFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgOTYsXG4gICAgICAyMzEsXG4gICAgICAyNTMsXG4gICAgICA0MixcbiAgICAgIDI0NyxcbiAgICAgIDk4LFxuICAgICAgNzMsXG4gICAgICA1OCxcbiAgICAgIDE5NixcbiAgICAgIDE1NyxcbiAgICAgIDEzNixcbiAgICAgIDc1LFxuICAgICAgMTExLFxuICAgICAgMjAwLFxuICAgICAgMjIyLFxuICAgICAgNjcsXG4gICAgICAxNzMsXG4gICAgICA3LFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkM1RTREODNUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NDQ1ODUwNjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIu+8qOG0nMm0ybTKj+++oO+8p8mqyoDKn+++oOS5iFwiLFxuICAgIFwibGlkXCI6IFwiMTg2MTA1ODY1NDQxMjgwOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pUc25sNFE1ZHlTdWdZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVzFGMXJuOFMzeEpRall6a1hwdGN2b0RwUzhmRDdCb3BUZkE0RWM0NXp4VT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLeXhEbzRNY2I2WENBUnB0UWR0Nzk3WWZ1K0ZmS0QwVm9LcWVkOXNCY3RSVDJob25hbU9LL2t1V2ovcUtYUStFenlUZHdaQmVFRGo2T0xtWTNSam9Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIZVZwblRoYS8yU3NBbENadG91c3B2RGVNZHR4NEhES2ZYQ2ZlTzcydnNsM1pSNTJ2cUdIUytFV2ZzRHlxZWlvejN0Z1Z3V2FOR3M2OGtuUTVVNStndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NDQ1ODUwNjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjU1NDM0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtMV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0xXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM3JJTjRhS1o5OW9MY040ODFndWYxREE4NERGaFVSL3RPamZkUXRWSkQyOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTc2Mzc2NTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
