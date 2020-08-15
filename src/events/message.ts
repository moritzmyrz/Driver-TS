import BaseEvent from '../utils/structures/BaseEvent';
import { Message } from 'discord.js';
import DiscordClient from '../client/client';

export default class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }

  async run(client: DiscordClient, message: Message) {
    if (message.author.bot) return;
    if (message.channel.id !== '726574778747715615') {
      if (message.content.startsWith('!lmgtfy')) {}
      else if (message.content.startsWith('!') || message.content.startsWith('-')) {
        if (message.author.id !== '381453904749002756') {
          message.delete({ timeout: 15000 });
          message.channel.send(`<@${message.author.id}>, vi har en egen kanal for kommandoer. ->> <#726574778747715615> <<-`)
            .then(message => message.delete({ timeout: 15000 }));
        }
      }
    }
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
        .slice(client.prefix.length)
        .trim()
        .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}