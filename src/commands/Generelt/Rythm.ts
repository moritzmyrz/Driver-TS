import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class RythmHelpCommand extends BaseCommand {
  constructor() {
    super('rythm', 'Generelt', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    let rythmEmbed = new MessageEmbed()
      .setTitle('Rythm Kommandoer')
      .setDescription(`
        <@235088799074484224> (og <@252128902418268161>) er to musikk-botter som spiller musikk i stemme-kanaler.
        Prefix: \`\`!(1) og -(2)\`\`
        Aliaser er separert med komma (\`\`,\`\`)

        !bassboost - \`\`bass, bb\`\`
        !clear - \`\`cl\`\`
        !debug - \`\`shard\`\`
        !disconnect - \`\`dc, leave, dis, fuckoff\`\`
        !donate - \`\`patreon\`\`
        !effects - \`\`effect\`\`
        !forceskip - \`\`fskip, fs\`\`
        !forward - \`\`fwd\`\`
        !grab - \`\`save\`\`
        !invite - \`\`links\`\`
        !join - \`\`summon, fuckon\`\`
        !leavecleanup - \`\`lc\`\`
        !loop - \`\`repeat\`\`
        !qloop - \`\`loopqueue, lq, queueloop\`\`
        !lyrics - \`\`l, ly\`\`
        !move - \`\`m, mv\`\`
        !nightcore - \`\`weeb\`\`
        !nowplaying - \`\`np\`\`
        !pause - \`\`stop\`\`
        !play - \`\`p\`\`
        !playskip - \`\`ps, pskip, playnow, pn\`\`
        !playtop - \`\`pt, ptop\`\`
        !prune - \`\`purge, clean\`\`
        !queue - \`\`q\`\`
        !remove - \`\`rm\`\`
        !removedupes - \`\`rmd, rd, drm\`\`
        !resume - \`\`re, res, continue\`\`
        !rewind - \`\`rwd\`\`
        !search - \`\`find\`\`
        !shuffle - \`\`random\`\`
        !skipto - \`\`st\`\`
        !slowed - \`\`sad\`\`
        !soundcloud - \`\`sc\`\`
        !volume - \`\`vol\`\`
        !voteskip - \`\`skip, next, s\`\`
      `);

      message.channel.send(rythmEmbed);
  }
}