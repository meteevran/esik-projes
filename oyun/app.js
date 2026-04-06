// OYUN SENARYOLARI VE DİYALOG AĞAÇLARI
const chapter1Scenarios = [
    {
        bullyText: "O formayla da tam bir palyaçoya benzemişsin.",
        options: [
            { text: "Sensin palyaço! Kendine bak önce.", type: "aggressive", feedback: "Saldırgan bir cevap verdin. Çatışmayı büyütmek zorbanın tam olarak istediği şeydir." },
            { text: "(Gözlerini kaçır ve hızlıca kafanı çevir)", type: "passive", feedback: "Sessiz kalmak kendi sınırlarına sahip çıkmadığını hissettirir ve davranışın devamını tetikleyebilir." },
            { text: "Ben formamı seviyorum. Ne düşündüğün umrumda değil.", type: "assertive", feedback: "Harika! Kendinden emin ve sakin bir tepki verdin. Sınırlarını başarıyla korudun!" }
        ]
    },
    {
        bullyText: "Yine mi sen konuşuyorsun? Kimse senin fikirlerini önemsemiyor ki zaten.",
        options: [
            { text: "Benim fikirlerim gayet değerli, asıl senin söylediklerin boş.", type: "assertive", feedback: "Çok iyi! Kendi değerini savundun ve onun negatif sözlerinin seni etkilemediğini gösterdin." },
            { text: "Sus artık, seni şikayet edeceğim!", type: "aggressive", feedback: "Tehditkar yaklaşmak yerine daha soğukkanlı davranarak otoriteni sarsılmaz kılabilirsin." },
            { text: "(Başını öne eğip konuşmayı kesersin)", type: "passive", feedback: "Kendi sesini bastırmak zorbanın amacına ulaşmasını sağlar. Fikirlerin senin için değerli ve önemli!" }
        ]
    },
    {
        bullyText: "Şu haline bak, hiç arkadaşın yok yalnız takılıyorsun. Acizlik resmen.",
        options: [
            { text: "Senin gibi sahte arkadaşlarım olacağına yalnız olurum daha iyi.", type: "aggressive", feedback: "Karşı saldırı da bir tür zayıflıktır. Bazen sadece net bir sınır çizmek çok daha etkilidir." },
            { text: "Yalnız vakit geçirmekten keyif alıyorum. Zorunda olduğum için değil, kendim istediğim için.", type: "assertive", feedback: "Mükemmel Psikolojik Savunma! Yalnızlığın zayıflık olmadığını ona gösterdin." },
            { text: "Haklısın... sanırım kimse beni sevmiyor...", type: "passive", feedback: "Onun manipülatif ve negatif düşüncelerini kabullendin. Kendine daha fazla inanmalısın!" }
        ]
    },
    {
        bullyText: "Seni takımımıza almıyoruz, çünkü çok yavaşsın ve oyunu bozuyorsun.",
        options: [
            { text: "Zaten takımınız çok kötü, ben de sizinle oynamam! Hepiniz eziksiniz.", type: "aggressive", feedback: "Öfkeyle ve hakaretle karşılık vermek, sadece seni haksız duruma düşürür." },
            { text: "(Üzülerek köşede tek başına oturursun ve bir daha onlarla oynamazsın)", type: "passive", feedback: "Dışlanmayı kabul edip sessizleşmek özgüvenine zarar verir. Kendi başına da değerlisin." },
            { text: "Oyunlarda herkesin iyi olduğu bir yön vardır. Ben başka bir grupla oynamaktan keyif alırım.", type: "assertive", feedback: "Harika! Onların onayına ihtiyacın olmadığını kanıtladın ve sağlıklı bir sınır çizdin." }
        ]
    },
    {
        bullyText: "Bu kalem çok güzelmiş, artık benim. İtirazın var mı?",
        options: [
            { text: "(O kalemi çok sevmene rağmen sesini çıkarmaz ve almasına izin verirsin)", type: "passive", feedback: "Kendi eşyalarına sahip çıkmazsan, bu kişi sınırlarını ihlal etmeye devam edecektir." },
            { text: "Hayır o benim kalemim. Lütfen onu ait olduğu yere, bana geri ver.", type: "assertive", feedback: "Çok güçlü bir duruş! Eşyanın kime ait olduğunu sakin ama kesin bir dille belirttin." },
            { text: "Hemen onu bana geri ver yoksa elinden zorla alırım!", type: "aggressive", feedback: "Fiziksel bir tehdit savurmak veya zor kullanmak işleri sadece daha kötü hale getirir." }
        ]
    }
];

const chapter2Scenarios = [
    {
        bullyText: "Fotoğrafının altına 'Ne kadar çirkinsin' diye sahte bir hesaptan yorum yapılmış. Herkes görüyor.",
        options: [
            { text: "Sen de ona başka bir sahte hesaptan küfürlü bir cevap yazarsın.", type: "aggressive", feedback: "Saldırgan bir tepki vermek, siber zorbaların tam olarak istediği ilgiyi onlara vermektir. Çatışmayı büyütür." },
            { text: "(Fotoğrafı hemen silersin ve çok üzülürsün, saatlerce ağlarsın)", type: "passive", feedback: "Fotoğrafı silmek, zorbaların senin ne yapacağını kontrol etmesine izin vermektir. Kendine güven." },
            { text: "Yorumu siler ve hesabı engellersin. Senin değerini anonim bir yorum belirleyemez.", type: "assertive", feedback: "Harika savunma! Dijital sınırlarını korudun ve siber zorbalığa geçit vermedin." }
        ]
    },
    {
        bullyText: "Sınıf grubunda biri senin hakkında utandırıcı bir 'caps' (meme) paylaşmış ve herkes buna gülüyor.",
        options: [
            { text: "Gruba 'Bu hiç komik değil, lütfen hemen kaldırın' dersin ve gerekirse öğretmenine/rehberliğe bildirirsin.", type: "assertive", feedback: "Çok iyi! Kendi hakkını savundun. Dijital ortamda da 'hayır' deme hakkın var." },
            { text: "Sen de onun çok utandırıcı eski bir fotoğrafını grupta paylaşıp intikam alırsın.", type: "aggressive", feedback: "İntikam almak seni de bir siber zorbaya dönüştürür. Çözüm bu değil." },
            { text: "(Hiçbir şey yazmazsın ve gruptan sessizce çıkarsın ama için içini yer)", type: "passive", feedback: "Sessiz kalmak durumu çözmez ve zorbalığı yapan kişinin buna devam etmesine cesaret verebilir." }
        ]
    },
    {
        bullyText: "Tanımadığın biri sana çevrimiçi bir oyundan sürekli hakaret ve tehdit dolu mesajlar atıyor.",
        options: [
            { text: "Mesajları okuyup korkarsın ve oyunu oynamayı tamamen bırakırsın.", type: "passive", feedback: "Zorbaların senin eğlenceni elinden almasına izin vermemelisin. Sorunu çözmenin yolu kaçmak değildir." },
            { text: "Kişiyi anında oyun içinden rapor eder (report) ve engellersin (block).", type: "assertive", feedback: "Mükemmel! Platformların araçlarını kullanarak kendini korudun ve durumu kontrol altına aldın." },
            { text: "Ona meydan okur ve 'Hadi gel, neresiysen bulayım seni!' dersin.", type: "aggressive", feedback: "Tanımadığın kişilerle sanal dünyada tartışmalara veya tehditlere girmek güvenliğin için tehlikelidir." }
        ]
    },
    {
        bullyText: "Bir arkadaşın, ona sır olarak anlattığın bir şeyi sosyal medyada dolaylı yoldan ima ederek hikayesinde paylaşmış.",
        options: [
            { text: "Gönderiyi görmezden gelirsin ve arkadaşlığınıza hiçbir şey olmamış gibi devam edersin.", type: "passive", feedback: "Güveninin suistimal edilmesine izin vermek, sınırlarının daha fazla ihlal edilmesine yol açar." },
            { text: "Onunla özel olarak konuşup bu durumun güvenini kırdığını ve çok rahatsız olduğunu netçe söylersin.", type: "assertive", feedback: "Güçlü bir duruş! Duygularını net bir şekilde ifade ederek sağlıklı bir sınır çizdin." },
            { text: "Sen de onun sana anlattığı bütün sırları ifşa eden bir hikaye atarsın.", type: "aggressive", feedback: "Güveni başka bir güven kırıklığıyla tamir edemezsin. Bu sadece toksik bir kısır döngü yaratır." }
        ]
    },
    {
        bullyText: "Sana profilindeki anonim mesaj kutusundan isimsiz nefret mesajları geliyor: 'Beceriksizsin', vb.",
        options: [
            { text: "Hikayende 'Bana yazan korkaklar karşıma çıksın' diye öfke dolu bir paylaşım yaparsın.", type: "aggressive", feedback: "Öfkeni belli etmek, o anonim mesajları atan kişilere istedikleri dikkat tatminini sağlar." },
            { text: "Bu mesajları okudukça kendine inancını kaybeder ve 'Sanırım haklılar' diye düşünmeye başlarsın.", type: "passive", feedback: "Anonim kişilerin yalanları senin gerçeğin değildir. Özdeğerini dışarıdan gelen sözlere bağlama." },
            { text: "Uygulamayı siler veya anonim mesaj alımını kapatırsın. Ruh sağlığın her şeyden önemlidir.", type: "assertive", feedback: "Harika! Sana zarar veren platformlardan uzaklaşmak ve onlara engel koymak en güçlü adımdır." }
        ]
    }
];

const allChapters = [
    { title: "Bölüm 1: Okul Zorbalığı", scenarios: chapter1Scenarios },
    { title: "Bölüm 2: Siber Zorbalık", scenarios: chapter2Scenarios }
];

// OYUN İÇİ DEĞİŞKENLER
let currentChapterIndex = 0;
let currentScenarioIndex = 0;
let braveryScore = 0; // Sınav sistemi gibi 0'dan başlar
let currentScenarios = allChapters[currentChapterIndex].scenarios;

// HTML ELEMENTLERİ
const bullyTextEl = document.getElementById("bully-text");
const optionsBtns = [
    document.getElementById("opt-0"),
    document.getElementById("opt-1"),
    document.getElementById("opt-2")
];
const braveryFillEl = document.getElementById("bravery-fill");
const scoreValEl = document.getElementById("score-val");
const feedbackOverlay = document.getElementById("feedback-overlay");
const feedbackTitleEl = document.getElementById("feedback-title");
const feedbackDescEl = document.getElementById("feedback-desc");
const feedbackImageEl = document.getElementById("feedback-image");

// OYUN SONU ELEMENTLERİ
const endScreen = document.getElementById("end-screen");
const endBadgeEl = document.getElementById("end-badge");
const endTitleEl = document.getElementById("end-title");
const endScoreEl = document.getElementById("end-score");
const endDescEl = document.getElementById("end-desc");

// OYUNU BAŞLAT
function initGame() {
    braveryScore = 0; // Her bölüm başında skor sıfırlanır
    currentScenarioIndex = 0;
    currentScenarios = allChapters[currentChapterIndex].scenarios;
    
    endScreen.classList.add("hidden"); // Oyun sonu ekranını gizle
    optionsBtns.forEach(btn => btn.style.display = 'block');
    updateUI();
    loadScenario();
}

// BÖLÜM GEÇİŞİ
function nextChapter() {
    currentChapterIndex++;
    if (currentChapterIndex >= allChapters.length) {
        currentChapterIndex = 0;
        alert("Harikasın! Oyundaki tüm bölümleri ve senaryoları tamamladın!");
        initGame();
        return;
    }
    initGame();
}

// YENİ SENARYOYU YÜKLE
function loadScenario() {
    if (currentScenarioIndex >= currentScenarios.length) {
        showGameEnd();
        return;
    }
    
    const scenario = currentScenarios[currentScenarioIndex];
    
    // Metin değişim animasyonunu baştan tetikle
    bullyTextEl.classList.remove("fade-in");
    void bullyTextEl.offsetWidth; // Reflow hilesi
    bullyTextEl.classList.add("fade-in");
    
    bullyTextEl.innerText = '"' + scenario.bullyText + '"';
    
    // Şıkları karıştır (Her oynanışta farklı yerde çıksınlar)
    const shuffledOptions = [...scenario.options].sort(() => Math.random() - 0.5);
    scenario.shuffledOptions = shuffledOptions;

    optionsBtns.forEach((btn, index) => {
        btn.innerText = shuffledOptions[index].text;
        btn.style.display = 'block';
    });
}

// CEVAP SEÇİLDİĞİNDE
function selectOption(index) {
    const scenario = currentScenarios[currentScenarioIndex];
    const selected = scenario.shuffledOptions[index];
    
    showFeedback(selected.type, selected.feedback);
}

// GERİBİLDİRİM GÖSTER
function showFeedback(type, text) {
    feedbackDescEl.innerText = text;
    
    // Her soru tam olarak 100 / soru sayısı kadar puan verir (örn: 5 soru varsa 20 puan). Yanlışlar 0 puan.
    const pointsToGain = Math.ceil(100 / currentScenarios.length);
    
    if (type === "assertive") {
        feedbackImageEl.src = "Cesur.png";
        feedbackImageEl.style.display = "block";
        feedbackTitleEl.innerText = "Harika! 🛡️";
        feedbackTitleEl.style.background = "linear-gradient(to right, #4ade80, #3b82f6)";
        feedbackTitleEl.style.webkitBackgroundClip = "text";
        braveryScore += pointsToGain; // Sadece doğruysa puan ekle
    } 
    else if (type === "passive") {
        feedbackImageEl.src = "suskunn.png";
        feedbackImageEl.style.display = "block";
        feedbackTitleEl.innerText = "Biraz Daha Cesaret! 🌱";
        feedbackTitleEl.style.background = "linear-gradient(to right, #fbbf24, #f59e0b)";
        feedbackTitleEl.style.webkitBackgroundClip = "text";
        // Puan düşmüyoruz, alamıyor sadece.
    } 
    else if (type === "aggressive") {
        feedbackImageEl.src = "endişeliiii.png";
        feedbackImageEl.style.display = "block";
        feedbackTitleEl.innerText = "Sakin Ol! ⚠️";
        feedbackTitleEl.style.background = "linear-gradient(to right, #ef4444, #b91c1c)";
        feedbackTitleEl.style.webkitBackgroundClip = "text";
        // Puan düşmüyoruz, alamıyor sadece.
    }
    
    if (braveryScore < 0) braveryScore = 0;
    if (braveryScore > 100) braveryScore = 100;
    
    updateUI();
    feedbackOverlay.classList.remove("hidden");
}

// BİR SONRAKİ SENARYOYA GEÇİŞ
function nextScenario() {
    feedbackOverlay.classList.add("hidden");
    currentScenarioIndex++;
    
    setTimeout(() => {
        loadScenario();
    }, 400);
}

// OYUN SONU (ÖDÜL/BAŞARI/BAŞARISIZLIK SİSTEMİ)
function showGameEnd() {
    endScoreEl.innerText = braveryScore;
    optionsBtns.forEach(btn => btn.style.display = 'none');
    
    if (braveryScore === 100) {
        endTitleEl.innerText = "Kusursuz Savunma!";
        endTitleEl.style.color = "#4ade80"; // Yeşilimsi
        endBadgeEl.innerText = "🏆";
        endBadgeEl.style.textShadow = "0 10px 20px rgba(255,215,0,0.6)"; // Altın Parlaması
        endDescEl.innerHTML = "İnanılmaz! Bütün sorulara harika yanıtlar vererek tam 100 Puan aldın. Sınırlarını korumakta kusursuzsun.<br><br><b style='color:#fbbf24;'>Açılan Ödül:</b> 'Altın Zihin Kalkanı' Rozeti 🛡️";
    } else if (braveryScore >= 80) {
        endTitleEl.innerText = "Çok İyisin!";
        endTitleEl.style.color = "#86efac";
        endBadgeEl.innerText = "🥈";
        endBadgeEl.style.textShadow = "0 10px 20px rgba(148,163,184,0.6)";
        endDescEl.innerHTML = "Harika! Neredeyse mükemmel bir duruş sergiledin. Duygularını kontrol etmeyi çok iyi başarıyorsun.<br><br><b style='color:#94a3b8;'>Açılan Ödül:</b> 'Gümüş Cesaret' Rozeti 🛡️";
    } else if (braveryScore >= 60) {
        endTitleEl.innerText = "Güzel Çaba!";
        endTitleEl.style.color = "#fbbf24";
        endBadgeEl.innerText = "🥉";
        endBadgeEl.style.textShadow = "0 10px 20px rgba(180,83,9,0.5)";
        endDescEl.innerHTML = "Ortalamanın üzerindesin ve gayet iyi bir savunma yaptın. Sadece biraz daha kararlı olabilirsin.";
    } else if (braveryScore >= 40) {
        endTitleEl.innerText = "Biraz Daha Cesaretlenmelisin!";
        endTitleEl.style.color = "#f9a8d4";
        endBadgeEl.innerText = "🌱";
        endBadgeEl.style.textShadow = "0 10px 20px rgba(244,114,182,0.5)";
        endDescEl.innerHTML = "Sen çok güçlüsün! Belki biraz daha özgüvenli cevaplar vermeyi deneyebilirsin. Unutma kendi değerini başkası belirleyemez.";
    } else {
        endTitleEl.innerText = "Pes Etme, Sen Güçlüsün!";
        endTitleEl.style.color = "#f87171";
        endBadgeEl.innerText = "🛡️";
        endBadgeEl.style.textShadow = "0 10px 20px rgba(248,113,113,0.3)";
        endDescEl.innerHTML = "Aldığın puan biraz düşük olabilir ama önemli olan pratik yapmak. Kimsenin sana kendini değersiz hissettirmesine izin verme! Tekrar dene!";
    }
    
    // Sonraki Bölüm butonunu ayarla
    const nextChapterBtn = document.getElementById("next-chapter-btn");
    if (nextChapterBtn) {
        if (currentChapterIndex < allChapters.length - 1 && braveryScore >= 60) {
            nextChapterBtn.style.display = "inline-block";
        } else {
            nextChapterBtn.style.display = "none";
        }
    }

    // Oyun sonu ekranını göster
    endScreen.classList.remove("hidden");
}

// ARAYÜZ (HUD) GÜNCELLEMESİ
function updateUI() {
    if(braveryScore > 100) braveryScore = 100;
    
    braveryFillEl.style.width = braveryScore + "%";
    scoreValEl.innerText = braveryScore;
    
    if(braveryScore < 30) {
        braveryFillEl.style.background = "linear-gradient(90deg, #ef4444, #f87171)";
        braveryFillEl.style.boxShadow = "0 0 10px rgba(239, 68, 68, 0.5)";
    } else if(braveryScore < 70) {
        braveryFillEl.style.background = "linear-gradient(90deg, #f59e0b, #fbbf24)";
        braveryFillEl.style.boxShadow = "0 0 10px rgba(245, 158, 11, 0.5)";
    } else {
        braveryFillEl.style.background = "linear-gradient(90deg, #38bdf8, #818cf8)";
        braveryFillEl.style.boxShadow = "0 0 10px rgba(56, 189, 248, 0.5)";
    }
}

// Başla
initGame();
