import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';
import ping from 'minecraft-server-util';

export default class StatusCommand extends BaseCommand {
  constructor() {
    super('Status', 'Spiller', ['server', 'online', 'pålogget']);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    ping('mc.fakeuber.xyz', 25565, (error, response) => {
      if (error) throw error;

      let embed = new MessageEmbed()
          .setTitle('FakeUBER')
          .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${response.host}`)
          .setColor('#fffb00')
          .setFooter(`${client.user.username} | !server`, client.user.displayAvatarURL())
          .addFields([
              {
                  name: 'IP-Addresse',
                  value: response.host,
                  inline: true
              },
              {
                  name: 'Pålogget',
                  value: `${response.onlinePlayers}/${response.maxPlayers}`,
                  inline: true
              }
          ]);
      
      message.channel.send(embed);
  });
  }
}