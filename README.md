# My Library
 You know JQuery ? i try to remake it for me with more precision for some thing and by adding more arranging feature.

## To Integrate it to your project :
<script src="https://devwebaupif.000webhostapp.com/Projets/MyLibrary/myLibrary.js"></script>

## Explanation of all the available commands :



## vSeb()
Let me know if you have a good idea to rename this one, i dont want to put a $  
vSeb() is the equivalent of the $ of Jquery.

> vSeb("#myId")

  return the element with the id "myId"

> vSeb(".myClass")

return an array with the elements with the class "myClass"

> vSeb("span")

return an array with the elements with the localName "span"

#### You can add a name research exemple :

> vSeb("#myid[myName]")  

return the element with the id "myId" and the name "myName"

but if you've put a name on an element that shouldn't have one it will return an error.

#### You can also search only by name :

> vSeb("[myName]")  

return the element with the name "myName"



## on()

This will call your function when the choosen event is executed on the choosen element(s)

Think of this one as a sentance like :
On this event from this element do this.

How to Use:
> on("eventName","selectedElement(s)",function to do)



## each()

A function to make an action on multiple elements (array,string...)

How to Use:
>each(myElements,(elt)=>{
  myfunction here with elt which is the current element
});

Exemple:
>let Table = ["hi","hello","yes"];  
each(Table,(elt)=>{CL(elt)})

this will return 
>hi  
hello  
yes



## addClass()

This will add a class on the choosen element(s)

How to Use:
> addClass("myClass",myElement(s))



## delClass()

This will remove a class on the choosen element(s)

How to Use:
> delClass("myClass",myElement(s))


## toggleClass()

This will add a class on the choosen element(s) which does not have already the class 
AND this will remove the class on the choose, element(s) chich does already have the class.

How to Use:
> togglClass("myClass",myElement(s))



## show()

This will display an elements which is currently not displayed.

How to Use:
> show(myElement(s))



## hide()

This will hide an elements which is currently displayed.

How to Use:
> hide(myElement(s))



## ready()

This will do what you say it to do when the DOM is ready

How to Use:
> ready(myAction)



## CL()

It is a simplified console.log().

Exemple:
> CL("hi")
return hi in the console.



## CE()

It is a simplified console.error().

Exemple:
> CE("hi")
return an error hi in the console.


# Currently working on :

### -Upgrading the code with the redundant part by replacing them with a function
### -Adding some return of error from the vSeb() function
### -Adding function of element loaded
