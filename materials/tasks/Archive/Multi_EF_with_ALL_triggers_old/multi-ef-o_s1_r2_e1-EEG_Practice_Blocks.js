/************************************************ 
 * Multi-Ef-O_S1_R2_E1-Eeg_Practice_Blocks Test *
 ************************************************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'multi-ef-o_s1_r2_e1-EEG_Practice_Blocks';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// for our own functions we need these specified in the global space 
// so these are defined in the "Before experiment" tab
// linspace (this will be used in place of numpy.linspace for picking ISI)


var n;
function linspace(a,b,n) {
    if(typeof n === "undefined") n = Math.max(Math.round(b-a)+1,1);
    if(n<2) { return n===1?[a]:[]; }
    var i,ret = Array(n);
    n--;
    for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
    return ret;
}
/* Syntax Error: Fix Python code */
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(jsCodeRoutineBegin());
flowScheduler.add(jsCodeRoutineEachFrame());
flowScheduler.add(jsCodeRoutineEnd());
flowScheduler.add(beginInstructRoutineBegin());
flowScheduler.add(beginInstructRoutineEachFrame());
flowScheduler.add(beginInstructRoutineEnd());
flowScheduler.add(beginInstruct_2aRoutineBegin());
flowScheduler.add(beginInstruct_2aRoutineEachFrame());
flowScheduler.add(beginInstruct_2aRoutineEnd());
flowScheduler.add(beginInstruct_3aRoutineBegin());
flowScheduler.add(beginInstruct_3aRoutineEachFrame());
flowScheduler.add(beginInstruct_3aRoutineEnd());
const colorblockLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(colorblockLoopLoopBegin(colorblockLoopLoopScheduler));
flowScheduler.add(colorblockLoopLoopScheduler);
flowScheduler.add(colorblockLoopLoopEnd);
const shapeblockLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(shapeblockLoopLoopBegin(shapeblockLoopLoopScheduler));
flowScheduler.add(shapeblockLoopLoopScheduler);
flowScheduler.add(shapeblockLoopLoopEnd);
const switchBlockLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(switchBlockLoopLoopBegin(switchBlockLoopLoopScheduler));
flowScheduler.add(switchBlockLoopLoopScheduler);
flowScheduler.add(switchBlockLoopLoopEnd);
flowScheduler.add(expEnd_intructRoutineBegin());
flowScheduler.add(expEnd_intructRoutineEachFrame());
flowScheduler.add(expEnd_intructRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'practice_faceSelect.csv', 'path': 'practice_faceSelect.csv'},
    {'name': 'images/4F1_Fa_OS.jpg', 'path': 'images/4F1_Fa_OS.jpg'},
    {'name': 'images/2M2_Sc_OD.jpg', 'path': 'images/2M2_Sc_OD.jpg'},
    {'name': 'images/1F1_Sc_BD.jpg', 'path': 'images/1F1_Sc_BD.jpg'},
    {'name': 'inhib_practiceblockSelect_Color.csv', 'path': 'inhib_practiceblockSelect_Color.csv'},
    {'name': 'images/1F1_Sc_OS.jpg', 'path': 'images/1F1_Sc_OS.jpg'},
    {'name': 'images/2M1_Fa_BD.jpg', 'path': 'images/2M1_Fa_BD.jpg'},
    {'name': 'images/3M1_Sc_BD.jpg', 'path': 'images/3M1_Sc_BD.jpg'},
    {'name': 'images/4F1_Sc_BS.jpg', 'path': 'images/4F1_Sc_BS.jpg'},
    {'name': 'shape.xlsx', 'path': 'shape.xlsx'},
    {'name': 'images/4F1_Fa_OD.jpg', 'path': 'images/4F1_Fa_OD.jpg'},
    {'name': 'color.xlsx', 'path': 'color.xlsx'},
    {'name': 'face3M1_Fa.xlsx', 'path': 'face3M1_Fa.xlsx'},
    {'name': 'switch.xlsx', 'path': 'switch.xlsx'},
    {'name': 'images/2M1_Fa_OS.jpg', 'path': 'images/2M1_Fa_OS.jpg'},
    {'name': 'face3M1_Sc.xlsx', 'path': 'face3M1_Sc.xlsx'},
    {'name': 'face4F1_Fa.xlsx', 'path': 'face4F1_Fa.xlsx'},
    {'name': 'images/1F1_Fa_OS.jpg', 'path': 'images/1F1_Fa_OS.jpg'},
    {'name': 'images/4F1_Sc_OS.jpg', 'path': 'images/4F1_Sc_OS.jpg'},
    {'name': 'images/2M1_Sc_BD.jpg', 'path': 'images/2M1_Sc_BD.jpg'},
    {'name': 'images/4F1_Fa_BS.jpg', 'path': 'images/4F1_Fa_BS.jpg'},
    {'name': 'face4F1_Sc.xlsx', 'path': 'face4F1_Sc.xlsx'},
    {'name': 'images/1F1_Fa_OD.jpg', 'path': 'images/1F1_Fa_OD.jpg'},
    {'name': 'images/3M1_Sc_BS.jpg', 'path': 'images/3M1_Sc_BS.jpg'},
    {'name': 'images/2M2_Sc_BD.jpg', 'path': 'images/2M2_Sc_BD.jpg'},
    {'name': 'face1F1_Sc.xlsx', 'path': 'face1F1_Sc.xlsx'},
    {'name': 'images/4F1_Fa_BD.jpg', 'path': 'images/4F1_Fa_BD.jpg'},
    {'name': 'inhib_practiceblockSelect_Shape.csv', 'path': 'inhib_practiceblockSelect_Shape.csv'},
    {'name': 'images/2M1_Sc_BS.jpg', 'path': 'images/2M1_Sc_BS.jpg'},
    {'name': 'images/3M1_Fa_BD.jpg', 'path': 'images/3M1_Fa_BD.jpg'},
    {'name': 'images/3M1_Fa_BS.jpg', 'path': 'images/3M1_Fa_BS.jpg'},
    {'name': 'images/1F1_Fa_BS.jpg', 'path': 'images/1F1_Fa_BS.jpg'},
    {'name': 'images/3M1_Fa_OS.jpg', 'path': 'images/3M1_Fa_OS.jpg'},
    {'name': 'images/3M1_Sc_OS.jpg', 'path': 'images/3M1_Sc_OS.jpg'},
    {'name': 'images/1F1_Sc_OD.jpg', 'path': 'images/1F1_Sc_OD.jpg'},
    {'name': 'images/3M1_Fa_OD.jpg', 'path': 'images/3M1_Fa_OD.jpg'},
    {'name': 'images/2M1_Sc_OD.jpg', 'path': 'images/2M1_Sc_OD.jpg'},
    {'name': 'face1F1_Fa.xlsx', 'path': 'face1F1_Fa.xlsx'},
    {'name': 'images/3M1_Sc_OD.jpg', 'path': 'images/3M1_Sc_OD.jpg'},
    {'name': 'images/4F1_Sc_BD.jpg', 'path': 'images/4F1_Sc_BD.jpg'},
    {'name': 'images/2M1_Sc_OS.jpg', 'path': 'images/2M1_Sc_OS.jpg'},
    {'name': 'switchonly_practiceblockSelect.csv', 'path': 'switchonly_practiceblockSelect.csv'},
    {'name': 'images/2M1_Fa_BS.jpg', 'path': 'images/2M1_Fa_BS.jpg'},
    {'name': 'images/2M1_Fa_OD.jpg', 'path': 'images/2M1_Fa_OD.jpg'},
    {'name': 'images/1F1_Sc_BS.jpg', 'path': 'images/1F1_Sc_BS.jpg'},
    {'name': 'face2M1_Fa.xlsx', 'path': 'face2M1_Fa.xlsx'},
    {'name': 'images/4F1_Sc_OD.jpg', 'path': 'images/4F1_Sc_OD.jpg'},
    {'name': 'face2M1_Sc.xlsx', 'path': 'face2M1_Sc.xlsx'},
    {'name': 'images/1F1_Fa_BD.jpg', 'path': 'images/1F1_Fa_BD.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var jsCodeClock;
var shuffle;
var beginInstructClock;
var begin_text1;
var Connected;
var thread;
var pracImage_center;
var pracImage_top;
var pracImage_right;
var pracImage_bottom;
var pracImage_left;
var begin_keyResp;
var begin_text2;
var beginInstruct_2aClock;
var begin_text1_4;
var pracImage_center_2;
var pracImage_top_2;
var pracImage_right_2;
var pracImage_bottom_2;
var pracImage_left_2;
var begin_keyResp_4;
var begin_text2_4;
var beginInstruct_3aClock;
var begin_text1_3a;
var begin_text2_3a;
var begin_keyResp_3a;
var task_instructClock;
var taskName;
var task_Text;
var leftKey_text;
var rightKey_text;
var task_text5;
var LeftReminder_text;
var rightReminder_text;
var pracOrMain_keyResp;
var task_instruct2Clock;
var taskName_2;
var task_Text_2;
var task_text_3;
var task_text_4;
var LeftReminder_text_5;
var rightReminder_text_5;
var pracOrMain_keyResp_3;
var cueRoutineClock;
var reminderDur;
var LeftReminder_text_3;
var rightReminder_text_3;
var cuePresented;
var break_cueLoopClock;
var StimRoutineClock;
var CB;
var blueKey;
var squareKey;
var orangeKey;
var diagKey;
var LeftReminder_text_4;
var rightReminder_text_4;
var centerPresented;
var topPresented;
var rightPresented;
var bottomPresented;
var leftPresented;
var keyResp;
var break_stimLoopClock;
var clearTrialClock;
var taskEnd_instructClock;
var isForward;
var counterOne;
var counterTwo;
var msg;
var taskEnd_text;
var key_resp;
var break_cueLoop_2Clock;
var break_stimLoop_2Clock;
var taskEnd_instruct_2Clock;
var taskEnd_text_3;
var key_resp_4;
var break_cueLoop_3Clock;
var break_stimLoop_3Clock;
var taskEnd_instruct_3Clock;
var taskEnd_text_4;
var key_resp_5;
var expEnd_intructClock;
var taskEnd_text_2;
var key_resp_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "jsCode"
  jsCodeClock = new util.Clock();
  // shuffle is push in JS so defining shuffle for our JS experiment code
  shuffle = util.shuffle;
  // Initialize components for Routine "beginInstruct"
  beginInstructClock = new util.Clock();
  begin_text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin_text1',
    text: 'Welcome to BRAIN GAMES!\n\nHere, you will play a series of computer games.\n\nEach game will involve a set of 5 images being flashed on the screen, similar to the set below:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.025,  wrapWidth: 23, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Connected = true;
  thread = new threading.Thread({"target": ReadThread, "args": [port]});
  thread.start();
  port.write([255]);
  time.sleep(PulseWidth);
  
  pracImage_center = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pracImage_center', units : undefined, 
    image : 'images/2M2_Sc_BD.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  pracImage_top = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pracImage_top', units : undefined, 
    image : 'images/2M2_Sc_BD.jpg', mask : undefined,
    ori : 0, pos : [0, 0.18], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  pracImage_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pracImage_right', units : undefined, 
    image : 'images/2M2_Sc_BD.jpg', mask : undefined,
    ori : 0, pos : [0.18, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  pracImage_bottom = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pracImage_bottom', units : undefined, 
    image : 'images/2M2_Sc_BD.jpg', mask : undefined,
    ori : 0, pos : [0, (- 0.18)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  pracImage_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pracImage_left', units : undefined, 
    image : 'images/2M2_Sc_BD.jpg', mask : undefined,
    ori : 0, pos : [(- 0.18), 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -6.0 
  });
  begin_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  begin_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin_text2',
    text: 'Sometimes the images flashed on the screen will all be the same (like the set of images above).\n\nPress the left or right button to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.025,  wrapWidth: 23, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  Connected = true;
  thread = new threading.Thread({"target": ReadThread, "args": [port]});
  thread.start();
  
  // Initialize components for Routine "beginInstruct_2a"
  beginInstruct_2aClock = new util.Clock();
  begin_text1_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin_text1_4',
    text: 'Sometimes the images flashed on the screen will differ\nin their color or shape (like the set of images below).\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.025,  wrapWidth: 23, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  pracImage_center_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pracImage_center_2', units : undefined, 
    image : 'images/2M2_Sc_OD.jpg', mask : undefined,
    ori : 315, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  pracImage_top_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pracImage_top_2', units : undefined, 
    image : 'images/2M2_Sc_BD.jpg', mask : undefined,
    ori : 0, pos : [0, 0.18], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  pracImage_right_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pracImage_right_2', units : undefined, 
    image : 'images/2M2_Sc_BD.jpg', mask : undefined,
    ori : 0, pos : [0.18, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  pracImage_bottom_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pracImage_bottom_2', units : undefined, 
    image : 'images/2M2_Sc_BD.jpg', mask : undefined,
    ori : 0, pos : [0, (- 0.18)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  pracImage_left_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pracImage_left_2', units : undefined, 
    image : 'images/2M2_Sc_BD.jpg', mask : undefined,
    ori : 0, pos : [(- 0.18), 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  begin_keyResp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  begin_text2_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin_text2_4',
    text: 'However, you only need to respond to the central image and should ignore the rest.\n\n\n\nPress the left or right button to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.025,  wrapWidth: 23, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  // Initialize components for Routine "beginInstruct_3a"
  beginInstruct_3aClock = new util.Clock();
  begin_text1_3a = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin_text1_3a',
    text: "The rules for how to you should respond to central image\nwill be different in each game you play today. \n\nBefore each game starts, you will be informed of the game's\nrules and be given a chance to practice before playing the \nreal game.\n\nAre you ready to learn about the first game?",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: 23, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  begin_text2_3a = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin_text2_3a',
    text: 'Press the left or right button to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.025,  wrapWidth: 23, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  begin_keyResp_3a = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "task_instruct"
  task_instructClock = new util.Clock();
  taskName = new visual.TextStim({
    win: psychoJS.window,
    name: 'taskName',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.387], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  task_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_Text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.141], height: 0.025,  wrapWidth: 22, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  leftKey_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftKey_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.106], height: 0.025,  wrapWidth: 22, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  rightKey_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightKey_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.141], height: 0.025,  wrapWidth: 22, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  task_text5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_text5',
    text: 'Press the left or right button to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.025,  wrapWidth: 22, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  LeftReminder_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'LeftReminder_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), (- 0.45)], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  rightReminder_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightReminder_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  pracOrMain_keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "task_instruct2"
  task_instruct2Clock = new util.Clock();
  taskName_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'taskName_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.176], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  task_Text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_Text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: 22, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  task_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  task_text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_text_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: 22, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  LeftReminder_text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'LeftReminder_text_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), (- 0.45)], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  rightReminder_text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightReminder_text_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, (- 0.45)], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  pracOrMain_keyResp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "cueRoutine"
  cueRoutineClock = new util.Clock();
  reminderDur = 1000;
  
  LeftReminder_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'LeftReminder_text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), (- 0.45)], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  rightReminder_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightReminder_text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, (- 0.45)], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  cuePresented = new visual.TextStim({
    win: psychoJS.window,
    name: 'cuePresented',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  /* Syntax Error: Fix Python code */
  // Initialize components for Routine "break_cueLoop"
  break_cueLoopClock = new util.Clock();
  // Initialize components for Routine "StimRoutine"
  StimRoutineClock = new util.Clock();
  CB = "BSOD";
  if ((CB === "BSOD")) {
      blueKey = "1";
      squareKey = "1";
      orangeKey = "8";
      diagKey = "8";
  } else {
      if ((CB === "BDOS")) {
          blueKey = "1";
          squareKey = "8";
          orangeKey = "8";
          diagKey = "1";
      } else {
          if ((CB === "ODBS")) {
              blueKey = "8";
              squareKey = "8";
              orangeKey = "1";
              diagKey = "1";
          } else {
              if ((CB === "OSBD")) {
                  blueKey = "8";
                  squareKey = "1";
                  orangeKey = "1";
                  diagKey = "8";
              }
          }
      }
  }
  
  LeftReminder_text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'LeftReminder_text_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.45), (- 0.45)], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  rightReminder_text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightReminder_text_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, (- 0.45)], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  centerPresented = new visual.ImageStim({
    win : psychoJS.window,
    name : 'centerPresented', units : undefined, 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  topPresented = new visual.ImageStim({
    win : psychoJS.window,
    name : 'topPresented', units : undefined, 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0.18], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  rightPresented = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rightPresented', units : undefined, 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0.18, 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -6.0 
  });
  bottomPresented = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bottomPresented', units : undefined, 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, (- 0.18)], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -7.0 
  });
  leftPresented = new visual.ImageStim({
    win : psychoJS.window,
    name : 'leftPresented', units : undefined, 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [(- 0.18), 0], size : [0.1, 0.1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -8.0 
  });
  Connected = true;
  thread = new threading.Thread({"target": ReadThread, "args": [port]});
  thread.start();
  
  keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Connected = true;
  thread = new threading.Thread({"target": ReadThread, "args": [port]});
  thread.start();
  
  // Initialize components for Routine "break_stimLoop"
  break_stimLoopClock = new util.Clock();
  /* Syntax Error: Fix Python code */
  // Initialize components for Routine "clearTrial"
  clearTrialClock = new util.Clock();
  // Initialize components for Routine "taskEnd_instruct"
  taskEnd_instructClock = new util.Clock();
  isForward = 0;
  counterOne = 0;
  counterTwo = 0;
  msg = "";
  
  taskEnd_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'taskEnd_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break_cueLoop_2"
  break_cueLoop_2Clock = new util.Clock();
  // Initialize components for Routine "break_stimLoop_2"
  break_stimLoop_2Clock = new util.Clock();
  /* Syntax Error: Fix Python code */
  // Initialize components for Routine "taskEnd_instruct_2"
  taskEnd_instruct_2Clock = new util.Clock();
  isForward = 0;
  counterOne = 0;
  counterTwo = 0;
  msg = "";
  
  taskEnd_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'taskEnd_text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break_cueLoop_3"
  break_cueLoop_3Clock = new util.Clock();
  // Initialize components for Routine "break_stimLoop_3"
  break_stimLoop_3Clock = new util.Clock();
  /* Syntax Error: Fix Python code */
  // Initialize components for Routine "taskEnd_instruct_3"
  taskEnd_instruct_3Clock = new util.Clock();
  isForward = 0;
  counterOne = 0;
  counterTwo = 0;
  msg = "";
  
  taskEnd_text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'taskEnd_text_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "expEnd_intruct"
  expEnd_intructClock = new util.Clock();
  taskEnd_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'taskEnd_text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var jsCodeComponents;
function jsCodeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'jsCode'-------
    t = 0;
    jsCodeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    jsCodeComponents = [];
    
    for (const thisComponent of jsCodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function jsCodeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'jsCode'-------
    // get current time
    t = jsCodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of jsCodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function jsCodeRoutineEnd() {
  return async function () {
    //------Ending Routine 'jsCode'-------
    for (const thisComponent of jsCodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "jsCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var pulse_started;
var pulse_ended;
var _begin_keyResp_allKeys;
var mark_started;
var mark_ended;
var beginInstructComponents;
function beginInstructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'beginInstruct'-------
    t = 0;
    beginInstructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    pulse_started = false;
    pulse_ended = false;
    
    begin_keyResp.keys = undefined;
    begin_keyResp.rt = undefined;
    _begin_keyResp_allKeys = [];
    mark_started = false;
    mark_ended = false;
    
    // keep track of which components have finished
    beginInstructComponents = [];
    beginInstructComponents.push(begin_text1);
    beginInstructComponents.push(pracImage_center);
    beginInstructComponents.push(pracImage_top);
    beginInstructComponents.push(pracImage_right);
    beginInstructComponents.push(pracImage_bottom);
    beginInstructComponents.push(pracImage_left);
    beginInstructComponents.push(begin_keyResp);
    beginInstructComponents.push(begin_text2);
    
    for (const thisComponent of beginInstructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var pulse_start_time;
var mark_start_time;
function beginInstructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'beginInstruct'-------
    // get current time
    t = beginInstructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *begin_text1* updates
    if (t >= 0.0 && begin_text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_text1.tStart = t;  // (not accounting for frame time here)
      begin_text1.frameNStart = frameN;  // exact frame index
      
      begin_text1.setAutoDraw(true);
    }

    if (((begin_text1.status === PsychoJS.Status.STARTED) && (! pulse_started))) {
        port.write([1]);
        time.sleep(PulseWidth);
        pulse_start_time = globalClock.getTime();
        pulse_started = true;
    }
    if ((pulse_started && (! pulse_ended))) {
        if (((globalClock.getTime() - pulse_start_time) >= 0.005)) {
            pulse_ended = true;
        }
    }
    
    
    // *pracImage_center* updates
    if (t >= 0.0 && pracImage_center.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracImage_center.tStart = t;  // (not accounting for frame time here)
      pracImage_center.frameNStart = frameN;  // exact frame index
      
      pracImage_center.setAutoDraw(true);
    }

    
    // *pracImage_top* updates
    if (t >= 0.0 && pracImage_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracImage_top.tStart = t;  // (not accounting for frame time here)
      pracImage_top.frameNStart = frameN;  // exact frame index
      
      pracImage_top.setAutoDraw(true);
    }

    
    // *pracImage_right* updates
    if (t >= 0.0 && pracImage_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracImage_right.tStart = t;  // (not accounting for frame time here)
      pracImage_right.frameNStart = frameN;  // exact frame index
      
      pracImage_right.setAutoDraw(true);
    }

    
    // *pracImage_bottom* updates
    if (t >= 0.0 && pracImage_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracImage_bottom.tStart = t;  // (not accounting for frame time here)
      pracImage_bottom.frameNStart = frameN;  // exact frame index
      
      pracImage_bottom.setAutoDraw(true);
    }

    
    // *pracImage_left* updates
    if (t >= 0.0 && pracImage_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracImage_left.tStart = t;  // (not accounting for frame time here)
      pracImage_left.frameNStart = frameN;  // exact frame index
      
      pracImage_left.setAutoDraw(true);
    }

    
    // *begin_keyResp* updates
    if (t >= 0.0 && begin_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_keyResp.tStart = t;  // (not accounting for frame time here)
      begin_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { begin_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { begin_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { begin_keyResp.clearEvents(); });
    }

    if (begin_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = begin_keyResp.getKeys({keyList: ['1', '8'], waitRelease: false});
      _begin_keyResp_allKeys = _begin_keyResp_allKeys.concat(theseKeys);
      if (_begin_keyResp_allKeys.length > 0) {
        begin_keyResp.keys = _begin_keyResp_allKeys[_begin_keyResp_allKeys.length - 1].name;  // just the last key pressed
        begin_keyResp.rt = _begin_keyResp_allKeys[_begin_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *begin_text2* updates
    if (t >= 0.0 && begin_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_text2.tStart = t;  // (not accounting for frame time here)
      begin_text2.frameNStart = frameN;  // exact frame index
      
      begin_text2.setAutoDraw(true);
    }

    if (((begin_keyResp.keys === "space") && (! mark_started))) {
        port.write([16]);
        time.sleep(PulseWidth);
        mark_start_time = globalClock.getTime();
        mark_started = true;
    }
    if ((mark_started && (! mark_ended))) {
        if (((globalClock.getTime() - mark_start_time) >= 0.4)) {
            mark_ended = true;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of beginInstructComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beginInstructRoutineEnd() {
  return async function () {
    //------Ending Routine 'beginInstruct'-------
    for (const thisComponent of beginInstructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Connected = false;
    thread.join(1.0);
    
    psychoJS.experiment.addData('begin_keyResp.keys', begin_keyResp.keys);
    if (typeof begin_keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('begin_keyResp.rt', begin_keyResp.rt);
        routineTimer.reset();
        }
    
    begin_keyResp.stop();
    port.write([255]);
    time.sleep(PulseWidth);
    Connected = false;
    thread.join(1.0);
    
    // the Routine "beginInstruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _begin_keyResp_4_allKeys;
var beginInstruct_2aComponents;
function beginInstruct_2aRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'beginInstruct_2a'-------
    t = 0;
    beginInstruct_2aClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    begin_keyResp_4.keys = undefined;
    begin_keyResp_4.rt = undefined;
    _begin_keyResp_4_allKeys = [];
    // keep track of which components have finished
    beginInstruct_2aComponents = [];
    beginInstruct_2aComponents.push(begin_text1_4);
    beginInstruct_2aComponents.push(pracImage_center_2);
    beginInstruct_2aComponents.push(pracImage_top_2);
    beginInstruct_2aComponents.push(pracImage_right_2);
    beginInstruct_2aComponents.push(pracImage_bottom_2);
    beginInstruct_2aComponents.push(pracImage_left_2);
    beginInstruct_2aComponents.push(begin_keyResp_4);
    beginInstruct_2aComponents.push(begin_text2_4);
    
    for (const thisComponent of beginInstruct_2aComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function beginInstruct_2aRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'beginInstruct_2a'-------
    // get current time
    t = beginInstruct_2aClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *begin_text1_4* updates
    if (t >= 0.0 && begin_text1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_text1_4.tStart = t;  // (not accounting for frame time here)
      begin_text1_4.frameNStart = frameN;  // exact frame index
      
      begin_text1_4.setAutoDraw(true);
    }

    
    // *pracImage_center_2* updates
    if (t >= 0.0 && pracImage_center_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracImage_center_2.tStart = t;  // (not accounting for frame time here)
      pracImage_center_2.frameNStart = frameN;  // exact frame index
      
      pracImage_center_2.setAutoDraw(true);
    }

    
    // *pracImage_top_2* updates
    if (t >= 0.0 && pracImage_top_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracImage_top_2.tStart = t;  // (not accounting for frame time here)
      pracImage_top_2.frameNStart = frameN;  // exact frame index
      
      pracImage_top_2.setAutoDraw(true);
    }

    
    // *pracImage_right_2* updates
    if (t >= 0.0 && pracImage_right_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracImage_right_2.tStart = t;  // (not accounting for frame time here)
      pracImage_right_2.frameNStart = frameN;  // exact frame index
      
      pracImage_right_2.setAutoDraw(true);
    }

    
    // *pracImage_bottom_2* updates
    if (t >= 0.0 && pracImage_bottom_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracImage_bottom_2.tStart = t;  // (not accounting for frame time here)
      pracImage_bottom_2.frameNStart = frameN;  // exact frame index
      
      pracImage_bottom_2.setAutoDraw(true);
    }

    
    // *pracImage_left_2* updates
    if (t >= 0.0 && pracImage_left_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracImage_left_2.tStart = t;  // (not accounting for frame time here)
      pracImage_left_2.frameNStart = frameN;  // exact frame index
      
      pracImage_left_2.setAutoDraw(true);
    }

    
    // *begin_keyResp_4* updates
    if (t >= 0.0 && begin_keyResp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_keyResp_4.tStart = t;  // (not accounting for frame time here)
      begin_keyResp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { begin_keyResp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { begin_keyResp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { begin_keyResp_4.clearEvents(); });
    }

    if (begin_keyResp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = begin_keyResp_4.getKeys({keyList: ['1', '8'], waitRelease: false});
      _begin_keyResp_4_allKeys = _begin_keyResp_4_allKeys.concat(theseKeys);
      if (_begin_keyResp_4_allKeys.length > 0) {
        begin_keyResp_4.keys = _begin_keyResp_4_allKeys[_begin_keyResp_4_allKeys.length - 1].name;  // just the last key pressed
        begin_keyResp_4.rt = _begin_keyResp_4_allKeys[_begin_keyResp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *begin_text2_4* updates
    if (t >= 0.0 && begin_text2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_text2_4.tStart = t;  // (not accounting for frame time here)
      begin_text2_4.frameNStart = frameN;  // exact frame index
      
      begin_text2_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of beginInstruct_2aComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beginInstruct_2aRoutineEnd() {
  return async function () {
    //------Ending Routine 'beginInstruct_2a'-------
    for (const thisComponent of beginInstruct_2aComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('begin_keyResp_4.keys', begin_keyResp_4.keys);
    if (typeof begin_keyResp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('begin_keyResp_4.rt', begin_keyResp_4.rt);
        routineTimer.reset();
        }
    
    begin_keyResp_4.stop();
    // the Routine "beginInstruct_2a" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _begin_keyResp_3a_allKeys;
var beginInstruct_3aComponents;
function beginInstruct_3aRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'beginInstruct_3a'-------
    t = 0;
    beginInstruct_3aClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    begin_keyResp_3a.keys = undefined;
    begin_keyResp_3a.rt = undefined;
    _begin_keyResp_3a_allKeys = [];
    // keep track of which components have finished
    beginInstruct_3aComponents = [];
    beginInstruct_3aComponents.push(begin_text1_3a);
    beginInstruct_3aComponents.push(begin_text2_3a);
    beginInstruct_3aComponents.push(begin_keyResp_3a);
    
    for (const thisComponent of beginInstruct_3aComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function beginInstruct_3aRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'beginInstruct_3a'-------
    // get current time
    t = beginInstruct_3aClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *begin_text1_3a* updates
    if (t >= 0.0 && begin_text1_3a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_text1_3a.tStart = t;  // (not accounting for frame time here)
      begin_text1_3a.frameNStart = frameN;  // exact frame index
      
      begin_text1_3a.setAutoDraw(true);
    }

    
    // *begin_text2_3a* updates
    if (t >= 0.0 && begin_text2_3a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_text2_3a.tStart = t;  // (not accounting for frame time here)
      begin_text2_3a.frameNStart = frameN;  // exact frame index
      
      begin_text2_3a.setAutoDraw(true);
    }

    
    // *begin_keyResp_3a* updates
    if (t >= 0.0 && begin_keyResp_3a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_keyResp_3a.tStart = t;  // (not accounting for frame time here)
      begin_keyResp_3a.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { begin_keyResp_3a.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { begin_keyResp_3a.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { begin_keyResp_3a.clearEvents(); });
    }

    if (begin_keyResp_3a.status === PsychoJS.Status.STARTED) {
      let theseKeys = begin_keyResp_3a.getKeys({keyList: ['1', '8'], waitRelease: false});
      _begin_keyResp_3a_allKeys = _begin_keyResp_3a_allKeys.concat(theseKeys);
      if (_begin_keyResp_3a_allKeys.length > 0) {
        begin_keyResp_3a.keys = _begin_keyResp_3a_allKeys[_begin_keyResp_3a_allKeys.length - 1].name;  // just the last key pressed
        begin_keyResp_3a.rt = _begin_keyResp_3a_allKeys[_begin_keyResp_3a_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of beginInstruct_3aComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beginInstruct_3aRoutineEnd() {
  return async function () {
    //------Ending Routine 'beginInstruct_3a'-------
    for (const thisComponent of beginInstruct_3aComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('begin_keyResp_3a.keys', begin_keyResp_3a.keys);
    if (typeof begin_keyResp_3a.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('begin_keyResp_3a.rt', begin_keyResp_3a.rt);
        routineTimer.reset();
        }
    
    begin_keyResp_3a.stop();
    // the Routine "beginInstruct_3a" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var colorblockLoop;
var currentLoop;
function colorblockLoopLoopBegin(colorblockLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    colorblockLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'inhib_practiceblockSelect_Color.csv',
      seed: undefined, name: 'colorblockLoop'
    });
    psychoJS.experiment.addLoop(colorblockLoop); // add the loop to the experiment
    currentLoop = colorblockLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisColorblockLoop of colorblockLoop) {
      const snapshot = colorblockLoop.getSnapshot();
      colorblockLoopLoopScheduler.add(importConditions(snapshot));
      colorblockLoopLoopScheduler.add(task_instructRoutineBegin(snapshot));
      colorblockLoopLoopScheduler.add(task_instructRoutineEachFrame());
      colorblockLoopLoopScheduler.add(task_instructRoutineEnd());
      colorblockLoopLoopScheduler.add(task_instruct2RoutineBegin(snapshot));
      colorblockLoopLoopScheduler.add(task_instruct2RoutineEachFrame());
      colorblockLoopLoopScheduler.add(task_instruct2RoutineEnd());
      const trialLoopLoopScheduler = new Scheduler(psychoJS);
      colorblockLoopLoopScheduler.add(trialLoopLoopBegin(trialLoopLoopScheduler, snapshot));
      colorblockLoopLoopScheduler.add(trialLoopLoopScheduler);
      colorblockLoopLoopScheduler.add(trialLoopLoopEnd);
      colorblockLoopLoopScheduler.add(taskEnd_instructRoutineBegin(snapshot));
      colorblockLoopLoopScheduler.add(taskEnd_instructRoutineEachFrame());
      colorblockLoopLoopScheduler.add(taskEnd_instructRoutineEnd());
      colorblockLoopLoopScheduler.add(endLoopIteration(colorblockLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trialLoop;
function trialLoopLoopBegin(trialLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_faceSelect.csv',
      seed: undefined, name: 'trialLoop'
    });
    psychoJS.experiment.addLoop(trialLoop); // add the loop to the experiment
    currentLoop = trialLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialLoop of trialLoop) {
      const snapshot = trialLoop.getSnapshot();
      trialLoopLoopScheduler.add(importConditions(snapshot));
      const cueLoopLoopScheduler = new Scheduler(psychoJS);
      trialLoopLoopScheduler.add(cueLoopLoopBegin(cueLoopLoopScheduler, snapshot));
      trialLoopLoopScheduler.add(cueLoopLoopScheduler);
      trialLoopLoopScheduler.add(cueLoopLoopEnd);
      const stimLoopLoopScheduler = new Scheduler(psychoJS);
      trialLoopLoopScheduler.add(stimLoopLoopBegin(stimLoopLoopScheduler, snapshot));
      trialLoopLoopScheduler.add(stimLoopLoopScheduler);
      trialLoopLoopScheduler.add(stimLoopLoopEnd);
      trialLoopLoopScheduler.add(clearTrialRoutineBegin(snapshot));
      trialLoopLoopScheduler.add(clearTrialRoutineEachFrame());
      trialLoopLoopScheduler.add(clearTrialRoutineEnd());
      trialLoopLoopScheduler.add(endLoopIteration(trialLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var cueLoop;
function cueLoopLoopBegin(cueLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    cueLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: whichBlock,
      seed: undefined, name: 'cueLoop'
    });
    psychoJS.experiment.addLoop(cueLoop); // add the loop to the experiment
    currentLoop = cueLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCueLoop of cueLoop) {
      const snapshot = cueLoop.getSnapshot();
      cueLoopLoopScheduler.add(importConditions(snapshot));
      cueLoopLoopScheduler.add(cueRoutineRoutineBegin(snapshot));
      cueLoopLoopScheduler.add(cueRoutineRoutineEachFrame());
      cueLoopLoopScheduler.add(cueRoutineRoutineEnd());
      cueLoopLoopScheduler.add(break_cueLoopRoutineBegin(snapshot));
      cueLoopLoopScheduler.add(break_cueLoopRoutineEachFrame());
      cueLoopLoopScheduler.add(break_cueLoopRoutineEnd());
      cueLoopLoopScheduler.add(endLoopIteration(cueLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function cueLoopLoopEnd() {
  psychoJS.experiment.removeLoop(cueLoop);

  return Scheduler.Event.NEXT;
}


var stimLoop;
function stimLoopLoopBegin(stimLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    stimLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: whichFace,
      seed: undefined, name: 'stimLoop'
    });
    psychoJS.experiment.addLoop(stimLoop); // add the loop to the experiment
    currentLoop = stimLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStimLoop of stimLoop) {
      const snapshot = stimLoop.getSnapshot();
      stimLoopLoopScheduler.add(importConditions(snapshot));
      stimLoopLoopScheduler.add(StimRoutineRoutineBegin(snapshot));
      stimLoopLoopScheduler.add(StimRoutineRoutineEachFrame());
      stimLoopLoopScheduler.add(StimRoutineRoutineEnd());
      stimLoopLoopScheduler.add(break_stimLoopRoutineBegin(snapshot));
      stimLoopLoopScheduler.add(break_stimLoopRoutineEachFrame());
      stimLoopLoopScheduler.add(break_stimLoopRoutineEnd());
      stimLoopLoopScheduler.add(endLoopIteration(stimLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function stimLoopLoopEnd() {
  psychoJS.experiment.removeLoop(stimLoop);

  return Scheduler.Event.NEXT;
}


async function trialLoopLoopEnd() {
  psychoJS.experiment.removeLoop(trialLoop);

  return Scheduler.Event.NEXT;
}


async function colorblockLoopLoopEnd() {
  psychoJS.experiment.removeLoop(colorblockLoop);

  return Scheduler.Event.NEXT;
}


var shapeblockLoop;
function shapeblockLoopLoopBegin(shapeblockLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    shapeblockLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'inhib_practiceblockSelect_Shape.csv',
      seed: undefined, name: 'shapeblockLoop'
    });
    psychoJS.experiment.addLoop(shapeblockLoop); // add the loop to the experiment
    currentLoop = shapeblockLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisShapeblockLoop of shapeblockLoop) {
      const snapshot = shapeblockLoop.getSnapshot();
      shapeblockLoopLoopScheduler.add(importConditions(snapshot));
      shapeblockLoopLoopScheduler.add(task_instructRoutineBegin(snapshot));
      shapeblockLoopLoopScheduler.add(task_instructRoutineEachFrame());
      shapeblockLoopLoopScheduler.add(task_instructRoutineEnd());
      shapeblockLoopLoopScheduler.add(task_instruct2RoutineBegin(snapshot));
      shapeblockLoopLoopScheduler.add(task_instruct2RoutineEachFrame());
      shapeblockLoopLoopScheduler.add(task_instruct2RoutineEnd());
      const shapetrialLoopLoopScheduler = new Scheduler(psychoJS);
      shapeblockLoopLoopScheduler.add(shapetrialLoopLoopBegin(shapetrialLoopLoopScheduler, snapshot));
      shapeblockLoopLoopScheduler.add(shapetrialLoopLoopScheduler);
      shapeblockLoopLoopScheduler.add(shapetrialLoopLoopEnd);
      shapeblockLoopLoopScheduler.add(taskEnd_instruct_2RoutineBegin(snapshot));
      shapeblockLoopLoopScheduler.add(taskEnd_instruct_2RoutineEachFrame());
      shapeblockLoopLoopScheduler.add(taskEnd_instruct_2RoutineEnd());
      shapeblockLoopLoopScheduler.add(endLoopIteration(shapeblockLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var shapetrialLoop;
function shapetrialLoopLoopBegin(shapetrialLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    shapetrialLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_faceSelect.csv',
      seed: undefined, name: 'shapetrialLoop'
    });
    psychoJS.experiment.addLoop(shapetrialLoop); // add the loop to the experiment
    currentLoop = shapetrialLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisShapetrialLoop of shapetrialLoop) {
      const snapshot = shapetrialLoop.getSnapshot();
      shapetrialLoopLoopScheduler.add(importConditions(snapshot));
      const shapecueLoopLoopScheduler = new Scheduler(psychoJS);
      shapetrialLoopLoopScheduler.add(shapecueLoopLoopBegin(shapecueLoopLoopScheduler, snapshot));
      shapetrialLoopLoopScheduler.add(shapecueLoopLoopScheduler);
      shapetrialLoopLoopScheduler.add(shapecueLoopLoopEnd);
      const shapeStimLoopLoopScheduler = new Scheduler(psychoJS);
      shapetrialLoopLoopScheduler.add(shapeStimLoopLoopBegin(shapeStimLoopLoopScheduler, snapshot));
      shapetrialLoopLoopScheduler.add(shapeStimLoopLoopScheduler);
      shapetrialLoopLoopScheduler.add(shapeStimLoopLoopEnd);
      shapetrialLoopLoopScheduler.add(clearTrialRoutineBegin(snapshot));
      shapetrialLoopLoopScheduler.add(clearTrialRoutineEachFrame());
      shapetrialLoopLoopScheduler.add(clearTrialRoutineEnd());
      shapetrialLoopLoopScheduler.add(endLoopIteration(shapetrialLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var shapecueLoop;
function shapecueLoopLoopBegin(shapecueLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    shapecueLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: whichBlock,
      seed: undefined, name: 'shapecueLoop'
    });
    psychoJS.experiment.addLoop(shapecueLoop); // add the loop to the experiment
    currentLoop = shapecueLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisShapecueLoop of shapecueLoop) {
      const snapshot = shapecueLoop.getSnapshot();
      shapecueLoopLoopScheduler.add(importConditions(snapshot));
      shapecueLoopLoopScheduler.add(cueRoutineRoutineBegin(snapshot));
      shapecueLoopLoopScheduler.add(cueRoutineRoutineEachFrame());
      shapecueLoopLoopScheduler.add(cueRoutineRoutineEnd());
      shapecueLoopLoopScheduler.add(break_cueLoop_2RoutineBegin(snapshot));
      shapecueLoopLoopScheduler.add(break_cueLoop_2RoutineEachFrame());
      shapecueLoopLoopScheduler.add(break_cueLoop_2RoutineEnd());
      shapecueLoopLoopScheduler.add(endLoopIteration(shapecueLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function shapecueLoopLoopEnd() {
  psychoJS.experiment.removeLoop(shapecueLoop);

  return Scheduler.Event.NEXT;
}


var shapeStimLoop;
function shapeStimLoopLoopBegin(shapeStimLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    shapeStimLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: whichFace,
      seed: undefined, name: 'shapeStimLoop'
    });
    psychoJS.experiment.addLoop(shapeStimLoop); // add the loop to the experiment
    currentLoop = shapeStimLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisShapeStimLoop of shapeStimLoop) {
      const snapshot = shapeStimLoop.getSnapshot();
      shapeStimLoopLoopScheduler.add(importConditions(snapshot));
      shapeStimLoopLoopScheduler.add(StimRoutineRoutineBegin(snapshot));
      shapeStimLoopLoopScheduler.add(StimRoutineRoutineEachFrame());
      shapeStimLoopLoopScheduler.add(StimRoutineRoutineEnd());
      shapeStimLoopLoopScheduler.add(break_stimLoop_2RoutineBegin(snapshot));
      shapeStimLoopLoopScheduler.add(break_stimLoop_2RoutineEachFrame());
      shapeStimLoopLoopScheduler.add(break_stimLoop_2RoutineEnd());
      shapeStimLoopLoopScheduler.add(endLoopIteration(shapeStimLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function shapeStimLoopLoopEnd() {
  psychoJS.experiment.removeLoop(shapeStimLoop);

  return Scheduler.Event.NEXT;
}


async function shapetrialLoopLoopEnd() {
  psychoJS.experiment.removeLoop(shapetrialLoop);

  return Scheduler.Event.NEXT;
}


async function shapeblockLoopLoopEnd() {
  psychoJS.experiment.removeLoop(shapeblockLoop);

  return Scheduler.Event.NEXT;
}


var switchBlockLoop;
function switchBlockLoopLoopBegin(switchBlockLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    switchBlockLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'switchonly_practiceblockSelect.csv',
      seed: undefined, name: 'switchBlockLoop'
    });
    psychoJS.experiment.addLoop(switchBlockLoop); // add the loop to the experiment
    currentLoop = switchBlockLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSwitchBlockLoop of switchBlockLoop) {
      const snapshot = switchBlockLoop.getSnapshot();
      switchBlockLoopLoopScheduler.add(importConditions(snapshot));
      switchBlockLoopLoopScheduler.add(task_instructRoutineBegin(snapshot));
      switchBlockLoopLoopScheduler.add(task_instructRoutineEachFrame());
      switchBlockLoopLoopScheduler.add(task_instructRoutineEnd());
      switchBlockLoopLoopScheduler.add(task_instruct2RoutineBegin(snapshot));
      switchBlockLoopLoopScheduler.add(task_instruct2RoutineEachFrame());
      switchBlockLoopLoopScheduler.add(task_instruct2RoutineEnd());
      const switchtrialLoopLoopScheduler = new Scheduler(psychoJS);
      switchBlockLoopLoopScheduler.add(switchtrialLoopLoopBegin(switchtrialLoopLoopScheduler, snapshot));
      switchBlockLoopLoopScheduler.add(switchtrialLoopLoopScheduler);
      switchBlockLoopLoopScheduler.add(switchtrialLoopLoopEnd);
      switchBlockLoopLoopScheduler.add(taskEnd_instruct_3RoutineBegin(snapshot));
      switchBlockLoopLoopScheduler.add(taskEnd_instruct_3RoutineEachFrame());
      switchBlockLoopLoopScheduler.add(taskEnd_instruct_3RoutineEnd());
      switchBlockLoopLoopScheduler.add(endLoopIteration(switchBlockLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var switchtrialLoop;
function switchtrialLoopLoopBegin(switchtrialLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    switchtrialLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_faceSelect.csv',
      seed: undefined, name: 'switchtrialLoop'
    });
    psychoJS.experiment.addLoop(switchtrialLoop); // add the loop to the experiment
    currentLoop = switchtrialLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSwitchtrialLoop of switchtrialLoop) {
      const snapshot = switchtrialLoop.getSnapshot();
      switchtrialLoopLoopScheduler.add(importConditions(snapshot));
      const switchCueLoopLoopScheduler = new Scheduler(psychoJS);
      switchtrialLoopLoopScheduler.add(switchCueLoopLoopBegin(switchCueLoopLoopScheduler, snapshot));
      switchtrialLoopLoopScheduler.add(switchCueLoopLoopScheduler);
      switchtrialLoopLoopScheduler.add(switchCueLoopLoopEnd);
      const switchStimLoopLoopScheduler = new Scheduler(psychoJS);
      switchtrialLoopLoopScheduler.add(switchStimLoopLoopBegin(switchStimLoopLoopScheduler, snapshot));
      switchtrialLoopLoopScheduler.add(switchStimLoopLoopScheduler);
      switchtrialLoopLoopScheduler.add(switchStimLoopLoopEnd);
      switchtrialLoopLoopScheduler.add(clearTrialRoutineBegin(snapshot));
      switchtrialLoopLoopScheduler.add(clearTrialRoutineEachFrame());
      switchtrialLoopLoopScheduler.add(clearTrialRoutineEnd());
      switchtrialLoopLoopScheduler.add(endLoopIteration(switchtrialLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var switchCueLoop;
function switchCueLoopLoopBegin(switchCueLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    switchCueLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: whichBlock,
      seed: undefined, name: 'switchCueLoop'
    });
    psychoJS.experiment.addLoop(switchCueLoop); // add the loop to the experiment
    currentLoop = switchCueLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSwitchCueLoop of switchCueLoop) {
      const snapshot = switchCueLoop.getSnapshot();
      switchCueLoopLoopScheduler.add(importConditions(snapshot));
      switchCueLoopLoopScheduler.add(break_cueLoopRoutineBegin(snapshot));
      switchCueLoopLoopScheduler.add(break_cueLoopRoutineEachFrame());
      switchCueLoopLoopScheduler.add(break_cueLoopRoutineEnd());
      switchCueLoopLoopScheduler.add(break_cueLoop_3RoutineBegin(snapshot));
      switchCueLoopLoopScheduler.add(break_cueLoop_3RoutineEachFrame());
      switchCueLoopLoopScheduler.add(break_cueLoop_3RoutineEnd());
      switchCueLoopLoopScheduler.add(endLoopIteration(switchCueLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function switchCueLoopLoopEnd() {
  psychoJS.experiment.removeLoop(switchCueLoop);

  return Scheduler.Event.NEXT;
}


var switchStimLoop;
function switchStimLoopLoopBegin(switchStimLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    switchStimLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: whichFace,
      seed: undefined, name: 'switchStimLoop'
    });
    psychoJS.experiment.addLoop(switchStimLoop); // add the loop to the experiment
    currentLoop = switchStimLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSwitchStimLoop of switchStimLoop) {
      const snapshot = switchStimLoop.getSnapshot();
      switchStimLoopLoopScheduler.add(importConditions(snapshot));
      switchStimLoopLoopScheduler.add(StimRoutineRoutineBegin(snapshot));
      switchStimLoopLoopScheduler.add(StimRoutineRoutineEachFrame());
      switchStimLoopLoopScheduler.add(StimRoutineRoutineEnd());
      switchStimLoopLoopScheduler.add(break_stimLoop_3RoutineBegin(snapshot));
      switchStimLoopLoopScheduler.add(break_stimLoop_3RoutineEachFrame());
      switchStimLoopLoopScheduler.add(break_stimLoop_3RoutineEnd());
      switchStimLoopLoopScheduler.add(endLoopIteration(switchStimLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function switchStimLoopLoopEnd() {
  psychoJS.experiment.removeLoop(switchStimLoop);

  return Scheduler.Event.NEXT;
}


async function switchtrialLoopLoopEnd() {
  psychoJS.experiment.removeLoop(switchtrialLoop);

  return Scheduler.Event.NEXT;
}


async function switchBlockLoopLoopEnd() {
  psychoJS.experiment.removeLoop(switchBlockLoop);

  return Scheduler.Event.NEXT;
}


var leftKeyText;
var rightKeyText;
var leftReminder;
var rightReminder;
var _pracOrMain_keyResp_allKeys;
var task_instructComponents;
function task_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'task_instruct'-------
    t = 0;
    task_instructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((CB === "BSOD")) {
        blueKey = "1";
        squareKey = "1";
        orangeKey = "8";
        diagKey = "8";
        if ((whichBlock === "color.xlsx")) {
            leftKeyText = "the center image is BLUE \n";
            rightKeyText = "\n \n \n \n \n \n the center image is ORANGE";
            leftReminder = "BLUE - SQUARE";
            rightReminder = "ORANGE - DIAMOND";
        } else {
            if ((whichBlock === "shape.xlsx")) {
                leftKeyText = "the center image is a SQUARE \n";
                rightKeyText = "\n \n \n \n \n \n the center image is DIAMOND";
                leftReminder = "BLUE - SQUARE";
                rightReminder = "ORANGE - DIAMOND";
            } else {
                if ((whichBlock === "switch.xlsx")) {
                    leftKeyText = "\n \n \n \n \n the word says COLOR and the image is BLUE, \n or if the word says SHAPE and the image is a SQUARE \n";
                    rightKeyText = "\n \n \n \n \n \n \n \n \n \n \n \n \n the word says COLOR and the image is ORANGE, \n or if the word says SHAPE and the image is a DIAMOND";
                    leftReminder = "BLUE - SQUARE";
                    rightReminder = "ORANGE - DIAMOND";
                }
            }
        }
    } else {
        if ((CB === "BDOS")) {
            blueKey = "1";
            squareKey = "8";
            orangeKey = "8";
            diagKey = "1";
        } else {
            if ((CB === "ODBS")) {
                blueKey = "8";
                squareKey = "8";
                orangeKey = "1";
                diagKey = "1";
            } else {
                if ((CB === "OSBD")) {
                    blueKey = "8";
                    squareKey = "1";
                    orangeKey = "1";
                    diagKey = "8";
                }
            }
        }
    }
    
    taskName.setText(taskNameSource);
    task_Text.setText(taskTextSource);
    leftKey_text.setText(leftKeyText);
    rightKey_text.setText(rightKeyText);
    LeftReminder_text.setText(leftReminder);
    rightReminder_text.setText(rightReminder);
    pracOrMain_keyResp.keys = undefined;
    pracOrMain_keyResp.rt = undefined;
    _pracOrMain_keyResp_allKeys = [];
    // keep track of which components have finished
    task_instructComponents = [];
    task_instructComponents.push(taskName);
    task_instructComponents.push(task_Text);
    task_instructComponents.push(leftKey_text);
    task_instructComponents.push(rightKey_text);
    task_instructComponents.push(task_text5);
    task_instructComponents.push(LeftReminder_text);
    task_instructComponents.push(rightReminder_text);
    task_instructComponents.push(pracOrMain_keyResp);
    
    for (const thisComponent of task_instructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function task_instructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'task_instruct'-------
    // get current time
    t = task_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *taskName* updates
    if (t >= 0.0 && taskName.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      taskName.tStart = t;  // (not accounting for frame time here)
      taskName.frameNStart = frameN;  // exact frame index
      
      taskName.setAutoDraw(true);
    }

    
    // *task_Text* updates
    if (t >= 0.0 && task_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_Text.tStart = t;  // (not accounting for frame time here)
      task_Text.frameNStart = frameN;  // exact frame index
      
      task_Text.setAutoDraw(true);
    }

    
    // *leftKey_text* updates
    if (t >= 0.0 && leftKey_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftKey_text.tStart = t;  // (not accounting for frame time here)
      leftKey_text.frameNStart = frameN;  // exact frame index
      
      leftKey_text.setAutoDraw(true);
    }

    
    // *rightKey_text* updates
    if (t >= 0.0 && rightKey_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightKey_text.tStart = t;  // (not accounting for frame time here)
      rightKey_text.frameNStart = frameN;  // exact frame index
      
      rightKey_text.setAutoDraw(true);
    }

    
    // *task_text5* updates
    if (t >= 0.0 && task_text5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_text5.tStart = t;  // (not accounting for frame time here)
      task_text5.frameNStart = frameN;  // exact frame index
      
      task_text5.setAutoDraw(true);
    }

    
    // *LeftReminder_text* updates
    if (t >= 0.0 && LeftReminder_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      LeftReminder_text.tStart = t;  // (not accounting for frame time here)
      LeftReminder_text.frameNStart = frameN;  // exact frame index
      
      LeftReminder_text.setAutoDraw(true);
    }

    
    // *rightReminder_text* updates
    if (t >= 0.0 && rightReminder_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightReminder_text.tStart = t;  // (not accounting for frame time here)
      rightReminder_text.frameNStart = frameN;  // exact frame index
      
      rightReminder_text.setAutoDraw(true);
    }

    
    // *pracOrMain_keyResp* updates
    if (t >= 0.0 && pracOrMain_keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracOrMain_keyResp.tStart = t;  // (not accounting for frame time here)
      pracOrMain_keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pracOrMain_keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pracOrMain_keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pracOrMain_keyResp.clearEvents(); });
    }

    if (pracOrMain_keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = pracOrMain_keyResp.getKeys({keyList: ['1', '8'], waitRelease: false});
      _pracOrMain_keyResp_allKeys = _pracOrMain_keyResp_allKeys.concat(theseKeys);
      if (_pracOrMain_keyResp_allKeys.length > 0) {
        pracOrMain_keyResp.keys = _pracOrMain_keyResp_allKeys[_pracOrMain_keyResp_allKeys.length - 1].name;  // just the last key pressed
        pracOrMain_keyResp.rt = _pracOrMain_keyResp_allKeys[_pracOrMain_keyResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of task_instructComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function task_instructRoutineEnd() {
  return async function () {
    //------Ending Routine 'task_instruct'-------
    for (const thisComponent of task_instructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pracOrMain_keyResp.keys', pracOrMain_keyResp.keys);
    if (typeof pracOrMain_keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pracOrMain_keyResp.rt', pracOrMain_keyResp.rt);
        routineTimer.reset();
        }
    
    pracOrMain_keyResp.stop();
    // the Routine "task_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var startText;
var _pracOrMain_keyResp_3_allKeys;
var task_instruct2Components;
function task_instruct2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'task_instruct2'-------
    t = 0;
    task_instruct2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((practice === 1)) {
        startText = "\n \n \n \n \n \n \n \n \n \n \n \n \n \n Press either the left or right button to practice this game";
    } else {
        if ((practice === 0)) {
            startText = "\n \n \n \n \n \n \n \n \n \n \n \n \n \n Press either the left or right button to start the real game";
        }
    }
    
    taskName_2.setText(taskNameSource);
    task_Text_2.setText('\n\nPlease rest your left finger on the left button and your right finger on the right button.\nWhen an image is shown, you should respond as quickly as you can while also being correct.');
    task_text_3.setText(cueReminderTextSource);
    task_text_4.setText(startText);
    LeftReminder_text_5.setText(leftReminder);
    rightReminder_text_5.setText(rightReminder);
    pracOrMain_keyResp_3.keys = undefined;
    pracOrMain_keyResp_3.rt = undefined;
    _pracOrMain_keyResp_3_allKeys = [];
    // keep track of which components have finished
    task_instruct2Components = [];
    task_instruct2Components.push(taskName_2);
    task_instruct2Components.push(task_Text_2);
    task_instruct2Components.push(task_text_3);
    task_instruct2Components.push(task_text_4);
    task_instruct2Components.push(LeftReminder_text_5);
    task_instruct2Components.push(rightReminder_text_5);
    task_instruct2Components.push(pracOrMain_keyResp_3);
    
    for (const thisComponent of task_instruct2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function task_instruct2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'task_instruct2'-------
    // get current time
    t = task_instruct2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *taskName_2* updates
    if (t >= 0.0 && taskName_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      taskName_2.tStart = t;  // (not accounting for frame time here)
      taskName_2.frameNStart = frameN;  // exact frame index
      
      taskName_2.setAutoDraw(true);
    }

    
    // *task_Text_2* updates
    if (t >= 0.0 && task_Text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_Text_2.tStart = t;  // (not accounting for frame time here)
      task_Text_2.frameNStart = frameN;  // exact frame index
      
      task_Text_2.setAutoDraw(true);
    }

    
    // *task_text_3* updates
    if (t >= 0.0 && task_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_text_3.tStart = t;  // (not accounting for frame time here)
      task_text_3.frameNStart = frameN;  // exact frame index
      
      task_text_3.setAutoDraw(true);
    }

    
    // *task_text_4* updates
    if (t >= 0.0 && task_text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_text_4.tStart = t;  // (not accounting for frame time here)
      task_text_4.frameNStart = frameN;  // exact frame index
      
      task_text_4.setAutoDraw(true);
    }

    
    // *LeftReminder_text_5* updates
    if (t >= 0.0 && LeftReminder_text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      LeftReminder_text_5.tStart = t;  // (not accounting for frame time here)
      LeftReminder_text_5.frameNStart = frameN;  // exact frame index
      
      LeftReminder_text_5.setAutoDraw(true);
    }

    
    // *rightReminder_text_5* updates
    if (t >= 0.0 && rightReminder_text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightReminder_text_5.tStart = t;  // (not accounting for frame time here)
      rightReminder_text_5.frameNStart = frameN;  // exact frame index
      
      rightReminder_text_5.setAutoDraw(true);
    }

    
    // *pracOrMain_keyResp_3* updates
    if (t >= 0.0 && pracOrMain_keyResp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracOrMain_keyResp_3.tStart = t;  // (not accounting for frame time here)
      pracOrMain_keyResp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pracOrMain_keyResp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pracOrMain_keyResp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pracOrMain_keyResp_3.clearEvents(); });
    }

    if (pracOrMain_keyResp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = pracOrMain_keyResp_3.getKeys({keyList: ['1', '8'], waitRelease: false});
      _pracOrMain_keyResp_3_allKeys = _pracOrMain_keyResp_3_allKeys.concat(theseKeys);
      if (_pracOrMain_keyResp_3_allKeys.length > 0) {
        pracOrMain_keyResp_3.keys = _pracOrMain_keyResp_3_allKeys[_pracOrMain_keyResp_3_allKeys.length - 1].name;  // just the last key pressed
        pracOrMain_keyResp_3.rt = _pracOrMain_keyResp_3_allKeys[_pracOrMain_keyResp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of task_instruct2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function task_instruct2RoutineEnd() {
  return async function () {
    //------Ending Routine 'task_instruct2'-------
    for (const thisComponent of task_instruct2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pracOrMain_keyResp_3.keys', pracOrMain_keyResp_3.keys);
    if (typeof pracOrMain_keyResp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pracOrMain_keyResp_3.rt', pracOrMain_keyResp_3.rt);
        routineTimer.reset();
        }
    
    pracOrMain_keyResp_3.stop();
    // the Routine "task_instruct2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var RSIRange;
var thisRSI;
var cueRoutineComponents;
function cueRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'cueRoutine'-------
    t = 0;
    cueRoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    RSIRange = linspace(1000, 1500, 500);
    shuffle(RSIRange);
    thisRSI = (RSIRange[0] / 1000);
    reminderDur = (thisRSI + 1);
    console.log("thisRSI: ", thisRSI);
    cueLoop.addData("RSI", thisRSI);
    
    LeftReminder_text_3.setText(leftReminder);
    rightReminder_text_3.setText(rightReminder);
    cuePresented.setText(whichCue);
    pulse_started = false;
    pulse_ended = false;
    
    // keep track of which components have finished
    cueRoutineComponents = [];
    cueRoutineComponents.push(LeftReminder_text_3);
    cueRoutineComponents.push(rightReminder_text_3);
    cueRoutineComponents.push(cuePresented);
    
    for (const thisComponent of cueRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function cueRoutineRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'cueRoutine'-------
    // get current time
    t = cueRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *LeftReminder_text_3* updates
    if (t >= 0 && LeftReminder_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      LeftReminder_text_3.tStart = t;  // (not accounting for frame time here)
      LeftReminder_text_3.frameNStart = frameN;  // exact frame index
      
      LeftReminder_text_3.setAutoDraw(true);
    }

    frameRemains = 0 + reminderDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (LeftReminder_text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      LeftReminder_text_3.setAutoDraw(false);
    }
    
    // *rightReminder_text_3* updates
    if (t >= 0 && rightReminder_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightReminder_text_3.tStart = t;  // (not accounting for frame time here)
      rightReminder_text_3.frameNStart = frameN;  // exact frame index
      
      rightReminder_text_3.setAutoDraw(true);
    }

    frameRemains = 0 + reminderDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rightReminder_text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rightReminder_text_3.setAutoDraw(false);
    }
    
    // *cuePresented* updates
    if (t >= thisRSI && cuePresented.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cuePresented.tStart = t;  // (not accounting for frame time here)
      cuePresented.frameNStart = frameN;  // exact frame index
      
      cuePresented.setAutoDraw(true);
    }

    frameRemains = thisRSI + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cuePresented.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cuePresented.setAutoDraw(false);
    }
    if (((cuePresented.status === PsychoJS.Status.STARTED) && (! pulse_started))) {
        if ((whichCue === "SHAPE")) {
            port.write([1]);
            pulse_start_time = globalClock.getTime();
            pulse_started = true;
        } else {
            if ((whichCue === "COLOR")) {
                port.write([2]);
                pulse_start_time = globalClock.getTime();
                pulse_started = true;
            }
        }
    }
    if ((pulse_started && (! pulse_ended))) {
        if (((globalClock.getTime() - pulse_start_time) >= 0.005)) {
            pulse_ended = true;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cueRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cueRoutineRoutineEnd() {
  return async function () {
    //------Ending Routine 'cueRoutine'-------
    for (const thisComponent of cueRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    /* Syntax Error: Fix Python code */
    // the Routine "cueRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var break_cueLoopComponents;
function break_cueLoopRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'break_cueLoop'-------
    t = 0;
    break_cueLoopClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    break_cueLoopComponents = [];
    
    for (const thisComponent of break_cueLoopComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function break_cueLoopRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'break_cueLoop'-------
    // get current time
    t = break_cueLoopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of break_cueLoopComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_cueLoopRoutineEnd() {
  return async function () {
    //------Ending Routine 'break_cueLoop'-------
    for (const thisComponent of break_cueLoopComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    cueLoop.finished = true;
    
    // the Routine "break_cueLoop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ISIRange;
var thisISI;
var corrAns;
var postTriggerPauseTime_1;
var pauseStartTime_1;
var triggerSent_1;
var portsCleared_1;
var _keyResp_allKeys;
var keys_counted;
var postTriggerPauseTime;
var pauseStartTime;
var triggerSent;
var portsCleared;
var StimRoutineComponents;
function StimRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'StimRoutine'-------
    t = 0;
    StimRoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ISIRange = linspace(1000, 1500, 500);
    shuffle(ISIRange);
    thisISI = (ISIRange[0] / 1000);
    reminderDur = (thisISI + 1.5);
    console.log("thisISI: ", thisISI);
    stimLoop.addData("ISI", thisISI);
    
    if ((whichCue === "SHAPE")) {
        if ((rotCenter === 315)) {
            corrAns = diagKey;
        } else {
            corrAns = squareKey;
        }
    } else {
        if ((whichCue === "COLOR")) {
            if ((blueCenter === 1)) {
                corrAns = blueKey;
            } else {
                corrAns = orangeKey;
            }
        }
    }
    stimLoop.addData("corrAns", corrAns);
    
    LeftReminder_text_4.setText(leftReminder);
    rightReminder_text_4.setText(rightReminder);
    centerPresented.setOri(rotCenter);
    centerPresented.setImage(center);
    topPresented.setOri(rotSurround);
    topPresented.setImage(surround);
    rightPresented.setOri(rotSurround);
    rightPresented.setImage(surround);
    bottomPresented.setOri(rotSurround);
    bottomPresented.setImage(surround);
    leftPresented.setOri(rotSurround);
    leftPresented.setImage(surround);
    postTriggerPauseTime_1 = 0.04;
    pauseStartTime_1 = 0;
    triggerSent_1 = false;
    portsCleared_1 = false;
    
    keyResp.keys = undefined;
    keyResp.rt = undefined;
    _keyResp_allKeys = [];
    mark_started = false;
    mark_ended = false;
    port.write([0]);
    Connected = false;
    thread.join(1.0);
    keys_counted = [];
    postTriggerPauseTime = 0.05;
    pauseStartTime = 0;
    triggerSent = false;
    portsCleared = true;
    
    // keep track of which components have finished
    StimRoutineComponents = [];
    StimRoutineComponents.push(LeftReminder_text_4);
    StimRoutineComponents.push(rightReminder_text_4);
    StimRoutineComponents.push(centerPresented);
    StimRoutineComponents.push(topPresented);
    StimRoutineComponents.push(rightPresented);
    StimRoutineComponents.push(bottomPresented);
    StimRoutineComponents.push(leftPresented);
    StimRoutineComponents.push(keyResp);
    
    for (const thisComponent of StimRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function StimRoutineRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'StimRoutine'-------
    // get current time
    t = StimRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *LeftReminder_text_4* updates
    if (t >= 0 && LeftReminder_text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      LeftReminder_text_4.tStart = t;  // (not accounting for frame time here)
      LeftReminder_text_4.frameNStart = frameN;  // exact frame index
      
      LeftReminder_text_4.setAutoDraw(true);
    }

    frameRemains = 0 + reminderDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (LeftReminder_text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      LeftReminder_text_4.setAutoDraw(false);
    }
    
    // *rightReminder_text_4* updates
    if (t >= 0 && rightReminder_text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightReminder_text_4.tStart = t;  // (not accounting for frame time here)
      rightReminder_text_4.frameNStart = frameN;  // exact frame index
      
      rightReminder_text_4.setAutoDraw(true);
    }

    frameRemains = 0 + reminderDur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rightReminder_text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rightReminder_text_4.setAutoDraw(false);
    }
    
    // *centerPresented* updates
    if (t >= thisISI && centerPresented.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centerPresented.tStart = t;  // (not accounting for frame time here)
      centerPresented.frameNStart = frameN;  // exact frame index
      
      centerPresented.setAutoDraw(true);
    }

    frameRemains = thisISI + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (centerPresented.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      centerPresented.setAutoDraw(false);
    }
    
    // *topPresented* updates
    if (t >= thisISI && topPresented.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      topPresented.tStart = t;  // (not accounting for frame time here)
      topPresented.frameNStart = frameN;  // exact frame index
      
      topPresented.setAutoDraw(true);
    }

    frameRemains = thisISI + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (topPresented.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      topPresented.setAutoDraw(false);
    }
    
    // *rightPresented* updates
    if (t >= thisISI && rightPresented.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightPresented.tStart = t;  // (not accounting for frame time here)
      rightPresented.frameNStart = frameN;  // exact frame index
      
      rightPresented.setAutoDraw(true);
    }

    frameRemains = thisISI + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rightPresented.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rightPresented.setAutoDraw(false);
    }
    
    // *bottomPresented* updates
    if (t >= thisISI && bottomPresented.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bottomPresented.tStart = t;  // (not accounting for frame time here)
      bottomPresented.frameNStart = frameN;  // exact frame index
      
      bottomPresented.setAutoDraw(true);
    }

    frameRemains = thisISI + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bottomPresented.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bottomPresented.setAutoDraw(false);
    }
    
    // *leftPresented* updates
    if (t >= thisISI && leftPresented.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftPresented.tStart = t;  // (not accounting for frame time here)
      leftPresented.frameNStart = frameN;  // exact frame index
      
      leftPresented.setAutoDraw(true);
    }

    frameRemains = thisISI + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (leftPresented.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      leftPresented.setAutoDraw(false);
    }
    if (((centerPresented.status === PsychoJS.Status.STARTED) && (! triggerSent_1))) {
        if (((ethnicity === 1) && (rotCenter === 0))) {
            port.write([23]);
            time.sleep(PulseWidth);
            triggerSent_1 = true;
            pauseStartTime_1 = t;
        } else {
            if (((ethnicity === 1) && (rotCenter === 45))) {
                port.write([27]);
                time.sleep(PulseWidth);
                triggerSent_1 = true;
                pauseStartTime_1 = t;
            } else {
                if (((ethnicity === 2) && (rotCenter === 0))) {
                    port.write([33]);
                    time.sleep(PulseWidth);
                    triggerSent_1 = true;
                    pauseStartTime_1 = t;
                } else {
                    if (((ethnicity === 2) && (rotCenter === 45))) {
                        port.write([37]);
                        time.sleep(PulseWidth);
                        triggerSent_1 = true;
                        pauseStartTime_1 = t;
                    } else {
                        if (((ethnicity === 3) && (rotCenter === 0))) {
                            port.write([43]);
                            time.sleep(PulseWidth);
                            triggerSent_1 = true;
                            pauseStartTime_1 = t;
                        } else {
                            if (((ethnicity === 3) && (rotCenter === 45))) {
                                port.write([47]);
                                time.sleep(PulseWidth);
                                triggerSent_1 = true;
                                pauseStartTime_1 = t;
                            } else {
                                if (((ethnicity === 4) && (rotCenter === 0))) {
                                    port.write([53]);
                                    time.sleep(PulseWidth);
                                    triggerSent_1 = true;
                                    pauseStartTime_1 = t;
                                } else {
                                    if (((ethnicity === 4) && (rotCenter === 45))) {
                                        port.write([57]);
                                        time.sleep(PulseWidth);
                                        triggerSent_1 = true;
                                        pauseStartTime_1 = t;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if ((triggerSent_1 && (! portsCleared_1))) {
        if ((t > (pauseStartTime_1 + postTriggerPauseTime_1))) {
            if ((male === 0)) {
                if ((scramFace === 0)) {
                    if ((blueCenter === 0)) {
                        if ((blueSurround === 0)) {
                            if ((rotSurround === 0)) {
                                port.write([104]);
                                time.sleep(PulseWidth);
                                portsCleared_1 = true;
                            } else {
                                if ((rotSurround === 45)) {
                                    port.write([108]);
                                    time.sleep(PulseWidth);
                                    portsCleared_1 = true;
                                }
                            }
                        } else {
                            if ((blueSurround === 1)) {
                                if ((rotSurround === 0)) {
                                    port.write([112]);
                                    time.sleep(PulseWidth);
                                    portsCleared_1 = true;
                                } else {
                                    if ((rotSurround === 45)) {
                                        port.write([117]);
                                        time.sleep(PulseWidth);
                                        portsCleared_1 = true;
                                    }
                                }
                            }
                        }
                    } else {
                        if ((blueCenter === 1)) {
                            if ((blueSurround === 0)) {
                                if ((rotSurround === 0)) {
                                    port.write([121]);
                                    time.sleep(PulseWidth);
                                    portsCleared_1 = true;
                                } else {
                                    if ((rotSurround === 45)) {
                                        port.write([125]);
                                        time.sleep(PulseWidth);
                                        portsCleared_1 = true;
                                    }
                                }
                            } else {
                                if ((blueSurround === 1)) {
                                    if ((rotSurround === 0)) {
                                        port.write([130]);
                                        time.sleep(PulseWidth);
                                        portsCleared_1 = true;
                                    } else {
                                        if ((rotSurround === 45)) {
                                            port.write([134]);
                                            time.sleep(PulseWidth);
                                            portsCleared_1 = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if ((scramFace === 1)) {
                        if ((blueCenter === 0)) {
                            if ((blueSurround === 0)) {
                                if ((rotSurround === 0)) {
                                    port.write([138]);
                                    time.sleep(PulseWidth);
                                    portsCleared_1 = true;
                                } else {
                                    if ((rotSurround === 45)) {
                                        port.write([142]);
                                        time.sleep(PulseWidth);
                                        portsCleared_1 = true;
                                    }
                                }
                            } else {
                                if ((blueSurround === 1)) {
                                    if ((rotSurround === 0)) {
                                        port.write([146]);
                                        time.sleep(PulseWidth);
                                        portsCleared_1 = true;
                                    } else {
                                        if ((rotSurround === 45)) {
                                            port.write([150]);
                                            time.sleep(PulseWidth);
                                            portsCleared_1 = true;
                                        }
                                    }
                                }
                            }
                        } else {
                            if ((blueCenter === 1)) {
                                if ((blueSurround === 0)) {
                                    if ((rotSurround === 0)) {
                                        port.write([154]);
                                        time.sleep(PulseWidth);
                                        portsCleared_1 = true;
                                    } else {
                                        if ((rotSurround === 45)) {
                                            port.write([158]);
                                            time.sleep(PulseWidth);
                                            portsCleared_1 = true;
                                        }
                                    }
                                } else {
                                    if ((blueSurround === 1)) {
                                        if ((rotSurround === 0)) {
                                            port.write([162]);
                                            time.sleep(PulseWidth);
                                            portsCleared_1 = true;
                                        } else {
                                            if ((rotSurround === 45)) {
                                                port.write([166]);
                                                time.sleep(PulseWidth);
                                                portsCleared_1 = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if ((male === 1)) {
                    if ((scramFace === 0)) {
                        if ((blueCenter === 0)) {
                            if ((blueSurround === 0)) {
                                if ((rotSurround === 0)) {
                                    port.write([170]);
                                    time.sleep(PulseWidth);
                                    portsCleared_1 = true;
                                } else {
                                    if ((rotSurround === 45)) {
                                        port.write([174]);
                                        time.sleep(PulseWidth);
                                        portsCleared_1 = true;
                                    }
                                }
                            } else {
                                if ((blueSurround === 1)) {
                                    if ((rotSurround === 0)) {
                                        port.write([178]);
                                        time.sleep(PulseWidth);
                                        portsCleared_1 = true;
                                    } else {
                                        if ((rotSurround === 45)) {
                                            port.write([182]);
                                            time.sleep(PulseWidth);
                                            portsCleared_1 = true;
                                        }
                                    }
                                }
                            }
                        } else {
                            if ((blueCenter === 1)) {
                                if ((blueSurround === 0)) {
                                    if ((rotSurround === 0)) {
                                        port.write([186]);
                                        time.sleep(PulseWidth);
                                        portsCleared_1 = true;
                                    } else {
                                        if ((rotSurround === 45)) {
                                            port.write([190]);
                                            time.sleep(PulseWidth);
                                            portsCleared_1 = true;
                                        }
                                    }
                                } else {
                                    if ((blueSurround === 1)) {
                                        if ((rotSurround === 0)) {
                                            port.write([194]);
                                            time.sleep(PulseWidth);
                                            portsCleared_1 = true;
                                        } else {
                                            if ((rotSurround === 45)) {
                                                port.write([198]);
                                                time.sleep(PulseWidth);
                                                portsCleared_1 = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if ((scramFace === 1)) {
                            if ((blueCenter === 0)) {
                                if ((blueSurround === 0)) {
                                    if ((rotSurround === 0)) {
                                        port.write([202]);
                                        time.sleep(PulseWidth);
                                        portsCleared_1 = true;
                                    } else {
                                        if ((rotSurround === 45)) {
                                            port.write([206]);
                                            time.sleep(PulseWidth);
                                            portsCleared_1 = true;
                                        }
                                    }
                                } else {
                                    if ((blueSurround === 1)) {
                                        if ((rotSurround === 0)) {
                                            port.write([210]);
                                            time.sleep(PulseWidth);
                                            portsCleared_1 = true;
                                        } else {
                                            if ((rotSurround === 45)) {
                                                port.write([214]);
                                                time.sleep(PulseWidth);
                                                portsCleared_1 = true;
                                            }
                                        }
                                    }
                                }
                            } else {
                                if ((blueCenter === 1)) {
                                    if ((blueSurround === 0)) {
                                        if ((rotSurround === 0)) {
                                            port.write([218]);
                                            time.sleep(PulseWidth);
                                            portsCleared_1 = true;
                                        } else {
                                            if ((rotSurround === 45)) {
                                                port.write([222]);
                                                time.sleep(PulseWidth);
                                                portsCleared_1 = true;
                                            }
                                        }
                                    } else {
                                        if ((blueSurround === 1)) {
                                            if ((rotSurround === 0)) {
                                                port.write([226]);
                                                time.sleep(PulseWidth);
                                                portsCleared_1 = true;
                                            } else {
                                                if ((rotSurround === 45)) {
                                                    port.write([230]);
                                                    time.sleep(PulseWidth);
                                                    portsCleared_1 = true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    
    // *keyResp* updates
    if (t >= thisISI && keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyResp.tStart = t;  // (not accounting for frame time here)
      keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyResp.clearEvents(); });
    }

    frameRemains = thisISI + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (keyResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      keyResp.status = PsychoJS.Status.FINISHED;
  }

    if (keyResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyResp.getKeys({keyList: ['1', '8'], waitRelease: false});
      _keyResp_allKeys = _keyResp_allKeys.concat(theseKeys);
      if (_keyResp_allKeys.length > 0) {
        keyResp.keys = _keyResp_allKeys[0].name;  // just the first key pressed
        keyResp.rt = _keyResp_allKeys[0].rt;
        // was this correct?
        if (keyResp.keys == corrAns) {
            keyResp.corr = 1;
        } else {
            keyResp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    if ((keyResp.keys && (keyResp.keys.length > keys_counted.length))) {
        keys_counted.push(keyResp.keys.slice((- 1))[0]);
        if ((keyResp.keys.slice((- 1))[0] === corrAns)) {
            port.write([16]);
            time.sleep(PulseWidth);
            triggerSent = true;
            portsCleared = false;
            pauseStartTime = t;
        } else {
            if ((keyResp.keys.slice((- 1))[0] !== corrAns)) {
                port.write([4]);
                time.sleep(PulseWidth);
                triggerSent = true;
                portsCleared = false;
                pauseStartTime = t;
            }
        }
    }
    if ((triggerSent && (! portsCleared))) {
        if ((t > (pauseStartTime + postTriggerPauseTime))) {
            triggerSent = false;
            portsCleared = true;
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of StimRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StimRoutineRoutineEnd() {
  return async function () {
    //------Ending Routine 'StimRoutine'-------
    for (const thisComponent of StimRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Connected = false;
    thread.join(1.0);
    
    // was no response the correct answer?!
    if (keyResp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         keyResp.corr = 1;  // correct non-response
      } else {
         keyResp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('keyResp.keys', keyResp.keys);
    psychoJS.experiment.addData('keyResp.corr', keyResp.corr);
    if (typeof keyResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyResp.rt', keyResp.rt);
        routineTimer.reset();
        }
    
    keyResp.stop();
    if (((! keyResp.keys) || (keyResp.keys.length === 0))) {
        port.write([3]);
        time.sleep(PulseWidth);
    }
    
    // the Routine "StimRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var break_stimLoopComponents;
function break_stimLoopRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'break_stimLoop'-------
    t = 0;
    break_stimLoopClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    break_stimLoopComponents = [];
    
    for (const thisComponent of break_stimLoopComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function break_stimLoopRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'break_stimLoop'-------
    // get current time
    t = break_stimLoopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of break_stimLoopComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_stimLoopRoutineEnd() {
  return async function () {
    //------Ending Routine 'break_stimLoop'-------
    for (const thisComponent of break_stimLoopComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    stimLoop.finished = true;
    
    // the Routine "break_stimLoop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var clearTrialComponents;
function clearTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'clearTrial'-------
    t = 0;
    clearTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (keyResp.keys) {
        if (keyResp.corr) {
            counterOne += 1;
        } else {
            counterTwo += 1;
        }
    } else {
        keyResp.corr = 0;
        counterTwo += 1;
    }
    
    // keep track of which components have finished
    clearTrialComponents = [];
    
    for (const thisComponent of clearTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function clearTrialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'clearTrial'-------
    // get current time
    t = clearTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of clearTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function clearTrialRoutineEnd() {
  return async function () {
    //------Ending Routine 'clearTrial'-------
    for (const thisComponent of clearTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "clearTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var taskEnd_instructComponents;
function taskEnd_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'taskEnd_instruct'-------
    t = 0;
    taskEnd_instructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((counterOne >= 6)) {
        msg = "Lets move forward. Press the left or right button.";
        isForward = 0;
        counterOne = 0;
        counterTwo = 0;
        colorblockLoop.finished = true;
    } else {
        isForward += 1;
        if ((isForward === 3)) {
            msg = "Lets move forward. Press the left or right button.";
            counterOne = 0;
            counterTwo = 0;
            isForward = 0;
            colorblockLoop.finished = true;
        } else {
            msg = "Please try the practice again. Press the left or right button.";
            counterOne = 0;
            counterTwo = 0;
            colorblockLoop.finished = false;
        }
    }
    
    taskEnd_text.setText(msg);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    taskEnd_instructComponents = [];
    taskEnd_instructComponents.push(taskEnd_text);
    taskEnd_instructComponents.push(key_resp);
    
    for (const thisComponent of taskEnd_instructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function taskEnd_instructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'taskEnd_instruct'-------
    // get current time
    t = taskEnd_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *taskEnd_text* updates
    if (t >= 0.0 && taskEnd_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      taskEnd_text.tStart = t;  // (not accounting for frame time here)
      taskEnd_text.frameNStart = frameN;  // exact frame index
      
      taskEnd_text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['1', '8'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of taskEnd_instructComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function taskEnd_instructRoutineEnd() {
  return async function () {
    //------Ending Routine 'taskEnd_instruct'-------
    for (const thisComponent of taskEnd_instructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "taskEnd_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var break_cueLoop_2Components;
function break_cueLoop_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'break_cueLoop_2'-------
    t = 0;
    break_cueLoop_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    break_cueLoop_2Components = [];
    
    for (const thisComponent of break_cueLoop_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function break_cueLoop_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'break_cueLoop_2'-------
    // get current time
    t = break_cueLoop_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of break_cueLoop_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_cueLoop_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'break_cueLoop_2'-------
    for (const thisComponent of break_cueLoop_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    shapecueLoop.finished = true;
    
    // the Routine "break_cueLoop_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var break_stimLoop_2Components;
function break_stimLoop_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'break_stimLoop_2'-------
    t = 0;
    break_stimLoop_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    break_stimLoop_2Components = [];
    
    for (const thisComponent of break_stimLoop_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function break_stimLoop_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'break_stimLoop_2'-------
    // get current time
    t = break_stimLoop_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of break_stimLoop_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_stimLoop_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'break_stimLoop_2'-------
    for (const thisComponent of break_stimLoop_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    shapeStimLoop.finished = true;
    
    // the Routine "break_stimLoop_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var taskEnd_instruct_2Components;
function taskEnd_instruct_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'taskEnd_instruct_2'-------
    t = 0;
    taskEnd_instruct_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((counterOne >= 6)) {
        msg = "Lets move forward. Press the left or right button.";
        isForward = 0;
        counterOne = 0;
        counterTwo = 0;
        shapeblockLoop.finished = true;
    } else {
        isForward += 1;
        if ((isForward === 3)) {
            msg = "Lets move forward. Press the left or right button.";
            counterOne = 0;
            counterTwo = 0;
            isForward = 0;
            shapeblockLoop.finished = true;
        } else {
            msg = "Please try the practice again. Press the left or right button.";
            counterOne = 0;
            counterTwo = 0;
            shapeblockLoop.finished = false;
        }
    }
    
    taskEnd_text_3.setText(msg);
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    taskEnd_instruct_2Components = [];
    taskEnd_instruct_2Components.push(taskEnd_text_3);
    taskEnd_instruct_2Components.push(key_resp_4);
    
    for (const thisComponent of taskEnd_instruct_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function taskEnd_instruct_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'taskEnd_instruct_2'-------
    // get current time
    t = taskEnd_instruct_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *taskEnd_text_3* updates
    if (t >= 0.0 && taskEnd_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      taskEnd_text_3.tStart = t;  // (not accounting for frame time here)
      taskEnd_text_3.frameNStart = frameN;  // exact frame index
      
      taskEnd_text_3.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['1', '8'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of taskEnd_instruct_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function taskEnd_instruct_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'taskEnd_instruct_2'-------
    for (const thisComponent of taskEnd_instruct_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "taskEnd_instruct_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var break_cueLoop_3Components;
function break_cueLoop_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'break_cueLoop_3'-------
    t = 0;
    break_cueLoop_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    break_cueLoop_3Components = [];
    
    for (const thisComponent of break_cueLoop_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function break_cueLoop_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'break_cueLoop_3'-------
    // get current time
    t = break_cueLoop_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of break_cueLoop_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_cueLoop_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'break_cueLoop_3'-------
    for (const thisComponent of break_cueLoop_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    switchCueLoop.finished = true;
    
    // the Routine "break_cueLoop_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var break_stimLoop_3Components;
function break_stimLoop_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'break_stimLoop_3'-------
    t = 0;
    break_stimLoop_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    break_stimLoop_3Components = [];
    
    for (const thisComponent of break_stimLoop_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function break_stimLoop_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'break_stimLoop_3'-------
    // get current time
    t = break_stimLoop_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of break_stimLoop_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_stimLoop_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'break_stimLoop_3'-------
    for (const thisComponent of break_stimLoop_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    switchStimLoop.finished = true;
    
    // the Routine "break_stimLoop_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var taskEnd_instruct_3Components;
function taskEnd_instruct_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'taskEnd_instruct_3'-------
    t = 0;
    taskEnd_instruct_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((counterOne >= 6)) {
        msg = "Lets move forward. Press the left or right button.";
        isForward = 0;
        counterOne = 0;
        counterTwo = 0;
        switchBlockLoop.finished = true;
    } else {
        isForward += 1;
        if ((isForward === 3)) {
            msg = "Lets move forward. Press the left or right button.";
            counterOne = 0;
            counterTwo = 0;
            isForward = 0;
            switchBlockLoop.finished = true;
        } else {
            msg = "Please try the practice again. Press the left or right button.";
            counterOne = 0;
            counterTwo = 0;
            switchBlockLoop.finished = false;
        }
    }
    
    taskEnd_text_4.setText(msg);
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    taskEnd_instruct_3Components = [];
    taskEnd_instruct_3Components.push(taskEnd_text_4);
    taskEnd_instruct_3Components.push(key_resp_5);
    
    for (const thisComponent of taskEnd_instruct_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function taskEnd_instruct_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'taskEnd_instruct_3'-------
    // get current time
    t = taskEnd_instruct_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *taskEnd_text_4* updates
    if (t >= 0.0 && taskEnd_text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      taskEnd_text_4.tStart = t;  // (not accounting for frame time here)
      taskEnd_text_4.frameNStart = frameN;  // exact frame index
      
      taskEnd_text_4.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['1', '8'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of taskEnd_instruct_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function taskEnd_instruct_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'taskEnd_instruct_3'-------
    for (const thisComponent of taskEnd_instruct_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "taskEnd_instruct_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var expEnd_intructComponents;
function expEnd_intructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'expEnd_intruct'-------
    t = 0;
    expEnd_intructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    taskEnd_text_2.setText('\n\n\nPress the left or right button to exit.\n');
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    expEnd_intructComponents = [];
    expEnd_intructComponents.push(taskEnd_text_2);
    expEnd_intructComponents.push(key_resp_2);
    
    for (const thisComponent of expEnd_intructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function expEnd_intructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'expEnd_intruct'-------
    // get current time
    t = expEnd_intructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *taskEnd_text_2* updates
    if (t >= 0.0 && taskEnd_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      taskEnd_text_2.tStart = t;  // (not accounting for frame time here)
      taskEnd_text_2.frameNStart = frameN;  // exact frame index
      
      taskEnd_text_2.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['1', '8'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of expEnd_intructComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function expEnd_intructRoutineEnd() {
  return async function () {
    //------Ending Routine 'expEnd_intruct'-------
    for (const thisComponent of expEnd_intructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "expEnd_intruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  port.close();
  
  
  
  
  
  
  
  port.close();
  
  
  
  port.close();
  
  
  
  
  
  port.close();
  
  
  
  port.close();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
