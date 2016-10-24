// Footer's subscribe focus styling
var clicking = false;

$( ".container-footer-subscribe-form-button" ).mousedown(function() {
  clicking = true;

  $( ".container-footer-subscribe-form" ).css('background-color', '#ef636e');
  $( ".container-footer-subscribe-form-button" ).css('color', '#ffffff');
  $( ".container-footer-subscribe-form-input" ).css('color', '#ffffff');
  $( ".container-footer-subscribe-form-input" ).addClass('white-placeholder');
});

$( ".container-footer-subscribe-form-button" ).mouseup(function() {
  clicking = false;

  $( ".container-footer-subscribe-form" ).css('background-color', '#ffffff');
  $( ".container-footer-subscribe-form-button" ).css('color', '#ef636e');
  $( ".container-footer-subscribe-form-input" ).css('color', '#000000');
  $( ".container-footer-subscribe-form-input" ).removeClass('white-placeholder');
});

$( ".container-footer-subscribe-form-button" ).mousemove(function() {
  if (!clicking) {
    return;
  } else {
    $( ".container-footer-subscribe-form" ).css('background-color', '#ffffff');
    $( ".container-footer-subscribe-form-button" ).css('color', '#ef636e');
    $( ".container-footer-subscribe-form-input" ).css('color', '#000000');
    $( ".container-footer-subscribe-form-input" ).removeClass('white-placeholder');
  }
});

// Collection image viewer
$( '.container-collection-images-image' ).on('click', function () {
  $('.d-viewer').css('display', 'initial');

  var img, imgPrev, imgNext;

  function setImages(mainImg) {
    img = mainImg;
    imgPrev = $('.container-collection-images-image').eq( img.index() - 1 );
    imgNext = $('.container-collection-images-image').eq( img.is(':last-child') ? 0 : img.index() + 1 );

    $('.viewer-images-image.center').attr('src', img.attr('src'));
    $('.viewer-images-image.left').attr('src', imgPrev.attr('src'));
    $('.viewer-images-image.right').attr('src', imgNext.attr('src'));
  }

  setImages($(this));

  $( '.viewer-arrow.left' ).on('click', function () {
    setImages(imgPrev);
  });

  $( '.viewer-arrow.right' ).on('click', function () {
    setImages(imgNext);
  });

  $('.viewer').css('display', 'block').animate({opacity: 1}, 200);
});

$( '.viewer-close' ).on('click', function () {
  $('.d-viewer').css('display', 'none');

  $('.viewer').animate({opacity: 0}, 200, function() {
    $(this).css('display', 'none');
  })
});

// Muses slider configuration
$(document).ready(function(){
  $('#slider').slick({
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    variableWidth: true
  });
});

var musesHeight = 1015;

// Follow link vertical centring for Safari
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

if (isSafari || navigator.platform === 'MacIntel') {
  $('#container-follow-link-text').css('top', '45%');
}

// Special for desktop
if (window.innerWidth >= 1280) {
  var isAudio = false;
  var isAudioOn = false;
  $( '.container-audio-icon' ).on('click', function () {
    if (isAudioOn) {
      isAudioOn = false;
      $(this).attr('src', '../vendor/images/audio-off.svg');

      if (isAudio) {
        $( '.container-audioplayer' ).trigger('pause');
      }
    } else {
      isAudioOn = true;
      $(this).attr('src', '../vendor/images/audio-on.svg');

      if (!isAudio) {
        isAudio = true;
        $( '.container' ).append('<audio autoplay loop class="container-audioplayer"><source src="./vendor/audio/wos-audio.mp3" type="audio/mpeg"></audio>');
      } else {
        $( '.container-audioplayer' ).trigger('play');
      }
    }
  });

  function renderVideo() {
    var elVideo = document.createElement('video');
    var attrClass = document.createAttribute('class');
    var attrAutoplay = document.createAttribute('autoplay');
    var attrLoop = document.createAttribute('loop');

    attrClass.value = 'container-video';
    elVideo.setAttributeNode(attrClass);
    elVideo.setAttributeNode(attrAutoplay);
    elVideo.setAttributeNode(attrLoop);

    var elSource = document.createElement('source');
    var attrSrc = document.createAttribute('src');

    attrSrc.value = './vendor/videos/wos-video-muted-compressed.mp4';
    elSource.setAttributeNode(attrSrc);

    elVideo.appendChild(elSource)

    document.getElementById('container').appendChild(elVideo);
  }

  renderVideo();

  var body = document.body,
      html = document.documentElement;

  var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  var overview = document.getElementById('container-overview'),
      overviewHeight = parseInt(window.getComputedStyle(overview).getPropertyValue('height')),
      overviewPaddingTop = parseInt(window.getComputedStyle(overview).getPropertyValue('padding-top'));

  var collection = document.getElementById('container-collection'),
      collectionHeight = parseInt(window.getComputedStyle(collection).getPropertyValue('height')),
      collectionPaddingTop = parseInt(window.getComputedStyle(collection).getPropertyValue('padding-top'));

      var collectionTitle = document.getElementById('container-collection-title'),
          collectionTitleHeight = parseInt(window.getComputedStyle(collectionTitle).getPropertyValue('height'));

  var follow = document.getElementById('container-follow'),
      followHeight = parseInt(window.getComputedStyle(follow).getPropertyValue('height')),
      followPaddingTop = parseInt(window.getComputedStyle(follow).getPropertyValue('padding-top')),
      followPaddingBottom = parseInt(window.getComputedStyle(follow).getPropertyValue('padding-bottom'));

  var pointStartCollection = window.innerHeight * 1.5 + overviewHeight - collectionTitleHeight / 2,
      pointEndCollection = pointStartCollection + collectionPaddingTop + collectionTitleHeight;

  var pointStartMuses = window.innerHeight + overviewHeight + collectionHeight,
      pointEndMuses = pointStartMuses + window.innerHeight * .75;

  var pointStartFollow =
      window.innerHeight * 1.5 + overviewHeight + collectionHeight + musesHeight - followHeight / 2,
      pointEndFollow = pointStartFollow + followPaddingTop + followHeight;

  var boxShadowScale = function boxShadowScale(data) {
    var scaledValue = ((data.to - data.from) * data.progress) + data.from;
    var scaledValueString = 'inset 0 0 0 ' + scaledValue + 'px #fff';
    data.node.style[data.style] = scaledValueString;
  };

  var choreographerS = new Choreographer({
    customFunctions: {
      boxShadowScale: boxShadowScale
    },
    animations: [
      // Header
      {
        range: [-1, 236],
        selector: '.container-header-title',
        type: 'scale',
        style: 'transform:translateY',
        from: 236,
        to: 0,
        unit: 'px'
      },
      {
        range: [window.innerHeight, window.innerHeight * 1.75],
        selector: '.container-header-title',
        type: 'scale',
        style: 'opacity',
        from: 1,
        to: .75
      },
      {
        range: [window.innerHeight, window.innerHeight * 1.75],
        selector: '.container-header-title',
        type: 'scale',
        style: 'background-size',
        from: 50,
        to: 40,
        unit: 'vw'
      },
      {
        range: [window.innerHeight * 1.75, height],
        selector: '.container-header-title',
        type: 'change',
        style: 'visibility',
        to: 'hidden'
      },

      // Overview portrait
      {
        range: [window.innerHeight, window.innerHeight * 2],
        selector: '.container-overview-portrait',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },

      // Collection
      {
        range: [pointStartCollection, pointEndCollection],
        selector: '.container-collection',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [pointStartCollection, pointEndCollection],
        selector: '.container-collection',
        type: 'scale',
        style: 'transform:scale',
        from: .9,
        to: 1
      },
      {
        range: [pointStartCollection, pointEndCollection],
        selector: '.container-collection',
        type: 'scale',
        style: 'transform:translateY',
        from: -(collectionPaddingTop + collectionTitleHeight) * 1.25,
        to: 0,
        unit: 'px'
      },

      // Muses
      {
        range: [pointStartMuses, pointEndMuses],
        selector: '.container-muses',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },

      // Follow
      {
        range: [pointStartFollow, pointEndFollow],
        selector: '.container-follow',
        type: 'scale',
        style: 'top',
        from: -(followPaddingTop + followHeight),
        to: 0,
        unit: 'px'
      },
      {
        range: [pointStartFollow, pointEndFollow],
        selector: '.container-follow',
        type: 'scale',
        style: 'opacity',
        from: 0,
        to: 1
      },
      {
        range: [pointStartFollow, pointEndFollow],
        selector: '.container-follow',
        type: 'scale',
        style: 'transform:scale',
        from: .9,
        to: 1
      },
      {
        range: [pointEndFollow, height],
        selector: '.container-follow',
        type: 'change',
        style: 'z-index',
        to: 1
      },

      // Fade video
      {
        range: [-1, 236],
        selector: '.container-video',
        type: 'change',
        style: 'filter',
        to: 'brightness(0.5)'
      },
      {
        range: [window.innerHeight * 1.5, height],
        selector: '.container-video',
        type: 'change',
        style: 'filter',
        to: 'brightness(0.5)'
      },

      // Audio controller
      {
        range: [-1, 236],
        selector: '.container-audio',
        type: 'scale',
        style: 'transform:translateY',
        from: 14,
        to: 237,
        unit: 'px'
      },

      // Animaitons for navigation dots
      // dot-header
      {
        range: [-1, window.innerHeight + 1],
        selector: '#dot-header',
        type: 'change',
        style: 'box-shadow',
        to: 'inset 0 0 0 8px #fff'
      },
      {
        range: [window.innerHeight, window.innerHeight * 2],
        selector: '#dot-header',
        type: 'boxShadowScale',
        style: 'box-shadow',
        from: 8,
        to: 1
      },
      {
        range: [window.innerHeight * 2, height],
        selector: '#dot-header',
        type: 'change',
        style: 'box-shadow',
        to: 'inset 0 0 0 1px #fff'
      },
      // dot-overview
      {
        range: [-1, window.innerHeight],
        selector: '#dot-overview',
        type: 'change',
        style: 'box-shadow',
        to: 'inset 0 0 0 1px #fff'
      },
      {
        range: [window.innerHeight, window.innerHeight * 2],
        selector: '#dot-overview',
        type: 'boxShadowScale',
        style: 'box-shadow',
        from: 1,
        to: 8
      },
      {
        range: [window.innerHeight * 2 - 1, pointStartCollection - window.innerHeight * .5 + 1],
        selector: '#dot-overview',
        type: 'change',
        style: 'box-shadow',
        to: 'inset 0 0 0 8px #fff'
      },
      {
        range: [pointStartCollection - window.innerHeight * .5, pointStartCollection + window.innerHeight * .5],
        selector: '#dot-overview',
        type: 'boxShadowScale',
        style: 'box-shadow',
        from: 8,
        to: 1
      },
      {
        range: [pointStartCollection + window.innerHeight * .5, height],
        selector: '#dot-overview',
        type: 'change',
        style: 'box-shadow',
        to: 'inset 0 0 0 1px #fff'
      },
      // dot-collection
      {
        range: [-1, pointStartCollection - window.innerHeight * .5],
        selector: '#dot-collection',
        type: 'change',
        style: 'box-shadow',
        to: 'inset 0 0 0 1px #fff'
      },
      {
        range: [pointStartCollection - window.innerHeight * .5, pointStartCollection + window.innerHeight * .5],
        selector: '#dot-collection',
        type: 'boxShadowScale',
        style: 'box-shadow',
        from: 1,
        to: 8
      },
      {
        range: [pointStartCollection + window.innerHeight * .5 - 1, pointStartMuses + 1],
        selector: '#dot-collection',
        type: 'change',
        style: 'box-shadow',
        to: 'inset 0 0 0 8px #fff'
      },
      {
        range: [pointStartMuses, pointStartMuses + window.innerHeight],
        selector: '#dot-collection',
        type: 'boxShadowScale',
        style: 'box-shadow',
        from: 8,
        to: 1
      },
      {
        range: [pointStartMuses + window.innerHeight, height],
        selector: '#dot-collection',
        type: 'change',
        style: 'box-shadow',
        to: 'inset 0 0 0 1px #fff'
      },
      // dot-muses
      {
        range: [-1, pointStartMuses],
        selector: '#dot-muses',
        type: 'change',
        style: 'box-shadow',
        to: 'inset 0 0 0 1px #fff'
      },
      {
        range: [pointStartMuses, pointStartMuses + window.innerHeight],
        selector: '#dot-muses',
        type: 'boxShadowScale',
        style: 'box-shadow',
        from: 1,
        to: 8
      },
      {
        range: [pointStartMuses + window.innerHeight - 1, pointStartMuses + musesHeight + 1],
        selector: '#dot-muses',
        type: 'change',
        style: 'box-shadow',
        to: 'inset 0 0 0 8px #fff'
      },
      {
        range: [pointStartMuses + musesHeight, pointStartMuses + musesHeight + window.innerHeight],
        selector: '#dot-muses',
        type: 'boxShadowScale',
        style: 'box-shadow',
        from: 8,
        to: 1
      },
      {
        range: [pointStartMuses + musesHeight + window.innerHeight, height],
        selector: '#dot-muses',
        type: 'change',
        style: 'box-shadow',
        to: 'inset 0 0 0 1px #fff'
      },
      // dot-follow
      {
        range: [-1, pointStartMuses + musesHeight],
        selector: '#dot-follow',
        type: 'change',
        style: 'box-shadow',
        to: 'inset 0 0 0 1px #fff'
      },
      {
        range: [pointStartMuses + musesHeight, pointStartMuses + musesHeight + window.innerHeight],
        selector: '#dot-follow',
        type: 'boxShadowScale',
        style: 'box-shadow',
        from: 1,
        to: 8
      }
    ]
  });

  window.addEventListener('scroll', function() {
    choreographerS.runAnimationsAt(window.pageYOffset);
  });

  var choreographerM = new Choreographer({
    animations: [
      {
        range: [-1, window.innerWidth],
        selector: '#slider',
        type: 'scale',
        style: 'transform:translateX',
        from: 100,
        to: -100,
        unit: 'px'
      }
    ]
  })

  function mousemoveAnimations(e) {
    choreographerM.runAnimationsAt(e.clientX);
  }

  $( '#slider' ).hover(
    function() {
      window.addEventListener('mousemove', mousemoveAnimations, true);
    }, function() {
      window.removeEventListener('mousemove', mousemoveAnimations, true);
      $(this).css('transform', 'translateX(0px)');
    }
  );

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
}
