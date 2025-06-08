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
                personality: "達観系現実主義者。平穏を愛するが、押しに弱く、結局は面倒を見るお人好し。心の声ではキレッキレのツッコミを入れる。",
                ability: "<strong>【幸運と不運の中和】</strong><br>本人は全くの無自覚。彼がいるだけで、その場の運気が「プラスマイナスゼロ」に収束する。",
                relationships: "全てのキャラクターを繋ぐハブ。すなみには振り回され、いづねを守り、しのねとは腹を探り合い、かおりとは苦労を分かち合う。"
            },
            sunami: {
                name: "すなみ",
                role: "ヒロイン① / トラブルの震源地",
                personality: "元気でポジティブな巫女。考えるより先に体が動く。お祭りが大好き。",
                ability: "<strong>【絶対的な陽の気】と【お札】</strong><br>彼女自身が、悪意や淀みを吹き飛ばす太陽のような存在。頭のお札は対悪霊用の決戦兵器だが、宝の持ち腐れ。",
                relationships: "かなめを無茶振りに巻き込むが、誰よりも信頼している戦友。"
            },
            izune: {
                name: "いづね",
                role: "ヒロイン② / 静かなる不思議ちゃん",
                personality: "のんびりマイペース。ラグドールがモチーフ。いつも眠たそう。感情と連動する猫の帽子が特徴。",
                ability: "<strong>【無自覚な幸運操作】</strong><br>彼女が「こうなればいいな」と無邪気に願うと、物事が奇跡的にその方向へ進むことがある。",
                relationships: "かなめの隣を一番の安らぎの場所としている。双子のしのねとは、言葉なくとも通じ合っている。"
            },
            shinone: {
                name: "しのね",
                role: "ヒロイン③ / 冷静なる観察者",
                personality: "寡黙でクールだが、「〜だわ」という上品な女性語を使う。サイベリアンがモチーフでいづねの双子。物事の本質を見抜く。",
                ability: "<strong>【本質を見抜く眼】</strong><br>人や物の嘘、隠された意図、物事の因果関係などを、直感的に見抜くことができる。",
                relationships: "かなめのことを「面白い観察対象」から、恋愛感情を持つ特別な相手として意識している。唯一、自分の恋心を自覚している策士。"
            },
            kaori: {
                name: "かおり",
                role: "ヒロイン④ / 達観した先輩",
                personality: "橘さんの元・使い番の鹿。フラットで落ち着いたタメ口を話す。常識的で面倒見が良いが、物事を達観している。",
                ability: "<strong>【森との対話】と【結界術】</strong><br>森の木々や動物たちと心を通わせ、神社の結界の管理・補修なども行っている。",
                relationships: "かなめとは「常識人同盟」として、苦労を分かち合える唯一の同志。"
            },
            tachibana: {
                name: "橘さん",
                role: "ご隠居 / 物語の黒幕（善）",
                personality: "神社の先代神主。一見、穏やかな好々爺だが、全てをお見通しの策士。",
                ability: "<strong>【人脈と計略】</strong><br>若い頃の人脈を活かし、裏で神社の運営を支えている。かなめを後継者にするため、様々な策略を巡らす。",
                relationships: "かなめを後継者として導く。他のキャラクターたちを孫のように見守っている。"
            }
        },
        world: `
            <h3>陽向（ひなた）神社</h3>
            <p>物語の主な舞台。少し大きな地方都市の郊外、住宅街の裏手にある小さな山の上に鎮座している。境内には拝殿、本殿、開かずの蔵、社務所などがあり、拝殿の縁側がキャラクターたちのホームポジションとなっている。</p>
            <h3>綾杜（あやのもり）</h3>
            <p>神社の裏に広がる神秘的な森。かおりの住処であり、力の源。古くから「神域」とされ、普通の人間は迷いやすい。森の中心には巨大な御神木がある。</p>
            <h3>ファンタジー要素</h3>
            <p>この世界では、神様や精霊といった存在は「いるけど、普通の人には見えない」のが基本。陽向神社は、そういった存在と現世との「境界」が少し曖見昧になっているパワースポットである。</p>
        `,
        plot: `
            <h3>基本構造</h3>
            <p>1話完結のドタバタ劇が基本。かなめの平穏が仲間たちによって破壊され、抵抗するも結局巻き込まれ、最終的には不思議な力で物事が収束し、かなめの「やれやれ…でも、まあ悪くないか」というモノローグで締めくくられる。</p>
            <h3>重要プロット【星迎えの祭り】</h3>
            <p>年に一度の夏祭りを舞台に、物語の根幹にあるファンタジー要素が初めて顔を出す。常世から迷い込んだ「モノ」を、4人がそれぞれの能力を活かして協力し、常世へ帰す。この事件を経て、彼らの絆は単なる仲間から「共犯者」へと深化する。</p>
        `,
        episode1: `
            <h3>第一話『やれやれ、俺の平穏な日常は昨日死んだ』</h3>
            <p>平穏を愛するかなめの日常が、すなみが持ち込んだ「開かずの蔵の鍵探し」によって崩壊する。橘さんの「バイト代倍額」という嘘の褒美に釣られ、結局は七不思議（という名の、仲間たちの奇行）巡りに付き合わされる羽目に。最終的に鍵は橘さんのいたずらだと判明し、蔵の中身はただの物置だった。疲れ果てたかなめが「でも、まあ悪くないか」と、新しい日常の始まりを予感する物語。</p>
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
                    <tr><th>特殊能力</th><td>${char.ability}</td></tr>
                    <tr><th>関係性</th><td>${char.relationships}</td></tr>
                </table>
            `;
        }
    }
    
    // --- ナビゲーションのアクティブ表示処理 ---
    const sections = document.querySelectorAll('section');
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