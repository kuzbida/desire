DesireDesk.Preloader = function (game) {
  this.preloaderBar = null;
  this.ready = false;
};

DesireDesk.Preloader.prototype = {
  preload: function () {
    this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
    this.preloadBar.anchor.setTo(0.5,0.5);
    this.load.setPreloadSprite(this.preloadBar);
  },

  create: function () {
    this.ready = true;
    this.state.start('StartMenu');
  }
};