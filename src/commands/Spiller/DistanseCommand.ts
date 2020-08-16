import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class DistanseCommand extends BaseCommand {
  constructor() {
    super('distanse', 'Spiller', [ 'distance', 'dis' ]);
  }

  async run(client: DiscordClient, message: Message, args: Array<any>) {
    let devMode = false;
    if (devMode) message.delete();

    let noArgs = new MessageEmbed()
        .setTitle('Distanse')
        .setColor('#f5e042')
        .setDescription('Denne kommandoen måler horisontal distanse \nmellom punkt a (x1 z1) og punkt b (x2 z2).\n\n-distanse x1 z1 x2 z2');

    let formatError = new MessageEmbed()
        .setTitle('Feil')
        .setColor('#ff0000')
        .setDescription('Bruk følgende format:\n-distanse x1 z1 x2 z2');

    let intError = new MessageEmbed()
        .setTitle('Feil')
        .setColor('#ff0000')
        .setDescription('Koordinatene skal være tall. Bruk følgende format:\n\n-distanse x1 z1 x2 z2');

    let embed = new MessageEmbed()
        .setTitle('Distanse')
        .setColor('#4bf542')
        .setFooter(`${client.user.username} | -distanse`, client.user.displayAvatarURL())
        .addFields([
            {
                name: 'Pos 1 X Z',
                value: `${args[0]} ${args[1]}`,
                inline: true
            },
            {
                name: 'Pos 2 X Z',
                value: `${args[2]} ${args[3]}`,
                inline: true
            },
            {
                name: 'Distanse',
                value: `${Math.round(dist(args[0], args[1], args[2], args[3]))} Blokker`,
                inline: true
            }
        ])

    if (args.length != 4 && args.length != 0) {
        message.channel.send(formatError).then(m => m.delete({timeout:15000}));
        message.delete({timeout:15000});
        return;
    } else if (args.length == 0) {
        message.channel.send(noArgs).then(m => m.delete({timeout:60000}));
        message.delete({timeout:60000});
        return;
    } else {

        if (isNaN(args[0])) {
          message.channel.send(intError).then(m => m.delete({timeout:15000}));
          message.delete({timeout:15000});
          return;
        }
        if (isNaN(args[1])) {
          message.channel.send(intError).then(m => m.delete({timeout:15000}));
          message.delete({timeout:15000});
          return;
        }
        if (isNaN(args[2])) {
          message.channel.send(intError).then(m => m.delete({timeout:15000}));
          message.delete({timeout:15000});
          return;
        }
        if (isNaN(args[3])) {
          message.channel.send(intError).then(m => m.delete({timeout:15000}));
          message.delete({timeout:15000});
          return;
        }

        message.channel.send(embed);

    }
  }
}

function dist (x1, y1, x2, y2) {
  var deltaX = diff(x1, x2);
  var deltaY = diff(y1, y2);
  var dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  return (dist);
};

function diff (num1, num2) {
  if (num1 > num2) {
    return (num1 - num2);
  } else {
    return (num2 - num1);
  }
};