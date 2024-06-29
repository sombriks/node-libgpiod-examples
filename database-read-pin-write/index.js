import gpiod from "node-libgpiod"
import mysql from "mysql2"

const conn = mysql.createConnection({
  database: 'gpiodb',
  user: 'gpiousr',
  password: 'gpiopwd',
  host: 'localhost',
});

conn.query("select * from pins", (err, result) => {

  if (err) throw err

  result.forEach(p => {
    console.log(`pin ${JSON.stringify(p)}`)
    const pin = gpiod.Pin(p.pin)
    pin.requestOutputMode()
    pin.setValue(p.val)
    pin.release()
  })
  conn.close();
})

