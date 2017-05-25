
var canvasNum;
var room;
var lock;
var mute;

// color change__________________________________________________
var stateoflight1
var stateoflight2
var stateoflight3
var stateiswon

// keypad______________________________________________________
var stateofNumber
var stateofNumbertwo
var stateofNumberthree
var stateofNumberfour
var stateofNumberfive 
var stateofNsumbersix
var stateofNumberseven
var stateofNumbereight
var stateofNumbernine
var stateofNumberas
var stateofNumberhash
var stateofNumberzero
// PIN 
var stateofPinone
var stateofPintwo
var stateofPinthree
//others 
var lock;
var mute;

var initialTime = 0;
var reversedTime = 0;
var reversedTime = 0;
var q = 0;
var minuteMultiplier = 0;
var reversedTime = 0;
var recordTime = false;
var nextMinute = true;


function preload() 
{

  startpage = loadImage('https://dl.dropboxusercontent.com/s/v2yyv3kcsoi82ei/Start.jpg?dl=0');

  overall = loadImage('https://dl.dropboxusercontent.com/s/i557xj1zd2w63ma/2017-05-14%2022_38_12-Room%202.skp%20-%20SketchUp%20Make%202017.png?dl=0');

  shelf = loadImage('https://dl.dropboxusercontent.com/s/be3hoyzm7ubmxej/Room%202.2.png?dl=0')

  hintone = loadImage('https://dl.dropboxusercontent.com/s/5st3loa1p8k2cxa/Room%202.8.png?dl=0')
  hinttwo = loadImage('https://dl.dropboxusercontent.com/s/cs0i3cpkvnyrw5s/Room%202.9.png?dl=0')

  drawer = loadImage('https://dl.dropboxusercontent.com/s/d67u5ch47on3ef0/Room%202.3.png?dl=0')
  draweropen = loadImage('https://dl.dropboxusercontent.com/s/t2ky32ykig8w84d/Room%202.4.png?dl=0')
 
  //color change
  door =  loadImage('https://dl.dropboxusercontent.com/s/k76yijniwhfvhjj/Untitled-1%20copy.png?dl=0'); 

  opened =  loadImage('https://dl.dropboxusercontent.com/s/ac2qluqlv15i537/Room%203.2%20%281%29.png?dl=0'); 

  clawone = loadImage('https://dl.dropboxusercontent.com/s/blqnky1adpnj6i6/2017-05-15%2014_20_04-Untitled%20-%20SketchUp%20Make%202017.png?dl=0'); 
  
  // keypad
  room = loadImage('https://dl.dropboxusercontent.com/s/49jwtwby4094fm9/Room%202.6%20copy.png?dl=0');
  
  keypad = loadImage('https://dl.dropboxusercontent.com/s/qgvbkxiqybbab8d/Room%202.7%20copy.png?dl=0');

  open = loadImage('https://dl.dropboxusercontent.com/s/6pv0v6povuurvef/Room%202.5.png?dl=0');

  one = loadImage('https://dl.dropboxusercontent.com/s/4kc5mrb98vrtwmv/cutmypic%20%281%29.png?dl=0');

  two = loadImage('https://dl.dropboxusercontent.com/s/woumlzzgv65lnkf/cutmypic%20%282%29.png?dl=0');

  three = loadImage('https://dl.dropboxusercontent.com/s/ob4o03h9b18qyyl/cutmypic%20%283%29.png?dl=0');

  four = loadImage('https://dl.dropboxusercontent.com/s/e6zqke00sqh0s7i/cutmypic%20%284%29.png?dl=0');

  five = loadImage('https://dl.dropboxusercontent.com/s/3xggd8mp25xco9z/cutmypic%20%285%29.png?dl=0');

  six = loadImage('https://dl.dropboxusercontent.com/s/ja9w8oodv9k52o0/cutmypic%20%286%29.png?dl=0');

  seven = loadImage('https://dl.dropboxusercontent.com/s/9em5r8oez2i86ee/cutmypic%20%287%29.png?dl=0');

  eight = loadImage('https://dl.dropboxusercontent.com/s/8c4482hzu1o3zc5/cutmypic%20%288%29.png?dl=0');

  nine = loadImage('https://dl.dropboxusercontent.com/s/oc9tx63j9o3og0y/cutmypic%20%289%29.png?dl=0');

  zero = loadImage('https://dl.dropboxusercontent.com/s/vohkx97oex7i5r1/cutmypic%20%2811%29.png?dl=0');

  as = loadImage('https://dl.dropboxusercontent.com/s/ilnixgmyb1oehvw/cutmypic%20%2810%29.png?dl=0');

  hash = loadImage('https://dl.dropboxusercontent.com/s/r39x5s6i6ut889x/cutmypic%20%2812%29.png?dl=0');

  clawmain = loadImage('https://dl.dropboxusercontent.com/s/ty588ibvpudnbmq/2017-05-15%2014_19_21-Untitled%20-%20SketchUp%20Make%202017.png?dl=0')

}


function setup()
{
  createCanvas(800,600);
  mute = 1;
  lock = false;


//color change
  stateoflight1 = 1
  stateoflight2 = 1
  stateoflight3 = 1
  stateiswon = 0 

//keypad 
  stateofNumber = 0 
  stateofNumbertwo = 0 
  stateofNumberthree = 0 
  stateofNumberfour
  stateofNumberfive = 0 
  stateofNumbersix = 0 
  stateofNumberseven = 0 
  stateofNumbereight = 0 
  stateofNumberas = 0 
  stateofNumberhash = 0 
  stateofNumberzero = 0 

  stateofPinone = 1 
  stateofPintwo = 1 
  stateofPinthree = 1 

  //default canvas
  canvas = 1;
}

function draw()
{
  if (canvas == 1)
  {
    canvas1();
  }
  if (canvas == 2)
  {
    canvas2();
  }
  if (canvas == 3)
  {
    canvas3();
  }
  if (canvas == 4)
  {
    canvas4();
  }
  if (canvas == 5)
  {
    canvas5();
  }
  if (canvas == 6)
  {
    canvas6();
  }
    if (canvas == 7)
  {
    canvas7();
  }
    if (canvas == 8)
  {
    canvas8();
  }
    if (canvas == 9)
  {
    canvas9();
  }
    if (canvas == 10)
  {
    canvas10();
  }
    if (canvas == 11)
  {
    canvas11();
  }
    if (canvas == 12)
  {
    canvas12();
  }
    if (canvas == 13)
  {
    canvas13();
  }  if (canvas == 14)
  {
    canvas14();
  }

// timer 
if (canvas == 2)
{
fill(0,0,0);

if (second() == 0)
  {
    if (q == 0)
    {
      minuteMultiplier = minuteMultiplier + 1;
      q = 5;
    }
  }
  if (recordTime == false)
  {
    recordTime = true;
    initialTime = second();
  }
  //                                 25..59   - 25
  newSecond = minuteMultiplier*60 + second() - initialTime;
  reversedTime = 90 - newSecond;
  textSize(20);
  text("Time Limit: "+reversedTime,10,80);
  paintCanvasButtons();
}
  fill(0,0,0);
  text("Mouse X "+mouseX,10,30);
  text("Mouse Y "+mouseY,10,50);
}

function canvas1()
{  
  background(startpage,0,0);
  paintCanvasButtons();
}

function canvas2()
{
  paintCanvasButtons();
  background(door,0,0);
  stroke(0,0,0);
  noFill();
  rect(2,2,796,596);
  noStroke();
  //drawCanvasButtons();
  var y = 100;
  fill(0,0,250);
  // first one      ellipse(278,222,95,95);
  // second one     ellipse(402,222,95,95);
  // third one      ellipse(526,222,95,95);
  //___________________________________________________
  if (stateiswon == 1)  
  { 
    fill(255,255,255);
    text("enter",200,50);
  } 
  //_____________________________________________________door 1 
  if (stateoflight1 == 2) 
  {
    fill(0,0,255);
    ellipse(278,222,95,95);
  }
  if (stateoflight1 == 3) 
  {
    fill(255,0,0);
    ellipse(278,222,95,95);
  }
  if (stateoflight1 == 4) 
  {
    fill(0,255,0);
    ellipse(278,222,95,95);
  }
  if (stateoflight1 == 5) 
  {
    fill(255,255,0);
    ellipse(278,222,95,95);
  }
  //______________________________________________________door 2
  if (stateoflight2 == 2) 
  {
    fill(0,0,255);
    ellipse(402,222,95,95);
  }
  if (stateoflight2 == 3) 
  {
    fill(255,0,0);
    ellipse(402,222,95,95);
  }
  if (stateoflight2 == 4) 
  {
    fill(0,255,0);
    ellipse(402,222,95,95);
  }
  if (stateoflight2 == 5) 
  {
    fill(255,255,0);
    ellipse(402,222,95,95);
  }
  //________________________________________________________door 3
  if (stateoflight3 == 2) 
  {
    fill(0,0,255);
    ellipse(526,222,95,95);
  }
  if (stateoflight3 == 3) 
  {
    fill(255,0,0);
    ellipse(526,222,95,95);
  }
  if (stateoflight3 == 4) 
  {
    fill(0,255,0);
    ellipse(526,222,95,95);
  }
  if (stateoflight3 == 5) 
  {
    fill(255,255,0);
    ellipse(526,222,95,95);
  }
  //________________________________________________lights
  if (lock == false && mouseX > 238 && mouseX < 318 && mouseY > 180 && mouseY < 264 && mouseIsPressed == true)
  {
    noStroke();
    if (stateoflight1 == 1)
    {
      stateoflight1 = 2
    }
    else if (stateoflight1 == 2)
    {
      stateoflight1 = 3;
    }
    else if (stateoflight1 == 3)
    {
      stateoflight1 = 4;
    }
    else if (stateoflight1 == 4)
    {
      stateoflight1 = 5;
    }
    else if (stateoflight1 == 5)
    {
      stateoflight1 = 2 
    }
    lock = true;
  }
  if (lock == false && mouseX > 362 && mouseX < 444 && mouseY > 180 && mouseY < 264 && mouseIsPressed == true)
  {
    if (stateoflight2 == 1)
    {
      stateoflight2 = 2
    }
    else if (stateoflight2 == 2)
    {
      stateoflight2 = 3;
    }
    else if (stateoflight2 == 3) 
    {
      stateoflight2 = 4
    } 
    else if (stateoflight2 == 4)
    {
      stateoflight2 = 5
    }
    else if (stateoflight2 == 5)
    {
      stateoflight2 = 2
    }
    lock = true; 
  }
  if (lock == false && mouseX > 486 && mouseX < 568 && mouseY > 180 && mouseY < 264 && mouseIsPressed == true)
  {
    if (stateoflight3 == 1)
    {
      stateoflight3 = 2
    }
    else if (stateoflight3 == 2)
    {
      stateoflight3 = 3;
    }
    else if (stateoflight3 == 3) 
    {
      stateoflight3 = 4
    }
    else if (stateoflight3 == 4)
    {
      stateoflight3 = 5 
    } 
    else if (stateoflight3 == 5)
    {
      stateoflight3 = 2 
    }
    lock = true; 
  }
  if (stateoflight1 == 5 && stateoflight2 == 4 && stateoflight3 == 2)
  {
    canvas = 3 
    lock = true; 
  } 

}

function canvas3()
{
  paintCanvasButtons();
  background(opened,0,0);
  image(clawone,400,200,100,100)
}
// keypad
function canvas4()
{
  background(room,0,0);
  paintCanvasButtons();
}

function canvas5()
{
 background(keypad,0,0)
  fill(0,255,0)
  rect(712,12,70,30)
}

function canvas6()
{
  background(open,0,0)
  image(clawmain,450,200,100,100)
  paintCanvasButtons();
}

function canvas7()
{
  background(keypad,0,0);
  fill(225,225,225);
  textSize(15);
  text("Safety __ __ __",350,100)
  //image(one,100,135,80,80)

  if (stateofPinone == 1)
  {
    image(one,100,135,80,80)
  }
  if (stateofPinone == 2)
  {
    image(two,100,135,80,80)
  }
    if (stateofPinone == 3)
  {
    image(three,100,135,80,80)
  }
  if (stateofPinone == 4)
  {
    image(four,100,135,80,80)
  }
    if (stateofPinone == 5)
  {
    image(five,100,135,80,80)
  }
  if (stateofPinone == 6)
  {
    image(six,100,135,80,80)
  }
    if (stateofPinone == 7)
  {
    image(seven,100,135,80,80)
  }
  if (stateofPinone == 8)
  {
    image(eight,100,135,80,80)
  }
    if (stateofPinone == 9)
  {
    image(nine,100,135,80,80)
  }
  if (stateofPinone == 10)
  {
    image(as,100,135,80,80)
  }
    if (stateofPinone == 11)
  {
    image(zero,100,135,80,80)
  }
  if (stateofPinone == 12)
  {
    image(hash,100,135,80,80)
  }

//____________________________________________________________________________________________
    if (stateofPintwo == 1)
  {
    image(one,368,135,80,80)
  }
  if (stateofPintwo == 2)
  {
    image(two,368,135,80,80)
  }
    if (stateofPintwo == 3)
  {
    image(three,368,135,80,80)
  }
  if (stateofPintwo == 4)
  {
    image(four,368,135,80,80)
  }
  if (stateofPintwo == 5)
  {
    image(five,368,135,80,80)
  }
  if (stateofPintwo == 6)
  {
    image(six,368,135,80,80)
  }
  if (stateofPintwo == 7)
  {
    image(seven,368,135,80,80)
  }
  if (stateofPintwo == 8)
  {
    image(eight,368,135,80,80)
  }
  if (stateofPintwo == 9)
  {
    image(nine,368,135,80,80)
  }
  if (stateofPintwo == 10)
  {
    image(as,368,135,80,80)
  }
  if (stateofPintwo == 11)
  {
    image(zero,368,135,80,80)
  }
  if (stateofPintwo == 12)
  {
    image(hash,368,135,80,80)
  }

//___________________________________________________________________________________________________
  if (stateofPinthree == 1)
  {
    image(one,629,135,80,80)
  }
  if (stateofPinthree == 2)
  {
    image(two,629,135,80,80)
  }
  if (stateofPinthree == 3)
  {
    image(three,629,135,80,80)
  }
  if (stateofPinthree == 4)
  {
    image(four,629,135,80,80)
  }
  if (stateofPinthree == 5)
  {
    image(five,629,135,80,80)
  }
  if (stateofPinthree == 6)
  {
    image(six,629,135,80,80)
  }
  if (stateofPinthree == 7)
  {
    image(seven,629,135,80,80)
  }
  if (stateofPinthree == 8)
  {
    image(eight,629,135,80,80)
  }
  if (stateofPinthree == 9)
  {
    image(nine,629,135,80,80)
  }
  if (stateofPinthree == 10)
  {
    image(as,629,135,80,80)
  }
  if (stateofPinthree == 11)
  {
    image(zero,629,135,80,80)
  }
  if (stateofPinthree == 12)
  {
    image(hash,629,135,80,80)
  }

  if (lock == false && mouseX > 100 && mouseX < 180 && mouseY > 135 && mouseY < 215 && mouseIsPressed == true)
  {
    if (stateofPinone == 1)
    {
      stateofPinone = 2
    }
    else if (stateofPinone == 2)
    {
      stateofPinone = 3;
    }
    else if (stateofPinone == 3)
    {
      stateofPinone = 4
    }
    else if (stateofPinone == 4)
    {
      stateofPinone = 5 
    }
    else if (stateofPinone == 5)
    {
      stateofPinone = 6 
    }
    else if (stateofPinone == 6)
    {
      stateofPinone = 7
    }
    else if (stateofPinone == 7)
    {
      stateofPinone = 8 
    }
    else if (stateofPinone == 8)
    {
      stateofPinone = 9 
    }
    else if (stateofPinone == 9)
    {
      stateofPinone = 10 
    }
    else if (stateofPinone == 10)
    {
      stateofPinone = 11 
    }
    else if (stateofPinone == 11)
    {
      stateofPinone = 12 
    }
    else if (stateofPinone == 12)
    {
      stateofPinone = 1
    }
    lock = true; 
  }

  if (lock == false && mouseX > 368 && mouseX < 448 && mouseY > 135 && mouseY < 215 && mouseIsPressed == true)
  {
    if (stateofPintwo == 1)
    {
      stateofPintwo = 2
    }
    else if (stateofPintwo == 2)
    {
      stateofPintwo = 3;
    }
    else if (stateofPintwo == 3)
    {
      stateofPintwo = 4
    }
    else if (stateofPintwo == 4)
    {
      stateofPintwo = 5 
    }
    else if (stateofPintwo == 5)
    {
      stateofPintwo = 6 
    }
    else if (stateofPintwo == 6)
    {
      stateofPintwo = 7
    }
    else if (stateofPintwo == 7)
    {
      stateofPintwo = 8 
    }
    else if (stateofPintwo == 8)
    {
      stateofPintwo = 9 
    }
    else if (stateofPintwo == 9)
    {
      stateofPintwo = 10 
    }
    else if (stateofPintwo == 10)
    {
      stateofPintwo = 11 
    }
    else if (stateofPintwo == 11)
    {
      stateofPintwo = 12 
    }
    else if (stateofPintwo == 12)
    {
      stateofPintwo = 1
    }
    lock = true; 
  }

  if (lock == false && mouseX > 629 && mouseX < 709 && mouseY > 135 && mouseY < 215 && mouseIsPressed == true)
  {
    if (stateofPinthree == 1)
    {
      stateofPinthree = 2
    }
    else if (stateofPinthree == 2)
    {
      stateofPinthree = 3;
    }
    else if (stateofPinthree == 3)
    {
      stateofPinthree = 4
    }
    else if (stateofPinthree == 4)
    {
      stateofPinthree = 5 
    }
    else if (stateofPinthree == 5)
    {
      stateofPinthree = 6 
    }
    else if (stateofPinthree == 6)
    {
      stateofPinthree = 7
    }
    else if (stateofPinthree == 7)
    {
      stateofPinthree = 8 
    }
    else if (stateofPinthree == 8)
    {
      stateofPinthree = 9 
    }
    else if (stateofPinthree == 9)
    {
      stateofPinthree = 10 
    }
    else if (stateofPinthree == 10)
    {
      stateofPinthree = 11 
    }
    else if (stateofPinthree == 11)
    {
      stateofPinthree = 12 
    }
    else if (stateofPinthree == 12)
    {
      stateofPinthree = 1
    }
    lock = true; 
  }
  if (stateofPinone == 7 && stateofPintwo == 4 && stateofPinthree == 6)
  {
    canvas = 6
    lock = true; 
  }
  paintCanvasButtons();
}

function canvas8()
{
  background(keypad,0,0);
  paintCanvasButtons();
  fill(255,255,255)
  stroke(255,255,255)
  text("Mouse X "+mouseX,10,30);
  text("Mouse Y "+mouseY,10,50);
  

  /*image(one,304,297,68,55);
  image(two,373,296,68,55);
  image(three,442,296,68,55);
  image(four,304,353,68,55);
  image(five,374,353,68,55);
  image(six,442,354,68,55);
  image(seven,305,410,68,55);
  image(eight,372,411,68,55);
  image(nine,442,411,68,55);
  image(zero,372,468,68,55);
  image(as,305,467,68,55);
  image(hash,442,468,68,55);*/

  if (stateofNumber == 1) 
  { 
    image(one,304,297,68,55);
    image(two,305,467,68,55);
    image(three,442,296,68,55);
    image(four,305,410,68,55);
    image(five,374,353,68,55);
    image(six,442,354,68,55);
    image(seven,304,353,68,55);
    image(eight,372,411,68,55);
    image(nine,442,411,68,55);
    image(zero,372,468,68,55);
    image(as,373,296,68,55);
    image(hash,442,468,68,55);
  } 

  if (stateofNumbertwo == 1) 
  { 
    image(hash,304,297,68,55);
    image(three,373,296,68,55);
    image(one,442,296,68,55);
    image(four,304,353,68,55);
    image(two,374,353,68,55);
    image(six,442,354,68,55);
    image(seven,305,410,68,55);
    image(eight,372,411,68,55);
    image(five,442,411,68,55);
    image(zero,372,468,68,55);
    image(as,305,467,68,55);
    image(nine,442,468,68,55);
  } 

  if (stateofNumberthree == 1) 
  {
    image(one,304,297,68,55);
    image(four,373,296,68,55);
    image(three,442,296,68,55);
    image(six,304,353,68,55);
    image(five,374,353,68,55);
    image(two,442,354,68,55);
    image(as,305,410,68,55);
    image(seven,372,411,68,55);
    image(nine,442,411,68,55);
    image(zero,372,468,68,55);
    image(eight,305,467,68,55);
    image(hash,442,468,68,55);
  } 

  if (stateofNumberfour == 1) 
  { 
    image(hash,304,297,68,55);
    image(two,373,296,68,55);
    image(one,442,296,68,55);
    image(zero,304,353,68,55);
    image(four,374,353,68,55);
    image(six,442,354,68,55);
    image(eight,305,410,68,55);
    image(seven,372,411,68,55);
    image(five,442,411,68,55);
    image(three,372,468,68,55);
    image(as,305,467,68,55);
    image(nine,442,468,68,55);
  } 

  if (stateofNumberfive == 1) 
  { 
    image(nine,304,297,68,55);
    image(one,373,296,68,55);
    image(three,442,296,68,55);
    image(six,304,353,68,55);
    image(five,374,353,68,55);
    image(two,442,354,68,55);
    image(seven,305,410,68,55);
    image(hash,372,411,68,55);
    image(four,442,411,68,55);
    image(zero,372,468,68,55);
    image(as,305,467,68,55);
    image(eight,442,468,68,55);
  } 

  if (stateofNumbersix == 1) 
  { 
    image(as,304,297,68,55);
    image(nine,373,296,68,55);
    image(hash,442,296,68,55);
    image(four,304,353,68,55);
    image(five,374,353,68,55);
    image(one,442,354,68,55);
    image(three,305,410,68,55);
    image(eight,372,411,68,55);
    image(seven,442,411,68,55);
    image(zero,372,468,68,55);
    image(two,305,467,68,55);
    image(six,442,468,68,55);
  } 

  if (stateofNumberseven == 1) 
  { 
    image(one,304,297,68,55);
    image(zero,373,296,68,55);
    image(three,442,296,68,55);
    image(five,304,353,68,55);
    image(four,374,353,68,55);
    image(hash,442,354,68,55);
    image(seven,305,410,68,55);
    image(two,372,411,68,55);
    image(nine,442,411,68,55);
    image(six,372,468,68,55);
    image(as,305,467,68,55);
    image(eight,442,468,68,55);
  } 

  if (stateofNumbereight == 1) 
  { 
    image(five,304,297,68,55);
    image(two,373,296,68,55);
    image(six,442,296,68,55);
    image(four,304,353,68,55);
    image(one,374,353,68,55);
    image(three,442,354,68,55);
    image(seven,305,410,68,55);
    image(eight,372,411,68,55);
    image(nine,442,411,68,55);
    image(zero,372,468,68,55);
    image(as,305,467,68,55);
    image(hash,442,468,68,55);
  } 

  if (stateofNumbernine == 1) 
  { 
    image(seven,304,297,68,55);
    image(two,373,296,68,55);
    image(six,442,296,68,55);
    image(four,304,353,68,55);
    image(one,374,353,68,55);
    image(as,442,354,68,55);
    image(five,305,410,68,55);
    image(eight,372,411,68,55);
    image(nine,442,411,68,55);
    image(zero,372,468,68,55);
    image(three,305,467,68,55);
    image(hash,442,468,68,55);
  } 

  if (stateofNumberas == 1) 
  { 
    image(eight,304,297,68,55);
    image(five,373,296,68,55);
    image(three,442,296,68,55);
    image(hash,304,353,68,55);
    image(five,374,353,68,55);
    image(one,442,354,68,55);
    image(six,305,410,68,55);
    image(seven,372,411,68,55);
    image(four,442,411,68,55);
    image(nine,372,468,68,55);
    image(two,305,467,68,55);
    image(as,442,468,68,55);
  } 

  if (stateofNumberhash == 1) 
  { 
    image(five,304,297,68,55);
    image(two,373,296,68,55);
    image(three,442,296,68,55);
    image(four,304,353,68,55);
    image(one,374,353,68,55);
    image(six,442,354,68,55);
    image(seven,305,410,68,55);
    image(eight,372,411,68,55);
    image(nine,442,411,68,55);
    image(zero,372,468,68,55);
    image(as,305,467,68,55);
    image(hash,442,468,68,55);
  } 

  if (stateofNumberzero == 1) // original 
  { 
    image(one,304,297,68,55);
    image(two,373,296,68,55);
    image(three,442,296,68,55);
    image(four,304,353,68,55);
    image(five,374,353,68,55);
    image(six,442,354,68,55);
    image(seven,305,410,68,55);
    image(eight,372,411,68,55);
    image(nine,442,411,68,55);
    image(zero,372,468,68,55);
    image(as,305,467,68,55);
    image(hash,442,468,68,55);
  } 


  // first button
  if (mouseX > 304 && mouseX < 372 && mouseY > 297 && mouseY < 352 && mouseIsPressed == true) 
  {
    stateofNumber = 1; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0;
  }

  // second button 
  if (mouseX > 373 && mouseX < 441 && mouseY > 297 && mouseY < 352 && mouseIsPressed == true)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 1; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  } 

  // third button 
  if (mouseX > 442 && mouseX < 510 && mouseY > 297 && mouseY < 352 && mouseIsPressed == true) 
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 1; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  }

  //fourth button
  if (mouseX > 304 && mouseX < 372 && mouseY > 353 && mouseY < 408 && mouseIsPressed == true )
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 1;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  }

  // fifth button
  if (mouseX > 373 && mouseX < 441 && mouseY > 353 && mouseY < 408 && mouseIsPressed == true)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 1;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  }

  //sixth button
  if (mouseX > 442 && mouseX < 510 && mouseY > 353 && mouseY < 408 && mouseIsPressed == true)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 1;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  }

  // seventh button 
  if (mouseX > 304 && mouseX < 372 && mouseY > 410 && mouseY < 465 && mouseIsPressed) 
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 1; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  }

  // eigth button 
  if (mouseX > 373 && mouseX < 441 && mouseY > 410 && mouseY < 465 && mouseIsPressed == true)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 1;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  }

  // ninth button 
  if (mouseX > 442 && mouseX < 510 && mouseY > 410 && mouseY < 465 && mouseIsPressed == true)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 1;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 0;
  }

  //tenth button or as 
  if (mouseX > 304 && mouseX < 372 && mouseY > 467 && mouseY < 522 && mouseIsPressed)

  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 1;
    stateofNumberhash = 0;
  }

  //12th button

  if (mouseX > 373 && mouseX < 441 && mouseY> 467 && mouseY < 522 && mouseIsPressed)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 0;
    stateofNumberas = 0;
    stateofNumberhash = 1;
  }
  // eleventh button or 0 
  if (mouseX > 442 && mouseX < 510 && mouseY > 467 && mouseY < 522 && mouseIsPressed == true)
  {
    stateofNumber = 0; 
    stateofNumbertwo = 0; 
    stateofNumberthree = 0; 
    stateofNumberfour = 0;
    stateofNumberfive = 0;
    stateofNumbersix = 0;
    stateofNumberseven = 0; 
    stateofNumbereight = 0;
    stateofNumbernine = 0;
    stateofNumberzero = 1;
    stateofNumberas = 0;
    stateofNumberhash = 0; 
  }
  paintCanvasButtons();
}
function canvas9()
{
  image(overall,0,0)
  paintCanvasButtons();
}
function canvas10()
{
  image(shelf,0,0)
  paintCanvasButtons();
}
function canvas11()
{
  image(drawer,0,0)
  paintCanvasButtons();
  if (mouseX > 354 && mouseX < 442 && mouseY > 312 && mouseY < 336 && mouseIsPressed == true )
  {
    canvas = 12
    lock = true; 
  }
}
function canvas12()
{
  image(draweropen,0,0)
  paintCanvasButtons();
}
function canvas13()
{
  paintCanvasButtons();
}
function canvas14()
{
  paintCanvasButtons();
}
function canvas15()
{
  paintCanvasButtons();
}
function canvas16()
{
  paintCanvasButtons();
}
function canvas17()
{
  paintCanvasButtons();
}
function canvas18()
{
  paintCanvasButtons();
}


function paintCanvasButtons()
{  

  if (canvas == 1)
  {

    if (lock == false && mouseX > 0 && mouseX < 800 && mouseY > 0 && mouseY < 600 && mouseIsPressed == true)
    {
      lock = true;
      if (canvas == 1)
      {
        canvas = 2;
      } 
    }
  }
  else if (canvas == 2)
  {

    if (lock == false && mouseX > 709 && mouseX < 768 && mouseY > 560 && mouseY < 588 && mouseIsPressed == true)
    {
      lock = true;
      if (canvas == 2)
      {
        canvas = 3;
      } 
    }
    if (lock == false && mouseX > 8 && mouseX < 69 && mouseY > 560 && mouseY < 588 && mouseIsPressed == true)
    {
      lock = true;
      if (canvas == 2)
      {
        canvas = 1;
      } 
    } 
  }
  else if (canvas == 3)
  {

    if (lock == false && mouseX > 709 && mouseX < 768 && mouseY > 560 && mouseY < 588 && mouseIsPressed == true)
    {
      lock = true;
      if (canvas == 3)
      {
        canvas = 4;
      } 
    }
    if (lock == false && mouseX > 8 && mouseX < 69 && mouseY > 560 && mouseY < 588 && mouseIsPressed == true)
    {
      lock = true;
      if (canvas == 3)
      {
        canvas = 2;
      } 
    } 
  }
  else if (canvas == 4)
  {

    if (lock == false && mouseX > 709 && mouseX < 768 && mouseY > 560 && mouseY < 588 && mouseIsPressed == true)
    {
      lock = true;
      if (canvas == 4)
      {
        canvas = 5;
      } 
    }
    if (lock == false && mouseX > 8 && mouseX < 69 && mouseY > 560 && mouseY < 588 && mouseIsPressed == true)
    {
      lock = true;
      if (canvas == 4)
      {
        canvas = 3;
      } 
    } 
  }
  else if (canvas == 5)
  {
    if (lock == false && mouseX > 709 && mouseX < 768 && mouseY > 560 && mouseY < 588 && mouseIsPressed == true)
    {
      lock = true;
      if (canvas == 5)
      {
        canvas = 6;
      } 
    }
    if (lock == false && mouseX > 8 && mouseX < 69 && mouseY > 560 && mouseY < 588 && mouseIsPressed == true)
    {
      lock = true;
      if (canvas == 5)
      {
        canvas = 4;
      } 
    } 
  }
  else if (canvas == 6)
  {
    if (lock == false && mouseX > 8 && mouseX < 69 && mouseY > 560 && mouseY < 588 && mouseIsPressed == true)
    {
      lock = true;
      if (canvas == 6)
      {
        canvas = 5;
      } 
    } 
  }
}

function mouseReleased()
{
  if (lock)
  {
    lock = false;
  }
}



