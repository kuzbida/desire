DesireDesk.StartMenu = function(){
    this.startBG;
    this.titleText;
    this.startPrompt;
    this.menuIcon;
    this.menuOpen = false;
};

DesireDesk.StartMenu.prototype = {
    create: function () {
        this.startBG = this.add.image(0, 0, 'bg');
        this.startBG.inputEnabled = true;
        this.startBG.width = this.world.width;
        this.startBG.height = this.world.height;

        this.titleText = this.add.bitmapText(this.world.centerX - 120, 30, 'eightbitwonder', 'Desire Desk', 24);

        this.startPrompt = this.add.bitmapText(this.world.centerX - 155, this.world.centerY - 30, 'eightbitwonder', 'Touch to Start!', 24);
        this.startPrompt.inputEnabled = true;
        this.startPrompt.events.onInputDown.add(this.startGame, this);

        this.menuIcon = this.add.image(this.world._width - 100, 10, 'menu');
        this.menuIcon.width = 70;
        this.menuIcon.height = 70;
        this.menuIcon.inputEnabled = true;
        this.menuIcon.events.onInputDown.add(this.toggleMenu, this)
    },

    startGame: function (pointer) {
        this.state.start('Game');
    },

    toggleMenu: function (pointer) {
        console.log(pointer);
    }
};