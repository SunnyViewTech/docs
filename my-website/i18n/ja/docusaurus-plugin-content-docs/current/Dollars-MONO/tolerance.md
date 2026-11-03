---
unlisted: true
sidebar_position: 110
title: (非推奨)モーションキャプチャの許容度
className: translation-complete
---

# モーションキャプチャの許容度

:::warning 非推奨

MONO v.260828 以降、関連するオプションは削除されました。

このページは旧バージョンにのみ適用されます。

:::


許容度の設定はモーションキャプチャシステムの動作に直接影響します。用途に応じて調整してください。

**高い許容度：**

姿勢や位置に多少のずれがあっても、システムが対象人物を検出しやすくなり、すぐにトラッキングを開始します。ただし、背景や対象外の物体を人物と誤認識する可能性が高くなります。

**低い許容度：**

対象人物の認識条件が厳しくなり、安定した正面の姿勢が一定時間続かないとトラッキングを開始しません。誤認識を効果的に減らせますが、対象の姿勢が不安定な場合や体の一部が隠れている場合は、トラッキングの開始が遅れることがあります。

この設定は、ライブパフォーマンス、デモンストレーション、公開イベントなど、誤認識を最小限に抑え、高い精度が求められる場面に適しています。

以下の動画では、同じ映像を異なる許容度で処理した場合のモーションキャプチャ結果の違いを確認できます。

<iframe width="640" height="360" src="https://www.youtube.com/embed/XkYgPHH5ZPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



