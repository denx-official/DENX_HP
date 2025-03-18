---
title: 3DCG
date: 2022-12-02T07:10:25.166Z
image: /image/3dcg.png
draft: false
---
 ﻿ 
会員が制作したCG作品の一部を公開しています。  

<div class="illust-container">
    <div class="illust-button"><img id="grid-05" onclick="clickedImage('grid-09');" src="/image/3DCG_SoftServeIceCream.jpeg"></div>
    <div class="illust-button"><img id="grid-05" onclick="clickedImage('grid-08');" src="/image/3DCG_Jelly.png"></div>
    <div class="illust-button"><img id="grid-05" onclick="clickedImage('grid-07');" src="/image/3DCG_Hairpin.png"></div>
    <div class="illust-button"><img id="grid-05" onclick="clickedImage('grid-06');" src="/image/3DCG_Chocolate.png"></div>
    <div class="illust-button"><img id="grid-05" onclick="clickedImage('grid-05');" src="/image/VRcG_2022_01.png"></div>
    <div class="illust-button"><img id="grid-04" onclick="clickedImage('grid-04');" src="/image/VRcG_2022_02.png"></div>
    <div class="illust-button"><img id="grid-03" onclick="clickedImage('grid-03');" src="/image/VRcG_2022_03.png"></div>
    <div class="illust-button"><img id="grid-02" onclick="clickedImage('grid-02');" src="/image/VRcG_2022_04.png"></div>
    <div class="illust-button"><img id="grid-01" onclick="clickedImage('grid-01');" src="/image/VRcG_2022_05.png"></div>

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
