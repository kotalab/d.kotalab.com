---
layout: post
title: Swift製コマンドラインツールの始め方
date: '2021-01-01 21:33:00 +0900'
author:
  name: ''
date_gmt: '2021-01-01 21:33:00 +0900'
category:
- Swift
image: /assets/images/swift-cli-start.jpg
excerpt: 最近あんまり Swift でプログラムを書いていなかったので、Swift で コマンドラインツール を作り始めました。
---
最近あんまり Swift でプログラムを書いていなかったので、Swift で コマンドラインツール を作り始めました。

環境は Swift 5.3.2。
Xcode 12.3 についてる Swift です。
```
$ swiftc -v
Apple Swift version 5.3.2 (swiftlang-1200.0.45 clang-1200.0.32.28)
Target: x86_64-apple-darwin20.2.0
```
Swift でコマンドラインツールを作るには、Swift Package Manager(SwiftPM) で作る方法と、Xcode で作る方法があるようです。
どんな違いがあるか両方で作って違いを確かめてみました。

## SwiftPM で作るコマンドラインツール
`swift package init`で`--type executable`を指定すると
```shell
$ mkdir Swift-CLI
$ cd Swift-CLI
$ swift package init --type executable
Creating executable package: Swift-CLI
Creating Package.swift
Creating README.md
Creating .gitignore
Creating Sources/
Creating Sources/Swift-CLI/main.swift
Creating Tests/
Creating Tests/LinuxMain.swift
Creating Tests/Swift-CLITests/
Creating Tests/Swift-CLITests/CLITests.swift
Creating Tests/Swift-CLITests/XCTestManifests.swift
```
 `swift run` コマンドで実行可能なソースが生成されます。
```shell
$ swift run Swift-CLI
[3/3] Linking Swift-CLI
Hello, world!
```
`swift package generate-xcodeproj`で、xcodeprojを生成するとXcodeで開発できるようになります。
```shell
$ swift package generate-xcodeproj
generated: ./Swift-CLI.xcodeproj
```
ちなみに、`swift test`でテストも実行可能です。
```shell
$ swift test
[4/4] Linking Swift-CLIPackageTests
Test Suite 'All tests' started at 2021-01-01 00:17:57.893
Test Suite 'Swift-CLIPackageTests.xctest' started at 2021-01-01 00:17:57.894
Test Suite 'Swift_CLITests' started at 2021-01-01 00:17:57.894
Test Case '-[Swift_CLITests.Swift_CLITests testExample]' started.
Test Case '-[Swift_CLITests.Swift_CLITests testExample]' passed (0.101 seconds).
Test Suite 'Swift_CLITests' passed at 2021-01-01 00:17:57.995.
	 Executed 1 test, with 0 failures (0 unexpected) in 0.101 (0.101) seconds
Test Suite 'Swift-CLIPackageTests.xctest' passed at 2021-01-01 00:17:57.995.
	 Executed 1 test, with 0 failures (0 unexpected) in 0.101 (0.101) seconds
Test Suite 'All tests' passed at 2021-01-01 00:17:57.995.
	 Executed 1 test, with 0 failures (0 unexpected) in 0.101 (0.102) seconds
```
## Xcode から作るコマンドラインツール
Xcodeのプロジェクト新規作成からCommandLineToolを選択すると、`main.swift`と`.xcodeproj`だけでシンプルすぎるプロジェクトができます。
Swift-CLIという名前で作成した時のディレクトリ構成は下記。
```
Swift-CLI/main.swift
Swift-CLI.xcodeproj
```
Xcode から run することはできますが、terminal からの実行は `swift run` も `swift test` もできませんでした。

というわけで、特別な理由がない限りは Xcode から作らない方がよさそうです。
