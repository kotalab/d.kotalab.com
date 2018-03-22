---
layout: post
status: publish
published: true
title: Taskchute2をカスタマイズ！自分が使いやすいツールに変えよう！
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 4413
wordpress_url: https://kotalab.com/?p=4413
date: '2012-11-26 10:56:50 +0900'
date_gmt: '2012-11-26 01:56:50 +0900'
category:
- TaskChute
tags: []
comments: []
---
<p><a href="https://kotalab.com/wp-content/uploads/taskchutecustom_121126.jpg" target="_blank"><img src="https://kotalab.com/wp-content/uploads/taskchutecustom_121126-448x298.jpg" alt="" title="taskchutecustom_121126" width="448" height="298" class="alignnone size-large wp-image-4415" /></a><br />
<span style="font-size:10px;"><a href="http://www.flickr.com/photos/pennuja/5364124040/" target="_blank">Multi Tools</a> / pennuja</span><br />
Taskchute2を使い始めて1週間が経ちました。@kotala_bです。<br />
以前使っていたTaskchuteでは様々なカスタマイズを行っていました。<br />
TaskchuteはExcelベースということで拡張性があることも大きな魅力の1つです。<br />
久しぶりに使いだしたTaskchute2を早速カスタマイズしたのでどんな風にしたかをご紹介します。<br />
<!--more--></p>
<h2>見積り時間と実績の差</h2>
<p>これは自分で立てた見積り時間と実際にかかった時間とを比べどのくらいの差があるかを把握する為に入れています。<br />
導入方法はこちらに詳しく書かれています。<br />
<a href="http://jmatsuzaki.wordpress.com/2012/04/16/taskchute2pivot/" target="_blank"><img  class="alignleft" src="http://capture.heartrails.com/150x130?http://jmatsuzaki.wordpress.com/2012/04/16/taskchute2pivot/" alt="TaskChute2のワークログをピボットテーブルで分析する方法 | 旧jMatsuzaki" width="150" height="130" /></a><a href="http://jmatsuzaki.wordpress.com/2012/04/16/taskchute2pivot/" target="_blank">TaskChute2のワークログをピボットテーブルで分析する方法 | 旧jMatsuzaki</a><a href="http://b.hatena.ne.jp/entry/http://jmatsuzaki.wordpress.com/2012/04/16/taskchute2pivot/" target="_blank"><img border="0" src="http://b.hatena.ne.jp/entry/image/http://jmatsuzaki.wordpress.com/2012/04/16/taskchute2pivot/" alt="" /></a><br style="clear:both;" />Taskchuteの8行目のあいてる場所に数式を入れるだけ。<br />
「=IF(M8="","",(M8-L8))」という数式を入れることで表示出来ます。</p>
<h2>実績の時間表示</h2>
<p>これは次のピボットテーブルで表示させる為に入れています。<br />
Taskchuteに標準で入っているのは実績時間の分単位のものになります。<br />
時間単位の表示を入れる為には8行目のあいてる場所に数式を入れることになります。<br />
「=IF(M8="","",M8/60)」という数式を入れることで表示出来ます。</p>
<h2>ピボットテーブル</h2>
<p>Excelを使っている方なら聞いたことがある方は結構いるんじゃないかと思われるピボットテーブル。<br />
これをTaskchuteにも導入しています。<br />
ピボットテーブルをTaskchuteに入れることで過去1週間の時間の使い方を見直し次の週へ繋げる為に使っています。<br />
上記の2つを入れるのもこのピボットテーブルの為と言っていいかも知れません。<br />
ピボットテーブルの導入はこちらの動画がわかりやすいです。</p>
<div class="video-container"><iframe width="420" height="315" src="http://www.youtube.com/embed/efv87WiXZO4?rel=0" frameborder="0" allowfullscreen></iframe></div>
<h2>セクションごとの終了時刻</h2>
<p>セクションAからEまでの終了時刻を一目でわかるように表示させています。<br />
セクションごとに表示させることで、本来は3時間あるセクションに3時間以上のタスクが入っている場合に、タスクリスト修正する為に使っています。<br />
これを表示させておくことで時間にゆとりを持って行動することが出来るようになります。<br />
導入方法はこちらを参考に。<br />
<a href="http://taskviewer.posterous.com/archive/4/2012" target="_blank"><img  class="alignleft" src="http://capture.heartrails.com/150x130?http://taskviewer.posterous.com/archive/4/2012" alt="たすかん - タスク管理だから" width="150" height="130" /></a><a href="http://taskviewer.posterous.com/archive/4/2012" target="_blank">たすかん - タスク管理だから</a><a href="http://b.hatena.ne.jp/entry/http://taskviewer.posterous.com/archive/4/2012" target="_blank"><img border="0" src="http://b.hatena.ne.jp/entry/image/http://taskviewer.posterous.com/archive/4/2012" alt="" /></a><br style="clear:both;" />わかりやすい解説が載っています！</p>
<h2>次の日の起床時刻と1日の空き時間</h2>
<p>これは「今日のタスク終了時刻＝寝る時間」という前提で作られています。<br />
自分が取りたい睡眠時間を入力することで「今日のタスク終了時間＋睡眠時間＝次の日の起床時刻」としています。<br />
1日の空き時間というのは「次の日の理想の起床時間ー睡眠時間＝今日の寝る時間」として今日の寝る時間と今日のタスク終了時間の差がどれくらいあるのかを表示させたものです。<br />
自分が寝たい時間までに空き時間がどれくらいあるのかということが一目でわかります。<br />
導入方法はこちら<br />
<a href="https://kotalab.com/taskchute-wakeup-clock" target="_blank"><img  class="alignleft" src="https://kotalab.com/wp-content/uploads/okidokei_120621_02.jpg" alt="思い立ったらすぐ行動！Taskchuteに起き時計を入れてみた！ | kotala's note" width="150" /></a><a href="https://kotalab.com/taskchute-wakeup-clock" target="_blank">思い立ったらすぐ行動！Taskchuteに起き時計を入れてみた！ | kotala's note</a><br style="clear:both;" /><br />
<a href="https://kotalab.com/taskchute-gyakusan" target="_blank"><img  class="alignleft" src="https://kotalab.com/wp-content/uploads/risoujikan_120622_01.jpg" alt="Taskchuteはこんなことも出来る！理想の起床時間から今日の空いてる時間を逆算する方法！！ | kotala's note" width="150" /></a><a href="https://kotalab.com/taskchute-gyakusan" target="_blank">Taskchuteはこんなことも出来る！理想の起床時間から今日の空いてる時間を逆算する方法！！ | kotala's note</a><br style="clear:both;" />以前このブログで紹介した方法です。<br />
以前使っていたTaskchuteにも入れていて、今回新たにTaskchute2に入れるのに自分のブログを参考に同じ物を入れました。</p>
<h2>最後に</h2>
<p>Taskchuteのカスタマイズのご紹介でした。<br />
Taskchuteをより自分にあった使いやすいツールにする為に今回紹介したカスタマイズをしています。<br />
気になるものがあれば是非使ってみてください！<br />
カスタマイズは<strong>自己責任</strong>となりますので、<strong>必ずバックアップを取ってから</strong>お試しください。</p>
