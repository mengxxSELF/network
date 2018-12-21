const net = require('net')
const client = net.createConnection(8001, 'localhost', () => {
  console.log('connent')
  // 这里写入的是请求报文 头部 
  client.write(
    ''
  )
})

client.on('data', (data) => {
  console.log('data', data.toString())
})

// 表示数据传输完毕
client.on('end', (data) => {
  console.log('connent end')

})
