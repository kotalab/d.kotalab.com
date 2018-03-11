---
layout: post
status: publish
published: true
title: Wordpressで前後の記事へのリンクを作る方法！やってみたらすごく簡単だった！
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 1313
wordpress_url: http://kotalab.com/?p=1313
date: '2012-07-08 12:26:46 +0900'
date_gmt: '2012-07-08 03:26:46 +0900'
categories:
- WordPressカスタマイズ
tags:
- 自動でリンク
comments: []
---
<p><a href="http://kotalab.com/wp-content/uploads/link_120708.jpg" target="_blank"><img src="http://kotalab.com/wp-content/uploads/link_120708.jpg" alt="" title="link_120708" width="448" height="336" class="alignnone size-full wp-image-1330" /></a><br />
<span style="font-size:10px;"><a href="http://www.flickr.com/photos/stickergiant/3769771267/" target="_blank">WordPress Stickers Everywhere</a> / teamstickergiant</span><br />
最近ブログの細かいところに手を加えています。@kotala_bです。<br />
ブログを弄っていて気づいたのですが、当ブログ「<a href="http://kotalab.com" title="トップページへ" target="_blank">kotala's note</a>」には前後の記事へのリンクがない！<br />
ダウンロードして見つけてきたテンプレートを使用しているのですが、最近までずっとそのことに気づいていませんでした！<br />
<!--more--></p>
<h2>気づいたらなかった！</h2>
<p>自分の記事を見ていて何か足りないなと気づいて、何だろうと考えてたら見つかりました！<br />
前後の記事へのリンクがありませんでした！<br />
なので早速導入！</p>
<h2>とっても簡単！</h2>
<p>参考にしたのはこちらの記事です！<br />
ありがとうございます！<br />
<del datetime="2013-07-26T07:14:47+00:00">ワードプレスで「次の記事」「前の記事」を表示するコード | REWORDS（リワード）</del></p>
<hr>
<p>追記：<br />
リンク先のページが無くなってしまったためリンクを消しました。</p>
<hr>
<p>やり方はとっても簡単！<br />
以下のコードを表示させたい部分に貼りつけるだけ！<br />
[php]<br />
<?php previous_post_link(); ><br />
<?php next_post_link(); ><br />
[/php]<br />
このコードを貼りつけると記事タイトルにリンクが貼られた形になります。<br />
この形を導入しました！</p>
<h2>指定した文字にリンクを貼る</h2>
<p>他にもやり方があって、指定した文字にリンクを貼る方法はこちらのコードです。<br />
[php]</p>
<php previous_post_link('%link', '&amp;laquo; 前の記事へ', TRUE); >
<php next_post_link('%link ', '次の記事へ &amp;raquo', TRUE); >
[/php]</p>
<h2>カテゴリ別のリンクを貼る</h2>
<p>カテゴリ別の前後記事にリンクを貼る方法はこちらのコードです。<br />
[php]<br />
<?php previous_post_link('&laquo; %link', '%title', TRUE, ''); ><br />
<?php next_post_link('%link &raquo;', '%title', TRUE, ''); ><br />
[/php]</p>
<h2>最後に</h2>
<p>コードをコピペするだけで簡単に作れました！<br />
まだの方は是非どうぞ！</p>
