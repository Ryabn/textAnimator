Dec 08, 2018<br>
08:02AM

# Working with Webpack

Turns out, setting up Webpack was relatively easy as well as incorporating my node modules. I had been used to using webpack through React this entire time and never had to set it up from scratch so that was a fairly enlightening experience. 

## Debugging

I ran into a pretty strange bug that I'm actually still unsure how it works exactly but I found a solution for it. If anyone knows why please enlighten me. The original code looked something like this:

``` javascript

function generate(text, font){
    TextToSVG.load(`js/${font}.ttf`, function(err, textToSVG) {
        let full = {};
        for(let i = 0; i < text.length; i++){   
            let letter = text.substr(i,1);
            full["a" + i] = textToSVG.getSVG(letter);
        }

    });
    displayPreview(full);
}
function displayPreview(full){
    //prints out all the elements in the json file
    console.log(full);

    //prints a completely empty json variable
    console.log(JSON.stringify(full);
}
```

For some reason, the json data was clearly there when I printed it but calling Object.keys(full) and printing individual keys or even just stringifying/parsing the json all returned an empty json set of brackets. The reason why I used this method is because TextToSVG is an async function and so it would sometimes print out the individual character svg's in the wrong order and so I decided to create a JSON variable that would save all the characters in order and displayPreview() would display them in the order they were meant to be displayed. My fix for this was simply moving displayPreview from outside of the function into the .load function. I have no idea why this happens but it does. My original thinking was that it was async or whatever but like the problem is that printing out the full variable works just fine but doing an extra operation or whatever doesn't. Weird bug that took me a good half hour to try and google-fu a solution and couldn't find anything. 

The only solutions I could find were regarding people creating arrays instead of JSON objects or using the wrong variable name but I already tested for all of those errors. If someone could enlighten me, that'd be great.

## Working with animejs

Now that I've worked out all of the kinks with the textToSVG library (thank god for existing, it does alot of the heavy lifting) I just need to now look at the individual svg code that's been outputted and figure out a way to animate it with animejs. Right now, it seems like I may have to manipulate the svg code itself but once I read up on all of the documentation and get a good feel for the libraries capabilites and how it works, I'll be able to find a good solution.