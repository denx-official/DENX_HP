---
title: サンプル記事
date: 2020-01-15
image: /image/about_denx.jpg
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

## Markdownについて
Hugoでは記事をMarkdownで管理します。  
GitHubなんかを使うことになれば、Markdownは頻繁に書くことになると思うので慣れておきましょう。  
<br>
<br>

## HTMLについて
Hugoでは、<u>Markdownの中にHTMLのタグを埋め込むことができます。</u>  
直にHTMLを書けば、それが勝手に反映されます。便利！  
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
  - Markdown: `[文字列](URL)`
  - HTML: `<a href="URL">文字列</a>`
    - aタグ内に、`target="_blank" rel="noopener"`を追加すると、別タブで開くリンクが作れる
- 画像
  - Markdown: `![文字列](画像へのURL)`
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
見出し1はタイトルに使っているので、<u>見出しは2番（##, `<h2></h2>`）から使いましょう。</u>  
<br>

### 一文書いたら改行を入れる
Markdownでは、.mdファイル内でただ改行しただけでは、ページ上で記事を表示する際に改行されません。  
例えば、  

```
こういう感じに
.mdファイル内に
書いたと
しても
```

ページ上の表示は、以下のようになります。  

```
こういう感じに .mdファイル内に 書いたと しても
```

<br>

なので、<span style="color: red; font-weight: bold;">文末には必ず半角空白を2つ入れて、改行をしてください。</span>  
<br>

### 次の見出しに入るときは改行を入れる
見出しの前段に改行がないと窮屈で見ずらいので、最低1つは改行を入れましょう。  
特に次の見出しが`<h2>`の場合は、改行を2つ入れましょう。  
<br>
<br>

## 記事の書き方
### 1．Netlify CMSにログイン
まず、[https://denx.netlify.app/admin](/admin/)にアクセス。  
記事の書き方スライドにあるメアドとパスワードを使ってCMSにログインします。  
<br>

### 2．サンプル記事の熟読
この記事です、読みましょう。  
<br>

### 3．記事の作成・修正
新しく記事を書く場合は、左側のCollectionsからカテゴリを選択し、<span style="color: red; font-weight: bold;">"New Content"</span> をクリックすると、新しい記事が書けます。  
<br>
記事が書けたら、<b>下書きをオンにして</b>保存してください。  
<br>

### 4．報告
記事が書けた旨をサイト管理者に報告してください。  
記事の内容について修正依頼があれば、それに従って記事を書き直しましょう。  
<br>
管理者の確認が通れば、記事は公開されます。お疲れ様です。  
<br>
<br>

## 画像の貼り方
記事編集画面の本文のメニューバーのトグルを<b>Rich Text</b>に合わせて、プラスボタンを選択すると、<b>Image</b>と出てくるのでクリック。  

![本文メニューバー](/image/text_menu.jpg "本文メニューバー")

<br>

すると、現在のカーソル位置に画像を挿入するためのフォームが出ててきます。  

![画像投稿](/image/image_form.jpg "画像投稿")

<br>

<b>Choose an image</b>をクリックすると、どの画像を使うか聞かれます。  

![アップロード](/image/upload.jpg "アップロード")

<br>

新規で画像を投稿する場合は、右上の<b>Upload</b>ボタンをクリックして、画像をアップして使用してください。  
Alt TextとTitleは各自で入力してください。  