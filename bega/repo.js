const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "repo", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

let infoMsg =  `
( ͡° ͜ʖ ͡°) 𝐎𝐳𝐚𝐚𝐡  👊 𝐭𝐡𝐢𝐬 𝐢𝐬  𝐛𝐚𝐫𝐚𝐤𝐚_𝐦𝐝   𝐜𝐫𝐞𝐚𝐭𝐞𝐝  𝐛𝐲  𝐛𝐚𝐫𝐚𝐤𝐚_𝐛𝐞𝐠𝐚
( ͡° ͜ʖ ͡°) 𝐏𝐥𝐞𝐚𝐬𝐞 𝐠𝐢𝐯𝐞 𝐚 𝐬𝐭𝐚𝐫  🌟 𝐨𝐧 𝐭𝐡𝐞 𝐫𝐞𝐩𝐨 𝐚𝐧𝐝 𝐟𝐨𝐫𝐤 𝐢𝐭  🚗  𝐤𝐢𝐧𝐝𝐥𝐲

( ͡° ͜ʖ ͡°) 𝐑𝐞𝐩𝐨 [https://github.com/Begajunior/BARAKA-MD-V2]  
( ͡° ͜ʖ ͡°) 𝐑𝐞𝐩𝐨 [https://github.com/Begajunior/BARAKA-MD-V2]
  `;
    
let menuMsg = `
  `;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 
