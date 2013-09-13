jQuery.Thumbnailer
==================

Creates simple, completely customizable, thumbnails.

## Usage

    $('.thumbs').thumbnailer(width, height, [inner content css], [outer content css]);
    $('.thumbs').thumbnailer(100, 100, {height:100, width:100}, {cursor:'pointer'});
    $('.thumbs').thumbnailer(100, 100, 'centered');
    
**width** and **height** are required or else you're not really creating a thumbnail.

**Inner content CSS** applies the CSS to the element it is being acted on (in this case, elements with the class "thumbs"). If you make it the string "centered", it fits (but doesn't stretch) your inner content to fit the dimensions of the thumbnail and centers it if there's overflow. 

**Outer content CSS** applies the CSS to the span that wraps the inner content.

## Result
This then wraps your elements in a span, as follows:

    <span class="thmb-wrap" style="width: 100px; height: 100px; display: inline-block; overflow: hidden; /*Outer content CSS would go here*/">
    <img src="logo.png" class="thumbs thmb-wrapped" style="position: relative; /*Inner content CSS would go here*/">
    </span>
    
## License: Public Domain
Please don't rename it or change credit away from me, James Anthony Bruno, because that would make me sad. It is fine, however, to make changes to Thumbnailer's core to suit your needs for use in your products (whether commercial, personal, or non-profit). If you believe you've found a better way for Thumbnailer to work, go ahead and message me and let me know! I would love to implement your fix. 
