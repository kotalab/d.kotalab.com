---
layout: post
status: publish
published: true
title: WordPressブログにプラグインなしでTwitterアカウント名のリンクを自動で貼る方法
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 2588
wordpress_url: https://kotalab.com/?p=2588
date: '2012-09-07 18:39:23 +0900'
date_gmt: '2012-09-07 09:39:23 +0900'
category:
- WordPressカスタマイズ
tags:
- Twitter＠AnywherePlus
- プラグインなし
comments: []
---
<p><a href="https://kotalab.com/wp-content/uploads/link_120708.jpg" target="_blank"><img src="https://kotalab.com/wp-content/uploads/link_120708.jpg" alt="" title="link_120708" width="448" height="336" class="alignnone size-full wp-image-1330" /></a><br />
<span style="font-size:10px;"><a href="https://www.flickr.com/photos/stickergiant/3769771267/" target="_blank">WordPress Stickers Everywhere</a> / teamstickergiant</span><br />
ブログ内のツイッターアカウントのリンク表示としてwordpressプラグインの「<strong>Twitter  Plus</strong>」を使っていました。@kotala_bです。<br />
Twitterアカウントの上にマウスを置くと「Hovercards」と言われるカードが表示されるのが気に入ってこのブログではずっと使っていました。<br />
そんな「<strong>Twitter ＠Anywhere Plus</strong>」ですが、サービスの提供を終了するというニュースが流れました。<br />
<a href="http://www.itmedia.co.jp/news/articles/1209/07/news039.html" target="_blank"><img src="https://capture.heartrails.com/150x130?http://www.itmedia.co.jp/news/articles/1209/07/news039.html" alt="http://www.itmedia.co.jp/news/articles/1209/07/news039.html" width="150" height="130" align="left" /></a><a href="http://www.itmedia.co.jp/news/articles/1209/07/news039.html" target="_blank">Twitter、WebサイトにTwitter機能を埋め込む「＠Anywhere」を終了　12月6日までに移行を - ITmedia ニュース</a><br style="clear:both;" />そこで「<strong>Twitter ＠Anywhere Plus</strong>」に代わる方法を探し導入しましたので紹介します。<br />
</p>
<!--more-->
<h2>Twitter ＠Anywhere Plusに代わる方法</h2>
<p>参考にしたのはこちら。<br />
<a href="http://kachibito.net/wordpress/automatically-link-twitter.html" target="_blank"><img src="https://capture.heartrails.com/150x130?http://kachibito.net/wordpress/automatically-link-twitter.html" alt="http://kachibito.net/wordpress/automatically-link-twitter.html" width="150" height="130" align="left" /></a><a href="http://kachibito.net/wordpress/automatically-link-twitter.html" target="_blank">WordPressで記事内に書かれたTwitterアカウント名を、＠Anywhereを使わずに自動リンク化する - かちびと.net</a><br style="clear:both;" />正規表現で＠から始まる文字を探し変換する方法です。</p>
<h2>実際にやってみました</h2>
<p>まずはプラグインの停止から。<br />
「<strong>Twitter ＠Anywhere Plus</strong>」を停止させます。<br />
▼「インストール済みプラグイン」の一覧から「<strong>Twitter ＠Anywhere Plus</strong>」を停止させます。<br />
<a href="https://kotalab.com/wp-content/uploads/twitterLink_120905_02.jpg" target="_blank"><img src="https://kotalab.com/wp-content/uploads/twitterLink_120905_02.jpg" alt="" title="twitterLink_120905_02" width="448" height="200" class="alignnone size-full wp-image-2591" /></a><br />
停止させたら次は<strong>functions.php</strong>にコードを追記します。<br />
▼<strong>functions.php</strong>はテーマ編集画面に進み、右側にある「テーマのための関数」という場所です。<br />
<a href="https://kotalab.com/wp-content/uploads/twitterLink_120905_03.jpg" target="_blank"><img src="https://kotalab.com/wp-content/uploads/twitterLink_120905_03.jpg" alt="" title="twitterLink_120905_03" width="224" height="300" class="alignnone size-full wp-image-2589" /></a><br />
<strong>functions.php</strong>を開くとコードがズラッと書かれています。<br />
▼一番下までスクロールし、「<strong>？＞</strong>」という部分の手前にコードを貼りつけていきます。<br />
<a href="https://kotalab.com/wp-content/uploads/twitterLink_120905_01.jpg" target="_blank"><img src="https://kotalab.com/wp-content/uploads/twitterLink_120905_01.jpg" alt="" title="twitterLink_120905_01" width="448" height="336" class="alignnone size-full wp-image-2590" /></a><br />
わかりづらい方は画像をクリックすると拡大しますので、そちらをご覧ください。</p>
<h2>付けたし</h2>
<p>記述するコードですが、僕は<a href="http://kachibito.net/wordpress/automatically-link-twitter.html" target="_blank">かちびと.net</a>さんで書かれているコードに少しだけ付けたしをしました。<br />
まず自分で編集した場所と内容がわかるように「/<em>twitter</em>/」というようにコメントを書きました。<br />
それと<a href="http://kachibito.net/wordpress/automatically-link-twitter.html" target="_blank">かちびと.net</a>さんのコードのままですとリンク先が同じ窓で表示されてしまうので、タグ内に「target="<em>blank"」を追加して別窓で表示されるように変えました。<br />
僕が<strong>function.php</strong>内に書きたしたソースはこちらです。<br />
[php]<br />
/*******************************<br />
  twitter<br />
********************************/<br />
function add_twitter_link($content) {<br />
    $pattern= '/(?<=^|(?<=[^a-zA-Z0-9-_&#46;]))@([A-Za-z]+[A-Za-z0-9</em>]+)/i';<br />
    $replace= '@<a href="https://www.twitter.com/$1" target="_blank">$1</a>';<br />
    $content= preg_replace($pattern, $replace, $content);<br />
    return $content;<br />
}</p>
<p>add_filter( "the_content", "add_twitter_link" );<br />
[/php]</p>
<h2>まとめ</h2>
<p>これで「<strong>Twitter ＠Anywhere Plus</strong>」を外してもTwitterアカウントへ自動でリンクをつけることが出来るようになりました。<br />
<strong>＠Anywhere</strong>が終了してしまいますので使っている方は12月6日までに移行をすませましょう！</p>
