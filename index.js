const { Client, MessageAttachment } = require('discord.js');

const commands = {
  '!person': 'https://thispersondoesnotexist.com/image',
  '!cat': 'https://thiscatdoesnotexist.com',
  '!horse': 'https://thishorsedoesnotexist.com',
  '!art': 'https://thisartworkdoesnotexist.com'
};

const client = new Client();

client.on('message', message => {
  if (message.content in commands) {
    message.channel.send(new MessageAttachment(commands[message.content], 'thing.jpg'));
  }
});

client.login(process.env.DISCORD_TOKEN);
