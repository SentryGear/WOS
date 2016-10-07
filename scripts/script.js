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

  attrSrc.value = './vendor/videos/wos-video.mov';
  elSource.setAttributeNode(attrSrc);

  elVideo.appendChild(elSource)

  document.getElementById('container').appendChild(elVideo);
}

if (window.innerWidth >= 1280) {
  function isSmallDesktop() {
    if (window.innerWidth >= 1280 && window.innerWidth < 1680) {
      return true;
    } else {
      return false;
    }
  }

  var body = document.body,
      html = document.documentElement;

  var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

  var overview = document.getElementById('container-overview'),
      overviewHeight = parseInt(window.getComputedStyle(overview).getPropertyValue('height')),
      overviewPaddingTop = parseInt(window.getComputedStyle(overview).getPropertyValue('padding-top')),
      overviewPaddingBottom = parseInt(window.getComputedStyle(overview).getPropertyValue('padding-bottom'));

  var portraitImage = document.getElementById('container-overview-portrait-movable-image'),
      portraitImageHeight = parseInt(window.getComputedStyle(portraitImage).getPropertyValue('height'));

  var portraitHeight = portraitImageHeight + 12 + 40;

  var portraitStartPosX, portraitEndPosX, portraitEndPosY;

  if (isSmallDesktop()) {
    portraitStartPosX = -250;
    portraitEndPosX = 50;

    portraitEndPosY = window.innerHeight * 1.5 + overviewHeight - overviewPaddingTop * 3;
  } else {
    portraitStartPosX = -360;
    portraitEndPosX = 70;

    portraitEndPosY = window.innerHeight * 1.5 + overviewHeight - overviewPaddingTop * 3 + 40;
  }

  var choreographer = new Choreographer({
    animations: [
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
        range: [window.innerHeight*1.5, height],
        selector: '.container-overview-portrait-movable',
        type: 'change',
        style: 'visibility',
        to: 'visible'
      },
      {
        range: [window.innerHeight*1.5, window.innerHeight * 1.5 + overviewPaddingTop + portraitHeight / 2],
        selector: '.container-overview-portrait-movable',
        type: 'scale',
        style: 'right',
        from: portraitStartPosX,
        to: portraitEndPosX,
        unit: 'px'
      },
      {
        range: [portraitEndPosY, height],
        selector: '.container-overview-portrait-fake',
        type: 'change',
        style: 'display',
        to: 'none'
      },
      {
        range: [portraitEndPosY, height],
        selector: '.container-overview-portrait-movable',
        type: 'change',
        style: 'position',
        to: 'inherit'
      },
      {
        range: [portraitEndPosY, height],
        selector: '.container-overview-portrait-movable',
        type: 'change',
        style: 'transform',
        to: 'none'
      }
    ]
  })

  window.addEventListener('scroll', function() {
    choreographer.runAnimationsAt(window.pageYOffset);

    var hiddenCN = document.createAttribute('class');
    hiddenCN.value = 'hidden';

    if (window.pageYOffset >= window.innerHeight*1.75) {
      document.getElementById('container-header-title').setAttributeNode(hiddenCN);
    } else {
      var className = document.createAttribute('class');
      className.value = 'container-header-title';
      document.getElementById('container-header-title').setAttributeNode(className);
    }
  });

  renderVideo();
}
