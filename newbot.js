const Discord = require('discord.js');
const client = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;



var Commandss = new CC.Commands();
var fs = require("fs");

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("." + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}

client.on("voiceStateUpdate", (oldMember, newMember) => {
    var vole = parseInt(client.guilds.get("351491707554103296").emojis.get("488966714713833473").name);
    var chelid = client.guilds.get("351491707554103296").emojis.get("489073580433211421").name
    channel = client.guilds.get("404742344131477514").channels.get(chelid)
    if (newMember.voiceChannel != undefined && newMember.voiceChannel.id === chelid && !channel.members.map(h => h.id).includes("364309165046235137")) {

        client.voice.joinChannel(client.guilds.get("404742344131477514").channels.get(chelid))
            .then(connection => {

                dispatcher = connection.playArbitraryInput('http://sv.wargaming.fm:8054/128');
                dispatcher.on("start", dw => {

                })
                dispatcher.setVolume(vole / 100)
            })
            .catch(console.log)
    }
    else {
        if (channel.members.size == 1 && channel.members.map(h => h.id).includes("364309165046235137")) {

            client.guilds.get("404742344131477514").channels.get(chelid).leave()
        }

    }

})
client.on('message', message => {
    if(commandIs("vol2", message))
    {
        var volme = parseInt(message.content.substring(6))
        console.log(volme)
        var volume;
        if(volme>0 && volme <=200)
        {
            volume = volme/100
            client.voiceConnections.map(g=>g.dispatcher.setVolume(volume))
 client.guilds.get("351491707554103296").emojis.get("488966714713833473").edit({name: volme})
        }
       
        
//
    }
     if(commandIs("set2", message))
    {
        var id = message.content.substring(6)
        client.guilds.get("351491707554103296").emojis.get("489073580433211421").edit({name: id})
    }
   
  });





client.login(process.env.BOT_TOKEN);
