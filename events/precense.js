const client = require("../index");

client.on('ready', () => {

    const A= [
        {name: `https://www.twitch.tv/ja1rotv`,type:'STREAMING'},
      ];

    setInterval(() => {
      let activ=A[Math.floor(Math.random() * A.length)]

      function presence(){
        client.user.setPresence( {
          activities:[activ],
          status:`dnd`
       })}
       
      presence()


    }, 10000);


});