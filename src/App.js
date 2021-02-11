import React from 'react';
import {Slider} from "./components/slider";

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
      "tag": "audio",
      "artist": "Ennio Morricone",
      "title": "L'estasi Dell'Oro",
      "src": "/assets/audios/10-L'estasi Dell'Oro.mp3",
      "type": "audio/mp3"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image1.png",
      "class" : "fit-size"
    },
    {
      "tag" : "video",
      "src" : "/assets/videos/video1.mp4",
      "type": "video/mp4"
    },
    {
      "tag": "audio",
      "artist": "Guns 'n Roses",
      "title": "Jumping Jack Flash",
      "src": "/assets/audios/12 - Jumpin' Jack Flash.flac",
      "type": "audio/mp3"
    },    
    {
      "tag" : "text",
      "src" : "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget dignissim nunc, dapibus congue mi. Donec auctor eros orci, non semper lectus vulputate eget. Nunc at libero nisl. Ut id commodo quam.</p><p>Ut volutpat eros fringilla mi consequat, rutrum vehicula mi tristique. Aenean egestas mollis pretium.</p><p>Vestibulum et egestas libero. Integer sed quam quam. Cras cursus lorem id efficitur viverra. Mauris pretium nisl sed lectus fermentum pharetra.</p><p>Mauris massa velit, tincidunt nec justo eget, pellentesque hendrerit nisl. Integer nibh nisi, vehicula et aliquam vel, gravida eget sem. Nullam imperdiet dolor lorem, et commodo nisi interdum sed. Suspendisse gravida non velit sed sagittis.</p><p>In commodo massa sed lacus convallis, id placerat arcu blandit.</p>",
      "class" : "fit-size"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image2.png",
      "class" : "fit-size"
    },
    {
      "tag": "audio",
      "artist": "Eddie Vedder",
      "title": "All along the watchtower",
      "src": "/assets/audios/Eddie Vedder - All Along the Watchtower (Water on the Road DVD).mp3",
      "type": "audio/mp3"
    },    
    {
      "tag" : "video",
      "src" : "/assets/videos/video2.mp4",
      "type": "video/mp4"
    },
    {
      "tag" : "text",
      "src" : "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget dignissim nunc, dapibus congue mi. Donec auctor eros orci, non semper lectus vulputate eget. Nunc at libero nisl. Ut id commodo quam.</p><p>Ut volutpat eros fringilla mi consequat, rutrum vehicula mi tristique. Aenean egestas mollis pretium.</p><p>Vestibulum et egestas libero. Integer sed quam quam. Cras cursus lorem id efficitur viverra. Mauris pretium nisl sed lectus fermentum pharetra.</p><p>Mauris massa velit, tincidunt nec justo eget, pellentesque hendrerit nisl. Integer nibh nisi, vehicula et aliquam vel, gravida eget sem. Nullam imperdiet dolor lorem, et commodo nisi interdum sed. Suspendisse gravida non velit sed sagittis.</p><p>In commodo massa sed lacus convallis, id placerat arcu blandit.</p>",
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image3.jpg",
      "class" : "fit-size"
    },
    {
      "tag" : "video",
      "src" : "/assets/videos/video1.mp4",
      "type": "video/mp4"
    },
    {
      "tag" : "text",
      "src" : "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget dignissim nunc, dapibus congue mi. Donec auctor eros orci, non semper lectus vulputate eget. Nunc at libero nisl. Ut id commodo quam.</p><p>Ut volutpat eros fringilla mi consequat, rutrum vehicula mi tristique. Aenean egestas mollis pretium.</p><p>Vestibulum et egestas libero. Integer sed quam quam. Cras cursus lorem id efficitur viverra. Mauris pretium nisl sed lectus fermentum pharetra.</p><p>Mauris massa velit, tincidunt nec justo eget, pellentesque hendrerit nisl. Integer nibh nisi, vehicula et aliquam vel, gravida eget sem. Nullam imperdiet dolor lorem, et commodo nisi interdum sed. Suspendisse gravida non velit sed sagittis.</p><p>In commodo massa sed lacus convallis, id placerat arcu blandit.</p>",
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image4.jpeg",
      "class" : "fit-size"
    },
    {
      "tag" : "video",
      "src" : "/assets/videos/video2.mp4",
      "type": "video/mp4"
    },
    {
      "tag" : "text",
      "src" : "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget dignissim nunc, dapibus congue mi. Donec auctor eros orci, non semper lectus vulputate eget. Nunc at libero nisl. Ut id commodo quam.</p><p>Ut volutpat eros fringilla mi consequat, rutrum vehicula mi tristique. Aenean egestas mollis pretium.</p><p>Vestibulum et egestas libero. Integer sed quam quam. Cras cursus lorem id efficitur viverra. Mauris pretium nisl sed lectus fermentum pharetra.</p><p>Mauris massa velit, tincidunt nec justo eget, pellentesque hendrerit nisl. Integer nibh nisi, vehicula et aliquam vel, gravida eget sem. Nullam imperdiet dolor lorem, et commodo nisi interdum sed. Suspendisse gravida non velit sed sagittis.</p><p>In commodo massa sed lacus convallis, id placerat arcu blandit.</p>",
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image5.png",
      "class" : "fit-size"
    },
    {
      "tag" : "video",
      "src" : "/assets/videos/video1.mp4",
      "type": "video/mp4"
    },
    {
      "tag" : "text",
      "src" : "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget dignissim nunc, dapibus congue mi. Donec auctor eros orci, non semper lectus vulputate eget. Nunc at libero nisl. Ut id commodo quam.</p><p>Ut volutpat eros fringilla mi consequat, rutrum vehicula mi tristique. Aenean egestas mollis pretium.</p><p>Vestibulum et egestas libero. Integer sed quam quam. Cras cursus lorem id efficitur viverra. Mauris pretium nisl sed lectus fermentum pharetra.</p><p>Mauris massa velit, tincidunt nec justo eget, pellentesque hendrerit nisl. Integer nibh nisi, vehicula et aliquam vel, gravida eget sem. Nullam imperdiet dolor lorem, et commodo nisi interdum sed. Suspendisse gravida non velit sed sagittis.</p><p>In commodo massa sed lacus convallis, id placerat arcu blandit.</p>",
      "class" : "fit-size"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image6.jpg",
      "class" : "fit-size"
    },
    {
      "tag" : "video",
      "src" : "/assets/videos/video2.mp4",
      "type": "video/mp4"
    },
    {
      "tag" : "text",
      "src" : "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget dignissim nunc, dapibus congue mi. Donec auctor eros orci, non semper lectus vulputate eget. Nunc at libero nisl. Ut id commodo quam.</p><p>Ut volutpat eros fringilla mi consequat, rutrum vehicula mi tristique. Aenean egestas mollis pretium.</p><p>Vestibulum et egestas libero. Integer sed quam quam. Cras cursus lorem id efficitur viverra. Mauris pretium nisl sed lectus fermentum pharetra.</p><p>Mauris massa velit, tincidunt nec justo eget, pellentesque hendrerit nisl. Integer nibh nisi, vehicula et aliquam vel, gravida eget sem. Nullam imperdiet dolor lorem, et commodo nisi interdum sed. Suspendisse gravida non velit sed sagittis.</p><p>In commodo massa sed lacus convallis, id placerat arcu blandit.</p>",
      "class" : "fit-size"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image7.png",
      "class" : "fit-size"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image8.jpg",
      "class" : "fit-size"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image9.jpg",
      "class" : "fit-size"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image10.jpg",
      "class" : "fit-size"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image11.jpg",
      "class" : "fit-size"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image12.jpg",
      "class" : "fit-size"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image13.jpg",
      "class" : "fit-size"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image14.jpg",
      "class" : "fit-size"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image15.jpg",
      "class" : "fit-size"
    },
    {
      "tag" : "img",
      "src" : "/assets/images/image16.jpeg",
      "class" : "fit-size"
    },
  ],
};


function App() {
  return (
    <div>
      <h1>Carousel Scandiweb</h1>
      <Slider list_elements = {list_elements} width = {800} height = {480} />
    </div>
  );
}

export default App;