Dec 15, 2018<br>
03:03PM

# Wrapping up

The basic functionality of the application is finished. The only thing that's left is some smaller UI fixes as well as more user control over the text to be generated. Because I'm working with webpack, there's a way to make the loading of certain assets async as well as faster - such as fonts. 

## UI bugs and fixes

One of the weirdest challenges I've had so far was making a good event listener that would automatically update the animated text on input change but using materialize makes it a bit difficult. I can't seem to find any information on the documentation that would help me with this. 

One of the solutions I came up with was to use the init functions that comes with materialize but it gives me a different id than the one actually generated. There's a super hacky way to actually make it work but I don't think that's worth implementing as there probably is a way to make it a one liner but eh not my main conern.

## Where to go

I'm kinda out of steam for this project and I'm not sure if I'll keep working on this. There are some basic features and functionalities that I could implement but for now, since the quality of animations generated is still not at the level I want it at and until I find a good way to animate it, I'll leave it alone.