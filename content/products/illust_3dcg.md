---
title: イラスト・3DCG
date: 2020-11-25T20:58:19.447Z
image: /image/illust.jpg
draft: false
---

<div class="illust-container">
    <div class="illust-button"><img id="grid-1" onclick="clickedImage('grid-1');" src="/image/tsuno_denxchan.png"></div>
    <div class="illust-button"><img id="grid-2" onclick="clickedImage('grid-2');" src="/image/illust_ramune_00.png"></div>
    <div class="illust-button"><img id="grid-3" onclick="clickedImage('grid-3');" src="/image/laisa_1.jpg"></div>
    <div class="illust-button"><img id="grid-4" onclick="clickedImage('grid-4');" src="/image/nanari_1.jpg"></div>
    <div class="illust-button"><img id="grid-5" onclick="clickedImage('grid-5');" src="/image/laisa_2.jpg"></div>
    <div class="illust-button"><img id="grid-6" onclick="clickedImage('grid-6');" src="/image/ramune_robo_den.png"></div>
</div>

<div class="popup" id="js-popup">
    <div class="popup-inner">
        <a><img id="popup-image" src=""></a>
    </div>
    <div class="black-background" id="js-black-bg"></div>
</div>

<style type="text/css">
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: .6s;
}
.popup.is-show {
  opacity: 1;
  visibility: visible;
}
.popup-inner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 80%;
  max-width: 600px;
  padding: 50px;
  background-color: #fff;
  z-index: 2;
}
.popup-inner img {
  width: 100%;
}
.black-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.8);
  z-index: 1;
  cursor: pointer;
}
</style>

<script type="text/javascript" src="/js/popupImage.js"></script>