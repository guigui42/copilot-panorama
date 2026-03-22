import type { Translations } from './types';

export const ja: Translations = {
  locale: 'ja',
  seo: {
    title: 'Copilot Panorama — .github/ スタック',
    description: 'GitHub Copilot コンポーザブルシステムのインタラクティブなビジュアルガイド — 4つのレイヤーを探索：常時オンコンテキスト、オンデマンド機能、実行制御と自動化、ディストリビューション。',
  },
  ui: {
    heroTitle: 'コンポーザブルスタック',
    layerPrefix: 'レイヤー',
    insightsTitle: 'システムの実際の仕組み',
    insightsSubtitle: 'ほとんどのチームが見落とすアーキテクチャの重要なポイント',
    detailsLabel: '詳細',
    useCasesLabel: 'ユースケース',
    documentationLabel: 'ドキュメント',
    footerBuiltFor: 'GitHub Copilot ユーザーのために構築',
    footerDocsLink: 'コンポーザブルシステムの完全なドキュメント',
    pageStack: '.github/ スタック',
    pageTools: 'Copilot Everywhere',
    shareLink: 'リンクを共有',
    shareCopied: 'コピーしました！',
  },
  viz: {
    alwaysActive: '常時アクティブ',
    loadsAutomatically: '— すべての会話に自動的に読み込まれます',
    planning: 'プランニング',
    implementation: '実装',
    review: 'レビュー',
    descriptionRead: 'SKILL.md フロントマターから説明を読み取り',
    fullSkillInjected: '関連性がある場合、完全な SKILL.md がコンテキストに挿入されます',
    approveDeny: '承認 / 拒否',
    markdownToActions: '# Markdown → GitHub Actions YAML',
    pluginJson: 'plugin.json',
    marketplace: 'マーケットプレイス',
    gitRepo: 'Git リポジトリ',
    localPath: 'ローカルパス',
  },
  layers: {
    'always-on-context': {
      title: '常時オンコンテキスト',
      subtitle: 'すべての会話に自動的に読み込まれるパッシブメモリ',
    },
    'on-demand-capabilities': {
      title: 'オンデマンド機能',
      subtitle: '開発者が明示的に呼び出すか、モデルが選択する機能',
    },
    'enforcement-automation': {
      title: '実行制御と自動化',
      subtitle: '決定論的なガードレールと CI/CD レベルのオーケストレーション',
    },
    distribution: {
      title: 'ディストリビューション',
      subtitle: 'エージェントスタックをチームやリポジトリ間でパッケージ化して共有',
    },
  },
  components: {
    instructions: {
      name: 'Instructions',
      description: 'すべてのプロンプトに自動的に適用されるパッシブメモリ',
      details:
        'Instructions は Copilot カスタマイズの基盤です。最初に読み込まれ、常時オンの' +
        'パッシブメモリとして機能します。リポジトリ全体の規約は ' +
        '`.github/copilot-instructions.md` に、パス固有の指示は ' +
        '`.github/instructions/NAME.instructions.md`（`applyTo` glob フロントマター付き）に' +
        '配置します。これらは助言的なものであり、モデルを導きますが、動作を決定論的に' +
        '強制するものではありません。',
      useCases: ['コーディング規約', 'フレームワークルール', 'リポジトリ規約'],
    },
    'prompt-files': {
      name: 'Prompt Files',
      description: 'スラッシュコマンドで手動呼び出し',
      details:
        'Prompt Files はスラッシュコマンドで呼び出す再利用可能なプロンプトテンプレートです' +
        '（例：`/security-review`、`/release-notes`）。チームが共通のプロンプトを標準化し、' +
        'すべての開発者が繰り返しタスクに対して一貫した高品質な出力を得られるようにします。',
      useCases: ['API レビュー', 'パフォーマンス監査', 'オンボーディングガイド'],
    },
    'custom-agents': {
      name: 'Custom Agents',
      description: '独自のツールと MCP サーバーを持つ専門ペルソナ',
      details:
        'Custom Agents は YAML フロントマター付きの Markdown で定義された専門ペルソナです。' +
        '各プロファイルは `description`、`tools` リスト、オプションの `mcp-servers`、' +
        '`model` 設定を指定します。エージェントは `handoffs` プロパティで連鎖できます — ' +
        '例えば、プランニングエージェントが実装エージェントに引き継ぎ、さらにレビュー' +
        'エージェントに引き継ぎます。LLM はエージェントの説明を読んで、どれを' +
        '有効化するかを決定します。',
      useCases: ['セキュリティ監査', 'データベーススペシャリスト', 'API デザイナー'],
    },
    skills: {
      name: 'Skills',
      description: '指示、スクリプト、リソースの自己完結型フォルダ — 関連性がある場合に LLM が自動的に読み込み',
      details:
        'ユーザーが呼び出す他のオンデマンド機能とは異なり、Skills は LLM が自律的に選択します。' +
        '各スキルは `SKILL.md` ファイル（YAML フロントマターに名前と説明、Markdown 本文に指示）' +
        'とオプションのスクリプトやリソースを含むフォルダです。モデルはスキルの説明を読んで' +
        'どれを有効化するかを決定し、その時初めて完全な `SKILL.md` がコンテキストに挿入されます。' +
        'ユーザーアクションは不要です。プロジェクトスキルは `.github/skills/<name>/` に、' +
        '個人スキルは `~/.copilot/skills/<name>/` に配置します。',
      useCases: ['Terraform モジュール', 'K8s マニフェスト', 'オブザーバビリティスタック'],
    },
    hooks: {
      name: 'Hooks',
      description: '6つのライフサイクルイベントでの決定論的シェルコマンド',
      details:
        'Hooks は Copilot システムにおける唯一の決定論的プリミティブです。' +
        '6つのライフサイクルポイントで発火します：`sessionStart`、`sessionEnd`、' +
        '`userPromptSubmitted`、`preToolUse`、`postToolUse`、`errorOccurred`。' +
        '`preToolUse` フックはツール実行を事前に承認または拒否できます。' +
        'Hooks は `.github/hooks/` 内の JSON ファイルに `version: 1` で定義します。' +
        'Instructions（助言的）とは異なり、Hooks は強制的です。',
      useCases: ['ポリシーゲート', 'ファイルアクセス制御', '監査ログ'],
    },
    'agentic-workflows': {
      name: 'Agentic Workflows',
      description: 'ガードレール付きで GitHub Actions で実行される AI コーディングエージェントによるリポジトリ自動化',
      details:
        'Agentic Workflows は YAML フロントマター（権限、safe-outputs、トリガー）付きの ' +
        'Markdown ファイルで、`gh aw` CLI 拡張機能を通じて GitHub Actions にコンパイルされます。' +
        '自然言語で自動化を定義 — 日次レポートのスケジュール、Issue のトリアージ、' +
        'CI 障害の分析、ドキュメントのメンテナンスなど。エージェントはデフォルトで' +
        '読み取り専用権限で実行され、書き込み操作には明示的な safe-output 承認が必要です。' +
        '実行はツールの許可リストとネットワーク分離でサンドボックス化されています。' +
        'GitHub Copilot、Claude、OpenAI Codex で動作します。',
      useCases: ['Issue トリアージ', 'CI 障害分析', '日次ステータスレポート'],
    },
    'copilot-setup-steps': {
      name: 'Copilot Setup Steps',
      description: 'コーディングエージェントの環境を事前設定する GitHub Actions ワークフロー',
      details:
        'Copilot Setup Steps は `.github/workflows/copilot-setup-steps.yml` にある特別な ' +
        'GitHub Actions ワークフローで、コーディングエージェントが作業を開始する前に実行されます。' +
        'ツール、依存関係、ランナーの設定を決定論的にインストール・設定するために使用します — ' +
        'エージェントが試行錯誤なしですぐにビルド、テスト、リントできるようにします。' +
        'より大きなランナーへのアップグレード、Windows への切り替え、Git LFS の有効化、' +
        '`copilot` Actions 環境を通じた環境変数の設定も可能です。ワークフローには単一の ' +
        '`copilot-setup-steps` ジョブを含める必要があり、デフォルトブランチに存在する場合のみ有効です。',
      useCases: ['依存関係の事前インストール', 'より大きなランナー', '環境変数'],
    },
    plugins: {
      name: 'Plugins',
      description: 'エージェント、スキル、フック、MCP 設定をバンドルしたインストール可能なパッケージ',
      details:
        'Plugins は Copilot CLI を拡張する配布可能なパッケージです。各プラグインには ' +
        'Custom Agents、Skills、Hooks、MCP サーバー設定、LSP サーバー設定を含めることができます。' +
        '登録済みマーケットプレイス（`copilot-plugins` や `awesome-copilot` など）、' +
        'Git リポジトリから直接、またはローカルパスからインストールできます。' +
        'チーム固有のスタックを共有するための独自のマーケットプレイスを作成できます。',
      useCases: ['プロジェクト横断の再利用', 'チーム標準化', 'マーケットプレイス配布'],
    },
  },
  insights: [
    {
      icon: '🧠',
      content:
        '<strong>Instructions は最初に読み込まれます</strong> — 常時オンのパッシブメモリです。' +
        'すべてのプロンプトは、他の何かが発火する前にこれらを認識します。',
    },
    {
      icon: '🧩',
      content:
        '<strong>Skills はオンデマンドで読み込まれます</strong> — Copilot はまず SKILL.md フロントマターの ' +
        '<code>description</code> のみを読み取ります。完全なファイルは、モデルがそのスキルが' +
        'プロンプトに関連すると判断した場合にのみ、エージェントのコンテキストに挿入されます。',
    },
    {
      icon: '🔒',
      content:
        '<strong>Hooks は唯一の決定論的プリミティブです。</strong>Instructions は助言的です。' +
        'Hooks は強制的です — ツール実行を事前に承認または拒否できる <code>preToolUse</code> を含む' +
        '6つのライフサイクルイベントがあります。',
    },
    {
      icon: '🔀',
      content:
        '<strong>LLM がルーターです。</strong>別個のオーケストレーターは存在しません — ' +
        'モデルはインデックス化されたエージェントの説明とスキルのフロントマターを読んで、' +
        '何を有効化するかを決定します。だからこそ、良い説明を書くことが重要なのです。',
    },
  ],

  /* ── Tools ページ ── */
  toolsSeo: {
    title: 'Copilot Panorama — Copilot Everywhere',
    description: 'GitHub Copilot ツールのインタラクティブなビジュアルガイド — 3つのレイヤーを探索：ターミナル（CLI）、IDE（オートコンプリート、チャット、Agent Mode、サードパーティエージェント）、クラウド（Coding Agent、Review Agent、サードパーティエージェント）。',
  },
  toolsUi: {
    heroTitle: 'Copilot Everywhere',
    insightsTitle: 'ほとんどの開発者が見落とす重要な違い',
    insightsSubtitle: '3つのレイヤーにまたがるアーキテクチャの洞察',
    footerBuiltFor: 'GitHub Copilot ユーザーのために構築',
    footerDocsLink: 'Copilot 機能の完全なドキュメント',
  },
  toolsViz: {
    interactive: 'インタラクティブ',
    programmatic: 'プログラマティック',
    ghostText: 'ゴーストテキスト',
    tabToAccept: 'Tab で受け入れ',
    chatParticipants: '@workspace',
    slashCommands: '/fix',
    chatVariables: '#file',
    analyze: '分析',
    edit: '編集',
    run: '実行',
    fix: '修正',
    local: 'ローカル',
    cloud: 'クラウド',
    issueAssigned: 'Issue がアサインされました',
    agentCodes: 'エージェントがコーディング',
    prCreated: 'PR が作成されました',
    securityChecks: 'セキュリティチェック',
    addReviewer: 'レビュアーを追加',
    reviewComments: 'レビューコメント',
    suggestedFixes: '修正の提案',
    selectAgent: 'エージェントを選択',
    askAnything: '何でも質問',
    repoContext: 'リポジトリコンテキスト',
    webSearch: 'ウェブ検索',
  },
  toolsLayers: {
    terminal: {
      title: 'ターミナル',
      subtitle: 'コマンドラインで動く AI コーディングエージェント',
    },
    ide: {
      title: 'IDE',
      subtitle: 'エディター内でのインライン提案、チャット、自律編集、サードパーティエージェント',
    },
    cloud: {
      title: 'クラウド',
      subtitle: 'GitHub プラットフォーム上の自律エージェント — コーディング、レビュー、サードパーティ',
    },
  },
  toolsComponents: {
    'copilot-cli': {
      name: 'GitHub Copilot CLI',
      description: 'ターミナルで動くフル AI エージェント — インタラクティブセッション、ファイル編集、GitHub 連携',
      details:
        'GitHub Copilot CLI は、ターミナルから直接 Copilot を使用できます。`copilot` で' +
        'インタラクティブセッションを開始するか、`copilot -p "..."` で単一のプロンプトを' +
        '渡せます。ローカルファイルの編集、シェルコマンドの実行、GitHub.com との連携' +
        '（PR やIssue の作成、ワークフロー管理）、反復的な作業が可能です。Plan Mode' +
        '（Shift+Tab）による構造化された実装、MCP サーバー、カスタムエージェント、' +
        'スキル、フック、無限セッションのための自動コンテキスト圧縮をサポートしています。',
      useCases: ['ターミナル自動化', 'コード生成', 'Git 操作', 'GitHub 連携', 'PR 管理'],
    },
    autocomplete: {
      name: 'オートコンプリート',
      description: '入力中にインラインで表示されるゴーストテキストのコード提案',
      details:
        'Copilot は入力中にオートコンプリート形式の提案を表示します — 関数本体、ループ、' +
        '条件分岐など、コードコンテキストに基づいた提案です。Alt+] / Alt+[ で候補を切り替え、' +
        'Ctrl+→ で単語ごとに受け入れ、Tab で提案全体を受け入れます。Next Edit Suggestions' +
        '（NES）は次の編集位置を予測し、その補完を提案します。VS Code、Visual Studio、' +
        'JetBrains IDE、Azure Data Studio、Xcode、Vim/Neovim、Eclipse で利用可能です。',
      useCases: ['コード補完', 'ボイラープレート生成', 'パターン補完', 'コメントからコード生成'],
    },
    ask: {
      name: 'Ask（Copilot Chat）',
      description: 'コードの質問、説明、生成のための対話型 AI チャット',
      details:
        'Copilot Chat はコーディングの質問をするための対話型インターフェースを提供します。' +
        'チャット参加者（@workspace、@github、@terminal）、スラッシュコマンド（/fix、/explain、' +
        '/tests、/doc）、チャット変数（#file、#selection、#web）で正確なコンテキストを指定できます。' +
        '@github 参加者はウェブ検索、Issue の検索、PR の分析を可能にします。複数の AI モデルを' +
        'サポートし、モデルピッカーで会話中に切り替えられます。VS Code、Visual Studio、' +
        'JetBrains、Eclipse、Xcode、GitHub.com、GitHub Mobile で利用可能です。',
      useCases: ['コード説明', 'デバッグ', 'テスト生成', 'コードリファクタリング', '学習'],
    },
    'agent-mode': {
      name: 'Agent Mode',
      description: '自律的なローカルコーディング — Copilot がファイルを判断し、編集を行い、コマンドを実行して反復',
      details:
        'Agent Mode は Copilot が IDE 内で自律的にコードを編集できるようにします。変更すべき' +
        'ファイルを判断し、複数ファイルの編集を行い、ターミナルコマンドを提案・実行し、タスクが' +
        '完了するまでエラーを修正しながら反復します。MCP サーバーの統合、委任サブタスクのための' +
        'サブエージェント、カスタムエージェントをサポートします。課金されるのはプロンプトのみで、' +
        'フォローアップのツール呼び出しは無料です。GitHub Actions で実行される Copilot coding ' +
        'agent（クラウドレイヤー）とは異なります。',
      useCases: ['複雑なタスク', '複数ステップの実装', 'エラー解決', 'ビルド自動化'],
    },
    'third-party-agents-ide': {
      name: 'サードパーティエージェント',
      description: 'VS Code でネイティブ SDK を使用して動作する Claude と Codex のエージェント',
      details:
        'Anthropic（Claude）と OpenAI（Codex）のサードパーティエージェントは、各プロバイダーの' +
        'ネイティブ SDK とエージェントハーネスを使用して VS Code 内で直接実行されます。ローカル' +
        'セッション（ワークスペースで実行）またはクラウドセッション（リモート環境）を選択できます。' +
        'Claude はスラッシュコマンド（/agents、/hooks、/memory、/review、/security-review）、' +
        '権限モード（自動編集、承認リクエスト、プラン）、CLAUDE.md による永続的コンテキストを' +
        'サポートします。すべて Copilot サブスクリプションで課金され、別途プロバイダーの設定は不要です。',
      useCases: ['自律コーディング', 'セキュリティレビュー', 'プロバイダー固有の機能', 'バックグラウンドタスク'],
    },
    'copilot-chat-cloud': {
      name: 'Copilot Chat',
      description: 'GitHub.com 上の会話型 AI — リポジトリ、Issue、PR、ウェブについて質問',
      details:
        'GitHub.com の Copilot Chat では、どのページからでも質問できます — リポジトリ、Issue、' +
        'PR、または一般的なソフトウェアトピックについて。GitHub からコンテキストを取得するために ' +
        'Skills を使用し（コード検索、コミット履歴、Issue 詳細）、オプションで Bing ウェブ検索に' +
        'よる最新情報も取得できます。マルチモデル選択、会話を分岐するサブスレッド、プレビュー付き' +
        'ファイル生成、会話履歴（最大 100 スレッド、28 日間保持）をサポートします。GitHub Mobile ' +
        'でも利用可能です。',
      useCases: ['リポジトリ Q&A', 'Issue 分析', 'PR の理解', 'ウェブ検索', 'コード生成'],
    },
    'coding-agent': {
      name: 'Coding Agent',
      description: '自律型クラウドエージェント — Issue をアサインすると、セキュリティチェック付きの PR を作成',
      details:
        'Copilot coding agent は GitHub Actions 環境で独立して動作します。Issue を @copilot に' +
        'アサインするか、PR でメンションするか、Chat から依頼すると、タスクを評価し、変更を行い、' +
        'テストとリンターを実行し、CodeQL セキュリティ分析を行い、シークレットをチェックし、' +
        'レビュー用のドラフト PR を作成します。カスタム Instructions、MCP サーバー、カスタム' +
        'エージェント、Hooks、Skills、Copilot Memory をサポートします。`copilot/` ブランチにのみ' +
        'プッシュします。Pro、Pro+、Business、Enterprise で利用可能です。',
      useCases: ['バグ修正', '機能実装', 'テストカバレッジ', '技術的負債', 'セキュリティキャンペーン'],
    },
    'review-agent': {
      name: 'Review Agent',
      description: 'プロジェクト全体のコンテキストと修正提案を備えた AI コードレビュアー',
      details:
        'Copilot コードレビューはプルリクエストを分析し、ワンクリックで適用できる変更提案付きの' +
        'フィードバックを提供します。エージェント機能を使用してプロジェクト全体のコンテキストを' +
        '収集し、リポジトリ全体を分析してコード変更を理解します。すべての PR に対する自動レビューを' +
        '設定できます。.github/copilot-instructions.md によるカスタム Instructions とパス固有の' +
        'ルールをサポートします。GitHub.com、GitHub Mobile、VS Code、Visual Studio、Xcode、' +
        'JetBrains で利用可能です。',
      useCases: ['コード品質', 'セキュリティレビュー', 'ベストプラクティス', 'PR ワークフロー', 'チームガバナンス'],
    },
    'third-party-agents-cloud': {
      name: 'サードパーティエージェント',
      description: 'GitHub 上のクラウドコーディングエージェントとしての Anthropic Claude と OpenAI Codex',
      details:
        'サードパーティのコーディングエージェントは GitHub プラットフォーム上で Copilot coding ' +
        'agent と並んで動作します。現在 Anthropic Claude（Claude Agent SDK）と OpenAI Codex' +
        '（Codex SDK）をサポートしています。Issue のアサイン、Agents タブからのタスク開始、' +
        'PR での @AGENT_NAME メンション、VS Code や GitHub Mobile からのセッション開始が可能です。' +
        'Copilot coding agent と同じセキュリティ保護が適用されます。各セッションは1つのプレミアム' +
        'リクエストと GitHub Actions の分数を消費します。現在パブリックプレビュー中です。',
      useCases: ['マルチエージェントワークフロー', 'エージェント比較', '専門タスク', '並行開発'],
    },
  },
  toolsInsights: [
    {
      icon: '🔀',
      content:
        '<strong>Agent Mode ≠ Coding Agent。</strong>Agent Mode は IDE 内でローカルに実行され、' +
        'あなたが操作に関与し続けます。Coding Agent はクラウドの GitHub Actions で実行され、' +
        '独立して作業し、完了すると PR を作成します。',
    },
    {
      icon: '🧠',
      content:
        '<strong>サードパーティエージェントは IDE とクラウドの両方に存在します。</strong>' +
        'VS Code では Claude と Codex がネイティブ SDK でローカルに動作します。GitHub 上では' +
        'Copilot coding agent と並んでクラウドエージェントとして実行されます。',
    },
    {
      icon: '💬',
      content:
        '<strong>Ask モードが出発点です。</strong>チャット参加者（@workspace）、スラッシュコマンド' +
        '（/fix）、変数（#file）で質問のスコープを正確に絞り、自律的な作業のために Agent Mode に' +
        'エスカレーションできます。',
    },
    {
      icon: '🔒',
      content:
        '<strong>クラウドエージェントにはセキュリティが組み込まれています。</strong>Coding Agent は ' +
        'CodeQL、シークレットスキャン、依存関係チェックを自動的に実行します。' +
        '<code>copilot/</code> ブランチにのみプッシュでき、常にドラフト PR を作成します。',
    },
  ],
};
