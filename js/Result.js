DesireDesk.Result = function(){
    this.startBG;
    this.titleText;
    this.menuGroup;
    this.checkedImages;

    var _this = this;
};

DesireDesk.Result.prototype = {
    init: function(checkedImages) {
        //TODO: investigate how to get images' src
        //this.checkedImages = checkedImages;

    },

    preload: function () {
        this.userImages = [
            {name: 'image1', src: 'assets/images/test/1.jpg'},
            {name: 'image2', src: 'assets/images/test/2.jpg'},
            {name: 'image3', src: 'assets/images/test/3.jpg'},
            {name: 'image4', src: 'assets/images/test/4.jpg'},
            {name: 'image5', src: 'assets/images/test/5.jpg'},
            {name: 'image6', src: 'assets/images/test/6.jpg'},
            {name: 'image7', src: 'assets/images/test/7.jpg'},
            {name: 'image8', src: 'assets/images/test/8.jpg'}
        ];
        //preloading images set
        for(var i = 0; i < this.userImages.length; i++){
            this.load.image(this.userImages[i].name, this.userImages[i].src);
        }
    },

    create: function () {
        this.startBG = this.add.image(0, 0, 'bg');
        this.startBG.width = this.world.width;
        this.startBG.height = this.world.height;
        this.titleText = this.add.bitmapText(this.world.centerX - 120, 30, 'eightbitwonder', 'Your result', 24);

        //*****menu list*****
        InitMenu(this);


        this.resultGroup = this.add.group();
        this.resultGroup.enableBody = true;
        this.resultGroup.z = 1;

    }

};