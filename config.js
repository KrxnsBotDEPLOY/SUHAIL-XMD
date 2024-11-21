const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_32_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MixcbiAgICAgICAgODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MCxcbiAgICAgICAgODAsXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDQxLFxuICAgICAgICA4MCxcbiAgICAgICAgODksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICA4MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMixcbiAgICAgICAgMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MixcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDU1LFxuICAgICAgICA2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHNGZBN3dZZlY2Qi81cnhvOE5EOVI3UW9ZNWhwc0F5REVRUm1Kd01wbW9nPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnRWxzMzhKX1I5T001enh2cUVyaldBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdjZDQ4ZjY4LTE1NTEtNDI2Yi1iN2E0LTg4YWYxZjVmYjA2MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDIxMSxcbiAgICAgIDE3OCxcbiAgICAgIDE1OSxcbiAgICAgIDIyOCxcbiAgICAgIDIzMixcbiAgICAgIDIzMSxcbiAgICAgIDE4NCxcbiAgICAgIDUsXG4gICAgICAyMzIsXG4gICAgICAxOTMsXG4gICAgICAzOSxcbiAgICAgIDEyOSxcbiAgICAgIDE2MCxcbiAgICAgIDEzMixcbiAgICAgIDIxMixcbiAgICAgIDIzMSxcbiAgICAgIDY0LFxuICAgICAgMTg5LFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMjM4LFxuICAgICAgOTYsXG4gICAgICAxMjEsXG4gICAgICAxNzgsXG4gICAgICAxOTksXG4gICAgICA5OSxcbiAgICAgIDMxLFxuICAgICAgMTYwLFxuICAgICAgMjMwLFxuICAgICAgMCxcbiAgICAgIDE5OSxcbiAgICAgIDE2NCxcbiAgICAgIDExMyxcbiAgICAgIDkyLFxuICAgICAgMTExLFxuICAgICAgNTEsXG4gICAgICAxNzEsXG4gICAgICAxMTUsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkJRMkxSMTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTM4NTc4MzYwOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzk1ODE3MDk0ODAxNDU6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVhQZ25BUW1xWDl1UVlZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjTUp0RVIxK2xkcHRyZW1aK1BTWnhHbkoxZk5OcmVlck9zT3FvQjI3bWdRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImh6Z0JuaGNVcHpBeGlxRDJGeXl1QlVFZGx3czFJQ3FUZTdCNU92bVl6NGVlcGZTVTd5Y2JkcHVMbndWNGZscXczKzcxUDU2M3FqT0lZa3M3R082YUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJRSXc5L3haRVR4Y3JTMzhFQnI0WER4WWNlNzhkSVZ3d2hNdU1rbTNiZHhrOG41dzJBYXdMTTg0VXZBTm5sZWsrQnNaSVAzNXhEbmN3aTdWTGVQYkJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM4NTc4MzYwOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIyMDMxNjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQZ3dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBndy5qc29uIjogIntcImtleURhdGFcIjpcIlMxbzQ1QUlwalZQMVp4RU1LM0libFdXK0VMQ2hQM1ZJNGxYQXhxbXREdzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjM0OTIzOTcwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
