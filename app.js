/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-05-26 13:32:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-26 13:45:06
 */

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/user1', (req, res) => {
    res.sendFile(__dirname + "/views/user1.html", { title: '用户1' })
})
app.get('/user2', (req, res) => {
    res.sendFile(__dirname + "/views/user2.html", { title: '用户2' });
})

const port = 8998;
app.listen(port, (e) => {
    console.log(`地址：http://localhost:${port}/`)
    console.log(`地址：http://localhost:${port}/user1`)
    console.log(`地址：http://localhost:${port}/user2`)
})
