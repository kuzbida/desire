function InitMenu(_this) {
    function goTo () {
        stateService.start(this.stateToGo);
    }

    function toggleMenu () {
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
    }
    //*****menu btn*****
    var menuButton = _this.add.button(_this.world._width - 50, 50, "menu", toggleMenu, _this);
    menuButton.anchor.set(0.5);
    menuButton.width = 70;
    menuButton.height = 70;

    //*****menu list*****
    _this.menuGroup = _this.add.group();
    _this.menuGroup.enableBody = true;
    _this.menuGroup.stage.backgroundColor = '#171642';
    _this.menuGroup.stage.width = 200;
    _this.menuGroup.stage.height = _this.world._height;
    _this.menuGroup.z = 1;

    var menuHelp = _this.add.text(_this.world._width + 100, 200, 'Help', { font: "32px Arial", fill: '#3F51B5'});
    menuHelp.inputEnabled = true;
    menuHelp.events.onInputDown.add(goTo, {stateToGo: 'Help'});
    _this.menuGroup.add(menuHelp);

    var menuFriends = _this.add.text(_this.world._width + 100, 250, 'Friends', { font: "32px Arial", fill: '#3F51B5'});
    menuFriends.inputEnabled = true;
    menuFriends.events.onInputDown.add(goTo, {stateToGo: 'Friends'});
    _this.menuGroup.add(menuFriends);

    var menuSupport = _this.add.text(_this.world._width + 100, 350, 'Support', { font: "32px Arial", fill: '#3F51B5'});
    menuSupport.inputEnabled = true;
    menuSupport.events.onInputDown.add(goTo, {stateToGo: 'Support'});
    _this.menuGroup.add(menuSupport);

    var menuWhy = _this.add.text(_this.world._width + 100, 400, 'Why', { font: "32px Arial", fill: '#3F51B5'});
    menuWhy.inputEnabled = true;
    menuWhy.events.onInputDown.add(goTo, {stateToGo: 'Why'});
    _this.menuGroup.add(menuWhy);
    
    
}