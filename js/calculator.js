
const recipeDatabase = {

    "rantotta": {
        title: "Klasszikus Rántotta",
        baseServings: 1,
        ingredients: [
            { name: "Tojás", amount: 3, unit: "db" },
            { name: "Vöröshagyma", amount: 0.5, unit: "fej" },
            { name: "Olaj vagy zsír", amount: 1, unit: "ek" },
            { name: "Só, bors", amount: 1, unit: "csipet" },
            { name: "Pirospaprika", amount: 1, unit: "tk" }
        ],
        steps: [
            "Vágd apróra a hagymát.",
            "Üvegesítsd meg a hagymát a zsiradékon.",
            "Húzd le a tűzről, szórd meg pirospaprikával.",
            "Verd fel a tojásokat a sóval és borssal.",
            "Öntsd a tojást a hagymára, és süsd készre ízlés szerint (lágyan vagy keményen)."
        ]
    },
    "bundaskenyer": {
        title: "Bundáskenyér",
        baseServings: 2,
        ingredients: [
            { name: "Szikkadt kenyér", amount: 4, unit: "szelet" },
            { name: "Tojás", amount: 3, unit: "db" },
            { name: "Tej", amount: 0.5, unit: "dl" },
            { name: "Só", amount: 1, unit: "csipet" },
            { name: "Olaj (sütéshez)", amount: 100, unit: "ml" }
        ],
        steps: [
            "Verd fel a tojásokat a tejjel és a sóval.",
            "Hevítsd fel az olajat egy serpenyőben.",
            "Forgasd meg a kenyérszeleteket a tojásos masszában.",
            "Süsd aranybarnára mindkét oldalát.",
            "Tálald tejföllel, sajttal vagy fokhagymával."
        ]
    },
    "zabkasa": {
        title: "Almás-fahéjas Zabkása",
        baseServings: 1,
        ingredients: [
            { name: "Zabpehely", amount: 50, unit: "g" },
            { name: "Tej vagy víz", amount: 200, unit: "ml" },
            { name: "Alma", amount: 1, unit: "db" },
            { name: "Fahéj", amount: 1, unit: "tk" },
            { name: "Méz vagy cukor", amount: 1, unit: "ek" }
        ],
        steps: [
            "Tedd a zabpelyhet és a folyadékot egy lábasba.",
            "Főzd közepes lángon kb. 5 percig, amíg besűrűsödik.",
            "Reszeld bele az almát (vagy vágd kockákra).",
            "Keverd hozzá a fahéjat és az édesítőt.",
            "Tálaláskor szórhatsz rá diót is."
        ]
    },
    "bananos_palacsinta": {
        title: "Banános Palacsinta (Lisztmentes)",
        baseServings: 1,
        ingredients: [
            { name: "Érett banán", amount: 1, unit: "db" },
            { name: "Tojás", amount: 2, unit: "db" },
            { name: "Fahéj", amount: 1, unit: "csipet" },
            { name: "Vaj vagy olaj", amount: 1, unit: "tk" }
        ],
        steps: [
            "Nyomkodd össze a banánt egy villával pépesre.",
            "Keverd hozzá a tojásokat és a fahéjat.",
            "Hevíts pici zsiradékot egy serpenyőben.",
            "Süss kis korongokat a masszából (nehezebb forgatni, mint a simát, légy óvatos!).",
            "Süsd oldalanként 1-2 percig."
        ]
    },

    // === EBÉDEK ===
    "carbonara": {
        title: "Carbonara (Diák verzió)",
        baseServings: 2,
        ingredients: [
            { name: "Spagetti tészta", amount: 250, unit: "g" },
            { name: "Bacon / Szalonna", amount: 150, unit: "g" },
            { name: "Tojássárgája", amount: 3, unit: "db" },
            { name: "Főzőtejszín (opcionális)", amount: 100, unit: "ml" },
            { name: "Reszelt sajt", amount: 100, unit: "g" },
            { name: "Feketebors", amount: 1, unit: "tk" }
        ],
        steps: [
            "Tegyél fel vizet forrni a tésztának sóval.",
            "Közben pirítsd le a felkockázott bacont.",
            "Keverd össze a tojássárgáját, a sajtot (és a tejszínt) egy tálban sok borssal.",
            "Ha kész a tészta, szűrd le, de tarts meg picit a főzővízből.",
            "Forgasd a tésztát a forró baconre.",
            "Vedd le a tűzről (!), és keverd hozzá a tojásos szószt. A tészta hője megfőzi a tojást, de nem lesz rántotta."
        ]
    },
    "sajtos_tejes": {
        title: "Sajtos-Tejfölös Tészta",
        baseServings: 2,
        ingredients: [
            { name: "Tészta (bármilyen)", amount: 250, unit: "g" },
            { name: "Tejföl", amount: 300, unit: "ml" },
            { name: "Reszelt sajt (Trappista)", amount: 150, unit: "g" },
            { name: "Só", amount: 1, unit: "tk" },
            { name: "Szalonna (opcionális)", amount: 50, unit: "g" }
        ],
        steps: [
            "Főzd ki a tésztát sós vízben.",
            "Ha van szalonnád, pirítsd le kockákra vágva.",
            "Szűrd le a tésztát.",
            "Keverd össze a tésztát a szalonnazsírral (vagy vajjal).",
            "Halmozd rá a hideg tejfölt és a rengeteg reszelt sajtot."
        ]
    },
    "pestos_teszta": {
        title: "Pestós Tészta",
        baseServings: 2,
        ingredients: [
            { name: "Tészta (Penne/Spagetti)", amount: 250, unit: "g" },
            { name: "Pesto (zöld vagy piros)", amount: 0.5, unit: "üveg" },
            { name: "Főzővíz", amount: 3, unit: "ek" },
            { name: "Sajt (Parmesan jellegű)", amount: 50, unit: "g" },
            { name: "Koktélparadicsom", amount: 8, unit: "db" }
        ],
        steps: [
            "Főzd ki a tésztát.",
            "Mielőtt leszűröd, tegyél félre egy pohárnyit a főzővízből.",
            "A leszűrt tésztához keverd hozzá a pestót és egy keveset a főzővízből (ettől krémes lesz).",
            "Dobd hozzá a félbevágott paradicsomokat.",
            "Szórd meg sajttal és tálald."
        ]
    },
    "chili_con_carne": {
        title: "Chili con Carne",
        baseServings: 3,
        ingredients: [
            { name: "Darált hús", amount: 400, unit: "g" },
            { name: "Vörösbab konzerv", amount: 1, unit: "db" },
            { name: "Kukorica konzerv", amount: 1, unit: "db" },
            { name: "Paradicsomszósz", amount: 400, unit: "ml" },
            { name: "Hagyma", amount: 1, unit: "fej" },
            { name: "Chili por/paprika", amount: 1, unit: "tk" }
        ],
        steps: [
            "Pirítsd meg az apróra vágott hagymát olajon.",
            "Add hozzá a darált húst és pirítsd fehéredésig.",
            "Öntsd hozzá a paradicsomszószt és fűszerezd (só, bors, chili).",
            "Főzd 15 percig kis lángon.",
            "Add hozzá a leszűrt babot és kukoricát, majd főzd össze még 5 percig."
        ]
    },
    "tonhalas_teszta": {
        title: "Tonhalas Tészta",
        baseServings: 2,
        ingredients: [
            { name: "Tészta", amount: 250, unit: "g" },
            { name: "Tonhal konzerv", amount: 1, unit: "db" },
            { name: "Paradicsomszósz vagy Tejszín", amount: 200, unit: "ml" },
            { name: "Hagyma", amount: 0.5, unit: "fej" },
            { name: "Citromlé", amount: 1, unit: "tk" }
        ],
        steps: [
            "Tedd fel a tésztát főni.",
            "Pirítsd meg a hagymát, majd add hozzá a tonhalat.",
            "Öntsd fel a szósszal (paradicsom vagy tejszín) és forrald össze.",
            "Ízesítsd sóval, borssal, citromlével.",
            "Keverd össze a kifőtt tésztával."
        ]
    },

    "gyros": {
         title: "Gyros Tortilla",
         baseServings: 2,
         ingredients: [
             { name: "Tortilla lap", amount: 4, unit: "db" },
             { name: "Csirkemell", amount: 300, unit: "g" },
             { name: "Gyros fűszerkeverék", amount: 1, unit: "csomag" },
             { name: "Kígyóuborka", amount: 0.5, unit: "db" },
             { name: "Paradicsom", amount: 2, unit: "db" },
             { name: "Joghurtos öntet", amount: 1, unit: "dl" }
         ],
         steps: [
             "Csíkozd fel a húst, fűszerezd be és süsd ki serpenyőben.",
             "Vágd fel a zöldségeket.",
             "Melegítsd meg a tortilla lapokat (mikróban vagy serpenyőben).",
             "Kend meg a lapot öntettel, halmozd rá a húst és a zöldséget.",
             "Hajtsd fel az alját, majd tekerd fel szorosan."
         ]
    },
    "melegszendvics": {
        title: "Melegszendvics",
        baseServings: 2,
        ingredients: [
            { name: "Kenyérszelet", amount: 4, unit: "db" },
            { name: "Vaj vagy margarin", amount: 2, unit: "ek" },
            { name: "Sonka / Szalámi", amount: 4, unit: "szelet" },
            { name: "Sajt", amount: 100, unit: "g" },
            { name: "Pizzafűszer", amount: 1, unit: "tk" }
        ],
        steps: [
            "Kend meg a kenyereket vékonyan vajjal.",
            "Tegyél rá felvágottat.",
            "Szórd meg bőségesen sajttal és fűszerrel.",
            "Süsd előmelegített sütőben (vagy szendvicssütőben) amíg a sajt ráolvad (kb 10 perc)."
        ]
    },
    "gorog_salata": {
        title: "Görög Saláta",
        baseServings: 2,
        ingredients: [
            { name: "Kígyóuborka", amount: 1, unit: "db" },
            { name: "Paradicsom", amount: 3, unit: "db" },
            { name: "Lilahagyma", amount: 1, unit: "fej" },
            { name: "Feta sajt (vagy krémfehér)", amount: 150, unit: "g" },
            { name: "Olívabogyó", amount: 10, unit: "db" },
            { name: "Olívaolaj", amount: 3, unit: "ek" }
        ],
        steps: [
            "Vágd a zöldségeket nagyobb kockákra.",
            "Szeleteld fel a hagymát vékony karikákra.",
            "Keverd össze őket egy tálban az olajjal.",
            "Tedd a tetejére a kockára vágott sajtot és az olívabogyót.",
            "Szórd meg oregánóval. Pirítós illik mellé."
        ]
    },
    "smack_leves": {
        title: "Felturbózott Smack Leves",
        baseServings: 1,
        ingredients: [
            { name: "Instant leves (Smack/Vifon)", amount: 1, unit: "csomag" },
            { name: "Tojás", amount: 1, unit: "db" },
            { name: "Újhagyma", amount: 1, unit: "szál" },
            { name: "Virsli (opcionális)", amount: 1, unit: "db" }
        ],
        steps: [
            "Készítsd el a levest a leírás szerint forró vízzel.",
            "Amíg a tészta puhul, főzz egy tojást (félkeményre a legjobb, kb 6-7 perc).",
            "Vágd karikára az újhagymát és a virslit.",
            "Ha kész a leves, tedd bele a feltéteket. Így már valódi étel!"
        ]
    },


    "popcorn": {
        title: "Mikrós Popcorn Extra",
        baseServings: 1,
        ingredients: [
            { name: "Mikrós popcorn", amount: 1, unit: "csomag" },
            { name: "Vaj", amount: 1, unit: "ek" },
            { name: "Reszelt sajt (füstölt)", amount: 20, unit: "g" }
        ],
        steps: [
            "Pattogtasd ki a kukoricát a mikróban.",
            "Olvaszd fel a vajat.",
            "Öntsd a vajat a forró kukoricára, rázd össze.",
            "Szórd meg azonnal a finomra reszelt sajttal, hogy ráolvadjon."
        ]
    },
    "alma_mogyorovaj": {
        title: "Almaszeletek Mogyoróvajjal",
        baseServings: 1,
        ingredients: [
            { name: "Alma", amount: 1, unit: "db" },
            { name: "Mogyoróvaj", amount: 2, unit: "ek" },
            { name: "Csokidarabok (opcionális)", amount: 1, unit: "tk" }
        ],
        steps: [
            "Mosd meg az almát, vágd ki a csumáját.",
            "Szeleteld fel vékony gerezdekre.",
            "Kend meg a szeleteket mogyoróvajjal.",
            "Igazi energia bomba tanuláshoz."
        ]
    },
    "diakcsemege": {
        title: "Saját Diákcsemege Mix",
        baseServings: 2,
        ingredients: [
            { name: "Földimogyoró (sótlan)", amount: 50, unit: "g" },
            { name: "Mazsola", amount: 30, unit: "g" },
            { name: "Étcsokoládé", amount: 30, unit: "g" },
            { name: "Dió vagy mandula", amount: 30, unit: "g" }
        ],
        steps: [
            "Tördeld apróra a csokit.",
            "Öntsd egy tálba az összes összetevőt.",
            "Keverd össze. Sokkal olcsóbb, mint a bolti zacskós!"
        ]
    },
    "bananturmix": {
        title: "Banánturmix",
        baseServings: 1,
        ingredients: [
            { name: "Banán", amount: 1, unit: "db" },
            { name: "Tej (vagy növényi tej)", amount: 3, unit: "dl" },
            { name: "Méz", amount: 1, unit: "tk" },
            { name: "Vanília aroma", amount: 1, unit: "csepp" }
        ],
        steps: [
            "Tördeld a banánt a turmixgépbe.",
            "Öntsd hozzá a tejet és a mézet.",
            "Turmixold 30 másodpercig, amíg habos nem lesz.",
            "Hidegen a legjobb!"
        ]
    }
};


function updateCalculator(recipeKey, newServings) {
    const data = recipeDatabase[recipeKey];
    const listElement = document.getElementById('modal-ingredients');
    

    listElement.innerHTML = '';


    data.ingredients.forEach(item => {

        let calculatedAmount = (item.amount / data.baseServings) * newServings;
        

        calculatedAmount = Math.round(calculatedAmount * 10) / 10;

        const li = document.createElement('li');
        li.innerHTML = `<strong>${calculatedAmount} ${item.unit}</strong> ${item.name}`;
        listElement.appendChild(li);
});
}