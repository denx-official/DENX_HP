---
title: サンプル記事
date: 2020-01-15
image: "/image/banner/about_denx.jpg"
draft: true
---

<center><span style="color: red; font-weight: bold; font-size: 2em;">この記事のdraft（下書き）を解除しないでください！</span></center>
<br>
<hr>
<br>

基本的な書き方をここにまとめています。  
他の記事の書き方も参考にしてください。  
<br>
<br>

## HTMLについて
Hugoで書くMarkdownは、<u>HTMLのタグに対応しています。</u>  
直にHTMLを書けば、それが勝手に反応してくれます。便利！  
<br>
<br>

## よく使う記法
- 見出し
  - Markdown: `##, ###, ####, ...`
  - HTML: `<h2></h2>, <h3></h3>, <h4></h4>, ...`
- 改行
  - Markdown: `（半角空白2つ）`
  - HTML: `<br>`
- <b>太字</b>
  - Markdown: `**（ここに文字）**`
  - HTML: `<b></b>`
- <u>下線</u>
  - Markdown: なし
  - HTML: `<u></u>`
- <s>打ち消し線</s>
  - Markdown: `~~（ここに文字）~~`
  - HTML: `<s></s>`
- <span style="color: red; font-weight: bold;">色付き文字</span>
  - Markdown: なし
  - HTML: `<span style="color:（文字色）;></span>`
    - style="" の中ではCSSの記法が使える
- リンク
  - Markdown: `(文字列)[URL]`
  - HTML: `<a href="URL">文字列</a>`
    - aタグ内に、`target="_blank" rel="noopener"`を追加すると、別タブで開くリンクが作れる
- 画像
  - Markdown: `!(文字列)[画像へのURL]`
  - HTML: `<img src="画像へのURL">`

- 箇条書き

```
- 1段目
- 2段目
  - 2-1段目
    - 2-1-1段目 ...
```

```
1. 1段目
2. 2段目
3. 3段目
  - 3-1段目
4. 4段目
```

<br>

他にもいっぱいあるけど、その他は自分で調べてね。  
<br>
<br>

## ルール
### 言葉遣いに注意！！！
このサイトは、いわば<b>DENXの顔</b>のような存在です。  
誰に見られても恥ずかしくないような丁寧な言葉遣い・言い回しを心掛けましょう。  
<br>

### 見出し1（#, `<h1></h1>`）は使わない
見出し1はタイトルに使っているので、<u>見出しは2から使いましょう。</u>  
<br>

### 次の見出しに入るときは改行を入れる
見出しの前段に改行がないと窮屈で見ずらいので、最低1つは改行を入れましょう。  
特に次の見出しが`<h2>`だった場合、改行は2つ入れましょう。  
<br>

### 画像は "/static/image/(各種ファイル)/" に入れる
ファイル分けをしましょう。  
<br>

### 横幅600px以上の画像を使わない
横幅600pxを越える画像を使う場合は、サイズを縮小してから使いましょう。  