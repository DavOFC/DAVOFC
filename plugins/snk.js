let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let teks = `
Kebijakan Privasi, Syarat Ketentuan dan Peraturan Fourzy Bot

Kebijakan Privasi
1. Fourzy tidak akan merekam data riwayat chat user.
2. Fourzy tidak akan menyebarkan nomor users.
3. Fourzy tidak akan menyimpan media yang dikirimkan oleh users.
4. Fourzy tidak akan menyalah gunakan data data users.
5. Owner Fourxy berhak melihat data riwayat chat users.
6. Owner Fourzy berhak melihat status users.
7. Owner Fourzy dapat melihat riwayat chat, dan media yang dikirimkan users.

Peraturan Fourzy Bot
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

Syarat Ketentuan Fourzy Bot
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. Fourzy dapan mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. Fourzy *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. Fourzy akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. Fourzy bertanggung jawab atas kesalahan fatal dalam programing maupun owner.


Peraturan: 1 Februari 2022
`.trim()
    conn.send2ButtonLoc(m.chat, await(await fetch(image)).buffer(), teks, watermark, 'Menu', '.menu', 'Owner', '.owner', m)
}
handler.help = ['peraturan']
handler.command = /^(snk|syarat|peraturan|rules)$/i
handler.tags = ['main']
module.exports = handler
