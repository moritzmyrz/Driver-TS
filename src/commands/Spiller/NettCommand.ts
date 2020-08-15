import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class NettCommand extends BaseCommand {
  constructor() {
    super('Nett', 'Spiller', ['lenker']);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    let embed = new MessageEmbed()
        .setTitle('FakeUBER Lenker')
        .setColor('#FFFF55')
        .setThumbnail('https://eu.mc-api.net/v3/server/favicon/mc.fakeuber.xyz')
        .setFooter(`${client.user.username} | !web`, client.user.displayAvatarURL())
        .addFields([
            {
                name: 'Nettside',
                value: '[Trykk Her](https://fakeuber.xyz/)',
                inline: true
            },
            {
                name: 'Regler',
                value: '[Trykk Her](https://www.fakeuber.xyz/regler/)',
                inline: true
            },
            {
                name: 'Kart',
                value: '[Trykk Her](http://kart.fakeuber.xyz/)',
                inline: true
            },
            {
                name: 'Stem',
                value: '[Trykk Her](https://www.fakeuber.xyz/stem/)',
                inline: true
            }
        ]);

    message.channel.send(embed);
  }
}