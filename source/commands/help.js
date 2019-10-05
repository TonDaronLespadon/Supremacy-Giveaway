const Command = require("../handlers/command.js");

module.exports = class extends Command {
    constructor(client, filePath) {
        super(client, filePath, {
            name: "help",
        });
    }

    execute(message) {
        //message.author.send("```mcreate <time-in-seconds> <giveaway-title>\nmg!delete <giveaway-id>```");
        message.channel.send('Salut! Je suis connu comme Supremacy. Bien que mes origines soient pour la plupart inconnues.\nHa. Quels imbéciles. Dites-moi, cherchez-vous à faire un Giveaway automatisé? J\'ai la chose parfaite pour toi. Essayez $Invite pour me mettre sur votre serveur, puis lancez votre propre Giveway en utilisant mes commandes \`\`$commands\`\` Je te verrai bientôt.');
    }
};