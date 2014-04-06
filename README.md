Profiler
========

## Basic profile image service

This app allows you to upload an image and be able to access that image from other apps or websites.

Please Note: Each photo that is uploaded is resized to 100 x 100 px and cropped.

## Search

This app allows you to search for an image associated with that user's email address.

## Api

This app has a really basic api that will let you make a request to the server with a hashed email address and will reply with the path of the associated image. Please read about hashing your images [here](http://en.gravatar.com/site/implement/hash/). The api endpoint is:

````
http://songawee-profiler.herokuapp.com/api/profile-image/***Your hashed email***
````

Do not include any file extensions (.jpg, .png, etc.).
