---
layout: post
status: publish
published: true
title: WordpressPopularPostsの設定を見直して「人気の投稿」にサムネイルを表示させてみた！
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 1337
wordpress_url: http://kotalab.com/?p=1337
date: '2012-07-09 11:48:49 +0900'
date_gmt: '2012-07-09 02:48:49 +0900'
categories:
- WordPressプラグインの使い方
tags:
- PopularPosts
comments: []
---
<p><a href="http://kotalab.com/wp-content/uploads/link_120708.jpg" target="_blank"><img src="http://kotalab.com/wp-content/uploads/link_120708.jpg" alt="" title="link_120708" width="448" height="336" class="alignnone size-full wp-image-1330" /></a><br />
<span style="font-size:10px;"><a href="http://www.flickr.com/photos/stickergiant/3769771267/" target="_blank">WordPress Stickers Everywhere</a> / teamstickergiant</span><br />
まだまだWordpressを使いこなせてない@kotala_bです。<br />
プラグインを入れても、入れるだけで満足して初期設定のまま使っているものが結構ありました。<br />
そこでプラグインの設定を見直してみました。<br />
今回弄ったのは人気の投稿を表示させるプラグイン「<strong>WordPressPopularPosts</strong>」です。<br />
<!--more--></p>
<h2>参考記事</h2>
<p>サイドバーに「人気の投稿」を表示させていますが、今まではほぼデフォルトで「文字だけのリスト」になっていました。<br />
そこで今回、サムネイルつきのリストに変更しました。<br />
参考にしたのはこちらの記事です。<br />
<a href="http://www.imamura.biz/blog/cms/wordpress/4447" target="_blank"><img title="【wordpressの人気記事を表示するプラグイン Wordpress Popular Posts】 | 今村だけがよくわかるブログ" src="http://capture.heartrails.com/150x130?http://www.imamura.biz/blog/cms/wordpress/4447" alt="http://www.imamura.biz/blog/cms/wordpress/4447" width="150" height="130" align="left" /></a><a href="http://www.imamura.biz/blog/cms/wordpress/4447" title="【wordpressの人気記事を表示するプラグイン Wordpress Popular Posts】 | 今村だけがよくわかるブログ" target="_blank">【wordpressの人気記事を表示するプラグイン Wordpress Popular Posts】 | 今村だけがよくわかるブログ</a><br style="clear:both;" />とてもわかりやすく書いてあります。<br />
ありがとうございます！<br />
注目したのはこの説明文。</p>
<blockquote><p>・日間、月間、週間、全期間の人気記事を表示。サムネイル（アイキャッチ）の表示の選択が可能。<br />
・人気記事の基準設定にPV（ページビュー）数、コメント数、指定期間中の1日の平均PV数などが可能。<br />
・ウィジェットのレイアウトも、独自タグを指定して、ある程度自由なカスタマイズも可能。</p></blockquote>
<p>これを見るまではサムネイルの表示やウェジットのレイアウト変更が出来ることを知りませんでした。</p>
<h2>早速変更</h2>
<p>今回変更したのは、サムネイルの表示とそのレイアウトです。<br />
Wordpressダッシュボードから外観＞ウェジットと進んで、<strong>WordPressPopularPosts</strong>の設定変更をします。<br />
<strong>Thumbnailsettings</strong>のチェックボックスにチェックを入れサムネイル表示をしました。<br />
チェックを入れただけだと何も変わりませんが、一度保存を押すとサムネイルのサイズを入力出来るようになります。<br />
<a href="http://kotalab.com/wp-content/uploads/PopularPosts_120709_01.jpg"><img src="http://kotalab.com/wp-content/uploads/PopularPosts_120709_01.jpg" alt="" title="PopularPosts_120709_01" width="448" height="107" class="alignnone size-full wp-image-1341" /></a><br />
次は<strong>UsecustomHTMLMarkup</strong>にチェックを入れタグを編集します。<br />
ここではタグにclassを設定しcssでスタイルを変更しました。<br />
以上で設定完了です。</p>
<h2>まとめ</h2>
<p>サイドバーのサムネイル表示で文字だけのリストより見栄えがよくなりました！<br />
あとはリンク先を読んでくれるよう願うのみ！</p>
