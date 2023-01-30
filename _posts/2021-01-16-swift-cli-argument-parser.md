---
layout: post
title: Swift製コマンドラインツールで引数をパースする
date: '2021-01-16 19:00:00 +0900'
author:
  name: ''
date_gmt: '2021-01-16 19:00:00 +0900'
category:
- Swift
image: /assets/images/swift-cli-argument-parser.jpg
description: 前回はSwift製コマンドラインツールの始め方について書きました。今回はその続きで、引数の受け取りについて書きます。
---
前回は[Swift製コマンドラインツールの始め方](./swift-cli-start)について書きました。
今回はその続きで、引数の受け取りについて書きます。

## 引数の受け取り方
`CommandLine.arguments`を使うと引数をSwiftコード内で取り扱えます。
Swiftの以下のコードをターミナルから呼び出してみます。
```swift
print(CommandLine.arguments)
```
実行結果は以下になります。
```shell
$ swift run
[3/3] Linking Swift-CLI
[".build/x86_64-apple-macosx/debug/Swift-CLI"]
```
```shell
$ swift run Swift-CLI hello
[".build/x86_64-apple-macosx/debug/Swift-CLI", "hello"]
```
```shell
$ swift run Swift-CLI hello world
[".build/x86_64-apple-macosx/debug/Swift-CLI", "hello", "world"]
```
```shell
$ swift run Swift-CLI "hello world"
[".build/x86_64-apple-macosx/debug/Swift-CLI", "hello world"]
```
`CommandLine.arguments`の型は`[String]`となっていて、`CommandLine.arguments[1]`以降が受け取った引数です。

こんなコードで引数を使った処理が書けます。
```swift
let arguments = CommandLine.arguments.dropFirst()
if let argument = arguments.first {
    // ここで引数を使った処理
}
```
引数が1つくらいならこれでも問題ないんですが、オプションを扱うようなコマンドラインツールを作ろうとすると

- `-m` `--message` のように、`-` `--` つきでキーワードが指定できる
- フラグのようにオプションの指定だけする場合(`--verbose`)と、オプションに値が入る場合(`--message "this is input message"`)がある
- `-al` のように複数のオプションを繋げて使える

などを実装することになるので、オプションのパースを自前で作るのは少し面倒になります。

## swift-argument-parser を使う
Apple製の [swift-argument-parser](https://github.com/apple/swift-argument-parser) を使って、オプションをパースしてみます。

```swift
import ArgumentParser

struct Repeat: ParsableCommand {
    @Flag(help: "Include a counter with each repetition.")
    var includeCounter = false

    @Option(name: .shortAndLong, help: "The number of times to repeat 'phrase'.")
    var count: Int?

    @Argument(help: "The phrase to repeat.")
    var phrase: String

    mutating func run() throws {
        let repeatCount = count ?? .max

        for i in 1...repeatCount {
            if includeCounter {
                print("\(i): \(phrase)")
            } else {
                print(phrase)
            }
        }
    }
}

Repeat.main()
```

このコードの実行結果は下記になります。

```shell
$ swift run Swift-CLI "hello world" --count 1
hello world
```

```shell
$ swift run Swift-CLI "hello world" -c 3
hello world
hello world
```

```shell
$ swift run Swift-CLI "hello world" -c 3 --include-counter
1: hello world
2: hello world
3: hello world
```

swift-argument-parser は propertyWrapper で `@Argument` `@Option` `@Flag` などが定義されているのが特徴で、直感的で使いやすい印象を持ちました。
[swift-format](https://github.com/apple/swift-format/pull/154) や [SwiftLint](https://github.com/realm/SwiftLint/commit/fa5550866802dbeddab6f6df1cb9998dd609ed0a) でも swift-argument-parser が使われるようになっているようです。

引数やオプションをパースするのに便利なライブラリは Carthage で使われている [Commandant](https://github.com/Carthage/Commandant) や XcodeGen で使われている [SwiftCLI](https://github.com/jakeheis/SwiftCLI)、他にも [Commander](https://github.com/kylef/Commander) などがあるので、好みで使うのがいいと思います。

