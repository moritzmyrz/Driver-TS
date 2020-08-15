// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
import { GuildMember, TextChannel, MessageEmbed } from 'discord.js';
import BaseEvent from '../utils/structures/BaseEvent';
import DiscordClient from '../client/client';

export default class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client: DiscordClient, member: GuildMember) {
    const guild = client.guilds.cache.get('718959642482573343');
    const spillerRole = guild.roles.cache.get('729077085905092739');
    const moritz = client.users.cache.get('381453904749002756');

    member.roles.add(spillerRole)
      .catch(err => moritz.send(err));

    // Welcome Embed
    const embed = new MessageEmbed()
      .setTitle(`Velkommen, ${member.displayName}`)
      .setDescription(
        `Velkommen til FakeUBER, <@${member.id}>. Ta en titt innom <#719263828268810371>!`
      )
      .setTimestamp()
      .setColor("#41fc03")
      .setThumbnail(guild.iconURL())
      .setFooter(`${member.user.tag}`, `${member.user.displayAvatarURL()}`);

    const welcomeChannel = <TextChannel>client.channels.cache.get("719639885350305883");
    welcomeChannel.send(embed);

  }
}