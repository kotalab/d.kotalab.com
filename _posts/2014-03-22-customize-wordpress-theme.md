---
layout: post
status: publish
published: true
title: WordPressのテーマファイルをカスタマイズする時につまづいたこと
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 11217
wordpress_url: https://kotalab.com/?p=11217
date: '2014-03-22 15:43:17 +0900'
date_gmt: '2014-03-22 06:43:17 +0900'
category:
- WordPressカスタマイズ
tags:
- テーマファイル
- indexphp
- homephp
comments: []
---
<p><img src="https://kotalab.com/wp-content/uploads/customize-wordpress-theme-546x306.jpg" alt="customize-wordpress-theme" width="546" height="306" class="alignnone size-large wp-image-11225" /><br />
<a href="https://kotalab.com/header-banner-renewal" title="ブログのバナーをランサーズで頼んだらこんないいモノが！">新しいヘッダーが出来上がって</a>からブログのカスタマイズに力を入れ始めました！この3連休を使って色々といじってます。</p>
<p>PHPとかWordPressには詳しくはないので、調べながらちょっとずつ前進という感じ。<br />
調べながらカスタマイズしてて、調べてもなかなかうまくいかないことが出てきました。<br />
それがトップページのカスタマイズについてです。<br />
トップページを更新してるはずなのに、ずっと反映されなくて困り果ててました。<br />
</p>
<!--more-->
<h2>更新しても反映されない「index.php」</h2>
<p>僕がつまづいたのはトップページの更新をしようと思った時です。<br />
htmlをかじったことのある僕は、トップページというと「index.html」を想像します。</p>
<p>それで「index.php」をひたすらいじってたんですが、変更箇所がずっと反映されません。<br />
なんでかずっとわからなくて、色々試してみました。<br />
その中で「index.php」をテーマフォルダから消してみたりもしたんですが、その時ようやく気づきました！</p>
<p><strong>「実際に表示されてるのはindex.phpじゃない！」</strong></p>
<p>「そんなバカな！」と思ったけど「index.php」がなくてもちゃんと表示されてたのできっとそういうことなんだとわかりました。<br />
htmlをかじったことのある僕は中途半端な知識で、WordPressのトップページも「index.php」だけだとずっと思ってました。</p>
<h2>3種類のトップページファイル</h2>
<p>ずっと知らなかったんですが、トップページには「index.php」「home.php」「front-page.php」という3種類があったのです。<br />
<strong>思い込みって怖い。</strong></p>
<p>表示には優先順位があって、「index.php」は一番優先順位が低いものでした。<br />
どういうことかというと、「home.php」や「front-page.php」がある場合にはそっちが優先して表示されるのです。<br />
「home.php」も「front-page.php」がある場合には表示されません。</p>
<p>優先順位は<br />
「front-page.php」＞「home.php」＞「index.php」<br />
です。<br />
このことがわかってなかったのでずっと困っていました。</p>
<h3>感謝しつつカスタマイズを楽しもう！</h3>
<p>僕がこうやって問題を解決できるのも、先人達の知恵があるから。<br />
そういうことを感謝しつつカスタマイズを楽しみたいと思います！</p>
