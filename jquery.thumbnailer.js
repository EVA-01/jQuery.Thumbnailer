jQuery.fn.thumbnailer=function(width, height, spOp, imOp) {
 if(spOp=="centered") {
  spOp={width:function() {
    if(jQuery(this).height()<=jQuery(this).width()) {
     /* Landscape */
     return 'auto';
    } else {
     return jQuery(this).parents('.thmb-wrap').first().width();
    }
   },
   height:function() {
    if(jQuery(this).height()<=jQuery(this).width()) {
     /* Landscape */
     return jQuery(this).parents('.thmb-wrap').first().height();
    } else {
     return 'auto';
    }
   },
   top:function() {
    if(jQuery(this).height()>=jQuery(this).parents('.thmb-wrap').first().height()) {
	 return 0-(jQuery(this).height()-jQuery(this).parents('.thmb-wrap').first().height())/2;
	}
   },
   left:function() {
    if(jQuery(this).width()>=jQuery(this).parents('.thmb-wrap').first().width()) {
	 return 0-(jQuery(this).width()-jQuery(this).parents('.thmb-wrap').first().width())/2;
	}
   }
  };
 }
 jQuery(this).each(function() {
  fe=jQuery(this).wrap('<span class="thmb-wrap"></span>');
  if(imOp) {
   fe.parents('.thmb-wrap').first().data('width', width).data('height', height).data('content', spOp).data('wrap', imOp).css(jQuery.extend({width:width, height:height, display:'inline-block', overflow:'hidden'}, imOp));
  } else {
   fe.parents('.thmb-wrap').first().data('width', width).data('height', height).data('content', spOp).data('wrap', imOp).css({width:width, height:height, display:'inline-block', overflow:'hidden'});
  }
  if(spOp) {
   fe.css(jQuery.extend({position:'relative'}, spOp)).addClass('thmb-wrapped');
  } else {
   fe.css({position:'relative'}).addClass('thmb-wrapped');
  }
 });
 return this;
}
