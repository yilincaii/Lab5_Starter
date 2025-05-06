# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
## Name: Yilin Cai 
---
## GitHub Pages Links

- [Expose.html](https://yilincaii.github.io/Lab5_Starter/expose.html)
- [Explore.html](https://yilincaii.github.io/Lab5_Starter/explore.html)
  
---

## part3 answer

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not?
   

- No. Unit tests, from what I understand, are supposed to be really focused on just one small part of the code. So, trying to test all that with just a unit test seems like it would miss how those different parts talk to each other. I think integration tests or maybe even those end-to-end tests would be better to see if the whole messaging thing actually works correctly. Unit tests just don't seem to capture that full flow.
  


2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?

- Yeah. The **max message length** seems like a pretty self-contained rule. Like, there's probably a piece of code that just checks if the message the user typed is over a certain number of characters, maybe something like if (message.length > 80). That kind of isolated logic is exactly what unit tests are good at. We could easily write tests that try sending messages with different lengths – like exactly 80 characters, one character over, way over, and even an empty message – and then check if the app behaves the way it's supposed to without needing to worry about the database or sending it to another user. 

