const res = require ('path')
console.log('название файла= ', res.basename(__filename))
console.log('название файла= ', res.basename(__dirname))
console.log('название файла= ', res.dirname(__dirname))
//создание директории 
const fs = require('fs')
// fs.mkdir(res.join(__dirname, 'myDir'), (err) => {
//     if(err){
//         throw err
//     }
//     console.log('Ok!')
// })


const filePath = res.join(__dirname, 'myDir', 'text.txt')

//создание файла он перетирает если файл уже существует
// fs.writeFile(filePath, "Hello NodeJS", err => {
//     if(err){
//         throw err
//     }
//     console.log('Файл создан')
// })
// //метод добавление инфы в уже созданные файлы
// fs.appendFile(filePath, "\nWrite again", err => {
//     if(err){
//         throw err
//     }
//     console.log('Файл создан')
// })

//метод чтения файла
fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err){
        throw err
    }
    console.log(content)
})

const myOs= require('os')

console.log('Операционная система: ', myOs.platform())
console.log('Архитектура процессора: ', myOs.arch())
console.log('Инфа по процессорам: ', myOs.cpus())
console.log('Свободная память: ', myOs.freemem())
console.log('Всего памяти: ', myOs.totalmem())

