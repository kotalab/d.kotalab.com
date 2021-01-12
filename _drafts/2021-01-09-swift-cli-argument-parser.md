---
layout: post
title: Swift製コマンドラインツールで引数をパースする
date: '2021-01-12 21:33:00 +0900'
date_gmt: '2021-01-12 21:33:00 +0900'
category: 
- Swift
thumbnail: /assets/images/swift-cli-start.jpg
---
前回は[Swift製コマンドラインツールの始め方](./swift-cli-start)について書きました。
今回はその続きで、引数の受け取りについて書きます。

## 引数の受け取り方
`CommandLine.arguments`を使うと引数をSwiftコード内で取り扱えます。
Swiftの以下のコードをターミナルから呼び出してみます。
```swift
print(CommandLine.arguments)
print("Hello, world!")
```
実行結果は以下になります。
```shell
$ swift run
[3/3] Linking Swift-CLI
[".build/x86_64-apple-macosx/debug/Swift-CLI"]
Hello, world!
```
```shell
$ swift run Swift-CLI hello
[".build/x86_64-apple-macosx/debug/Swift-CLI", "hello"]
Hello, world!
```
```shell
$ swift run Swift-CLI hello world
[".build/x86_64-apple-macosx/debug/Swift-CLI", "hello", "world"]
Hello, world!
```
```shell
$ swift run Swift-CLI "hello world"
[".build/x86_64-apple-macosx/debug/Swift-CLI", "hello world"]
Hello, world!
```
`CommandLine.arguments`の型は`[String]`となっていて、`CommandLine.arguments[1]`以降が受け取った引数です。

オプションとは
- `-` `--` つきでキーワードが指定できる。
- キーワードごとに挙動が変わる。
- `-m` `--message` は同じ扱い。
- フラグのようにオプションの指定だけする場合(`--verbose`)と、オプションに値が入る場合(`--message "this is input message"`)がある。

などなど、オプションを扱うようなコマンドラインツールを作ろうとすると、オプションのパースを自前で作るのは少し面倒になります。
OSSがあるからそれを使いましょう