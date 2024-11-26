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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_07_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MixcbiAgICAgICAgODIsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyLFxuICAgICAgICA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0LFxuICAgICAgICAzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDUxLFxuICAgICAgICA4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNixcbiAgICAgICAgNzksXG4gICAgICAgIDM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUxLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ1g4bk9hWFZmM0hoRm9QQUhwaGE2R05xcjdwMFlHNDJPVzluT0tCVGZlcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0ZEN3R4R2tSNnVaQ0ZDR3FXeDhjUVwiLFxuICBcInBob25lSWRcIjogXCI4YmQ4OTE5Yi1kZGM5LTQxZWQtOWY4NC1lNTllZTM4MjBkOGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgODksXG4gICAgICA4NSxcbiAgICAgIDMyLFxuICAgICAgNjEsXG4gICAgICAxNDIsXG4gICAgICAyOCxcbiAgICAgIDIzNixcbiAgICAgIDM0LFxuICAgICAgMTg5LFxuICAgICAgMTA4LFxuICAgICAgOTgsXG4gICAgICA3MSxcbiAgICAgIDEyMSxcbiAgICAgIDE4NSxcbiAgICAgIDEyOCxcbiAgICAgIDc0LFxuICAgICAgMTMwLFxuICAgICAgMjQ0LFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgMTU2LFxuICAgICAgMjAsXG4gICAgICA5MCxcbiAgICAgIDgxLFxuICAgICAgNTIsXG4gICAgICA2NCxcbiAgICAgIDc4LFxuICAgICAgMjQ0LFxuICAgICAgMyxcbiAgICAgIDIwOCxcbiAgICAgIDQ4LFxuICAgICAgMTk4LFxuICAgICAgMjM4LFxuICAgICAgMTg1LFxuICAgICAgMTY3LFxuICAgICAgNjcsXG4gICAgICA2MCxcbiAgICAgIDg1LFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5SlFRVDMxNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDEyODg3NjI6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNzQ3MjkzNjcxNDMwOjQ3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hQzhLTUNFTnVTbGJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTmdKQUs5bk1BOUdCT09sbG44T29PNUs2NklhSGFSSjFWL2ZoLzNQclJpbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIMytaT3NlNlI3YWhzeW53eTlNMFNIZ1p6RXNFeDhFQS95VU5BNTg3cUZ4dno4dzNRSFlXc0lPN1psOWdhUXhqdWdOUFFVbzJDanZwdy8wL2hJU0ZEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBeklrWGt3WlRwMUVxcEprK1hKeFQ3bUhxQ05WMUIzaDZTaTN3bmdLZWRQYW9JUXpWbjhKdk0wNTBmd0lZT3p2djhPZmU3Q2N4Ym9sSjRrV2hKSHRCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0MTI4ODc2Mjo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNTk0MDE1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ rattaTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ratta-XMD",
  ownername:process.env.OWNER_NAME|| "ratta-X",


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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
