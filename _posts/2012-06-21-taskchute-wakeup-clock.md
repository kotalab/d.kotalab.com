---
layout: post
status: publish
published: true
title: 思い立ったらすぐ行動！Taskchuteに起き時計を入れてみた！
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 863
wordpress_url: http://kotalab.com/?p=863
date: '2012-06-21 12:20:17 +0900'
date_gmt: '2012-06-21 03:20:17 +0900'
categories:
- TaskChute
tags:
- カスタマイズ
- 起き時計
comments: []
---
<p>睡眠時間を7時間取ると体調がいいです。@kotala_bです。<br />
@jmatsuzakiさんのブログでTaskchuteに明日の起床時間を表示させているという記事を読みました。<br />
<a href="http://jmatsuzaki.com/archives/4517" target="_blank"><img title="明日の起床時間を表示する２種類の「起き時計」 | jMatsuzaki" src="http://capture.heartrails.com/150x130?http://jmatsuzaki.com/archives/4517" alt="http://jmatsuzaki.com/archives/4517" width="150" height="130" align="left" /></a><a href="http://jmatsuzaki.com/archives/4517" title="明日の起床時間を表示する２種類の「起き時計」 | jMatsuzaki" target="_blank">明日の起床時間を表示する２種類の「起き時計」 | jMatsuzaki</a><br style="clear:both;" />こういう使い方はとても参考になります！<br />
<!--more--></p>
<h2>真似させて頂きます！</h2>
<blockquote class="twitter-tweet" data-in-reply-to="215436500916109312" lang="ja"><p>Taskchuteに起床時間！！これは真似したい！真似させて頂きます！ RT @<a href="https://twitter.com/jmatsuzaki">jmatsuzaki</a> 我、ブログを更新す！ >> 明日の起床時間を表示する２種類の「起き時計」 - <a href="http://t.co/XLKeFTD0" title="http://tinyurl.com/6sxxvev">tinyurl.com/6sxxvev</a></p>
<p>&mdash; kotalaさん (@kotala_b) <a href="https://twitter.com/kotala_b/status/215629997224894464" data-datetime="2012-06-21T02:19:32+00:00">6月 21, 2012</a></p></blockquote>
<p><script src="//platform.twitter.com/widgets.js" charset="utf-8"></script><br />
参考になっても使わなかったら意味がない！<br />
ということで真似させて頂きました！！</p>
<h2>思い立ったらすぐ実行！</h2>
<p>同じものをすぐに作りました！<br />
どれくらいすぐかというと、ツイートしたのが11：19で作ろうとしてスクリーンショットを撮ったのが11：20。<br />
即断即決です！</p>
<h2>作り方は簡単</h2>
<p><a href="http://kotalab.com/wp-content/uploads/okidokei_120621_02.jpg"><img src="http://kotalab.com/wp-content/uploads/okidokei_120621_02.jpg" alt="" title="okidokei_120621_02" width="300" height="225" class="alignnone size-full wp-image-866" /></a><br />
まず現在時刻から下の4セル分を選択しそのまま右隣のセルにコピーします。<br />
<strong>以下の変更はコピーした方のセルで行ってください。</strong><br />
現在時刻と終了予定時刻の項目をそれぞれ睡眠時間・起床時間に変えます。<br />
睡眠時間の下のセルには「<strong>=NOW()</strong>」という数式が入っているので、そこに自分が取りたい睡眠時間を「<strong>7：00</strong>」のように入れます。<br />
起床時間の下のセルには「<strong>=sum(<em>タスクの終了時刻</em>+<em>予定の睡眠時間</em>)</strong>」となるようにセルを指定した数式を入れてください。<br />
これで起床時間がタスクの終了予定時間に合わせて自動的に変わるようになります。</p>
<h2>うまく表示されない場合</h2>
<p><a href="http://kotalab.com/wp-content/uploads/okidokei_120621_01.jpg"><img src="http://kotalab.com/wp-content/uploads/okidokei_120621_01.jpg" alt="" title="okidokei_120621_01" width="400" height="300" class="alignnone size-full wp-image-865" /></a><br />
もしも入力した睡眠時間がうまく表示されない場合は、うまく表示されないセルを選択した状態でセルの書式設定を行ってください。<br />
上記の画像のように、「<strong>ユーザー定義の中からh:mmを選択</strong>」することでうまく表示されるようになります。<br />
<strong>Taskchuteに起き時計</strong>！<br />
あっという間に作れるので、是非作ってみてください！</p>
