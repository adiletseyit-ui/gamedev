/* =========================================================
   ҚАУІПСІЗ ЦИФРЛЫҚ ӘЛЕМ
   Interactive educational game
   Complete JavaScript engine
   ========================================================= */

(() => {
  "use strict";

  /* =========================================================
     1. CONFIG
     ========================================================= */

  const STORAGE_KEY = "safeDigitalWorld_v2";

  const LEVELS = [
    {
      id: 0,
      title: "Фишинг аңшысы",
      shortTitle: "Фишинг",
      icon: "s-mail",
      color: "#48AEFF",
      description:
        "Алаяқтардың жалған хаттары мен сілтемелерін танып үйрен.",
      reward: "Фишинг тұзағын анықтау қабілеті",
      questions: [
        {
          q: "Банк атынан SMS келді: «Картаңыз бұғатталды. Сілтемеге өтіп, деректеріңізді енгізіңіз». Не істейсің?",
          options: [
            "Сілтемеге бірден өтіп, деректерді енгіземін",
            "Сілтемені ашпай, банктің ресми қосымшасы немесе нөмірі арқылы тексеремін",
            "SMS-ті достарыма жіберемін",
            "Телефонды өшіремін"
          ],
          correct: 1,
          explain:
            "Дұрыс! Күмәнді сілтемені ашпай, ұйыммен тек ресми арна арқылы байланысқан қауіпсіз."
        },
        {
          q: "Досыңның аккаунтынан: «Шұғыл ақша керек, осы картаға жібер» деген хабарлама келді. Не істеген дұрыс?",
          options: [
            "Ақшаны бірден жіберу",
            "Хабарламаны барлық достарыма тарату",
            "Досыңмен басқа жолмен байланысып, оның өзі екенін тексеру",
            "Аккаунтқа кіріп көруге тырысу"
          ],
          correct: 2,
          explain:
            "Дұрыс! Аккаунт бұзылған болуы мүмкін. Ақша жібермес бұрын адамды басқа арнамен тексер."
        },
        {
          q: "Қайсысы фишингтің белгісі болуы мүмкін?",
          options: [
            "Сайттың мекенжайы дұрыс және ресми",
            "Компанияның ресми қосымшасы",
            "Хабарламада асықтыру және құпия деректерді сұрау",
            "Өзің ашқан таныс сайт"
          ],
          correct: 2,
          explain:
            "Дұрыс! Асықтыру, қорқыту және пароль, карта немесе код сұрау — қауіпті белгілер."
        },
        {
          q: "Саған «Сен iPhone ұтып алдың! Жүлдені алу үшін карта нөмірін енгіз» деген хат келді. Не істейсің?",
          options: [
            "Карта деректерін енгіземін",
            "Хатты жабып, жүлде туралы ақпаратты ресми сайттан тексеремін",
            "Сілтемені достарыма жіберемін",
            "SMS арқылы карта PIN-кодын жіберемін"
          ],
          correct: 1,
          explain:
            "Дұрыс! Күтпеген жүлде туралы хабарламалар жиі алаяқтық болуы мүмкін."
        },
        {
          q: "Қай әрекет фишингтен қорғануға көмектеседі?",
          options: [
            "Барлық сілтемелерді ашу",
            "Бір парольді барлық жерде қолдану",
            "Сайттың мекенжайын тексеру және күмәнді сілтемелерді ашпау",
            "SMS-тегі кодтарды басқа адамдарға айту"
          ],
          correct: 2,
          explain:
            "Дұрыс! Сілтемені тексеру және күмәнді хабарламаларға сенбеу — негізгі қорғаныс."
        }
      ]
    },

    {
      id: 1,
      title: "Деректер қорғаушысы",
      shortTitle: "Жеке деректер",
      icon: "s-lock",
      color: "#7648E8",
      description:
        "Жеке мәліметтерді кімге және қашан беруге болмайтынын үйрен.",
      reward: "Жеке деректерді қорғау белгісі",
      questions: [
        {
          q: "Бейтаныс адам интернетте сенен ЖСН-ды сұрады. Не істеген дұрыс?",
          options: [
            "Бірден жіберу",
            "Оны әлеуметтік желіге жариялау",
            "Жібермеу және не үшін қажет екенін тексеру",
            "Барлық жеке деректерімді бірге жіберу"
          ],
          correct: 2,
          explain:
            "Дұрыс! ЖСН — жеке дерек. Оны бейтаныс адамдарға беруге болмайды."
        },
        {
          q: "Әлеуметтік желіге үйіңнің нақты мекенжайы мен күнделікті қай уақытта үйде болмайтыныңды жариялау қауіпсіз бе?",
          options: [
            "Иә, себебі аккаунтым әдемі көрінеді",
            "Иә, егер достарым көп болса",
            "Жоқ, мұндай мәліметтерді ашық жарияламаған дұрыс",
            "Тек түнде жариялау керек"
          ],
          correct: 2,
          explain:
            "Дұрыс! Мекенжай және күнделікті қозғалыс туралы ақпаратты көпшілікке жариялау қауіп тудыруы мүмкін."
        },
        {
          q: "Досың сенен аккаунтыңның паролін сұрады. Не істейсің?",
          options: [
            "Парольді беремін",
            "Парольді тек чатқа жазамын",
            "Бермеу керек",
            "Парольді суретке түсіріп жіберемін"
          ],
          correct: 2,
          explain:
            "Дұрыс! Пароль жеке болуы керек. Тіпті жақын адамдарға да парольді бермеу қауіпсіз."
        },
        {
          q: "Қоғамдық Wi-Fi желісінде маңызды банк операциясын жасау керек. Қайсысы қауіпсіздеу?",
          options: [
            "Кез келген ашық Wi-Fi-ды пайдалану",
            "Мүмкін болса мобильді интернетті немесе сенімді желіні пайдалану",
            "Парольді Wi-Fi-ға жазып қою",
            "Банк картасының PIN-кодын Wi-Fi атына енгізу"
          ],
          correct: 1,
          explain:
            "Дұрыс! Маңызды операциялар үшін сенімді желіні қолданған жөн."
        },
        {
          q: "Жеке деректерге қайсысы жатады?",
          options: [
            "Сүйікті түсің",
            "ЖСН, мекенжай, телефон нөмірі сияқты ақпарат",
            "Ауа райы",
            "Мектептегі жалпы сабақ кестесі"
          ],
          correct: 1,
          explain:
            "Дұрыс! ЖСН, мекенжай және телефон сияқты мәліметтер жеке деректерге жатады."
        }
      ]
    },

    {
      id: 2,
      title: "Желі шебері",
      shortTitle: "Желі қауіпсіздігі",
      icon: "s-shield",
      color: "#31D7D3",
      description:
        "Құпиясөздер, екі факторлы қорғау және қауіпсіз желі туралы білімді тексер.",
      reward: "Желі шебері белгісі",
      questions: [
        {
          q: "Қай пароль қауіпсіздеу?",
          options: [
            "12345678",
            "qwerty",
            "Adilet2008",
            "Ұзын, бірегей және әртүрлі таңбалардан тұратын пароль"
          ],
          correct: 3,
          explain:
            "Дұрыс! Ұзын әрі бірегей парольді әр аккаунтта бөлек қолданған дұрыс."
        },
        {
          q: "Екі факторлы аутентификация (2FA) не үшін қажет?",
          options: [
            "Интернетті жылдамдату үшін",
            "Аккаунтқа кіруді қосымша қорғау үшін",
            "Телефон батареясын үнемдеу үшін",
            "Парольді автоматты түрде жариялау үшін"
          ],
          correct: 1,
          explain:
            "Дұрыс! 2FA пароль ұрланған жағдайда аккаунтты қосымша қорғауға көмектеседі."
        },
        {
          q: "Бағдарламаларды уақытында жаңарту не үшін маңызды?",
          options: [
            "Тек дизайн өзгеруі үшін",
            "Қауіпсіздік осалдықтарын түзету үшін де",
            "Компьютерді міндетті түрде баяулату үшін",
            "Файлдарды өшіру үшін"
          ],
          correct: 1,
          explain:
            "Дұрыс! Жаңартулардың ішінде қауіпсіздік қателерін түзететін патчтар болуы мүмкін."
        },
        {
          q: "Бейтаныс адам саған Wi-Fi желісінің атын берді. Қай әрекет қауіпсіз?",
          options: [
            "Құпиясөздерді кез келген сайтқа енгізу",
            "Барлық банк аккаунттарына кіру",
            "Желінің шынайылығын тексеру және қажетсіз әрекеттерден бас тарту",
            "Барлық файлдарды жүктеу"
          ],
          correct: 2,
          explain:
            "Дұрыс! Бейтаныс желілерде абай болу және маңызды әрекеттерді жасамау керек."
        },
        {
          q: "Бір парольді бірнеше маңызды аккаунтта қолданудың мәселесі қандай?",
          options: [
            "Ешқандай мәселе жоқ",
            "Бір пароль ашылса, бірнеше аккаунт қауіпке түседі",
            "Телефон автоматты түрде өшеді",
            "Wi-Fi жұмыс істемей қалады"
          ],
          correct: 1,
          explain:
            "Дұрыс! Бір парольдің бұзылуы бірнеше аккаунтқа бірден қауіп төндіреді."
        }
      ]
    },

    {
      id: 3,
      title: "Қалқан қорғаушысы",
      shortTitle: "Алаяқпен шайқас",
      icon: "s-shield",
      color: "#FF5E62",
      description:
        "Телефон, маркетплейс және интернеттегі кең таралған алаяқтық схемаларын анықта.",
      reward: "Қалқан қорғаушысы атағы",
      questions: [
        {
          q: "Біреу телефон арқылы өзін банк қызметкері ретінде таныстырып, SMS-кодты сұрады. Не істейсің?",
          options: [
            "Кодты айтамын",
            "Кодты SMS арқылы жіберемін",
            "Кодты айтпаймын және әңгімені тоқтатамын",
            "Картадағы барлық ақшаны айтамын"
          ],
          correct: 2,
          explain:
            "Дұрыс! SMS-кодтар мен растау кодтарын бөтен адамға айтуға болмайды."
        },
        {
          q: "Маркетплейсте сатушы: «Төлемді осы сыртқы сілтеме арқылы жаса» деді. Не істеген дұрыс?",
          options: [
            "Сілтемеге бірден өту",
            "Платформаның ресми төлем жүйесін пайдалану",
            "Карта PIN-кодын жіберу",
            "SMS кодын сатушыға айту"
          ],
          correct: 1,
          explain:
            "Дұрыс! Төлемді платформаның ресми жүйесі арқылы жасаған қауіпсіз."
        },
        {
          q: "«100% кепілдікпен ақшаңды 10 есе көбейтеміз» деген ұсыныс келді. Бұл нені білдіруі мүмкін?",
          options: [
            "Кепілденген байлық",
            "Алаяқтық немесе өте жоғары тәуекел белгісі болуы мүмкін",
            "Міндетті түрде мемлекеттік бағдарлама",
            "Тегін сыйлық"
          ],
          correct: 1,
          explain:
            "Дұрыс! Кепілденген үлкен пайда туралы уәделерге ерекше сақтықпен қарау керек."
        },
        {
          q: "Бейтаныс адам QR-код жіберіп, «тез сканерле» деді. Не істейсің?",
          options: [
            "Бірден сканерлеймін",
            "QR-кодтың қайда апаратынын және кім жібергенін тексеремін",
            "Барлық аккаунттарыммен кіремін",
            "Кодты достарыма міндетті түрде жіберемін"
          ],
          correct: 1,
          explain:
            "Дұрыс! QR-код та қауіпті сайтқа немесе алаяқтық парақшаға апаруы мүмкін."
        },
        {
          q: "Егер интернетте бір нәрсе күмәнді көрінсе, ең дұрыс алғашқы қадам қандай?",
          options: [
            "Асығыс шешім қабылдау",
            "Ақпаратты тексеріп, қажет болса сенімді ересек адамнан немесе ресми ұйымнан сұрау",
            "Ақша жіберу",
            "Құпия кодтарды беру"
          ],
          correct: 1,
          explain:
            "Дұрыс! Асықпай тексеру — алаяқтықтан қорғанудың маңызды тәсілі."
        }
      ]
    }
  ];

  /* =========================================================
     2. DOM
     ========================================================= */

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  const els = {
    scroller: $("#scroller"),
    world: $("#world"),
    hero: $("#hero"),

    progressText: $("#progText"),
    progressBar: $("#progBar"),

    toast: $("#toast"),
    fx: $("#fx"),

    missionWrap: $("#missionWrap"),
    missionSheet: $("#missionSheet"),

    resultWrap: $("#resultWrap"),
    resultSheet: $("#resultSheet"),

    settingsWrap: $("#settingsWrap"),
    gearBtn: $("#gearBtn"),
    soundSwitch: $("#sndSwitch"),
    resetBtn: $("#resetBtn"),

    hint: $(".hint"),

    locations: $$(".loc")
  };

  /* =========================================================
     3. STATE
     ========================================================= */

  const defaultState = {
    completed: [false, false, false, false],
    stars: [0, 0, 0, 0],
    bestScores: [0, 0, 0, 0],
    sound: true
  };

  let state = loadState();

  let currentLevel = null;
  let currentQuestion = 0;
  let currentScore = 0;
  let questionAnswered = false;

  let audioContext = null;

  /* =========================================================
     4. STORAGE
     ========================================================= */

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (!raw) {
        return structuredClone(defaultState);
      }

      const parsed = JSON.parse(raw);

      return {
        completed: Array.isArray(parsed.completed)
          ? [...parsed.completed, false, false, false, false].slice(0, 4)
          : [...defaultState.completed],

        stars: Array.isArray(parsed.stars)
          ? [...parsed.stars, 0, 0, 0, 0].slice(0, 4)
          : [...defaultState.stars],

        bestScores: Array.isArray(parsed.bestScores)
          ? [...parsed.bestScores, 0, 0, 0, 0].slice(0, 4)
          : [...defaultState.bestScores],

        sound:
          typeof parsed.sound === "boolean"
            ? parsed.sound
            : true
      };
    } catch {
      return structuredClone(defaultState);
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  /* =========================================================
     5. INITIALIZATION
     ========================================================= */

  function init() {
    if (!els.world) {
      console.error("Game world #world not found.");
      return;
    }

    buildScene();
    prepareLocations();
    updateWorld();
    updateProgress();
    updateSoundSwitch();

    const firstOpen = state.completed.findIndex((v) => !v);
    const startLevel = firstOpen === -1 ? LEVELS.length - 1 : firstOpen;

    positionHero(startLevel);

    const startLoc = getLocation(startLevel);
    if (startLoc && els.scroller) {
      els.scroller.scrollTop = Math.max(
        0,
        startLoc.offsetTop - els.scroller.clientHeight / 2 + 100
      );
    }

    bindGlobalEvents();

    let rt;
    window.addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        buildRoute();
        buildNearCity();
        positionHero(startLevel);
      }, 150);
    });
  }

  /* =========================================================
     6. LOCATION SYSTEM
     ========================================================= */

  function prepareLocations() {
    els.locations.forEach((loc, index) => {
      const levelIndex = Number(loc.dataset.i ?? index);

      loc.dataset.level = levelIndex;

      loc.setAttribute("role", "button");
      loc.setAttribute("tabindex", "0");

      loc.addEventListener("click", () => {
        openLevel(levelIndex);
      });

      loc.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLevel(levelIndex);
        }
      });
    });
  }

  function updateWorld() {
    els.locations.forEach((loc, index) => {
      const levelIndex = Number(loc.dataset.level ?? index);

      loc.classList.remove(
        "is-open",
        "is-done",
        "is-locked"
      );

      const completed = state.completed[levelIndex];

      if (completed) {
        loc.classList.add("is-done");
      }

      if (isLevelUnlocked(levelIndex)) {
        loc.classList.add("is-open");
      } else {
        loc.classList.add("is-locked");
      }

      updateLocationStars(loc, levelIndex);
      updateLocationButton(loc, levelIndex);
    });

    updateRouteState();
  }

  function updateLocationStars(loc, levelIndex) {
    const stars = state.stars[levelIndex] || 0;

    const starNodes = $$(".stars svg", loc);

    starNodes.forEach((star, index) => {
      star.classList.toggle("on", index < stars);
      star.classList.toggle("off", index >= stars);
    });

    const sp = $(".sparks", loc);
    if (sp) {
      sp.classList.toggle(
        "twinkle",
        !loc.classList.contains("is-locked")
      );
    }
  }

  function updateLocationButton(loc, levelIndex) {
    const cta = $(".cta", loc);

    if (!cta) return;

    if (state.completed[levelIndex]) {
      cta.textContent = "Қайта ойнау";
      return;
    }

    if (isLevelUnlocked(levelIndex)) {
      cta.textContent = "Бастау";
      return;
    }

    cta.textContent = "Құлыптаулы";
  }

  function isLevelUnlocked(levelIndex) {
    if (levelIndex === 0) return true;

    return state.completed[levelIndex - 1] === true;
  }

  /* =========================================================
     7. PROGRESS
     ========================================================= */

  function updateProgress() {
    const completedCount = state.completed.filter(Boolean).length;
    const percentage = (completedCount / LEVELS.length) * 100;

    if (els.progressText) {
      els.progressText.textContent =
        `Қорғаныс белгілері: ${completedCount} / ${LEVELS.length}`;
    }

    if (els.progressBar) {
      els.progressBar.style.width = `${percentage}%`;
      els.progressBar.setAttribute(
        "aria-valuenow",
        String(completedCount)
      );
    }
  }

  /* =========================================================
     8. OPEN LEVEL
     ========================================================= */

  function openLevel(levelIndex) {
    if (!LEVELS[levelIndex]) return;

    if (!isLevelUnlocked(levelIndex)) {
      showToast(
        "Алдымен алдыңғы миссияны аяқта 🔒",
        "warning"
      );

      shakeLocation(levelIndex);
      playSound("error");

      return;
    }

    currentLevel = levelIndex;

    moveHeroToLevel(levelIndex);

    playSound("click");

    renderMissionIntro(levelIndex);

    openOverlay(els.missionWrap);
  }

  function renderMissionIntro(levelIndex) {
    const level = LEVELS[levelIndex];
    const alreadyDone = state.completed[levelIndex];

    els.missionSheet.innerHTML = `
      <div class="m-banner">
        <div class="m-icon">
          ${svgUse(level.icon)}
        </div>

        <div>
          <div class="m-num">
            МИССИЯ ${levelIndex + 1}
          </div>

          <h2 class="m-title">
            ${escapeHTML(level.title)}
          </h2>
        </div>
      </div>

      <div class="m-body">
        <p class="m-desc">
          ${escapeHTML(level.description)}
        </p>

        <div class="m-reward">
          <span class="reward-icon">
            ${svgUse("s-medal")}
          </span>

          <div>
            <small>Сыйлық</small>
            <strong>${escapeHTML(level.reward)}</strong>
          </div>
        </div>

        ${
          alreadyDone
            ? `
              <div class="mission-completed-note">
                ✓ Бұл миссия бұрын орындалған.
                Қайта ойнап, нәтижені жақсарта аласың.
              </div>
            `
            : ""
        }

        <button
          class="big-btn"
          id="missionStartBtn"
          type="button"
        >
          ${alreadyDone ? "Қайта ойнау" : "Миссияны бастау"}
        </button>

        <button
          class="big-btn alt"
          id="missionCloseBtn"
          type="button"
        >
          Кейінірек
        </button>
      </div>
    `;

    $("#missionStartBtn")?.addEventListener(
      "click",
      () => startMission(levelIndex)
    );

    $("#missionCloseBtn")?.addEventListener(
      "click",
      () => closeOverlay(els.missionWrap)
    );
  }

  /* =========================================================
     9. MISSION ENGINE
     ========================================================= */

  function startMission(levelIndex) {
    currentLevel = levelIndex;
    currentQuestion = 0;
    currentScore = 0;
    questionAnswered = false;

    playSound("start");

    renderQuestion();

    openOverlay(els.missionWrap);
  }

  function renderQuestion() {
    const level = LEVELS[currentLevel];
    const question = level.questions[currentQuestion];

    if (!question) {
      finishMission();
      return;
    }

    const total = level.questions.length;
    const progress = ((currentQuestion) / total) * 100;

    els.missionSheet.innerHTML = `
      <div class="mission-question">
        <div class="q-head">
          <div class="q-count">
            Сұрақ ${currentQuestion + 1} / ${total}
          </div>

          <div class="q-progress">
            <span style="width:${progress}%"></span>
          </div>
        </div>

        <h2 class="q-title">
          ${escapeHTML(question.q)}
        </h2>

        <div class="answers">
          ${question.options
            .map(
              (option, index) => `
                <button
                  class="answer-btn"
                  type="button"
                  data-answer="${index}"
                >
                  <span class="answer-letter">
                    ${String.fromCharCode(65 + index)}
                  </span>

                  <span class="answer-text">
                    ${escapeHTML(option)}
                  </span>
                </button>
              `
            )
            .join("")}
        </div>

        <div
          class="feedback"
          id="answerFeedback"
          hidden
        ></div>

        <button
          class="big-btn next-btn"
          id="nextQuestionBtn"
          type="button"
          hidden
        >
          ${currentQuestion === total - 1 ? "Нәтижені көру" : "Келесі сұрақ"}
        </button>

        <button
          class="big-btn alt"
          id="quitMissionBtn"
          type="button"
        >
          Миссиядан шығу
        </button>
      </div>
    `;

    $$(".answer-btn", els.missionSheet).forEach(
      (button) => {
        button.addEventListener("click", () => {
          const answer = Number(
            button.dataset.answer
          );

          answerQuestion(answer);
        });
      }
    );

    $("#nextQuestionBtn")?.addEventListener(
      "click",
      nextQuestion
    );

    $("#quitMissionBtn")?.addEventListener(
      "click",
      () => {
        closeOverlay(els.missionWrap);
      }
    );
  }

  function answerQuestion(answerIndex) {
    if (questionAnswered) return;

    questionAnswered = true;

    const question =
      LEVELS[currentLevel].questions[currentQuestion];

    const buttons = $$(".answer-btn", els.missionSheet);
    const feedback = $("#answerFeedback");

    buttons.forEach((button) => {
      button.disabled = true;
    });

    const selected = buttons[answerIndex];
    const correct = buttons[question.correct];

    if (answerIndex === question.correct) {
      currentScore++;

      selected?.classList.add("correct");

      feedback.className =
        "feedback good";

      feedback.innerHTML = `
        <strong>Дұрыс! ✓</strong>
        <span>${escapeHTML(question.explain)}</span>
      `;

      playSound("correct");
      spawnConfetti(8);
    } else {
      selected?.classList.add("wrong");
      correct?.classList.add("correct");

      feedback.className =
        "feedback bad";

      feedback.innerHTML = `
        <strong>Дұрыс жауап емес</strong>
        <span>${escapeHTML(question.explain)}</span>
      `;

      playSound("wrong");
    }

    feedback.hidden = false;

    const nextButton = $("#nextQuestionBtn");

    if (nextButton) {
      nextButton.hidden = false;
    }
  }

  function nextQuestion() {
    currentQuestion++;
    questionAnswered = false;

    renderQuestion();
  }

  /* =========================================================
     10. MISSION RESULT
     ========================================================= */

  function finishMission() {
    const level = LEVELS[currentLevel];
    const total = level.questions.length;

    const stars = calculateStars(
      currentScore,
      total
    );

    const previousBest =
      state.bestScores[currentLevel] || 0;

    const previousStars =
      state.stars[currentLevel] || 0;

    state.completed[currentLevel] = true;

    state.bestScores[currentLevel] =
      Math.max(previousBest, currentScore);

    state.stars[currentLevel] =
      Math.max(previousStars, stars);

    saveState();

    updateWorld();
    updateProgress();

    playSound("success");
    spawnConfetti(30);

    renderResult(
      currentLevel,
      currentScore,
      total,
      stars,
      currentScore > previousBest
    );

    closeOverlay(els.missionWrap);

    setTimeout(() => {
      openOverlay(els.resultWrap);
    }, 180);
  }

  function calculateStars(score, total) {
    const percentage = score / total;

    if (percentage >= 1) return 3;
    if (percentage >= 0.8) return 3;
    if (percentage >= 0.6) return 2;
    if (percentage >= 0.4) return 1;

    return 1;
  }

  function renderResult(
    levelIndex,
    score,
    total,
    stars,
    newBest
  ) {
    const isLast = levelIndex === LEVELS.length - 1;

    const nextUnlocked =
      levelIndex < LEVELS.length - 1
        ? levelIndex + 1
        : null;

    els.resultSheet.innerHTML = `
      <div class="result">
        <div class="r-badge">
          ${isLast ? "🏆" : "✓"}
        </div>

        <h2 class="r-title">
          ${isLast ? "Қала қорғалды!" : "Миссия орындалды!"}
        </h2>

        <p class="r-sub">
          ${escapeHTML(
            score >= 4
              ? "Керемет нәтиже! Қауіптерді жақсы ажырата аласың."
              : score >= 3
                ? "Жақсы жұмыс! Тағы бір рет ойнап, біліміңді нығайта аласың."
                : "Миссия аяқталды. Қауіпсіздік ережелерін тағы бір рет қайталап көр."
          )}
        </p>

        <div class="result-score">
          <span>Нәтиже</span>
          <strong>${score} / ${total}</strong>
        </div>

        <div class="r-stars">
          ${renderStars(stars)}
        </div>

        ${
          newBest
            ? `
              <div class="new-record">
                ✨ Жаңа нәтиже!
              </div>
            `
            : ""
        }

        ${
          !isLast && nextUnlocked !== null
            ? `
              <div class="r-unlock">
                <span class="unlock-icon">
                  ${svgUse("s-lock")}
                </span>

                <div>
                  <small>Жаңа миссия ашылды</small>
                  <strong>
                    ${escapeHTML(
                      LEVELS[nextUnlocked].title
                    )}
                  </strong>
                </div>
              </div>
            `
            : `
              <div class="r-unlock final">
                <span class="unlock-icon">
                  ${svgUse("s-trophy")}
                </span>

                <div>
                  <small>Барлық миссия аяқталды</small>
                  <strong>Сен — цифрлық қорғаушысың!</strong>
                </div>
              </div>
            `
        }

        <button
          class="big-btn"
          id="resultContinueBtn"
          type="button"
        >
          ${isLast ? "Қаланы қайта көру" : "Жалғастыру"}
        </button>
      </div>
    `;

    $("#resultContinueBtn")?.addEventListener(
      "click",
      () => {
        closeOverlay(els.resultWrap);

        if (
          !isLast &&
          nextUnlocked !== null
        ) {
          setTimeout(() => {
            moveHeroToLevel(nextUnlocked);
            scrollToLevel(nextUnlocked);
          }, 150);
        }
      }
    );
  }

  function renderStars(count) {
    return [0, 1, 2]
      .map(
        (index) => `
          <span class="${
            index < count ? "active" : ""
          }">★</span>
        `
      )
      .join("");
  }

  /* =========================================================
     11. OVERLAYS
     ========================================================= */

  function openOverlay(overlay) {
    if (!overlay) return;

    overlay.classList.add("is-open", "show");
    overlay.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");
  }

  function closeOverlay(overlay) {
    if (!overlay) return;

    overlay.classList.remove("is-open", "show");
    overlay.setAttribute("aria-hidden", "true");

    if (
      !els.missionWrap?.classList.contains("is-open") &&
      !els.resultWrap?.classList.contains("is-open") &&
      !els.settingsWrap?.classList.contains("is-open")
    ) {
      document.body.classList.remove("modal-open");
    }
  }

  function closeAllOverlays() {
    closeOverlay(els.missionWrap);
    closeOverlay(els.resultWrap);
    closeOverlay(els.settingsWrap);
  }

  /* =========================================================
     12. SETTINGS
     ========================================================= */

  function openSettings() {
    renderSettings();

    openOverlay(els.settingsWrap);

    playSound("click");
  }

  function renderSettings() {
    if (!els.settingsWrap) return;

    const sheet =
      $(".sheet", els.settingsWrap) ||
      els.settingsWrap;

    /*
      Keep existing settings markup if it exists.
      Only update controls that we know.
    */

    updateSoundSwitch();

    const closeButton =
      $("[data-close-settings]", els.settingsWrap);

    closeButton?.addEventListener(
      "click",
      () => closeOverlay(els.settingsWrap)
    );
  }

  function updateSoundSwitch() {
    if (!els.soundSwitch) return;

    els.soundSwitch.classList.toggle(
      "on",
      state.sound
    );

    els.soundSwitch.setAttribute(
      "aria-checked",
      String(state.sound)
    );

    els.soundSwitch.setAttribute(
      "role",
      "switch"
    );
  }

  function toggleSound() {
    state.sound = !state.sound;

    saveState();
    updateSoundSwitch();

    if (state.sound) {
      playSound("click");
      showToast("Дыбыс қосылды 🔊");
    } else {
      showToast("Дыбыс өшірілді 🔇");
    }
  }

  function resetProgress() {
    const confirmed = window.confirm(
      "Барлық прогресс өшіріледі. Жалғастыру керек пе?"
    );

    if (!confirmed) return;

    state = structuredClone(defaultState);

    saveState();

    closeAllOverlays();

    updateWorld();
    updateProgress();

    positionHero(0);

    showToast(
      "Прогресс қайта басталды",
      "success"
    );

    playSound("reset");
  }

  /* =========================================================
     13. GLOBAL EVENTS
     ========================================================= */

  function bindGlobalEvents() {
  els.gearBtn?.addEventListener(
    "click",
    openSettings
  );

  els.soundSwitch?.addEventListener(
    "click",
    toggleSound
  );

  els.resetBtn?.addEventListener(
    "click",
    resetProgress
  );

  /*
    GLOBAL CLICK HANDLER

    Используем делегирование, потому что
    содержимое missionSheet/resultSheet
    создаётся динамически через innerHTML.
  */
  document.addEventListener("click", (event) => {

    // ==============================
    // START MISSION
    // ==============================

    const startBtn =
      event.target.closest("#missionStartBtn");

    if (startBtn) {
      event.preventDefault();

      if (currentLevel === null) {
        currentLevel = 0;
      }

      startMission(currentLevel);
      return;
    }


    // ==============================
    // NEXT QUESTION
    // ==============================

    const nextBtn =
      event.target.closest("#nextQuestionBtn");

    if (nextBtn) {
      event.preventDefault();

      nextQuestion();
      return;
    }


    // ==============================
    // QUIT MISSION
    // ==============================

    const quitBtn =
      event.target.closest("#quitMissionBtn");

    if (quitBtn) {
      event.preventDefault();

      closeOverlay(els.missionWrap);
      return;
    }


    // ==============================
    // RESULT CONTINUE
    // ==============================

    const resultBtn =
      event.target.closest("#resultContinueBtn");

    if (resultBtn) {
      event.preventDefault();

      closeOverlay(els.resultWrap);

      if (
        currentLevel !== null &&
        currentLevel < LEVELS.length - 1
      ) {
        const nextLevel = currentLevel + 1;

        setTimeout(() => {
          moveHeroToLevel(nextLevel);
          scrollToLevel(nextLevel);
        }, 150);
      }

      return;
    }


    // ==============================
    // CLOSE BUTTONS
    // ==============================

    const closeBtn =
      event.target.closest(
        "[data-close], .js-close, .close-btn"
      );

    if (closeBtn) {
      const overlay =
        closeBtn.closest(".overlay");

      if (overlay) {
        closeOverlay(overlay);
      }

      return;
    }


    // ==============================
    // OVERLAY BACKDROP
    // ==============================

    if (
      event.target.classList.contains("overlay")
    ) {
      closeOverlay(event.target);
    }
  });


  // ==============================
  // ESCAPE
  // ==============================

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        closeAllOverlays();
      }
    }
  );
}

  /* =========================================================
     14. HERO
     ========================================================= */

  function positionHero(levelIndex) {
    const loc = getLocation(levelIndex);

    if (!loc || !els.hero) return;

    const x =
      loc.offsetLeft +
      loc.offsetWidth / 2 -
      els.hero.offsetWidth / 2;

    const y =
      loc.offsetTop -
      Math.min(els.hero.offsetHeight * 0.3, 80);

    els.hero.style.transform =
      `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
  }

  function moveHeroToLevel(levelIndex) {
    positionHero(levelIndex);

    const loc = getLocation(levelIndex);

    if (!loc) return;

    loc.classList.add("hero-arrived");

    setTimeout(() => {
      loc.classList.remove("hero-arrived");
    }, 900);
  }

  function getLocation(levelIndex) {
    return els.locations.find(
      (loc) =>
        Number(loc.dataset.level) === levelIndex
    );
  }

  function scrollToLevel(levelIndex) {
    const loc = getLocation(levelIndex);

    if (!loc) return;

    loc.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }

  /* =========================================================
     15. LOCATION FEEDBACK
     ========================================================= */

  function shakeLocation(levelIndex) {
    const loc = getLocation(levelIndex);

    if (!loc) return;

    loc.classList.remove("shake");

    void loc.offsetWidth;

    loc.classList.add("shake");

    setTimeout(() => {
      loc.classList.remove("shake");
    }, 500);
  }

  /* =========================================================
     16. TOAST
     ========================================================= */

  let toastTimer = null;

  function showToast(message, type = "") {
    if (!els.toast) return;

    els.toast.textContent = message;

    els.toast.className =
      `toast ${type ? `toast-${type}` : ""} is-visible show`;

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      els.toast.classList.remove("is-visible", "show");
    }, 2600);
  }

  /* =========================================================
     17. CONFETTI
     ========================================================= */

  function spawnConfetti(amount = 20) {
    if (!els.fx) return;

    const fragment =
      document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
      const piece =
        document.createElement("span");

      piece.className = "cf";

      piece.style.left =
        `${Math.random() * 100}%`;

      piece.style.top =
        `${20 + Math.random() * 25}%`;

      piece.style.setProperty(
        "--x",
        `${(Math.random() - 0.5) * 260}px`
      );

      piece.style.setProperty(
        "--r",
        `${Math.random() * 720 - 360}deg`
      );

      piece.style.animationDelay =
        `${Math.random() * 0.25}s`;

      piece.style.animationDuration =
        `${0.9 + Math.random() * 0.8}s`;

      fragment.appendChild(piece);
    }

    els.fx.appendChild(fragment);

    setTimeout(() => {
      els.fx
        .querySelectorAll(".cf")
        .forEach((node) => node.remove());
    }, 2200);
  }

  /* =========================================================
     18. SOUND
     ========================================================= */

  function getAudioContext() {
    if (!audioContext) {
      const AudioCtx =
        window.AudioContext ||
        window.webkitAudioContext;

      if (!AudioCtx) return null;

      audioContext = new AudioCtx();
    }

    if (audioContext.state === "suspended") {
      audioContext.resume().catch(() => {});
    }

    return audioContext;
  }

  function playTone(
    frequency,
    duration = 0.08,
    type = "sine",
    volume = 0.045
  ) {
    if (!state.sound) return;

    const ctx = getAudioContext();

    if (!ctx) return;

    const oscillator =
      ctx.createOscillator();

    const gain =
      ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    gain.gain.setValueAtTime(
      volume,
      ctx.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      ctx.currentTime + duration
    );

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start();

    oscillator.stop(
      ctx.currentTime + duration
    );
  }

  function playSound(type) {
    if (!state.sound) return;

    switch (type) {
      case "click":
        playTone(520, 0.06, "sine", 0.035);
        break;

      case "start":
        playTone(440, 0.07);
        setTimeout(
          () => playTone(660, 0.09),
          70
        );
        break;

      case "correct":
        playTone(660, 0.08);
        setTimeout(
          () => playTone(880, 0.12),
          70
        );
        break;

      case "wrong":
        playTone(180, 0.16, "triangle");
        break;

      case "success":
        playTone(523, 0.08);
        setTimeout(
          () => playTone(659, 0.08),
          80
        );
        setTimeout(
          () => playTone(784, 0.14),
          160
        );
        break;

      case "error":
        playTone(150, 0.12, "square");
        break;

      case "reset":
        playTone(260, 0.08);
        setTimeout(
          () => playTone(180, 0.12),
          80
        );
        break;
    }
  }

  /* =========================================================
     19. SVG HELPERS
     ========================================================= */

  function svgUse(symbolId) {
    return `
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        class="inline-icon"
      >
        <use href="#${symbolId}"></use>
      </svg>
    `;
  }

  /* =========================================================
     20. SECURITY / HTML ESCAPE
     ========================================================= */


  /* =========================================================
     SCENE BUILDER (небо, город, маршрут, декор, герой)
     ========================================================= */

  const NS = "http://www.w3.org/2000/svg";

  function sv(tag, attrs = {}, parent) {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }

  function rng(seed) {
    let a = seed;
    return () => {
      a = (a * 16807) % 2147483647;
      return (a - 1) / 2147483646;
    };
  }

  function headMarkup() {
    return `
      <ellipse cx="34" cy="42" rx="5" ry="7" fill="#FFCBA4" stroke="#18213D" stroke-width="3"/>
      <ellipse cx="86" cy="42" rx="5" ry="7" fill="#FFCBA4" stroke="#18213D" stroke-width="3"/>
      <circle cx="60" cy="40" r="27" fill="#FFCBA4" stroke="#18213D" stroke-width="4"/>
      <path d="M33 38C31 14 52 8 64 10c14 1 25 12 23 28-6-9-14-13-27-13S39 29 33 38z" fill="#3A2A1A" stroke="#18213D" stroke-width="3.5" stroke-linejoin="round"/>
      <ellipse cx="50" cy="44" rx="4" ry="5.5" fill="#18213D"/>
      <ellipse cx="70" cy="44" rx="4" ry="5.5" fill="#18213D"/>
      <circle cx="51.5" cy="42" r="1.6" fill="#fff"/><circle cx="71.5" cy="42" r="1.6" fill="#fff"/>
      <circle cx="43" cy="53" r="4.5" fill="#FF8AC7" opacity=".55"/>
      <circle cx="77" cy="53" r="4.5" fill="#FF8AC7" opacity=".55"/>
      <path d="M52 54q8 8 16 0" fill="none" stroke="#18213D" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M31 40a29 29 0 0 1 58 0" fill="none" stroke="#31D7D3" stroke-width="5" stroke-linecap="round" opacity=".9"/>
      <rect x="25" y="36" width="9" height="15" rx="4" fill="#FF9B3D" stroke="#18213D" stroke-width="3"/>
      <rect x="86" y="36" width="9" height="15" rx="4" fill="#FF9B3D" stroke="#18213D" stroke-width="3"/>`;
  }

  function buildScene() {
    ["headSlot", "avatarSvg", "hintSvg"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = headMarkup();
    });

    els.locations.forEach((loc, i) => {
      const st = $(".stars", loc);
      if (st && !st.children.length) {
        st.innerHTML = [0, 1, 2]
          .map(() => `<svg viewBox="0 0 50 48" class="off"><use href="#s-star"/></svg>`)
          .join("");
      }
      const sp = $(".sparks", loc);
      if (sp && !sp.children.length) {
        const r = rng(97 + i * 13);
        for (let k = 0; k < 8; k++) {
          const e = document.createElement("i");
          e.style.left = r() * 100 + "%";
          e.style.top = r() * 100 + "%";
          e.style.setProperty("--s", 6 + r() * 8 + "px");
          e.style.animationDelay = -(r() * 3).toFixed(2) + "s";
          sp.appendChild(e);
        }
      }
    });

    const sky = document.getElementById("stars");
    if (sky && !sky.children.length) {
      const r = rng(42);
      for (let i = 0; i < 70; i++) {
        const d = document.createElement("div");
        const t = r();
        d.className = "st" + (t > 0.9 ? " pk" : t > 0.78 ? " px" : "");
        const z = 2 + r() * 3;
        d.style.cssText = `left:${r() * 100}%;top:${r() * 100}%;width:${z}px;height:${z}px;--t:${(2 + r() * 3).toFixed(1)}s;--d:${(-r() * 4).toFixed(1)}s`;
        sky.appendChild(d);
      }
    }

    const far = document.getElementById("farCity");
    if (far && !far.firstChild) {
      const svg = sv("svg", { viewBox: "0 0 400 300", preserveAspectRatio: "xMidYMax slice" }, far);
      const r = rng(7);
      let x = -10, n = 0;
      while (x < 410) {
        const w = 28 + r() * 30, h = 70 + r() * 170;
        sv("rect", { x, y: 300 - h, width: w, height: h, rx: 3, fill: n % 2 ? "#2A1B6E" : "#37258A", opacity: 0.85 }, svg);
        for (let wy = 300 - h + 10; wy < 285; wy += 16)
          for (let wx = x + 6; wx < x + w - 8; wx += 12) {
            const q = r();
            if (q > 0.45)
              sv("rect", { x: wx, y: wy, width: 5, height: 7, rx: 1, fill: q > 0.8 ? "#7BE9FF" : "#FFD84A", class: "win " + (q > 0.9 ? "w3" : q > 0.7 ? "w2" : "w1"), opacity: 0.8 }, svg);
          }
        if (h > 200)
          sv("circle", { cx: x + w / 2, cy: 300 - h - 6, r: 3.5, fill: "#FF4B6E", class: "beacon" }, svg);
        x += w + 2 + r() * 6;
        n++;
      }
    }

    const dec = document.getElementById("decor");
    if (dec && !dec.firstChild) {
      [
        ["s-shield", 52, 150, 28, 34, "#48AEFF", "float"],
        ["s-crystal", 8, 330, 26, 38, "#7CF1E0", "float d1"],
        ["s-bolt", 80, 420, 22, 36, "#FFF08A", "zapd"],
        ["s-crystal", 84, 640, 28, 40, "#A8F4FF", "float d2"],
        ["s-star", 6, 700, 32, 31, "#FFD84A", "float d1"],
        ["s-bolt", 12, 900, 22, 36, "#7BE9FF", "zapd"],
        ["s-shield", 82, 960, 28, 34, "#31D7D3", "float"],
        ["s-bush", 70, 1250, 80, 46, "#43D17C", ""],
        ["s-bush", 2, 1210, 70, 40, "#2FB868", ""],
        ["s-star", 88, 1120, 28, 27, "#FFD84A", "float d2"],
        ["s-lock", 40, 40, 26, 31, "#FFD84A", "float"],
      ].forEach(([id, l, t, w, h, c, cls]) => {
        const s2 = sv("svg", { class: "dec " + cls, width: w, height: h, viewBox: `0 0 ${w} ${h}` });
        s2.style.left = l + "%";
        s2.style.top = t + "px";
        s2.style.color = c;
        sv("use", { href: "#" + id, width: w, height: h }, s2);
        dec.appendChild(s2);
      });
    }

    buildRoute();
    buildNearCity();
  }

  let routeSegs = [];

  function locCenter(i) {
    const l = els.locations.find((el) => Number(el.dataset.i) === i);
    return { x: l.offsetLeft + l.offsetWidth / 2, y: l.offsetTop + l.offsetHeight / 2 + 20 };
  }

  function buildRoute() {
    const svg = document.getElementById("route");
    if (!svg) return;
    svg.innerHTML = "";
    routeSegs = [];
    const W = els.world.clientWidth, H = els.world.clientHeight;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const colors = ["#FF9B3D", "#31D7D3", "#9B6BFF"];
    for (let i = 0; i < LEVELS.length - 1; i++) {
      const a = locCenter(i), b = locCenter(i + 1);
      const my = (a.y + b.y) / 2;
      const d = `M${a.x} ${a.y}C${a.x} ${my} ${b.x} ${my} ${b.x} ${b.y}`;
      const g = sv("g", { class: "seg" }, svg);
      sv("path", { d, class: "r-out" }, g);
      sv("path", { d, class: "r-body", stroke: colors[i % 3] }, g);
      sv("path", { d, class: "r-cable" }, g);
      sv("path", { d, class: "r-light" }, g);
      routeSegs.push(g);
    }
    updateRouteState();
  }

  function updateRouteState() {
    routeSegs.forEach((g, i) => {
      const passed = state.completed[i] === true;
      g.classList.toggle("passed", passed);
      g.classList.toggle("future", !passed);
    });
  }

  function buildNearCity() {
    const svg = document.getElementById("nearCity");
    if (!svg) return;
    svg.innerHTML = "";
    const W = els.world.clientWidth;
    svg.setAttribute("viewBox", `0 0 ${W} 170`);
    const r = rng(23);
    let x = -8;
    while (x < W) {
      const w = 34 + r() * 36, h = 40 + r() * 70;
      sv("rect", { x, y: 140 - h, width: w, height: h + 30, rx: 5, fill: "#1B1450", stroke: "#0b1030", "stroke-width": 3 }, svg);
      for (let wy = 140 - h + 10; wy < 128; wy += 15)
        for (let wx = x + 7; wx < x + w - 9; wx += 13)
          if (r() > 0.5)
            sv("rect", { x: wx, y: wy, width: 6, height: 8, rx: 1.5, fill: r() > 0.7 ? "#7BE9FF" : "#FFD84A", opacity: 0.85 }, svg);
      x += w + 4;
    }
    sv("rect", { x: 0, y: 140, width: W, height: 30, fill: "#0b1030" }, svg);
    sv("line", { x1: 0, y1: 156, x2: W, y2: 156, stroke: "#FFD84A", "stroke-width": 3, "stroke-dasharray": "14 12", "stroke-linecap": "round", class: "road" }, svg);
  }

  function escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  /* =========================================================
     21. REDUCED MOTION
     ========================================================= */

  const reducedMotion =
    window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    );

  if (reducedMotion?.matches) {
    document.documentElement.classList.add(
      "reduce-motion"
    );
  }

  /* =========================================================
     22. START
     ========================================================= */

  if (
    document.readyState === "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      init
    );
  } else {
    init();
  }
})();