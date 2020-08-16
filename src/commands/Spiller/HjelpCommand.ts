import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class HjelpCommand extends BaseCommand {
  constructor() {
    super('hjelp', 'Spiller', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const staff = '719930142604132482'
    var hjelpEmbed = new MessageEmbed()
      .setTitle('Hjelp')
      .setDescription(`
        Driver er FakeUBER's Discord-bot. Den blir brukt til og automatisere ting, som for eksempel spillertall i Discord.

        Driver har også noen kommandoer, alle kommandoer starter med \`\`-\`\`.
        <> = nødvendig, [] = valgfritt.
      `)
      .addFields([
        {
          name: '-distanse <x1> <z1> <x2> <z2>',
          value: 'Måler distanse mellom to koordinater.',
          inline: true
        },
        {
          name: '-lmgtfy <søk>',
          value: 'Når noen ikke orker og bruke Google.',
          inline: true
        },
        {
          name: '-nett',
          value: 'Gir deg nyttige lenker til nettsiden.',
          inline: true
        },
        {
          name: '-status',
          value: 'Viser deg server-statuset, IP, antall pålogget o.l.',
          inline: true
        }
      ]);
    if (!message.member.roles.cache.has(staff)) {
      message.channel.send(hjelpEmbed);
    } else if (message.member.roles.cache.has(staff)) {
      hjelpEmbed.addFields([
        {
          name: '(STAFF) -dj <bruker>',
          value: 'Gir brukeren DJ-rollen til og kontrollere <@235088799074484224> & <@252128902418268161>.',
          inline: true
        },
        {
          name: '(STAFF) -opt <oppdateringer> (separert med ``* ``)',
          value: 'Sender en oppdaterings-melding til <#719927990473064469>.',
          inline: true
        }
      ]);
      message.channel.send(hjelpEmbed);
    }
  }
}