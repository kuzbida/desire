DesireDesk.Result = function(){
    this.startBG;
    this.titleText;
    this.menuGroup;
    this.checkedImages;

    var _this = this;
};

DesireDesk.Result.prototype = {
    init: function(checkedImages) {
        this.checkedImages = checkedImages;
    },

    create: function () {
        this.startBG = this.add.image(0, 0, 'bg');
        this.startBG.width = this.world.width;
        this.startBG.height = this.world.height;

        this.titleText = this.add.bitmapText(this.world.centerX - 120, 30, 'eightbitwonder', 'Your result', 24);


        //*****menu btn*****
        var menuButton = this.add.button(this.world._width - 50, 50, "menu", this.toggleMenu, this);
        menuButton.anchor.set(0.5);
        menuButton.width = 70;
        menuButton.height = 70;

        //*****menu list*****
        this.menuGroup = this.add.group();
        this.menuGroup.enableBody = true;
        this.menuGroup.stage.backgroundColor = '#171642';
        this.menuGroup.stage.width = 200;
        this.menuGroup.stage.height = this.world._height;
        this.menuGroup.z = 1;

        var menuHelp = this.add.text(this.world._width + 100, 200, 'Help', { font: "32px Arial", fill: '#3F51B5'});
        menuHelp.inputEnabled = true;
        menuHelp.events.onInputDown.add(this.goTo, {stateToGo: 'Help'});
        this.menuGroup.add(menuHelp);

        var menuFriends = this.add.text(this.world._width + 100, 250, 'Friends', { font: "32px Arial", fill: '#3F51B5'});
        menuFriends.inputEnabled = true;
        menuFriends.events.onInputDown.add(this.goTo, {stateToGo: 'Friends'});
        this.menuGroup.add(menuFriends);

        var menuSupport = this.add.text(this.world._width + 100, 350, 'Support', { font: "32px Arial", fill: '#3F51B5'});
        menuSupport.inputEnabled = true;
        menuSupport.events.onInputDown.add(this.goTo, {stateToGo: 'Support'});
        this.menuGroup.add(menuSupport);

        var menuWhy = this.add.text(this.world._width + 100, 400, 'Why', { font: "32px Arial", fill: '#3F51B5'});
        menuWhy.inputEnabled = true;
        menuWhy.events.onInputDown.add(this.goTo, {stateToGo: 'Why'});
        this.menuGroup.add(menuWhy);


        this.resultGroup = this.add.group();
        this.resultGroup.enableBody = true;
        this.resultGroup.z = 1;

    },

    toggleMenu: function () {
        if(this.menuGroup.x == 0){
            var menuTween = this.add.tween(this.menuGroup).to({
                x: -250
            }, 500, Phaser.Easing.Bounce.Out, true);
        }
        if(this.menuGroup.x == -250){
            var menuTween = this.add.tween(this.menuGroup).to({
                x: 0
            }, 500, Phaser.Easing.Bounce.Out, true);
        }
    },

    goTo: function () {
        stateService.start(this.stateToGo);
    }
};