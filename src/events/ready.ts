import BaseEvent from '../utils/structures/BaseEvent';
import DiscordClient from '../client/client';
import { Channel, GuildChannel, VoiceChannel } from 'discord.js';
const ping = require('minecraft-server-util');

export default class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client: DiscordClient) {
    console.log(client.user.tag + ' has logged in.');

    setInterval(() => {
      ping('mc.fakeuber.xyz', 25565, { protocolVersion: 498, connectTimeout: 1000 * 10 })
        .then((response) => {
            client.user.setActivity(`${response.onlinePlayers}/${response.maxPlayers} players`, {type:'WATCHING'});
        });
    }, 15000)
    const statusChannel = <GuildChannel>client.channels.cache.get('720963306671833149');
    setInterval(() => {
      ping('mc.fakeuber.xyz', 25565, { protocolVersion: 498, connectTimeout: 1000 * 10 })
        .then((response) => {
          statusChannel.setName(`Pålogget » ${response.onlinePlayers}`);
        })
        .catch((error) => {
          statusChannel.setName(`Status » ❌ Offline`);
        });
      }, 45000)
  }
}