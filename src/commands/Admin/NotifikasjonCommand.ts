import { Message, MessageEmbed, TextChannel } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class NotifikasjonCommand extends BaseCommand {
  constructor() {
    super('Notifikasjon', 'Admin', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const moritz = '381453904749002756';
    const rollerKanal = <TextChannel>client.channels.cache.get('743064308497383455');
    if (message.author.id != moritz) {
      message.channel.send('Du har ikke tilgang til dette.');
      return;
    } 

    notifikasjon();

    function notifikasjon() {
      const notifikasjon = new MessageEmbed()
        .setColor('#158467')
        .setTitle('Notifikasjoner');

      rollerKanal.send(notifikasjon);
      rollerKanal.send(`
        :new: - Hold deg oppdatert på nye oppdateringer!
        :loudspeaker: - Få notifikasjoner når det kommer en ny kunngjøring!
      `);
    }
  }
}