---
layout: post
status: publish
published: true
title: WordPressで情報が古くなっている過去記事に自動で注意書きを表示させる方法
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 13705
wordpress_url: http://kotalab.com/?p=13705
date: '2014-12-31 11:33:47 +0900'
date_gmt: '2014-12-31 02:33:47 +0900'
categories:
- WordPressカスタマイズ
tags:
- wordpress
- カスタマイズ
- 過去記事
comments: []
---
<p><img src="http://kotalab.com/wp-content/uploads/old-entry-maintenance_20141231-780x244.png" alt="old-entry-maintenance_20141231" width="780" height="244" class="aligncenter size-large wp-image-13708" /><br />
僕はアプリ開発で調べ物があるときによくネットで検索するんですが、たまーに情報が古いことがあります。<br />
せっかくみつけた情報が古くて、今とは若干違っていたりするとまた調べ直さなきゃいけなかったり。</p>
<p>他にも「期間限定で何々がお買い得！」みたいなのも、よく見てみてら投稿の日付が1年前の今日で、ちょっとがっかりしたり。</p>
<p>そんな経験から、僕もこのブログを書いているので、読んでくれている皆さんにそういう想いをさせたらいけないなーと思って、<br />
<span class="b">1年以上前に書いた記事には「この記事は◯年◯月◯日に書いたものです。情報が古くなっている可能性があるのでご注意ください。」と記事の冒頭に書いておくことにしました。</span></p>
<p>ただし全ての記事に手動で文字を入れていくわけにはいかないので、Wordpressのソースを少しいじって1年以上前の記事には自動で注意の文章が入るように設定しました。<br />
今回はその設定方法をご紹介します。<br />
<!--more--></p>
<h2>表示させる内容</h2>
<p><img src="http://kotalab.com/wp-content/uploads/old-entry-maintenance_20141231-780x244.png" alt="old-entry-maintenance_20141231" width="780" height="244" class="aligncenter size-large wp-image-13708" /></p>
<p>設置場所はタイトルや投稿日などの下の本文が始まる直前の部分。<br />
「ご注意」という見出しをつけて、投稿日を目立つよう設置しました。</p>
<h2>古い記事だけに自動で表示させる方法</h2>
<pre class="lang:default decode:true " ><?php
$days = (date('U') - get_the_time('U'))/(24*60*60);
$term = 365;
if ($days >= $term ) {
?>
<div class="oneyearsago">
<h2>ご注意</h2>
<p>この記事は<span class="b"><?php the_time('Y年n月j日') ?></span>に書いたものです。
情報が古くなっている可能性があるのでご注意ください。</p>
</div>
<?php } ?></pre>
<p>このコードで投稿日が1年以上前の記事全てに注意書きが表示されるようにしました。</p>
<p>2行目の「get_the_time」という部分を「get_the_modified_date」に変えると、投稿日から1年ではなく最終更新日から1年という条件に変わります。</p>
<p>3行目の「365」という数字が経過期間の日数を設定している箇所なので、ここを「30」とすれば1ヶ月以上前の記事全てに表示してくれますし、<br />
「730」とすれば2年以上前の記事全てに表示するよう設定できます。</p>
<p>6行目から10行目までは実際に表示されるhtmlの部分なので、ここを変更すれば文章やスタイルの変更ができます。</p>
<h3>カスタマイズして使ってみてください</h3>
<pre class="lang:default decode:true " ><?php
$days = (date('U') - get_the_time('U'))/(24*60*60);
$term = 365;
if ($days >= $term ) {
?>
<div class="oneyearsago">
<h2>ご注意</h2>
<p>この記事は<span class="b"><?php the_time('Y年n月j日') ?></span>に書いたものです。
情報が古くなっている可能性があるのでご注意ください。</p>
</div>
<?php } ?>
<?php the_content(); ?></pre>
<p>僕は上記のコードを個別記事が表示される「<?php the_content(); ?>」の直前に入れてみました。<br />
表示内容や設定期間は好みで変えられるので、自分にあった内容に書き換えて使ってみてください。</p>
<h4 class="rel">おすすめ記事</h4>
<p>[article include="13663" type="custom"][article include="11230" type="custom"]</p>
<div class="clear"></div>
