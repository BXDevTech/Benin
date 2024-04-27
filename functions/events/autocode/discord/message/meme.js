const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const axios = require('axios');
let subreddits = [
  'dankmemes',
  'memes',
  'ComedyCemetery',
  'PrequelMemes',
  'terriblefacebookmemes',
  'PewdiepieSubmissions',
  'funny',
  'AdviceAnimals',
  'MemeEconomy',
  'meme',
];
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

if (context.params.event.content.startsWith('>meme')) {
  let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
  let link = `https://meme-api.herokuapp.com/gimme/${subreddit}`;
  let {data} = await axios(link);

  let author = titleCase(data.author);
  let title = titleCase(data.title);
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: ``,
    "allowed_mentions": {
       "replied_user": false
     },
     "message_reference": {
       "message_id": context.params.event.id
     },
    tts: false,
    embed: {
      type: 'rich',
      title: title,
      description: '',
      color: 0xEA9A59,
      image: {
        url: data.url,
        height: 100,
        width: 100,
      },
      footer: {
        text: 'Hits : ' + data.ups + '\ud83d\udc4d | Posted By : ' + author,
      },
    },
  });
}

//BuuyaXDev
