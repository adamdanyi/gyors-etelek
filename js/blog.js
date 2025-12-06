
const blogData = {
    "rizs": {
        title: "Tökéletes rizs mikróban? Igen!",
        tag: "Technika",
        tagClass: "technika",
        icon: "🍚",
        content: `
            <h3>Miért mikróban?</h3>
            <p>Mert a kollégiumban gyakran foglalt a tűzhely, vagy csak egyszerűen nincs kedved mellette állni és kavargatni. A mikrós rizs ugyanolyan finom, ha betartod az arányokat.</p>
            
            <h4>A titkos arány: 1:2</h4>
            <p>Ez a legfontosabb: <strong>1 bögre rizshez 2 bögre víz</strong> kell (plusz egy pici só).</p>
            
            <h4>Lépések:</h4>
            <ol>
                <li>Mossd át a rizst alaposan egy szűrőben (amíg a víz tiszta nem lesz).</li>
                <li>Tedd egy mély, mikrózható tálba (fontos, hogy nagy legyen, mert a víz felhabzik!).</li>
                <li>Öntsd rá a kétszeres mennyiségű vizet és sózd meg.</li>
                <li>Tedd be a mikróba <strong>fedő nélkül</strong> 10-12 percre (max. fokozaton).</li>
                <li>Ha lejárt, vedd ki (vigyázz, forró!), tegyél rá egy tányért fedőnek, és hagyd állni 5 percig. Ezalatt szívja magába a maradék gőzt.</li>
            </ol>
            <p>Kész is! Pergős, puha, és nem égett oda.</p>
        `
    },
    "bevasarlas": {
        title: "A 3000 Ft-os nagybevásárlás",
        tag: "Spórolás",
        tagClass: "sporolas",
        icon: "🛒",
        content: `
            <h3>Túlélőcsomag a hétre</h3>
            <p>Hó vége van? Semmi gond. Ebből a listából kihozhatsz ebédet és vacsorát egész hétre.</p>
            
            <h4>A bevásárlólista:</h4>
            <ul>
                <li><strong>Tészta (1 kg):</strong> kb. 600 Ft - A legolcsóbb energiaforrás.</li>
                <li><strong>Burgonya (1 kg):</strong> kb. 400 Ft - Sütheted, főzheted, pürésítheted.</li>
                <li><strong>Tojás (10 db):</strong> kb. 700 Ft - Fehérjeforrás reggelire vagy tésztára.</li>
                <li><strong>Tejföl (nagy pohár):</strong> kb. 500 Ft - Mindenre jó.</li>
                <li><strong>Szezonális zöldség/hagyma:</strong> kb. 500 Ft - Ízesítéshez.</li>
                <li><strong>Virsli vagy legolcsóbb felvágott:</strong> kb. 300 Ft.</li>
            </ul>
            <p><strong>Összesen: ~3000 Ft</strong></p>
            <p>Ezekből készíthetsz: krumplis tésztát, tojásos nokedlit (ha van liszted), paprikás krumplit virslivel, vagy sima sültkrumplit tükörtojással.</p>
        `
    },
    "fagyasztas": {
        title: "Mit fagyassz le és mit ne?",
        tag: "Tárolás",
        tagClass: "tarolas",
        icon: "❄️",
        content: `
            <h3>A fagyasztó a legjobb barátod</h3>
            <p>Ha túl sokat főztél, vagy akciós volt valami, a fagyasztó megmenti a pénztárcádat. De nem mindent szabad beletenni!</p>
            
            <h4>✅ Amit BÁTRAN fagyassz le:</h4>
            <ul>
                <li><strong>Kenyér:</strong> Szeletelve tedd el. Pirítóban olyan lesz, mintha friss lenne.</li>
                <li><strong>Pörköltek, bolognai szósz:</strong> Ezek felolvasztva talán még finomabbak is.</li>
                <li><strong>Reszelt sajt:</strong> Igen! Szórd zacskóba, nem áll össze, és mehet pizzára.</li>
                <li><strong>Vaj és margarin:</strong> Hónapokig eláll.</li>
            </ul>

            <h4>❌ Amit SOHA ne fagyassz le:</h4>
            <ul>
                <li><strong>Főtt krumpli:</strong> Kásás és vizes lesz az állaga.</li>
                <li><strong>Saláta, uborka:</strong> Löttyedt, ehetetlen lesz.</li>
                <li><strong>Tejföl, joghurt:</strong> Szétválik az állaga (darabos lesz), főzéshez még elmegy, de nyersen nem.</li>
            </ul>
        `
    },
    "eszkozok": {
        title: "Kollégiumi alapfelszerelés",
        tag: "Eszközök",
        tagClass: "eszkoz",
        icon: "🔪",
        content: `
            <h3>Ne cipeld el otthonról az egész konyhát!</h3>
            <p>Kezdő egyetemistaként hajlamos az ember mindent megvenni. Felesleges. Ez az 5 dolog elég a túléléshez:</p>
            
            <ol>
                <li><strong>Egy mélyebb serpenyő (Wok jellegű):</strong> Ebben lehet rántottát sütni, de tésztát főzni és pörköltet is csinálni. Univerzális!</li>
                <li><strong>Egy közepes lábas:</strong> Levesnek, tésztának.</li>
                <li><strong>Egy ÉLES kés:</strong> Nem kell 5 db tompa kés. Egy séfkés mindent visz.</li>
                <li><strong>Vágódeszka:</strong> Fa vagy műanyag, mindegy, csak ne az asztalt vágd össze.</li>
                <li><strong>Fakanál és merőkanál:</strong> Alapvető.</li>
            </ol>
            <p>Extra tipp: Egy vízforraló életmentő lehet, nem csak teához, de a tésztafőzés gyorsításához is!</p>
        `
    },
    "tojas": {
        title: "Tojásfőzés kisokos",
        tag: "Technika",
        tagClass: "technika",
        icon: "🥚",
        content: `
            <h3>Hány percig főzzem?</h3>
            <p>Forrástól számítva (amikor már lobog a víz):</p>
            <ul>
                <li><strong>3 perc:</strong> Nagyon lágy, folyós sárgája és fehérje.</li>
                <li><strong>5-6 perc:</strong> Lágytojás (szilárd fehérje, folyós sárgája). Tökéletes reggelire.</li>
                <li><strong>8 perc:</strong> Majdnem kemény, de a közepe még krémes.</li>
                <li><strong>10 perc:</strong> Keménytojás. Ez mehet a rakott krumpliba vagy szendvicsbe.</li>
            </ul>
            <h4>Hogyan pucold könnyen?</h4>
            <p>A titok a <strong>hősokk</strong>. Amint kész a tojás, öntsd le a forró vizet, és engedj rá jéghideg vizet. Hagyd benne állni 2 percig. A héj szinte magától lejön!</p>
        `
    },
    "fuszerek": {
        title: "Fűszerek, amik feldobják a kaját",
        tag: "Ízesítés",
        tagClass: "technika",
        icon: "🧂",
        content: `
            <h3>Felejtsd el az ízetlen ételeket!</h3>
            <p>Ha van ez az 5 fűszer a polcodon, a legolcsóbb tésztából is jót hozhatsz ki.</p>
            <ol>
                <li><strong>Füstölt pirospaprika:</strong> Sokkal jobb, mint a sima. Baconös ízt ad hús nélkül is.</li>
                <li><strong>Oregánó / Bazsalikom:</strong> Bármilyen paradicsomos vagy sajtos ételt "olaszossá" tesz.</li>
                <li><strong>Fokhagyma granulátum:</strong> Nem kell pucolni, nem lesz büdös a kezed, de az íz megvan.</li>
                <li><strong>Curry por:</strong> Rizshez, csirkéhez, tejszínes szószokhoz szuper.</li>
                <li><strong>Szójaszósz:</strong> Nem csak ázsiai kajához! Pörköltbe, bolognaiba téve mélyíti az ízeket (só helyett).</li>
            </ol>
        `
    }
};




    

    const modal = document.getElementById('blog-modal');
    const closeBtn = document.querySelector('.modal-close');
    const readMoreBtns = document.querySelectorAll('.read-more');
    const cards = document.querySelectorAll('.blog-card');

    const openBlogModal = (card) => {
        const id = card.getAttribute('data-id');
        const data = blogData[id];

        if (data && modal) {

            document.getElementById('modal-title').innerText = data.title;
            document.getElementById('modal-body').innerHTML = data.content;
            document.getElementById('modal-icon').innerText = data.icon;
            

            const tagSpan = document.getElementById('modal-tag');
            tagSpan.innerText = data.tag;
            tagSpan.className = `blog-tag ${data.tagClass}`; 


            modal.classList.add('open');
            document.body.style.overflow = 'hidden'; 
        }
    };


    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.blog-card');
            openBlogModal(card);
        });
    });


    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            openBlogModal(card);
        });
    });


    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    }


    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });


    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || filter === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
;