🎗 PINTEREST

```ts
const { pidl } = require('ruhend-scraper.1.2')
const text = "link instagram" //https://Pinterest.com/xxxxxxx

let res = await pidl(text);
let data = await res.data;
console.log(res);
   for (let media of data) {
      new Promise(resolve => setTimeout(resolve, 2000));
      console.log(media.url)
      /* media.url is or are link of videos or images that just one by one
       * or do something with your project
       */
   }

```
