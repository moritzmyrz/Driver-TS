// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-voiceStateUpdate
import { TextChannel, VoiceChannel, VoiceState } from 'discord.js';
import BaseEvent from '../utils/structures/BaseEvent';
import DiscordClient from '../client/client';

export default class WoiceStateUpdateEvent extends BaseEvent {
  constructor() {
    super('voiceStateUpdate');
  }
  
  async run(client: DiscordClient, oldState: VoiceState, newState: VoiceState) {
    const member = oldState.member
    const staffChat = <VoiceChannel>client.channels.cache.get('719929887246254100');
    const staffKommandoer = <TextChannel>client.channels.cache.get('741801239045734452');
    const staffRole = '719930142604132482', sjefRole = '719617349912625293', botRole = '732380424751284245';
    if (member.roles.cache.has(sjefRole) || member.roles.cache.has(staffRole) || member.roles.cache.has(botRole)) return;

    if (oldState.channel === staffChat) {
      staffChat.updateOverwrite(member, {
        VIEW_CHANNEL: false
      })
      staffKommandoer.updateOverwrite(member, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false
      })
    }
    if (newState.channel === staffChat) {
      staffChat.updateOverwrite(member, {
        VIEW_CHANNEL: true
      })
      staffKommandoer.updateOverwrite(member, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
      })
    }
  }
}