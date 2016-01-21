DesireDesk.StartMenu = function(){
    this.startBG;
    this.titleText;
    this.startPrompt;
    this.menuGroup;

    var _this = this;
};

DesireDesk.StartMenu.prototype = {
    create: function () {
        this.startBG = this.add.image(0, 0, 'bg');
        this.startBG.width = this.world.width;
        this.startBG.height = this.world.height;

        this.titleText = this.add.bitmapText(this.world.centerX - 120, 30, 'eightbitwonder', 'Desire Desk', 24);

        //*****start btn*****
        this.startPrompt = this.add.bitmapText(this.world.centerX - 155, this.world._height - 50, 'eightbitwonder',
            'Touch to Start!', 24);
        this.startPrompt.inputEnabled = true;
        this.startPrompt.events.onInputDown.add(this.goTo, {stateToGo: 'Game'});

        InitMenu(this);

    },

    goTo: function () {
        stateService.start(this.stateToGo);
    }
};