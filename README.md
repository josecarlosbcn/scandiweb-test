# Carousel Scandiweb
This development is a test development for Scandiweb where we build a carousel which can get text, images, audio or video in each of his slides.

# How to install?
You have to clone or download the project from this url of github:

https://github.com/josecarlosbcn/scandiweb-test.git


After download the project you have to install all the libraries and dependencies with:

**npm install**

Then, you have to make a build of the development with this command:

**npm run build**

And finally, you have to start webpack like server with:

**npm run start**

# How to access to the carousel?
After making the install you have to open a web browser and go to http://localhost:3000/

# How it works?

I have developed a component called "Slider" which you can pass a json with all the elements to show in the carousel.

This json is an array of items. We can have items where can make a reference to a video, audio, image or html/text.

For items of audio the structure of it would be:

    {
      "tag": "audio",
      "artist": "Creator of audio",
      "title": "Title of audio",
      "src": "url to the audio",
      "type": "format of audio"
    }

For items of audio the structure of it would be:

    {
      "tag": "video",
      "src": "url to the video",
      "type": "format of video"
    }

For items of image the structure of it would be:

    {
      "tag" : "img",
      "src" : "/assets/images/image15.jpg",
      "class" : "fit-size"
    }

For items of html/text the structure of it would be:

    {
      "tag" : "text",
      "src" : "HTML or text to include",
      "class" : "fit-size"
    }

And, for items for Multi-picture the structure of it would be:

    {
      "tag": "multi-picture",
      "pictures": [
        "/assets/images/image15.jpg", "/assets/images/image16.jpeg", "/assets/images/image16.jpeg", "/assets/images/image15.jpg",
        "/assets/images/image15.jpg", "/assets/images/image16.jpeg", "/assets/images/image16.jpeg", "/assets/images/image15.jpg",
        "/assets/images/image15.jpg", "/assets/images/image16.jpeg", "/assets/images/image16.jpeg", "/assets/images/image15.jpg",
        "/assets/images/image15.jpg", "/assets/images/image16.jpeg", "/assets/images/image16.jpeg", "/assets/images/image15.jpg",
        "/assets/images/image15.jpg", "/assets/images/image16.jpeg", "/assets/images/image16.jpeg", "/assets/images/image15.jpg"
      ]
    },

An example of a json with one element of each one would be:

```javascript
const list_elements = {
  items: [
    {
      "tag": "multi-picture",
      "pictures": [
        "/assets/images/image15.jpg", "/assets/images/image16.jpeg", "/assets/images/image16.jpeg", "/assets/images/image15.jpg",
        "/assets/images/image15.jpg", "/assets/images/image16.jpeg", "/assets/images/image16.jpeg", "/assets/images/image15.jpg",
        "/assets/images/image15.jpg", "/assets/images/image16.jpeg", "/assets/images/image16.jpeg", "/assets/images/image15.jpg",
        "/assets/images/image15.jpg", "/assets/images/image16.jpeg", "/assets/images/image16.jpeg", "/assets/images/image15.jpg",
        "/assets/images/image15.jpg", "/assets/images/image16.jpeg", "/assets/images/image16.jpeg", "/assets/images/image15.jpg"
      ]
    },    
    {
      "tag": "audio",
      "artist": "Charles Dickens",
      "title": "Great Expectations - Chapter 1",
      "src": "http://www.archive.org/download/great_expectations_mfs_0812_librivox/greatexpectations_01_dickens_64kb.mp3",
      "type": "audio/mp3"
    },
    {
      "tag": "video",
      "artist": "Director: John S. Roberson",
      "title" : " - Dr. Jeckyll and Mr. Hyde - With: John Barrymore",
      "src" : "https://ia800309.us.archive.org/16/items/DrJekyllandMrHyde/DrJekyllandMrHyde_512kb.mp4",
      "type" : "video/mp4"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image1.png",
      "class" : "fit-size"
    },
    {
      "tag" : "text",
      "src" : "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget dignissim nunc, dapibus congue mi. Donec auctor eros orci, non semper lectus vulputate eget. Nunc at libero nisl. Ut id commodo quam.</p><p>Ut volutpat eros fringilla mi consequat, rutrum vehicula mi tristique. Aenean egestas mollis pretium.</p><p>Vestibulum et egestas libero. Integer sed quam quam. Cras cursus lorem id efficitur viverra. Mauris pretium nisl sed lectus fermentum pharetra.</p><p>Mauris massa velit, tincidunt nec justo eget, pellentesque hendrerit nisl. Integer nibh nisi, vehicula et aliquam vel, gravida eget sem. Nullam imperdiet dolor lorem, et commodo nisi interdum sed. Suspendisse gravida non velit sed sagittis.</p><p>In commodo massa sed lacus convallis, id placerat arcu blandit.</p>",
      "class" : "fit-size"
    },
  ],
};
```

# How to use Slider component
The use is very easy. Just only import "slider" to your file and call it. To call it, you have to inform three properties:

* list_elements: Here you have to pass the json as previously describe.
* width: Width of the Carousel in pixels
* height: Height of the Carousel in pixels

For example: 
```javascript
import {Slider} from "./components/slider";


<Slider list_elements = {list_elements} width = {800} height = {480} />
```