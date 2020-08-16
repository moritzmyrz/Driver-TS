import { MessageEmbed, TextChannel, User, Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;

export default class OppdateringCommand extends BaseCommand {
  constructor() {
    super('Oppdatering', 'Staff', [ 'opt' ]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const staff = '719930142604132482'
    const oppdateringsKanal = <TextChannel>client.channels.cache.get('719927990473064469');

    if (!message.member.roles.cache.has(staff)) {
      message.channel.send('Du har ikke tilgang til dette.');
      return;
    }

    if (!args[0]) {
      let noArgsEmbed = new MessageEmbed()
        .setTitle('Oppdatering')
        .setDescription(`
          Sender en oppdaterings-melding til <#719927990473064469>

          Bruk \`\`*\`\` for et nytt punkt, ikke lag en ny linje i meldingen din.
          Eksempel ->
          \`\`-opt *Lagt til fly-kommando. *Oppdatert regel 39.\`\`
        `);
      message.channel.send(noArgsEmbed);
      return;
    }

    console.log(message.content);

    let oppdatering = message.content.slice(5).split('*').join('\n· ')

    console.log(oppdatering);

    let embed = new MessageEmbed()
      .setColor('#158467')
      .setTitle(`${date}/${month}`)
      .setDescription(oppdatering);

    oppdateringsKanal.send('<@&743068390586974258>', embed)
      .then(m => {
        m.react(message.guild.emojis.cache.get('742127048822095992'))
        m.react(message.guild.emojis.cache.get('742127048474099804'))
      });
  }
}