<?php
  if (isset($_POST['submit'])) {
    if(!file_exists("subscribers.txt")) {
      die("File not found");
    } else {
      $today = date("Y-m-d H:i:s");
      $email = $_POST['email'];
      $file = 'subscribers.txt';
      $current = file_get_contents($file);
      $current .= $today." ".$email."\n";
      file_put_contents($file, $current);
    }
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>WALK OF SHAME</title>
  <link href="./vendor/stylesheets/styles.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <link href="./vendor/stylesheets/slick.css" media="screen, projection" rel="stylesheet" type="text/css" />
</head>
<script type="text/javascript">
  function scrollDown() {
    $( '#top-footer' ).css('visibility', 'visible');

    if (window.innerWidth >= 1280) {
      window.scrollTo(0,237);
    }
  }
</script>
<body onload="scrollDown()">
  <div class="container" id="container">
    <div class="container-audio">
      <img class="container-audio-icon" src="./vendor/images/audio-off.svg" />
    </div>

    <nav class="container-nav">
      <a class="container-nav-dot" id="dot-header" href="#anchor-header"></a>
      <a class="container-nav-dot" id="dot-overview" href="#anchor-overview"></a>
      <a class="container-nav-dot" id="dot-collection" href="#anchor-collection"></a>
      <a class="container-nav-dot" id="dot-muses" href="#anchor-muses"></a>
      <a class="container-nav-dot" id="dot-follow" href="#anchor-follow"></a>
    </nav>

    <div class="container-footer" id="top-footer">
      <div class="container-footer-contacts">
        <div class="container-footer-contacts-title">CONTACTS</div>
        <a href="mailto:INFO@WALKOFSHAME.MOSCO">INFO@WALKOFSHAME.MOSCOW</a>
        <a href="mailto:PRESS@WALKOFSHAME.MOSCOW">PRESS@WALKOFSHAME.MOSCOW</a>
        <p>WHATSAPP + 7 916 8148867</p>
      </div>
      <div class="container-footer-subscribe">
        <div class="container-footer-subscribe-title">SUBSCRIBE TO THE NEWS AND UPDATES</div>
        <form class="container-footer-subscribe-form" id="subscribe-top" action="index.php" method="post">
          <input required class="container-footer-subscribe-form-input" type="email" name="email" placeholder="Email">
          <button class="container-footer-subscribe-form-button" type="submit" name="submit">SUBSCRIBE</button>
        </form>
      </div>
      <div class="container-footer-tcopy">COPYRIGHT &copy; 2016 WALK OF SHAME MOSCOW</div>
      <div class="container-footer-follow">
        <div class="container-footer-follow-title">FOLLOW US</div>
        <div class="container-footer-follow-blocks">
          <a href="https://www.instagram.com/walkofshamemoscow/" target="_blank" class="container-footer-follow-blocks-block">
            <img class="container-footer-follow-blocks-block-icon" src="./vendor/images/insta.svg" />
            <span class="container-footer-follow-blocks-block-text">INSTAGRAM</span>
          </a>
          <a href="https://www.facebook.com/walkofshamemoscow/" target="_blank" class="container-footer-follow-blocks-block">
            <img class="container-footer-follow-blocks-block-icon" src="./vendor/images/fb.svg" />
            <span class="container-footer-follow-blocks-block-text">FACEBOOK</span>
          </a>
          <a href="http://walkofshamemoscow.tumblr.com/" target="_blank" class="container-footer-follow-blocks-block">
            <img class="container-footer-follow-blocks-block-icon" src="./vendor/images/tumblr.svg" />
            <span class="container-footer-follow-blocks-block-text">TUMBLR</span>
          </a>
        </div>
      </div>
    </div>

    <div id="anchor-header"></div>
    <div class="container-header">
      <div class="container-header-title"></div>
    </div>

    <div id="anchor-overview"></div>
    <div class="container-overview" id="container-overview">
      <div class="container-overview-text">
        <p><span class="container-overview-person">Walk of Shame</span> was founded in 2011 by designer Andrey Artyomov.</p>
        <p>Brand name is inspired by the times when Moscow was undergoing an explosion of nightlife and music culture, Idle Conversation throwing legendary parties and founding the online magazine, LAM, as well as producing a pilot Russian version of the cult publication, Dazed, which Andrey also worked on. Back in those days, summer nights were sure to lead either to the dance floor at Solyanka, or out somewhere on the rooftops of Moscow. In this sense, Walk of Shame is dedicated to the raucous youth of Andrey and his friends. The designer finds his inspiration in his school years in Ufa, the endless Moscow revelries at the end of the 2000s, and the DJ sets of famous friends.</p>
        <p>One of the immediate hits was a jumper modeled after Princess Diana's, imprinted with I’M A LUXURY words. From season to season, the collections have featured variations on the theme of different WOS slip dresses, bathrobe fur coats, oversized bomber jackets and jeans classically tailored but cut from unexpected fabrics, such as thick silk. Loyal clientele and muses of the brand include Natasha Goldenburg, Leandra Medin (Man Repeller), Elle Fanning and Rihanna, among others. <span class="container-overview-person">Walk Of Shame</span> is daily-wear for those girls for whom life always has room for a good time.</p>
        <p>Surrounded by talented friends, Andrey has always incorporated young, talented designers, photographers and directors into the process of creating the brand’s image. From the very first collection, WOS Moscow’s look books have been shot by Alexey Kiselev, with promotional clips and films produced by Avdotya Alexandrova.</p>
        <p>A favorite of It Girls in Moscow and abroad, Walk Of Shame is a bestseller in many famous edgy stores. Today Walk of Shame works with the finest retail partners all over the world: Selfridges and Browns (London), Galeries Lafayette (Paris), TSUM and KM20 (Moscow), Rare Market (Seoul) and many more.</p>
      </div>
      <div class="container-overview-portrait">
        <div class="container-overview-portrait-image" id="container-overview-portrait-image"></div>
        <div class="container-overview-portrait-description">ANDREI ARTEMOV</div>
      </div>
    </div>

    <div id="anchor-collection"></div>
    <div class="container-collection" id="container-collection">
      <div class="container-collection-title" id="container-collection-title">COLLECTION AW 2017</div>
      <div class="container-collection-images">
        <img class="container-collection-images-image" src="./vendor/images/collection/1.jpg" />
        <img class="container-collection-images-image" src="./vendor/images/collection/2.jpg" />
        <img class="container-collection-images-image" src="./vendor/images/collection/3.jpg" />
        <img class="container-collection-images-image" src="./vendor/images/collection/4.jpg" />
        <img class="container-collection-images-image" src="./vendor/images/collection/5.jpg" />
        <img class="container-collection-images-image" src="./vendor/images/collection/6.jpg" />
        <img class="container-collection-images-image" src="./vendor/images/collection/7.jpg" />
        <img class="container-collection-images-image" src="./vendor/images/collection/8.jpg" />
        <img class="container-collection-images-image" src="./vendor/images/collection/9.jpg" />
        <img class="container-collection-images-image" src="./vendor/images/collection/10.jpg" />
        <img class="container-collection-images-image" src="./vendor/images/collection/11.jpg" />
        <img class="container-collection-images-image" src="./vendor/images/collection/12.jpg" />

        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/13.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/14.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/15.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/16.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/17.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/18.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/19.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/20.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/21.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/22.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/23.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/24.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/25.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/26.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/27.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/28.jpg" />
        <img class="container-collection-images-image d-viewer" src="./vendor/images/collection/29.jpg" />
      </div>
    </div>

    <div id="anchor-muses"></div>
    <div class="container-muses" id="container-muses">
      <div class="container-muses-title">MUSES</div>
      <div id="slider">
        <div class="slider-slide">
          <img class="slider-slide-image" src="./vendor/images/muses/natasha goldenberg.jpg" />
          <a href="https://www.instagram.com/ngoldenberg/" target="_blank" class="slider-slide-caption">natasha goldenberg</a>
        </div>
        <div class="slider-slide">
          <img class="slider-slide-image" src="./vendor/images/muses/avdotja alexandrova.jpg" />
          <a href="https://www.instagram.com/vidunja/" target="_blank" class="slider-slide-caption">avdotja alexandrova</a>
        </div>
        <div class="slider-slide">
          <img class="slider-slide-image" src="./vendor/images/muses/raveena aurora.jpg" />
          <a href="https://www.instagram.com/raveenaaurora/" target="_blank" class="slider-slide-caption">raveena aurora</a>
        </div>
        <div class="slider-slide">
          <img class="slider-slide-image" src="./vendor/images/muses/leandra medine.jpg" />
          <a href="https://www.instagram.com/leandramedine/" target="_blank" class="slider-slide-caption">leandra medine</a>
        </div>
        <div class="slider-slide">
          <img class="slider-slide-image" src="./vendor/images/muses/elle faning.jpg" />
          <a href="https://www.instagram.com/ellefanning/" target="_blank" class="slider-slide-caption">elle faning</a>
        </div>
        <div class="slider-slide">
          <img class="slider-slide-image" src="./vendor/images/muses/lena perminova.jpg" />
          <a href="https://www.instagram.com/lenaperminova/" target="_blank" class="slider-slide-caption">lena perminova</a>
        </div>
        <div class="slider-slide">
          <img class="slider-slide-image" src="./vendor/images/muses/matilda shnurova.jpg" />
          <a href="https://www.instagram.com/mshnurova/" target="_blank" class="slider-slide-caption">matilda shnurova</a>
        </div>
        <div class="slider-slide">
          <img class="slider-slide-image" src="./vendor/images/muses/kacy hill.jpg" />
          <a href="https://www.instagram.com/kacyhill/" target="_blank" class="slider-slide-caption">kacy hill</a>
        </div>
        <div class="slider-slide">
          <img class="slider-slide-image" src="./vendor/images/muses/cleo wade.jpg" />
          <a href="https://www.instagram.com/cleowade/" target="_blank" class="slider-slide-caption">cleo wade</a>
        </div>
        <div class="slider-slide">
          <img class="slider-slide-image" src="./vendor/images/muses/lilit rashoyan.jpg" />
          <a href="https://www.instagram.com/ah_lilit/" target="_blank" class="slider-slide-caption">lilit rashoyan</a>
        </div>
        <div class="slider-slide">
          <img class="slider-slide-image" src="./vendor/images/muses/mia moretti.jpg" />
          <a href="https://www.instagram.com/miamoretti/" target="_blank" class="slider-slide-caption">mia moretti</a>
        </div>
        <div class="slider-slide">
          <img class="slider-slide-image" src="./vendor/images/muses/rihanna.jpg" />
          <a href="https://www.instagram.com/badgalriri/" target="_blank" class="slider-slide-caption">rihanna</a>
        </div>
        <div class="slider-slide">
          <img class="slider-slide-image" src="./vendor/images/muses/olga karput.jpg" />
          <a href="https://www.instagram.com/okarput/" target="_blank" class="slider-slide-caption">olga karput</a>
        </div>
      </div>
    </div>

    <div id="anchor-follow"></div>
    <div class="container-follow" id="container-follow">
      <div class="container-follow-title">FOLLOW US ON</div>
      <a href="https://www.instagram.com/walkofshamemoscow/" target="_blank" class="container-follow-link"><span id="container-follow-link-text">INSTAGRAM</span></a>
    </div>

    <div class="container-stores">
      <div class="container-stores-title">WHERE TO BUY</div>
      <div class="container-stores-zones">
        <div class="container-stores-zones-zone">
          <div class="container-stores-zones-zone-title">RUSSIA</div>
          <div class="container-stores-zones-zone-list">
            <h6>MOSCOW</h6>
            <p>TSUM</p>
            <p>KM-20</p>
            <h6>ST.PETERBURG</h6>
            <p>BABOCHKA GALLERY</p>
            <p>AU PONT ROUGE</p>
            <h6>YAROSLAVL</h6>
            <p>LA SCALA</p>
            <h6>KAZAN</h6>
            <p>VIP</p>
            <h6>NOVOSIBIRSK</h6>
            <p>MONACO</p>
            <p>LUKSE</p>
            <h6>SAMARA</h6>
            <p>VOLNA </p>
            <h6>YUZHNO-SAKHALINSK</h6>
            <p>UNDERGROUND</p>
            <h6>KRASNODAR</h6>
            <p>ETAJI FLOORS</p>
          </div>
        </div>
        <div class="container-stores-zones-zone">
          <div class="container-stores-zones-zone-title">EASTERN EUROPE</div>
          <div class="container-stores-zones-zone-list">
            <h6>MINSK, BY</h6>
            <p>ALINE</p>
            <h6>TBILISI, GE</h6>
            <p>MORE IS LOVE</p>
            <h6>KIEV, UK</h6>
            <p>ASHTIK</p>
            <p>FASHION CLUB</p>
          </div>
        </div>
        <div class="container-stores-zones-zone">
          <div class="container-stores-zones-zone-title">EUROPE</div>
          <div class="container-stores-zones-zone-list">
            <h6>PARIS, FR</h6>
            <p>GALERIES LAFAYETTE</p>
            <h6>MONTECARLO, MC</h6>
            <p>MONACO POPS</p>
            <h6>LONDON, UK</h6>
            <p>SELFRIDGES</p>
            <p>BROWNS</p>
            <p>18 MONTROSE</p>
            <h6>GLASGOW, UK</h6>
            <p class="container-stores-zones-zone-list-b">18 MONTROSE</p>
          </div>
        </div>
        <div class="container-stores-zones-zone">
          <div class="container-stores-zones-zone-title">ASIA</div>
          <div class="container-stores-zones-zone-list">
            <h6>TOKYO, JP</h6>
            <p>RESTIRE</p>
            <h6>SEUL, KR</h6>
            <p>RARE MARKET</p>
            <p>TOM GREYHOUND</p>
            <h6>TAIPEI, TW</h6>
            <p>CLASH</p>
            <h6>PEKIN, CH</h6>
            <p>HIRMOSO</p>
          </div>
        </div>
        <div class="container-stores-zones-zone">
          <div class="container-stores-zones-zone-title">USA</div>
          <div class="container-stores-zones-zone-list">
            <h6>CALIFORNIA</h6>
            <p>ATELIER 7918</p>
            <p>AVANT GARDE</p>
          </div>
        </div>
        <div class="container-stores-zones-zone">
          <div class="container-stores-zones-zone-title">ONLINE</div>
          <div class="container-stores-zones-zone-list">
            <a target="_blank" href="http://www.selfridges.com/">SELFRIDGES.COM</a>
            <a target="_blank" href="http://www.brownsfashion.com/">BROWNSFASHION.COM</a>
            <a target="_blank" href="https://www.farfetch.com/">FARFETCH.COM</a>
            <a target="_blank" href="http://www.km20.ru/">KM20.RU</a>
            <a target="_blank" href="http://thesprezzatura.com/">THESPREZZATURA.COM</a>
          </div>
        </div>
        <div class="container-stores-zones-fake"></div>
        <div class="container-stores-zones-fake"></div>
      </div>
    </div>

    <div class="container-footer">
      <div class="container-footer-contacts">
        <div class="container-footer-contacts-title">CONTACTS</div>
        <a href="mailto:INFO@WALKOFSHAME.MOSCO">INFO@WALKOFSHAME.MOSCOW</a>
        <a href="mailto:PRESS@WALKOFSHAME.MOSCOW">PRESS@WALKOFSHAME.MOSCOW</a>
        <p>WHATSAPP + 7 916 8148867</p>
      </div>
      <div class="container-footer-subscribe">
        <div class="container-footer-subscribe-title">SUBSCRIBE TO THE NEWS AND UPDATES</div>
        <form class="container-footer-subscribe-form" id="subscribe-bottom" action="index.php" method="post">
          <input required class="container-footer-subscribe-form-input" type="email" name="email" placeholder="Email">
          <button class="container-footer-subscribe-form-button" type="submit" name="submit">SUBSCRIBE</button>
        </form>
      </div>
      <div class="container-footer-tcopy">COPYRIGHT &copy; 2016 WALK OF SHAME MOSCOW</div>
      <div class="container-footer-follow">
        <div class="container-footer-follow-title">FOLLOW US</div>
        <div class="container-footer-follow-blocks">
          <a href="https://www.instagram.com/walkofshamemoscow/" target="_blank" class="container-footer-follow-blocks-block">
            <img class="container-footer-follow-blocks-block-icon" src="./vendor/images/insta.svg" />
            <span class="container-footer-follow-blocks-block-text">INSTAGRAM</span>
          </a>
          <a href="https://www.facebook.com/walkofshamemoscow/" target="_blank" class="container-footer-follow-blocks-block">
            <img class="container-footer-follow-blocks-block-icon" src="./vendor/images/fb.svg" />
            <span class="container-footer-follow-blocks-block-text">FACEBOOK</span>
          </a>
          <a href="http://walkofshamemoscow.tumblr.com/" target="_blank" class="container-footer-follow-blocks-block">
            <img class="container-footer-follow-blocks-block-icon" src="./vendor/images/tumblr.svg" />
            <span class="container-footer-follow-blocks-block-text">TUMBLR</span>
          </a>
        </div>
      </div>
      <div class="container-footer-copy">COPYRIGHT &copy; 2016 WALK OF SHAME MOSCOW</div>
    </div>
  </div>

  <div class="viewer">
    <img class="viewer-close" src="./vendor/images/close.svg" />
    <img class="viewer-arrow left" src="./vendor/images/arrow.svg" />
    <img class="viewer-arrow right" src="./vendor/images/arrow.svg" />

    <div class="viewer-images">
      <img class="viewer-images-image left">
      <img class="viewer-images-image center">
      <img class="viewer-images-image right">
    </div>
  </div>
</body>
<script src="./vendor/scripts/jquery.min.js"></script>
<script src="./vendor/scripts/slick.min.js"></script>
<script src="./vendor/scripts/choreographer.min.js"></script>
<!-- <script src="./vendor/scripts/scroll.js"></script> -->
<script src="./vendor/scripts/main.js"></script>
</html>