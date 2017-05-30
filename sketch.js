
var canvasNum;
var room;
var lock;
var mute;
var inventoryitem;
var showinventory;
var clawpartLocation;
var clawmainLocation;
var clawwholeLocation;

// puzzle one 
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


//color change 
var stateoflight1
var stateoflight2
var stateoflight3
var stateiswon

// claw 


var mainclawX;
var mainclawY;

var lock;
var lock2;
var lock3;
var permanentLock1;
var permanentLock2;
var permanentLock3;


var stickLocation1X;
var stickLocation1Y;


function preload() 
{

  //room1
  firstfirst = loadImage('https://dl.dropboxusercontent.com/s/czvflsqxuff8imt/Room%201.1.png?dl=0');

  firstleft = loadImage('https://dl.dropboxusercontent.com/s/1725bcfibav9b32/Room%201.4.png?dl=0');

  firstright = loadImage('https://dl.dropboxusercontent.com/s/ij15cg9mbw7subr/Room%201.3.png?dl=0');

  firsttable = loadImage('https://dl.dropboxusercontent.com/s/pwke2fj8s2ncfdp/Room%201.2%20%281%29.png?dl=0');

  locker = loadImage('https://dl.dropboxusercontent.com/s/etbl5r4n751lnql/Room%201.5.png?dl=0');

  lockerclue = loadImage('https://dl.dropboxusercontent.com/s/m1a6h52be8diu35/Room%201.7.png?dl=0');

  //room2 
  secondfirst = loadImage('https://dl.dropboxusercontent.com/s/sktzhquqtw13c33/Room%202.1.png?dl=0')

  secondsecond = loadImage('https://dl.dropboxusercontent.com/s/be3hoyzm7ubmxej/Room%202.2.png?dl=0') 

  drawer = loadImage('https://dl.dropboxusercontent.com/s/d67u5ch47on3ef0/Room%202.3.png?dl=0')

  draweropen = loadImage('https://dl.dropboxusercontent.com/s/t2ky32ykig8w84d/Room%202.4.png?dl=0')

  hintone = loadImage('https://dl.dropboxusercontent.com/s/5st3loa1p8k2cxa/Room%202.8.png?dl=0')
  hinttwo = loadImage('https://dl.dropboxusercontent.com/s/cs0i3cpkvnyrw5s/Room%202.9.png?dl=0')

  //room three


  //puzzleone
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


  //puzzletwo 

  thirdfirst = loadImage('https://dl.dropboxusercontent.com/s/a5g6qwww9j80aoh/Room%203.1.png?dl=0')

  thirdtable = loadImage('https://dl.dropboxusercontent.com/s/ojt15jzs5oegved/Room%203.4.png?dl=0')

  thirdchest = loadImage('https://dl.dropboxusercontent.com/s/fconnw1h7ldb6e9/Room%203.3.png?dl=0')

  chestgame = loadImage('https://dl.dropboxusercontent.com/s/k76yijniwhfvhjj/3.5.png?dl=0')

  chestopen = loadImage('https://dl.dropboxusercontent.com/s/716elj3e9bbsxgd/Room%203.2%20%282%29.png?dl=0')

  //puzzlethree

  // claw 
  clawmain = loadImage('https://dl.dropboxusercontent.com/s/ty588ibvpudnbmq/clawmain.png?dl=0')
  clawpart = loadImage('https://dl.dropboxusercontent.com/s/blqnky1adpnj6i6/clawpart.png?dl=0')
  wholeclaw = loadImage('https://dl.dropboxusercontent.com/s/3xq7imeo8m6z0xt/wholeclaw.png?dl=0')

}


function setup()
{
  createCanvas(800,600);
  mute = 1;
  lock = false;
  inventoryitem = 0;
  showinventory = true;
  
  clawmaininventoryposition = 0;
  clawpartinventoryposition = 0;
  clawwholeinventoryposition = 0;
  clawmainX = 400 
  clawmainY = 250 
  clawpartX = 248 
  clawpartY = 477 
  clawwholeX = 326
  clawwholeY = 203
  clawmainXsize = 70
  clawmainYsize = 60 
  clawpartXsize = 70 
  clawpartYsize = 60
  clawwholeXsize = 60
  clawwholeYsize = 60

  // puzzle one 
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

  //color change
  stateoflight1 = 1
  stateoflight2 = 1
  stateoflight3 = 1
  stateiswon = 0 


  // claw 
  ellipseOrientation = 0;

  mainclawX = 400 
  mainclawY = 560 


  stickLocation1X = 534;
  stickLocation1Y = 145;

  lock = false;
  lock2 = false;
  lockellipseOrientation = false;

  permanentLock1 = false;

  //default canvas
  canvas = 17;

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
  }
  if (canvas == 14)
  {
    canvas14();
  }
  if (canvas == 15)
  {
    canvas15();
  }
  if (canvas == 16)
  {
    canvas16();
  }
  if (canvas == 17)
  {
    canvas17(); 
  }
  if (canvas == 18)
  {
    canvas18();
  }
  if (canvas == 19)
  {
    canvas19();
  }
  if (canvas == 20)
  {
    canvas20();
  }
  if (canvas == 21)
  {
    canvas21();
  }
  if (canvas == 22)
  {
    canvas22();
  }
  if (canvas == 23)
  {
    canvas23();
  }
  if (canvas == 24)
  {
    canvas24();
  }
  if (canvas == 25)
  {
    canvas25();
  }
  if (canvas == 26)
  {
    canvas26();
  }
  if (canvas == 27)
  {
    canvas27();
  }
  if (canvas == 28)
  {
    canvas28();
  }
  if (canvas == 29)
  {
    canvas29();
  }

  inventory1();
  inventory2();
  paintCanvasButtons();
  fill(0,0,0);

  fill(0,0,0);
  text("Mouse X "+mouseX,10,30);
  text("Mouse Y "+mouseY,10,50);
}


function canvas1()
{
  background(firstfirst,0,0);
  paintCanvasButtons();
}

function canvas2()
{  
  background(firstleft,0,0);
  paintCanvasButtons();
  
}

function canvas3()
{
  background(firstright,0,0);
  paintCanvasButtons();
}

function canvas4()
{
  background(firsttable,0,0);
  paintCanvasButtons();
}

function canvas5()
{
  background(locker,0,0);
  paintCanvasButtons();
}

function canvas6()
{
  background(lockerclue,0,0);
  paintCanvasButtons();
}

function canvas7()
{
  background(secondfirst,0,0);
  paintCanvasButtons();
}

function canvas8()
{
  background(secondsecond,0,0);
  paintCanvasButtons();
}

function canvas9()
{
  background(drawer,0,0);
  paintCanvasButtons();
}

function canvas10()
{
  background(draweropen,0,0);
  paintCanvasButtons();
}

function canvas11()
{
  background(hintone,0,0);
  paintCanvasButtons();
}

function canvas12()
{
  background(hinttwo,0,0);
  paintCanvasButtons();
}

function canvas13()
{
  background(room,0,0);
  paintCanvasButtons();
}

function canvas14()
{
  background(keypad,0,0);
  paintCanvasButtons();
 // cursor(ARROW)
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
  if (mouseX > 304 && mouseX < 372 && mouseY > 297 && mouseY < 352) 
  {
    cursor(HAND)
    if (mouseIsPressed == true)
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
  }
  // second button 
  else if (mouseX > 373 && mouseX < 441 && mouseY > 297 && mouseY < 352)
  {
    cursor(HAND)
    if (mouseIsPressed == true)
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
  } 

  // third button 
  else if (mouseX > 442 && mouseX < 510 && mouseY > 297 && mouseY < 352) 
  {
    cursor(HAND)
    if (mouseIsPressed == true)
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
  }

  //fourth button
  else if (mouseX > 304 && mouseX < 372 && mouseY > 353 && mouseY < 408)
  {
    cursor(HAND)
    if (mouseIsPressed == true)
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
  }

  // fifth button
  else if (mouseX > 373 && mouseX < 441 && mouseY > 353 && mouseY < 408)
  {
    cursor(HAND)
    if (mouseIsPressed == true)
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
  }

  //sixth button
  else if (mouseX > 442 && mouseX < 510 && mouseY > 353 && mouseY < 408)
  {
    cursor(HAND)
    if (mouseIsPressed == true)
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
  }

  // seventh button 
  else if (mouseX > 304 && mouseX < 372 && mouseY > 410 && mouseY < 465) 
  { 
    cursor(HAND)
    if (mouseIsPressed == true)
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
  }

  // eigth button 
  else if (mouseX > 373 && mouseX < 441 && mouseY > 410 && mouseY < 465)
  {
    cursor(HAND)
    if (mouseIsPressed == true)
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
  }

  // ninth button 
  else if (mouseX > 442 && mouseX < 510 && mouseY > 410 && mouseY < 465)
  {
    cursor(HAND)
    if (mouseIsPressed == true)
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
  }

  //tenth button or as 
  else if (mouseX > 304 && mouseX < 372 && mouseY > 467 && mouseY < 522)
  {
    cursor(HAND)
    if (mouseIsPressed == true)
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
  }

  //12th button
  else if (mouseX > 373 && mouseX < 441 && mouseY> 467 && mouseY < 522)
  {
    cursor(HAND)
    if (mouseIsPressed == true)
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
  }
  // eleventh button or 0 
  else if (mouseX > 442 && mouseX < 510 && mouseY > 467 && mouseY < 522)
  {
    cursor(HAND)
    if (mouseIsPressed == true)
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
  }
  else
  {
    cursor(ARROW)
  }
}

function canvas15()
{
  background(keypad,0,0);
  paintCanvasButtons();
  fill(0,255,0)
  rect(712,12,70,30)
}

function canvas16()
{
  background(keypad,0,0);
  paintCanvasButtons();

  textSize(15);
  fill(225,225,225);
  text("Safety __ __ __",350,100)
  //image(one,100,135,80,80)
  cursor(ARROW)

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

  if (mouseX > 100 && mouseX < 180 && mouseY > 135 && mouseY < 215)
  {
    cursor(HAND)
    if (mouseIsPressed == true && lock == false)
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
  }

  else if (mouseX > 368 && mouseX < 448 && mouseY > 135 && mouseY < 215)
  {
    cursor(HAND)
    if (mouseIsPressed == true && lock == false)
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
  }

  else if (mouseX > 629 && mouseX < 709 && mouseY > 135 && mouseY < 215)
  {
    cursor(HAND)
    if (mouseIsPressed == true && lock == false)
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
  }
  else 
  {
    cursor(ARROW)
  }

  if (stateofPinone == 7 && stateofPintwo == 4 && stateofPinthree == 6)
  {
    canvas = 17
    lock = true; 
  }
}

function canvas17()
{
  background(open,0,0);
  paintCanvasButtons();
  fill(0,0,0,60)
  noStroke();
  rect(632,0,500,384)
  inventory1();
   if (clawpartinventoryposition == 0 || showinventory == true)
  {
    fill(0,255,0);
    image(clawpart,clawpartX,clawpartY,65,55);
  }

}

function canvas18()
{
  background(thirdfirst,0,0);
  paintCanvasButtons();
if (clawpartinventoryposition == 0 || showinventory == true)
  {
    fill(0,255,0);
    image(clawpart,clawpartX,clawpartY,65,55);
  }
}

function canvas19()
{
  background(thirdtable,0,0);
  paintCanvasButtons();
  if (clawpartinventoryposition == 0 || showinventory == true)
  {
    fill(0,255,0);
    image(clawpart,clawpartX,clawpartY,65,55);
  }
}

function canvas20()
{
  background(thirdchest,0,0);
  paintCanvasButtons();
  if (clawpartinventoryposition == 0 || showinventory == true)
  {
    fill(0,255,0);
    image(clawpart,clawpartX,clawpartY,65,55);
  }
}

function canvas21()
{
  background(chestgame,0,0);
  paintCanvasButtons();
  cursor(ARROW)
  if (stateiswon == 1)  
  { 
    fill(255,255,255);
    text("enter",200,50);
  } 
  //_____________________________________________________chestgame 1 
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
  //______________________________________________________chestgame 2
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
  //________________________________________________________chestgame 3
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
  if (mouseX > 238 && mouseX < 318 && mouseY > 180 && mouseY < 264)
  {
    cursor(HAND)
    if (mouseIsPressed == true && lock == false)
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
  }
  else if (mouseX > 362 && mouseX < 444 && mouseY > 180 && mouseY < 264)
  {
    cursor(HAND)
    if (mouseIsPressed == true && lock == false)
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
  }
 else if (mouseX > 486 && mouseX < 568 && mouseY > 180 && mouseY < 264)
  {
    cursor(HAND)
    if (mouseIsPressed == true && lock == false)
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
  }
  else 
  {
    cursor(ARROW)
  }

  if (stateoflight1 == 5 && stateoflight2 == 4 && stateoflight3 == 2)
  {
    canvas = 22 
    lock = true; 
  } 

  if (clawpartinventoryposition == 0 || showinventory == true)
  {
    fill(0,255,0);
    image(clawpart,clawpartX,clawpartY,65,55);
  }
}

function canvas22()
{
  background(chestopen,0,0);
  paintCanvasButtons();
  inventory2();
  if (clawmaininventoryposition == 0 || showinventory == true)
  {
    //fill(255,0,0);
    image(clawmain,clawmainX,clawmainY,70,60);
  }

  if (clawpartinventoryposition == 0 || showinventory == true)
  {
    fill(0,255,0);
    image(clawpart,clawpartX,clawpartY,65,55);
  }
}

function canvas23()
{
  background(thirdfirst,0,0)
  paintCanvasButtons();
  if (clawpartinventoryposition == 0 || showinventory == true)
  {
    fill(0,255,0);
    image(clawpart,clawpartX,clawpartY,65,55);
  }
  if (clawmaininventoryposition == 0 || showinventory == true)
  {
    //fill(255,0,0);
    image(clawmain,clawmainX,clawmainY,70,60);
  }
}

function canvas24()
{
  background(thirdtable,0,0);
  paintCanvasButtons();
  if (clawpartinventoryposition == 0 || showinventory == true)
  {
    fill(0,255,0);
    image(clawpart,clawpartX,clawpartY,65,55);
  }
  if (clawmaininventoryposition == 0 || showinventory == true)
  {
    //fill(255,0,0);
    image(clawmain,clawmainX,clawmainY,70,60);
  }
}

function canvas25()
{
  background(thirdtable,0,0);
  paintCanvasButtons();
  image(clawpart,326,203,80,70)
  if (clawmaininventoryposition == 0 || showinventory == true)
  {
    //fill(255,0,0);
    image(clawmain,clawmainX,clawmainY,70,60);
  }
}

function canvas26()
{
  background(thirdtable,0,0);
  paintCanvasButtons();
  inventory3();
  cursor(ARROW)
  if (mouseX > 331 && mouseX < 394 && mouseY > 203 && mouseY < 257)
  {
    cursor(HAND)
  }
  else 
  {
    cursor(ARROW)
  }
  if (clawwholeinventoryposition == 0 || showinventory == true)
  {
    //fill(255,0,0);
    image(wholeclaw,clawwholeX,clawwholeY,70,60);
  }
}
function canvas27()
{
  background(thirdfirst,0,0)
  if (mouseIsPressed == true && mouseButton == LEFT && lockellipseOrientation == false)
  {

    ellipseOrientation = 0;

    lockellipseOrientation = true;
  }

  if (ellipseOrientation == 0)
  {
    image(wholeclaw,mainclawX-20,mainclawY-20,40,40);
  }

  if (permanentLock1 == false)
    fill(100,100,100);
  ellipseDistance = sqrt((mainclawX-mouseX)*(mainclawX-mouseX)+(mainclawY-mouseY)*(mainclawY-mouseY))
  if(ellipseDistance< 20)

  {
    if (mouseIsPressed == true && mouseButton == LEFT && lock == false && lock2 == false)
    {
      lock = true;
    }
  }

  if (lock == true)
  {
    fill(255,0,0);
    mainclawX = mouseX;
    mainclawY = mouseY;

    stickDistance = sqrt((stickLocation1X-mouseX)*(stickLocation1X-mouseX)+(stickLocation1Y-mouseY)*(stickLocation1Y-mouseY))
    
    if (stickDistance < 30)
    {
      mainclawX = stickLocation1X;
      mainclawY = stickLocation1Y;
      permanentLock1 = true;
    }
    if (permanentLock1 == true)
    {
      canvas = 29
      lock = true
    }
    

  }
}
function canvas29()
{
  background(thirdfirst,0,0)
  image(wholeclaw,514,130,40,40)
  fill(0, 255, 0)
  rect(514,177,44,20)
}
function canvas28()
{
  cursor(ARROW)
  background(102, 153, 255)
  text("YOU WIN!",380,290)
}
function inventory1()

{
  spaces = 150;

  // start - code for collecting items
  // if the item is collectable 
  
  if (clawpartinventoryposition == 0)
  {
    if (mouseX > clawpartX && mouseX < clawpartX+clawpartXsize && mouseY > clawpartY && mouseY < clawpartY+clawpartYsize && mouseIsPressed == true && lock == false)
    {
      inventoryitem = inventoryitem + 1;
      clawpartinventoryposition = inventoryitem;
      lock = true;
    }
  }
  // end - code for collecting items    



  // start - code for arranging inventory items in order they were clicked
  if (showinventory == true)
  {
    if (clawpartinventoryposition > 0)
    {
      clawpartX = spaces+45*clawpartinventoryposition+25;
      clawpartY = 600-60;
    }
    
  }
  // end - code for arranging inventory items in order they were clicked
}

function inventory2()

{
  spaces = 150;

 
  // end - random items on the screen to collect



  // start - code for collecting items
  // if the item is collectable 
  if (clawmaininventoryposition == 0)
  {
    // if you click on the item set the inventory position it is on and increase inventory position to prepare next item
    if (mouseX > clawmainX && mouseX < clawmainX+clawmainXsize && mouseY > clawmainY && mouseY < clawmainY+clawmainYsize && mouseIsPressed == true && lock == false)
    {
      inventoryitem = inventoryitem + 1;
      clawmaininventoryposition = inventoryitem;
      lock = true;
    }
  }
  
  // end - code for collecting items    



  // start - code for arranging inventory items in order they were clicked
  if (showinventory == true)
  {
    if (clawmaininventoryposition > 0)
    {
      clawmainX = spaces+50*clawmaininventoryposition+35;
      clawmainY = 600-70;
    }
    
    
  }
}
function inventory3()
{
  if (clawwholeinventoryposition == 0)
  {
    // if you click on the item set the inventory position it is on and increase inventory position to prepare next item
    if (mouseX > clawwholeX && mouseX < clawwholeX+clawwholeXsize && mouseY > clawwholeY && mouseY < clawwholeY+clawwholeYsize && mouseIsPressed == true && lock == false)
    {
      inventoryitem = inventoryitem + 1;
      clawwholeinventoryposition = inventoryitem;
      lock = true;
    }
  }

  if (showinventory == true)
  {
    if (clawwholeinventoryposition > 0)
    {
      clawwholeX = spaces+10*clawwholeinventoryposition+40;
      clawwholeY = 600-70;
    }
  }
  // end - code for arranging inventory items in order they were clicked
}

function paintCanvasButtons()
{  
  if (canvas == 1)
  {
    if (mouseX > 0 && mouseX < 62 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        lock = true;
        if (canvas == 1)
        {
          canvas = 2;
        }
      }
    } 
    else if (mouseX > 736 && mouseX < 800 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        lock = true;
        if (canvas == 1)
        {
          canvas = 3;
        }
      }
    }
    else if (mouseX > 162 && mouseX < 522 && mouseY > 224 && mouseY < 246)
    { 
      cursor(HAND);
      if (mouseIsPressed == true && lock == false)
      {
      canvas = 4;
      lock = true;
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }

  if (canvas == 2)
  {
    if (mouseX > 0 && mouseX < 62 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        lock = true;
        if (canvas == 2)
        {
          canvas = 5;
        }
      }
    }
   else if (mouseX > 736 && mouseX < 800 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false) 
      {
        lock = true;
        if (canvas == 2)
        {
          canvas = 1;
        }
      }
    }
   else if ( mouseX > 290 && mouseX < 476 && mouseY > 24 && mouseY < 402)
  {
    cursor(HAND)
     if (mouseIsPressed == true && lock == false)
     {
      canvas = 7;
      lock = true; 
     }
   }
   else  
    {
       cursor(ARROW);
    }
  }
  

  if (canvas == 3)
  {
    cursor(ARROW)
    if (mouseX > 0 && mouseX < 62 && mouseY > 286 && mouseY < 312)
      {
        cursor(HAND)
        if (mouseIsPressed == true && lock == false)
        {
          lock = true;
          if (canvas == 3)
          {
            canvas = 1;
          }
        }
      }
    else if (mouseX > 736 && mouseX < 800 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        lock = true;
        if (canvas == 3)
        {
          canvas = 5;
        }
      }
    }
    else if (mouseX > 296 && mouseX < 528 && mouseY > 26 && mouseY < 500 )
    {
      cursor(HAND);
    }
    else  
    {
       cursor(ARROW);
    }
  }

  if (canvas == 4)
  {
    cursor(ARROW)
    if (mouseX > 14 && mouseX < 790 && mouseY > 0 && mouseY < 146)
    {
      cursor(HAND);
      if (mouseIsPressed == true && lock == false)
      {
      canvas = 1 
      lock = true; 
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }

  if (canvas == 5)
  {
    cursor(ARROW)
    if (mouseX > 0 && mouseX < 62 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 3;
        lock = true
      }
    }
    else if (mouseX > 736 && mouseX < 800 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {        
        lock = true;
        canvas = 2; 
      }
    }
    else if (mouseX > 340 && mouseX < 442 && mouseY > 11 && mouseY < 254)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 6;
        lock = true; 
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }

  if (canvas == 6)
  {
    cursor(ARROW)
    if (mouseX > 0 & mouseX < 800 && mouseY > 0 && mouseY < 600)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        lock = true
        canvas = 5 
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }

  if (canvas == 7)
  { 
    cursor(ARROW)
    //left
    if (mouseX > 0 && mouseX < 62 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 8;
        lock = true;
      }
    }
    // right
    else if (mouseX > 736 && mouseX < 800 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if ( mouseIsPressed == true && lock == false)
      {
        canvas = 8;
        lock = true;
      }
    }
    //drawer
    else if (mouseX > 60 && mouseX < 80 && mouseY > 334 && mouseY < 438)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 9; 
        lock = true; 
      }
    }
    //puzzle 
    else if (mouseX > 10 && mouseX < 106 && mouseY > 198 && mouseY < 260)
    {
      cursor(HAND)
      if ( mouseIsPressed == true && lock == false)
      {
        canvas = 13; 
        lock = true; 
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }

  if (canvas == 8)
  {
    cursor(ARROW)
    if (mouseX > 0 && mouseX < 62 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 7;
        lock = true
      }
    }
    else if (mouseX > 736 && mouseX < 800 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        lock = true;
        canvas = 7;
      }
    }
    else if (mouseX > 76 && mouseX < 354 && mouseY > 60 && mouseY < 154)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 11; 
        lock = true; 
      }
    }
    else if (mouseX > 450 && mouseX < 772 && mouseY > 402 && mouseY < 442)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 12; 
        lock = true; 
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 9)
  {
    cursor(ARROW)    
    if (mouseX > 354 && mouseX < 440 && mouseY > 312 && mouseY < 336)
    {
      cursor(HAND)
      if (mouseIsPressed==true && lock==false)
      {
        canvas = 10; 
        lock = true;
      } 
    }
    else if (mouseX > 152 && mouseX < 546 && mouseY > 0 && mouseY < 165)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 8; 
        lock = true; 
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 10)
  {
    cursor(ARROW)
    if (mouseX > 96 && mouseX < 694 && mouseY > 0 && mouseY < 170)
    {
      cursor(HAND)
      if (mouseIsPressed == true & lock == false)
      {
        canvas = 9; 
        lock = true; 
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 11)
  {
    cursor(ARROW)
    if (mouseX > 0 && mouseX < 800 && mouseY > 0 && mouseY < 600)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 8; 
        lock = true; 
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 12)
  {
    cursor(ARROW)
    if (mouseX > 0 && mouseX < 800 && mouseY > 0 && mouseY < 600)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 8; 
        lock = true; 
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 13)
  {
    cursor(ARROW)
    if (mouseX > 454 && mouseX < 508 && mouseY > 335 && mouseY < 393)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 14 
        lock = true;
      } 
    }
    else if (mouseX > 0 && mouseX < 62 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 7;
        lock = true
      }
    }
    else if (mouseX > 736 && mouseX < 800 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        lock = true;
        canvas = 7;
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 14)
  {
    if (mouseX > 442 && mouseX < 510 && mouseY > 467 && mouseY <522)
    {
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 15; 
        lock = true;
      }
    }
  }
  if (canvas == 15)
  { 
    cursor(ARROW)
    if (mouseX > 712 && mouseX < 782 && mouseY > 12 && mouseY < 42)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 16; 
        lock = true;
      } 
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 17)
  {
    cursor(ARROW)
    if (mouseX > 632 && mouseX < 800 && mouseY > 0 && mouseY < 378)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 18; 
        lock = true; 
      }
    }
    else if (mouseX > 253 && mouseX <314 && mouseY > 480 && mouseY < 510)
    {
      cursor(HAND)
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 18)
  {
    cursor(ARROW)
    if (mouseX > 0 && mouseX < 62 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 20; 
        lock = true;
      } 
    }
    else if (mouseX > 736 && mouseX < 800 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 20; 
        lock = true; 
      }
    }
    else if (mouseX > 130 && mouseX < 434 && mouseY > 202 && mouseY < 210 )
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 19; 
        lock = true
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 19)
  {
    cursor(ARROW)
    if (mouseX > 82 && mouseX < 740 && mouseY > 0 && mouseY < 130)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 18; 
        lock = true; 
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }  
  if (canvas == 20)
  {
    cursor(ARROW)
    if (mouseX > 0 && mouseX < 62 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 18; 
        lock = true; 
      }
    }
    else if (mouseX > 736 && mouseX < 800 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 18; 
        lock = true; 
      }
    }
    else if (mouseX > 402 && mouseX < 458 && mouseY > 285 && mouseY < 313)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 21; 
        lock = true;
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 22)
  {
    cursor(ARROW)
    if (mouseX > 0 && mouseX < 62 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 23; 
        lock = true; 
      }
    }
    else if (mouseX > 736 && mouseX < 800 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 23; 
        lock = true; 
      }
    }
    else if (mouseX > 420 && mouseX < 470 && mouseY > 230 && mouseY < 290)
    {
      cursor(HAND)
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 23)
  {
    cursor(ARROW)
    if (mouseX > 0 && mouseX < 62 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 22; 
        lock = true; 
      }
    }
    else if (mouseX > 736 && mouseX < 800 && mouseY > 286 && mouseY < 312)
    {
      cursor(HAND)
      if(mouseIsPressed == true && lock == false)
      {
        canvas = 22; 
        lock = true; 
      }
    }
    else if (mouseX > 130 && mouseX < 434 && mouseY > 202 && mouseY < 210)
    {
      cursor(HAND)
      if(mouseIsPressed == true && lock == false)
      {
        canvas = 24; 
        lock = true;
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 24)
  {
    cursor(ARROW)
    if (mouseX > 82 && mouseX < 740 && mouseY > 0 && mouseY < 130)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 23; 
        lock = true;
      } 
    }
    else if (mouseX > 212 && mouseX < 284 && mouseY > 527 && mouseY < 600)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 25;
        lock = true; 
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 25)
  {
    cursor(ARROW)
    if (mouseX > 292 && mouseX < 360 && mouseY > 527 && mouseY < 600)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 26;
        lock = true; 
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 26)
  {
    cursor(ARROW)
    if (mouseX > 82 && mouseX < 740 && mouseY > 0 && mouseY < 130)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 27; 
        lock = true; 
      }
    }
    else  
    {
       cursor(ARROW);
    }
  }
  if (canvas == 29)
  {
    cursor(ARROW)
    if (mouseX > 514 && mouseX < 558 && mouseY > 177 && mouseY < 177+20)
    {
      cursor(HAND)
      if (mouseIsPressed == true && lock == false)
      {
        canvas = 28
        lock = true
      }
    }
    else
    {
      cursor(ARROW)
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