---
layout: post
status: publish
published: true
title: GunosyとEvernoteを連携！Evernoteへ自動で入れていつでも見れるようにする方法！※追記あり！
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 3879
wordpress_url: https://kotalab.com/?p=3879
date: '2012-11-01 12:20:25 +0900'
date_gmt: '2012-11-01 03:20:25 +0900'
category:
- iPhoneアプリ
tags:
- Evernote
- Gunosy
- IFTTT
ogImage:
  url:
comments:
- id: 2043
  author: "Gunosy&atilde;\x82\x92&auml;&frac12;&iquest;&atilde;\x81&pound;&atilde;\x81&brvbar;&atilde;\x81&iquest;&atilde;\x82\x8B
    &mdash; Toro&atilde;\x81&uml;&atilde;\x83\x88&atilde;\x83&shy;&atilde;\x81&macr;&eacute;\x9B&raquo;&aring;&shy;\x90&aelig;&copy;\x9F&aelig;&cent;&deg;&atilde;\x81&reg;&aring;&curren;&cent;&atilde;\x82\x92&egrave;&brvbar;\x8B&atilde;\x82\x8B&atilde;\x81\x8B"
  author_email: ''
  author_url: http://106n.net/toro/blog/?p=974
  date: '2013-06-26 21:42:32 +0900'
  date_gmt: '2013-06-26 12:42:32 +0900'
  content: "[...]  Gunosy&atilde;\x81&uml;Evernote&atilde;\x82\x92&eacute;\x80&pound;&aelig;\x90&ordm;&iuml;&frac14;\x81Evernote&atilde;\x81&cedil;&egrave;\x87&ordf;&aring;\x8B\x95&atilde;\x81&sect;&aring;\N&yen;&atilde;\x82\x8C&atilde;\x81&brvbar;&atilde;\x81\x84&atilde;\x81&curren;&atilde;\x81&sect;&atilde;\x82\x82&egrave;&brvbar;\x8B&atilde;\x82\x8C&atilde;\x82\x8B&atilde;\x82\x88&atilde;\x81\x86&atilde;\x81&laquo;&atilde;\x81\x99&atilde;\x82\x8B&aelig;\x96&sup1;&aelig;&sup3;\x95&iuml;&frac14;\x81&acirc;\x80&raquo;&egrave;&iquest;&frac12;&egrave;&uml;\x98&atilde;\x81\x82&atilde;\x82\x8A&iuml;&frac14;\x81
    &#8211; kotaka&#8217;s note  [...]"
- id: 2059
  author: "Gunosy&atilde;\x81&reg;&eacute;\x80\x9A&ccedil;\x9F&yen;&atilde;\x82\x92evernote&atilde;\x81&laquo;&eacute;\x80\x81&atilde;\x82\x8B&iuml;&frac14;\x88&aring;&curren;&plusmn;&aelig;\x95\x97&iuml;&frac14;\x89
    &mdash; Toro&atilde;\x81&uml;&atilde;\x83\x88&atilde;\x83&shy;&atilde;\x81&macr;&eacute;\x9B&raquo;&aring;&shy;\x90&aelig;&copy;\x9F&aelig;&cent;&deg;&atilde;\x81&reg;&aring;&curren;&cent;&atilde;\x82\x92&egrave;&brvbar;\x8B&atilde;\x82\x8B&atilde;\x81\x8B"
  author_email: ''
  author_url: http://106n.net/toro/blog/?p=1052
  date: '2013-07-10 20:15:58 +0900'
  date_gmt: '2013-07-10 11:15:58 +0900'
  content: "[...] \x81Gunosy&atilde;\x81&uml;Evernote&atilde;\x82\x92&eacute;\x80&pound;&aelig;\x90&ordm;&iuml;&frac14;\x81Evernote&atilde;\x81&cedil;&egrave;\x87&ordf;&aring;\x8B\x95&atilde;\x81&sect;&aring;\N&yen;&atilde;\x82\x8C&atilde;\x81&brvbar;&atilde;\x81\x84&atilde;\x81&curren;&atilde;\x81&sect;&atilde;\x82\x82&egrave;&brvbar;\x8B&atilde;\x82\x8C&atilde;\x82\x8B&atilde;\x82\x88&atilde;\x81\x86&atilde;\x81&laquo;&atilde;\x81\x99&atilde;\x82\x8B&aelig;\x96&sup1;&aelig;&sup3;\x95&iuml;&frac14;\x81&acirc;\x80&raquo;&egrave;&iquest;&frac12;&egrave;&uml;\x98&atilde;\x81\x82&atilde;\x82\x8A&iuml;&frac14;\x81
    &#8211; kotaka&#8217;s note [...]"
---
<p><a href="/wp-content/uploads/smartever_120726.jpg" target="_blank"><img src="/wp-content/uploads/smartever_120726.jpg" alt="" title="smartever_120726" width="448" height="299" class="alignnone size-full wp-image-1677" /></a><br />
<span style="font-size:10px;"><a href="https://www.flickr.com/photos/othree/6353586689/" target="_blank">Evernote Taiwan User Meetup</a> / othree</span><br />
Gunosy2日目です。@kotala_bです。<br />
毎日送られてくるGunosyをEvernoteへ貯たらライフログのひとつとして面白いなと思いました。<br />
そこでGunosyはメールで送られてくるサービスということを利用して、自動的にEvernoteへ入れていつでも見返すことが出来るようにしました！<br />
その方法を紹介します！<br />
</p>
<!--more-->
<h2>メールで送られてくることを利用する</h2>
<p>Gunosyは<strong>メールで送られてくる</strong>ので、見るにはメールをチェックするしかありません。<br />
Evernoteへどうやって入れるのかまず思いついたのが、受信メールアドレスをEvernoteのモノにする方法です。<br />
こうしておけば指定した時間にEvernoteへ送られてきます。<br />
タグ付けをしたり専用ノートブックを作って入れておけば後から見返すのにも役立ちます。<br />
ちょっと不便なのはタグ付けやノートブックの指定が手動なこと。<br />
もうちょっと便利に自動化させたいと思います。</p>
<h2>IFTTTを使ってメールをEvernoteへ転送する</h2>
<p>タグやノートブックを指定してEvernoteへ送るならIFTTTがいいのでこの方法を試してみました。<br />
まずはGunosyの受信先をgmailへ変更します。<br />
そしてラベル機能を使って、gunosy.comから届いたメールにGunosyというラベルを付けるように設定します。<br />
ラベルとフィルタの使い方はこちらを参考に。<br />
<a href="http://blog.kushii.net/archives/1675403.html" target="_blank"><img  class="alignleft" src="https://capture.heartrails.com/150x130?http://blog.kushii.net/archives/1675403.html" alt="今さら聞けない！基本的なGmailのラベル付けとフィルタの使い方 - 941::blog" width="150" height="130" /></a><a href="http://blog.kushii.net/archives/1675403.html" target="_blank">今さら聞けない！基本的なGmailのラベル付けとフィルタの使い方 - 941::blog</a><a href="https://b.hatena.ne.jp/entry/http://blog.kushii.net/archives/1675403.html" target="_blank"><img border="0" src="https://b.hatena.ne.jp/entry/image/http://blog.kushii.net/archives/1675403.html" alt="" /></a><br style="clear:both;" />Gmailで設定したフィルタはこちら。<br />
「<strong>条件: from:(@gunosy.com) subject:(*まとめが更新されました。)</strong>」<br />
「<strong>処理: ラベル「Gunosy」を付ける</strong>」<br />
次はIFTTTで設定を行います。<br />
IFTTTを使ったgmailとEvernoteの連携はこちらを参考に。<br />
<a href="http://mag.torumade.nu/?p=6967" target="_blank"><img  class="alignleft" src="https://capture.heartrails.com/150x130?http://mag.torumade.nu/?p=6967" alt="iftttのタスクを作成してGmailで受信したメールをEvernoteにバックアップしてみよう | crocodile notebook [ 鰐ノート ]" width="150" height="130" /></a><a href="http://mag.torumade.nu/?p=6967" target="_blank">iftttのタスクを作成してGmailで受信したメールをEvernoteにバックアップしてみよう | crocodile notebook [ 鰐ノート ]</a><a href="https://b.hatena.ne.jp/entry/http://mag.torumade.nu/?p=6967" target="_blank"><img border="0" src="https://b.hatena.ne.jp/entry/image/http://mag.torumade.nu/?p=6967" alt="" /></a><br style="clear:both;" />こちらでは「backup」というラベルを付けていますが、今回は「Gunosy」というラベルにします。<br />
送られてきたのがこのノートです。<br />
<a href="https://www.evernote.com/shard/s110/sh/df2a06d9-7345-44f2-9a19-96c30b0edd5f/db1f873f5225b19bd023db155e25c35a" target="_blank">11/1のGunosy</a><br />
文字だけ！読みづらいなんてもんじゃない！<br />
ということで改良します。</p>
<h2>改良します</h2>
<p>IFTTTを使ってEvernoteのメールアドレスへ送信する方法ならうまくいくようなので試してみます！<br />
やり方はこちらを参考に。<br />
<span class="removed_link" title="katamarinokatamari.blog.fc2.com/blog-entry-72.html"><img  class="alignleft" src="https://capture.heartrails.com/150x130?http://katamarinokatamari.blog.fc2.com/blog-entry-72.html" alt="#068 続き/iftttにevernoteのメールを設定する方法。 カタマリのカタマリ" width="150" height="130" /></span><span class="removed_link" title="katamarinokatamari.blog.fc2.com/blog-entry-72.html">#068 続き/iftttにevernoteのメールを設定する方法。 カタマリのカタマリ</span><a href="https://b.hatena.ne.jp/entry/http://katamarinokatamari.blog.fc2.com/blog-entry-72.html" target="_blank"><img border="0" src="https://b.hatena.ne.jp/entry/image/http://katamarinokatamari.blog.fc2.com/blog-entry-72.html" alt="" /></a><br style="clear:both;" />Evernoteへメールを送信する場合、件名に@と#をつけるとノートブックとタグの指定が可能です。<br />
そのことを利用して、「<strong>Gunosy_日付@inbox#Gunosy</strong>」という件名でEvernoteへメールを送ると「<strong>inboxというノートブックへ、Gunosyというタグをつけて、Gunosy_日付というタイトルのノート</strong>」が作成されます。<br />
お試しということで他のメールにラベルを付けて送りました。<br />
▼送られてきたノートがこちら<br />
<a href="/wp-content/uploads/gunosy_121101_02.png" target="_blank"><img src="/wp-content/uploads/gunosy_121101_02.png" alt="" title="gunosy_121101_02" width="448" height="336" class="alignnone size-full wp-image-3887" /></a><br />
タイトル、ノートブック、タグと全て指定通りに、Gmailに届いたカタチをそのままEvernoteへ転送することが出来ました。<br />
これで明日から<strong>自動で指定したノートブックに届きます</strong>。<br />
<strong>11月9日追記：試したメールでは改行が入りましたが、後日Gmailからの転送メールをEvernoteで見たところ改行が入りませんでした。<br />
現在はGunosyに登録したメールアドレスをEvernoteのアドレスに変えて使っています。</strong></p>
<h2>まとめ</h2>
<p>GunosyをEvernoteへ自動で送信する方法をご紹介しました。<br />
最初にちょっとした手間をかけることで、ノートブックやタグもあらかじめ指定したモノへ全てが自動化出来るのでとっても便利です！<br />
ライフログとしてGunosyを見返すなら、毎日送られてきたものをEvernoteへ貯めて見れるようにしておきましょう！<br />
<del datetime="2012-12-21T14:49:47+00:00">今回一番最後に紹介したIFTTTのレシピを公開しています。<br />
共有レシピはこちら<br />
よかったら使ってください！</del></p>
<hr>
<p><strong>追記</strong><br />
試した時はうまくいきましたが、後日にこのレシピを使ってみるとEvernoteへ転送すると改行が入りませんでした。<br />
申し訳ありませんが共有を解除します。</p>
<hr>
