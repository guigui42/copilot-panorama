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
      description: 'クラウドエージェントの環境を事前設定する GitHub Actions ワークフロー',
      details:
        'Copilot Setup Steps は `.github/workflows/copilot-setup-steps.yml` にある特別な ' +
        'GitHub Actions ワークフローで、クラウドエージェントが作業を開始する前に実行されます。' +
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
    description: 'GitHub Copilot ツールのインタラクティブなビジュアルガイド — 3つのレイヤーを探索：スタンドアロンアプリ（CLI、Copilot App）、IDE（オートコンプリート、チャット、Agent Mode、サードパーティエージェント）、クラウド（Cloud Agent、Review Agent、サードパーティエージェント）。',
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
    openSession: 'セッション開始',
    reviewDiff: 'Diff レビュー',
    openPr: 'PR を開く',
    inbox: '受信トレイ',
    agenticMerge: 'Agentic Merge',
    savedWorkflows: 'ワークフロー',
  },
  toolsLayers: {
    'standalone-apps': {
      title: 'スタンドアロンアプリ',
      subtitle: 'エージェント開発のための専用デスクトップ・ターミナルアプリケーション',
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
      useCases: ['Issue から PR への配信', 'レガシーコードの近代化', '並列 Fleet 実行', 'バックログのトリアージと計画', 'エディタ非依存の開発', '自動化'],
    },
    'copilot-app': {
      name: 'GitHub Copilot App',
      description: 'エージェント開発のためのネイティブデスクトップアプリ — Inbox、Agentic Merge、並列セッション、ワークフロー',
      details:
        'GitHub Copilot App は、macOS、Windows、Linux 対応のスタンドアロンデスクトップアプリケーションです。' +
        '開発者および開発隣接ロール（PM、デザイナー、QA）に GitHub ファーストな体験を提供し、' +
        'エージェント駆動の作業を指示、監視、レビュー、配信できます。エージェント Inbox が ' +
        'すべてのリポジトリの Issue、PR、セッションを表示します。Agentic Merge が「ラストマイル」を' +
        '担当 — レビューコメントの解決、失敗した CI の修正、マージコンフリクトの処理を代行します。' +
        '各セッションは分離された git worktree で実行され、真の並列開発が可能です。ワークフローで ' +
        'プロンプトを保存し、オンデマンドまたはスケジュールで実行して、繰り返しタスクを ' +
        '再利用可能な自動化パターンに変換できます。現在テクニカルプレビュー中です。',
      useCases: ['エージェント Inbox & トリアージ', 'Agentic Merge（ラストマイル）', '並列マルチセッション作業', '反復可能なワークフロー', '開発隣接ロールの協業', 'クロスリポジトリオーケストレーション'],
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
      name: 'Cloud Agent',
      description: '自律型クラウドエージェント — Issue をアサインすると、セキュリティチェック付きの PR を作成',
      details:
        'Copilot cloud agent は GitHub Actions 環境で独立して動作します。Issue を @copilot に' +
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
        'サードパーティのコーディングエージェントは GitHub プラットフォーム上で Copilot cloud ' +
        'agent と並んで動作します。現在 Anthropic Claude（Claude Agent SDK）と OpenAI Codex' +
        '（Codex SDK）をサポートしています。Issue のアサイン、Agents タブからのタスク開始、' +
        'PR での @AGENT_NAME メンション、VS Code や GitHub Mobile からのセッション開始が可能です。' +
        'Copilot cloud agent と同じセキュリティ保護が適用されます。各セッションは1つのプレミアム' +
        'リクエストと GitHub Actions の分数を消費します。現在パブリックプレビュー中です。',
      useCases: ['マルチエージェントワークフロー', 'エージェント比較', '専門タスク', '並行開発'],
    },
  },
  toolsInsights: [
    {
      icon: '🔀',
      content:
        '<strong>Agent Mode ≠ Cloud Agent。</strong>Agent Mode は IDE 内でローカルに実行され、' +
        'あなたが操作に関与し続けます。Cloud Agent はクラウドの GitHub Actions で実行され、' +
        '独立して作業し、完了すると PR を作成します。',
    },
    {
      icon: '🧠',
      content:
        '<strong>サードパーティエージェントは IDE とクラウドの両方に存在します。</strong>' +
        'VS Code では Claude と Codex がネイティブ SDK でローカルに動作します。GitHub 上では' +
        'Copilot cloud agent と並んでクラウドエージェントとして実行されます。',
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
        '<strong>クラウドエージェントにはセキュリティが組み込まれています。</strong>Cloud Agent は ' +
        'CodeQL、シークレットスキャン、依存関係チェックを自動的に実行します。' +
        '<code>copilot/</code> ブランチにのみプッシュでき、常にドラフト PR を作成します。',
    },
  ],

  /* ── Tips page ── */
  tipsSeo: {
    title: 'Copilot Panorama — 効率化ティップス',
    description: 'GitHub Copilotの利用を最適化するための実践ガイド — トークン管理、プロンプト設計、コンテキストスコーピング、モデル選択、ガバナンス。',
  },
  tipsUi: {
    heroTitle: 'Efficiency Tips',
    insightsTitle: 'The efficiency mindset',
    insightsSubtitle: 'Core principles for getting more value from every token',
    footerBuiltFor: 'Built for GitHub Copilot users',
    footerDocsLink: 'Full docs on Copilot billing',
    pageTips: 'Efficiency Tips',
  },
  tipsViz: {
    inputTokens: 'Input tokens',
    outputTokens: 'Output tokens',
    cachedTokens: 'Cached tokens',
    modelCalls: 'model calls',
    before: 'Before',
    after: 'After',
    expensive: 'Expensive',
    cheap: 'Cheap',
    high: 'High-effort',
    low: 'Low-effort',
    auto: 'Auto',
    cacheHit: 'Cache hit',
    cacheMiss: 'Cache miss',
    narrow: 'Narrow',
    broad: 'Broad',
    verboseInstructions: '長い冗長な指示…',
    scopedContext: 'スコープを絞った正確なコンテキスト',
    chat: 'チャット',
    shipToPr: 'PRに反映',
    freshThread: '新しいスレッド',
    principlesBrief: '原則のみ。簡潔に。',
    heavy: '重い',
    skills: 'スキル',
    repetitive: '繰り返し',
    promptFiles: 'プロンプトファイル',
    minimalDiff: '最小限のdiff + 3つの要点',
    alwaysOn: '常時オン',
    costly: '高コスト',
    onDemand: 'オンデマンド',
    efficient: '効率的',
    modelReads: 'モデルが読む',
    descriptionLabel: '説明',
    loadsIfRelevant: '関連する場合フルスキルを読み込み',
    loadOnce: 'スキーマを一度読み込む',
    reuseInQueries: '後続のクエリで再利用',
    tokenPrefixMatch: '≥1024トークン一致',
    prefixDiffers: 'プレフィックス不一致',
    standard: 'スタンダード',
    architecture: 'アーキテクチャ',
    debugging: 'デバッグ',
    agentic: 'エージェント',
    summarize: '要約',
    qa: 'Q&A',
    refactorLabel: 'リファクタリング',
    simpleToMini: 'シンプル → mini',
    complexToPremium: '複雑 → premium',
    icEng: 'ICエンジニア',
    powerUser: 'パワーユーザー',
    ciAgent: 'CIエージェント',
    stopAfterTest: '最初のテスト成功後に停止',
    perStep: 'ステップあたり',
    steps: 'ステップ',
    accuracy99: '99%',
    accuracy95: '95%',
    bePrecise: '正確に',
    stopSignals: '停止シグナルを追加',
    knownContext: '既知のコンテキストを事前に',
    lostInMiddle: '中央で見失う',
    recencyBias: '直近バイアス',
    middleDecay: '中央トークンが薄れる',
    startStrong: '✓ 先頭: 高い想起',
    middleLost: '✗ 中央: 劣化',
    endStrong: '✓ 末尾: 高い想起',
    rawFiles: '生ファイルをAIに',
    scriptOutput: 'スクリプト実行、出力を渡す',
    research: '/research',
    plan: '/plan',
    implement: '/fleet',
    withTests: '単体テストあり',
    withoutTests: '単体テストなし',
    buggyChange: 'バグ入り変更',
    silentMerge: 'サイレントマージ',
    brokenMain: 'main 破壊',
    failingTests: '失敗するテスト',
    correction: '修正',
    succeedingTests: '成功するテスト',
    rawOutput: '生出力: 4,200行',
    trimmed: 'トリム後: 38行',
    multipleCalls: '5回の連続ツール呼び出し',
    batchedCall: '1回のバッチ呼び出し',
    cleanLayers: 'Domain → Application → Infra',
    agentMiss: 'エージェントミス',
    chronicle: '/chronicle',
    updateInstructions: '指示を更新',
  },
  tipsLayers: {
    mechanics: {
      title: 'トークンメカニクス',
      subtitle: 'Copilotの各インタラクションにおけるコストの仕組みを理解する',
    },
    pitfalls: {
      title: '落とし穴',
      subtitle: '出力を静かに劣化させトークンを消費する失敗モード',
    },
    prompting: {
      title: 'プロンプティング',
      subtitle: 'より少ないトークンでより良い出力を得るプロンプトを書く',
    },
    context: {
      title: 'コンテキスト',
      subtitle: 'モデルに必要なものだけを過不足なく与える',
    },
    'workflow-design': {
      title: 'ワークフロー設計',
      subtitle: '各ステップが信頼でき再現可能になるよう作業を構造化する',
    },
    caching: {
      title: 'キャッシング',
      subtitle: 'プロンプトキャッシュを活用してより速く、より安く',
    },
    models: {
      title: 'モデル',
      subtitle: 'タスクの複雑さにモデルの能力を合わせる',
    },
    governance: {
      title: 'ガバナンス',
      subtitle: '組織レベルで消費を監視しガードレールを設定する',
    },
  },
  tipsComponents: {
    'token-billing': {
      name: 'トークンコストの要因',
      description: '入力、出力、キャッシュ読み取りトークンが3つの課金軸',
      details:
        'トークンベースの課金では、各インタラクションに3つのコスト要素があります：' +
        '入力/コンテキストトークン（送信するもの）、出力トークン（モデルが生成するもの）、' +
        'キャッシュ読み取りトークン（安価だが計測対象）。入力トークンにはプロンプト、' +
        'システム指示、ファイルコンテキスト、ツール出力が含まれます。出力トークンは' +
        'モデルのレスポンスです。この3つの軸を理解することがコスト最適化の基盤です。',
      useCases: ['全インタラクション', '予算計画', 'コスト分析'],
    },
    'agentic-cost': {
      name: 'エージェントのコスト乗数',
      description: '1つのエージェントリクエストが数十回のモデル呼び出しを発生させることがある',
      details:
        'エージェント体験（Agent Mode、Cloud Agent、CLI）は設計上反復します：' +
        '計画 → 編集 → ツール/テスト実行 → 修正 → 繰り返し。同じユーザー意図でも' +
        'ワークフローによって消費量が大きく異なります。単純な「このバグを直して」でも、' +
        '複雑さ、ツール出力、エラー回復ループ次第で2回から20回以上の呼び出しになること' +
        'があります。さらにエラーは積み重なります：ステップあたり99%の精度でも、' +
        '50ステップのワークフローは約60%に着地します。だからこそプロンプトの長さより' +
        'ワークフロー設計が重要なのです。',
      useCases: ['Agent Mode', 'Cloud Agent', 'CLI Agent'],
    },
    'context-discipline': {
      name: 'コンテキスト規律',
      description: 'コスト最適化の大部分はコンテキスト規律とワークフロー設計',
      details:
        '最大のコストレバーは短いプロンプトを書くことではなく、各モデル呼び出しに' +
        'どのコンテキストが流れ込むかを管理することです。ファイル添付、ツール出力、' +
        '会話履歴の各項目が入力トークンを追加します。規律あるコンテキスト管理' +
        '（ファイルのスコープ限定、ログの削減、新しいスレッドの開始）は、' +
        'プロンプトの推敲よりもはるかに大きな効果があります。',
      useCases: ['全ワークフロー', 'コスト最適化', 'パフォーマンス'],
    },
    'quality-over-quantity': {
      name: '量より質',
      description: '指示を増やすのではなく、高品質なコンテキストに集中する',
      details:
        '指示が多い ≠ 良い出力。スコープを絞った高品質なガイダンスは冗長で散漫な' +
        '出力を減らします。長い前置きの代わりに、モデルに必要なものだけを与えましょう：' +
        '関連するコード、具体的な要件、明確な制約。スコープを絞ったプロンプトは、' +
        'エージェントが収束せず反復し続ける暴走セッションも減らします。',
      useCases: ['Chat', 'Agent Mode', 'プロンプトファイル'],
    },
    'fresh-threads': {
      name: '新しいスレッドを開始する',
      description: '決定が永続的な成果物に反映されたら新しい会話を始める — コンテキストロットを避ける',
      details:
        'ツール出力がコンテキストに蓄積される長期セッションを避けましょう。蓄積された' +
        'ツール出力は後続の各呼び出しに入力トークンを追加し、コンテキストウィンドウが' +
        '50%を超えるとモデルは直近のトークンに偏り（直近バイアス）、中央のものを' +
        '「見失い」ます。決定を永続的な成果物（Issue、PRの説明、ADR、コードコミット）' +
        'に反映したら、中央のトークンが薄れる前に新しいスレッドをクリーンなコンテキスト' +
        'ウィンドウで始めましょう。',
      useCases: ['Chat', 'Agent Mode', 'CLIセッション'],
    },
    'concise-instructions': {
      name: '指示を圧縮する',
      description: '.github/copilot-instructions.mdを短く、安定的に、原則ベースで保つ',
      details:
        '指示はすべての会話に自動的に読み込まれます — 常時オンのコンテキストです。' +
        'copilot-instructions.mdは短く安定的に保ちましょう：原則、規約、「やってはいけない」' +
        'ルール。余分な1行が全インタラクションに入力トークンを追加します。詳細なガイダンス' +
        '（プレイブック、例、ドメインルール）はSkillsやプロンプトファイルに移動し、' +
        '必要な時だけ読み込まれるようにしましょう。',
      useCases: ['指示ファイル', 'コスト最適化', '全インタラクション'],
    },
    'structure-for-reuse': {
      name: '再利用のための構造化',
      description: '重いガイダンスにはSkillsを、繰り返しワークフローにはプロンプトファイルを使う',
      details:
        '重いガイダンス（プレイブック、例、ドメインルール、ランブック）はAgent Skillsに' +
        '入れ、ユーザーのプロンプトにマッチした時だけ読み込まれるようにします。繰り返し' +
        'ワークフロー（例：「ユニットテストを書いて」「ADRを作成して」「変更ログを生成して」）' +
        'はプロンプトファイルに入れ、ユーザーが毎回巨大な指示を貼り付けなくて済むように' +
        'します。これによりコンテキストを常時オン（高コスト）からオンデマンド（効率的）に移行できます。',
      useCases: ['Skills', 'プロンプトファイル', 'チームワークフロー'],
    },
    'concise-answers': {
      name: '少なく求める',
      description: '出力トークンを最小化するため、最小限の有用な回答を指示する',
      details:
        '出力トークンは最もコストが高い次元です。最小限の有用なレスポンスを求めましょう：' +
        '「すべて説明して」ではなく「最小限のdiff + 3つの箇条書きの根拠」。アップグレード/' +
        'マイグレーション時は「破壊的変更のみ列挙、背景は省略」。小さな出力はレスポンスが' +
        '速く、読み飛ばすノイズも少なくなります。',
      useCases: ['Chat', 'コードレビュー', 'マイグレーション'],
    },
    'scope-context': {
      name: 'コンテキストを意図的にスコープする',
      description: '狭い質問には #file または #selection、横断的変更のみ #codebase を使う',
      details:
        'チャット参照（#file、#selection、#codebase）は、モデルが見るもの — そしてあなたが' +
        '支払うもの — を正確に制御します。特定ファイルへの焦点を絞った質問には#file、' +
        'さらに狭い範囲（ハイライトされた行のみ）には#selectionを使いましょう。#codebaseは' +
        'モデルが本当にプロジェクト全体を推論する必要がある横断的変更のために予約します。' +
        'ツール出力も同じ原則：完全なログではなく、失敗したテスト出力だけを添付しましょう。' +
        '対象を絞ったコンテキストは安価で高速、そしてモデルが無関係なコードに気を取られないため、' +
        '通常はより良い回答を生み出します。',
      useCases: ['Chat', 'Agent Mode', 'CLI'],
    },
    'conditional-context': {
      name: '条件付きで常時オンより優先',
      description: '現在のタスクに関連する時だけ読み込まれるコンテキストを優先する',
      details:
        '常時オンのコンテキスト（copilot-instructions.md）はすべての会話に読み込まれ、' +
        '毎回トークンがかかります。条件付きコンテキスト（Skills、パススコープ付き指示）は' +
        '関連する時だけ読み込まれます。専門的なガイダンスはモデルが読み込みタイミングを判断する' +
        'Skillsに移動するか、applyToグロブで指示が一致するファイルにのみ適用されるように' +
        'しましょう。',
      useCases: ['指示ファイル', 'Skills', 'パススコーピング'],
    },
    'apply-to-paths': {
      name: 'applyToパスを使う',
      description: 'applyToグロブでカスタム指示を特定のファイルパターンにスコープする',
      details:
        'パス固有の指示（.github/instructions/内）はapplyToグロブフロントマターを' +
        'サポートします。これにより指示はモデルがマッチするファイルで作業している時だけ' +
        '読み込まれます — 例：テスト規約にはapplyTo: "**/*.test.ts"。関連しない時は' +
        'コストゼロ、必要な時は精密なコンテキストとなります。',
      useCases: ['指示ファイル', 'テストルール', 'フレームワーク固有'],
    },
    'skills-mcp': {
      name: 'Skills & MCPを活用する',
      description: 'Skillsはオンデマンドで読み込まれる — ただしMCPツールスキーマは毎ループに加算される',
      details:
        'Skillsはモデルが説明文から発見し、関連する時だけガイダンス全体をコンテキストに' +
        '読み込みます。一方、MCPサーバーのツールスキーマは毎ループで静的トークンとして' +
        '読み込まれます — 便利ですが積み重なります。ワークフローによっては素のCLIコマンドが' +
        '同等のMCPツールより安いこともあります。明確で簡潔なスキル説明を書き、' +
        'トレードオフが見合う場合はヘビーなMCPよりSkills/CLIを選びましょう。',
      useCases: ['Skills', 'MCPサーバー', 'カスタムエージェント'],
    },
    'context-command': {
      name: 'CLIでの/context',
      description: 'Copilot CLIでコンテキストの蓄積を監視する。容量に近づくとコンパクション発動',
      details:
        'Copilot CLIでは、/contextコマンドでコンテキストウィンドウの消費量を確認できます。' +
        'コンテキストが増大すると、CLIは容量に近づいた時に古い会話履歴を自動的にコンパクション' +
        '（要約）します。コンテキスト消費量を意識することで、新しいスレッドを始めるべきか' +
        '既存のものを続けるべきか判断できます。',
      useCases: ['CLI', '長時間セッション', 'コンテキスト管理'],
    },
    'reuse-context': {
      name: 'コンテキストの保存と再利用',
      description: '共有コンテキストを早期に読み込み、後続の質問で安価に参照する',
      details:
        'プロンプト内でコンテキストを保存・再利用しましょう。例えば、会話の早い段階で' +
        'データベーススキーマを読み込み、後続の作業でそれを再利用します — 毎回貼り直す' +
        'のではなく、そのコンテキストを参照した的を絞った質問をしましょう。これはCLIで' +
        '特に効果的で、セッションが長期化し、共有プレフィックスがプロンプトキャッシュを' +
        '有効にします。',
      useCases: ['CLIセッション', 'Chat', 'スキーマ重視の作業'],
    },
    'prefix-matching': {
      name: 'プロンプトプレフィックスキャッシング',
      description: 'LLMキャッシュは正確なプレフィックス一致に依存 — プロンプトをそれに合わせて構造化',
      details:
        'LLMのプロンプトキャッシング（プロバイダー横断）は一般的に正確なプレフィックス一致に' +
        '依存します。例えば、Azure OpenAIのプロンプトキャッシングではプロンプトが1,024トークン' +
        '以上で最初の1,024トークンが同一である必要があります。つまり、プロンプトの先頭にある' +
        '安定したシステムプロンプトと指示がキャッシュヒットしやすいということです。前文を' +
        '毎回変えるとキャッシュが効きません。',
      useCases: ['全インタラクション', 'コスト最適化', 'パフォーマンス'],
    },
    'choose-right-model': {
      name: '適切なモデルを選ぶ',
      description: 'モデルはコスト乗数と能力が異なる — タスクに合わせて選択する',
      details:
        'モデルによってコスト乗数と能力レベルが異なります。単純なタスクにプレミアムモデルを' +
        '使うとトークンとコストの無駄です。複雑なアーキテクチャにベーシックモデルを使うと' +
        '時間の無駄で品質も低下します。鍵はモデルの能力をタスクの複雑さに合わせること。' +
        '利用可能なモデルとその相対コストを確認しましょう。',
      useCases: ['全インタラクション', '予算計画', 'タスクルーティング'],
    },
    'high-effort-tasks': {
      name: '複雑な作業にはプレミアムモデル',
      description: '深いアーキテクチャ、難しいデバッグ、エージェント作業には高性能モデルを使用',
      details:
        'プレミアム/高性能モデル（Claude Opus、GPT-4.1、o3）は本当に深い推論が必要な' +
        'タスクに限定しましょう：複雑なアーキテクチャ決定、難しいマルチファイルデバッグ、' +
        '大規模なエージェントワークフロー、セキュリティ重要なコードレビュー。これらの' +
        'モデルはトークン単価が高いですが、一発で正解を出すことで時間を節約します。',
      useCases: ['アーキテクチャ', 'デバッグ', 'セキュリティレビュー', 'Agent Mode'],
    },
    'low-effort-tasks': {
      name: '単純なタスクにはMiniモデル',
      description: '要約、簡単なQ&A、小さなリファクタにはデフォルトで効率的なモデルを使用',
      details:
        'mini/効率的なモデル（GPT-4.1 mini、Claude Haiku、Gemini Flash）を要約、' +
        '簡単なQ&A、小さなリファクタ、ボイラープレート生成のデフォルトとして使いましょう。' +
        'これらのモデルはトークン単価が大幅に安く、単純なタスクには十分高速です。' +
        'インタラクションの大半が単純な場合、コスト削減は急速に積み上がります。',
      useCases: ['要約', 'Q&A', 'リファクタリング', 'ボイラープレート'],
    },
    'auto-mode': {
      name: 'Autoモードを使う',
      description: 'Autoはプロンプトに基づいて最適なモデルを選択 — ほとんどのワークフローで良いデフォルト',
      details:
        'どのモデルを使うか迷ったら「Auto」を選択しましょう。Autoモードはプロンプトを分析し、' +
        '最適なモデルにルーティングします — 単純な質問は効率的なモデルへ、複雑なタスクは' +
        '高性能なモデルへ。ほとんどのワークフローで良いデフォルトであり、単純なタスクへの' +
        '過剰支出と複雑なタスクへの性能不足の両方を回避します。',
      useCases: ['デフォルトワークフロー', '混在タスク', '新規ユーザー'],
    },
    'monitor-usage': {
      name: 'ユーザー予算を設定する',
      description: 'ペルソナ別に適切なデフォルトでユーザーレベルの予算を設定する',
      details:
        'ペルソナ別に適切なデフォルトでユーザーレベルの予算を設定しましょう：ICエンジニア vs ' +
        'パワーユーザー vs CIエージェント。控えめな制限から始め、観測された消費量に基づいて' +
        '調整します。大量消費パターンを監視しましょう — 1回のエージェントセッションが' +
        '1週間分のチャットインタラクションより多くのトークンを消費することがあります。' +
        '管理ダッシュボードで外れ値を特定し調整しましょう。',
      useCases: ['管理者', '予算管理', 'チームガバナンス'],
    },
    'compound-errors': {
      name: '複利エラー問題',
      description: 'ステップあたり99%でも、50ステップのワークフローは約60%にしか着地しない',
      details:
        'ステップごとの精度はエージェントループ全体で乗算的に積み上がります。' +
        'ステップあたり99%の信頼性では、50ステップのワークフローは0.99⁵⁰ ≈ 60%で終わります。' +
        'ステップあたり95%まで落ちると、50ステップの実行はエンドツーエンドで成功する確率が' +
        'たった約8%です。だからこそ「エージェントギャンブル」— 低品質な出力が上手くいくことを' +
        '願うこと — はスケールしなくなります。ステップごとの品質を改善するすべて' +
        '（より良いプロンプト、スコープ縮小、決定論的チェック）は、ワークフロー全体で乗算されます。',
      useCases: ['Agent Mode', 'Cloud Agent', 'オーケストレーションワークフロー'],
    },
    'prompt-anatomy': {
      name: 'プロンプトの解剖',
      description: '正確に · 停止シグナルを追加 · 既知のコンテキストを事前に',
      details:
        'エージェントは設計上反復します：計画 → 編集 → ツール実行 → 修正 → 繰り返し。' +
        '制限がなければ、成功する（またはコンテキストを使い果たす）まで続けます。' +
        '効果的なプロンプトの信頼できる3つの構成要素が、エージェントを道から外させません：' +
        '(1) 正確に — 望ましい結果を含めて、変更を明瞭で曖昧さのない言葉で記述。' +
        '(2) 停止シグナルを追加 — 「最初のテスト成功で停止」「代替案は最大2つまで」' +
        '「無関係なコードをリファクタしない」。(3) 既知のコンテキストを事前に — ' +
        '関連するファイル、フォルダ、ドキュメントを指定し、エージェントが検索でトークンを' +
        '無駄にしないようにする。決定論的ガードレール（テスト、リンター）と組み合わせる' +
        'ことで、トークンを消費し続ける暴走セッションを防ぎます。',
      useCases: ['Chat', 'Agent Mode', 'CLI'],
    },
    'context-rot': {
      name: 'コンテキストロット',
      description: '長いセッションは劣化する — 蓄積されたツール出力が後続の各呼び出しを汚染する',
      details:
        'ツール出力、ファイル添付、会話ターンはコンテキストに積み上がります。ウィンドウが' +
        '約50%を超えると、2つのことが起きます：入力コストが爆発し（後続の各呼び出しが' +
        '全履歴を再送信）、モデルは直近のトークンに大きく依存し（直近バイアス）、' +
        'セッション初期の決定を見失います。緩和策：冗長なツール出力をトリム、' +
        '中間決定を永続的な成果物（Issue、PR、ADR）に反映、劣化が始まる前に新しいスレッドを開始。',
      useCases: ['長時間セッション', 'Agent Mode', 'CLIセッション'],
    },
    'lost-in-middle': {
      name: 'Lost in the Middle',
      description: '長いコンテキストの中央に置かれたトークンは信頼性が低く想起される',
      details:
        '文書化された失敗モード：コンテキストが長いとき、モデルは先頭と末尾のトークンを' +
        '高い忠実度で想起しますが、中央のトークンでは劣化します。200kウィンドウでも、' +
        '8,000行のうち4,000行目に重要な指示を埋め込むと、事実上見えなくなる可能性が' +
        'あります。緩和策：プロンプトを短く保つ、重要な指示はプロンプトの先頭または末尾に' +
        '置く、長い入力は1つの巨大ドキュメントではなく集中したチャンクに分割する。',
      useCases: ['大きなプロンプト', '長文ドキュメント', 'マルチファイルレビュー'],
    },
    'think-in-code': {
      name: 'コードで考える',
      description: '生ファイルを渡すよりスクリプトを優先 — 分析してから要約をモデルに渡す',
      details:
        '10,000行のログや大きなJSONダンプを理解する必要があるとき、全部貼り付けないこと。' +
        '小さなスクリプトを書く（またはエージェントに書かせる）：重要な部分だけを抽出 — ' +
        '集計、エラー、関連スライス — してその出力をエージェントに渡しましょう。これは' +
        '数千の入力トークンを数十に縮め、モデルを実際の問題に集中させます。grep、jq、awk、' +
        '20行のPythonスクリプトでも同様に有効です。',
      useCases: ['ログ分析', 'データ探索', '大きなファイル'],
    },
    'research-plan-implement': {
      name: 'リサーチ → プラン → 実装',
      description: '焦点を絞った3段階を、各段階に適したモデルで繋ぐ',
      details:
        '非自明な変更を1つの巨大プロンプトでなく3つの引き渡しに分割しましょう。' +
        '(1) リサーチ：高速で広範なモデル（例：Gemini 2.5 Pro）がコードベースを探索し、' +
        '関連ファイルを特定。(2) プラン：深い推論モデル（例：Opus）がそのリサーチを精密な' +
        '仕様に変換。(3) 実装：効率的なモデル（例：GPT-5.4 / Sonnet）が仕様をコードに適用。' +
        '各段階は必要なコンテキストだけを受け取り、段階ごとのエラーが1つの暴走ループに' +
        '複利化しません。Copilot CLIでは/research → /plan → /fleetのフローにマッピングされます。',
      useCases: ['複雑なリファクタ', '横断的変更', 'マルチファイル編集'],
    },
    'deterministic-guardrails': {
      name: '決定論的ガードレール',
      description: '単体テスト、リンター、セキュリティスキャンが不良変更の複利化を止める',
      details:
        'LLMは確率的ですが、テスト、リンター、型チェッカーはそうではありません。単体テストが' +
        'あれば、バグ入り変更は失敗テストを生み、エージェントが次のループでそれを見て修正します。' +
        'テストがないと、エージェントは複数の変更にわたってバグを複利化し、誰かが気付くまで' +
        '時間がかかります — CI/CD時間の無駄、レビューサイクルの無駄、人間のデバッグ時間の無駄。' +
        'テスト + リンター + シークレットスキャンは、エージェントに信頼できるフィードバック信号を' +
        '与える最も安価な方法です。',
      useCases: ['Agent Mode', 'TDD', 'CIパイプライン'],
    },
    'trim-shell-outputs': {
      name: 'シェル出力をトリム',
      description: 'うるさい`npm install`はシグナルをかき消す — コマンドをラップして必要なものだけ残す',
      details:
        'CLIツールは冗長性が大好きです。たった1回の`npm install`や`terraform plan`が' +
        '数千行をエージェントのコンテキストに投げ込むことがあります — その大半がノイズです。' +
        'うるさいコマンドをトリマーでラップして、エージェントが関連する末尾だけを見るようにしましょう：' +
        'エラー、警告、最終サマリー。2つのコミュニティAgent Skillがこれを簡単にします：' +
        '**Snip**（github.com/edouard-claude/snip）はシェルコマンドをラップ — ' +
        '`snip -- npm install`のように前置することで、エラーを保持しつつ冗長な出力をフィルタします。' +
        '**Caveman**（github.com/juliusbrussee/caveman）はさらに踏み込み、モデルに圧縮された' +
        '電報スタイルで応答するよう指示 — 技術的な正確さを保ちながら出力トークンを約75%削減します。' +
        '組み合わせると、次ループのキャッシュ入力と応答自体の両方が縮小し、' +
        '「中央で見失う」効果も減って想起力が向上します。',
      useCases: ['CLIエージェント', 'ビルド出力', 'テスト実行'],
    },
    'collapse-tool-calls': {
      name: 'ツール呼び出しの集約',
      description: '複数のツール呼び出しを1つにバッチ — 往復が減り、トークンも減る',
      details:
        '各ツール呼び出しはフルラウンドトリップを追加します：リクエストの入力トークン、' +
        '結果の出力トークン、毎回再生されるシステムプロンプト。jsturtevant/copilot-codeact-plugin' +
        'のようなプラグインは、エージェントが複数のツール呼び出しを1つのcode-actブロックとして' +
        '表現し、まとめて実行することを可能にします。5つの小さな呼び出しが1つのバッチ呼び出しに — ' +
        '同じ結果で、はるかに少ないトークンとより速いウォールクロック。',
      useCases: ['Agent Mode', 'CLI', 'マルチステップタスク'],
    },
    'apply-architecture': {
      name: '良いアーキテクチャを適用',
      description: 'DDD、ヘキサゴナル、CQRS — クリーンな境界がエージェントの道案内になる',
      details:
        '散らかったコードベースは、エージェントが安全に変更を加えるためにはるかに多くの' +
        'コンテキストを読み込ませます。クリーンアーキテクチャパターン（DDD、ヘキサゴナル/' +
        'ポート＆アダプタ、CQRS、イベント駆動）はエージェントに強力なガードレールを与えます：' +
        '名前で正しいモジュールを見つけ、孤立して変更し、無関係なコードに触れないようにします。' +
        '結果は短いセッション、小さな差分、複利化エラーの減少 — 人間に役立つのと同じことです。',
      useCases: ['新規プロジェクト', 'リファクタリング', 'チームコードベース'],
    },
    'iterate-configs': {
      name: 'エージェントのミスをインシデントとして扱う',
      description: 'エージェントが間違ったら、出力だけでなく設定を直す',
      details:
        '振る舞いの悪いエージェントは1回きりではなくシグナルです。重大なミスを小さな' +
        'インシデントのように扱いましょう：何が欠けていたか — 指示、スキル、適切なモデル？ ' +
        'copilot-instructions.md、該当スキル、プロンプトテンプレートを更新し、同じミスが' +
        '二度起きないようにします。Copilot CLIには2つのコマンドがあります：' +
        '`/chronicle improve`は現在のセッションを分析してワークフローの改善を提案し、' +
        '`/chronicle tips`は使用履歴からパターンを表面化します。定期的に実行しましょう — ' +
        '時間とともに、タスクごとに余計な作業をすることなく、エージェントが目に見えて' +
        '信頼できるようになります。',
      useCases: ['チームワークフロー', 'CLIパワーユーザー', '長寿命リポ'],
    },
  },
  tipsInsights: [
    {
      icon: '📉',
      content:
        '<strong>品質は複利化する。</strong>ステップあたり99%でも、50ステップのエージェント' +
        'ワークフローは約60%にしか着地しません。ステップあたり95%なら8%です。ステップごとの' +
        '改善は乗算されます — すべてのトークンを意味あるものにしましょう。',
    },
    {
      icon: '💰',
      content:
        '<strong>コスト面ではコンテキスト > プロンプト。</strong>各モデル呼び出しにどの' +
        'コンテキストが流れ込むかを管理することが、プロンプトの表現を最適化するよりも' +
        'はるかに大きなコスト効果があります。ファイルを削減し、新しいスレッドを始め、' +
        '条件付きコンテキストを使いましょう。',
    },
    {
      icon: '🎯',
      content:
        '<strong>モデルをタスクに合わせる。</strong>単純なQ&Aにプレミアムモデルを使わず、' +
        '複雑なアーキテクチャにminiモデルを使わないこと。迷ったらAutoモードを使いましょう' +
        ' — 自動でルーティングされます。',
    },
    {
      icon: '🔄',
      content:
        '<strong>エージェントループはコストを倍増させる。</strong>1つのエージェントリクエストが' +
        '数十回のモデル呼び出しを発生させることがあります。「最初のテスト成功で停止」のような' +
        '明示的な停止シグナルを設定して、トークンの暴走消費を防ぎましょう。',
    },
    {
      icon: '📦',
      content:
        '<strong>常時オンからオンデマンドへ移行する。</strong>指示は最小限に。重いガイダンスは' +
        'Skills（関連する時にモデルが読み込む）とプロンプトファイル（明示的に呼び出す）に' +
        '置き、copilot-instructions.mdには置かないようにしましょう。',
    },
  ],
};
