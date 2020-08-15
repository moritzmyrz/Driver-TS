import { MessageEmbed, TextChannel, User, Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;

export default class OppdateringCommand extends BaseCommand {
  constructor() {
    super('Oppdatering', 'Admin', [ 'opt' ]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const moritz = '381453904749002756';
    const author = <User>message.author;
    const oppdateringsKanal = <TextChannel>client.channels.cache.get('719927990473064469');

    if (author.id != moritz) {
      message.channel.send('Du har ikke tilgang til dette.');
      return;
    }

    console.log(message.content);

    let oppdatering = message.content.slice(5).split('*').join('\n· ')

    console.log(oppdatering);

    let embed = new MessageEmbed()
      .setTitle(`${date}/${month}`)
      .setDescription(oppdatering);

    oppdateringsKanal.send('<@&743068390586974258>', embed)
      .then(m => {
        m.react(message.guild.emojis.cache.get('742127048822095992'))
        m.react(message.guild.emojis.cache.get('742127048474099804'))
      });
  }
}