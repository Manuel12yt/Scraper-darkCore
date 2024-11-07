# ruhend-scraper.1.2

🎗 FACEBOOK

```ts
const { fbdl } = require('ruhend-scraper')
const text = "link Facebook" //https://Facebook.com/xxxxxxx

let res = await fbdl(text);
let data = await res.data;
console.log(rer); 
//or
console.log(data); 
   
```


🎗 INSTAGRAM

```ts
const { igdl } = require('ruhend-scraper')
const text = "link instagram" //https://instagram.com/xxxxxxx

let res = await igdl(text);
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
