---
layout: post
status: publish
published: true
title: ロリポップからsixcoreへのサーバー移行。すんなりいかなかった3つのポイント
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 7166
wordpress_url: http://kotalab.com/?p=7166
date: '2013-05-17 19:23:40 +0900'
date_gmt: '2013-05-17 10:23:40 +0900'
categories:
- ブログ
tags:
- 引越し
- sixcore
- ロリポップ
comments:
- id: 2048
  author: どんブロ【008：2013/05/23版】〜 ばりばりたべてぶりぶりうんこ | 覚醒する @CDiP
  author_email: ''
  author_url: http://www.donpy.net/blogger-focus/24782.html
  date: '2013-06-30 16:24:41 +0900'
  date_gmt: '2013-06-30 07:24:41 +0900'
  content: "[...]  [...]"
---
<p><img src="http://kotalab.com/wp-content/uploads/sixcore_130517-448x336.jpg" alt="sixcore_130517" width="448" height="336" class="alignnone size-large wp-image-7168" /><br />
サーバー移行が完了しました。こたら（@kotala_b）です。<br />
仕事が休みの日月でサーバー移行を終わらせようと意気込んでいたものの結局金曜までかかりました。<br />
色んな人のサーバー移行記事を読みましたがすんなりとはいかないものですね。<br />
サーバー移行に伴う先人達の記事はとても参考になりました。<br />
ロリポップから<br />
<a href="http://c.af.moshimo.com/af/c/click?a_id=370316&p_id=16&pc_id=16&pl_id=5191&guid=ON" target="_blank"><img src="http://image.moshimo.com/af-img/0003/000000005191.gif" width="125" height="125" style="border:none;"></a><br />
sixcoreへ<br />
<a href="http://px.a8.net/svt/ejp?a8mat=25PB6D+3SXS8A+CO4+O0MJL" target="_blank"><br />
<img border="0" width="234" height="60" alt="" src="http://www25.a8.net/svt/bgt?aid=130511317230&wid=004&eno=01&mid=s00000001642004034000&mc=1"></a><br />
<!--more--></p>
<h2>サーバー移行で参考にした記事</h2>
<p>はっきりいってこれだけ見とけば大丈夫！というくらいわかりやすい、この2つの記事を参考にしました。<br />
<a href="http://number333.org/2013/03/04/wordpress-sever-moving/" target="_blank"><img  class="alignleft" src="http://capture.heartrails.com/150x130?http://number333.org/2013/03/04/wordpress-sever-moving/" alt="【完全版】これでもう迷わない！WordPressのブログをサーバー移転（引越し）する詳しい手順・方法を解説します。【ロリポップからSIXCOREへ】 | iPhone・Macの情報発信ブログ〜Number333~" width="150" height="130" /></a><a href="http://number333.org/2013/03/04/wordpress-sever-moving/" target="_blank">【完全版】これでもう迷わない！WordPressのブログをサーバー移転（引越し）する詳しい手順・方法を解説します。【ロリポップからSIXCOREへ】 | iPhone・Macの情報発信ブログ〜Number333~</a><a href="http://b.hatena.ne.jp/entry/http://number333.org/2013/03/04/wordpress-sever-moving/" target="_blank"><img border="0" src="http://b.hatena.ne.jp/entry/image/http://number333.org/2013/03/04/wordpress-sever-moving/" alt="" /></a><br style="clear:both;" /><br />
<a href="http://webmemo.biz/sixcore-lolipop-server" target="_blank"><img  class="alignleft" src="http://capture.heartrails.com/150x130?http://webmemo.biz/sixcore-lolipop-server" alt="[&Aring;] ロリポップからSixCore（シックスコア）へサーバ移転！後者に捧ぐ移転メモ | あかめ女子のwebメモ" width="150" height="130" /></a><a href="http://webmemo.biz/sixcore-lolipop-server" target="_blank">[&Aring;] ロリポップからSixCore（シックスコア）へサーバ移転！後者に捧ぐ移転メモ | あかめ女子のwebメモ</a><a href="http://b.hatena.ne.jp/entry/http://webmemo.biz/sixcore-lolipop-server" target="_blank"><img border="0" src="http://b.hatena.ne.jp/entry/image/http://webmemo.biz/sixcore-lolipop-server" alt="" /></a><br style="clear:both;" />最後の最後でつまずいたポイントはタムカイさん（@tamkai）と全く同じでした。<br />
<a href="http://tamkaism.com/2013/05/lolipop-to-sixcore/" target="_blank"><img  class="alignleft" src="http://capture.heartrails.com/150x130?http://tamkaism.com/2013/05/lolipop-to-sixcore/" alt="ブログサーバーをロリポップからシックスコアに移転する際、私がつまづいた4つのポイント | タムカイズム" width="150" height="130" /></a><a href="http://tamkaism.com/2013/05/lolipop-to-sixcore/" target="_blank">ブログサーバーをロリポップからシックスコアに移転する際、私がつまづいた4つのポイント | タムカイズム</a><a href="http://b.hatena.ne.jp/entry/http://tamkaism.com/2013/05/lolipop-to-sixcore/" target="_blank"><img border="0" src="http://b.hatena.ne.jp/entry/image/http://tamkaism.com/2013/05/lolipop-to-sixcore/" alt="" /></a><br style="clear:both;" />タムカイさんの記事がなかったら途方に暮れていたに違いありません。<br />
本当に助かりました！</p>
<h2>すんなりいかなかった3つのポイント</h2>
<h3>1.Mysqlインポート時のエラー#1064</h3>
<p>データベースをインポートした時にエラー#1064が出てインポートが出来ませんでした。<br />
このエラーの原因を調べたところ、エクスポート元とインポート先でMysqlのバージョンが違うことが原因かも知れないということがわかりました。<br />
そこでエクスポートファイルと作成時とインポート時の設定を変更しました。<br />
▼エクスポートする時は他のデータベースシステムまたは古い MySQL サーバとの互換性を「MYSQL40」に変更<br />
<img src="http://kotalab.com/wp-content/uploads/sixcore_130517_01-448x253.jpg" alt="sixcore_130517_01" width="448" height="253" class="alignnone size-large wp-image-7169" /><br />
▼インポートする時はSQL互換モードを「MYSQL40」に変更<br />
<img src="http://kotalab.com/wp-content/uploads/sixcore_130517_02-448x140.jpg" alt="sixcore_130517_02" width="448" height="140" class="alignnone size-large wp-image-7170" /><br />
これで#1064が出ずにインポートが出来るようになりました。</p>
<h3>2.確認用URLで確認出来ない</h3>
<p>これは単純なミスでした。<br />
FTPでアップロードする場所を間違えて、初期ドメインのFTPサーバーへアップロードしていました。<br />
正しくは独自ドメイン用のFTPサーバー。<br />
詳しくはこちら<br />
<a href="http://www.sixcore.ne.jp/shared/man/domain_setting.php" target="_blank">マニュアル/マルチドメイン対応高コストパフォーマンス 共有レンタルサーバー シックスコア（sixcore）</a></p>
<h3>3.ネームサーバー書き換え後にトップページ以外アクセス不可能になった</h3>
<p>確認用URLで無事確認出来るようになったので、後はネームサーバーの書き換えだけ。<br />
ネームサーバーの書き換えは申込んでから完了するまで時間がかかるということだったので、寝る前に申込をしました。<br />
次の朝、書き換えが完了したか確かめてみると、なんとトップページとダッシュボード以外のページが表示されなくなってしまっていたのです。<br />
今まで入れていたプラグインを止めたり削除しても、PHPのバージョンを上げても一向に表示されず結構焦りました。<br />
Pocketに保存してあったサーバー移行記事を見返しました。<br />
その時見つけたのがタムカイさんの記事です。</p>
<blockquote><p>4.パーマリンク設定のせいでエラーが出ることがあるみたい<br />
さて、全て無事に移転したはずが、トップページ以外見えないという状況になって焦りました。あかめちゃんのエントリで時間の問題と書いてあったのを見て一晩放置したものの変化はなく&hellip;。</p></blockquote>
<p>全く同じ状況です。<br />
タムカイさんと同じように、パーマリンク設定の「変更を保存」ボタンを押してみました。<br />
すると不思議と全てのページが表示されるようになったのでした。</p>
<h2>最後に</h2>
<p>過去にサーバー移行の記事を見ていて、「色々問題が発生するんだなーでも自分は大丈夫だろう」と他人事のように思っていました。<br />
まさか自分がこうなるとは。<br />
無事にサーバー移行が出来てよかったよかった。<br />
<a href="http://px.a8.net/svt/ejp?a8mat=25PB6D+3SXS8A+CO4+O0MJL" target="_blank"><br />
<img border="0" width="234" height="60" alt="" src="http://www25.a8.net/svt/bgt?aid=130511317230&wid=004&eno=01&mid=s00000001642004034000&mc=1"></a></p>
<h2 class="rele">関連記事</h2>
<p><a href="http://kotalab.com/pocket-five-reason" target="_blank"><img  class="alignleft" src="http://kotalab.com/wp-content/uploads/pocket_130513.jpg" alt="【Pocket】「後で読む」に保存したまま後で読まなかった僕が「後で読む」ようになった5つの理由 | kotala's note" width="150" /></a><a href="http://kotalab.com/pocket-five-reason" target="_blank">【Pocket】「後で読む」に保存したまま後で読まなかった僕が「後で読む」ようになった5つの理由 | kotala's note</a><br style="clear:both;" /></p>
