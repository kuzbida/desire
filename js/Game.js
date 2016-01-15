DesireDesk.Game = function (game) {
    this.leftImage;
};

DesireDesk.Game.prototype = {
    preload: function () {
        this.startBG = this.add.image(0, 0, 'bg');
        this.startBG.width = this.world.width;
        this.startBG.height = this.world.height;


        this.load.image('image1', 'assets/images/test/1.jpg');
        this.load.image('image2', 'assets/images/test/2.jpg');
        this.load.image('image3', 'assets/images/test/3.jpg');
        this.load.image('image4', 'assets/images/test/4.jpg');
        this.load.image('image5', 'assets/images/test/5.jpg');
        this.load.image('image6', 'assets/images/test/6.jpg');
        this.load.image('image7', 'assets/images/test/7.jpg');
        this.load.image('image8', 'assets/images/test/8.jpg');
    },

    create: function () {

        this.leftImage = this.add.image(100, 200, 'image1');
        this.leftImage.width = this.world.width / 3;
        this.leftImage.height = this.world.height / 3;

        this.rightImage = this.add.image(this.world.centerX + 100, 200, 'image2');
        this.rightImage.width = this.world.width / 3;
        this.rightImage.height = this.world.height / 3;
    }
};