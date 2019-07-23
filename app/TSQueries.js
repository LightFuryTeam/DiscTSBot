require('telnet-client')

async function connect() {
    let connection = new Telnet()

    let params = {
        host: 'teamsepak.tk',
        port: 10011,
        shellPrompt: '/ # ',
        timeout: 1500
    }

    try {
        await connection.connect(params)
      } catch(error) {
        // handle the throw (timeout)
      }
}