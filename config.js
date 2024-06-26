const { Client, MessageEmbed } = require('discord.js');

const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (message.content === '!update') {
    const embed = new MessageEmbed()
      .setTitle('')
      .setDescription('**Ben2 - Update Log**')
      .setColor('#EA9A59')
      .addFields(
        { name: 'Version 2.5.7:', value: `
          - Added *>general*.
          - Updated all commands.
          - Minor embed changes.
          - Major bug fixes`
        }
      )
      .setFooter('Made with 🧡 by Buuya', 'https://cdn.discordapp.com/avatars/700173927871152131/a_9ebf8f2b2a2db0fb9f3a50b9e53b89e0.webp?size=128');

    try {
      const channel = await client.channels.fetch('986640659324747816'); // Fetch the channel by ID
      if (channel && channel.type === 'text') {
        await channel.send({ embeds: [embed] });
      } else {
        console.error('Channel not found or not a text channel.');
      }
    } catch (error) {
      console.error('Error fetching or sending message:', error);
    }
  }
});

client.login(process.env.DISCORD_TOKEN); // Replace DISCORD_TOKEN with your actual Discord bot token