import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class LMGTFYCommand extends BaseCommand {
  constructor() {
    super('lmgtfy', 'Spiller', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const content = message.content.slice(8).split(' ').join('+');
    if (!args[0]) {
        message.channel.send(`Bruk kommandoen følgende: \`\`-lmgtfy <søk>\`\``)
        return;
    }
    message.channel.send(`https://lmgtfy.com/?q=${content}&iie=1`);
  }
}