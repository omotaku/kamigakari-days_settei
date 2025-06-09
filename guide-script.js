document.addEventListener('DOMContentLoaded', () => {

    // --- 全設定データ ---
    const guideData = {
        philosophy: `
            <h3>かなめの視点</h3>
            <p>この物語は、徹頭徹尾、主人公「かなめ」の視点とモノローグで語られます。彼の「やれやれ」というフィルターを通すことで、どんな非日常的な出来事も、親しみやすいコメディに昇華されます。</p>
            <h3>黄金比率</h3>
            <p>物語の構成は、<strong>「ドタバタコメディ 70%」「心温まる日常 20%」「根幹のファンタジー 10%」</strong>の比率を意識しています。基本は笑える話ですが、ふとした瞬間にキャラクターたちの絆や成長が描かれ、その背景には神秘的な世界が広がっている…という奥行きを目指します。</p>
            <h3>テーマ</h3>
            <p>「退屈な日常」を望んでいた主人公が、「面倒でかけがえのない非日常」の中に、本当の「居場所」と心の平穏を見つけていく物語です。</p>
        `,
        characters: {
            kaname: {
                name: "かなめ (要)",
                role: "主人公 / 語り部 / ツッコミ役",
                personality: "達観系現実主義者。平穏を愛するが、押しに弱く、結局は面倒を見るお人好し。心の声(モノローグ)ではキレッキレのツッコミを入れる。",
                secret: "<strong>幸運と不運を中和させる能力</strong>の持ち主だが、本人は全く自覚していない。彼がいるからこそ、この神社の奇跡的な平和が保たれている。",
                relationships: "全てのキャラクターを繋ぐハブ(中心)。すなみには振り回され、いづねを守り、しのねとは腹を探り合い、かおりとは苦労を分かち合う。"
            },
            sunami: {
                name: "すなみ",
                role: "ヒロイン① / トラブルメーカー",
                personality: "元気でポジティブな巫女。考えるより先に体が動く。お祭りが大好き。",
                secret: "頭のお札は対悪霊用の決戦兵器だが、この世界に悪霊はいないため宝の持ち腐れ。",
                relationships: "かなめを無茶振りに巻き込むが、誰よりも信頼している戦友。他の女子とは、姉妹のように賑やかに過ごす。"
            },
            izune: {
                name: "いづね",
                role: "ヒロイン② / 不思議ちゃん",
                personality: "のんびりマイペース。ラグドール(猫)がモチーフ。いつも眠たそう。口数が少ないが、行動で意思を示す。感情で動く猫の帽子がアイテム。",
                secret: "双子のしのねとは、言葉なくとも通じ合っている。",
                relationships: "かなめの隣を一番の安らぎの場所としている。"
            },
            shinone: {
                name: "しのね",
                role: "ヒロイン③ / クールな参謀",
                personality: "サイベリアン(猫)がモチーフの、いづねの双子。寡黙でクールだが、口を開くと「〜だわ」という上品な女性語を使う。物事の本質を見抜く。",
                secret: "ファー付きのフード付きケープがアイテム。",
                relationships: "かなめのことを「面白い観察対象」から、恋愛感情を持つ特別な相手として意識している。唯一、自分の恋心を自覚している策士。"
            },
            kaori: {
                name: "かおり",
                role: "ヒロイン④ / 達観した先輩",
                personality: "橘さんの元・使い番だった神使。モチーフは鹿。フラットで落ち着いたタメ口(「〜だよ」)を話す。常識的で面倒見が良いが、物事を達観している。",
                secret: "致命的な方向音痴(森の外限定)。",
                relationships: "かなめとは「常識人同盟」として、他のメンバーへのツッコミや愚痴を共有できる唯一の同志。他の女子たちにとっては、頼れるお姉さん。"
            },
            tachibana: {
                name: "橘さん",
                role: "ご隠居 / 策士",
                personality: "神社の先代神主。一見、穏やかな好々爺だが、全てをお見通しの策士。",
                secret: "物語のトラブルは、元を辿ればこの人が仕組んでいることも多い。",
                relationships: "かなめを後継者にするため、様々な口実で彼を試したり、導いたりする。"
            }
        },
        world: `
            <h3>陽向（ひなた）神社</h3>
            <p>物語の主な舞台。少し大きな地方都市の郊外、住宅街の裏手にある小さな山(丘)の上に鎮座している。石段の参道は長く、木々に覆われていて、昼でも少し薄暗い。登り切ると、俗世から切り離されたような、静かで神聖な空気が漂う。</p>
            <ul>
                <li><strong>別名:</strong> 地元の古老からは、昔の地名にちなんで「綾杜(あやのもり)神社」と呼ばれることもある。</li>
                <li><strong>拝殿の縁側:</strong> かなめがお茶を飲んだり、みんなが集まったりする、この物語の最も重要なホームポジション。</li>
            </ul>
            <h3>綾杜（あやのもり）</h3>
            <p>神社の裏に広がる神秘的な森。古くから<strong>「神域」</strong>とされ、普通の人間は道に迷いやすい。しかし、かおりにとっては自分の庭のような場所。季節の薬草や、珍しいキノコ、美味しい木の実などが豊富に採れる。森の中心には、樹齢数百年を数える巨大な御神木がある。</p>
            <h3>ファンタジー要素</h3>
            <p>この世界では、神様や精霊、あやかしといった存在は<strong>「いるけど、普通の人には見えない・認識できない」</strong>のが基本。陽向神社は、そういった存在と現世との「境界」が少しだけ曖昧になっているパワースポットである。すなみ、いづね、しのね、かおりは、人間に近い姿形をしているが、その本質は神様や精霊に近い、高位の存在。</p>
        `,
        plot: `
            <h3>基本構造（1話完結）</h3>
            <p>以下の「型」をベースに物語が展開する。</p>
            <ol>
                <li>かなめの平穏が、すなみ達によって破壊される。</li>
                <li>かなめは抵抗するも、結局巻き込まれる。</li>
                <li>4人(+かなめ)の個性がぶつかり合い、事態はカオス化。</li>
                <li>奇跡や偶然、かなめの「中和能力」によって、なぜか物事は良い方向へ収束する。</li>
                <li>かなめの「やれやれ...でも、まあ悪くないか」というモノローグで締め。</li>
            </ol>
            <h3>重要プロット【星迎えの祭り】</h3>
            <p>年に一度の夏祭りを舞台に、物語の根幹にあるファンタジー要素が初めて顔を出す。常世から迷い込んだ「モノ」を、4人がそれぞれの能力を活かして協力し、常世へ帰す。この事件を経て、彼らの絆は単なる仲間から「共犯者」へと深化する。</p>
        `,
        episode1: `
            <p>この物語の原点であり、最高のスタイルガイド。キャラクターの話し方、物語のテンポ、ツッコミのキレなど、全ての基準がここにある。ウェブサイトプロジェクトとして、HTML/CSS/JSで作成したキャラクター紹介サイトもあり、キャラクターのプロフィールやデザインの最終決定版が反映されている。</p>
        `
    };

    // --- データ挿入処理 ---
    document.getElementById('section-philosophy').innerHTML = guideData.philosophy;
    document.getElementById('section-world').innerHTML = guideData.world;
    document.getElementById('section-plot').innerHTML = guideData.plot;
    document.getElementById('section-episode1').innerHTML = guideData.episode1;

    for (const charKey in guideData.characters) {
        const char = guideData.characters[charKey];
        const container = document.getElementById(`char-${charKey}`);
        if (container) {
            container.innerHTML = `
                <h3>${char.name}</h3>
                <table>
                    <tr><th>役割</th><td>${char.role}</td></tr>
                    <tr><th>性格</th><td>${char.personality}</td></tr>
                    <tr><th>秘密/能力</th><td>${char.secret}</td></tr>
                    <tr><th>関係性</th><td>${char.relationships}</td></tr>
                </table>
            `;
        }
    }
    
    // --- ナビゲーションのアクティブ表示処理 ---
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.side-nav li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});