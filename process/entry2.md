Dec 07, 2018<br>
07:50AM

# Updated plan

Turns out, there is a library that can convert text straight into svg files. The thing is, it's hosted on npm and it's not optimized for just injecting into my html with a script tag and I'm pretty sure RequireJS is a way of the past. I'm currently picking up Webpack and figuring out how to make it work with my project.

## Using Webpack

I completely changed up my file system since I believe the way webpack works is that it will generate a js file for me that has everything worked out. I managed to make webpack work for my own script file but I'm trying to work out the kinks for important a library for webpack. 

Update: (12:40PM) I managed to get webpack to work. The exact kinks I'm still trying to work out but it all works together really cleanly. I'll probably be implementing webpack into everything else because of how versatile and simple it is. Getting into it is the hard part but now I've figured it out. 