## Node.js

* [Introduction to Node.js](https://nodejs.dev/learn)
* [Node.js Docs](https://nodejs.org/api/all.html)

__Node.js__ is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

__Node.js__ runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows __Node.js__ to be very performant.

A __Node.js__ app runs in a single process, without creating a new thread for every request. __Node.js__ provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in __Node.js__ are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

When __Node.js__ performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, __Node.js__ will resume the operations when the response comes back.

This allows __Node.js__ to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.

## Table of Contents

1. [How The Backend Works](#1-How-The-Backend-Works)
2. [REST](#2-REST)
3. [Model View Controller](#3-Model-View-Controller)

## 1. How The Backend Works

The web is made up of two main parts, the __Front End__ and the __Back End__.

#### Front End
  * Concerned with presentation
  * Fairly easy to understand since it's what we interact with daily on the web

#### Back End
  * Consists of all the parts of the web that users do not interact with

Let's see how the backend really works. Starting at the beginning the server will receive a request from a client in the form of a URL: 
```
http://example.com/path?query=value
```

From this URL the server can get almost all of the information it needs in order to process a request. Let's break apart this URL a bit more:

#### The Protocol:
```
http://
```

The only thing the __protocol__ does is tell the server if the request is encrypted. `HTTP` is for standard, non-encrypted requests. `HTTPS` is for encrypted requests.

#### The Host (Domain name):
```
example.com
```

Similarly, this is not important for the server since all it does is tell the internet which server to send the response to. Each server has their own particular __host__ (youtube.com, netflix.com, reddit.com). 

So once the request actually gets to the server the __host__ does not matter since all requests for the server will have the same __host__. For example `youtube.com` is the host for the YouTube server already knows that all requests it gets will have the host `youtube.com`.

This all means we can safely ignore the first have of the URL.

#### The Path:
```
/path
```

The __path__ tells the server what the client wants and defines which section of code on the server should be run in-order to get the correct response. Essentially the server is broken down into a bunch of different sections (i.e. `/users`, `/cats`, `/dogs`) which all correspond to a specific path.

#### The Query String:
```
?query=value
```

Lastly, the __query string__ is used by the specific section of the server to alter the response. The __query string__ is broken down into specific parameters which can augment the way that the server responds to a request for a specific path:

| Key  | Value |
| ---- | ----- |
| query | value |
| search | dogs |
| fullscreen | false |

For example, YouTube uses the same path when you search for a video:
```
https://www.youtube.com/results?search_query=dogs
```

But the __query string__ contains a search query parameter which tells the server what we searched for so it can respond with what we want:
```
?search_query=dogs
```

The URL alone is not enough to tell the server exactly what it needs to do. It can tell the server which section to look for and how to alter that section based on the query parameters.

This section of the server is broken down even further into multiple different parts. To determine which part of that section the server should run it needs to use an _action_ which is passed along with the URL. This _action_ can be a:
  * [GET]
  * [POST]
  * [PUT]
  * [DELETE]

By combining the action and this path the server can find the correct part of the correct section that it needs to run. It can then use the query parameters to alter the response of the particular part and section. 

Typically, the response from the server will be an HTML page that is dynamically generated based on the request from the client. This is why when we go to the YouTube search page it allows shows us the same page since it has the same path and action but the videos that are returned from our search are different based on the query parameter for our specific search.

#### More about the server...

It's important to note that the server is only accessible to the outside world through the sections it defines (i.e. `/users`, `/search`, `/database`). This means we can store any secure information on the server and it will be safe as long as it is not exposed through a specific path.

This is why it's safe to have a database and a website running on the same server since the server only chooses to expose the website and not the database. Essentially, the server acts as a barrier between the outside world and all the parts of a website.

[Back to Top](#Table-of-Contents)

## 2. REST

What is REST?
  * (RE)presentation
  * (S)tate
  * (T)ransfer

It's basically a fancy way of saying that a server responds to __Create__, __Read__, __Update__, and __Delete__ requests in a _standard_ way. The idea behind REST is to treat all server URL's as access points for the various resources on the server.
```
http://example.com/users
```

In the example above, `/users` represents the resource that the server is exposing. As we mentioned earlier, REST needs a way to __Create__, __Read__, __Update__, and __Delete__ these resources. 

Let's explore this with  the following 5 URL's:
```
http://example.com/users
http://example.com/users
http://example.com/users/1
http://example.com/users/1
http://example.com/users/1
```

The first 2 URL's do not have an ID so they act on the entire _users_ resource:
```
http://example.com/users
http://example.com/users
```

Where the last 3 URL's do have an ID in their URL and thus act only on a single _user_ resource:
```
http://example.com/users/1
http://example.com/users/1
http://example.com/users/1
```

You may have noticed that there are only 2 distinct URL's:
```
http://example.com/users
http://example.com/users/1
```

This is because REST uses the 4 basic HTTP actions (`GET`, `POST`, `PUT`, and `DELETE`) to determine what to do with each URL:
```
[GET]    http://example.com/users
[POST]   http://example.com/users
[GET]    http://example.com/users/1
[PUT]    http://example.com/users/1
[DELETE] http://example.com/users/1
```

#### Let's break each of these down...

#### The first URL:
```
[GET] http://example.com/users
```
This URL is used to __get__ a list of the resource (users). In REST when a __GET__ URL does not have an ID, it acts upon the entire resource and will always return a list of every item in that resource.

The __GET__ action in REST corresponds with __reading__ data.

#### The second URL:
```
[POST] http://example.com/users
```
This URL is used to __create__ a new resource (user). In REST the __POST__ action corresponds with __creation__ and should always be used on the entire resource by not using an ID in the URL.

#### The third URL:
```
[GET] http://example.com/users/1
```
This URL is used to __get__ a _single_ resource (user) based on the _given ID_. The ID portion of the URL is used by REST to determine which resource from the collection of resources it should act upon.

In the case of our URL it is used to return the user with that specific ID.

#### The fourth URL:
```
[PUT] http://example.com/users/1
```
This URL can be the most confusing of them all. This URL is used to __update__ a resource (user) with the _given ID_. The __PUT__ action in REST corresponds with __update__ and works very similarity to POST but instead of creating a new resource (user) it updates an existing resource (user).

#### The fifth URL:
```
[DELETE] http://example.com/users/1
```
This URL is the most straight forward of them all. It is used to __delete__ a resource (user) with a _given ID_.

In order for a website to use REST the URL's do not have to be formatted exactly the same as above. For example, using these URL's would still be considered "RESTful" but most applications use the previously mentioned URL's.

The only thing that matters with REST is that the URL's used represent a resource, in our case a _user_, and that they support _Creating_, _Reading_, _Updating_, and _Deleting_ from that resource using the HTTP actions __GET__, __POST__, __UPDATE__, and __DELETE__.

[Back to Top](#Table-of-Contents)

## 3. Model View Controller

In order to make highly complex web applications easier to work with, developers use different patterns to lay out there projects to make the code less complex and easier to maintain.

By far the most popular of these patterns is __MVC__, also known as:
  * Model
  * View
  * Controller

The goal of the __MVC__ pattern is to split a large application into specific sections that all have there own purpose. Let's look at an example where a user is requesting a specific page from the server:

#### Controller:
1. __Request__: Based on what URL the user is requesting the server will send all the request information to a specific _Controller_.
  * __Handles request flow__: The _Controller_ is responsible for handling the entire request from the client and will tell the rest of the server what to do with the request. It acts as the middleman between the other two sections, _Model_ and _View_. It should not contain very much code.
  * __Never handles data logic__: The _Controller_ should never directly interact with the data logic, it should only ever use the _Model_ to perform these interactions. The Controller never has to worry about how to handle the data that it sends and receives and instead only needs to tell the _Model_ what to do and then respond based on what the _Model_ returns.

#### Model:
2. __Get Data__: The first thing that happens when a _Controller_ receives a request is it asks the _Model_ for information based on the request. 
  * __Handles data logic__: The _Model_ is responsible for handling all of the data logic of a request. 
  * __Interacts with database__: The _Model_ interacts with the database and handles all __validation__, __saving__, __updating__, __deleting__, etc. of the data. The _Model_ never has to worry about handling user requests and what to do on failure or success, this is all handled by the _Controller_ and the Model only cares about interacting with the data.

#### View:
3. __Get Presentation__: After the _Model_ sends its response back to the _Controller_ the _Controller_ then needs to interact with the _View_ to render the data to the user. 
  * __Handles data presentation__: The _View_ is only concerned with how to present the information that the Controller sends it. 
  * __Dynamically rendered__: The _View_ will be a template file that dynamically renders HTML based on the data the Controller sends. The View does not worry about how to handle the final presentation of the data but instead only cares about how to present it.

#### Controller:
4. __Response__: The _View_ will send it's final presentation back to the _Controller_ and the _Controller_ will handle sending that presentation back to the user.

The important thing to note about this design is that the _Model_ and _View_ __NEVER__ interact with each other. Any interactions between the _Model_ and the _View_ are done through the _Controller_. Having the _Controller_ between the _Model_ and the _View_ means that the presentation of data and the logic of data are completely separated, which makes creating complex applications much easier.

#### Example:
Let's look at an example of how this design handles a request. Let's imagine a user sends a request to a server to get a list of _Dogs_.

1. __Get Dogs__: Server sends that request to the _Controller_ that handles `Dogs` (User -> Server -> Controller)
2. __Get Dog Data__: _Controller_ then asks the _Model_ that handles `Dogs` to return a list of all `Dogs` (Controller -> Model)
  * _Model_ queries database for list of all `Dogs` and then return that list back to _Controller_ (Model -> Controller)
  * If the _Model_ returns an error instead of a list of `Dogs` the _Controller_ would handle that error by asking the view that handles errors to render a presentation for that error (3. Get Error Presentation) (Model -> Controller -> View)
  * This error presentation would then be returned to the user instead of the `Dog` list presentation (4. Error!) (View -> Controller -> User)
3. __Get Dog Presentation__: If the response back from the _Model_ was successful then the _Controller_ would ask the _View_ associated with `Dogs` to return a presentation of the list of `Dogs` (Model -> Controller -> View)
  * This _View_ would take the list of `Dogs` from the _Controller_ and render the list into HTML that could be used by the browser (View -> Controller -> User)
4. __Dogs!__: The _Controller_ would then take that presentation and return it back to the user, thus ending the request (View -> Controller -> User)

As we can see from this example, the _Model_ handles all the data, the _View_ handles all the presentation, and the _Controller_ just tells the _Model_ and _View_ what to do.

[Back to Top](#Table-of-Contents) 