# [GenBot](https://github.com/zerodoc123/improved-sniffle) *·* <img title="Stars" alt="Stars S4p" src="https://flat.badgen.net/github/stars/zerodoc123/improved-sniffle"> <img title="Forks" alt="Forks S4p" src="https://flat.badgen.net/github/forks/zerodoc123/improved-sniffle"> <img title="Issues" alt="Issues S4p" src="https://flat.badgen.net/github/prs/zerodoc123/improved-sniffle">

This bot is used for sharing accounts using discord, its easy and fast to configure.

## **How to Config & Use the Bot ⚡**

First of all you need to have installed any version of npm and node.js. But it have to be compatible with all the packages. The recomended version for this bot is 17.6.0.

### **Download the Project**

If you don't know how to do this and you are on ubuntu or other operative systems without an user interface, you can try this out:

Ubuntu & Debian:
```bash
# Install Git (you can skip if you alredy have):
$ sudo apt update && sudo apt upgrade -y
$ sudo apt-get install git

# Downloading bot:
# Using S4p Version:
git clone https://github.com/S4ponci0u/GenBot.git
cd GenBot
# Using zerodoc Version:
git clone https://github.com/zerodoc123/improved-sniffle.git
cd improved-sniffle 
```

### **Install packages:**

You can install all the packages by using

Linux & Mac & Windows:

```bash
$ npm i
```

### **Editing config:**

Open <code>config.json</code> and edit all the necessary things for making the bot runing properly.

### **Runing the Bot:**

You can run the bot using *pm2* or other scripts for making it 24/7, but we gonna use the default script:

Linux & Mac & Windows:

```bash
$ node index.js
```

or 

```bash
$ npm run start
```

All gonna do the same.

### **Making it 24/7:**
There is a lot of ways for make the bot 24/7 (if you don't know what is it, its basicly make it always alive).

1.Option, __*Replit*__:

You can use my template. Then, you should add a http server on [uptimerobot.com](https://uptimerobot.com) and with that it should keep the bot always alive.

[![Run on Repl.it](https://repl.it/badge/github/S4ponci0u/GenBot)](https://replit.com/@LTZ999/GenBot)

2.Option, __*Pm2*__ (Only Linux and Mac):

*Pm2* Its an script that you can use for a lot of envioroments, but we gonna use it for our bot.

Instalation (Mac & Linux):
```bash
$ sudo npm i pm2
```
Then, you should run:
```bash
$ pm2 start index.js
```
<p><br></p>

# Credits
Coder: [zerodoc123](https://github.com/zerodoc123) (Github)

Collaborators: [S4ponci0u](https://github.com/S4ponci0u) (Github)