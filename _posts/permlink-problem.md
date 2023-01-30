---
layout: post
status: publish
published: true
title: 困った！パーマリンクを変更したら重複コンテンツが自動的に作成される問題が発生！
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 8341
wordpress_url: https://kotalab.com/?p=8341
date: '2013-09-04 19:08:25 +0900'
date_gmt: '2013-09-04 10:08:25 +0900'
category:
- ブログ
tags:
- パーマリンク変更
- 重複コンテンツ
comments: []
---
<p><img src="/wp-content/uploads/permlink-problem_130904_01-546x167.jpg" alt="permlink-problem_130904_01" width="546" height="167" class="alignnone size-large wp-image-8345" /><br />
困ったことが起きました。こたら（@kotala_b）です。<br />
同じ内容の記事が別のパーマリンクで複数作成される問題が発生しました。<br />
いわゆる重複コンテンツってやつです。<br />
問題が複雑すぎて調べてもサッパリワカラナイ！<br />
</p>
<!--more-->
<h2>重複コンテンツの問題</h2>
<p>どういうことが起きてるかというと<br />
先日書いた<a href="/readingpace" title="読書のペースを倍にするために新たに始めたこととやめたこと" target="_blank">読書のペースを倍にするために新たに始めたこととやめたこと</a>というエントリーの例なんですが、<br />
<a href="/readingpace" title="読書のペースを倍にするために新たに始めたこととやめたこと" target="_blank">https://kotalab.com/readingpace</a><br />
<a href="/readingpace/8303" title="読書のペースを倍にするために新たに始めたこととやめたこと" target="_blank">https://kotalab.com/readingpace/8303</a><br />
という2つの同じページができるんです。<br />
投稿一覧で見ると1つ。でも実際は2つのページができてる。<br />
<img src="/wp-content/uploads/permlink-problem_130904_02-546x108.jpg" alt="permlink-problem_130904_02" width="546" height="108" class="alignnone size-large wp-image-8347" /><br />
パーマリンク設定では「https://kotalab.com/%postname%」ということになってるんですが、新規投稿すると勝手に「https://kotalab.com/%post_id%」というもう一つ別のページができてしまうんです。<br />
<img src="/wp-content/uploads/permlink-problem_130904_03-546x282.jpg" alt="permlink-problem_130904_03" width="546" height="282" class="alignnone size-large wp-image-8346" /></p>
<h3>原因はパーマリンク変更</h3>
<p>問題が起きたのはおそらくパーマリンク設定を変更した時。<br />
元々は「https://kotalab.com/archive/%post_id%」という形式でした。<br />
今から約2週間前パーマリンクを「https://kotalab.com/%postname%」に変更後、この問題に気づきました。<br />
他に何か原因があるとすれば「Stinger2」かも知れないけど、「Stinger2」を入れてからだいぶたってからだしあんまり関係はなさそう。<br />
色々調べてみたもののお手上げ状態。</p>
<h2>解決したい問題は2つ</h2>
<p>解決したいことが2つあります。<br />
1.重複コンテンツの問題をどうやって対処るればいいのか。<br />
2.新規投稿時に2つのページに別れてしまうのを直したい。</p>
<h3>1.重複コンテンツの問題</h3>
<p>気になることがいくつかあります。<br />
「https://kotalab.com/archive/%post_id%」という形式から「https://kotalab.com/%postname%」へ「Permalink Redirect」というプラグインで301リダイレクトをしています。<br />
この状態で「https://kotalab.com/%post_id%」からも<strong>リダイレクトして問題ないのか？</strong>ということ。<br />
リダイレクトに問題がある場合、<strong>重複コンテンツをどうやって対処すればいいのか？</strong>ということ。</p>
<h3>2.新規投稿時の問題</h3>
<p>新規投稿した時に2つのページができるのはどうやったら直せるのか。<br />
これがさっぱりわかりませんでした。<br />
1つ目の問題が解決してもこっちが直らないとどうしようもありません。<br />
さあ困ったぞ！<br />
というわけでどなたかわかりそうな方がいたらお助けください！</p>
