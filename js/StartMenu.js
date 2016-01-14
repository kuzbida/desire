DesireDesk.StartMenu = function(){
    this.startBG;
    this.startPrompt;
};

DesireDesk.StartMenu.prototype = {
    create: function () {
        this.startBG = this.add.image(0, 0, 'bg');
        this.startBG.inputEnabled = true;
        this.startBG.width = this.world.width;
        this.startBG.height = this.world.height;

        this.startPrompt = this.add.bitmapText(this.world.centerX - 155, 30, 'eightbitwonder', 'Touch to Start!', 24);
        this.startPrompt.inputEnabled = true;
        this.startPrompt.events.onInputDown.add(this.startGame, this);
    },

    startGame: function (pointer) {
        this.state.start('Game');
    }
};