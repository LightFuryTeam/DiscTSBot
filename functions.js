var Telnet = require('telnet-client')
var fullResponse
module.exports = { 
    getData : async function() {
      var connection = new Telnet()
      
      var params = {
        host: 'teamsepak.tk',
        port: 10011,
        timeout: 1500
      }
      
      connection.on("data", function(data){
        console.log(data+"");
        fullResponse = data.toString();
      });

      connection.on("connect", function(){
        connection.send("use sid=1\r\n");
        connection.send("channellist\r\n");
      });
      
      connection.connect(params).catch(function(error) {
        console.log('connection closed');
        MakeArray();
      });

      function MakeArray(){
        var ResponseSplit = fullResponse.split("|");
        for (var element = 0; element < ResponseSplit.length; element++) {
          var innerArrayLength = "" ;
          console.log(element+"\r\n");
          ReResponseSplit[element] = element.split(" ")
          ReResponseSplit.forEach(element =>{

          })
        };   
      }
    },

    clearMessages :  async function(amount, message) {
      message.channel.bulkDelete(amount).then(() => {
        message.channel.send(`Cleared ${amount} messages.`).then(msg => msg.delete(5000));
      }).catch(err => logError(err));
    }
}