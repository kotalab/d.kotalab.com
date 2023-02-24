---
layout: post
status: publish
published: true
title: プラグインを使わずにWordPressの同じカテゴリー記事の一覧を画像付きで表示させる方法！
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 4987
wordpress_url: https://kotalab.com/?p=4987
date: '2012-12-21 11:44:26 +0900'
date_gmt: '2012-12-21 02:44:26 +0900'
category:
- WordPressカスタマイズ
tags:
- プラグインなし
- カテゴリー一覧
ogImage:
  url:
comments:
- id: 1797
  author: WordPressカスタマイズメモ | きつね♪の徒然ネット生活
  author_email: ''
  author_url: ''
  date: '2013-06-02 20:59:40 +0900'
  date_gmt: '2013-06-02 11:59:40 +0900'
  content: "[...] 感謝です！ プラグインを使わずにWordPressの同じカテゴリー記事の一覧を画像付きで表示させる方法！ [...]"
---
<p><a href="/wp-content/uploads/link_120708.jpg" target="_blank"><img src="/wp-content/uploads/link_120708.jpg" alt="WordPress Stickers Everywhere" width="448" height="336" class="alignnone size-full wp-image-1330" /></a><br />
<span style="font-size:10px;"><a href="https://www.flickr.com/photos/stickergiant/3769771267/" target="_blank">WordPress Stickers Everywhere</a> / teamstickergiant</span><br />
関連記事に続き同じカテゴリー記事も画像つきで表示されるようにしました。@kotala_bです。<br />
今回も参考になるサイトを探し、そのコードを自分が表示させたいように少しだけ変更を加えました。<br />
</p>
<!--more-->
<h2>参考サイト</h2>
<p>参考にしたのはこちら<br />
<a href="http://kachibito.net/wp-code/show-related-posts-by-category" target="_blank"><img  class="alignleft" src="https://capture.heartrails.com/150x130?http://kachibito.net/wp-code/show-related-posts-by-category" alt="[WordPress] カテゴリベースで関連記事を抽出する - かちびと.net" width="150" height="130" /></a><a href="http://kachibito.net/wp-code/show-related-posts-by-category" target="_blank">[WordPress] カテゴリベースで関連記事を抽出する - かちびと.net</a><a href="https://b.hatena.ne.jp/entry/http://kachibito.net/wp-code/show-related-posts-by-category" target="_blank"><img border="0" src="https://b.hatena.ne.jp/entry/image/http://kachibito.net/wp-code/show-related-posts-by-category" alt="" /></a><br style="clear:both;" />ここで紹介されているコードをベースに少しだけ変更を加えました。</p>
<h2>変更点</h2>
<p><a href="/wp-content/uploads/category_121221_01.jpg" target="_blank"><img src="/wp-content/uploads/category_121221_01-448x189.jpg" alt="category_121221_01" width="448" height="189" class="alignnone size-large wp-image-4989" /></a><br />
変更したのは「<strong>liタグの中身</strong>」と「<strong>ulタグの位置</strong>」です。<br />
かちびと.netさんで紹介されているコードのままでは画像表示がないので画像表示されるように「liタグの中身」を変更しました。<br />
ここには前回の関連記事を表示させる方法で使った「liタグの中身」をそのまま使って、画像のサイズだけを変更しました。<br />
関連記事を表示させる方法のことを書いたのはこちら<br />
<a href="/wordpress-kanrenkiji" target="_blank"><img  class="alignleft" src="/wp-content/uploads/link_120708.jpg" alt="Wordpressに関連記事を表示！Zenbackなしで自動表示させる方法！ | kotala's note" width="150" /></a><a href="/wordpress-kanrenkiji" target="_blank">Wordpressに関連記事を表示！Zenbackなしで自動表示させる方法！ | kotala's note</a><br style="clear:both;" />「<strong>the_post_thumbnail(array(100,100))</strong>」という部分の100という数字の部分が画像の大きさになるので、まずここを変更。<br />
そして「ulタグの開始位置」をかちびと.netさんで紹介されているコードの先頭に変更しました。</p>
<h2>最後に</h2>
<p><a href="/wp-content/uploads/category_121221_02.jpg" target="_blank"><img src="/wp-content/uploads/category_121221_02-448x358.jpg" alt="category_121221_02" width="448" height="358" class="alignnone size-large wp-image-5011" /></a><br />
こんな風に出来上がりました！<br />
前回紹介した関連記事一覧では記事についてるタグに合わせた内容が表示され、今回のカテゴリー一覧では記事のカテゴリーに合わせた内容が表示されるようになります。<br />
全て自動でやってくれるのでとても快適になりました！</p>
