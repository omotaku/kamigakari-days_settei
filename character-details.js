document.addEventListener('DOMContentLoaded', () => {

   const characterDetailsData = {
        kaname: {
            name: "かなめ (要)",
            image: "https://via.placeholder.com/150/cccccc/000000?text=Kaname",
            catchphrase: "やれやれ、俺の平穏な日常は昨日死んだ。",
            details: [
                { title: "基本プロフィール", content: "本作の主人公、語り部、ツッコミ役、そして巻き込まれ体質の常識人。特徴のない、ごく普通の青年。普段はやる気がなく、少し眠たそうな「死んだ魚のような目」をしているが、ツッコミを入れる瞬間だけは鋭く光る。口では「面倒だ」「帰りたい」と常に文句を言っているが、本心では仲間を見捨てられないお人好し。この「本音と建前」のギャップが彼の最大の魅力。" },
                { title: "特殊能力：【幸運と不運の中和】", content: "本人は全くの無自覚。彼がいるだけで、その場の運気が「プラスマイナスゼロ」に収束する。すなみの強運が暴走すれば「吉」程度に、しのねやいづねの不運が発動しそうになれば「少しドタバタする」程度に被害を抑える。彼の「やれやれ」な人生は、実はこの能力のせい。" },
                { title: "心情変化チャート", 
                  content: "<ul>" +
                           "<li><strong>初期『逃避と諦観』</strong>:「なんで俺が…」と平穏を求め、非日常的な仲間たちから距離を置こうとする。「関わるとロクなことがない」と皮肉たっぷりに実況。</li>" +
                           "<li><strong>中期『絆されと責任感』</strong>:「仕方ないな」「俺がやらないと…」と、後始末や軌道修正が自分の「役目」だと不本意ながら自覚。「手のかかる奴らだ」「放っておけない」と庇護欲が芽生え始める。</li>" +
                           "<li><strong>後期『自覚と居場所』</strong>:「こいつらといるのも、まあ悪くない」「この場所は、俺が守る」。非日常がかけがえのない「日常」になったことを自覚し、仲間一人ひとりの個性を尊重し、全員が笑っていられる「居場所」を大切にしたいと心の底から願うようになる。</li>" +
                           "</ul>" },
                { title: "対人関係考察", content: "<strong>すなみ:</strong> 最も手のかかる相手だが、彼女の裏表のない笑顔に弱い。<br><strong>いづね:</strong> 守るべき妹のような存在。彼女の安らかな寝顔が癒やし。<br><strong>しのね:</strong> 唯一、腹の探り合いができる対等な相手。彼女の意外な一面にドキッとさせられる。<br><strong>かおり:</strong> 唯一、愚痴や弱音をこぼせる「常識人同盟」の仲間。<br><strong>橘さん:</strong> 尊敬する大人であり、同時に最も警戒すべきラスボス。" }
            ]
        },
        sunami: {
            name: "すなみ",
            image: "https://via.placeholder.com/150/e74c3c/ffffff?text=Sunami",
            catchphrase: "難しいことはよくわかんないけど、楽しければオッケー！",
            details: [
                { title: "基本プロフィール", content: "ヒロイン①、トラブルメーカー、行動力の化身。太陽のような笑顔が眩しい、元気いっぱいの巫女。動きやすいように改造した装束を着ている。彼女の行動に悪意は一切ない。ただ「楽しそう！」という純粋な好奇心と善意が、結果的に大騒動を引き起こす直感型人間。" },
                { title: "特殊能力：【絶対的な陽の気】と【お札】", content: "彼女自身が、悪意や淀みを吹き飛ばす太陽のような存在。彼女が本気で舞うと、神聖な力で場を浄化できる。頭のお札は、橘さんが作った対悪霊用の決戦兵器だが、悪霊がいないため宝の持ち腐れ。本人はただの名札だと思っている。" },
                { title: "心情変化チャート",
                  content: "<ul>" +
                           "<li><strong>初期【便利な相棒】</strong>: かなめを「フットワークが軽くて、文句を言うけど結局手伝ってくれる便利な人」と認識。彼の能力を純粋に評価している。</li>" +
                           "<li><strong>中期【信頼できる戦友】</strong>: どんなトラブルにも最後まで付き合ってくれる彼を、誰よりも信頼できる「背中を預けられる相手」だと感じるようになる。</li>" +
                           "<li><strong>後期【かけがえのない存在(無自覚な恋)】</strong>: 彼が隣にいるのが当たり前になる。彼がいないと、いつもの元気が少しだけ出ない。他の女の子と仲良くしていると、理由のわからないモヤモヤを感じる。この気持ちが「恋」だとは、まだ気づいていない。</li>" +
                           "</ul>" },
                { title: "対人関係考察", content: "<strong>かなめ:</strong> 最高の相棒。彼なら何とかしてくれると全幅の信頼を置いている。彼への気持ちは、まだ友情と恋の区別がついていない。" }
            ]
        },
        izune: {
            name: "いづね",
            image: "https://via.placeholder.com/150/ecf0f1/2c3e50?text=Izune",
            catchphrase: "ふふ…おひさまの匂い…",
            details: [
                { title: "基本プロフィール", content: "ヒロイン②、不思議ちゃん、静かなる癒やし。モチーフはラグドール(猫)。ほんわかした雰囲気で、いつも少し眠たそう。感情と連動する猫の帽子がチャームポイント。善悪の概念があまりなく、ただ「好き」「気持ちいい」という感覚で行動するため、時々予測不能なトラブルを引き起こす。" },
                { title: "特殊能力：【無自覚な幸運操作】", content: "彼女が「こうなればいいな」と無邪気に願うと、物事が奇跡的にその方向へ進むことがある。本人は全くの無自覚で、ただの結果論だと思っている。" },
                { title: "心情変化チャート",
                  content: "<ul>" +
                           "<li><strong>初期【心地よい場所】</strong>: かなめの隣は、日当たりの良い縁側と同じくらい「気持ちよくて安心できる場所」。理由はなく、とにかく彼のそばにいたい。</li>" +
                           "<li><strong>中期【特別な定位置】</strong>: 彼の隣が、他のどんな場所よりも特別な「自分の定位置」になる。彼が淹れてくれるお茶、彼のおんぶが、世界で一番好きになる。</li>" +
                           "<li><strong>後期【絶対的な信頼と愛情】</strong>: 彼のためなら、自分の持つ不思議な力を(無自覚に)使ってもいいと思っている。彼が悲しんでいると、自分も悲しくなる。言葉にはしないが、その存在すべてで「大好き」を伝えている。</li>" +
                           "</ul>" },
                { title: "対人関係考察", content: "<strong>かなめ:</strong> 世界で一番安心できる場所。彼に寄りかかって寝るのが至福の時。<br><strong>しのね:</strong> 言葉を交わさずとも心で通じ合える、もう一人の自分。" }
            ]
        },
        shinone: {
            name: "しのね",
            image: "https://via.placeholder.com/150/2c3e50/ffffff?text=Shinone",
            catchphrase: "…あら、面白いことを考えるのね、あなたは。",
            details: [
                { title: "基本プロフィール", content: "ヒロイン③、クールな参謀、恋する策士。モチーフはサイベリアン(猫)で、いづねの双子。黒髪ロングの姫カットに、切れ長のツリ目。ミステリアスな雰囲気。感情を表に出さず、常に一歩引いた場所から状況を分析している。知的好奇心が強く、難解な本やパズルを好む。" },
                { title: "特殊能力：【本質を見抜く眼】", content: "人や物の嘘、隠された意図、物事の因果関係などを、直感的に見抜くことができる。ただし、他人の恋愛感情のような非論理的なものは苦手。" },
                { title: "心情変化チャート",
                  content: "<ul>" +
                           "<li><strong>初期【面白い観察対象】</strong>: 常識人である彼が、非日常にどう反応し、どうツッコむのかを知的な好奇心で観察している。彼を少しからかって、その反応を見るのが楽しい。</li>" +
                           "<li><strong>中期【唯一の理解者】</strong>: 自分の冷静さや理屈っぽさを、彼だけが対等な目線で受け止め、時には議論してくれることに気づく。自分の本質を理解してくれる、特別な存在だと認識し始める。</li>" +
                           "<li><strong>後期【自覚した恋心】</strong>: 彼への感情が、単なる興味や友情ではない、「恋」であるとハッキリ自覚する。しかし、プライドが邪魔して素直になれない。わざと彼を困らせるような言動で、自分の存在を意識させようとする、少し屈折したアプローチを試みる。</li>" +
                           "</ul>" },
                { title: "対人関係考察", content: "<strong>かなめ:</strong> 唯一、自分の思考レベルについてこられる面白い人間。自分の策に彼がどう反応するかを試すのが楽しい。<br><strong>いづね:</strong> 守るべき半身。彼女の自由奔放さを、少し羨ましくも思っている。" }
            ]
        },
        kaori: {
            name: "かおり",
            image: "https://via.placeholder.com/150/27ae60/ffffff?text=Kaori",
            catchphrase: "あらあら、君も大変だね。お茶でもどう？",
            details: [
                { title: "基本プロフィール", content: "ヒロイン④、達観した先輩、常識人同盟。モチーフは鹿。栗色の髪を無造作なポニーテールにしている。落ち着いた、少し涼しげな目元。元・神使として、人間や世界の理(ことわり)をある程度理解しているため、些細なことでは動じない。サバサバした姉御肌で面倒見は良いが、過剰に甘やかすことはしない。" },
                { title: "特殊能力：【森との対話】と【結界術】", content: "森の木々や動物たちと心を通わせ、薬草の知識や天候の変化などを知ることができる。神社の結界の管理・補修なども、橘さんに代わって彼女が行っている。" },
                { title: "心情変化チャート",
                  content: "<ul>" +
                           "<li><strong>初期【常識人同盟の仲間】</strong>: 新しく現れた「話の通じる人間」として、かなめに親近感を覚える。すなみ達への愚痴やツッコミを共有できることに、安らぎを感じる。</li>" +
                           "<li><strong>中期【放っておけない後輩】</strong>: 彼の持つ優しさや、不器用ながらも仲間を思う気持ちに気づき、姉のような気持ちで彼を見守るようになる。「もう、仕方ないわね」と、彼の苦労を先回りして助けてあげることが増える。</li>" +
                           "<li><strong>後期【特別な信頼と、ほのかな好意】</strong>: 彼の「中和能力」が、自分の守るべき「森の調和」と似ていることに気づき、彼を単なる人間以上の、特別な存在として認識する。彼の隣が、自分にとっても心地よい居場所になっていることを自覚し、その気持ちに少し戸惑う。</li>" +
                           "</ul>" },
                { title: "対人関係考察", content: "<strong>かなめ:</strong> 唯一、気兼ねなく愚痴を言い合える同志。彼の成長を、少し離れた場所から見守っている。<br><strong>橘さん:</strong> 元・上司。彼の考えを先読みできるため、時々彼の計画に協力したり、逆に釘を刺したりする。" }
            ]
        },
        tachibana: {
            name: "橘さん",
            image: "https://via.placeholder.com/150/7f8c8d/ffffff?text=Tachibana",
            catchphrase: "良きことかな。若いうちの苦労は、買うてでもせよ、と言うからのぅ。",
            details: [
                { title: "基本プロフィール", content: "神社の先代神主で、現在はご隠居。一見、穏やかな好々爺だが、全てをお見通しの食えない策士。神社の離れにある庵で悠々自適に暮らしているように見える。" },
                { title: "物語における役割", content: "かなめを後継者にするため、様々な口実で彼を試し、導く存在。物語のトラブルは、元を辿ればこの人が仕組んでいることも多い。彼の行動はすべて、かなめをこの場所に繋ぎとめ、成長させるための計算されたものである。" },
                { title: "心情変化チャート", content: "彼の心情は物語の最初から最後まで、ほぼ一貫している。それは<strong>『かなめを立派な後継者に育て、この神社と仲間たちの未来を託す』</strong>というもの。彼の行動はすべて、この目的のために計算されている。" },
                { title: "対人関係考察", content: "<strong>かなめ:</strong> 最高の逸材として見出し、様々な試練（無茶振り）を与えて彼の成長を楽しんでいる。<br><strong>すなみ達:</strong> かなめをこの場所に繋ぎとめるための重要な『楔』であり、可愛い孫娘たちだと思っている。" }
            ]
        }
    };
    

    const tabsContainer = document.getElementById('character-tabs');
    const contentContainer = document.getElementById('character-details-content');

    // タブとコンテンツを生成
    let firstCharKey = null;
    for (const charKey in characterDetailsData) {
        if (!firstCharKey) firstCharKey = charKey;
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
            <div class="character-profile" style="display: flex; align-items: flex-start; gap: 30px; flex-wrap: wrap;">
                <img src="${char.image}" alt="${char.name}" style="width:150px; height:150px; object-fit:contain; border-radius: 8px; background-color: #e9ecef;">
                <div style="flex: 1; min-width: 300px;">
                    <h2 style="margin-top:0;">${char.name}</h2>
                    <p><em>「${char.catchphrase}」</em></p>
                </div>
            </div>
        `;

        char.details.forEach(section => {
            detailsHtml += `
                <div class="detail-section">
                    <h4>${section.title}</h4>
                    <div>${section.content}</div>
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
        } else if (firstCharKey) {
            // デフォルトで最初のタブを表示
            document.querySelector(`.tab-button[data-target="${firstCharKey}"]`).click();
        }
    }

    showTabFromHash();
});