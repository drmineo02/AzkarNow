// قائمة الأدعية
const duas = [
    ".اللهم إني أسألك العفو والعافية في الدنيا والآخرة",
    ".اللهم اشرح صدري ويسر أمري",
    ".اللهم اجعل لي من كل هم فرجًا ومن كل ضيق مخرجًا",
    ".اللهم اغفر لي ذنوبي وبارك لي في رزقي",
    ".اللهم ارزقني حسن الخاتمة",
    ".اللهم أعني على ذكرك وشكرك وحسن عبادتك",
    ".اللهم اجعلني من عبادك الصالحين.",
    ".اللهم اجعل القرآن العظيم ربيع قلبي ونور صدري",
    ".اللهم يسر أمري واشرح لي صدري",
    ".اللهم احفظ أهلي وأحبتي من كل سوء",
    ".اللهم ارحمني برحمتك التي وسعت كل شيء",
    ".اللهم يا مقلب القلوب ثبت قلبي على دينك",
    ".اللهم إني أسألك الجنة وما قرب إليها من قول وعمل",
    ".اللهم قني عذابك يوم تبعث عبادك.",
    ".اللهم لا تدع لي ذنبًا إلا غفرته ولا همًا إلا فرجته",
    ".اللهم احفظني من كل شر وسوء.",
    ".اللهم ارزقني حسن الخاتمة وأحسن عاقبتي في الأمور كلها",
    ".اللهم اغفر لي ولوالدي وللمسلمين والمسلمات الأحياء منهم والأموات",
    ".اللهم أصلح لي شأني كله، ولا تكلني إلى نفسي طرفة عين",
    ".اللهم إني أسألك العفو والعافية في الدنيا والآخرة",
    ".اللهم ارزقني رزقًا حلالًا طيبًا مباركًا فيه",
    ".اللهم افتح لي أبواب فضلك، وارزقني من حيث لا أحتسب",
    ".اللهم يسر لي أمري، وبارك لي في وقتي وجهدي",
    ".اللهم إنك عفو تحب العفو فاعف عني",
    ".رب اغفر لي وتب عليّ إنك أنت التواب الرحيم",
    ".اللهم إني ظلمت نفسي ظلمًا كثيرًا، فاغفر لي مغفرة من عندك",
    ".اللهم اشفِ مرضانا ومرضى المسلمين، شفاءً لا يغادر سقمًا",
    ".اللهم أذهب البأس، رب الناس، اشفِ أنت الشافي، لا شفاء إلا شفاؤك",
    ".اللهم احفظني بحفظك، واكلأني برعايتك.",
    ".اللهم إني أستودعك نفسي وأهلي وديني، فاحفظنا بحفظك",
    ".أعوذ بكلمات الله التامات من شر ما خلق.",
    ".اللهم إني أسألك من الخير كله عاجله وآجله ما علمت منه وما لم أعلم",
    ".اللهم إني أعوذ بك من الشر كله عاجله وآجله ما علمت منه وما لم أعلم",
    ".اللهم اجعلني من التوابين واجعلني من المتطهرين",
    ".اللهم إني أسألك رضاك والجنة، وأعوذ بك من سخطك والنار",
    ".اللهم إني أسألك علمًا نافعًا ورزقًا طيبًا وعملًا متقبلًا",
    ".اللهم يا ذا الجلال والإكرام، أسألك أن ترحمني برحمتك",
    ".اللهم إني أعوذ بك من العجز والكسل",
    ".اللهم إني أعوذ بك من غلبة الدين وقهر الرجال",
    ".اللهم اجعلني شاكرًا لنعمتك، حامدًا لفضلك، مقيمًا على طاعتك"
];

// قائمة أذكار الصباح
const morningAzkar = [
    ".أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
    ".اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور.",
    ".سبحان الله وبحمده، عدد خلقه، ورضا نفسه، وزنة عرشه، ومداد كلماته (ثلاث مرات)"
];

// قائمة أذكار المساء
const eveningAzkar = [
    ". أمسينا وأمسى الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
    ". اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير",
    ". أعوذ بكلمات الله التامات من شر ما خلق (ثلاث مرات)"
];

// قائمة الأدعية المختارة
const selectedPrayers = [
    "اللهم إني أسألك الهدى والتقى والعفاف والغنى.",
    "اللهم اغفر لي خطيئتي وجهلي وإسرافي في أمري.",
    "اللهم إني أعوذ بك من زوال نعمتك وتحول عافيتك وفجاءة نقمتك وجميع سخطك.",
    "اللهم اجعل لي نورًا في قلبي ونورًا في قبري ونورًا في سمعي ونورًا في بصري."
];

// قائمة الثيمات المحددة
const themes = {
    default: { background: "#009688", emoji: "🌿" },
    dark: { background: "#222", emoji: "🌙" },
    blue: { background: "#2196F3", emoji: "💙" },
    purple: { background: "#9C27B0", emoji: "💜" },
    pink: { background: "#E91E63", emoji: "🌸" },
    gray: { background: "#607D8B", emoji: "🩶" },
    teal: { background: "#008080", emoji: "🦚" },
    brown: { background: "#795548", emoji: "🤎" },
    cyan: { background: "#00BCD4", emoji: "🌊" },
    lime: { background: "#CDDC39", emoji: "🍋" },
    orange: { background: "#FF9800", emoji: "🍊" },
    olive: { background: "#808000", emoji: "🌿" },
    coral: { background: "#FF7F50", emoji: "🐚" },
    turquoise: { background: "#40E0D0", emoji: "🏝️" },
    krizy: { background: "#800000", emoji: "🍒" }
};

// قائمة القراء وروابط الصوت
const readers = {
    "Alafasy": "https://everyayah.com/data/Alafasy_128kbps/",
    "Yasser_Ad-Dussary": "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/",
    "AbdurRahman_As-Sudais": "https://everyayah.com/data/AbdurRahman_As-Sudais_192kbps/",
    "AbdulBasit": "https://everyayah.com/data/Abdul_Basit_Murattal_192kbps/"
};

// المفضلة
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// عرض دعاء عشوائي
function getRandomDua() {
    const randomIndex = Math.floor(Math.random() * duas.length);
    const duaElement = document.getElementById("dua");
    if (duaElement) {
        duaElement.innerText = duas[randomIndex];
        updateStarState();
    } else {
        console.error("عنصر 'dua' غير موجود في الصفحة");
    }
}

// تحديث حالة النجمة
function updateStarState() {
    const duaText = document.getElementById("dua").innerText;
    const star = document.querySelector(".star");
    if (favorites.includes(duaText)) {
        star.classList.add("active");
    } else {
        star.classList.remove("active");
    }
}

// إضافة أو إزالة دعاء من المفضلة
function addToFavorites() {
    const duaText = document.getElementById("dua").innerText;
    const star = document.querySelector(".star");
    if (duaText) {
        if (favorites.includes(duaText)) {
            favorites = favorites.filter(fav => fav !== duaText);
            star.classList.remove("active");
        } else {
            favorites.push(duaText);
            star.classList.add("active");
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavoritesList();
    }
}

// تحديث قائمة المفضلة
function updateFavoritesList() {
    const favoritesList = document.getElementById("favorites-list");
    if (favoritesList) {
        favoritesList.innerHTML = "";
        favorites.forEach(fav => {
            const li = document.createElement("li");
            li.innerText = fav;
            favoritesList.appendChild(li);
        });
    }
}

// تغيير الثيم
function changeTheme() {
    const selectedTheme = document.getElementById("theme-selector").value;
    if (themes[selectedTheme]) {
        document.body.style.background = themes[selectedTheme].background;
        document.querySelectorAll("h1").forEach(h1 => {
            const titleText = h1.innerText.split(" ")[1] || "دعاء اليوم";
            h1.innerHTML = `${themes[selectedTheme].emoji} ${titleText} ${themes[selectedTheme].emoji}`;
        });
    } else {
        console.error("الثيم المحدد غير موجود:", selectedTheme);
    }
}

// إظهار / إخفاء الإعدادات
function toggleSettings(event) {
    const panel = document.querySelector(".settings-panel");
    if (panel) {
        panel.style.display = panel.style.display === "block" ? "none" : "block";
        event.stopPropagation();
    } else {
        console.error("عنصر 'settings-panel' غير موجود");
    }
}

// إغلاق قائمة الإعدادات عند النقر خارجها
document.addEventListener("click", function(event) {
    const settingsPanel = document.querySelector(".settings-panel");
    const settingsBtn = document.querySelector(".settings-btn");
    if (settingsPanel && settingsBtn && !settingsPanel.contains(event.target) && !settingsBtn.contains(event.target) && settingsPanel.style.display === "block") {
        settingsPanel.style.display = "none";
    }
});

// إظهار القسم المحدد
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add("active");
        if (sectionId === "prayers-section") {
            loadRandomPrayer();
        }
    } else {
        console.error("القسم غير موجود:", sectionId);
        return;
    }

    const quranText = document.getElementById("quran-text");
    const footerNote = document.getElementById("footer-note");
    const settingsBtn = document.querySelector(".settings-btn");
    const settingsPanel = document.querySelector(".settings-panel");

    if (sectionId === "quran-section") {
        if (quranText) quranText.classList.add("active");
        if (footerNote) footerNote.style.display = "none";
        if (settingsBtn) settingsBtn.classList.add("quran-active");
        if (settingsPanel) settingsPanel.classList.add("quran-active");
    } else {
        if (quranText) quranText.classList.remove("active");
        if (footerNote) footerNote.style.display = "block";
        if (settingsBtn) settingsBtn.classList.remove("quran-active");
        if (settingsPanel) settingsPanel.classList.remove("quran-active");
    }
}

// تحميل السور من API
async function loadSurahs() {
    try {
        const response = await fetch("https://api.alquran.cloud/v1/surah");
        if (!response.ok) throw new Error("فشل في جلب السور");
        const data = await response.json();
        const surahSelector = document.getElementById("surah-selector");
        if (surahSelector) {
            surahSelector.innerHTML = "<option value=''>اختر سورة</option>";
            data.data.forEach(surah => {
                const option = document.createElement("option");
                option.value = surah.number;
                option.text = surah.name;
                surahSelector.appendChild(option);
            });
        } else {
            console.error("عنصر 'surah-selector' غير موجود");
        }
    } catch (error) {
        console.error("خطأ في تحميل السور:", error);
        alert("حدث خطأ أثناء تحميل السور، تأكد من اتصالك بالإنترنت وحاول مرة أخرى.");
    }
}

// تحميل الآيات ونص السورة عند اختيار سورة
let currentAyahs = [];
async function loadAyahs() {
    const surahNumber = document.getElementById("surah-selector").value;
    if (!surahNumber) return;

    try {
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
        if (!response.ok) throw new Error("فشل في جلب الآيات");
        const data = await response.json();
        const ayahSelector = document.getElementById("ayah-selector");
        const quranText = document.getElementById("quran-text");
        const audio = document.getElementById("quran-audio");

        if (ayahSelector) {
            ayahSelector.innerHTML = "<option value='full'>تشغيل السورة كاملة</option>";
            currentAyahs = data.data.ayahs;
            currentAyahs.forEach((ayah, index) => {
                const option = document.createElement("option");
                option.value = index + 1;
                option.text = `آية ${index + 1}`;
                ayahSelector.appendChild(option);
            });
        } else {
            console.error("عنصر 'ayah-selector' غير موجود");
        }

        if (quranText) {
            quranText.innerHTML = "";
            if (surahNumber !== "1") {
                const basmalaDiv = document.createElement("div");
                basmalaDiv.classList.add("ayah");
                basmalaDiv.id = "ayah-0";
                basmalaDiv.innerText = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";
                quranText.appendChild(basmalaDiv);
            }

            currentAyahs.forEach((ayah, index) => {
                const ayahDiv = document.createElement("div");
                ayahDiv.classList.add("ayah");
                ayahDiv.id = `ayah-${index + 1}`;
                ayahDiv.innerText = `${ayah.text} (${index + 1})`;
                quranText.appendChild(ayahDiv);
            });
        } else {
            console.error("عنصر 'quran-text' غير موجود");
        }

        if (audio) {
            audio.src = "";
            audio.load();
        } else {
            console.error("عنصر 'quran-audio' غير موجود");
        }
    } catch (error) {
        console.error("خطأ في تحميل الآيات:", error);
        alert("حدث خطأ أثناء تحميل الآيات، تأكد من اتصالك بالإنترنت وحاول مرة أخرى.");
    }
}

// تغيير القارئ
function changeReader() {
    playAyah();
}

// تشغيل الآية أو السورة كاملة
async function playAyah() {
    const surahNumber = document.getElementById("surah-selector").value;
    const ayahNumber = document.getElementById("ayah-selector").value;
    const reader = document.getElementById("reader-selector").value;
    const audio = document.getElementById("quran-audio");

    if (!surahNumber || !currentAyahs.length || !audio) {
        console.error("خطأ: البيانات أو عنصر الصوت غير متوفر");
        return;
    }

    const surahFormatted = String(surahNumber).padStart(3, "0");
    audio.pause();
    audio.currentTime = 0;

    if (ayahNumber === "full") {
        let currentAyahIndex = surahNumber === "1" ? 1 : 0;
        let nextAudio = new Audio();

        const playNextAyah = async () => {
            if (currentAyahIndex <= currentAyahs.length) {
                const ayahFormatted = String(currentAyahIndex).padStart(3, "0");
                const audioUrl = currentAyahIndex === 0 && surahNumber !== "9" 
                    ? `${readers[reader]}001001.mp3` 
                    : `${readers[reader]}${surahFormatted}${ayahFormatted}.mp3`;

                audio.src = audioUrl;

                if (currentAyahIndex + 1 <= currentAyahs.length) {
                    const nextAyahFormatted = String(currentAyahIndex + 1).padStart(3, "0");
                    nextAudio.src = `${readers[reader]}${surahFormatted}${nextAyahFormatted}.mp3`;
                    nextAudio.load();
                }

                try {
                    await audio.play();
                    highlightAyah(currentAyahIndex === 0 ? 0 : currentAyahIndex);
                } catch (error) {
                    console.error("خطأ في تشغيل الآية:", error);
                    alert("حدث خطأ أثناء تشغيل الآية، قد يكون الملف غير متوفر أو هناك مشكلة في الاتصال. حاول مرة أخرى أو اختر قارئًا آخر.");
                    return;
                }

                audio.onended = () => {
                    currentAyahIndex++;
                    playNextAyah();
                };
            } else {
                audio.onended = null;
            }
        };
        playNextAyah();
    } else {
        const ayahFormatted = String(ayahNumber).padStart(3, "0");
        audio.src = `${readers[reader]}${surahFormatted}${ayahFormatted}.mp3`;
        audio.load();
        try {
            await audio.play();
            highlightAyah(parseInt(ayahNumber));
        } catch (error) {
            console.error("خطأ في تشغيل الآية:", error);
            alert("حدث خطأ أثناء تشغيل الآية، قد يكون الملف غير متوفر أو هناك مشكلة في الاتصال. حاول مرة أخرى أو اختر قارئًا آخر.");
        }
        audio.onended = null;
    }
}

// تمييز الآية النشطة والانتقال إليها مباشرة
function highlightAyah(ayahNumber) {
    document.querySelectorAll(".ayah").forEach(ayah => ayah.classList.remove("active"));
    const activeAyah = document.getElementById(`ayah-${ayahNumber}`);
    if (activeAyah) {
        activeAyah.classList.add("active");
        activeAyah.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
        console.error("الآية المحددة غير موجودة:", ayahNumber);
    }
}

// عرض أذكار الصباح والمساء
function loadAzkar() {
    const morningText = document.getElementById("morning-text");
    const eveningText = document.getElementById("evening-text");
    if (morningText) morningText.innerText = morningAzkar.join("\n\n");
    if (eveningText) eveningText.innerText = eveningAzkar.join("\n\n");
}

// عرض دعاء مختار عشوائي
function loadRandomPrayer() {
    const dailyPrayer = document.getElementById("daily-prayer");
    if (dailyPrayer) {
        const randomIndex = Math.floor(Math.random() * selectedPrayers.length);
        dailyPrayer.innerText = selectedPrayers[randomIndex];
    }
}

// تشغيل الأكواد عند تحميل الصفحة
window.onload = () => {
    getRandomDua();
    changeTheme();
    loadSurahs();
    loadAzkar();
    updateFavoritesList();
};