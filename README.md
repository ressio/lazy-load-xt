# Lazy Load XT jQuery plugin

---

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [Options](#options)
- [Advanced initialization](#advanced-initialization)
- [Events](#events)
- [More than images](#more-than-images)
- [Extendability](#extendability)
    - [Spinner](#spinner)
    - [Fade-in animation](#fade-in-animation)
    - [Hi-DPI (Retina) images](#hi-dpi-retina-images)
    - [AJAX](#ajax)
    - [Youtube Videos](#youtube-videos)
    - [Support `<video>` tag](#support-video-tag)
- [Demo](#demo)
- [Example of page preparation in PHP](#example-of-page-preparation-in-php)
- [Download](#download)
- [License](#license)
- [Version History](#version-history)


## About

Mobile-oriented, fast and extensible jQuery plugin for lazy loading of images/videos with build-in support of
jQueryMobile framework.

Currently tested in IE 10-11, Chrome 30-31, Firefox 24, Safari 5, Opera 12, Android 2.3 stock browser.


## Usage

1. Include `jquery.lazyloadxt.min.js`.

2. Replace `src` attribute in your `<img>`es to `data-src`. Optionally add a placeholder `src` and a fallback image (in
   the latter case it's necessary to mark first image with `class="lazy"`, see item 3 below):

    ```html
    <img class="lazy" data-src="lazy.jpg" width="100" height="100">
    <noscript><img src="lazy.jpg" width="100" height="100"></noscript>
    ```

    It's recommended to keep the order of attributes in both `<img>` tags, such a code will be effectively gzipped.

3. If you use fallback image, hide first image using CSS (otherwise browsers with disabled javascript will display both
   images):

    ```css
    img.lazy {
      display: none;
    }
    ```

    Lazy Load XT plugin removes this class (`classNojs` option) at image initialization.


## Options

The plugin is very extensible and supports a lot of options that are stored in $.lazyLoadXT object:
```javascript
$.lazyLoadXT = {
  edgeY:  200,
  srcAttr: 'data-src'
}
```

You can create this object at any time before jQuery's `ready` event, both before and after loading of
`jquery.lazyloadxt.min.js`.

* **autoInit**: auto initialization of the plugin, that is processing of all elements matching `selector` selector in
  jQuery's `ready` event, if it is disabled you have to do such initialization manually as explained in [Advanced
  initialization](#advanced-initialization) section (default `true`)
* **selector**: selector for elements that should be lazy-loaded (default `'img'`)
* **srcAttr**: attribute containing actual `src` path, see example below in [Hi-DPI (Retina) images]
  (#hi-dpi-retina-images) section (default `'data-src'`)
* **classNojs**: class name used to hide duplicated element (outside of `<noscript>` tag) in the case of disabled
  JavaScript in browser, the plugin removes this class to make images visible (default `'lazy'`)
* **blankImage**: blank image for used until actual image is not loaded (default is transparent 1x1 gif image in
  data-uri format `'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'`)
* **edgeY**: expand visible page area (viewport) in vertical direction by specified amount of pixels,
  so that elements start to load even if they are not visible, but will be visible after scroll by `edgeY` pixels
  (default `0`)
* **edgeX**: expand visible page area in horizontal direction by specified amount of pixels (default `0`)
* **throttle**: time interval (in ms) to check for visible elements, the plugin uses it to speed up page work in the
  case of flow of page change events (default `99`)
* **visibleOnly**: added for compatibility with original
  [Lazy Load Plugin](https://github.com/tuupola/jquery_lazyload) by Mika Tuupola, being disabled this option forces
  the plugin to check element position only, but not to check that it is actually visible (default `true`)
* **loadEvent**: space-separated list of events when the plugin starts to found new elements matching `selector`
  (default `'pageshow'` to check AJAX-loaded content in jQueryMobile and to support backward navigation in iPhone)
* **updateEvent**: space-separated list of events when the plugin starts to check what elements are visible in
  current viewport (default `'load orientationchange resize scroll'`)
* **oninit**: handler called when the plugin push elements into internal list of "lazy" elements,
  it may be either a function (DOM element is accessible using `this` object) or an object with `addClass` and/or
  `removeClass` properties (`addClass` is a space-separated list of class names that should be added to the elements,
  and `removeClass` contains class names that should be removed, `removeClass` has higher priority in the case of
  identical class names) (default `null`)
* **onshow**: handler called when an element appears in viewport area, it may be either a function or an object by
  analogy to `oninit` handler, see example below in [Spinner](#spinner) section (default `null`)
* **onload**: handler called when element is successfully loaded, it may be either a function or an object by analogy
  to `oninit` handler (default `null`)
* **onerror**: handler called when browser cannot load the element, it may be either a function or an object by analogy
  to `oninit` handler (default `null`)


## Advanced initialization

Possible ways to initialize elements:

1. `$(container).lazyLoadXT();`
2. `$(container).lazyLoadXT(selector);`
3. `$(img.selector).lazyLoadXT();`


## Events

Lazy Load XT plugin triggers following events for loading elements (just before call to corresponding handler in
`$.lazyLoadXT` options):

* `lazyinit`, the plugin push elements into internal list of "lazy" elements
* `lazyshow`, element appears in viewport area
* `lazyload`, element is successfully loaded
* `lazyerror`, browser cannot load the element

Unlike global handlers `$.lazyLoadXT`, using this events it's possible to assign individual handlers for media
elements.


## More than images

Images are not the only page elements that may be lazy loaded. Though default value for `$.lazyLoadXT.selector` is
`'img'`, you can append it by `iframe` to use lazy-loading for iframes, `video` for videos,
etc. Full list of supported tags include all tags with `src` attribute: `<audio>`, `<embed>`, `<frame>`,
`<iframe>`, `<img>`, `<video>`. Usage is the same: just rename `'src'` attribute to `'data-src'` (or what is
specified in your `$.lazyLoadXT.srcAttr`) and add `<noscript>`ed version if necessary.


## Extendability

Lazy Load XT plugin may be easily extended using `oninit`, `onshow`, `onload` and `onerror` event. Some examples are
listed below.

### Spinner

To display animated spinner while image is loading, you can set/reset CSS class in `onshow`/`onload` events:

```css
/* CSS */
.lazy-hidden {
  background:#eee url('/path/to/loading.gif') no-repeat 50% 50%;
}
```

```javascript
/* JS */
$.lazyLoadXT = {
  onshow:  { addClass:    'lazy-hidden' },
  onload:  { removeClass: 'lazy-hidden' },
  onerror: { removeClass: 'lazy-hidden' }
};
```

### Fade-in animation

To add fade-in animation you can use following sample of `onload` event and CSS rules:

```css
/* CSS */
.lazy-hidden {
  opacity: 0;
}
.lazy-loaded {
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  -ms-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  transition: opacity 0.3s;
  opacity: 1;
}
```

```javascript
/* JS */
$.lazyLoadXT = {
  oninit: { addClass: 'lazy-hidden' },
  onload: { addClass: 'lazy-loaded', removeClass: 'lazy-hidden' }
};
```


### Hi-DPI (Retina) images

The code below allows you to use `data-src-3x` attribute for screens with 3x density (e.g. Samsung Galaxy S4),
`data-src-2x` for 2x density (e.g. iPhones 4+), and `data-src-1.5x` for 1.5x density (e.g. HTC Incredible S).

```javascript
(function($, dpr) {
  if (dpr>1)
    $.lazyLoadXT = {
      srcAttr: 'data-src-' + (dpr > 2 ? '3x' : (dpr > 1.5 ? '2x' : '1.5x'))
    };
})(jQuery, window.devicePixelRatio || 1);
```

But in real world it's better to set `srcAttr` function and choose most suitable image path there.


### AJAX

If you use jQuery-based AJAX navigation and don't like to change existing AJAX callbacks,
you can apply lazy loading to new loaded content using `ajaxComplete` event (50ms delay is to be sure that content
is inserted to page):

```javascript
$(window).on('ajaxComplete', function() {
  setTimeout(function() {
    $(window).lazyLoadXT();
  }, 50);
});
```

Note: `loadEvent: 'pageshow ajaxComplete'` may not work because of content is not added to the page at the time of
`ajaxComplete` event.


### Youtube Videos

Youtube videos are `iframe`-embedded pages and they may be lazy loaded in the way similar to images:

```html
<iframe width="420" height="315" data-src="//www.youtube.com/embed/uOzO9O15gwI?rel=0" frameborder="0" allowfullscreen></iframe>
```

```javascript
$.lazyLoadXT = {
  selector: "img, iframe[data-src]"
};
```

### Support `<video>` tag

It's just an example of how to start loading source of `<source>` or `<track>` tags when parent `<audio>` or
`<video>` element is visible:

```html
<video data-poster="/path/to/poster.jpg" width="320" height="240" controls>
  <source data-src="/path/to/video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
  <source data-src="/path/to/video.ogv" type='video/ogg; codecs="theora, vorbis"'>
</video>
```

```javascript
$.lazyLoadXT = {
  selector: "img, audio, video",
  onshow: function() {
    if (/AUDIO|VIDEO/.test(this.tagName)) {
      var $el = $(this);
      $el.attr('poster', $el.attr('data-poster'));
      $el.children().each(function () {
        if (/SOURCE|TRACK/.test(this.tagName)) {
          var $child = $(this);
          $child.attr('src', $child.attr('data-src'));
        }
      });
      this.load();
    }
  }
};
```

## Demo

Demo: [ressio.github.io/lazy-load-xt](http://ressio.github.io/lazy-load-xt)


## Example of page preparation in PHP

Instead of manipulating `<img>` tags directly (that is to replace `src` by `data-src`,
add `<noscript>` fallback image, etc.), it's possible to do html page postprocessing using [your favorite] language.
Here is example of how to do it using PHP:

```php
function addLazyLoading($html) {
    $dom = new DOMDocument();
    if(!@$dom->loadHTML('<?xml encoding="UTF-8">' . $html)) // trick to set charset
	    return $html;
	foreach($dom->childNodes as $item)
		if($item->nodeType === XML_PI_NODE) {
			$dom->removeChild($item);
			break;
		}
	$dom->encoding = 'UTF-8';
	$images = $dom->getElementsByTagName('img');
	for($i = $images->length-1; $i >= 0; $i--) {
		$node     = $images->item($i);
		$clone    = $node->cloneNode();
		$noscript = $dom->createElement('noscript');
		$noscript->appendChild($clone);
		$node->parentNode->insertBefore($noscript, $node);
		$node->setAttribute('data-src', $node->getAttribute('src'));
		$node->setAttribute('src',      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
		$node->setAttribute('class',    trim($node->getAttribute('class') . ' lazy'));
	}
	$newHtml = $dom->saveHTML();
	if(!$newHtml)
		return $html;
	return $newHtml;
}
```

## Download

Dev version: [jquery.lazyloadxt.js](https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.js)

Minified version:
[jquery.lazyloadxt.min.js](https://raw.github.com/ressio/lazy-load-xt/master/dist/jquery.lazyloadxt.min.js)

Install and manage Lazy Load XT using [Bower](http://bower.io/)

    $ bower install lazyloadxt

Install and manage using [NPM](https://npmjs.org/)

    $ npm install lazyloadxt

View the Project on GitHub: [https://github.com/ressio/lazy-load-xt](https://github.com/ressio/lazy-load-xt)

If you have any feature to request or bug to report please use GitHub issues.


## License

Lazy Load XT is licensed under the [MIT license](http://opensource.org/licenses/MIT)


## Version History

- [**0.8.1**](https://github.com/ressio/lazy-load-xt/tree/0.8.1) (06.12.2013): Add support of `lazyinit`, `lazyshow`,
 `lazyload`, and `lazyerror` events
- [**0.8.0**](https://github.com/ressio/lazy-load-xt/tree/0.8.0) (05.12.2013): Initial release

<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-46280150-1','github.com');ga('send','pageview');</script>