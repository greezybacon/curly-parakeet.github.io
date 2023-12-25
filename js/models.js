var builders = [],
    tools = [];

function ARModel(name, dialogue) {
    //we can make name link to the el id to find it on click?
    this.name = name;
    this.dialogue = dialogue;
    

}

ARModel.prototype.speak = function() {
    return this.dialogue;   
}

//Builder model
function Builder(name, dialogue, tool, successDialogue) {
    ARModel.call(this, name, dialogue);
    this.tool = tool;
    this.successDialogue = successDialogue;
}

Builder.prototype = Object.create(ARModel.prototype);

//Tool model
function Tool(name, dialogue) {
    ARModel.call(this, name, dialogue);
}

Tool.prototype = Object.create(ARModel.prototype);

function initiateModels() {
    var buildersArray = [
      {
        name: 'snowman',
        dialogue: "Hi there, I'd really like a snow flurry. Let me know if you see it! Maybe with the cold things?",
        tool: new Tool('snowcloud', "You've found the snowman's snow flurry!"),
        successDialogue: 'Thanks for my flurry! Please check under where the coats hang for your reward!'
      },
      {
        name: 'one',
        dialogue: "Congratulations! Look for an angel in the church pew..."
      },
      {
        name: 'angel',
        dialogue: 'Hey, I\'m Angel! I left my candles in the kitchen... can you help me find it?',
        tool: new Tool('candle', 'You have found Angel\'s candle!'),
        successDialogue: 'My candle! Check under the aquarium for your reward!'
      },
      {
        name: 'two',
        dialogue: "Congratulations! Share your booty! Look for a climbing elf..."
      },
      {
        name: 'elf',
        dialogue: 'Merry Christmas! I\'d really like a campfire. Have you seen one?',
        tool: new Tool('campfire', 'You have found Elf\'s campfire!'),
        successDialogue: 'Merci! Check with the s\'mores for your reward!'
      },
      {
        name: 'three',
        dialogue: "Congratulations! Share your booty! Look next for a reindeer at the door",
      },
      {
        name: 'reindeer',
        dialogue: 'Merry Christmas! I was left behind. Could you bring me a cookie and coffee while I wait for my ride?',
        tool: new Tool('cookie', 'You have found reindeer\'s cookie!'),
        successDialogue: 'Thanks for the cookie! Wanna play a board game too?'
      },
      {
        name: 'four',
        dialogue: "You win! Share the booty. Your stockings are hiding behind the tree..."
      },
      {
        name: 'demo',
        dialogue: "Hello! I think I saw a snowman with 'the Internet'."
      }
    ];

    buildersArray.forEach(function(builder){
        builders.push(new Builder(builder.name, builder.dialogue, builder.tool, builder.successDialogue));
        if (builder.tool) tools.push(builder.tool);
    });

    console.log('builders', builders);
    console.log('tools', tools)
}

initiateModels();
