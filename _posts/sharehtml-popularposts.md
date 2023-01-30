---
layout: post
status: publish
published: true
title: Sharehtmlを見直してたらPopularPostsに似てることに気づいた！同じように自動で画像表示出来ないか調べてみた！
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 3140
wordpress_url: https://kotalab.com/?p=3140
date: '2012-10-05 16:00:11 +0900'
date_gmt: '2012-10-05 07:00:11 +0900'
category:
- WordPressカスタマイズ
tags:
- sharehtml
comments: []
---
<p><a href="/wp-content/uploads/sharehtml_121005.jpg"><img src="/wp-content/uploads/sharehtml_121005.jpg" alt="" title="sharehtml_121005" width="448" height="298" class="alignnone size-full wp-image-3165" /></a><br />
<span style="font-size:10px;"><a href="https://www.flickr.com/photos/yourdon/3088582622/" target="_blank">Sharing music, Roman style</a> / Ed Yourdon</span><br />
記事のリンクにはSharehtmlが欠かせません。@kotala_bです。<br />
Sharehtmlに関することが昨日2つのブログに取り上げられていました。<br />
@ozpaさんの<a href="http://ozpa-h4.com" target="_blank">OZPAの表4</a>と@delaymaniaさんの<a href="http://delaymania.com" target="_blank">delaymania.com</a>です。<br />
</p>
<!--more-->
<h2>Sharehtmlの画像を変える</h2>
<p>Sharehtmlで表示される画像を任意の画像に変えるという方法です。<br />
<a href="http://ozpa-h4.com/2012/10/04/share-html-one-device/" target="_blank"><img src="https://capture.heartrails.com/150x130?http://ozpa-h4.com/2012/10/04/share-html-one-device/" alt="http://ozpa-h4.com/2012/10/04/share-html-one-device/" width="150" height="130" align="left" /></a><a href="http://ozpa-h4.com/2012/10/04/share-html-one-device/" target="_blank">平均PVを上げるために「ShareHTML」でリンクタグを作成する際に加えている一工夫 | OZPAの表4</a><br style="clear:both;" /><br />
<a href="http://delaymania.com/201210/blog/sharehtml_ozpa/" target="_blank"><img src="https://capture.heartrails.com/150x130?http://delaymania.com/201210/blog/sharehtml_ozpa/" alt="http://delaymania.com/201210/blog/sharehtml_ozpa/" width="150" height="130" align="left" /></a><a href="http://delaymania.com/201210/blog/sharehtml_ozpa/" target="_blank">OZPAの表4の記事を読んでShareHTMLをさらに改良しました | delaymania.com</a><br style="clear:both;" /><br />
僕は全部を任意の画像に変えることはせず、自分のブログ内のリンクにだけそのページのアイキャッチ画像を表示させるように変えてみます。<br />
今までこうだったのが<br />
<a href="/task-management-reason" target="_blank"><img src="https://capture.heartrails.com/150x130?https://kotalab.com/archives/3121" alt="https://kotalab.com/archives/3121" width="150" height="130" align="left" /></a><a href="/task-management-reason" target="_blank">僕がタスク管理をする理由 | kotala's note</a><br style="clear:both;" />こういう風に変わりました。<br />
<a href="/task-management-reason" target="_blank"><img src="/wp-content/uploads/taskstart_20121005.jpg" alt="https://kotalab.com/archives/3121" width="150" align="left" /></a><a href="/task-management-reason" target="_blank">僕がタスク管理をする理由 | kotala's note</a><br style="clear:both;" /><br />
何か見たことあるなーと思ったらすぐ横のサイドバーに似たモノを発見！</p>
<h2>よく見たら似てた</h2>
<p>よく見たらサイドバーで使ってる「<strong>PopularPosts</strong>」と似てる！<br />
そこで考えました。<br />
PopularPostsでアイキャッチ画像を任意のサイズで自動的に表示出来ているように、Sharehtmlを使った時も同じように表示出来ないか。<br />
Sharehtmlのimgタグ内にある</p>
<pre>
img src="hogehoge"
</pre>
<p>このhogehogeの部分にアイキャッチ画像を自動で入れられないか考えました。<br />
アイキャッチ画像のurlをコピペして貼付けるのもいいんですが、自動で出来たらもっといい！</p>
<h2>ここで足踏み</h2>
<p>思いついたのはいいものの、やり方がわからない！<br />
google先生に聞いてみてもチンプンカンプン。<br />
どうやら「<strong>get_the_post_thumbnail</strong>」を<strong>使うらしい</strong>といことまではわかりました。<br />
が、その先がわかりません！<br />
というわけでわかるまでは手動で画像urlをコピペします。<br />
詳しい方がいたら連絡お待ちしております！</p>
