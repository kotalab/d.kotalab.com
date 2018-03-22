---
layout: post
status: publish
published: true
title: ブックマークレットとURLスキームを組み合わせたらすごく便利だった！
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 11299
wordpress_url: https://kotalab.com/?p=11299
date: '2014-03-29 09:12:31 +0900'
date_gmt: '2014-03-29 00:12:31 +0900'
category:
- iPhoneの使い方
tags:
- Twitter
- seeq
- URLスキーム
- Safari
- Mac
- ブックマークレット
comments: []
---
<p><img alt="" src="https://kotalab.com/wp-content/uploads/slooProImg_20140329091227.jpg" width="548" height="499" class="slooProImg" /><br />
ブラウザで見てるページをツイートしたい。でも、見てるページによってはどこにツイートボタンがあるかわからない。そんなページでもすぐにツイートできたらいいなって思いました。</p>
<p>用意されてるツイートボタンを押すとTwitterのWebからの投稿画面が出てきますよね。僕はあれがどうしても好きになれません。嫌いというかなんとなく違和感を感じちゃいます。</p>
<p>かといってiPhoneのSafariからツイートしようとするとURLしかセットされないしいまいち。<br />
だったら「自分で作るしかない！」と思って調べてるうちにいい感じのができたのでご紹介します！</p>
<p><!--more--></p>
<h2>ツイートするブックマークレット</h2>
<p>最低限これだけは欲しいという機能は記事タイトルと記事URLを載せることです。<br />
Safariから起動できればいいなっていうことでブックマークレットを作ってみることにしました。</p>
<p>作る前に「僕が欲しいのがどっかにあるかも」と思って調べてみたりもしたんですがみつかりません。<br />
こんな感じでTwitterのWebからの投稿画面が開くブックマークレットならありました。</p>
<pre class="width-set:true width:548 lang:default decode:true " title="Twitterでつぶやくブックマークレット" >javascript:window.open('http://twitter.com/home?status=' + encodeURIComponent(document.title + ' %C2%BB ' + location.href));void(0)</pre>
<p>via:<a href="http://blog.yagi2.com/?p=808" target="_blank">今見ているWebページをTwitterでつぶやくブックマークレットを作りました。 &laquo; やぎにいどっとこむ</a><a href="http://b.hatena.ne.jp/entry/http://blog.yagi2.com/?p=808" target="_blank"><img border="0" src="http://b.hatena.ne.jp/entry/image/http://blog.yagi2.com/?p=808" alt="" /></a></p>
<h2>ツイートするURLスキーム</h2>
<p>TwitterのWebの投稿画面がどうも好きになれない僕は、Twitterクライアントを使って投稿したいわけです。<br />
なのでTwitterクライアントのURLスキームを調べて、投稿するURLスキームを探しました。</p>
<pre class="width-set:true width:548 lang:default decode:true " >twitter://post?message=</pre>
<p>これをさっきのTwitterでつぶやくブックマークレットと組み合わせてちょっと編集。<br />
できたコードがこれです！</p>
<pre class="width-set:true width:548 lang:default decode:true " >javascript:location.href='twitter://post?message='+encodeURIComponent(document.title+'%5Cn'+document.URL);</pre>
<h2>動作の内容と流れ</h2>
<p>動作を簡単に説明します。</p>
<ol>
<li>ブックマークレットを起動する</li>
<li>Twitterの公式アプリが起動して投稿画面が開く</li>
<li>投稿画面に見てたページのタイトルとURLがセットされる</li>
</ol>
<p>という感じです。</p>
<h2>MacでもiPhoneでも動くブックマークレット</h2>
<p>念願の<strong>見てるページをタイトルとURLつきでツイートするブックマークレット</strong>を作ることができました！<br />
このブックマークレットはTwitterの公式クライアントが入ってれば、Macでも動きますし、もちろんiPadでも動きます。</p>
<p>まさかMacでも動くと思ってなかったんですが、Macアプリも同じURLスキームだったみたいです。</p>
<p><a href="http://www.lifehacker.jp/2014/03/140326tabroid_iphoneseeq.html" target="_blank">今話題のSeeq+</a>みたいに、内蔵ブラウザにブックマークレットが登録できれば、他のアプリからも起動できちゃいます！<br />
<img alt="" src="https://kotalab.com/wp-content/uploads/slooProImg_20140329091228.jpg" width="300" height="514" class="slooProImg" /></p>
<h2>とっても便利なURLスキーム</h2>
<p>コードの前半の</p>
<pre>twitter://post?message=</pre>
<p>の部分がURLスキームになっているので、この部分を他のアプリに変えればTwitter以外にも投稿できます！</p>
<p>例えばBufferに送るなら</p>
<pre>bufferapp://?u=</pre>
<p>だし、Fasteverに送るなら</p>
<pre>fastever://?text=</pre>
<p>という風に。</p>
<p>テキストを受け取れるURLスキームがあるアプリならどんなアプリでも応用できちゃいます！</p>
<h3>いいのができた！</h3>
<p>これはいいのができた！<br />
と思ってたんですけど、どうやらもう何年も前からあったみたいで。</p>
<p>この記事を書いてる最中にTweetBookmarkletというのを見つけました！<br />
参考記事：<a href="http://iphone.uchi.in/article/225676689.html" target="_blank">iPhoneの世界: お待たせ！TweetBookmarklet Ver.1.3でEchofon対応しました</a><a href="http://b.hatena.ne.jp/entry/http://iphone.uchi.in/article/225676689.html" target="_blank"><img border="0" src="http://b.hatena.ne.jp/entry/image/http://iphone.uchi.in/article/225676689.html" alt="" /></a></p>
<p>探せば大抵のものは見つかるもんですね。<br />
自分で作ってみたことで、色々わかったしそれはそれでよかったかな！</p>
<p>iPhone 5sから<a href="https://itunes.apple.com/jp/app/surupuro-for-ios-buroguedita/id436676299?mt=8&uo=4&at=10l4yU" rel="nofollow" target="_blank">するぷろ for iOS</a>を使って更新しました！</p>
