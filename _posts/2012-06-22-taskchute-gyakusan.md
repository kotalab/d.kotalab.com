---
layout: post
status: publish
published: true
title: Taskchuteはこんなことも出来る！理想の起床時間から今日の空いてる時間を逆算する方法！！
author:
  display_name: kotala_b

  email: info@kotalab.com
  url: ''

author_email: info@kotalab.com
wordpress_id: 876
wordpress_url: https://kotalab.com/?p=876
date: '2012-06-22 12:35:23 +0900'
date_gmt: '2012-06-22 03:35:23 +0900'
category:
- TaskChute
tags:
- カスタマイズ
- 起床時間
comments: []
---
<p>Taskchuteが徐々に自分に合った形に変わってきてます。@kotala_bです。<br />
<a href="/taskchute-wakeup-clock" title="思い立ったらすぐ行動！Taskchuteに起き時計を入れてみた！" target="_blank">昨日の記事</a>では起きる時間を自動で計算する方法を書きました。<br />
今日はそこからさらに発展させて、今日のタスク終了時間と睡眠時間そして<strong>理想の起床時間</strong>から逆算して<strong>今日の空き時間</strong>を表示させる方法をご紹介します。<br />
</p>
<!--more-->
<h2>おさらい</h2>
<p><a href="/taskchute-wakeup-clock" title="思い立ったらすぐ行動！Taskchuteに起き時計を入れてみた！" target="_blank">昨日の記事</a>では睡眠時間と起き時間をTaskchuteにいれました。<br />
<strong>今日の空き時間を計算する方法</strong>は昨日の設定も必要になりますので、詳しいやり方は<a href="/taskchute-wakeup-clock" title="思い立ったらすぐ行動！Taskchuteに起き時計を入れてみた！" target="_blank">昨日の記事</a>をご覧ください。<br />
<a href="/taskchute-wakeup-clock" target="_blank"><img title="思い立ったらすぐ行動！Taskchuteに起き時計を入れてみた！ | kotala's note" src="https://capture.heartrails.com/150x130?https://kotalab.com/taskchute-wakeup-clock" alt="https://kotalab.com/archives/863" width="150" height="130" align="left" /></a><a href="/taskchute-wakeup-clock" title="思い立ったらすぐ行動！Taskchuteに起き時計を入れてみた！" target="_blank">思い立ったらすぐ行動！Taskchuteに起き時計を入れてみた！ | kotala's note</a><br style="clear:both;" /></p>
<h2>やり方</h2>
<p>では<strong>今日の空き時間を自動で計算し表示させる方法</strong>ご紹介です。</p>
<h3>入力するセルを作成</h3>
<p>まずは前回と同様に睡眠時間から下4セル分を右方向へコピーします。<br />
そして睡眠時間・起床時間が入っている箇所を空き時間・理想起床時間に変えます。</p>
<h3>理想の起床時間の数式</h3>
<p><a href="/wp-content/uploads/risoujikan_120622_01.jpg" target="_blank"><img src="/wp-content/uploads/risoujikan_120622_01.jpg" alt="" title="risoujikan_120622_01" width="450" height="150" class="alignnone size-full wp-image-877" /></a><br />
セルに入れる数式ですが、理想起床時間の方から入れていきます。<br />
キャプチャ画像でいうと「<strong>O5</strong>」セルになります。<br />
ここには「<strong>=sum(基準日の日付が書いてあるセル)+1+理想の起床時間/24</strong>」という数式を入れます。<br />
キャプチャ画像では基準日の日付が書いてあるセルは「<strong>B5</strong>」理想の起床時間は<strong>6</strong>時なので、「=SUM<strong>(B5)</strong>+1+<strong>6</strong>/24」という形です。</p>
<h3>空き時間の数式</h3>
<p>空き時間の方に入れる数式は「<strong>=SUM(理想起床時間-起床時間)</strong>」という形になります。<br />
キャプチャ画像でいうと「=SUM(<strong>O5</strong>-<strong>N5</strong>)」という形です。</p>
<h3>注意点</h3>
<p>注意点がひとつだけあります。<br />
今日は6月22日なのに基準日が6月21日になってるといった、<strong>基準日が過去の日付</strong>だと空き時間が正しく表示されません。<br />
その点だけは注意してください。</p>
<h2>最後に</h2>
<p>いかがでしでしょうか。<br />
Taskchuteで理想の起床時間を設定し、そこから今日の空いている時間を算出する方法のご紹介でした。<br />
TaskchuteはExcelベースということでカスタマイズしやすい半面、いじりすぎると元に戻らなくなってしまう場合もあります。<br />
カスタマイズする際は<strong>必ずバックアップを取り</strong>、自己責任で行いましょう。</p>
