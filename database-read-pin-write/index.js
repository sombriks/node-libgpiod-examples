import gpiod from "node-libgpiod"
import mysql from "mysql2"

const conn = mysql.createConnection({
  database: "gpiodb",
  user: "gpiousr",
  password: "gpiopwd",
  host: "thanatos.local",
  //host: "localhost",
})

let current = 0
const ops = [()=> console.log("no operation")]
const delay = 3000
let timerId = null

conn.query("select * from pins", (err, result) => {

  if (err) throw err

  result.forEach(p => {
    ops.push(() => {
      console.log(`pin ${JSON.stringify(p)}`)
      const pin = gpiod.Pin(p.pin)
      pin.requestOutputMode()
      pin.setValue(p.val)
      pin.release()
      current++
    })
  })
  ops.push(() => {
    clearInterval(timerId)
    conn.destroy()
  })
  current++ // play 
  
})

timerId = setInterval(() => ops[current](), delay)
