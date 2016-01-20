DesireDesk.Game = function (game) {
    this.leftImage;
    this.rightImage;
    this.imageSetNum = 1;
    this.step = 1;
    this.checkedImages = {};
    this.newImages = [
        {name: 'image1', src: 'assets/images/test/1.jpg'},
        {name: 'image2', src: 'assets/images/test/2.jpg'},
        {name: 'image3', src: 'assets/images/test/3.jpg'},
        {name: 'image4', src: 'assets/images/test/4.jpg'},
        {name: 'image5', src: 'assets/images/test/5.jpg'},
        {name: 'image6', src: 'assets/images/test/6.jpg'},
        {name: 'image7', src: 'assets/images/test/7.jpg'},
        {name: 'image8', src: 'assets/images/test/8.jpg'}
    ];
};

DesireDesk.Game.prototype = {
    preload: function () {
        this.startBG = this.add.image(0, 0, 'bg');
        this.startBG.width = this.world.width;
        this.startBG.height = this.world.height;
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(this.preloadBar);

        //preloading images set
        for(var i = 0; i < this.newImages.length; i++){
            this.load.image(this.newImages[i].name, this.newImages[i].src);
        }

    },

    create: function () {
        this.preloadBar.destroy();
        this.textBelow = this.add.text(this.world.centerX - 100, this.world.height - 100, 'Make Your Choise', {fill: '#fff'});
        this.titleText = this.add.text(this.world.centerX - 100, 30, 'Board of Dream', {fill: '#fff', size: 50});


    },

    update: function () {
        this.leftImage = this.add.image(100, 200, 'image' + this.imageSetNum);
        this.leftImage.width = this.world.width / 3;
        this.leftImage.height = this.world.height / 3;
        this.leftImage.inputEnabled = true;
        this.leftImage.events.onInputDown.add(this.chooseImg, this);

        this.rightImage = this.add.image(this.world.centerX + 100, 200, 'image' + (this.imageSetNum+1));
        this.rightImage.width = this.world.width / 3;
        this.rightImage.height = this.world.height / 3;
        this.rightImage.inputEnabled = true;
        this.rightImage.events.onInputDown.add(this.chooseImg, this);
    },

    chooseImg: function (text, pointer) {
        this.checkedImages[this.step+'_step'] = text.key;
        console.log(this.checkedImages);
        this.step++;
        this.imageSetNum = this.step + 1;
        if(this.step === 5) {
            this.state.start('Result', true, false, this.checkedImages);
        }
    }
};