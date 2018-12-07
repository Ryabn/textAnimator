Dec 07, 2018<br>
06:44AM

# Thinking Out Loud

I was trying to implement a simple animation scheme for my quick countdown timer library and decided that I wanted to try out svg animations since I had heard how great they were and really wanted to get into to make amazing animations. I was trying to figure out how to animate svg's and turns out certain parts of it were deprecated (SMIL was deprecated by chrome developers and almost removed) and I came across a library called anime.js. Their opening animation for their logo was absolutely amazing and so I came up with this project: a tool to help generate these animations since it looks like a lot of it can be automated.

## How I plan to make this

Looking at the documentation, alot of the animation stuff is just based off cool delays on drawing strokes and fills in the svg's of the text and so the actual animating part seems pretty trivial. Most likely, I'll be creating some basic algorithm to generate appropriate values for the delays and substituting these values into the anime.js command to animate the svg's/

The real struggle is going to be in generating the svg's. I haven't looked too hard yet but I can't seem to find any open source libraries that automatically convert text to svg's and the programs that offer this capability require users to send a text file to their backend that generates it and returns the svg. For now, this part seems like the bulk of the challenge but I should be able to manage. If I can't find a way automate this process, I'll probably just make the svg's myself for each letter and then use those for the time being.

Pros for this method: 
 - Guaranteed to work since it's all hardcoded

Cons:
 - Makes it hard to make the individual text customizable unless I add some variables in the hardcoded part.

The last part will be creating the UI which I think will be pretty fun. With this basic roadmap in mind, let's get to work.