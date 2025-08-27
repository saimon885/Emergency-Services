1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ANS:getElementById--> It works to select a specific element based on the ID attribute of an HTML element, it returns only one Element object (Element) and it works faster than all other methods and is denoted by document.getElementById('id'),
getElementsByClassName--> It selects one or more elements based on the class attribute of an HTML element, it returns a "live" HTMLCollection, it helps to collect multiple elements of the same class together, it is identified by document.getElementsByClassName('className'),
querySelector/querySelectorAll-->It selects elements based on CSS selectors. It can use (#id), (.class), (tag), ([attribute]) and more complex CSS selectors, querySelector returns the first element that matches the given CSS selector, and querySelectorAll returns all elements that match the given CSS selector as a "static" NodeList.


2. How do you **create and insert a new element into the DOM**?
ANS: First, we need to create a new HTML element using the document.createElement() method. In this method, we need to pass the type of tag to be created (such as div, p, img, etc.) as a parameter. Then, we can add different content to the element, such as text, attributes, or classes. Finally, we can use different methods such as appendChild() to add the element to a specific location in the HTML document. So, with the help of this method, we can add a new element to the DOM.


3. What is **Event Bubbling** and how does it work?
ANS: Event bubbling is a process in JavaScript where when an event is triggered on a particular element, the event propagates from that element to its parent and then to all of its parent or ancestor elements above it. It's like a bubble that rises from the bottom inner element to the top outer element.


4. What is **Event Delegation** in JavaScript? Why is it useful?
ANS:Event delegation is a JavaScript method where, instead of adding separate event listeners to multiple child elements, a single event listener is added to their parent element. When an event is triggered on a child element, it reaches the parent element through the process of event bubbling, and the parent's listener handles that event.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
ANS:preventDefault()-->When a <form> is submitted, the page usually reloads. This default behavior can be disabled using event.preventDefault() , which prevents the form from reloading,
stopPropagation()-->This method stops the propagation of events, i.e. it stops the event bubbling process.