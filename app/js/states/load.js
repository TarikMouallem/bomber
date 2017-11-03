var LoadState = function () {

};

module.exports = LoadState;

LoadState.prototype = {
  preload: function () {
    console.log('LoadState')

    // this.load.image('background', "images/background.png");
    this.load.spritesheet("game_slot", "images/game_slot.png", 522, 48);
    this.load.spritesheet("game_number", "images/game_number.png", 522, 48);
    this.load.image('background_select', "images/Background_select.png");
    this.load.image('select_stage', "images/select_stage.png");
    this.load.spritesheet('ok_button', "images/ok_button.png", 60, 60);
    this.load.image("danger_desert_thumbnail", "images/danger_desert_thumbnail.png");

    this.load.image('pending_game_backdrop', 'images/lobby_backdrop.png');
    this.load.spritesheet('start_game_button', "images/start_game_button.png", 202, 43);
    this.load.spritesheet('leave_game_button', "images/leave_game_button.png", 202, 43);
    this.load.spritesheet("character_square", "images/character_square.png", 89, 89);


    this.load.image("bomberman_head_white", "images/icon_white.png");
    this.load.image("bomberman_head_blue", "images/icon_blue.png");
    this.load.image("bomberman_head_green", "images/icon_green.png");
    this.load.image("bomberman_head_black", "images/icon_black.png");

    Game.add.text(80, 150, 'Loading...', { font: '30px Courier', fill: '#FFFFFF' });
  },

  create: function () {
    Game.state.start('lobby');
  }
};