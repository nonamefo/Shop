document.onclick = event => {
   if (event.target.dataset) {
       const fs = require('fs');
       fs.writeFile('basket.json', JSON.stringify({}), (err) => {
           if (err) console.log(err);
           else console.log('Successfully written!');
       })
   }
};

