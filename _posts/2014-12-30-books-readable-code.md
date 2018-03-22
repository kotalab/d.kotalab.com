---
layout: post
status: publish
published: true
title: '優れたコードを書くための3つのコツ - リーダブルコード '
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 13695
wordpress_url: https://kotalab.com/?p=13695
date: '2014-12-30 14:24:14 +0900'
date_gmt: '2014-12-30 05:24:14 +0900'
category:
- アプリ開発の本
tags:
- アプリ開発
- Swift
- アプリ道場
comments: []
---
<p><img src="https://kotalab.com/wp-content/uploads/books-readable-code_20141230-780x520.jpg" alt="books-readable-code_20141230" width="780" height="520" class="aligncenter size-large wp-image-13702" /><br />
アプリ開発を始めて1年目の僕はまだまだ経験も浅く、コードの書き方はわかってもどんなコードがいいコードなのかわからない。</p>
<p>どんなコードがいいコードなのか、どんなコードを書くのがいいのかを知りたかった僕は、<a href="https://kotalab.com/category/ios-developer/app-dojo">アプリ道場</a>の忘年会で知った「<a href="https://www.amazon.co.jp/exec/obidos/asin/4873115655/same-22/" rel="nofollow" target="_blank">リーダブルコード</a>」という本を読んでみた。</p>
<p>リーダブルコードにはこのようなことが最初に書いてある。</p>
<blockquote><p>コードは理解しやすくなければならない。<br />
via:<a href="https://www.amazon.co.jp/exec/obidos/asin/4873115655/same-22/" rel="nofollow" target="_blank">リーダブルコード</a> P.2</p></blockquote>
<p>優れたいいコードというのは他人が理解しやすく、短時間で理解できるコードなのだという。<br />
個人で開発していれば他人のことを考える必要はないと思うかもしれない。<br />
だが、ここでいう他人というのは半年後の自分も含まれている。</p>
<p>「<a href="https://www.amazon.co.jp/exec/obidos/asin/4873115655/same-22/" rel="nofollow" target="_blank">リーダブルコード</a>」に書かれていた優れたコードを書くためのコツを紹介したい。<br />
<!--more--></p>
<h2>1.名前に意味を持たせる</h2>
<pre class="lang:default decode:true " >func a (number:Int) ->Int {
    return number * 1000
}</pre>
<p>上記はSwiftで書かれた、受け取った数値を1000倍にして返す「a」という関数だ。</p>
<p>処理はすごく単純だが、この「a」という関数を呼び出すときには、どんな処理が行われるかを想像するのは難しいだろう。<br />
ではもう少しわかりやすくしてみよう。</p>
<pre class="lang:default decode:true " >func calculator (number:Int) ->Int {
    return number * 1000
}</pre>
<p>中の処理は変わらないが関数名を「a」から「calculator」に変えてみた。</p>
<p>こうすれば「calculator」を呼び出すときには何か計算をしてくれるということがわかるだろう。</p>
<p>更にもう少しわかりやすくしてみよう。</p>
<pre class="lang:default decode:true " >func convertKgToGram (weightKg:Int) ->Int {
    var weight = weightKg * 1000
    return weight
}</pre>
<p>関数の名前が「convertKgToGram」に変わり、関数の中の処理の書き方も少し変えてみた。<br />
書き方は少し変わったが処理の内容は先程までと同じで、受け取った数値を1000倍にして返すという関数だ。</p>
<p>1つ目、2つ目と比べてみると、3つ目の関数はキログラムをグラムに変換する処理だということは一目瞭然である。<br />
これが見てすぐわかる、優れたいいコードということだ。</p>
<h2>2.コメントをつける</h2>
<p>コードに書くコメントにも、つけていいコメントとつけてはいけないコメントがある。</p>
<pre class="lang:default decode:true " >/*重さをキログラムからグラムに変換する*/
func a (number:Int) ->Int {
    return number * 1000
}</pre>
<p>つけてはいけないコメントをあえてつけてみた。</p>
<p>「重さをキログラムからグラムに変換する」というコメントをつけるくらいなら、</p>
<pre class="lang:default decode:true " >func convertKgToGram (weightKg:Int) ->Int {
    var weight = weightKg * 1000
    return weight
}</pre>
<p>先ほど書いたように処理の中で使われている名前を変えるべきだ。</p>
<pre class="lang:default decode:true " >/*
受け取った数値が少数だとエラーになるという潜在的なバグがある
受け取るのは整数だけなのか？
*/
func convertKgToGram (weightKg:Int) ->Int {
    var weight = weightKg * 1000
    
    return weight
}</pre>
<p>もしこの関数にコメントをつけるとすれば、上記のようになる。<br />
コードの欠陥や自分の考えなどを書いておくといい。</p>
<pre class="lang:default decode:true " >/*
受け取った数値が少数だとエラーになるが、処理的には整数しか入ってこない。
少数が入る場合は他の処理で想定外の処理が行われている可能性がある
*/
func convertKgToGram (weightKg:Int) ->Int {
    var weight = weightKg * 1000
    
    return weight
}</pre>
<p>メンテナンスや先のことを考えて、このようなことを書くのもいいかもしれない。</p>
<h2>3.短いコードを書く</h2>
<p>短いコードを書く目的は短時間で理解できるコードを書くことだ。<br />
だから、ただ単に短ければいいというものではない。<br />
理解できる時間が短くなるのならば、多少コードが長くなっても問題はないのだ。</p>
<p>問題は長すぎるコードだ。<br />
複数の処理を行っている1つの関数というのは処理ごとに関数を分けた方が理解しやすくなる。<br />
<span class="b">1度に1つのことを行う</span>というのを意識するといいだろう。</p>
<h3>リーダブルコードのまとめ</h3>
<p>優れたコードというのは他人が理解しやすい、それもできるだけ短時間で理解できるコードだ。</p>
<p>本書を読んで優れたコードがどういうものか理解はできても、身に付けるのはすぐにはいかないだろう。<br />
優れたコードを書く技術を身につけるにはとにかくやってみることが必要不可欠だし、それを続けていって初めて身につくものだからだ。<br />
日々優れたコードを意識してアプリ開発を続けていきたいと思う。</p>
<h4 class="aam">Amazonのオススメ！</h4>
<p>リーダブルコードは最近アプリ開発を始めたばかりで、コードを少しは書けるようになってきたという人が次のステップへ進むための1冊です！<br />
リーダブルコードを読んで優れたコードを書けるようになりましょう！</p>
<div class="booklink-box">
<div class="booklink-image"><a href="https://www.amazon.co.jp/exec/obidos/asin/4873115655/same-22/" rel="nofollow" target="_blank"><img src="https://images-fe.ssl-images-amazon.com/images/I/51MgH8Jmr3L._SL160_.jpg" style="border: none;" /></a></div>
<div class="booklink-info">
<div class="booklink-name"><a href="https://www.amazon.co.jp/exec/obidos/asin/4873115655/same-22/" rel="nofollow" target="_blank">リーダブルコード ―より良いコードを書くためのシンプルで実践的なテクニック (Theory in practice)</a>
<div class="booklink-powered-date">posted with <a href="https://yomereba.com" rel="nofollow" target="_blank">ヨメレバ</a></div>
</div>
<div class="booklink-detail">Dustin Boswell,Trevor Foucher オライリージャパン 2012-06-23    </div>
<div class="booklink-link2">
<div class="shoplinkamazon"><a href="https://www.amazon.co.jp/exec/obidos/asin/4873115655/same-22/" rel="nofollow" target="_blank" title="アマゾン" >Amazon</a></div>
<div class="shoplinkkindle"><a href="https://www.amazon.co.jp/gp/search?keywords=%83%8A%81%5B%83_%83u%83%8B%83R%81%5B%83h%20%81%5C%82%E6%82%E8%97%C7%82%A2%83R%81%5B%83h%82%F0%8F%91%82%AD%82%BD%82%DF%82%CC%83V%83%93%83v%83%8B%82%C5%8E%C0%91H%93I%82%C8%83e%83N%83j%83b%83N%20%28Theory%20in%20practice%29&__mk_ja_JP=%83J%83%5E%83J%83i&url=node%3D2275256051&tag=same-22" rel="nofollow" target="_blank" >Kindle</a></div>
<div class="shoplinkrakuten"><a href="http://c.af.moshimo.com/af/c/click?a_id=374939&p_id=56&pc_id=56&pl_id=637&s_v=b5Rz2P0601xu&url=http%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F11753651%2F" rel="nofollow" target="_blank" title="楽天ブックス" >楽天ブックス</a></div>
<div class="shoplinkseven"><a href="https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=2967684&pid=883100332&vc_url=http%3A%2F%2Fwww.7netshopping.jp%2Fbooks%2Fsearch_result%2F%3Fctgy%3Dbooks%26code%3D4873115655" rel="nofollow" target="_blank" title="セブンネットショッピング" >7net</a></div>
</p></div>
</div>
<div class="booklink-footer"></div>
</div>
