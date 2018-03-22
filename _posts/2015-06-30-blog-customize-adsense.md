---
layout: post
status: publish
published: true
title: ブログのトップページの好きな場所にgoogleAdsenseを表示させる方法
author:
  display_name: kotala_b
  email: info@kotalab.com
  url: ''
author_email: info@kotalab.com
wordpress_id: 14709
wordpress_url: https://kotalab.com/?p=14709
date: '2015-06-30 07:36:51 +0900'
date_gmt: '2015-06-29 22:36:51 +0900'
category:
- WordPressカスタマイズ
tags:
- wordpress
- カスタマイズ
- バックアップ
- ローカル環境
- 環境構築
comments: []
---
<p><img src="https://kotalab.com/wp-content/uploads/2015/06/blog-customize-adsense_20150630_01.png" alt="Blog customize adsense 20150630 01" width="780" height ="606" class="aligncenter size-large" /></p>
<p>ブログのトップページには最新の記事から順に、記事タイトルが並んでいる作りのものが多いと思います。</p>
<p>僕が使っているWordPressテーマのstingerもそうです。<br />
こういった作りの場合、よくわからずにトップページに広告を設置すると1記事おきに表示されてしまうことがあります。</p>
<p>そうならないよう、トップページの記事と記事の間の自分の置きたい場所に広告を表示させる方法をご紹介します。</p>
<!--more-->
<h2>広告設置位置</h2>
<p><img src="https://kotalab.com/wp-content/uploads/2015/06/blog-customize-adsense_20150630_02.jpg" alt="Blog customize adsense 20150630 02" width="780" height ="693" class="aligncenter size-large" /></p>
<p><a href="https://kotalab.com">このブログのトップページ</a>には20件の最新記事を並べています。<br />
そして広告は7記事目の下、14記事目の下、20記事目の下に設置しています。</p>
<p>このように広告を設置するにはPHPのコードを書き加えます。<br />
PHPをいじることになり予期せぬエラーでブログ表示が真っ白になってしまう場合もあるので、<span class="b">バックアップを取ったりローカル環境で試すなど十分に注意してカスタマイズしてください。</span></p>
<h2>書き加えるコード</h2>
<pre class="lang:default decode:true " ><?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <?php $postnum++; ?>
    <?php if ($postnum == 8) { ?>
        ここに広告のソースコードを入れる
    <?php } ?>
    <?php if ($postnum == 15) { ?>
        ここに広告のソースコードを入れる
    <?php } ?>
        元々書かれている記事一覧を表示させるためのコード
<?php endwhile; else: ?>
<p>記事がありません</p>
<?php endif; ?></pre>
<p>1行目はブログのトップページに最新記事を繰り返し表示させるための開始の合図です。<br />
stingerでは&uarr;のような書き方になっていますが、テーマによっては</p>
<pre class="lang:default decode:true " ><?php $my_posts = get_posts(); ?>
<?php foreach ( $my_posts as $post ) : setup_postdata( $post ); ?></pre>
<p>&uarr;のように書かれている場合もあるかもしれません。</p>
<p>書き加えるのは「<?php $postnum++; ?>」と書かれている2行目から、<br />
「<?php } ?>」の8行目までです。</p>
<p>記事を繰り返し表示させているループの最初にpostnumで今のループが何件目かわかるようにして、8回目のループつまり8記事目の先頭に広告が表示されるコードを入れています。</p>
<p>「$postnum == 8」や「$postnum == 15」と書かれている数字の部分を変えると、広告が表示される位置を変更することができます。<br />
例えば「$postnum == 3」なら3記事目と4記事目の間に表示されます。</p>
<h2>注意事項</h2>
<p>PHPというプログラムの部分をいじることになるので、たった1文字「?」が抜けていただけでもブログに何も表示されず画面が真っ白になってしまいます。<br />
慣れていない方はくれぐれもご注意ください。</p>
<p>慣れていないけど挑戦してみたい方は、WordPressが動く環境をPC内に作ると練習できるのでやってみてください。</p>
<p>参考：<a href="https://kotalab.com/wordpress-bitnami">画面が真っ白とこれでおさらば！WordPressをいじり倒したい人のためのローカル環境構築</a></p>
<p>ちょっと一人だと心細いという方は、<a href="https://kotalab.com/blog-consultation" title="ブログのお手伝い始めました">連絡いただければご相談に乗ります</a>。</p>
<h2>さいごに</h2>
<p>ファーストビュー(ページを開いた時に最初に表示される画面範囲)から広告をなくしました。</p>
<p>ファーストビューに広告を置いた方が広告収入が上がると思います。<br />
ですがファーストビューの広告をクリックした場合、記事はほとんど読まれずに他のページへ移動してしまうということを意味しています。</p>
<p>僕は少しでも読んでもらいたいと思ってブログを更新しているので、ファーストビューから広告を外しました。</p>
<p>[dailynew]<br />
・新しいアプリの主要機能をピックアップ</p>
<p><a href="https://kotalab.com/lets-start-1day1new" title="昨日の新しい体験とは？">昨日の新しい体験とは？</a></p>
<div class="clear"></div>
