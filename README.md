# Lazy Load XT jQuery plugin

---

## Table of Contents

- [About](#about)
- [Download / Install](#download--install)
- [Usage](#usage)
- [jQLight](#jqlight)
- [Demo](#demo)
- [Advanced initialization](#advanced-initialization)
- [Browsers with disabled JavaScript](#browsers-with-disabled-javascript)
- [Options](#options)
- [Events](#events)
- [More than images](#more-than-images)
    - [`<iframe>`-embedded Videos (YouTube, Vimeo, etc.)](#iframe-embedded-videos-youtube-vimeo-etc)
    - [Support `<video>` tag](#support-video-tag)
- [Extendability](#extendability)
    - [Spinner](#spinner)
    - [Fade-in animation](#fade-in-animation)
    - [Animate.css](#animatecss)
    - [Horizontal scroll](#horizontal-scroll)
    - [Infinite scroll](#infinite-scroll)
    - [Hi-DPI (Retina) images](#hi-dpi-retina-images)
    - [AJAX](#ajax)
    - [Support of IE6/7](#support-of-ie6-7)
- [Addons](#addons)
    - [Bootstrap and jQueryMobile](#bootstrap-and-jquerymobile)
    - [Video](#video)
    - [Responsive images](#responsive-images)
    - [Widgets](#widgets)
    - [Print](#print)
    - [Background image](#background-image)
    - [`<script>`-based tagging](#script-based-tagging)
    - [Deferred autoload](#deferred-autoload)
- [Example of page preparation in PHP](#example-of-page-preparation-in-php)
- [CDN](#cdn)
- [Version History](#version-history)
- [License](#license)


## About

Mobile-oriented, fast and extensible jQuery plugin for lazy loading of images/videos.

Currently tested in IE 6-11, Chrome 1-47, Firefox 1.5-43.0, Safari 3-9, Opera 10.6-34.0, iOS 5-9, Android 2.3-5.1,
Amazon Kindle Fire 2 and HD 8.9, Opera Mini 7.

**Requires jQuery 1.7+, Zepto 1.0+, DOMtastic 0.7.3+ built with `--jquery-compat`, or [jQLight](#jqlight).**


## Download / Install

<table>
  <tbody>
    <tr>
      <td>Dev version:</td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.js">jquery.lazyloadxt.js</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.extra.js">jquery.lazyloadxt.extra.js</a></td>
    </tr>
    <tr>
      <td>Minified version:</td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.min.js">jquery.lazyloadxt.min.js</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.extra.min.js">jquery.lazyloadxt.extra.min.js</a></td>
    </tr>
  </tbody>
</table>

Effects:

<table>
  <tbody>
    <tr>
      <td>Dev version:</td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.fadein.css">jquery.lazyloadxt.fadein.css</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.spinner.css">jquery.lazyloadxt.spinner.css</a></td>
    </tr>
    <tr>
      <td>Minified version:</td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.fadein.min.css">jquery.lazyloadxt.fadein.min.css</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.spinner.min.css">jquery.lazyloadxt.spinner.min.css</a></td>
    </tr>
  </tbody>
</table>

Addons:

<table>
  <tbody>
    <tr>
      <td><a href="#script-based-tagging">script-based tagging of lazy loaded elements</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.script.js">jquery.lazyloadxt.script.js</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.script.min.js">jquery.lazyloadxt.script.min.js</a></td>
    </tr>
    <tr>
      <td><a href="#responsive-images">Responsive images and srcset</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.srcset.js">jquery.lazyloadxt.srcset.js</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.srcset.min.js">jquery.lazyloadxt.srcset.min.js</a></td>
    </tr>
    <tr>
      <td><a href="#print">Print</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.print.js">jquery.lazyloadxt.print.js</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.print.min.js">jquery.lazyloadxt.print.min.js</a></td>
    </tr>
    <tr>
      <td><a href="#background-image">Background image</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.bg.js">jquery.lazyloadxt.bg.js</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.bg.min.js">jquery.lazyloadxt.bg.min.js</a></td>
    </tr>
    <tr>
      <td><a href="#deferred-autoload">Deferred load</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.autoload.js">jquery.lazyloadxt.autoload.js</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.autoload.min.js">jquery.lazyloadxt.autoload.min.js</a></td>
     </tr>
    <tr>
      <td><a href="#bootstrap-and-jquerymobile">Bootstrap</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.bootstrap.js">jquery.lazyloadxt.bootstrap.js</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.bootstrap.min.js">jquery.lazyloadxt.bootstrap.min.js</a></td>
     </tr>
    <tr>
      <td><a href="#bootstrap-and-jquerymobile">jQueryMobile</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.jquerymobile.js">jquery.lazyloadxt.jquerymobile.js</a></td>
      <td><a href="https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.jquerymobile.min.js">jquery.lazyloadxt.jquerymobile.min.js</a></td>
     </tr>
  </tbody>
</table>

Install and manage Lazy Load XT using [Bower](http://bower.io/)

    $ bower install lazyloadxt

Install and manage using [NPM](https://npmjs.org/)

    $ npm install lazyloadxt

Get full snapshot of Lazy Load XT: [lazy-load-xt-master.zip](https://github.com/ressio/lazy-load-zt/archive/master.zip)

If you have any feature to request or bug to report please use
[GitHub issues]( https://github.com/ressio/lazy-load-xt/issues).


## Usage

First of all it's necessary to load jQuery and Lazy Load XT script. There are two versions of Lazy Load XT:

1. `jquery.lazyloadxt.js`, standard version for lazy loading of images only.

2. `jquery.lazyloadxt.extra.js`, version with included video addon for lazy loading of both images and videos.

To make media elements (`img`, `video`, `source`, `iframe`) to be lazy loaded, rename `src` attribute to `data-src`.
It is highly recommended to set `width` and `height` attributes. Optionally you can add a placeholder `src` to bypass
HTML validators:

```html
<script src="jquery.js"></script>
<script src="jquery.lazyloadxt.js"></script>

<img data-src="lazy.jpg" width="100" height="100">
```

PS. In `src` directory you can found `jquery.lazyloadxt.simple.js`, it is initial LazyLoadXT version of minimal size
with excluded support of on* handlers, lazy* events, `blankImage` option and addons.


## jQLight

LazyLoadXT may be used without jQuery framework by loading small
[`jqlight.lazyloadxt.min.js`](https://raw.github.com/ressio/lazy-load-xt/master/dist/jqlight.lazyloadxt.min.js) script
(1.3KiB gzipped):

```html
<script src="jqlight.lazyloadxt.js"></script>
<script src="jquery.lazyloadxt.js"></script>

<img data-src="lazy.jpg" width="100" height="100">
```

Note: currently `jquery.lazyloadxt.bg.js` addon is not supported by jQLight.

## Demo

Demo: [ressio.github.io/lazy-load-xt](http://ressio.github.io/lazy-load-xt)


## Advanced initialization

There are two ways to initialize elements if auto initialization doesn't suit you:

1. `$(window).lazyLoadXT();` to initialize all elements matching `$.lazyLoadXT.selector`
2. `$(elements).lazyLoadXT();` to initialize all selected elements.

For example, `$(container).find(selector).lazyLoadXT();` initializes elements matching `selector` inside `container`.

You can pass optional argument to override default `$.lazyLoadXT` options. The following options only may be overridden:
`srcAttr`, `edgeX`, `edgeY`, `visibleOnly`, `blankImage`, `checkDuplicates`, `scrollContainer`.

Note: don’t forget to disable auto initialization with `$.lazyLoadXT.autoInit=false;` if you like to use manual
initialization of all elements.

To manually show elements (may be necessary for integrating Lazy Load XT with some 3rdparty plugins), call
`$(elements).lazyLoadXT({show: true});`.


## Browsers with disabled JavaScript

As JavaScript may be disabled in the browser (e.g. it may be a feature phone with limited javascript support or browser
with Noscript addon), it is usually recommended to add a fallback image in `<noscript>` tag, mark initial image with
`class="lazy"` attribute and hide it using CSS (otherwise browsers with disabled javascript will display both images).
Lazy Load XT plugin removes this class (`oninit.removeClass` option) at image initialization. So, final code should be
like:

```css
img.lazy {
  display: none;
}
```

```html
<img class="lazy" data-src="lazy.jpg" width="100" height="100">
<noscript><img src="lazy.jpg" width="100" height="100"></noscript>
```

We recommend to keep the order of attributes in both `<img>` tags, because of such a code will be effectively gzipped.

Alternative approach is based on tagging images/videos with `<script>` tag. It is realized using
`jquery.lazyloadxt.script.js` addon and is described in [corresponding addon’s section](#script-based-tagging)
(note that this approach is experimental and currently is not compatible with AJAX).


## Options

The plugin is very extensible and supports a lot of options that are stored in $.lazyLoadXT object:

```javascript
$.extend($.lazyLoadXT, {
  edgeY:  200,
  srcAttr: 'data-src'
});
```

You can either create this object before loading of `jquery.lazyloadxt.js`, or extend it after loading (but before
jQuery's `ready` event).

* **autoInit**: auto initialization of the plugin, that is processing of all elements matching `selector` selector in
  jQuery's `ready` event, if it is disabled you have to do such initialization manually as explained in [Advanced
  initialization](#advanced-initialization) section (default `true`)
* **selector**: selector for elements that should be lazy-loaded (default `'img[data-src]'`)
* **srcAttr**: attribute containing actual `src` path, see example below in [Hi-DPI (Retina) images]
  (#hi-dpi-retina-images) section (default `'data-src'`)
* **blankImage**: blank image for used until actual image is not loaded (default is transparent 1x1 gif image in
  data-uri format `'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'`)
* **edgeY**: expand visible page area (viewport) in vertical direction by specified amount of pixels,
  so that elements start to load even if they are not visible, but will be visible after scroll by `edgeY` pixels
  (default `0`)
* **edgeX**: expand visible page area in horizontal direction by specified amount of pixels (default `0`)
* **throttle**: time interval (in ms) to check for visible elements, the plugin uses it to speed up page work in the
  case of flow of page change events (default `99`)
* **visibleOnly**: being disabled this option forces the plugin to check element position only, but not to check that
  it is actually visible (default `true`)
* **checkDuplicates**: prevent re-add lazy-loaded elements (default `true`)
* **scrollContainer**: set scroll container (`overflow: scroll`) for adding elements (default `null`),
* **forceLoad**: load all elements without checking for visibility (default `false`)
* **loadEvent**: space-separated list of events when the plugin starts to found new elements matching `selector`
  (default `'pageshow'` to check AJAX-loaded content in jQueryMobile and to support backward navigation in iPhone)
* **updateEvent**: space-separated list of events when the plugin starts to check what elements are visible in
  current viewport (default `'load orientationchange resize scroll'`)
* **forceEvent**: space-separated list of events when the plugin starts to load all images independently of are
  they visible or not (default `''`)
* **oninit**: handler called when the plugin push elements into internal list of "lazy" elements,
  it may be either a function (DOM element is accessible using `this` object) or an object with `addClass` and/or
  `removeClass` properties (`addClass` is a space-separated list of class names that should be added to the elements,
  and `removeClass` contains class names that should be removed, `removeClass` has higher priority in the case of
  identical class names) (default `{removeClass: 'lazy'}`)
* **onshow**: handler called when an element appears in viewport area, it may be either a function or an object by
  analogy to `oninit` handler, see example below in [Spinner](#spinner) section (default `{addClass: 'lazy-hidden'}`)
* **onload**: handler called when element is successfully loaded, it may be either a function or an object by analogy
  to `oninit` handler (default `{removeClass: 'lazy-hidden', addClass: 'lazy-loaded'}`)
* **onerror**: handler called when browser cannot load the element, it may be either a function or an object by analogy
  to `oninit` handler (default `{removeClass: 'lazy-hidden'}`)
* **oncomplete**: handler called when all lazy-loaded elements are loaded (default `null`)


## Events

Lazy Load XT plugin triggers following events for loading elements (after call to corresponding handler in
`$.lazyLoadXT` options):

* `lazystart`, (triggered on `window`) before plugin's initialization code (binding to events, etc.)
* `lazyinit`, the plugin push element into internal list of "lazy" elements
* `lazyshow`, element appears in viewport area
* `lazyload`, element is successfully loaded
* `lazyerror`, browser cannot load the element
* `lazycomplete` (triggered on `<html>` element), internal list of lazy-loaded elements is empty, that is all elements
  are loaded or loading.

Unlike global handlers `$.lazyLoadXT`, using these events it's possible to assign individual handlers for media
elements.


## More than images

Images are not the only page elements that may be lazy loaded. Though default value for `$.lazyLoadXT.selector` is
`'img'`, you can append it by `iframe` to use lazy-loading for iframes, `video` for videos,
etc. Full list of supported tags include all tags with `src` attribute: `<audio>`, `<embed>`, `<frame>`,
`<iframe>`, `<img>`, `<video>`, `<input type="image">`.

We distribute special "extra" version of the plugin with additional code for lazyloading of `<video>` elements and
`<iframe>`ed YouTube videos. To use this version, it’s necessary to just load `jquery.lazyloadxt.extra.js` instead of
`jquery.lazyloadxt.js`.


### `<iframe>`-embedded Videos (YouTube, Vimeo, etc.)

Most of video hostings allow to embed videos as `<iframe>` elements (e.g. Youtube, Vimeo, DailyMotion, and even KickStarter)
and they may be lazy loaded in the way similar to images (by replacing `src` attribute by `data-src`):

```html
<script src="jquery.lazyloadxt.extra.js"></script>
```

```html
<iframe width="420" height="315" data-src="//www.youtube.com/embed/uOzO9O15gwI?rel=0" frameborder="0" allowfullscreen></iframe>
```

Demo: http://ressio.github.io/lazy-load-xt/demo/youtube-iframe.htm


### Support `<video>` tag

It is easy too, just replace `src` attribute by `data-src` and `poster` by `data-poster` (if exists).

```html
<script src="jquery.lazyloadxt.extra.js"></script>
```

```html
<video data-poster="/path/to/poster.jpg" width="320" height="240" controls>
  <source data-src="/path/to/video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
  <source data-src="/path/to/video.ogv" type='video/ogg; codecs="theora, vorbis"'>
</video>

<video data-src="/path/to/video2.mp4" width="320" height="240" controls></video>
```

Demo: http://ressio.github.io/lazy-load-xt/demo/video-html5.htm


## Extendability

Lazy Load XT plugin may be easily extended using `oninit`, `onshow`, `onload` and `onerror` handlers. Some examples are
listed below.


### Spinner

Some effects may be easily added by using `lazy-hidden` and `lazy-loaded` css classes. For example, to display animated
spinner while image is loading, just load `jquery.lazyloadxt.spinner.css` css file:

```html
<link rel="stylesheet" href="jquery.lazyloadxt.spinner.css">
```

Demo: http://ressio.github.io/lazy-load-xt/demo/spinner.htm


### Fade-in animation

To add fade-in animation just load `jquery.lazyloadxt.fadein.css` CSS file:

```html
<link rel="stylesheet" href="jquery.lazyloadxt.fadein.css">
```

Demo: http://ressio.github.io/lazy-load-xt/demo/fadein.htm


### Animate.css

It's possible to use a lot of animation effects (like bounce, flip, rotate, etc.) from
[animate.css project](https://github.com/daneden/animate.css) by altering `$.lazyLoadXT.onload.addClass` option:

```html
<link rel="stylesheet" href="animate.min.css">
```

```javascript
/* JS */
$.lazyLoadXT.onload.addClass = 'animated bounceOutLeft';
```

Demo: http://ressio.github.io/lazy-load-xt/demo/animatecss.htm


### Horizontal scroll

Lazy Load XT checks that an image is in viewport in both vertical and horizontal dimensions, so that it is easy to
make lazy loading of images in horizontal scroller. Let's assume that your html markup of scroller is something like
```html
<div class="wrapper">
    <img data-src="/path/to/image/1" width="600" height="300">
    <img data-src="/path/to/image/2" width="600" height="300">
    <img data-src="/path/to/image/3" width="600" height="300">
    <img data-src="/path/to/image/4" width="600" height="300">
</div>
```
with following CSS rules to make `.wrapper` scrollable in horizontal direction and images to be alined:
```css
/* CSS */
.wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
}
.wrapper > img {
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
```

Then all that you need is to proxy `scroll` event from `.wrapper` element to `window` because of `scroll` event [is not
bubbled automatically](http://www.w3.org/TR/2009/WD-DOM-Level-3-Events-20090908/#event-type-scroll). It may be easily
done using `scrollContainer` option:
```javascript
/* JS */
$.lazyLoadXT.scrollContainer = '.wrapper';
```

Demo: http://ressio.github.io/lazy-load-xt/demo/horizontal.htm


### Infinite scroll

Using Lazy Load XT it is easily to get "infinite scroll" effect. Just put a marker element at the end of list
```html
<div id="marker"></div>
```
and load next part of elements in `lazyshow` handler, e.g.:
```javascript
/* JS */
$(document).ready(function () {
    $('#marker').on('lazyshow', function () {
        $.ajax({...}).done(function (responseText) {
            // add new elements:
            // ...
            // process new elements:
            $(window).lazyLoadXT();
            $('#marker').lazyLoadXT({visibleOnly: false, checkDuplicates: false});
        });
    }).lazyLoadXT({visibleOnly: false});
});
```

Demo: http://ressio.github.io/lazy-load-xt/demo/infinite.htm


### Hi-DPI (Retina) images

The code below allows you to use `data-src-3x` attribute for screens with 3x density (e.g. Samsung Galaxy S4),
`data-src-2x` for 2x density (e.g. iPhones 4+), and `data-src-1.5x` for 1.5x density (e.g. HTC Incredible S).

```javascript
/* JS */
(function($, dpr) {
  if (dpr>1)
    $.lazyLoadXT.srcAttr = 'data-src-' + (dpr > 2 ? '3x' : (dpr > 1.5 ? '2x' : '1.5x'));
})(jQuery, window.devicePixelRatio || 1);
```

Demo: http://ressio.github.io/lazy-load-xt/demo/retina.htm

But in real world it's better to set `srcAttr` function and choose most suitable image URL among existing ones. Or set
`src` attribute in `lazyshow` event, like it is done in [Responsive images and srcset](#responsive-images)
addon.


### AJAX

If you use jQuery-based AJAX navigation and don't like to change existing AJAX callbacks,
you can apply lazy loading to new loaded content using `ajaxComplete` event. Note that `$.lazyLoadXT.loadEvent =
'pageshow ajaxComplete';` may not work correctly because of content is not added to the page at the time of
`ajaxComplete` event, that's why it's better to postpone initialization by `setTimeout`:

```javascript
/* JS */
$(window).on('ajaxComplete', function() {
  setTimeout(function() {
    $(window).lazyLoadXT();
  }, 50);
});
```

Demo: http://ressio.github.io/lazy-load-xt/demo/ajax.htm


### Support of IE6/7

Lazy Load XT uses Data-URI-encoded transparent image for images outside of viewport (though this image may be visible
during fast page scroll or in print preview).  As IE 6 and 7 don't support Data-URI, you can change image for that
browsers:

```javascript
/* JS */
if (parseInt(navigator.userAgent.toLowerCase().split('msie')[1] || 8, 10) < 8)
  $.lazyLoadXT.blankImage = '//upload.wikimedia.org/wikipedia/en/d/d0/Clear.gif';
```


## Addons

Lazy Load XT may be easily extended to support other lazyloading-related things. Some examples are part of Lazy Load XT
project and listed below.


### Bootstrap and jQueryMobile

To support [Bootstrap](http://getbootstrap.com/) and [jQueryMobile](http://jquerymobile.com/) frameworks, use
`<script src="jquery.lazyloadxt.bootstrap.js"></script>` and `<script src="jquery.lazyloadxt.jquerymobile.js"></script>`
addons, correspondingly. These addons recheck visible images each time related javascript plugin (e.g. Bootstrap's Carousel
or jQueryMobile's Panel) changes page content.


### Video

Support of video elements in extra version of Lazy Load XT is just an addon that is combined with base version of
the script. That is loading of

```html
<script src="jquery.lazyloadxt.extra.js"></script>
```

is identical to loading of

```html
<script src="jquery.lazyloadxt.js"></script>
<script src="jquery.lazyloadxt.video.js"></script>
```

Options

**$.lazyLoadXT.videoPoster** name of attribute with path to background image (by default `'data-poster'`).

Note: this addon append `iframe[data-src]` to `$.lazyLoadXT.selector`, so if you change `$.lazyLoadXT.srcAttr` option,
`selector` option should be altered properly.


### Responsive images

There are two addons for responsive images:

1. `srcset` for lazy loading of images with polyfill for `srcset` attribute.
2. `picture` for lazy loading of images with polyfill for `<picture>` tag.

`srcset` addon allows to combine lazy loading and responsive images description in `data-srcset` attribute of `<img>`
tag. Format of responsive images description is based on
[srcset attribute](http://www.w3.org/html/wg/drafts/srcset/w3c-srcset/) draft of HTML extension for adaptive images:

```html
<script src="jquery.lazyloadxt.js"></script>
<script src="jquery.lazyloadxt.srcset.js"></script>
```

```html
<img data-srcset="image-hd.jpg 2x, image-phone.jpg 360w, image-phone-hd.jpg 360w 2x">
```

It's possible to simplify images description using `data-srcset-base` and `data-srcset-ext` attributes, so that actual
images URI is concatenation of `data-srcset-base`, chosen part of `data-src` description, and `data-srcset-ext`:

```html
<img data-srcset-base="image" data-srcset-ext=".jpg" data-srcset="-hd 2x, -phone 360w, -phone-hd 360w 2x">
```

If you like to have fallback image name to be `data-srcset-base`+`data-srcset-ext` (`image.jpg` in above example),
just put comma at the end of `data-srcset` description: `data-srcset="-hd 2x, -phone 360w, -phone-hd 360w 2x,"`. Note
that this addon doesn't require browser to support `srcset` attribute.

Options

**$.lazyLoadXT.srcsetAttr** name of attribute with `srcset`-based description (by default `'data-srcset'`).

**$.lazyLoadXT.srcsetExtended** enable support of `srcsetBaseAttr` and `srcsetExtAttr` options (by default `true`).

**$.lazyLoadXT.srcsetBaseAttr** name of attribute with prefix for image URI (by default `'data-srcset-base'`).

**$.lazyLoadXT.srcsetExtAttr** name of attribute with suffix for image URI (by default `'data-srcset-ext'`).

Demo: http://ressio.github.io/lazy-load-xt/demo/srcset.htm


`picture` addon is based on [`<picture>` tag](http://www.w3.org/TR/html-picture-element/) draft of HTML extension for
adaptive images. Just rename `<source>` tags to `<br>`, `src` attribute to `data-src`, and add few CSS rules to make
`<picture>` block element in browsers that don't support it:

```css
/* CSS */
picture {
  display: block;
}
picture > br {
  display: none;
}
img {
  max-width: 100%;
  height: auto !important;
}
```

```html
<script src="../dist/jquery.lazyloadxt.js"></script>
<script src="../dist/jquery.lazyloadxt.picture.js"></script>
```

```html
<picture width="640" height="480">
  <br data-src="small320.jpg">
  <br media="(min-width: 321px)" data-src="medium480.jpg">
  <br media="(min-width: 481px)" data-src="large640.jpg">
  <noscript><img data-src="large640.jpg"></noscript>
  <p>Image caption</p>
</picture>
```

Note: currently `data-srcset` attribute is not supported by this addon, but most likely further both `srcset` and
`picture` addons will be merged into single one, so that `srcset` format for responsive images will be supported by
`<img>` and `<picture>` tags.

Demo: http://ressio.github.io/lazy-load-xt/demo/picture.htm


### Widgets

Images and videos are not the only heavy parts of the page. Nowadays it's hard to find website that doesn't use
widgets for different social medias (like Twitter, Facebook, Google+, etc.). If integration with such resource is done
using `<iframe>` tag, you can use "extra" version of Lazy Load XT to make it lazy loaded:

```html
<script src="jquery.lazyloadxt.extra.js"></script>
```

```html
<!-- Facebook Recommend Widget -->
<iframe data-src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fressio.github.io%2Flazy-load-xt&amp;width&amp;layout=button_count&amp;action=recommend&amp;show_faces=true&amp;share=true&amp;height=21"
        scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:21px;" allowTransparency="true"></iframe>
```

Demo: http://ressio.github.io/lazy-load-xt/demo/widget-iframe.htm

But in most cases JavaScript is used to embed widgets. Specially for this case we have universal
`jquery.lazyloadxt.widget.js` addon that allows to add some html code to the page when other element become visible.
The code should wrapped in html comment inside a `div` with assigned `id` attribute, and the element should have
`data-lazy-widget` attribute with value of that `id`:


```html
<script src="jquery.lazyloadxt.js"></script>
<script src="jquery.lazyloadxt.widget.js"></script>
```

```html
<!-- Google +1 Button -->
<div data-lazy-widget="gplus" class="g-plusone" data-annotation="inline" data-width="300"></div>
<div id="gplus"><!--
  <script type="text/javascript">
    (function() {
      var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
      po.src = 'https://apis.google.com/js/platform.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    })();
  </script>
--></div>
```

If `data-lazy-widget` attribute has empty value, the element itself is used as wrapper:

```html
<div data-lazy-widget><!--
  <img src="image.jpg">
--></div>
```

Options:

**$.lazyLoadXT.widgetAttr** name of attribute with `id` of commented html code (by default `'data-lazy-widget'`).
Note: `widgetAttr` option should be set before loading of `jquery.lazyloadxt.widget.js` as it is used to alter
`$.lazyLoadXT.selector` option.

Demo: http://ressio.github.io/lazy-load-xt/demo/widget.htm


### Print

It is another issue of lazy loading: if user prints the page, only loaded images will be printed. This addon allows
to start loading of all images just after browser switch to print mode to render page. Note that this feature is
browser-dependent and currently it works correctly in IE only. In Chrome browser caches page state until user
change print options (printer, page orientation, margins, etc.). In Firefox and Safari addon works if user chooses
Print Preview before actual print (as they don't wait until images will be loaded). In Opera it works starting from
15.0 release (Presto didn't support both `beforeprint` event and matchMedia listeners).

```html
<script src="jquery.lazyloadxt.js"></script>
<script src="jquery.lazyloadxt.print.js"></script>
```

Demo: http://ressio.github.io/lazy-load-xt/demo/print.htm


### Background image

This addon allows you to use lazy-loading technique for background images of any tag.

```html
<script src="jquery.lazyloadxt.js"></script>
<script src="jquery.lazyloadxt.bg.js"></script>
```

```html
<div data-bg="/path/to/image.png">...</div>
```

Above code set `background-image` CSS property to `/path/to/image.png` as soon `div` element becomes visible in
viewport area.

Options:

**$.lazyLoadXT.bgAttr** name of attribute with path to background image (by default `'data-bg'`). Note: option
should be set before loading of `jquery.lazyloadxt.bg.js` as it is used to alter `$.lazyLoadXT.selector` option.

Demo: http://ressio.github.io/lazy-load-xt/demo/bg.htm


### `<script>`-based tagging

The main problem of lazy loading is necessity to duplicate `<img>` tag in `<noscript>` wrapper to support browsers with
disabled JavaScript. As an alternative way, `jquery.lazyloadxt.script.js` addon allows to prepend tag `<img>` tag by
`<script>` in the following form (without duplicating and renaming `src` to `data-src`):

```html
<script src="jquery.lazyloadxt.js"></script>
<script src="jquery.lazyloadxt.script.js"></script>
```

```html
<script>L()</script><img src="/path/to/image.jpg">

<script>Lb()</script>
<video>
  <source src="/path/to/video.mp4">
</video>
<script>Le()</script>

<script>Lb('iframe')</script>
<iframe src="/path/to/iframe.htm"></iframe>
<script>Le()</script>
````

Here `L()` is function that should be called before self-closed tag like `<img>` and `<input>` (optional argument is
the tag name of lazy loaded element, by default `'img'`), `Lb()` should be called before other tags like `<video>`
and `<iframe>` (optional argument is the tag name of lazy loaded element, by default `'video'`), and `Le()` should be
called after corresponding closing tag.

Options:

**$.lazyLoadXT.srcsetAttr** name of attribute with responsive rules in srcset format,
**$.lazyLoadXT.srcsetBaseAttr** name of attribute for URL prefix,
**$.lazyLoadXT.srcsetExtAttr** name of attribute for URL suffix


Demo: http://ressio.github.io/lazy-load-xt/demo/script-tag.htm


### Deferred autoload

This is very simple addon (just few lines of code) that loads all images after specified time after page loading. That is loading of images
doesn't affect loading of CSSes and JavaScripts, and time to initial website rendering will be decreased.

```html
<script src="jquery.lazyloadxt.js"></script>
<script src="jquery.lazyloadxt.autoload.js"></script>
```

Options:

**$.lazyLoadXT.autoLoadTime** time interval between `load` page event and start of image loading (in ms, default is 50)

Demo: http://ressio.github.io/lazy-load-xt/demo/autoload.htm


## Example of page preparation in PHP

Instead of manipulating `<img>` tags directly (that is to replace `src` by `data-src`,
add `<noscript>` fallback image, etc.), it's possible to do html page postprocessing using [your favorite] language.
Here is example of how to do it using PHP:

```php
/* PHP */
function addLazyLoading($html) {
  $dom = new DOMDocument();
  if (!@$dom->loadHTML('<?xml encoding="UTF-8">' . $html)) // trick to set charset
    return $html;
  foreach ($dom->childNodes as $item)
    if ($item->nodeType === XML_PI_NODE) {
      $dom->removeChild($item);
      break;
    }
  $dom->encoding = 'UTF-8';
  $images = $dom->getElementsByTagName('img');
  $blankImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  for ($i = $images->length - 1; $i >= 0; $i--) {
    $node     = $images->item($i);
    $clone    = $node->cloneNode();
    $noscript = $dom->createElement('noscript');
    $noscript->appendChild($clone);
    $node->parentNode->insertBefore($noscript, $node);
    $node->setAttribute('data-src', $node->getAttribute('src'));
    $node->setAttribute('src',      $blankImage);
    $node->setAttribute('class',    trim($node->getAttribute('class') . ' lazy'));
  }
  $newHtml = $dom->saveHTML();
  if (!$newHtml)
    return $html;
  return $newHtml;
}
```


## CDN

Lazy Load XT may be loaded from [jsDelivr CDN](http://www.jsdelivr.com/#!jquery.lazyloadxt)
```html
<script src="//cdn.jsdelivr.net/jquery.lazyloadxt/1.0.0/jquery.lazyloadxt.min.js"></script>
```
or [CDNJS CDN](http://cdnjs.com/libraries/jquery.lazyloadxt/)
```html
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery.lazyloadxt/1.0.0/jquery.lazyloadxt.min.js"></script>
```

Note that any of Lazy Load XT `dist` files may be loaded from CDN, not only `jquery.lazyloadxt.min.js`.


## Version History

- [**1.1.0**](https://github.com/ressio/lazy-load-xt/tree/1.1.0) (11.01.2016): jQLight script, remove lazy-hidden class
  for non-img elements, fix lazy loading if there is one image only, fix issues in bg, srcset, and video addons,
  new addons for Bootstrap and jQueryMobile events
- [**1.0.6**](https://github.com/ressio/lazy-load-xt/tree/1.0.6) (19.11.2014): fix work of srcset addons in IE6-8
- [**1.0.5**](https://github.com/ressio/lazy-load-xt/tree/1.0.5) (05.06.2014): fix picture and script addons
- [**1.0.4**](https://github.com/ressio/lazy-load-xt/tree/1.0.4) (30.05.2014): fix calls to each() method
- [**1.0.3**](https://github.com/ressio/lazy-load-xt/tree/1.0.3) (28.05.2014): support DOMstatic library (`attr`, `class`, `data`, `event`, `selector`, and `type` modules are required); fix loading of images on browser's tab activation
- [**1.0.2**](https://github.com/ressio/lazy-load-xt/tree/1.0.2) (05.03.2014): fix work in jQuery Mobile 1.4
- [**1.0.1**](https://github.com/ressio/lazy-load-xt/tree/1.0.1) (16.02.2014): fix triggering `lazyload` and `lazyerror`
  events in `scrset` and `picture` addons
- [**1.0.0**](https://github.com/ressio/lazy-load-xt/tree/1.0.0) (16.01.2014): new `forceLoad` option, `classNojs`
  option is removed in flavour of `options.oninit.removeClass`, `lazyloadall` event is renamed to `lazycomplete`,
  new `oncomplete` option, fix work with Zepto, fix work in some old mobile browsers, default value for `selector`
  option is set to `img[data-src]`, lazy* events are triggered after corresponding on* handlers, new `lazystart` event,
  remove "simple" version from build.

- [**0.8.12**](https://github.com/ressio/lazy-load-xt/tree/0.8.12) (12.01.2014): significant performance improvement,
  fix work in BlackBerry 5, fix `checkDuplicates` options
- [**0.8.11**](https://github.com/ressio/lazy-load-xt/tree/0.8.11) (10.01.2014): fix to work in browsers without
  `scroll` event (e.g. Opera Mini), handle `touchmove` event for better response on mobile devices.
- [**0.8.10**](https://github.com/ressio/lazy-load-xt/tree/0.8.10) (07.01.2014): bugfix "video" addon, remove loading of
  `bootstrap.js` in `zepto.htm` demo.
- [**0.8.9**](https://github.com/ressio/lazy-load-xt/tree/0.8.9) (06.01.2014): `checkDuplicates` option, fix srcset
  addon, speed up work with jQuery
- [**0.8.8**](https://github.com/ressio/lazy-load-xt/tree/0.8.8) (26.12.2013): Fix sharing $el.lazyLoadXT object,
  support $(window).lazyLoadXT({...}) call with overrides parameter
- [**0.8.7**](https://github.com/ressio/lazy-load-xt/tree/0.8.7) (26.12.2013): New "picture" addon, feature to pass
  original jQuery element object (with `.lazyLoadXT.srcAttr` property) to `init` and `show` callbacks/event handlers,
  support empty value for `data-lazy-widget` attribute in `widget` addon, minor fixes/improvements, horizontal scroll
  demo, infinite scroll demo
- [**0.8.6**](https://github.com/ressio/lazy-load-xt/tree/0.8.6) (18.12.2013): New "widget" addon, support of per
  element options
- [**0.8.5**](https://github.com/ressio/lazy-load-xt/tree/0.8.5) (15.12.2013): New addons, "simple" version,
  `lazyloadall` event, slight reduce minified size
- [**0.8.4**](https://github.com/ressio/lazy-load-xt/tree/0.8.4) (12.12.2013): Fixed check of removed elements,
   support of `$.lazyLoadXT.videoPoster` parameter, additional examples in `src` (srcset polyfill, transparent
   placeholder for IE6/7)
- [**0.8.3**](https://github.com/ressio/lazy-load-xt/tree/0.8.3) (10.12.2013): Speed up initialization,
  new `forceEvent` option, additional examples of extendability in `/src` directory
- [**0.8.2**](https://github.com/ressio/lazy-load-xt/tree/0.8.2) (08.12.2013): Built-in support of videos in
 `jquery.lazyloadxt.extra.js`
- [**0.8.1**](https://github.com/ressio/lazy-load-xt/tree/0.8.1) (06.12.2013): Add support of `lazyinit`, `lazyshow`,
 `lazyload`, and `lazyerror` events
- [**0.8.0**](https://github.com/ressio/lazy-load-xt/tree/0.8.0) (05.12.2013): Initial release


## License

Lazy Load XT is licensed under the [MIT license](http://opensource.org/licenses/MIT)


[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/ce20db9f22e205daddcd819e106c8995 "githalytics.com")](http://githalytics.com/ressio/lazy-load-xt)
