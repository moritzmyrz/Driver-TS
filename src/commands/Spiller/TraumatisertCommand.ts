import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class TraumatisertCommand extends BaseCommand {
  constructor() {
    super('Traumatisert', 'Spiller', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    message.channel.send(`
        Bruk følgende format:
        \`\`\`
        Ting:
        Meta:
        Koordinater:
        \`\`\`
      `);
  }
}