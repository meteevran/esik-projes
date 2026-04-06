// script.js - Eşik Kampanyası Etkileşimleri

// Global observer nesnesi
let elementObserver;

document.addEventListener('DOMContentLoaded', () => {
    // Scroll ve animasyonlar portal seçildikten sonra başlatılıyor
    initAudioPlayer();
});

/**
 * Portal (Oturum) Seçimi Mantığı
 */
window.selectPortal = function(role) {
    // Animasyonla çıkış
    const gateway = document.getElementById('portal-gateway');
    gateway.style.opacity = '0';
    
    setTimeout(() => {
        gateway.style.visibility = 'hidden';
        gateway.style.display = 'none';
        
        // Ana içeriği ve üst butonu göster
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('session-switcher').style.display = 'flex';
        
        // Etiketi güncelle
        document.getElementById('current-session-label').innerText = role === 'child' ? '👧👦 Çocuk Oturumu' : '👩‍👦 Ebeveyn Oturumu';
        
        // Bölümleri (Section) filtrele
        const sections = document.querySelectorAll('section[data-role], header[data-role], footer[data-role]');
        sections.forEach(sec => {
            const secRole = sec.getAttribute('data-role');
            if (secRole === role || secRole === 'both') {
                sec.style.display = 'block';
                // Görünür yapıldığı için observer için eski haline getir
                sec.classList.remove('visible'); 
                sec.querySelectorAll('.scale-in, .fade-in-up, .fade-in-left, .fade-in-right').forEach(child => {
                    child.classList.remove('visible');
                });
            } else {
                sec.style.display = 'none';
            }
        });

        // Sayfayı en başa odakla
        window.scrollTo(0, 0);

        // Animasyonları başlat
        initScrollAnimations();
        
    }, 500); // fade-out süresi
};

/**
 * Oturumu Değiştirmek İstediğinde Portalı Geri Aç
 */
window.openPortalGateway = function() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('session-switcher').style.display = 'none';
    
    const gateway = document.getElementById('portal-gateway');
    gateway.style.display = 'flex';
    gateway.style.visibility = 'visible';
    
    // Küçük bir bekleme ile opacity animasyonunu tetikle
    setTimeout(() => {
        gateway.style.opacity = '1';
    }, 50);
}

/**
 * Scroll (Kaydırma) Animasyonları
 * Intersection Observer API kullanılarak elementler görünür olduğunda animasyon sınıfı eklenir.
 */
function initScrollAnimations() {
    const hiddenElements = document.querySelectorAll('section[style="display: block;"], header[style="display: block;"], footer[style="display: block;"], .section-hidden');
    
    if (elementObserver) {
        elementObserver.disconnect();
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Elementin %15'i göründüğünde tetiklenir
    };

    elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Element display: none değilse ve ekranda ise
            if (entry.isIntersecting && entry.target.style.display !== 'none') {
                entry.target.classList.add('visible');
                
                // Eğer bölüm (section) içindeyse, iç alt elemanları bul ve görünür yap
                const animatedChildren = entry.target.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
                animatedChildren.forEach(child => {
                    child.classList.add('visible');
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    hiddenElements.forEach(el => {
        if(el.style.display !== 'none') elementObserver.observe(el);
    });

    // Hero veya o an en üstte olan elementleri başta hemen tetikle (sayfa yüklendiğinde)
    setTimeout(() => {
        // Hangi portal açık olursa olsun ilk sıradaki bölümü yükle
        const firstVisibleSection = Array.from(document.querySelectorAll('header, section')).find(el => el.style.display !== 'none');
        if(firstVisibleSection) {
            firstVisibleSection.classList.add('visible');
            firstVisibleSection.querySelectorAll('.scale-in, .fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
                el.classList.add('visible');
            });
        }
    }, 100);
}

/**
 * Kampanya Radyo Spotu Ses Oynatıcısı

 * Play/Pause durum kontrolü ve timeline ilerlemesi.
 */
function initAudioPlayer() {
    const audioEl = document.getElementById('campaign-audio');
    const playBtn = document.getElementById('play-btn');
    const playIcon = playBtn.querySelector('.play-icon');
    const pauseIcon = playBtn.querySelector('.pause-icon');
    const progressBar = document.getElementById('progress-bar');
    
    // Ses dosyası bulunamadığında hata vermesini önlemek için try-catch
    try {
        let isPlaying = false;

        playBtn.addEventListener('click', () => {
            if (!isPlaying) {
                audioEl.play().then(() => {
                    isPlaying = true;
                    playIcon.classList.add('hidden');
                    pauseIcon.classList.remove('hidden');
                }).catch(e => {
                    console.warn("Ses dosyası yüklenemedi veya çalınamadı. (Klasöre radyo_spotu.mp3 dosyasını eklemeyi unutmayın!)", e);
                    alert("Radyo spotu dosyası bulunamadı. Lütfen klasöre 'radyo_spotu.mp3' ekleyin.");
                });
            } else {
                audioEl.pause();
                isPlaying = false;
                pauseIcon.classList.add('hidden');
                playIcon.classList.remove('hidden');
            }
        });

        // Oynatma ilerledikçe timeline güncelle
        audioEl.addEventListener('timeupdate', () => {
            if (audioEl.duration) {
                const progressPercent = (audioEl.currentTime / audioEl.duration) * 100;
                progressBar.style.width = `${progressPercent}%`;
            }
        });

        // Ses bittiğinde butonu sıfırla
        audioEl.addEventListener('ended', () => {
            isPlaying = false;
            pauseIcon.classList.add('hidden');
            playIcon.classList.remove('hidden');
            progressBar.style.width = '0%';
        });

    } catch (e) {
        console.error("Audio player başlatma hatası: ", e);
    }
}

/**
 * Ebeveyn Farkındalık Anketi (Quiz) Mantığı
 */
let currentQuestion = 1;
const totalQuestions = 5;
let quizScores = {};

window.selectAnswer = function(event, questionNumber, score) {
    quizScores[questionNumber] = score;
    
    // Öğeleri güncelle
    const questionDiv = document.querySelector(`.quiz-question[data-q="${questionNumber}"]`);
    const buttons = questionDiv.querySelectorAll('.quiz-btn');
    
    buttons.forEach(btn => btn.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    
    // Sonraki butonunu aktifleştir
    const nextBtn = document.getElementById('next-q-btn');
    nextBtn.classList.remove('disabled-btn');
    
    if(currentQuestion === totalQuestions) {
        nextBtn.innerText = "Sonucu Gör";
    }
}

window.nextQuestion = function() {
    if(quizScores[currentQuestion] === undefined) return;
    
    document.querySelector(`.quiz-question[data-q="${currentQuestion}"]`).classList.remove('active');
    
    if(currentQuestion < totalQuestions) {
        currentQuestion++;
        document.querySelector(`.quiz-question[data-q="${currentQuestion}"]`).classList.add('active');
        document.getElementById('quiz-progress').innerText = `Soru ${currentQuestion} / ${totalQuestions}`;
        
        const nextBtn = document.getElementById('next-q-btn');
        if(quizScores[currentQuestion] === undefined) {
             nextBtn.classList.add('disabled-btn');
        }
        if(currentQuestion === totalQuestions) {
             nextBtn.innerText = "Sonucu Gör";
        }
    } else {
        calculateQuizResult();
    }
}

function calculateQuizResult() {
    let totalScore = 0;
    for(let key in quizScores) {
        totalScore += quizScores[key];
    }
    
    let title = "";
    let desc = "";
    let iconColor = "";

    if(totalScore <= 3) {
        title = "Düşük Risk (0-3 Puan)";
        desc = "Görünüşe göre endişe edici bir risk yok. Ancak zorbalık her zaman sessiz başlayabilir. Çocuğunuzla 'Eşik' portalında zaman geçirerek içindeki 'Cesur' tarafı her daim güçlü tutabilirsiniz.";
        iconColor = "#4CAF50"; // Yeşil
    } else if(totalScore <= 7) {
        title = "Orta Şüphe (4-7 Puan)";
        desc = "Çocuğunuz okulda veya sosyal çevresinde bazı zorluklar ya da akran baskısı yaşıyor olabilir. Davranışlarını yakından gözlemleyin ve çocuk oturumundaki 'Cesur Asistan'ı kullanması için onu teşvik edin. Asistanımız sorunu netleştirmemize yardımcı olacaktır.";
        iconColor = "#FFC107"; // Sarı
    } else {
        title = "Yüksek Risk! (8-10 Puan)";
        desc = "Dikkat! Çocuğunuz büyük ihtimalle bir akran zorbalığına (veya siber zorbalığa) maruz kalıyor. Bu durumun üstünü örtmeden kendisiyle şefkatli bir şekilde konuşmanızı ve durum çözülmezse vakit kaybetmeden okul rehberlik (PDR) servisiyle iletişime geçmenizi şiddetle öneririz.";
        iconColor = "#F44336"; // Kırmızı
    }
    
    document.getElementById('quiz-wrapper').style.display = 'none';
    document.getElementById('survey-intro').style.display = 'none';
    
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.style.display = 'flex';
    document.getElementById('result-title').innerText = title;
    document.getElementById('result-desc').innerText = desc;
    
    const icon = resultDiv.querySelector('.result-icon');
    icon.style.background = iconColor;
    icon.style.boxShadow = `0 0 30px ${iconColor}80`;
    if(totalScore <= 3) {
        icon.innerText = "✓";
    } else {
        icon.innerText = "!";
    }
}

window.resetQuiz = function() {
    currentQuestion = 1;
    quizScores = {};
    
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('survey-intro').style.display = 'block';
    
    const quizWrapper = document.getElementById('quiz-wrapper');
    quizWrapper.style.display = 'block';
    
    const questions = document.querySelectorAll('.quiz-question');
    questions.forEach(q => q.classList.remove('active'));
    document.querySelector('.quiz-question[data-q="1"]').classList.add('active');
    
    const buttons = document.querySelectorAll('.quiz-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    const nextBtn = document.getElementById('next-q-btn');
    nextBtn.classList.add('disabled-btn');
    nextBtn.innerText = "Sonraki Soru";
    document.getElementById('quiz-progress').innerText = `Soru 1 / ${totalQuestions}`;
}
