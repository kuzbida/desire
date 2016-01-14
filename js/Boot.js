var DesireDesk = {};

DesireDesk.Boot = function(game) {};

DesireDesk.Boot.prototype = {
    preload: function () {
        this.load.image('preloaderBar', 'assets/images/loader.gif');
        this.load.image('bg', 'assets/images/bg.jpg');
        this.load.bitmapFont('eightbitwonder', 'assets/fonts/eightbitwonder.png', 'assets/fonts/eightbitwonder.fnt');
    },

    create: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 480;
        this.scale.minHeight = 270;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        //this.scale.setScreenSize(true);

        this.input.addPointer();
//        this.stage.backgroundColor = '#171642';

        this.state.start('Preloader')
    }
};