document.addEventListener('DOMContentLoaded', () => {

   const characterDetailsData = {
    kaname: {
        name: "かなめ",
        image: "https://via.placeholder.com/150/cccccc/000000?text=Kaname",
        catchphrase: "やれやれ、俺の平穏は昨日死んだ。",
        details: [
            { title: "物語が始まる前", content: "特にやりたいこともなく、時給の良さから陽向神社のバイトに応募したところ、なぜか橘さんに大歓迎され、見習いとして働くことになったごく普通の青年。" },
            { title: "基本プロフィール", content: "達観系ツッコミ常識人。平穏を愛するが、押しに弱く、結局は面倒を見るお人好し。物語の語り部であり、読者の視点代行者。" },
            { title: "心情変化チャート", content: "<strong>初期：</strong>逃避と諦観 → <strong>中期：</strong>絆されと責任感 → <strong>後期：</strong>自覚と居場所。当初は他人事だった仲間たちの騒動を、次第に『自分たちの物語』として捉え、守るべき日常だと認識していく。" },
            { title: "対人関係考察", content: "すなみには振り回され、いづねを守り、しのねとは腹を探り合い、かおりとは苦労を分かち合う。全ての関係性の中心にいるが、恋愛感情には極めて鈍感。" },
            { title: "作者メモ（裏設定）", content: "彼の『中和能力』は、彼が仲間たちへの愛着を深めるほど強力になる。最終的には、彼が本気で『守りたい』と願うことで、小規模な奇跡を起こせるかもしれない。" }
        ]
    },
    sunami: {
        name: "すなみ",
        image: "https://i.imgur.com/gK9pS5v.png",
        catchphrase: "難しいことはよくわかんないけど、楽しければオッケー！",
        details: [
            { title: "物語が始まる前", content: "親戚である橘さんの神社で、物心ついた頃から育った巫女。難しい作法は苦手だが、その元気さで神社の看板娘（兼マスコット）として可愛がられている。" },
            { title: "基本プロフィール", content: "神社の看板娘。思考回路が非常にシンプルで、難しいことを考えるのが苦手な、天真爛漫なアホの子。常に「楽しそう！」という直感だけで行動し、結果的に周囲を巻き込むトラブルの震源地となる。" },
            { title: "心情変化チャート", content: "<strong>初期：</strong>新しい遊び相手 → <strong>中期：</strong>面白いことを一緒にやってくれる一番の友達 → <strong>後期：</strong>なんだか気になる、特別な人。かなめが他の女の子と話していると、胸がモヤモヤする。その感情が『ヤキモチ』や『恋』だとは、全く理解できていない。『お腹すいたのかな？』くらいに思っている。" },
            { title: "対人関係考察", content: "誰に対しても全力でぶつかっていく、太陽のような存在。かなめを『一番のお気に入り』として、何にでも誘う。しのねの難しい話は子守唄。かおりのツッコミは応援だと思っている。" },
            { title: "作者メモ（裏設定）", content: "彼女の持つ純粋な『陽の気』は、理屈を超えて物事を良い方向へ導く触媒となる。彼女が心の底から『楽しい！』と感じている時、その場の運気は最大まで活性化し、奇跡的な偶然を引き起こすことがある。" }
        ]
    },
    izune: {
        name: "いづね",
        image: "https://i.imgur.com/G5g2mJc.jpeg",
        catchphrase: "ふふ…おひさまの匂い…",
        details: [
            { title: "物語が始まる前", content: "神社の森に住み着いていた力の弱い白猫（猫又）だったが、橘さんに保護され、双子のしのねより一足先に人間の姿を得た。" },
            { title: "基本プロフィール", content: "ラグドールがモチーフの、のんびりマイペースな不思議ちゃん。いつも眠たそうで、口数が少ないが、行動で意思を示す。感情と連動する猫の帽子がチャームポイント。" },
            { title: "心情変化チャート", content: "<strong>初期：</strong>心地よい場所 → <strong>中期：</strong>特別な定位置 → <strong>後期：</strong>絶対的な信頼と愛情。当初は単に居心地が良いからかなめの隣にいただけだが、彼が自分を理解し、守ってくれる特別な存在だと認識するにつれ、ひな鳥が親を慕うような無垢で絶対的な好意を寄せるようになる。" },
            { title: "対人関係考察", content: "かなめの隣が世界の中心。双子のしのねとは、言葉を交わさずとも心で通じ合えるもう一人の自分。すなみの騒がしさは、心地よいBGMくらいにしか思っていない。" },
            { title: "作者メモ（裏設定）", content: "彼女の『無自覚な幸運操作』は、彼女自身の「願い」の強さに比例する。かなめを「守りたい」と強く願った時、その力は限定的ながらも「運命」に干渉するほどの奇跡を起こす可能性がある。" }
        ]
    },
    shinone: {
        name: "しのね",
        image: "https://via.placeholder.com/150/2c3e50/ffffff?text=Shinone",
        catchphrase: "…あら、面白いことを考えるのね、あなたは。",
        details: [
            { title: "物語が始まる前", content: "いづねと共に森に住んでいた黒猫（猫又）。心配ないづねを追って自ら橘さんの前に現れ、人間の姿を得た。人間社会と『人間』という生き物を、興味深い観察対象として捉えている。" },
            { title: "基本プロフィール", content: "サイベリアンがモチーフの、冷静沈着な観察者。いづねの双子。寡黙でクールだが、「〜だわ」という上品な女性語を使う。物事の本質を見抜く鋭い眼を持つ。" },
            { title: "心情変化チャート", content: "<strong>初期：</strong>面白い観察対象 → <strong>中期：</strong>唯一の理解者 → <strong>後期：</strong>自覚した恋心。当初は凡人かなめの反応を楽しんでいただけだったが、彼が自分の理屈っぽさや孤独を自然に受け入れてくれる唯一の存在だと気づき、特別な感情を抱く。プライドが邪魔をして、素直になれないのが現在の悩み。" },
            { title: "対人関係考察", content: "かなめを唯一、自分と対等な思考レベルの相手と認めている。いづねは守るべき半身。すなみの行動は良い研究対象。かおりとは、静かな場所で難しい本について語り合える貴重な友人。" },
            { title: "作者メモ（裏設定）", content: "彼女の『本質を見抜く眼』は、人の嘘や隠し事を見通せるが、いづねの純粋な願いや、かなめの無欲な善意のような「裏のない感情」は読み取ることができず、少し戸惑うことがある。" }
    ]
    },
    kaori: {
        name: "かおり",
        image: "https://via.placeholder.com/150/27ae60/ffffff?text=Kaori",
        catchphrase: "あらあら、君も大変だね。お茶でもどう？",
        details: [
            { title: "物語が始まる前", content: "かつては橘さんの側で神社の実務を手伝っていた『神使』の鹿。現在は一線を退き、森の管理人として、神社とそこに住む者たちを静かに見守っている。" },
            { title: "基本プロフィール", content: "鹿がモチーフの、達観した先輩。フラットで落ち着いたタメ口を話す、サバサバした姉御肌。常識的で面倒見が良いが、物事を達観しており感情的になることは少ない。" },
            { title: "心情変化チャート", content: "<strong>初期：</strong>常識人同盟の仲間 → <strong>中期：</strong>放っておけない後輩 → <strong>後期：</strong>特別な信頼と、ほのかな好意。当初はかなめを『ツッコミ役の同志』として見ていたが、彼が持つ優しさや『中和能力』の本質に気づくにつれ、森の調和を保つためのパートナーとして、また一人の男性として意識し始める。その気持ちに少し戸惑っている。" },
            { title: "対人関係考察", content: "かなめとは一番気楽に話せる相手。すなみ達を手のかかる妹のように見守っている。橘さんとは、互いの考えを理解し合える古い戦友のような関係。" },
            { title: "作者メモ（裏設定）", content: "彼女は森の精霊に近いため、人間の持つ『矛盾した感情（特に恋愛）』を完全に理解することはできない。かなめへの好意を、森の調和を保つための合理的な感情だと、自分に言い聞かせようとしている節がある。" }
        ]
    },
    tachibana: {
        name: "橘さん",
        image: "https://via.placeholder.com/150/7f8c8d/ffffff?text=Tachibana",
        catchphrase: "良きことかな。若いうちの苦労は、買うてでもせよ、と言うからのぅ。",
        details: [
            { title: "物語が始まる前", content: "全国でも名の知れた高名な神主だったが、世界のバランスが崩れていくのを憂い一線を退く。後継者を探していたところ、偶然神社に来たかなめの内に秘められた稀有な才能を見出し、神の導きだと確信した。" },
            { title: "基本プロフィール", content: "神社の先代神主で、現在はご隠居。一見、穏やかな好々爺だが、全てをお見通しの食えない策士。神社の離れにある庵で悠々自適に暮らしている。" },
            { title: "心情変化チャート", content: "彼の心情は物語の最初から最後まで、ほぼ一貫している。それは『かなめを立派な後継者に育て、この神社と仲間たちの未来を託す』というもの。彼の行動はすべて、この目的のために計算されている。" },
            { title: "対人関係考察", content: "かなめを『最高の逸材』として見出し、様々な試練（無茶振り）を与えて彼の成長を楽しんでいる。すなみ達のことも、かなめをこの場所に繋ぎとめるための重要な『楔』であり、可愛い孫娘たちだと思っている。" },
            { title: "作者メモ（裏設定）", content: "彼がかなめに執着するのは、彼の『中和能力』が、かつて自分が追い求めていた『神と人と自然が調和した理想郷』を実現するための最後のピースだと確信しているから。" }
        ]
    }
};

// 以降のコードは変更なし
// ...

    const tabsContainer = document.getElementById('character-tabs');
    const contentContainer = document.getElementById('character-details-content');

    // タブとコンテンツを生成
    for (const charKey in characterDetailsData) {
        const char = characterDetailsData[charKey];
        
        // タブボタンを作成
        const tabButton = document.createElement('button');
        tabButton.className = 'tab-button';
        tabButton.textContent = char.name;
        tabButton.dataset.target = charKey;
        tabsContainer.appendChild(tabButton);

        // コンテンツエリアを作成
        const contentDiv = document.createElement('div');
        contentDiv.id = charKey;
        contentDiv.className = 'tab-content';
        
        let detailsHtml = `
            <div class="character-profile" style="display: flex; align-items: center; gap: 30px;">
                <img src="${char.image}" alt="${char.name}" style="width:150px; height:150px; object-fit:contain; border-radius: 50%;">
                <div>
                    <h2>${char.name}</h2>
                    <p><em>「${char.catchphrase}」</em></p>
                </div>
            </div>
        `;

        char.details.forEach(section => {
            detailsHtml += `
                <div class="detail-section">
                    <h4>${section.title}</h4>
                    <p>${section.content}</p>
                </div>
            `;
        });
        contentDiv.innerHTML = detailsHtml;
        contentContainer.appendChild(contentDiv);
    }

    // タブ切り替え機能
    tabsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-button')) {
            const targetId = e.target.dataset.target;

            // 全てのタブとコンテンツを非アクティブに
            tabsContainer.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            contentContainer.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

            // クリックされたものだけアクティブに
            e.target.classList.add('active');
            document.getElementById(targetId).classList.add('active');
            
            // URLのハッシュを更新
            history.pushState(null, null, `#${targetId}`);
        }
    });

    // URLハッシュに基づいて初期タブを表示
    function showTabFromHash() {
        const hash = window.location.hash.substring(1);
        const targetTab = document.querySelector(`.tab-button[data-target="${hash}"]`);
        
        if (targetTab) {
            targetTab.click();
        } else {
            // デフォルトで最初のタブを表示
            document.querySelector('.tab-button').click();
        }
    }

    showTabFromHash();
});