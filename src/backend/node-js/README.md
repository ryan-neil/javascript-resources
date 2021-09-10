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
3. [MVC](#3-MVC)

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

In the example above, `/users` represents the resource that the server is exposing. As we mentioned earlier, REST needs a way to __Create__, __Read__, __Update__, and __Delete__ these resources. It does so with the following 5 URL's:
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

The only thing that matters with REST is that the URL's used represent a resource, in our case a _user_, and that they support _Creating_, _Reading_, _Updating_, and _Deleting_ from that resource using the HTTP actions _GET_, _POST_, _UPDATE_, and _DELETE_.

[Back to Top](#Table-of-Contents)

## 3. MVC



[Back to Top](#Table-of-Contents) 