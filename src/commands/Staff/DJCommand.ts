import { GuildMember, Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class DJRoleCommand extends BaseCommand {
  constructor() {
    super('dj', 'Staff', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const guild = client.guilds.cache.get('718959642482573343');
    const staff = '719930142604132482', sjef = '719617349912625293';
    const djRole = guild.roles.cache.get('744230100010139668');
    const djRoleID = djRole.id;
    var mentioned = <GuildMember>message.mentions.members.first();

    if (!mentioned) {
      var mentioned = guild.members.cache.find(m => m.nickname == args[0]);
    } else if (mentioned) {
      var mentioned = <GuildMember>message.mentions.members.first();
    }

    if (!message.member.roles.cache.has(staff)) {
      message.channel.send('Du har ikke tilgang til dette.')
      return;
    } else if (message.member.roles.cache.has(staff)) {
      if (mentioned.roles.cache.has(djRoleID)) {
        mentioned.roles.remove(djRole);
        let staffEmbed = new MessageEmbed()
          .setTitle('DJ-Rolle Fjernet')
          .setDescription(`
            Du har fjernet DJ-rollen fra <@${mentioned.user.id}>.
          `);
        message.channel.send(staffEmbed);
        let mentionedEmbed = new MessageEmbed()
          .setTitle('DJ-rollen din er fjernet.')
          .setDescription(`
            Din DJ-rolle er nå fjernet.
          `);
        mentioned.send(mentionedEmbed);
      } else if (!mentioned.roles.cache.has(djRoleID)) {
        mentioned.roles.add(djRole);
        let staffEmbed = new MessageEmbed()
          .setTitle('DJ-Rolle Gitt')
          .setDescription(`
            Du har gitt DJ-rollen til <@${mentioned.user.id}>.
          `);
        message.channel.send(staffEmbed);
        let mentionedEmbed = new MessageEmbed()
          .setTitle('Du er nå en DJ!')
          .setDescription(`
            <@${message.author.id}> ga deg DJ-rollen.
          `);
        mentioned.send(mentionedEmbed);
      }
    }

  }
}