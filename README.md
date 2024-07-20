# cookieClicker

I didn't build a wire frame diagram as I felt the layout was quite simple but one of the things that I do when designing any web page is to place a 1 pixel boarder around my HTML elements so that I can position them on the page and in relationship to each other this gives me a basic layout of were my elements are going to go.

for my cookie button I styled it using an copy write free vector inside the button and made it round so that it best fitted the image.

I added keyframe animations that start when you click the multiplyer buttons and the cookie click then included the event listeners for all 4 of the buttons.  
and also added a custom pointer in the shape of a sceletons hand.

added local storage and used a parseintiger function to retrieve the data from storage and change it back into an interger

I didn't make a request to the api provided but had no difficulty making a conditional function that gives an alert if ther are not enough cookies available to buy an upgrade

the first up grade haleping hand costs 100 cookies and increases the number of cookies you get each time you click the cookie

the zombie frend costs 1000 cookies and increases the cookies per secound by 10

and the cookie monster costs 10000 cokkies and increases the cookies per secound by 1000 but only lasts for 15 secounds before it times out
when the zombie and the cookie monster upgrades are clicked they start a keyframe animation. the number of upgrades are also recorded in local storage except for the monster which as I said times out

the hardest part for me was retreaving local storage so that it could be used and adding the value to the display when it was retrieved but I was able to do this with some help and will now remember that when the data is returned from local storage it is always in a string form like json objects and needs to be parsed.
