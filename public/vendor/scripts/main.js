function subscribe(e){e.children("input").val()?($.ajax({method:"POST",url:"/subscribe",data:{email:e.children("input").val()}}),$(".container-footer-subscribe-form").children("input").prop("disabled",!0).val("Thanks for subscribing!"),$(".container-footer-subscribe-form").children("button").prop("disabled",!0)):alert("Please enter your email")}function renderVideo(){var e=document.createElement("video"),t=document.createAttribute("class"),o=document.createAttribute("autoplay"),i=document.createAttribute("loop");t.value="container-video",e.setAttributeNode(t),e.setAttributeNode(o),e.setAttributeNode(i);var n=document.createElement("source"),r=document.createAttribute("src");r.value="./vendor/videos/wos-video-muted-compressed.mp4",n.setAttributeNode(r),e.appendChild(n),document.getElementById("container").appendChild(e)}function mousemoveAnimations(e){choreographerM.runAnimationsAt(e.clientX)}$("#subscribe-top").submit(function(e){subscribe($(this)),e.preventDefault()}),$("#subscribe-bottom").submit(function(e){subscribe($(this)),e.preventDefault()});var clicking=!1;$(".container-footer-subscribe-form-button").mousedown(function(){clicking=!0,$(".container-footer-subscribe-form").css("background-color","#ef636e"),$(".container-footer-subscribe-form-button").css("color","#ffffff"),$(".container-footer-subscribe-form-input").css("color","#ffffff"),$(".container-footer-subscribe-form-input").addClass("white-placeholder")}),$(".container-footer-subscribe-form-button").mouseup(function(){clicking=!1,$(".container-footer-subscribe-form").css("background-color","#ffffff"),$(".container-footer-subscribe-form-button").css("color","#ef636e"),$(".container-footer-subscribe-form-input").css("color","#000000"),$(".container-footer-subscribe-form-input").removeClass("white-placeholder")}),$(".container-footer-subscribe-form-button").mousemove(function(){clicking&&($(".container-footer-subscribe-form").css("background-color","#ffffff"),$(".container-footer-subscribe-form-button").css("color","#ef636e"),$(".container-footer-subscribe-form-input").css("color","#000000"),$(".container-footer-subscribe-form-input").removeClass("white-placeholder"))}),$(".container-collection-images-image").on("click",function(){function e(e){t=e,o=$(".container-collection-images-image").eq(t.index()-1),i=$(".container-collection-images-image").eq(t.is(":last-child")?0:t.index()+1),$(".viewer-images-image.center").attr("src",t.attr("src")),$(".viewer-images-image.left").attr("src",o.attr("src")),$(".viewer-images-image.right").attr("src",i.attr("src"))}$(".d-viewer").css("display","initial");var t,o,i;e($(this)),$(".viewer-arrow.left").on("click",function(){e(o)}),$(".viewer-arrow.right").on("click",function(){e(i)}),$(".viewer").css("display","block").animate({opacity:1},200)}),$(".viewer-close").on("click",function(){$(".d-viewer").css("display","none"),$(".viewer").animate({opacity:0},200,function(){$(this).css("display","none")})}),$(document).ready(function(){$("#slider").slick({arrows:!1,centerMode:!0,focusOnSelect:!0,infinite:!0,variableWidth:!0})});var musesHeight=900;$(".slider-slide-image").last().on("load",function(){window.innerWidth<768&&$(".slider-slide-image").each(function(){var e=$(this);e.width()>=270&&e.width()<=362&&e.width(.575*e.width())}),window.innerWidth>=1440&&(musesHeight=1108,$(".slider-slide-image").each(function(){var e=$(this);e.width()>=270&&e.width()<=362&&e.width(1.4*e.width())}))});var isSafari=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0;if(isSafari&&$("#container-follow-link-text").css("top","45%"),window.innerWidth>=1280){var isAudio=!1,isAudioOn=!1;$(".container-audio-icon").on("click",function(){isAudioOn?(isAudioOn=!1,$(this).attr("src","../vendor/images/audio-off.svg"),isAudio&&$(".container-audioplayer").trigger("pause")):(isAudioOn=!0,$(this).attr("src","../vendor/images/audio-on.svg"),isAudio?$(".container-audioplayer").trigger("play"):(isAudio=!0,$(".container").append('<audio autoplay loop class="container-audioplayer"><source src="./vendor/audio/wos-audio.mp3" type="audio/mpeg"></audio>')))}),renderVideo();var body=document.body,html=document.documentElement,height=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight),overview=document.getElementById("container-overview"),overviewHeight=parseInt(window.getComputedStyle(overview).getPropertyValue("height")),overviewPaddingTop=parseInt(window.getComputedStyle(overview).getPropertyValue("padding-top")),collection=document.getElementById("container-collection"),collectionHeight=parseInt(window.getComputedStyle(collection).getPropertyValue("height")),collectionPaddingTop=parseInt(window.getComputedStyle(collection).getPropertyValue("padding-top")),collectionTitle=document.getElementById("container-collection-title"),collectionTitleHeight=parseInt(window.getComputedStyle(collectionTitle).getPropertyValue("height")),follow=document.getElementById("container-follow"),followHeight=parseInt(window.getComputedStyle(follow).getPropertyValue("height")),followPaddingTop=parseInt(window.getComputedStyle(follow).getPropertyValue("padding-top")),followPaddingBottom=parseInt(window.getComputedStyle(follow).getPropertyValue("padding-bottom")),pointStartCollection=1.5*window.innerHeight+overviewHeight-collectionTitleHeight/2,pointEndCollection=pointStartCollection+collectionPaddingTop+collectionTitleHeight,pointStartMuses=window.innerHeight+overviewHeight+collectionHeight,pointEndMuses=pointStartMuses+.75*window.innerHeight,pointStartFollow=1.5*window.innerHeight+overviewHeight+collectionHeight+musesHeight-followHeight/2,pointEndFollow=pointStartFollow+followPaddingTop+followHeight,boxShadowScale=function(e){var t=(e.to-e.from)*e.progress+e.from,o="inset 0 0 0 "+t+"px #fff";e.node.style[e.style]=o},choreographerS=new Choreographer({customFunctions:{boxShadowScale:boxShadowScale},animations:[{range:[-1,236],selector:".container-header-title",type:"scale",style:"transform:translateY",from:236,to:0,unit:"px"},{range:[window.innerHeight,1.75*window.innerHeight],selector:".container-header-title",type:"scale",style:"opacity",from:1,to:.75},{range:[window.innerHeight,1.75*window.innerHeight],selector:".container-header-title",type:"scale",style:"background-size",from:50,to:40,unit:"vw"},{range:[1.75*window.innerHeight,height],selector:".container-header-title",type:"change",style:"visibility",to:"hidden"},{range:[window.innerHeight,2*window.innerHeight],selector:".container-overview-portrait",type:"scale",style:"opacity",from:0,to:1},{range:[pointStartCollection,pointEndCollection],selector:".container-collection",type:"scale",style:"opacity",from:0,to:1},{range:[pointStartCollection,pointEndCollection],selector:".container-collection",type:"scale",style:"transform:scale",from:.9,to:1},{range:[pointStartCollection,pointEndCollection],selector:".container-collection",type:"scale",style:"transform:translateY",from:1.25*-(collectionPaddingTop+collectionTitleHeight),to:0,unit:"px"},{range:[pointStartMuses,pointEndMuses],selector:".container-muses",type:"scale",style:"opacity",from:0,to:1},{range:[pointStartFollow,pointEndFollow],selector:".container-follow",type:"scale",style:"top",from:-(followPaddingTop+followHeight),to:0,unit:"px"},{range:[pointStartFollow,pointEndFollow],selector:".container-follow",type:"scale",style:"opacity",from:0,to:1},{range:[pointStartFollow,pointEndFollow],selector:".container-follow",type:"scale",style:"transform:scale",from:.9,to:1},{range:[pointEndFollow,height],selector:".container-follow",type:"change",style:"z-index",to:1},{range:[-1,236],selector:".container-video",type:"change",style:"filter",to:"brightness(0.5)"},{range:[1.5*window.innerHeight,height],selector:".container-video",type:"change",style:"filter",to:"brightness(0.5)"},{range:[-1,237],selector:"#dot-header",type:"change",style:"box-shadow",to:"inset 0 0 0 8px #fff"},{range:[236,2*window.innerHeight],selector:"#dot-header",type:"boxShadowScale",style:"box-shadow",from:8,to:1},{range:[2*window.innerHeight,height],selector:"#dot-header",type:"change",style:"box-shadow",to:"inset 0 0 0 1px #fff"},{range:[-1,236],selector:"#dot-overview",type:"change",style:"box-shadow",to:"inset 0 0 0 1px #fff"},{range:[236,2*window.innerHeight],selector:"#dot-overview",type:"boxShadowScale",style:"box-shadow",from:1,to:8},{range:[2*window.innerHeight-1,pointStartCollection+.5*window.innerHeight],selector:"#dot-overview",type:"boxShadowScale",style:"box-shadow",from:8,to:1},{range:[pointStartCollection+.5*window.innerHeight,height],selector:"#dot-overview",type:"change",style:"box-shadow",to:"inset 0 0 0 1px #fff"},{range:[-1,2*window.innerHeight],selector:"#dot-collection",type:"change",style:"box-shadow",to:"inset 0 0 0 1px #fff"},{range:[2*window.innerHeight,pointStartCollection+.5*window.innerHeight],selector:"#dot-collection",type:"boxShadowScale",style:"box-shadow",from:1,to:8},{range:[pointStartCollection+.5*window.innerHeight-1,pointStartMuses+window.innerHeight],selector:"#dot-collection",type:"boxShadowScale",style:"box-shadow",from:8,to:1},{range:[pointStartMuses+window.innerHeight,height],selector:"#dot-collection",type:"change",style:"box-shadow",to:"inset 0 0 0 1px #fff"},{range:[-1,pointStartCollection+.5*window.innerHeight],selector:"#dot-muses",type:"change",style:"box-shadow",to:"inset 0 0 0 1px #fff"},{range:[pointStartCollection+.5*window.innerHeight,pointStartMuses+window.innerHeight],selector:"#dot-muses",type:"boxShadowScale",style:"box-shadow",from:1,to:8},{range:[pointStartMuses+window.innerHeight-1,pointStartFollow+.5*window.innerHeight],selector:"#dot-muses",type:"boxShadowScale",style:"box-shadow",from:8,to:1},{range:[pointStartFollow+.5*window.innerHeight,height],selector:"#dot-muses",type:"change",style:"box-shadow",to:"inset 0 0 0 1px #fff"},{range:[-1,pointStartMuses+window.innerHeight],selector:"#dot-follow",type:"change",style:"box-shadow",to:"inset 0 0 0 1px #fff"},{range:[pointStartMuses+window.innerHeight,pointStartFollow+.5*window.innerHeight],selector:"#dot-follow",type:"boxShadowScale",style:"box-shadow",from:1,to:8}]});window.addEventListener("scroll",function(){choreographerS.runAnimationsAt(window.pageYOffset)});var choreographerM=new Choreographer({animations:[{range:[-1,window.innerWidth],selector:"#slider",type:"scale",style:"transform:translateX",from:100,to:-100,unit:"px"}]});$("#slider").hover(function(){window.addEventListener("mousemove",mousemoveAnimations,!0)},function(){window.removeEventListener("mousemove",mousemoveAnimations,!0),$(this).css("transform","translateX(0px)")}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top},1e3),!1}})})}