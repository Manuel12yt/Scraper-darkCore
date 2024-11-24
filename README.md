🎗 FACEBOOK

```ts
const { fbdl } = require('ruhend-scraper.1.2')
const text = "link Facebook" //https://Facebook.com/xxxxxxx

let res = await fbdl(text);
let data = await res.data;
console.log(rer); 
//or
console.log(data); 
   
```


🎗 INSTAGRAM

```ts
const { igdl } = require('ruhend-scraper.1.2')
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

🎗 YOUTUBE - SEARCH

```ts
const { ytsdl } = require('ruhend-scraper.1.2')
const text = "link instagram" //https://youtube.com/xxxxxxx

let res = await ytsdl(text);
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

🎗 YOUTUBE - MP4

```ts
const { downloadMP4 } = require('ruhend-scraper.1.2')
const text = "link instagram" //https://youtube.com/xxxxxxx

let res = await downloadMP4(text);
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

🎗 YOUTUBE - MP3

```ts
const { downloadMP3 } = require('ruhend-scraper.1.2')
const text = "link instagram" //https://youtube.com/xxxxxxx

let res = await downloadMP3(text);
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
