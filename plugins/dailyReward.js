let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, args, command }) => {
    let name = conn.getName(m.sender)
    let user = db.data.users[m.sender]
    if (user.dailyReward < 20){
        await conn.sendButtonLoc(m.chat, await(await fetch(thumbfoto)).buffer(), `Daily Reward kamu belum mencukupi untuk mendapatkan hadiah Daily Reward!\nDaily Reward mu: ${user.dailyReward}/20. Dibutuhkan 20 Daily Reward untuk mendapatkan hadiah.\nCara memperoleh Daily Reward: bermain semua game di Fourzy kecuali Family100, Tictactoe, Slot, Suit. Untuk Math hanya Math level hard keatas untuk dapat memperoleh hadiah.\n\nPoint Daily Reward akan di riset setiap jam 4 pagi.`, watermark, 'Game menu', '.? game')
    }
    if (user.dailyReward === 10) {
        await conn.sendButtonLoc(m.chat, await(await fetch(thumbfoto)).buffer(),`Terimakasih sudah menyelesaikan daily reward. Berikut hadiah mu:

20 Limit
10000 EXP

Daily Reward akan di riset setiap jam 4 pagi setiap hari WIB.`.trim(), watermark, 'Profile', '.my')
    user.dailyReward = 0
    user.limit += 100
    user.exp += 10000
    }
}
handler.command = /^(dailyreward)$/i
handler.tags = ['game']
handler.help = ['dailyreward']
module.exports = handler
