# What is this

This is a complete client-sever React/Node project built per a home
programming assignment. I do not want to disclose all the assignment's
terms, but the time limit was 4 hours. The requirement to upload a
solution onto Github was explicit.

The sole author of all the code is me, Alexander Azarov. The license is
GPL, mind it.

## Side notes

There is a huge progress in the software engineering industry. The
last time I had been assigned a home task to create this kind of an
application was 1998, we called it a "message board" and a Web's
common programming language was Perl at that time. I had got "till the
morning" time limit, I was young and thought it's plenty of time, so
I had decided to take a chance to try something new. And successfully
delivered the solution written in a new technology called PHP to the
hiring manager's surprise.

It's 2019, a home programming task is still the same, but we call it
a "chat application" now. And of course the technology stack is a bit
different. Now we are expected to write it as an SPA in Javascript,
React, and our backend is certainly supposed to be Node.js. Only the
time limit is mere 4 hours.

What a wonderful 20 years long journey. At least I know what to expect
in the next 20 years.

## Alternatives

A quick Github search reveals at least:

* https://github.com/Salasar/alphasense
* https://github.com/AleksiUu/Alphasense
* https://github.com/dkarbayev/alphasense-board
* https://github.com/sameoldmadness/alphasense-hw
* https://github.com/pouyapourbaba/alphasense_home_assignment

# Report

## Missing parts

* Disable the button when input is empty.

## Building

Get the dependencies:

```
yarn
```

## Production

```
yarn run build
yarn run server
```

## In browser

http://localhost:8080

## TODO

* Testing
* Security: CSRF
* Proper WAI ARIA
* I18n
* Schema.org markup
* Common types between client / server
* WebSockets
* Caching in a browser's local storage
* webpack-dev-middleware as Express router to ease development cycles
