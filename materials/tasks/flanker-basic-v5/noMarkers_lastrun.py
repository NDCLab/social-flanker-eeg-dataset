#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on July 18, 2022, at 13:09
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
prefs.hardware['audioLib'] = 'ptb'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'flanker-basic_v5'  # from the Builder filename that created this script
expInfo = {'id': '1', 'counterbalance': ['A', 'B'], 'session': '1', 'run': '1'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s_%s_%s_%s' % (expInfo['id'], expInfo['counterbalance'], expInfo['session'], expInfo['run'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\NDClab\\Desktop\\Experiments\\SFE\\flanker-basic-v5\\noMarkers_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1536, 864], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[-1,-1,-1], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "JS_code"
JS_codeClock = core.Clock()

# Initialize components for Routine "setup"
setupClock = core.Clock()

# Initialize components for Routine "welcome"
welcomeClock = core.Clock()
welcome_text = visual.TextStim(win=win, name='welcome_text',
    text='Arrow Game\n\nWelcome to the arrow game. In this game, arrows will be quickly flashed on the screen. Your goal is to respond to the direction of the MIDDLE arrow, and to respond as quickly as you can without making mistakes. \n\nIf the MIDDLE arrow is pointing to the right, use your right hand to press the right button. If the MIDDLE arrow is pointing to the left, use your left hand to press the left button. \n\nPress the right button to continue\n',
    font='Arial',
    units='height', pos=(0, 0), height=0.04, wrapWidth=1.3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
welcome_keyResp = keyboard.Keyboard()

# Initialize components for Routine "instructRight"
instructRightClock = core.Clock()
instructRight_text = visual.TextStim(win=win, name='instructRight_text',
    text='Below, the MIDDLE arrow is pointing to the right, so you would respond by pressing the right button with your right hand.\n\nPress the right button to continue',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=1.3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instructRight_centerImg = visual.ImageStim(
    win=win,
    name='instructRight_centerImg', 
    image='img/rightArrow.png', mask=None,
    ori=0, pos=(0, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
instructRight_rightImg1 = visual.ImageStim(
    win=win,
    name='instructRight_rightImg1', 
    image='img/rightArrow.png', mask=None,
    ori=0, pos=(.05, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
instructRight_rightImg2 = visual.ImageStim(
    win=win,
    name='instructRight_rightImg2', 
    image='img/rightArrow.png', mask=None,
    ori=0, pos=(.1, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
instructRight_leftImg1 = visual.ImageStim(
    win=win,
    name='instructRight_leftImg1', 
    image='img/rightArrow.png', mask=None,
    ori=0, pos=(-.05, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)
instructRight_leftImg2 = visual.ImageStim(
    win=win,
    name='instructRight_leftImg2', 
    image='img/rightArrow.png', mask=None,
    ori=0, pos=(-.1, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
insructRight_keyResp = keyboard.Keyboard()

# Initialize components for Routine "instructLeft"
instructLeftClock = core.Clock()
instructLeft_text = visual.TextStim(win=win, name='instructLeft_text',
    text='Below, the MIDDLE arrow is pointing to the left, so you would respond by pressing the left button with your left hand.\n\nPress the left button to continue',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=1.3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instructLeft_centerImg = visual.ImageStim(
    win=win,
    name='instructLeft_centerImg', 
    image='img/leftArrow.png', mask=None,
    ori=0, pos=(0, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
instructLeft_rightImg1 = visual.ImageStim(
    win=win,
    name='instructLeft_rightImg1', 
    image='img/leftArrow.png', mask=None,
    ori=0, pos=(.05, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
instructLeft_rightImg2 = visual.ImageStim(
    win=win,
    name='instructLeft_rightImg2', 
    image='img/leftArrow.png', mask=None,
    ori=0, pos=(.1, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
instructLeft_leftImg1 = visual.ImageStim(
    win=win,
    name='instructLeft_leftImg1', 
    image='img/leftArrow.png', mask=None,
    ori=0, pos=(-.05, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)
instructLeft_leftImg2 = visual.ImageStim(
    win=win,
    name='instructLeft_leftImg2', 
    image='img/leftArrow.png', mask=None,
    ori=0, pos=(-.1, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
instructLeft_keyResp = keyboard.Keyboard()

# Initialize components for Routine "instructInconRight"
instructInconRightClock = core.Clock()
instructInconRight_text = visual.TextStim(win=win, name='instructInconRight_text',
    text='Sometimes the MIDDLE arrow will point in a different direction from the other arrows. However, your goal is to always respond based on the direction of the MIDDLE arrow.\n\nBelow, the MIDDLE arrow is pointing to the right, so you would respond by pressing the right button with your right hand.\n\nPress the right button to continue',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=1.3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instructIncon_centerImg = visual.ImageStim(
    win=win,
    name='instructIncon_centerImg', 
    image='img/rightArrow.png', mask=None,
    ori=0, pos=(0, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
instructIncon_rightImg1 = visual.ImageStim(
    win=win,
    name='instructIncon_rightImg1', 
    image='img/leftArrow.png', mask=None,
    ori=0, pos=(.05, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
instructIncon_rightImg2 = visual.ImageStim(
    win=win,
    name='instructIncon_rightImg2', 
    image='img/leftArrow.png', mask=None,
    ori=0, pos=(.1, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
instructIncon_leftImg1 = visual.ImageStim(
    win=win,
    name='instructIncon_leftImg1', 
    image='img/leftArrow.png', mask=None,
    ori=0, pos=(-.05, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)
instructInconRight_leftImg2 = visual.ImageStim(
    win=win,
    name='instructInconRight_leftImg2', 
    image='img/leftArrow.png', mask=None,
    ori=0, pos=(-.1, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
insructInconRight_keyResp = keyboard.Keyboard()

# Initialize components for Routine "instructInconLeft"
instructInconLeftClock = core.Clock()
instructInconLeft_text = visual.TextStim(win=win, name='instructInconLeft_text',
    text='Below, the MIDDLE arrow is pointing to the left, so you would respond by pressing the left button with your left hand.\n\nPress the left button to continue',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=1.3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
instructInconLeft_centerImg = visual.ImageStim(
    win=win,
    name='instructInconLeft_centerImg', 
    image='img/leftArrow.png', mask=None,
    ori=0, pos=(0, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
instructInconLeft_rightImg1 = visual.ImageStim(
    win=win,
    name='instructInconLeft_rightImg1', 
    image='img/rightArrow.png', mask=None,
    ori=0, pos=(.05, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
instructInconLeft_rightImg2 = visual.ImageStim(
    win=win,
    name='instructInconLeft_rightImg2', 
    image='img/rightArrow.png', mask=None,
    ori=0, pos=(.1, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
instructInconLeft_leftImg1 = visual.ImageStim(
    win=win,
    name='instructInconLeft_leftImg1', 
    image='img/rightArrow.png', mask=None,
    ori=0, pos=(-.05, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)
instructInconLeft_leftImg2 = visual.ImageStim(
    win=win,
    name='instructInconLeft_leftImg2', 
    image='img/rightArrow.png', mask=None,
    ori=0, pos=(-.1, -.3), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
instructInconLeft_keyResp = keyboard.Keyboard()

# Initialize components for Routine "prac_blockReminders"
prac_blockRemindersClock = core.Clock()
#initialize the following variables at the start of experiment
trialNum = 0
accuracy = 0
numCorr = 0
blockAcc = 0
prac_blockText = visual.TextStim(win=win, name='prac_blockText',
    text='Practice',
    font='Arial',
    pos=(0, .3), height=0.06, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
prac_reminder_text = visual.TextStim(win=win, name='prac_reminder_text',
    text='You will now practice responding to the arrows. Remember to always respond to the direction of the MIDDLE arrow.\n\nRespond as quickly as you can without making mistakes.\n\nTo get ready, rest your right and left thumbs on the right and left buttons, then press the right button when you are ready to begin.\n',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=1.3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
prac_reminder_keyResp = keyboard.Keyboard()

# Initialize components for Routine "initFixation"
initFixationClock = core.Clock()
initFixation_img = visual.ImageStim(
    win=win,
    name='initFixation_img', 
    image='sin', mask=None,
    ori=0, pos=(0, -.05), size=(.015, .015),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)

# Initialize components for Routine "prac_stimRoutine"
prac_stimRoutineClock = core.Clock()
#initialize the thisISI variable
thisISI = 0
prac_centerImg = visual.ImageStim(
    win=win,
    name='prac_centerImg', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=[.04, .04],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
prac_rightImg1 = visual.ImageStim(
    win=win,
    name='prac_rightImg1', 
    image='sin', mask=None,
    ori=0, pos=(.05, 0), size=[.04, .04],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
prac_rightImg2 = visual.ImageStim(
    win=win,
    name='prac_rightImg2', 
    image='sin', mask=None,
    ori=0, pos=(.1, 0), size=[.04, .04],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
prac_leftImg1 = visual.ImageStim(
    win=win,
    name='prac_leftImg1', 
    image='sin', mask=None,
    ori=0, pos=(-.05, 0), size=[.04, .04],
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)
prac_leftImg2 = visual.ImageStim(
    win=win,
    name='prac_leftImg2', 
    image='sin', mask=None,
    ori=0, pos=(-.1, 0), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
prac_fixImg = visual.ImageStim(
    win=win,
    name='prac_fixImg', 
    image='sin', mask=None,
    ori=0, pos=(0, -.05), size=(.015, .015),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-6.0)
prac_stim_keyResp = keyboard.Keyboard()

# Initialize components for Routine "prac_blockFeed"
prac_blockFeedClock = core.Clock()
prac_blockFeed_text = visual.TextStim(win=win, name='prac_blockFeed_text',
    text='',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=1.3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
prac_pressContinue = visual.TextStim(win=win, name='prac_pressContinue',
    text='Experimenter: press key to continue',
    font='Arial',
    pos=(0, -.3), height=0.04, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
prac_blockFeed_keyResp = keyboard.Keyboard()

# Initialize components for Routine "task_condition"
task_conditionClock = core.Clock()
#initialize the following variables at the start of the condition
blockCounter = 0
condition_whichCondition_text = visual.TextStim(win=win, name='condition_whichCondition_text',
    text='',
    font='Arial',
    pos=(0, 0.1), height=0.12, wrapWidth=1.8, ori=0.0, 
    color=[-0.3,-0.3,-0.3], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
condition_reminder_text = visual.TextStim(win=win, name='condition_reminder_text',
    text='Experimenter: provide instructions and then press key to continue',
    font='Arial',
    pos=(0, -.3), height=0.04, wrapWidth=1.8, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
condition_keyResp = keyboard.Keyboard()

# Initialize components for Routine "task_blockReminders"
task_blockRemindersClock = core.Clock()
task_blockText = visual.TextStim(win=win, name='task_blockText',
    text='',
    font='Arial',
    pos=(0, .1), height=0.12, wrapWidth=1.8, ori=0.0, 
    color=[-0.3,-0.3,-0.3], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
task_blockReminders_text = visual.TextStim(win=win, name='task_blockReminders_text',
    text='Remember to limit blinking to about about once every ten seconds (or less).\n\nPlease try to relax the muscles in your face, neck, and shoulders. \n\nRest your right and left thumbs on the right and left buttons. When you are ready, press the right button to begin.\n',
    font='Arial',
    pos=(0, -.25), height=0.04, wrapWidth=1.3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
task_blockReminders_keyResp = keyboard.Keyboard()

# Initialize components for Routine "initFixation"
initFixationClock = core.Clock()
initFixation_img = visual.ImageStim(
    win=win,
    name='initFixation_img', 
    image='sin', mask=None,
    ori=0, pos=(0, -.05), size=(.015, .015),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)

# Initialize components for Routine "task_stimRoutine"
task_stimRoutineClock = core.Clock()
#no need to initialize thisISI, as already done in practice code snippit
task_centerImg = visual.ImageStim(
    win=win,
    name='task_centerImg', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
task_rightImg1 = visual.ImageStim(
    win=win,
    name='task_rightImg1', 
    image='sin', mask=None,
    ori=0, pos=(.05, 0), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
task_rightImg2 = visual.ImageStim(
    win=win,
    name='task_rightImg2', 
    image='sin', mask=None,
    ori=0, pos=(.1, 0), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
task_leftImg1 = visual.ImageStim(
    win=win,
    name='task_leftImg1', 
    image='sin', mask=None,
    ori=0, pos=(-.05, 0), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)
task_leftImg2 = visual.ImageStim(
    win=win,
    name='task_leftImg2', 
    image='sin', mask=None,
    ori=0, pos=(-.1, 0), size=(.04, .04),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
task_fixImg = visual.ImageStim(
    win=win,
    name='task_fixImg', 
    image='sin', mask=None,
    ori=0, pos=(0, -.05), size=(.015, .015),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-6.0)
task_stim_keyResp = keyboard.Keyboard()

# Initialize components for Routine "task_blockFeed"
task_blockFeedClock = core.Clock()
task_blockFeed_text = visual.TextStim(win=win, name='task_blockFeed_text',
    text='',
    font='Arial',
    pos=(0, 0.1), height=0.12, wrapWidth=1.8, ori=0, 
    color=[-0.3,-0.3,-0.3], colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
task_blackFeed_text3 = visual.TextStim(win=win, name='task_blackFeed_text3',
    text='Please wait',
    font='Arial',
    pos=(0, -.3), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
task_blockFeed_text2 = visual.TextStim(win=win, name='task_blockFeed_text2',
    text='',
    font='Arial',
    pos=(0, -0.3), height=0.04, wrapWidth=1.3, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
task_blockFeed_keyResp = keyboard.Keyboard()

# Initialize components for Routine "task_conditionComplete"
task_conditionCompleteClock = core.Clock()
conditionComplete_text = visual.TextStim(win=win, name='conditionComplete_text',
    text='Please ring bell and wait for experimenter to continue',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=1.3, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
conditionComplete_key_resp = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "JS_code"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
JS_codeComponents = []
for thisComponent in JS_codeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
JS_codeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "JS_code"-------
while continueRoutine:
    # get current time
    t = JS_codeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=JS_codeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in JS_codeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "JS_code"-------
for thisComponent in JS_codeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "JS_code" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "setup"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
setupComponents = []
for thisComponent in setupComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
setupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "setup"-------
while continueRoutine:
    # get current time
    t = setupClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=setupClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in setupComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "setup"-------
for thisComponent in setupComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "setup" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "welcome"-------
continueRoutine = True
# update component parameters for each repeat
welcome_keyResp.keys = []
welcome_keyResp.rt = []
_welcome_keyResp_allKeys = []
# keep track of which components have finished
welcomeComponents = [welcome_text, welcome_keyResp]
for thisComponent in welcomeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
welcomeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "welcome"-------
while continueRoutine:
    # get current time
    t = welcomeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=welcomeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *welcome_text* updates
    if welcome_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_text.frameNStart = frameN  # exact frame index
        welcome_text.tStart = t  # local t and not account for scr refresh
        welcome_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_text, 'tStartRefresh')  # time at next scr refresh
        welcome_text.setAutoDraw(True)
    
    # *welcome_keyResp* updates
    waitOnFlip = False
    if welcome_keyResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_keyResp.frameNStart = frameN  # exact frame index
        welcome_keyResp.tStart = t  # local t and not account for scr refresh
        welcome_keyResp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_keyResp, 'tStartRefresh')  # time at next scr refresh
        welcome_keyResp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(welcome_keyResp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(welcome_keyResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if welcome_keyResp.status == STARTED and not waitOnFlip:
        theseKeys = welcome_keyResp.getKeys(keyList=['8'], waitRelease=False)
        _welcome_keyResp_allKeys.extend(theseKeys)
        if len(_welcome_keyResp_allKeys):
            welcome_keyResp.keys = _welcome_keyResp_allKeys[-1].name  # just the last key pressed
            welcome_keyResp.rt = _welcome_keyResp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in welcomeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "welcome"-------
for thisComponent in welcomeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "welcome" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructRight"-------
continueRoutine = True
# update component parameters for each repeat
insructRight_keyResp.keys = []
insructRight_keyResp.rt = []
_insructRight_keyResp_allKeys = []
# keep track of which components have finished
instructRightComponents = [instructRight_text, instructRight_centerImg, instructRight_rightImg1, instructRight_rightImg2, instructRight_leftImg1, instructRight_leftImg2, insructRight_keyResp]
for thisComponent in instructRightComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructRightClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructRight"-------
while continueRoutine:
    # get current time
    t = instructRightClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructRightClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructRight_text* updates
    if instructRight_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructRight_text.frameNStart = frameN  # exact frame index
        instructRight_text.tStart = t  # local t and not account for scr refresh
        instructRight_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructRight_text, 'tStartRefresh')  # time at next scr refresh
        instructRight_text.setAutoDraw(True)
    
    # *instructRight_centerImg* updates
    if instructRight_centerImg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructRight_centerImg.frameNStart = frameN  # exact frame index
        instructRight_centerImg.tStart = t  # local t and not account for scr refresh
        instructRight_centerImg.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructRight_centerImg, 'tStartRefresh')  # time at next scr refresh
        instructRight_centerImg.setAutoDraw(True)
    
    # *instructRight_rightImg1* updates
    if instructRight_rightImg1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructRight_rightImg1.frameNStart = frameN  # exact frame index
        instructRight_rightImg1.tStart = t  # local t and not account for scr refresh
        instructRight_rightImg1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructRight_rightImg1, 'tStartRefresh')  # time at next scr refresh
        instructRight_rightImg1.setAutoDraw(True)
    
    # *instructRight_rightImg2* updates
    if instructRight_rightImg2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructRight_rightImg2.frameNStart = frameN  # exact frame index
        instructRight_rightImg2.tStart = t  # local t and not account for scr refresh
        instructRight_rightImg2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructRight_rightImg2, 'tStartRefresh')  # time at next scr refresh
        instructRight_rightImg2.setAutoDraw(True)
    
    # *instructRight_leftImg1* updates
    if instructRight_leftImg1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructRight_leftImg1.frameNStart = frameN  # exact frame index
        instructRight_leftImg1.tStart = t  # local t and not account for scr refresh
        instructRight_leftImg1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructRight_leftImg1, 'tStartRefresh')  # time at next scr refresh
        instructRight_leftImg1.setAutoDraw(True)
    
    # *instructRight_leftImg2* updates
    if instructRight_leftImg2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructRight_leftImg2.frameNStart = frameN  # exact frame index
        instructRight_leftImg2.tStart = t  # local t and not account for scr refresh
        instructRight_leftImg2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructRight_leftImg2, 'tStartRefresh')  # time at next scr refresh
        instructRight_leftImg2.setAutoDraw(True)
    
    # *insructRight_keyResp* updates
    waitOnFlip = False
    if insructRight_keyResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        insructRight_keyResp.frameNStart = frameN  # exact frame index
        insructRight_keyResp.tStart = t  # local t and not account for scr refresh
        insructRight_keyResp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(insructRight_keyResp, 'tStartRefresh')  # time at next scr refresh
        insructRight_keyResp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(insructRight_keyResp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(insructRight_keyResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if insructRight_keyResp.status == STARTED and not waitOnFlip:
        theseKeys = insructRight_keyResp.getKeys(keyList=['8'], waitRelease=False)
        _insructRight_keyResp_allKeys.extend(theseKeys)
        if len(_insructRight_keyResp_allKeys):
            insructRight_keyResp.keys = _insructRight_keyResp_allKeys[-1].name  # just the last key pressed
            insructRight_keyResp.rt = _insructRight_keyResp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructRightComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructRight"-------
for thisComponent in instructRightComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructRight" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructLeft"-------
continueRoutine = True
# update component parameters for each repeat
instructLeft_keyResp.keys = []
instructLeft_keyResp.rt = []
_instructLeft_keyResp_allKeys = []
# keep track of which components have finished
instructLeftComponents = [instructLeft_text, instructLeft_centerImg, instructLeft_rightImg1, instructLeft_rightImg2, instructLeft_leftImg1, instructLeft_leftImg2, instructLeft_keyResp]
for thisComponent in instructLeftComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructLeftClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructLeft"-------
while continueRoutine:
    # get current time
    t = instructLeftClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructLeftClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructLeft_text* updates
    if instructLeft_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructLeft_text.frameNStart = frameN  # exact frame index
        instructLeft_text.tStart = t  # local t and not account for scr refresh
        instructLeft_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructLeft_text, 'tStartRefresh')  # time at next scr refresh
        instructLeft_text.setAutoDraw(True)
    
    # *instructLeft_centerImg* updates
    if instructLeft_centerImg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructLeft_centerImg.frameNStart = frameN  # exact frame index
        instructLeft_centerImg.tStart = t  # local t and not account for scr refresh
        instructLeft_centerImg.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructLeft_centerImg, 'tStartRefresh')  # time at next scr refresh
        instructLeft_centerImg.setAutoDraw(True)
    
    # *instructLeft_rightImg1* updates
    if instructLeft_rightImg1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructLeft_rightImg1.frameNStart = frameN  # exact frame index
        instructLeft_rightImg1.tStart = t  # local t and not account for scr refresh
        instructLeft_rightImg1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructLeft_rightImg1, 'tStartRefresh')  # time at next scr refresh
        instructLeft_rightImg1.setAutoDraw(True)
    
    # *instructLeft_rightImg2* updates
    if instructLeft_rightImg2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructLeft_rightImg2.frameNStart = frameN  # exact frame index
        instructLeft_rightImg2.tStart = t  # local t and not account for scr refresh
        instructLeft_rightImg2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructLeft_rightImg2, 'tStartRefresh')  # time at next scr refresh
        instructLeft_rightImg2.setAutoDraw(True)
    
    # *instructLeft_leftImg1* updates
    if instructLeft_leftImg1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructLeft_leftImg1.frameNStart = frameN  # exact frame index
        instructLeft_leftImg1.tStart = t  # local t and not account for scr refresh
        instructLeft_leftImg1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructLeft_leftImg1, 'tStartRefresh')  # time at next scr refresh
        instructLeft_leftImg1.setAutoDraw(True)
    
    # *instructLeft_leftImg2* updates
    if instructLeft_leftImg2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructLeft_leftImg2.frameNStart = frameN  # exact frame index
        instructLeft_leftImg2.tStart = t  # local t and not account for scr refresh
        instructLeft_leftImg2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructLeft_leftImg2, 'tStartRefresh')  # time at next scr refresh
        instructLeft_leftImg2.setAutoDraw(True)
    
    # *instructLeft_keyResp* updates
    waitOnFlip = False
    if instructLeft_keyResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructLeft_keyResp.frameNStart = frameN  # exact frame index
        instructLeft_keyResp.tStart = t  # local t and not account for scr refresh
        instructLeft_keyResp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructLeft_keyResp, 'tStartRefresh')  # time at next scr refresh
        instructLeft_keyResp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instructLeft_keyResp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instructLeft_keyResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instructLeft_keyResp.status == STARTED and not waitOnFlip:
        theseKeys = instructLeft_keyResp.getKeys(keyList=['1'], waitRelease=False)
        _instructLeft_keyResp_allKeys.extend(theseKeys)
        if len(_instructLeft_keyResp_allKeys):
            instructLeft_keyResp.keys = _instructLeft_keyResp_allKeys[-1].name  # just the last key pressed
            instructLeft_keyResp.rt = _instructLeft_keyResp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructLeftComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructLeft"-------
for thisComponent in instructLeftComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructLeft" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructInconRight"-------
continueRoutine = True
# update component parameters for each repeat
insructInconRight_keyResp.keys = []
insructInconRight_keyResp.rt = []
_insructInconRight_keyResp_allKeys = []
# keep track of which components have finished
instructInconRightComponents = [instructInconRight_text, instructIncon_centerImg, instructIncon_rightImg1, instructIncon_rightImg2, instructIncon_leftImg1, instructInconRight_leftImg2, insructInconRight_keyResp]
for thisComponent in instructInconRightComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructInconRightClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructInconRight"-------
while continueRoutine:
    # get current time
    t = instructInconRightClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructInconRightClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructInconRight_text* updates
    if instructInconRight_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructInconRight_text.frameNStart = frameN  # exact frame index
        instructInconRight_text.tStart = t  # local t and not account for scr refresh
        instructInconRight_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructInconRight_text, 'tStartRefresh')  # time at next scr refresh
        instructInconRight_text.setAutoDraw(True)
    
    # *instructIncon_centerImg* updates
    if instructIncon_centerImg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructIncon_centerImg.frameNStart = frameN  # exact frame index
        instructIncon_centerImg.tStart = t  # local t and not account for scr refresh
        instructIncon_centerImg.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructIncon_centerImg, 'tStartRefresh')  # time at next scr refresh
        instructIncon_centerImg.setAutoDraw(True)
    
    # *instructIncon_rightImg1* updates
    if instructIncon_rightImg1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructIncon_rightImg1.frameNStart = frameN  # exact frame index
        instructIncon_rightImg1.tStart = t  # local t and not account for scr refresh
        instructIncon_rightImg1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructIncon_rightImg1, 'tStartRefresh')  # time at next scr refresh
        instructIncon_rightImg1.setAutoDraw(True)
    
    # *instructIncon_rightImg2* updates
    if instructIncon_rightImg2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructIncon_rightImg2.frameNStart = frameN  # exact frame index
        instructIncon_rightImg2.tStart = t  # local t and not account for scr refresh
        instructIncon_rightImg2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructIncon_rightImg2, 'tStartRefresh')  # time at next scr refresh
        instructIncon_rightImg2.setAutoDraw(True)
    
    # *instructIncon_leftImg1* updates
    if instructIncon_leftImg1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructIncon_leftImg1.frameNStart = frameN  # exact frame index
        instructIncon_leftImg1.tStart = t  # local t and not account for scr refresh
        instructIncon_leftImg1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructIncon_leftImg1, 'tStartRefresh')  # time at next scr refresh
        instructIncon_leftImg1.setAutoDraw(True)
    
    # *instructInconRight_leftImg2* updates
    if instructInconRight_leftImg2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructInconRight_leftImg2.frameNStart = frameN  # exact frame index
        instructInconRight_leftImg2.tStart = t  # local t and not account for scr refresh
        instructInconRight_leftImg2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructInconRight_leftImg2, 'tStartRefresh')  # time at next scr refresh
        instructInconRight_leftImg2.setAutoDraw(True)
    
    # *insructInconRight_keyResp* updates
    waitOnFlip = False
    if insructInconRight_keyResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        insructInconRight_keyResp.frameNStart = frameN  # exact frame index
        insructInconRight_keyResp.tStart = t  # local t and not account for scr refresh
        insructInconRight_keyResp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(insructInconRight_keyResp, 'tStartRefresh')  # time at next scr refresh
        insructInconRight_keyResp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(insructInconRight_keyResp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(insructInconRight_keyResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if insructInconRight_keyResp.status == STARTED and not waitOnFlip:
        theseKeys = insructInconRight_keyResp.getKeys(keyList=['8'], waitRelease=False)
        _insructInconRight_keyResp_allKeys.extend(theseKeys)
        if len(_insructInconRight_keyResp_allKeys):
            insructInconRight_keyResp.keys = _insructInconRight_keyResp_allKeys[-1].name  # just the last key pressed
            insructInconRight_keyResp.rt = _insructInconRight_keyResp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructInconRightComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructInconRight"-------
for thisComponent in instructInconRightComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructInconRight" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructInconLeft"-------
continueRoutine = True
# update component parameters for each repeat
instructInconLeft_keyResp.keys = []
instructInconLeft_keyResp.rt = []
_instructInconLeft_keyResp_allKeys = []
# keep track of which components have finished
instructInconLeftComponents = [instructInconLeft_text, instructInconLeft_centerImg, instructInconLeft_rightImg1, instructInconLeft_rightImg2, instructInconLeft_leftImg1, instructInconLeft_leftImg2, instructInconLeft_keyResp]
for thisComponent in instructInconLeftComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructInconLeftClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructInconLeft"-------
while continueRoutine:
    # get current time
    t = instructInconLeftClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructInconLeftClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructInconLeft_text* updates
    if instructInconLeft_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructInconLeft_text.frameNStart = frameN  # exact frame index
        instructInconLeft_text.tStart = t  # local t and not account for scr refresh
        instructInconLeft_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructInconLeft_text, 'tStartRefresh')  # time at next scr refresh
        instructInconLeft_text.setAutoDraw(True)
    
    # *instructInconLeft_centerImg* updates
    if instructInconLeft_centerImg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructInconLeft_centerImg.frameNStart = frameN  # exact frame index
        instructInconLeft_centerImg.tStart = t  # local t and not account for scr refresh
        instructInconLeft_centerImg.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructInconLeft_centerImg, 'tStartRefresh')  # time at next scr refresh
        instructInconLeft_centerImg.setAutoDraw(True)
    
    # *instructInconLeft_rightImg1* updates
    if instructInconLeft_rightImg1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructInconLeft_rightImg1.frameNStart = frameN  # exact frame index
        instructInconLeft_rightImg1.tStart = t  # local t and not account for scr refresh
        instructInconLeft_rightImg1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructInconLeft_rightImg1, 'tStartRefresh')  # time at next scr refresh
        instructInconLeft_rightImg1.setAutoDraw(True)
    
    # *instructInconLeft_rightImg2* updates
    if instructInconLeft_rightImg2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructInconLeft_rightImg2.frameNStart = frameN  # exact frame index
        instructInconLeft_rightImg2.tStart = t  # local t and not account for scr refresh
        instructInconLeft_rightImg2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructInconLeft_rightImg2, 'tStartRefresh')  # time at next scr refresh
        instructInconLeft_rightImg2.setAutoDraw(True)
    
    # *instructInconLeft_leftImg1* updates
    if instructInconLeft_leftImg1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructInconLeft_leftImg1.frameNStart = frameN  # exact frame index
        instructInconLeft_leftImg1.tStart = t  # local t and not account for scr refresh
        instructInconLeft_leftImg1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructInconLeft_leftImg1, 'tStartRefresh')  # time at next scr refresh
        instructInconLeft_leftImg1.setAutoDraw(True)
    
    # *instructInconLeft_leftImg2* updates
    if instructInconLeft_leftImg2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructInconLeft_leftImg2.frameNStart = frameN  # exact frame index
        instructInconLeft_leftImg2.tStart = t  # local t and not account for scr refresh
        instructInconLeft_leftImg2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructInconLeft_leftImg2, 'tStartRefresh')  # time at next scr refresh
        instructInconLeft_leftImg2.setAutoDraw(True)
    
    # *instructInconLeft_keyResp* updates
    waitOnFlip = False
    if instructInconLeft_keyResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructInconLeft_keyResp.frameNStart = frameN  # exact frame index
        instructInconLeft_keyResp.tStart = t  # local t and not account for scr refresh
        instructInconLeft_keyResp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructInconLeft_keyResp, 'tStartRefresh')  # time at next scr refresh
        instructInconLeft_keyResp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(instructInconLeft_keyResp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(instructInconLeft_keyResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instructInconLeft_keyResp.status == STARTED and not waitOnFlip:
        theseKeys = instructInconLeft_keyResp.getKeys(keyList=['1'], waitRelease=False)
        _instructInconLeft_keyResp_allKeys.extend(theseKeys)
        if len(_instructInconLeft_keyResp_allKeys):
            instructInconLeft_keyResp.keys = _instructInconLeft_keyResp_allKeys[-1].name  # just the last key pressed
            instructInconLeft_keyResp.rt = _instructInconLeft_keyResp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructInconLeftComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructInconLeft"-------
for thisComponent in instructInconLeftComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructInconLeft" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
prac_block_loop = data.TrialHandler(nReps=99, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='prac_block_loop')
thisExp.addLoop(prac_block_loop)  # add the loop to the experiment
thisPrac_block_loop = prac_block_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPrac_block_loop.rgb)
if thisPrac_block_loop != None:
    for paramName in thisPrac_block_loop:
        exec('{} = thisPrac_block_loop[paramName]'.format(paramName))

for thisPrac_block_loop in prac_block_loop:
    currentLoop = prac_block_loop
    # abbreviate parameter names if possible (e.g. rgb = thisPrac_block_loop.rgb)
    if thisPrac_block_loop != None:
        for paramName in thisPrac_block_loop:
            exec('{} = thisPrac_block_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "prac_blockReminders"-------
    continueRoutine = True
    # update component parameters for each repeat
    prac_reminder_keyResp.keys = []
    prac_reminder_keyResp.rt = []
    _prac_reminder_keyResp_allKeys = []
    # keep track of which components have finished
    prac_blockRemindersComponents = [prac_blockText, prac_reminder_text, prac_reminder_keyResp]
    for thisComponent in prac_blockRemindersComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    prac_blockRemindersClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "prac_blockReminders"-------
    while continueRoutine:
        # get current time
        t = prac_blockRemindersClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=prac_blockRemindersClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *prac_blockText* updates
        if prac_blockText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            prac_blockText.frameNStart = frameN  # exact frame index
            prac_blockText.tStart = t  # local t and not account for scr refresh
            prac_blockText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(prac_blockText, 'tStartRefresh')  # time at next scr refresh
            prac_blockText.setAutoDraw(True)
        
        # *prac_reminder_text* updates
        if prac_reminder_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            prac_reminder_text.frameNStart = frameN  # exact frame index
            prac_reminder_text.tStart = t  # local t and not account for scr refresh
            prac_reminder_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(prac_reminder_text, 'tStartRefresh')  # time at next scr refresh
            prac_reminder_text.setAutoDraw(True)
        
        # *prac_reminder_keyResp* updates
        waitOnFlip = False
        if prac_reminder_keyResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            prac_reminder_keyResp.frameNStart = frameN  # exact frame index
            prac_reminder_keyResp.tStart = t  # local t and not account for scr refresh
            prac_reminder_keyResp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(prac_reminder_keyResp, 'tStartRefresh')  # time at next scr refresh
            prac_reminder_keyResp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(prac_reminder_keyResp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(prac_reminder_keyResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if prac_reminder_keyResp.status == STARTED and not waitOnFlip:
            theseKeys = prac_reminder_keyResp.getKeys(keyList=['8'], waitRelease=False)
            _prac_reminder_keyResp_allKeys.extend(theseKeys)
            if len(_prac_reminder_keyResp_allKeys):
                prac_reminder_keyResp.keys = _prac_reminder_keyResp_allKeys[-1].name  # just the last key pressed
                prac_reminder_keyResp.rt = _prac_reminder_keyResp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in prac_blockRemindersComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "prac_blockReminders"-------
    for thisComponent in prac_blockRemindersComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    prac_block_loop.addData('prac_blockText.started', prac_blockText.tStartRefresh)
    prac_block_loop.addData('prac_blockText.stopped', prac_blockText.tStopRefresh)
    prac_block_loop.addData('prac_reminder_text.started', prac_reminder_text.tStartRefresh)
    prac_block_loop.addData('prac_reminder_text.stopped', prac_reminder_text.tStopRefresh)
    # check responses
    if prac_reminder_keyResp.keys in ['', [], None]:  # No response was made
        prac_reminder_keyResp.keys = None
    prac_block_loop.addData('prac_reminder_keyResp.keys',prac_reminder_keyResp.keys)
    if prac_reminder_keyResp.keys != None:  # we had a response
        prac_block_loop.addData('prac_reminder_keyResp.rt', prac_reminder_keyResp.rt)
    prac_block_loop.addData('prac_reminder_keyResp.started', prac_reminder_keyResp.tStartRefresh)
    prac_block_loop.addData('prac_reminder_keyResp.stopped', prac_reminder_keyResp.tStopRefresh)
    # the Routine "prac_blockReminders" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "initFixation"-------
    continueRoutine = True
    routineTimer.add(3.000000)
    # update component parameters for each repeat
    initFixation_img.setImage('img/fixationCross.png')
    # keep track of which components have finished
    initFixationComponents = [initFixation_img]
    for thisComponent in initFixationComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    initFixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "initFixation"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = initFixationClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=initFixationClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *initFixation_img* updates
        if initFixation_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            initFixation_img.frameNStart = frameN  # exact frame index
            initFixation_img.tStart = t  # local t and not account for scr refresh
            initFixation_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(initFixation_img, 'tStartRefresh')  # time at next scr refresh
            initFixation_img.setAutoDraw(True)
        if initFixation_img.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > initFixation_img.tStartRefresh + 3-frameTolerance:
                # keep track of stop time/frame for later
                initFixation_img.tStop = t  # not accounting for scr refresh
                initFixation_img.frameNStop = frameN  # exact frame index
                win.timeOnFlip(initFixation_img, 'tStopRefresh')  # time at next scr refresh
                initFixation_img.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in initFixationComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "initFixation"-------
    for thisComponent in initFixationComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    prac_block_loop.addData('initFixation_img.started', initFixation_img.tStartRefresh)
    prac_block_loop.addData('initFixation_img.stopped', initFixation_img.tStopRefresh)
    
    # set up handler to look after randomisation of conditions etc
    prac_trial_loop = data.TrialHandler(nReps=10, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('prac_trials.xlsx'),
        seed=None, name='prac_trial_loop')
    thisExp.addLoop(prac_trial_loop)  # add the loop to the experiment
    thisPrac_trial_loop = prac_trial_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPrac_trial_loop.rgb)
    if thisPrac_trial_loop != None:
        for paramName in thisPrac_trial_loop:
            exec('{} = thisPrac_trial_loop[paramName]'.format(paramName))
    
    for thisPrac_trial_loop in prac_trial_loop:
        currentLoop = prac_trial_loop
        # abbreviate parameter names if possible (e.g. rgb = thisPrac_trial_loop.rgb)
        if thisPrac_trial_loop != None:
            for paramName in thisPrac_trial_loop:
                exec('{} = thisPrac_trial_loop[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "prac_stimRoutine"-------
        continueRoutine = True
        # update component parameters for each repeat
        # pick the ISI for the next routine
        # this code component is set to 'both' because we need to remove the 'np'
        # at the start of np.linspace (this is a python library JS won't know what to call. 
        
        # make range from a to b in n stepsizes
        ISIRange = np.linspace(1500, 2000, 500)
        
        # picking from a shuffled array is easier for random selection in JS
        shuffle(ISIRange)
        thisISI = ISIRange[0]/1000 # the first item of the shuffled array 
        
        # save this ISI to our output file
        prac_trial_loop.addData('ISI', thisISI)
        
        
        # show in console for debugging
        #print('thisISI: ', thisISI)
        prac_centerImg.setImage(middleStim)
        prac_rightImg1.setImage(rightStim1)
        prac_rightImg2.setImage(rightStim2)
        prac_leftImg1.setImage(leftStim1)
        prac_leftImg2.setImage(leftStim1)
        prac_fixImg.setImage('img/fixationCross.png')
        prac_stim_keyResp.keys = []
        prac_stim_keyResp.rt = []
        _prac_stim_keyResp_allKeys = []
        # keep track of which components have finished
        prac_stimRoutineComponents = [prac_centerImg, prac_rightImg1, prac_rightImg2, prac_leftImg1, prac_leftImg2, prac_fixImg, prac_stim_keyResp]
        for thisComponent in prac_stimRoutineComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        prac_stimRoutineClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "prac_stimRoutine"-------
        while continueRoutine:
            # get current time
            t = prac_stimRoutineClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=prac_stimRoutineClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *prac_centerImg* updates
            if prac_centerImg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_centerImg.frameNStart = frameN  # exact frame index
                prac_centerImg.tStart = t  # local t and not account for scr refresh
                prac_centerImg.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_centerImg, 'tStartRefresh')  # time at next scr refresh
                prac_centerImg.setAutoDraw(True)
            if prac_centerImg.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > prac_centerImg.tStartRefresh + .2-frameTolerance:
                    # keep track of stop time/frame for later
                    prac_centerImg.tStop = t  # not accounting for scr refresh
                    prac_centerImg.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(prac_centerImg, 'tStopRefresh')  # time at next scr refresh
                    prac_centerImg.setAutoDraw(False)
            
            # *prac_rightImg1* updates
            if prac_rightImg1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_rightImg1.frameNStart = frameN  # exact frame index
                prac_rightImg1.tStart = t  # local t and not account for scr refresh
                prac_rightImg1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_rightImg1, 'tStartRefresh')  # time at next scr refresh
                prac_rightImg1.setAutoDraw(True)
            if prac_rightImg1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > prac_rightImg1.tStartRefresh + .2-frameTolerance:
                    # keep track of stop time/frame for later
                    prac_rightImg1.tStop = t  # not accounting for scr refresh
                    prac_rightImg1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(prac_rightImg1, 'tStopRefresh')  # time at next scr refresh
                    prac_rightImg1.setAutoDraw(False)
            
            # *prac_rightImg2* updates
            if prac_rightImg2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_rightImg2.frameNStart = frameN  # exact frame index
                prac_rightImg2.tStart = t  # local t and not account for scr refresh
                prac_rightImg2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_rightImg2, 'tStartRefresh')  # time at next scr refresh
                prac_rightImg2.setAutoDraw(True)
            if prac_rightImg2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > prac_rightImg2.tStartRefresh + .2-frameTolerance:
                    # keep track of stop time/frame for later
                    prac_rightImg2.tStop = t  # not accounting for scr refresh
                    prac_rightImg2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(prac_rightImg2, 'tStopRefresh')  # time at next scr refresh
                    prac_rightImg2.setAutoDraw(False)
            
            # *prac_leftImg1* updates
            if prac_leftImg1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_leftImg1.frameNStart = frameN  # exact frame index
                prac_leftImg1.tStart = t  # local t and not account for scr refresh
                prac_leftImg1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_leftImg1, 'tStartRefresh')  # time at next scr refresh
                prac_leftImg1.setAutoDraw(True)
            if prac_leftImg1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > prac_leftImg1.tStartRefresh + .2-frameTolerance:
                    # keep track of stop time/frame for later
                    prac_leftImg1.tStop = t  # not accounting for scr refresh
                    prac_leftImg1.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(prac_leftImg1, 'tStopRefresh')  # time at next scr refresh
                    prac_leftImg1.setAutoDraw(False)
            
            # *prac_leftImg2* updates
            if prac_leftImg2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_leftImg2.frameNStart = frameN  # exact frame index
                prac_leftImg2.tStart = t  # local t and not account for scr refresh
                prac_leftImg2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_leftImg2, 'tStartRefresh')  # time at next scr refresh
                prac_leftImg2.setAutoDraw(True)
            if prac_leftImg2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > prac_leftImg2.tStartRefresh + .2-frameTolerance:
                    # keep track of stop time/frame for later
                    prac_leftImg2.tStop = t  # not accounting for scr refresh
                    prac_leftImg2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(prac_leftImg2, 'tStopRefresh')  # time at next scr refresh
                    prac_leftImg2.setAutoDraw(False)
            
            # *prac_fixImg* updates
            if prac_fixImg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_fixImg.frameNStart = frameN  # exact frame index
                prac_fixImg.tStart = t  # local t and not account for scr refresh
                prac_fixImg.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_fixImg, 'tStartRefresh')  # time at next scr refresh
                prac_fixImg.setAutoDraw(True)
            if prac_fixImg.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > prac_fixImg.tStartRefresh + thisISI-frameTolerance:
                    # keep track of stop time/frame for later
                    prac_fixImg.tStop = t  # not accounting for scr refresh
                    prac_fixImg.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(prac_fixImg, 'tStopRefresh')  # time at next scr refresh
                    prac_fixImg.setAutoDraw(False)
            
            # *prac_stim_keyResp* updates
            waitOnFlip = False
            if prac_stim_keyResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_stim_keyResp.frameNStart = frameN  # exact frame index
                prac_stim_keyResp.tStart = t  # local t and not account for scr refresh
                prac_stim_keyResp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_stim_keyResp, 'tStartRefresh')  # time at next scr refresh
                prac_stim_keyResp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(prac_stim_keyResp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(prac_stim_keyResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if prac_stim_keyResp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > prac_stim_keyResp.tStartRefresh + thisISI-frameTolerance:
                    # keep track of stop time/frame for later
                    prac_stim_keyResp.tStop = t  # not accounting for scr refresh
                    prac_stim_keyResp.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(prac_stim_keyResp, 'tStopRefresh')  # time at next scr refresh
                    prac_stim_keyResp.status = FINISHED
            if prac_stim_keyResp.status == STARTED and not waitOnFlip:
                theseKeys = prac_stim_keyResp.getKeys(keyList=['1', '8'], waitRelease=False)
                _prac_stim_keyResp_allKeys.extend(theseKeys)
                if len(_prac_stim_keyResp_allKeys):
                    prac_stim_keyResp.keys = [key.name for key in _prac_stim_keyResp_allKeys]  # storing all keys
                    prac_stim_keyResp.rt = [key.rt for key in _prac_stim_keyResp_allKeys]
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in prac_stimRoutineComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "prac_stimRoutine"-------
        for thisComponent in prac_stimRoutineComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        prac_trial_loop.addData('prac_centerImg.started', prac_centerImg.tStartRefresh)
        prac_trial_loop.addData('prac_centerImg.stopped', prac_centerImg.tStopRefresh)
        prac_trial_loop.addData('prac_rightImg1.started', prac_rightImg1.tStartRefresh)
        prac_trial_loop.addData('prac_rightImg1.stopped', prac_rightImg1.tStopRefresh)
        prac_trial_loop.addData('prac_rightImg2.started', prac_rightImg2.tStartRefresh)
        prac_trial_loop.addData('prac_rightImg2.stopped', prac_rightImg2.tStopRefresh)
        prac_trial_loop.addData('prac_leftImg1.started', prac_leftImg1.tStartRefresh)
        prac_trial_loop.addData('prac_leftImg1.stopped', prac_leftImg1.tStopRefresh)
        prac_trial_loop.addData('prac_leftImg2.started', prac_leftImg2.tStartRefresh)
        prac_trial_loop.addData('prac_leftImg2.stopped', prac_leftImg2.tStopRefresh)
        prac_trial_loop.addData('prac_fixImg.started', prac_fixImg.tStartRefresh)
        prac_trial_loop.addData('prac_fixImg.stopped', prac_fixImg.tStopRefresh)
        # check responses
        if prac_stim_keyResp.keys in ['', [], None]:  # No response was made
            prac_stim_keyResp.keys = None
        prac_trial_loop.addData('prac_stim_keyResp.keys',prac_stim_keyResp.keys)
        if prac_stim_keyResp.keys != None:  # we had a response
            prac_trial_loop.addData('prac_stim_keyResp.rt', prac_stim_keyResp.rt)
        prac_trial_loop.addData('prac_stim_keyResp.started', prac_stim_keyResp.tStartRefresh)
        prac_trial_loop.addData('prac_stim_keyResp.stopped', prac_stim_keyResp.tStopRefresh)
        trialNum = trialNum + 1 #iterate trial number for this block
        
        if prac_stim_keyResp.keys: #if at least one response was made this trial
            if prac_stim_keyResp.keys[0] == '1': #if the FIRST button pressed was a '1'
                if target == 'left': #if a left target stim was shown this trial
                    accuracy = 1 #mark this trial as correct
                    numCorr = numCorr +1 #iterate number of correct responses for this block
                elif target == 'right': #if a right target stim was shown this trial
                    accuracy = 0 #mark this trial as an error
            elif prac_stim_keyResp.keys[0] == '8': #if the FIRST button pressed was a '8'
                if target == 'right': #if a right target stim was shown this trial
                    accuracy = 1 #mark this trial as correct
                    numCorr = numCorr +1 #iterate number of correct responses for this block
                elif target == 'left': #if a left target stim was shown this trial
                    accuracy = 0 #mark this trial as an error
                    
        # save this trial's accuracy to our output file
        prac_trial_loop.addData('accuracy', accuracy)
        # the Routine "prac_stimRoutine" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 10 repeats of 'prac_trial_loop'
    
    
    # ------Prepare to start Routine "prac_blockFeed"-------
    continueRoutine = True
    # update component parameters for each repeat
    blockAcc = numCorr / trialNum #compute accuracy for this block
    
    if blockAcc >= .75: #if accuracy >= 75% then say practice is complete and end practice loop to continue to main exp
        outPut = 'You will now play the real game' #feedback presented
        prac_block_loop.finished = True #end practice loop to continue to main exp
    elif blockAcc <= .75: #if accuracy < 75% then say that practice needs to be repeated and DO NOT end practice loop, instead, allow it to repeat
        outPut = 'Please try the practice again' #feedback presented
        prac_block_loop.finished = False #DO NOT end practice loop and allow to repeat
    
    #reset the following variables to zero before the next practice block starts
    trialNum = 0
    numCorr = 0
    prac_blockFeed_text.setText(outPut)
    prac_blockFeed_keyResp.keys = []
    prac_blockFeed_keyResp.rt = []
    _prac_blockFeed_keyResp_allKeys = []
    # keep track of which components have finished
    prac_blockFeedComponents = [prac_blockFeed_text, prac_pressContinue, prac_blockFeed_keyResp]
    for thisComponent in prac_blockFeedComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    prac_blockFeedClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "prac_blockFeed"-------
    while continueRoutine:
        # get current time
        t = prac_blockFeedClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=prac_blockFeedClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *prac_blockFeed_text* updates
        if prac_blockFeed_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            prac_blockFeed_text.frameNStart = frameN  # exact frame index
            prac_blockFeed_text.tStart = t  # local t and not account for scr refresh
            prac_blockFeed_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(prac_blockFeed_text, 'tStartRefresh')  # time at next scr refresh
            prac_blockFeed_text.setAutoDraw(True)
        
        # *prac_pressContinue* updates
        if prac_pressContinue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            prac_pressContinue.frameNStart = frameN  # exact frame index
            prac_pressContinue.tStart = t  # local t and not account for scr refresh
            prac_pressContinue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(prac_pressContinue, 'tStartRefresh')  # time at next scr refresh
            prac_pressContinue.setAutoDraw(True)
        
        # *prac_blockFeed_keyResp* updates
        waitOnFlip = False
        if prac_blockFeed_keyResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            prac_blockFeed_keyResp.frameNStart = frameN  # exact frame index
            prac_blockFeed_keyResp.tStart = t  # local t and not account for scr refresh
            prac_blockFeed_keyResp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(prac_blockFeed_keyResp, 'tStartRefresh')  # time at next scr refresh
            prac_blockFeed_keyResp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(prac_blockFeed_keyResp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(prac_blockFeed_keyResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if prac_blockFeed_keyResp.status == STARTED and not waitOnFlip:
            theseKeys = prac_blockFeed_keyResp.getKeys(keyList=['c'], waitRelease=False)
            _prac_blockFeed_keyResp_allKeys.extend(theseKeys)
            if len(_prac_blockFeed_keyResp_allKeys):
                prac_blockFeed_keyResp.keys = _prac_blockFeed_keyResp_allKeys[-1].name  # just the last key pressed
                prac_blockFeed_keyResp.rt = _prac_blockFeed_keyResp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in prac_blockFeedComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "prac_blockFeed"-------
    for thisComponent in prac_blockFeedComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    prac_block_loop.addData('prac_blockFeed_text.started', prac_blockFeed_text.tStartRefresh)
    prac_block_loop.addData('prac_blockFeed_text.stopped', prac_blockFeed_text.tStopRefresh)
    prac_block_loop.addData('prac_pressContinue.started', prac_pressContinue.tStartRefresh)
    prac_block_loop.addData('prac_pressContinue.stopped', prac_pressContinue.tStopRefresh)
    # check responses
    if prac_blockFeed_keyResp.keys in ['', [], None]:  # No response was made
        prac_blockFeed_keyResp.keys = None
    prac_block_loop.addData('prac_blockFeed_keyResp.keys',prac_blockFeed_keyResp.keys)
    if prac_blockFeed_keyResp.keys != None:  # we had a response
        prac_block_loop.addData('prac_blockFeed_keyResp.rt', prac_blockFeed_keyResp.rt)
    prac_block_loop.addData('prac_blockFeed_keyResp.started', prac_blockFeed_keyResp.tStartRefresh)
    prac_block_loop.addData('prac_blockFeed_keyResp.stopped', prac_blockFeed_keyResp.tStopRefresh)
    # the Routine "prac_blockFeed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 99 repeats of 'prac_block_loop'


# set up handler to look after randomisation of conditions etc
task_condition_loop = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions("condition_"+expInfo['counterbalance']+".xlsx"),
    seed=None, name='task_condition_loop')
thisExp.addLoop(task_condition_loop)  # add the loop to the experiment
thisTask_condition_loop = task_condition_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTask_condition_loop.rgb)
if thisTask_condition_loop != None:
    for paramName in thisTask_condition_loop:
        exec('{} = thisTask_condition_loop[paramName]'.format(paramName))

for thisTask_condition_loop in task_condition_loop:
    currentLoop = task_condition_loop
    # abbreviate parameter names if possible (e.g. rgb = thisTask_condition_loop.rgb)
    if thisTask_condition_loop != None:
        for paramName in thisTask_condition_loop:
            exec('{} = thisTask_condition_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "task_condition"-------
    continueRoutine = True
    # update component parameters for each repeat
    #reset the following variables at the start of the experiment
    blockCounter = 0
    condition_whichCondition_text.setText(conditionText)
    condition_keyResp.keys = []
    condition_keyResp.rt = []
    _condition_keyResp_allKeys = []
    # keep track of which components have finished
    task_conditionComponents = [condition_whichCondition_text, condition_reminder_text, condition_keyResp]
    for thisComponent in task_conditionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    task_conditionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "task_condition"-------
    while continueRoutine:
        # get current time
        t = task_conditionClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=task_conditionClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *condition_whichCondition_text* updates
        if condition_whichCondition_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            condition_whichCondition_text.frameNStart = frameN  # exact frame index
            condition_whichCondition_text.tStart = t  # local t and not account for scr refresh
            condition_whichCondition_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(condition_whichCondition_text, 'tStartRefresh')  # time at next scr refresh
            condition_whichCondition_text.setAutoDraw(True)
        
        # *condition_reminder_text* updates
        if condition_reminder_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            condition_reminder_text.frameNStart = frameN  # exact frame index
            condition_reminder_text.tStart = t  # local t and not account for scr refresh
            condition_reminder_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(condition_reminder_text, 'tStartRefresh')  # time at next scr refresh
            condition_reminder_text.setAutoDraw(True)
        
        # *condition_keyResp* updates
        waitOnFlip = False
        if condition_keyResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            condition_keyResp.frameNStart = frameN  # exact frame index
            condition_keyResp.tStart = t  # local t and not account for scr refresh
            condition_keyResp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(condition_keyResp, 'tStartRefresh')  # time at next scr refresh
            condition_keyResp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(condition_keyResp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(condition_keyResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if condition_keyResp.status == STARTED and not waitOnFlip:
            theseKeys = condition_keyResp.getKeys(keyList=['c'], waitRelease=False)
            _condition_keyResp_allKeys.extend(theseKeys)
            if len(_condition_keyResp_allKeys):
                condition_keyResp.keys = _condition_keyResp_allKeys[-1].name  # just the last key pressed
                condition_keyResp.rt = _condition_keyResp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in task_conditionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "task_condition"-------
    for thisComponent in task_conditionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if condition_keyResp.keys in ['', [], None]:  # No response was made
        condition_keyResp.keys = None
    task_condition_loop.addData('condition_keyResp.keys',condition_keyResp.keys)
    if condition_keyResp.keys != None:  # we had a response
        task_condition_loop.addData('condition_keyResp.rt', condition_keyResp.rt)
    # the Routine "task_condition" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    task_block_loop = data.TrialHandler(nReps=10.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='task_block_loop')
    thisExp.addLoop(task_block_loop)  # add the loop to the experiment
    thisTask_block_loop = task_block_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTask_block_loop.rgb)
    if thisTask_block_loop != None:
        for paramName in thisTask_block_loop:
            exec('{} = thisTask_block_loop[paramName]'.format(paramName))
    
    for thisTask_block_loop in task_block_loop:
        currentLoop = task_block_loop
        # abbreviate parameter names if possible (e.g. rgb = thisTask_block_loop.rgb)
        if thisTask_block_loop != None:
            for paramName in thisTask_block_loop:
                exec('{} = thisTask_block_loop[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "task_blockReminders"-------
        continueRoutine = True
        # update component parameters for each repeat
        blockCounter = blockCounter +1
        
        if blockCounter == 1:
            blockNumText = 'Block 1 of 10'
        elif blockCounter == 2:
            blockNumText = 'Block 2 of 10'
        elif blockCounter == 3:
            blockNumText = 'Block 3 of 10'
        elif blockCounter == 4:
            blockNumText = 'Block 4 of 10'
        elif blockCounter == 5:
            blockNumText = 'Block 5 of 10'
        elif blockCounter == 6:
            blockNumText = 'Block 6 of 10'
        elif blockCounter == 7:
            blockNumText = 'Block 7 of 10'
        elif blockCounter == 8:
            blockNumText = 'Block 8 of 10'
        elif blockCounter == 9:
            blockNumText = 'Block 9 of 10'
        elif blockCounter == 10:
            blockNumText = 'Block 10 of 10'
        task_blockText.setText(blockNumText)
        task_blockReminders_keyResp.keys = []
        task_blockReminders_keyResp.rt = []
        _task_blockReminders_keyResp_allKeys = []
        # keep track of which components have finished
        task_blockRemindersComponents = [task_blockText, task_blockReminders_text, task_blockReminders_keyResp]
        for thisComponent in task_blockRemindersComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        task_blockRemindersClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "task_blockReminders"-------
        while continueRoutine:
            # get current time
            t = task_blockRemindersClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=task_blockRemindersClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *task_blockText* updates
            if task_blockText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                task_blockText.frameNStart = frameN  # exact frame index
                task_blockText.tStart = t  # local t and not account for scr refresh
                task_blockText.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(task_blockText, 'tStartRefresh')  # time at next scr refresh
                task_blockText.setAutoDraw(True)
            
            # *task_blockReminders_text* updates
            if task_blockReminders_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                task_blockReminders_text.frameNStart = frameN  # exact frame index
                task_blockReminders_text.tStart = t  # local t and not account for scr refresh
                task_blockReminders_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(task_blockReminders_text, 'tStartRefresh')  # time at next scr refresh
                task_blockReminders_text.setAutoDraw(True)
            
            # *task_blockReminders_keyResp* updates
            waitOnFlip = False
            if task_blockReminders_keyResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                task_blockReminders_keyResp.frameNStart = frameN  # exact frame index
                task_blockReminders_keyResp.tStart = t  # local t and not account for scr refresh
                task_blockReminders_keyResp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(task_blockReminders_keyResp, 'tStartRefresh')  # time at next scr refresh
                task_blockReminders_keyResp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(task_blockReminders_keyResp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(task_blockReminders_keyResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if task_blockReminders_keyResp.status == STARTED and not waitOnFlip:
                theseKeys = task_blockReminders_keyResp.getKeys(keyList=['8'], waitRelease=False)
                _task_blockReminders_keyResp_allKeys.extend(theseKeys)
                if len(_task_blockReminders_keyResp_allKeys):
                    task_blockReminders_keyResp.keys = _task_blockReminders_keyResp_allKeys[-1].name  # just the last key pressed
                    task_blockReminders_keyResp.rt = _task_blockReminders_keyResp_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in task_blockRemindersComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "task_blockReminders"-------
        for thisComponent in task_blockRemindersComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        task_block_loop.addData('task_blockText.started', task_blockText.tStartRefresh)
        task_block_loop.addData('task_blockText.stopped', task_blockText.tStopRefresh)
        # check responses
        if task_blockReminders_keyResp.keys in ['', [], None]:  # No response was made
            task_blockReminders_keyResp.keys = None
        task_block_loop.addData('task_blockReminders_keyResp.keys',task_blockReminders_keyResp.keys)
        if task_blockReminders_keyResp.keys != None:  # we had a response
            task_block_loop.addData('task_blockReminders_keyResp.rt', task_blockReminders_keyResp.rt)
        task_block_loop.addData('task_blockReminders_keyResp.started', task_blockReminders_keyResp.tStartRefresh)
        task_block_loop.addData('task_blockReminders_keyResp.stopped', task_blockReminders_keyResp.tStopRefresh)
        # the Routine "task_blockReminders" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "initFixation"-------
        continueRoutine = True
        routineTimer.add(3.000000)
        # update component parameters for each repeat
        initFixation_img.setImage('img/fixationCross.png')
        # keep track of which components have finished
        initFixationComponents = [initFixation_img]
        for thisComponent in initFixationComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        initFixationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "initFixation"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = initFixationClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=initFixationClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *initFixation_img* updates
            if initFixation_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                initFixation_img.frameNStart = frameN  # exact frame index
                initFixation_img.tStart = t  # local t and not account for scr refresh
                initFixation_img.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(initFixation_img, 'tStartRefresh')  # time at next scr refresh
                initFixation_img.setAutoDraw(True)
            if initFixation_img.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > initFixation_img.tStartRefresh + 3-frameTolerance:
                    # keep track of stop time/frame for later
                    initFixation_img.tStop = t  # not accounting for scr refresh
                    initFixation_img.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(initFixation_img, 'tStopRefresh')  # time at next scr refresh
                    initFixation_img.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in initFixationComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "initFixation"-------
        for thisComponent in initFixationComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        task_block_loop.addData('initFixation_img.started', initFixation_img.tStartRefresh)
        task_block_loop.addData('initFixation_img.stopped', initFixation_img.tStopRefresh)
        
        # set up handler to look after randomisation of conditions etc
        task_trial_loop = data.TrialHandler(nReps=10.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(whichCondition),
            seed=None, name='task_trial_loop')
        thisExp.addLoop(task_trial_loop)  # add the loop to the experiment
        thisTask_trial_loop = task_trial_loop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTask_trial_loop.rgb)
        if thisTask_trial_loop != None:
            for paramName in thisTask_trial_loop:
                exec('{} = thisTask_trial_loop[paramName]'.format(paramName))
        
        for thisTask_trial_loop in task_trial_loop:
            currentLoop = task_trial_loop
            # abbreviate parameter names if possible (e.g. rgb = thisTask_trial_loop.rgb)
            if thisTask_trial_loop != None:
                for paramName in thisTask_trial_loop:
                    exec('{} = thisTask_trial_loop[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "task_stimRoutine"-------
            continueRoutine = True
            # update component parameters for each repeat
            # pick the ISI for the next routine
            # this code component is set to 'both' because we need to remove the 'np'
            # at the start of np.linspace (this is a python library JS won't know what to call. 
            
            # make range from a to b in n stepsizes
            ISIRange = np.linspace(1500, 2000, 500)
            
            # picking from a shuffled array is easier for random selection in JS
            shuffle(ISIRange)
            thisISI = ISIRange[0]/1000 # the first item of the shuffled array 
            
            # save this ISI to our output file
            task_trial_loop.addData('ISI', thisISI)
            
            task_centerImg.setImage(middleStim)
            task_rightImg1.setImage(rightStim1)
            task_rightImg2.setImage(rightStim2)
            task_leftImg1.setImage(leftStim1)
            task_leftImg2.setImage(leftStim1)
            task_fixImg.setImage('img/fixationCross.png')
            task_stim_keyResp.keys = []
            task_stim_keyResp.rt = []
            _task_stim_keyResp_allKeys = []
            # keep track of which components have finished
            task_stimRoutineComponents = [task_centerImg, task_rightImg1, task_rightImg2, task_leftImg1, task_leftImg2, task_fixImg, task_stim_keyResp]
            for thisComponent in task_stimRoutineComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            task_stimRoutineClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "task_stimRoutine"-------
            while continueRoutine:
                # get current time
                t = task_stimRoutineClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=task_stimRoutineClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *task_centerImg* updates
                if task_centerImg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    task_centerImg.frameNStart = frameN  # exact frame index
                    task_centerImg.tStart = t  # local t and not account for scr refresh
                    task_centerImg.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(task_centerImg, 'tStartRefresh')  # time at next scr refresh
                    task_centerImg.setAutoDraw(True)
                if task_centerImg.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > task_centerImg.tStartRefresh + .2-frameTolerance:
                        # keep track of stop time/frame for later
                        task_centerImg.tStop = t  # not accounting for scr refresh
                        task_centerImg.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(task_centerImg, 'tStopRefresh')  # time at next scr refresh
                        task_centerImg.setAutoDraw(False)
                
                # *task_rightImg1* updates
                if task_rightImg1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    task_rightImg1.frameNStart = frameN  # exact frame index
                    task_rightImg1.tStart = t  # local t and not account for scr refresh
                    task_rightImg1.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(task_rightImg1, 'tStartRefresh')  # time at next scr refresh
                    task_rightImg1.setAutoDraw(True)
                if task_rightImg1.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > task_rightImg1.tStartRefresh + .2-frameTolerance:
                        # keep track of stop time/frame for later
                        task_rightImg1.tStop = t  # not accounting for scr refresh
                        task_rightImg1.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(task_rightImg1, 'tStopRefresh')  # time at next scr refresh
                        task_rightImg1.setAutoDraw(False)
                
                # *task_rightImg2* updates
                if task_rightImg2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    task_rightImg2.frameNStart = frameN  # exact frame index
                    task_rightImg2.tStart = t  # local t and not account for scr refresh
                    task_rightImg2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(task_rightImg2, 'tStartRefresh')  # time at next scr refresh
                    task_rightImg2.setAutoDraw(True)
                if task_rightImg2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > task_rightImg2.tStartRefresh + .2-frameTolerance:
                        # keep track of stop time/frame for later
                        task_rightImg2.tStop = t  # not accounting for scr refresh
                        task_rightImg2.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(task_rightImg2, 'tStopRefresh')  # time at next scr refresh
                        task_rightImg2.setAutoDraw(False)
                
                # *task_leftImg1* updates
                if task_leftImg1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    task_leftImg1.frameNStart = frameN  # exact frame index
                    task_leftImg1.tStart = t  # local t and not account for scr refresh
                    task_leftImg1.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(task_leftImg1, 'tStartRefresh')  # time at next scr refresh
                    task_leftImg1.setAutoDraw(True)
                if task_leftImg1.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > task_leftImg1.tStartRefresh + .2-frameTolerance:
                        # keep track of stop time/frame for later
                        task_leftImg1.tStop = t  # not accounting for scr refresh
                        task_leftImg1.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(task_leftImg1, 'tStopRefresh')  # time at next scr refresh
                        task_leftImg1.setAutoDraw(False)
                
                # *task_leftImg2* updates
                if task_leftImg2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    task_leftImg2.frameNStart = frameN  # exact frame index
                    task_leftImg2.tStart = t  # local t and not account for scr refresh
                    task_leftImg2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(task_leftImg2, 'tStartRefresh')  # time at next scr refresh
                    task_leftImg2.setAutoDraw(True)
                if task_leftImg2.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > task_leftImg2.tStartRefresh + .2-frameTolerance:
                        # keep track of stop time/frame for later
                        task_leftImg2.tStop = t  # not accounting for scr refresh
                        task_leftImg2.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(task_leftImg2, 'tStopRefresh')  # time at next scr refresh
                        task_leftImg2.setAutoDraw(False)
                
                # *task_fixImg* updates
                if task_fixImg.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    task_fixImg.frameNStart = frameN  # exact frame index
                    task_fixImg.tStart = t  # local t and not account for scr refresh
                    task_fixImg.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(task_fixImg, 'tStartRefresh')  # time at next scr refresh
                    task_fixImg.setAutoDraw(True)
                if task_fixImg.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > task_fixImg.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        task_fixImg.tStop = t  # not accounting for scr refresh
                        task_fixImg.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(task_fixImg, 'tStopRefresh')  # time at next scr refresh
                        task_fixImg.setAutoDraw(False)
                
                # *task_stim_keyResp* updates
                waitOnFlip = False
                if task_stim_keyResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    task_stim_keyResp.frameNStart = frameN  # exact frame index
                    task_stim_keyResp.tStart = t  # local t and not account for scr refresh
                    task_stim_keyResp.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(task_stim_keyResp, 'tStartRefresh')  # time at next scr refresh
                    task_stim_keyResp.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(task_stim_keyResp.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(task_stim_keyResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if task_stim_keyResp.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > task_stim_keyResp.tStartRefresh + thisISI-frameTolerance:
                        # keep track of stop time/frame for later
                        task_stim_keyResp.tStop = t  # not accounting for scr refresh
                        task_stim_keyResp.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(task_stim_keyResp, 'tStopRefresh')  # time at next scr refresh
                        task_stim_keyResp.status = FINISHED
                if task_stim_keyResp.status == STARTED and not waitOnFlip:
                    theseKeys = task_stim_keyResp.getKeys(keyList=['1', '8'], waitRelease=False)
                    _task_stim_keyResp_allKeys.extend(theseKeys)
                    if len(_task_stim_keyResp_allKeys):
                        task_stim_keyResp.keys = [key.name for key in _task_stim_keyResp_allKeys]  # storing all keys
                        task_stim_keyResp.rt = [key.rt for key in _task_stim_keyResp_allKeys]
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in task_stimRoutineComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "task_stimRoutine"-------
            for thisComponent in task_stimRoutineComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            task_trial_loop.addData('task_centerImg.started', task_centerImg.tStartRefresh)
            task_trial_loop.addData('task_centerImg.stopped', task_centerImg.tStopRefresh)
            task_trial_loop.addData('task_rightImg1.started', task_rightImg1.tStartRefresh)
            task_trial_loop.addData('task_rightImg1.stopped', task_rightImg1.tStopRefresh)
            task_trial_loop.addData('task_rightImg2.started', task_rightImg2.tStartRefresh)
            task_trial_loop.addData('task_rightImg2.stopped', task_rightImg2.tStopRefresh)
            task_trial_loop.addData('task_leftImg1.started', task_leftImg1.tStartRefresh)
            task_trial_loop.addData('task_leftImg1.stopped', task_leftImg1.tStopRefresh)
            task_trial_loop.addData('task_leftImg2.started', task_leftImg2.tStartRefresh)
            task_trial_loop.addData('task_leftImg2.stopped', task_leftImg2.tStopRefresh)
            task_trial_loop.addData('task_fixImg.started', task_fixImg.tStartRefresh)
            task_trial_loop.addData('task_fixImg.stopped', task_fixImg.tStopRefresh)
            # check responses
            if task_stim_keyResp.keys in ['', [], None]:  # No response was made
                task_stim_keyResp.keys = None
            task_trial_loop.addData('task_stim_keyResp.keys',task_stim_keyResp.keys)
            if task_stim_keyResp.keys != None:  # we had a response
                task_trial_loop.addData('task_stim_keyResp.rt', task_stim_keyResp.rt)
            task_trial_loop.addData('task_stim_keyResp.started', task_stim_keyResp.tStartRefresh)
            task_trial_loop.addData('task_stim_keyResp.stopped', task_stim_keyResp.tStopRefresh)
            trialNum = trialNum + 1 #iterate trial number for this block
            
            if task_stim_keyResp.keys: #if at least one response was made this trial
                if task_stim_keyResp.keys[0] == '1': #if the FIRST button pressed was a '1'
                    if target == 'left': #if a left target stim was shown this trial
                        accuracy = 1 #mark this trial as correct
                        numCorr = numCorr +1 #iterate number of correct responses for this block
                    elif target == 'right': #if a right target stim was shown this trial
                        accuracy = 0 #mark this trial as an error
                elif task_stim_keyResp.keys[0] == '8': #if the FIRST button pressed was a '8'
                    if target == 'right': #if a right target stim was shown this trial
                        accuracy = 1 #mark this trial as correct
                        numCorr = numCorr +1 #iterate number of correct responses for this block
                    elif target == 'left': #if a left target stim was shown this trial
                        accuracy = 0 #mark this trial as an error
                        
            # save this trial's accuracy to our output file
            task_trial_loop.addData('accuracy', accuracy)
            # the Routine "task_stimRoutine" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed 10.0 repeats of 'task_trial_loop'
        
        
        # ------Prepare to start Routine "task_blockFeed"-------
        continueRoutine = True
        # update component parameters for each repeat
        blockAcc = numCorr / trialNum #compute accuracy for this block
        
        if blockCounter < 10:
            if blockAcc >= .75:
                if blockAcc < .9:
                    blockFeed = 'Good job'
                    blockFeedCat = 1
                elif blockAcc >= .9:
                    blockFeed = 'Respond faster'
                    blockFeedCat = 2
            elif blockAcc < .75:
                blockFeed = 'Respond more accurately'
                blockFeedCat = 3
        elif blockCounter == 10:
            'You have completed all blocks'
        
        # save this block's feedback to our output file
        task_trial_loop.addData('blockFeedCat', blockFeedCat)
        
        #reset the following variables to zero before next block starts
        trialNum = 0
        numCorr = 0
        task_blockFeed_text.setText(blockFeed)
        task_blockFeed_text2.setText('Press the right button to continue')
        task_blockFeed_keyResp.keys = []
        task_blockFeed_keyResp.rt = []
        _task_blockFeed_keyResp_allKeys = []
        # keep track of which components have finished
        task_blockFeedComponents = [task_blockFeed_text, task_blackFeed_text3, task_blockFeed_text2, task_blockFeed_keyResp]
        for thisComponent in task_blockFeedComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        task_blockFeedClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "task_blockFeed"-------
        while continueRoutine:
            # get current time
            t = task_blockFeedClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=task_blockFeedClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *task_blockFeed_text* updates
            if task_blockFeed_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                task_blockFeed_text.frameNStart = frameN  # exact frame index
                task_blockFeed_text.tStart = t  # local t and not account for scr refresh
                task_blockFeed_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(task_blockFeed_text, 'tStartRefresh')  # time at next scr refresh
                task_blockFeed_text.setAutoDraw(True)
            
            # *task_blackFeed_text3* updates
            if task_blackFeed_text3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                task_blackFeed_text3.frameNStart = frameN  # exact frame index
                task_blackFeed_text3.tStart = t  # local t and not account for scr refresh
                task_blackFeed_text3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(task_blackFeed_text3, 'tStartRefresh')  # time at next scr refresh
                task_blackFeed_text3.setAutoDraw(True)
            if task_blackFeed_text3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > task_blackFeed_text3.tStartRefresh + 10-frameTolerance:
                    # keep track of stop time/frame for later
                    task_blackFeed_text3.tStop = t  # not accounting for scr refresh
                    task_blackFeed_text3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(task_blackFeed_text3, 'tStopRefresh')  # time at next scr refresh
                    task_blackFeed_text3.setAutoDraw(False)
            
            # *task_blockFeed_text2* updates
            if task_blockFeed_text2.status == NOT_STARTED and tThisFlip >= 10-frameTolerance:
                # keep track of start time/frame for later
                task_blockFeed_text2.frameNStart = frameN  # exact frame index
                task_blockFeed_text2.tStart = t  # local t and not account for scr refresh
                task_blockFeed_text2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(task_blockFeed_text2, 'tStartRefresh')  # time at next scr refresh
                task_blockFeed_text2.setAutoDraw(True)
            
            # *task_blockFeed_keyResp* updates
            waitOnFlip = False
            if task_blockFeed_keyResp.status == NOT_STARTED and tThisFlip >= 10-frameTolerance:
                # keep track of start time/frame for later
                task_blockFeed_keyResp.frameNStart = frameN  # exact frame index
                task_blockFeed_keyResp.tStart = t  # local t and not account for scr refresh
                task_blockFeed_keyResp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(task_blockFeed_keyResp, 'tStartRefresh')  # time at next scr refresh
                task_blockFeed_keyResp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(task_blockFeed_keyResp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(task_blockFeed_keyResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if task_blockFeed_keyResp.status == STARTED and not waitOnFlip:
                theseKeys = task_blockFeed_keyResp.getKeys(keyList=['8'], waitRelease=False)
                _task_blockFeed_keyResp_allKeys.extend(theseKeys)
                if len(_task_blockFeed_keyResp_allKeys):
                    task_blockFeed_keyResp.keys = _task_blockFeed_keyResp_allKeys[-1].name  # just the last key pressed
                    task_blockFeed_keyResp.rt = _task_blockFeed_keyResp_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in task_blockFeedComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "task_blockFeed"-------
        for thisComponent in task_blockFeedComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        task_block_loop.addData('task_blockFeed_text.started', task_blockFeed_text.tStartRefresh)
        task_block_loop.addData('task_blockFeed_text.stopped', task_blockFeed_text.tStopRefresh)
        # check responses
        if task_blockFeed_keyResp.keys in ['', [], None]:  # No response was made
            task_blockFeed_keyResp.keys = None
        task_block_loop.addData('task_blockFeed_keyResp.keys',task_blockFeed_keyResp.keys)
        if task_blockFeed_keyResp.keys != None:  # we had a response
            task_block_loop.addData('task_blockFeed_keyResp.rt', task_blockFeed_keyResp.rt)
        task_block_loop.addData('task_blockFeed_keyResp.started', task_blockFeed_keyResp.tStartRefresh)
        task_block_loop.addData('task_blockFeed_keyResp.stopped', task_blockFeed_keyResp.tStopRefresh)
        # the Routine "task_blockFeed" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 10.0 repeats of 'task_block_loop'
    
    
    # ------Prepare to start Routine "task_conditionComplete"-------
    continueRoutine = True
    # update component parameters for each repeat
    conditionComplete_key_resp.keys = []
    conditionComplete_key_resp.rt = []
    _conditionComplete_key_resp_allKeys = []
    # keep track of which components have finished
    task_conditionCompleteComponents = [conditionComplete_text, conditionComplete_key_resp]
    for thisComponent in task_conditionCompleteComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    task_conditionCompleteClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "task_conditionComplete"-------
    while continueRoutine:
        # get current time
        t = task_conditionCompleteClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=task_conditionCompleteClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *conditionComplete_text* updates
        if conditionComplete_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            conditionComplete_text.frameNStart = frameN  # exact frame index
            conditionComplete_text.tStart = t  # local t and not account for scr refresh
            conditionComplete_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(conditionComplete_text, 'tStartRefresh')  # time at next scr refresh
            conditionComplete_text.setAutoDraw(True)
        
        # *conditionComplete_key_resp* updates
        waitOnFlip = False
        if conditionComplete_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            conditionComplete_key_resp.frameNStart = frameN  # exact frame index
            conditionComplete_key_resp.tStart = t  # local t and not account for scr refresh
            conditionComplete_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(conditionComplete_key_resp, 'tStartRefresh')  # time at next scr refresh
            conditionComplete_key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(conditionComplete_key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(conditionComplete_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if conditionComplete_key_resp.status == STARTED and not waitOnFlip:
            theseKeys = conditionComplete_key_resp.getKeys(keyList=['c'], waitRelease=False)
            _conditionComplete_key_resp_allKeys.extend(theseKeys)
            if len(_conditionComplete_key_resp_allKeys):
                conditionComplete_key_resp.keys = _conditionComplete_key_resp_allKeys[-1].name  # just the last key pressed
                conditionComplete_key_resp.rt = _conditionComplete_key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in task_conditionCompleteComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "task_conditionComplete"-------
    for thisComponent in task_conditionCompleteComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if conditionComplete_key_resp.keys in ['', [], None]:  # No response was made
        conditionComplete_key_resp.keys = None
    task_condition_loop.addData('conditionComplete_key_resp.keys',conditionComplete_key_resp.keys)
    if conditionComplete_key_resp.keys != None:  # we had a response
        task_condition_loop.addData('conditionComplete_key_resp.rt', conditionComplete_key_resp.rt)
    # the Routine "task_conditionComplete" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'task_condition_loop'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
