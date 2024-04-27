const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const totalRoadLength = context.params.event.content.split(' ')[1] || 10;
const EMOJIS = [
  `🚗`,
  `🚃`,
  `🏎️`,
  `🚙`,
  `🚓`,
];

let currentPositions = EMOJIS.reduce((positions, emoji) => {
  positions[emoji] = 0;
  return positions;
}, {});

let embedGenerator = (iteration) => {
  let roadCharacter = '⬛';
  let description = EMOJIS.map((emoji) => {
    if (iteration > 0) {
      currentPositions[emoji] += Math.round(Math.random());
    }
    let hasFinished = currentPositions[emoji] >= totalRoadLength;
    let road = [
      roadCharacter.repeat(Math.min(currentPositions[emoji], totalRoadLength)),
      emoji,
      !hasFinished ? roadCharacter.repeat(totalRoadLength - 1 - currentPositions[emoji]) + '🏁' : '',
      roadCharacter
    ].join('');
    return road;
  }).concat([
    'Start your engines!'
  ]).join('\n');
  return {
    title: `Race`,
    description: description,
    color: 0xadacac,
  };
};

let sleep = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

if (context.params.event.content.startsWith('>race')) {
  let racemessage = await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `<@!${context.params.event.author.id}>`,
    embed: embedGenerator(0),
  });
  
  for (let i = 0; i < 25; i++) {
    await lib.discord.channels['@0.0.6'].messages.update({
      channel_id: context.params.event.channel_id,
      message_id: racemessage.id,
      content: `<@!${context.params.event.author.id}>`,
      embed: embedGenerator(i + 1),
    });
    let currentLeaders = Object.keys(currentPositions).reduce((currentLeaders, emoji) => {
      if (!currentLeaders.length || currentPositions[emoji] > currentPositions[currentLeaders]) {
        return [emoji];
      } else if (currentPositions[emoji] === currentPositions[currentLeaders[0]]) {
        currentLeaders.push(emoji);
        return currentLeaders
      } else {
        return currentLeaders;
      }
    }, []);
    if (currentPositions[currentLeaders[0]] >= totalRoadLength) {
      return lib.discord.channels['@0.1.2'].messages.create({
        channel_id: `${context.params.event.channel_id}`,
        content: `The race is over! Here's who won: ${currentLeaders.join(', ')}!`
      });
    }
    await sleep(1000); // Avoid rate limit
  }
}
