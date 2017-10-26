class Component {
  constructor(width, height, source, x, y, type, game) {
    this.type = type;
    if (type == "image" || type == "background") {
      this.image = new Image();
      this.image.src = source;
    } else {
      this.source = source
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.context = game.context;
    this.game = game;
  }

  update() {
    const ctx = this.context;
    if (this.type == "image" || this.type == "background") {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      if (this.type == "background") {
        ctx.drawImage(this.image, this.x, this.y - this.height, this.width, this.height);
      }
    } else {
      ctx.fillStyle = this.source;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = this.source;
      ctx.fillText(this.text, this.x, this.y);
    }
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.type == "background") {
      if (this.y == this.height) {
        this.y = 0;
      };
    };
  };
};



class Skier extends Component {
  constructor(width, height, source, x, y, type, game) {
    super(width, height, source, x, y, type, game)
  }


  updateSkierDirection() {
    if (this.game.keys && this.game.keys[37]) {
      if (this.x > 0) {
        this.image.src = "images/LeftTurn/SkierTurnLeft3.png";
        this.x -= 2;
      };
    };
    if (this.game.keys && this.game.keys[39]) {
      if (this.x < (this.game.background.width - 40)){
        this.image.src = "images/RightTurn/SkierTurnRight3.png";
        this.x += 2;
      };
    };
    if (this.game.keys && this.game.keys[38]) {
      this.image.src = "images/SkierJump.png";
    };
  };

}



$(document).ready(() => {
  const app = new App()
  App.init()
});
