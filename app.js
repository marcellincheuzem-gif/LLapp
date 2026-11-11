const lessons = [
  {
    word: "careful",
    pronunciation: "/ˈker.fəl/",
    partOfSpeech: "adjective",
    definition: "Giving attention to avoid mistakes, danger, or harm.",
    family: [["care", "noun / verb"], ["careful", "adjective"], ["carefully", "adverb"], ["carelessness", "noun"]],
    sentences: ["Be careful when you cross the street.", "She carefully checked the answer before submitting it.", "His carelessness caused a small problem."],
    question: "Please be ___ with that glass.",
    answer: "careful"
  },
  {
    word: "create",
    pronunciation: "/kriˈeɪt/",
    partOfSpeech: "verb",
    definition: "To make something new or cause something to happen.",
    family: [["create", "verb"], ["creative", "adjective"], ["creation", "noun"], ["creatively", "adverb"]],
    sentences: ["We create a new lesson every week.", "She has a creative way of explaining grammar.", "The creation of this app took careful planning."],
    question: "Designers ___ useful tools for learners.",
    answer: "create"
  },
  {
    word: "improve",
    pronunciation: "/ɪmˈpruːv/",
    partOfSpeech: "verb",
    definition: "To become better or make something better.",
    family: [["improve", "verb"], ["improvement", "noun"], ["improved", "adjective"], ["improving", "adjective"]],
    sentences: ["Practice helps you improve your pronunciation.", "Her improvement was easy to hear.", "The updated lesson has an improved audio track."],
    question: "Daily practice can ___ your speaking.",
    answer: "improve"
  },
  {
    word: "confident",
    pronunciation: "/ˈkɑːn.fə.dənt/",
    partOfSpeech: "adjective",
    definition: "Feeling sure about your abilities or knowledge.",
    family: [["confidence", "noun"], ["confident", "adjective"], ["confidently", "adverb"], ["unconfident", "adjective"]],
    sentences: ["She feels confident speaking with new people.", "His confidence grew after more practice.", "He answered the question confidently."],
    question: "After practicing, I feel more ___.",
    answer: "confident"
  },
  {
    word: "curious",
    pronunciation: "/ˈkjʊr.i.əs/",
    partOfSpeech: "adjective",
    definition: "Wanting to learn or know more about something.",
    level: "beginner",
    family: [["curiosity", "noun"], ["curious", "adjective"], ["curiously", "adverb"]],
    sentences: ["Curious learners ask useful questions.", "Her curiosity helped her discover a new museum.", "He looked curiously at the unusual painting."],
    question: "A person who wants to learn is ___.",
    answer: "curious"
  },
  {
    word: "prepare",
    pronunciation: "/prɪˈper/",
    partOfSpeech: "verb",
    definition: "To make something or someone ready for an activity or event.",
    level: "elementary",
    family: [["prepare", "verb"], ["preparation", "noun"], ["prepared", "adjective"], ["unprepared", "adjective"]],
    sentences: ["Please prepare your questions before the lesson.", "Good preparation makes speaking easier.", "She was prepared for the traffic."],
    question: "I need to ___ for my interview.",
    answer: "prepare"
  },
  {
    word: "recommend",
    pronunciation: "/ˌrek.əˈmend/",
    partOfSpeech: "verb",
    definition: "To suggest that someone or something is good or suitable.",
    level: "intermediate",
    family: [["recommend", "verb"], ["recommendation", "noun"], ["recommended", "adjective"]],
    sentences: ["What restaurant do you recommend?", "He gave me a useful recommendation.", "This book is highly recommended for learners."],
    question: "Which museum do you ___?",
    answer: "recommend"
  },
  {
    word: "perspective",
    pronunciation: "/pɚˈspek.tɪv/",
    partOfSpeech: "noun",
    definition: "A particular way of thinking about or understanding something.",
    level: "upper",
    family: [["perspective", "noun"], ["perspective-taking", "noun"], ["perspectival", "adjective"]],
    sentences: ["Travel can change your perspective.", "Try to see the problem from her perspective.", "The exhibit offers a new perspective on history."],
    question: "Everyone has a different ___ on the situation.",
    answer: "perspective"
  },
  {
    word: "reliable",
    pronunciation: "/rɪˈlaɪ.ə.bəl/",
    partOfSpeech: "adjective",
    definition: "Able to be trusted to do what is expected.",
    level: "elementary",
    family: [["rely", "verb"], ["reliable", "adjective"], ["reliably", "adverb"], ["reliability", "noun"]],
    sentences: ["We need a reliable bus service.", "She is reliable and always arrives on time.", "The app works reliably on my phone."],
    question: "A person you can trust is ___.",
    answer: "reliable"
  },
  {
    word: "decide",
    pronunciation: "/dɪˈsaɪd/",
    partOfSpeech: "verb",
    definition: "To choose something after thinking about different possibilities.",
    level: "elementary",
    family: [["decide", "verb"], ["decision", "noun"], ["decisive", "adjective"], ["undecided", "adjective"]],
    sentences: ["We need to decide where to eat.", "That was a difficult decision.", "She gave a decisive answer."],
    question: "Have you ___ what to order?",
    answer: "decided"
  },
  {
    word: "opportunity",
    pronunciation: "/ˌɑː.pɚˈtuː.nə.t̬i/",
    partOfSpeech: "noun",
    definition: "A suitable time or situation that makes it possible to do something.",
    level: "intermediate",
    family: [["opportunity", "noun"], ["opportune", "adjective"], ["opportunist", "noun"], ["opportunistic", "adjective"]],
    sentences: ["This course is a great opportunity to practice.", "Take every opportunity to speak.", "The timing was opportune."],
    question: "Learning abroad is a valuable ___.",
    answer: "opportunity"
  },
  {
    word: "negotiate",
    pronunciation: "/nɪˈɡoʊ.ʃi.eɪt/",
    partOfSpeech: "verb",
    definition: "To try to reach an agreement by discussing something.",
    level: "upper",
    family: [["negotiate", "verb"], ["negotiation", "noun"], ["negotiator", "noun"], ["negotiable", "adjective"]],
    sentences: ["They negotiated a better price.", "The negotiation lasted two hours.", "The delivery date is negotiable."],
    question: "We need to ___ a fair agreement.",
    answer: "negotiate"
  },
  {
    word: "friendly",
    pronunciation: "/ˈfrend.li/",
    partOfSpeech: "adjective",
    definition: "Kind, pleasant, and easy to talk to.",
    level: "beginner",
    family: [["friend", "noun"], ["friendly", "adjective"], ["friendship", "noun"], ["unfriendly", "adjective"]],
    sentences: ["The barista was friendly and helpful.", "A friendly smile can start a conversation.", "Their friendship began at school."],
    question: "Our new neighbor is very ___.",
    answer: "friendly"
  },
  {
    word: "patient",
    pronunciation: "/ˈpeɪ.ʃənt/",
    partOfSpeech: "adjective",
    definition: "Able to wait or deal with difficulty without becoming upset.",
    level: "beginner",
    family: [["patience", "noun"], ["patient", "adjective"], ["patiently", "adverb"], ["impatient", "adjective"]],
    sentences: ["Please be patient while the bus arrives.", "She patiently explained the answer.", "Patience helps when learning a language."],
    question: "Learning a language requires ___.",
    answer: "patience"
  },
  {
    word: "comfortable",
    pronunciation: "/ˈkʌm.fɚ.t̬ə.bəl/",
    partOfSpeech: "adjective",
    definition: "Feeling relaxed and free from discomfort.",
    level: "elementary",
    family: [["comfort", "noun / verb"], ["comfortable", "adjective"], ["comfortably", "adverb"], ["uncomfortable", "adjective"]],
    sentences: ["This chair is comfortable.", "She feels comfortable speaking English now.", "We sat comfortably near the window."],
    question: "Please make yourself ___ and stay awhile.",
    answer: "comfortable"
  },
  {
    word: "available",
    pronunciation: "/əˈveɪ.lə.bəl/",
    partOfSpeech: "adjective",
    definition: "Ready to be used, bought, or reached.",
    level: "elementary",
    family: [["available", "adjective"], ["availability", "noun"], ["unavailable", "adjective"]],
    sentences: ["Are there any tickets available?", "The teacher is available after class.", "Online booking shows the availability of seats."],
    question: "Is this table ___?",
    answer: "available"
  },
  {
    word: "communicate",
    pronunciation: "/kəˈmjuː.nə.keɪt/",
    partOfSpeech: "verb",
    definition: "To share information, ideas, or feelings with someone.",
    level: "intermediate",
    family: [["communicate", "verb"], ["communication", "noun"], ["communicative", "adjective"], ["communicator", "noun"]],
    sentences: ["Good speakers communicate clearly.", "Email is one form of communication.", "She is a confident communicator."],
    question: "We use language to ___ our ideas.",
    answer: "communicate"
  },
  {
    word: "flexible",
    pronunciation: "/ˈflek.sə.bəl/",
    partOfSpeech: "adjective",
    definition: "Able to change or adapt easily to a new situation.",
    level: "intermediate",
    family: [["flexible", "adjective"], ["flexibility", "noun"], ["inflexible", "adjective"]],
    sentences: ["My schedule is flexible this week.", "Flexibility is useful when plans change.", "The rules are not completely inflexible."],
    question: "We need a ___ plan in case it rains.",
    answer: "flexible"
  },
  {
    word: "significant",
    pronunciation: "/sɪɡˈnɪf.ə.kənt/",
    partOfSpeech: "adjective",
    definition: "Important or large enough to have an effect.",
    level: "upper",
    family: [["significance", "noun"], ["significant", "adjective"], ["significantly", "adverb"]],
    sentences: ["The lesson made a significant difference.", "The result is significant for the whole team.", "Costs have increased significantly."],
    question: "This was a ___ improvement.",
    answer: "significant"
  },
  {
    word: "subtle",
    pronunciation: "/ˈsʌt̬.əl/",
    partOfSpeech: "adjective",
    definition: "Small but important and not easy to notice.",
    level: "upper",
    family: [["subtle", "adjective"], ["subtly", "adverb"], ["subtlety", "noun"]],
    sentences: ["There is a subtle difference in meaning.", "Her tone subtly changed.", "Understanding cultural subtlety takes time."],
    question: "The speaker made a ___ change in tone.",
    answer: "subtle"
  }

];

lessons.forEach((lesson) => {
  if (!lesson.level) lesson.level = "beginner";
});

const translations = {
  careful: { fr: "prudent", es: "cuidadoso", vi: "cẩn thận", fa: "محتاط", ko: "조심스러운", de: "vorsichtig", ar: "حذر", pt: "cuidadoso", zh: "小心" },
  create: { fr: "créer", es: "crear", vi: "tạo ra", fa: "ایجاد کردن", ko: "만들다", de: "schaffen", ar: "ينشئ", pt: "criar", zh: "创造" },
  improve: { fr: "améliorer", es: "mejorar", vi: "cải thiện", fa: "بهبود دادن", ko: "향상시키다", de: "verbessern", ar: "يحسن", pt: "melhorar", zh: "改善" },
  confident: { fr: "confiant", es: "seguro", vi: "tự tin", fa: "مطمئن", ko: "자신감 있는", de: "selbstbewusst", ar: "واثق", pt: "confiante", zh: "自信" },
  curious: { fr: "curieux", es: "curioso", vi: "tò mò", fa: "کنجکاو", ko: "호기심 많은", de: "neugierig", ar: "فضولي", pt: "curioso", zh: "好奇" },
  prepare: { fr: "préparer", es: "preparar", vi: "chuẩn bị", fa: "آماده کردن", ko: "준비하다", de: "vorbereiten", ar: "يجهز", pt: "preparar", zh: "准备" },
  recommend: { fr: "recommander", es: "recomendar", vi: "giới thiệu", fa: "توصیه کردن", ko: "추천하다", de: "empfehlen", ar: "يوصي", pt: "recomendar", zh: "推荐" },
  perspective: { fr: "perspective", es: "perspectiva", vi: "góc nhìn", fa: "دیدگاه", ko: "관점", de: "Perspektive", ar: "منظور", pt: "perspectiva", zh: "视角" },
  reliable: { fr: "fiable", es: "confiable", vi: "đáng tin cậy", fa: "قابل اعتماد", ko: "믿을 만한", de: "zuverlässig", ar: "موثوق", pt: "confiável", zh: "可靠" },
  decide: { fr: "décider", es: "decidir", vi: "quyết định", fa: "تصمیم گرفتن", ko: "결정하다", de: "entscheiden", ar: "يقرر", pt: "decidir", zh: "决定" },
  opportunity: { fr: "opportunité", es: "oportunidad", vi: "cơ hội", fa: "فرصت", ko: "기회", de: "Gelegenheit", ar: "فرصة", pt: "oportunidade", zh: "机会" },
  negotiate: { fr: "négocier", es: "negociar", vi: "thương lượng", fa: "مذاکره کردن", ko: "협상하다", de: "verhandeln", ar: "يتفاوض", pt: "negociar", zh: "谈判" },
  friendly: { fr: "amical", es: "amable", vi: "thân thiện", fa: "دوستانه", ko: "친절한", de: "freundlich", ar: "ودود", pt: "amigável", zh: "友好" },
  patient: { fr: "patient", es: "paciente", vi: "kiên nhẫn", fa: "صبور", ko: "참을성 있는", de: "geduldig", ar: "صبور", pt: "paciente", zh: "耐心" },
  comfortable: { fr: "confortable", es: "cómodo", vi: "thoải mái", fa: "راحت", ko: "편안한", de: "bequem", ar: "مريح", pt: "confortável", zh: "舒适" },
  available: { fr: "disponible", es: "disponible", vi: "có sẵn", fa: "در دسترس", ko: "이용 가능한", de: "verfügbar", ar: "متاح", pt: "disponível", zh: "可用" },
  communicate: { fr: "communiquer", es: "comunicar", vi: "giao tiếp", fa: "ارتباط برقرار کردن", ko: "소통하다", de: "kommunizieren", ar: "يتواصل", pt: "comunicar", zh: "沟通" },
  flexible: { fr: "flexible", es: "flexible", vi: "linh hoạt", fa: "انعطاف‌پذیر", ko: "유연한", de: "flexibel", ar: "مرن", pt: "flexível", zh: "灵活" },
  significant: { fr: "important", es: "significativo", vi: "đáng kể", fa: "قابل توجه", ko: "중요한", de: "bedeutend", ar: "مهم", pt: "significativo", zh: "重要" },
  subtle: { fr: "subtil", es: "sutil", vi: "tinh tế", fa: "ظریف", ko: "미묘한", de: "subtil", ar: "دقيق", pt: "sutil", zh: "微妙" }
};

const lessonWordLists = {
  beginner: "able about above accept across act add afraid after afternoon again age agree air airport alive all along already always animal answer apartment apple arrive art ask autumn away baby back bad bag bank bathroom beach beautiful because become bedroom believe below bicycle big bird birthday black blue book bottle boy bread breakfast bring brother bus busy buy cake call camera can car careful carry center chair change cheap child choose city class clean climb close clothes cloudy coffee cold college color come company cook country course cousin cry cup dance dark date day dear decide deep desk different difficult dinner doctor dog door down draw dream drink drive easy eat egg eight email empty enjoy enough every example excuse exercise eye face family famous farmer fast father feel festival find finish fire first fish five floor flower fly food foot football forget free friend friendly front full fun funny garden get gift girl give glass go good goodbye grand green group grow guess happy hard hat have help high home hope hospital hot house hungry idea important invite island jacket job juice jump just keep key kitchen know lake language large last late learn left lesson letter library life light like line listen little live long look love lunch machine make many market matter maybe meal meet middle milk minute mirror mobile money month morning mother mountain move movie music name near need never new night nine north nose notice number nurse office often old one open orange order other outside page paint park party pass pay people perfect phone picture place plan play please pocket police poor popular practice present price problem program purple put question quick quiet rain read ready red remember restaurant return rice right river road room round run safe school sea season second see sell send seven share sheep shop short show sick simple sister sit six sleep slow small smile snow some song soon sorry sound south speak spend sport spring stand start station stay step stop story street strong student study summer sun supermarket sure table take talk tall teach teacher team ten thank that theater there thing think thirsty three ticket time tired today together tomorrow town train travel tree try turn two understand university use usually vegetable visit wait walk wall want warm watch water way weather week welcome west what where white who window winter wish woman word work write wrong year yellow yes yesterday young zero",
  elementary: "ability accident address adventure advice afford almost amount ancient appear apply area argue article attention avoid balance behavior belong benefit between borrow brave breathe bridge budget build building calm campaign cancel cause celebrate chance character circle citizen collect comfortable community compare complete condition connect consider contact continue conversation correct corner cost create culture customer daily damage decision deliver department describe detail develop difference direction discover discuss disease distance education employee energy engineer enjoy environment equipment especially event exactly experience explain express extra factory fail fair familiar favorite feature feed field final follow foreign form future general gentle goal government grade guest habit healthy history holiday improve include increase independent industry information instead instruction interest introduce journey judge knowledge leader leave local manage material member message method modern moment natural necessary neighbor network notice offer operate opportunity organize original package patient perform perhaps period personal photograph physical piece planet pleasure polite possible prepare pressure prevent primary probably process produce professional protect provide purpose reach receive recipe record reduce relationship relax remove repair repeat report research result return review risk safe save score service several shape share should signal similar social solution special spend standard strange successful suggest support survive system temperature thank ticket traditional traffic trouble useful usual value village volunteer weather website welcome wonder",
  intermediate: "abstract accurate achievement adapt adequate alternative analysis announce anticipate apparent approach appropriate assess assume attitude authority aware behalf capacity category challenge circumstance claim clarify collaborate commitment consequence consistent construct consume contribute convince coordinate crucial decline demonstrate deny derive despite dimension distribute economy efficient eliminate emphasize enable encounter equivalent establish estimate evaluate evidence exclude expand expose factor finance flexible focus framework function generate impact implement imply incorporate indicate inevitable infer initial innovate insight instance integrate intellectual interpret investigate involve issue justify maintain overall participate perspective perceive permit policy potential precise predict primarily proceed proportion pursue react recover relevant rely require resolve resource respond retain reveal select sequence significant strategy submit sufficient transform transmit trend undertake unique valid vary verify version welfare",
  upper: "accordingly albeit ambiguous analogy arbitrary articulate assert coherent coincide compelling comprehensive conceive concurrent contradictory convey conventional correlation credible criterion cumulative dedicate deficiency dilemma discrete elaborate empirical enhance ensure ethical explicit facilitate fluctuate forthcoming hierarchy hypothetical ideology implicit incentive incompatible incidence incline inherent inhibit innovative insert intervention intrinsic invoke legitimate manipulate marginal nonetheless objective paradigm persistent phenomenon plausible preliminary presumably prioritize profound reconcile refine reinforce reluctant rigid scenario sophisticated subordinate subsequent substantive supplement sustainable tolerate trajectory undermine unprecedented utilize validly whereby widespread aggregate allocate autonomous benchmark commodity compatible complement concurrent controversial deterioration devise empirical extraction forthcoming fundamental holistic inconsistency indispensable infrastructure inherent integration jurisdiction leverage likewise meticulous mutually negligible objective orientation paradox parameter persuasively practitioner prerequisite prospect rational reinforce reluctant repertoire rigorous scarce simultaneous sphere spontaneous stakeholder supplementary symposium tentative theoretical threshold unprecedented versatile viable virtually",
};

const generatedDefinitions = {
  beginner: "A practical everyday English word for basic communication.",
  elementary: "A useful English word for daily life, study, and work.",
  intermediate: "A useful English word for clear communication and discussion.",
  upper: "An advanced English word for precise academic and professional communication."
};

const generatedParts = ["noun", "verb", "adjective", "adverb"];
const generatedTranslations = {
  fr: { hello: "bonjour", family: "famille", school: "école", work: "travail", water: "eau", food: "nourriture", house: "maison", friend: "ami", happy: "heureux", important: "important" },
  es: { hello: "hola", family: "familia", school: "escuela", work: "trabajo", water: "agua", food: "comida", house: "casa", friend: "amigo", happy: "feliz", important: "importante" },
  vi: { hello: "xin chào", family: "gia đình", school: "trường học", work: "công việc", water: "nước", food: "thức ăn", house: "nhà", friend: "bạn", happy: "hạnh phúc", important: "quan trọng" },
  fa: { hello: "سلام", family: "خانواده", school: "مدرسه", work: "کار", water: "آب", food: "غذا", house: "خانه", friend: "دوست", happy: "خوشحال", important: "مهم" },
  ko: { hello: "안녕하세요", family: "가족", school: "학교", work: "일", water: "물", food: "음식", house: "집", friend: "친구", happy: "행복한", important: "중요한" },
  de: { hello: "hallo", family: "Familie", school: "Schule", work: "Arbeit", water: "Wasser", food: "Essen", house: "Haus", friend: "Freund", happy: "glücklich", important: "wichtig" },
  ar: { hello: "مرحبا", family: "عائلة", school: "مدرسة", work: "عمل", water: "ماء", food: "طعام", house: "منزل", friend: "صديق", happy: "سعيد", important: "مهم" },
  pt: { hello: "olá", family: "família", school: "escola", work: "trabalho", water: "água", food: "comida", house: "casa", friend: "amigo", happy: "feliz", important: "importante" },
  zh: { hello: "你好", family: "家庭", school: "学校", work: "工作", water: "水", food: "食物", house: "房子", friend: "朋友", happy: "快乐", important: "重要" }
};

Object.entries(lessonWordLists).forEach(([level, words]) => {
  const existing = lessons.filter((item) => item.level === level).length;
  words.split(" ").forEach((word, index) => {
    if (lessons.filter((item) => item.level === level).length >= 100) return;
    if (lessons.some((item) => item.word === word)) return;
    const partOfSpeech = generatedParts[index % generatedParts.length];
    lessons.push({
      word,
      pronunciation: `/${word}/`,
      partOfSpeech,
      definition: generatedDefinitions[level],
      level,
      family: [[word, partOfSpeech]],
      sentences: [`I use the word “${word}” in English practice.`, `This lesson helps me understand “${word}”.`, `Can you use “${word}” in a sentence?`],
      question: `Can you use “${word}” in a sentence?`,
      answer: word
    });
  });
});

lessons.forEach((item) => {
  item.translations = translations[item.word] || {};
});

Object.entries(generatedTranslations).forEach(([language, words]) => {
  Object.entries(words).forEach(([english, translated]) => {
    const item = lessons.find((lesson) => lesson.word === english);
    if (item) item.translations[language] = translated;
  });
});

Object.keys(lessonWordLists).forEach((level) => {
  let serial = 1;
  while (lessons.filter((item) => item.level === level).length < 100) {
    const word = `${level}-lesson-${serial++}`;
    if (lessons.some((item) => item.word === word)) continue;
    lessons.push({
      word,
      pronunciation: `/${word}/`,
      partOfSpeech: "word",
      definition: generatedDefinitions[level],
      level,
      family: [[word, "word"]],
      sentences: [`Practice the English word “${word}”.`, `Say “${word}” aloud.`, `Write a sentence with “${word}”.`],
      question: `Write the word: ${word}`,
      answer: word,
      translations: {}
    });
  }
});

const phrasalVerbs = [
  ["look up", "search for information", "I looked up the word in a dictionary."],
  ["find out", "discover information", "I need to find out what time the museum closes."],
  ["put off", "delay something", "The rain put off our trip to the park."],
  ["run into", "meet someone unexpectedly", "I ran into my teacher at the restaurant."],
  ["check in", "arrive and register", "We checked in at the hotel before dinner."],
  ["get along", "have a good relationship", "Do you get along with your classmates?"],
  ["bring up", "start a topic in conversation", "She brought up an interesting idea."],
  ["work out", "exercise or solve a problem", "I work out at the stadium every Saturday."]
];

const situations = {
  traffic: [
    ["Excuse me, is there another route?", "Ask for a different way to travel."],
    ["How long is the delay?", "Ask how much longer the traffic will last."],
    ["I’m stuck in traffic.", "Explain why you will arrive late."],
    ["Could you let me merge?", "Politely ask another driver to let you enter the lane."]
  ],
  restaurant: [
    ["Could we have a table for two?", "Ask for a table when you arrive."],
    ["What do you recommend?", "Ask the server for a suggestion."],
    ["Could we have the bill, please?", "Ask to pay at the end of the meal."],
    ["Is this dish spicy?", "Check the flavor before ordering."]
  ],
  park: [
    ["Is this seat taken?", "Ask if you may sit somewhere."],
    ["What a beautiful day!", "Make friendly small talk about the weather."],
    ["Do you know where the restroom is?", "Ask for directions."],
    ["Would you like me to take your picture?", "Offer help to another visitor."]
  ],
  museum: [
    ["Where can I find the modern art gallery?", "Ask for a location inside the museum."],
    ["Is photography allowed?", "Check a museum rule."],
    ["How old is this exhibit?", "Show interest in an object."],
    ["Could I get an audio guide?", "Ask for a learning guide."]
  ],
  stadium: [
    ["Which section are you sitting in?", "Ask where someone’s seat is."],
    ["What’s the score?", "Ask about the current result."],
    ["Great play!", "React positively during a game."],
    ["Do you want to get a snack?", "Suggest buying food during a break."]
  ],
  "coffee shop": [
    ["Could I get a medium latte, please?", "Order a drink politely."],
    ["Can I have this to go?", "Ask to take your order away instead of eating there."],
    ["Could I have your name for the order?", "Give your name when the cashier asks."],
    ["Is there free Wi-Fi here?", "Ask whether you can use the internet."],
    ["Could you make it decaf?", "Ask for coffee without caffeine."],
    ["Can I pay by card?", "Ask whether card payment is accepted."]
  ],
  mall: [
    ["Excuse me, where is the fitting room?", "Ask where you can try on clothes."],
    ["Do you have this in a different size?", "Ask for another size of an item."],
    ["How much does this cost?", "Ask for the price."],
    ["Is there a discount on this?", "Ask whether the item is on sale."],
    ["I’m just looking, thank you.", "Politely say you do not need help yet."],
    ["Can I return this if it doesn’t fit?", "Ask about the store’s return policy."]
  ],
  bus: [
    ["Does this bus go to the city center?", "Check whether you are on the right bus."],
    ["Which stop should I get off at?", "Ask where to leave the bus."],
    ["How much is a ticket?", "Ask for the fare."],
    ["Could you tell me when we get there?", "Ask another passenger or the driver for help."],
    ["Is this seat free?", "Ask whether you may sit down."],
    ["Could you let me know when we reach the museum?", "Ask someone to alert you at your stop."]
  ],
  airport: [
    ["Where is the check-in counter?", "Ask where to check in for your flight."],
    ["What time does boarding begin?", "Ask when passengers can board."],
    ["Is this the line for security?", "Check that you are waiting in the correct line."],
    ["Could you help me find Gate 12?", "Ask for directions to your gate."],
    ["Has the flight been delayed?", "Ask whether the departure time has changed."]
  ],
  hotel: [
    ["I have a reservation under the name Lee.", "Tell the receptionist your booking name."],
    ["What time is check-out?", "Ask when you need to leave the room."],
    ["Could I get an extra towel, please?", "Request another item for your room."],
    ["Is breakfast included?", "Ask whether breakfast is part of the booking."],
    ["Could you call me a taxi?", "Ask the front desk to arrange transportation."]
  ],
  pharmacy: [
    ["Do you have something for a headache?", "Ask for help choosing medicine."],
    ["How often should I take this?", "Ask about the instructions."],
    ["Are there any side effects?", "Ask about possible reactions to medicine."],
    ["Do I need a prescription?", "Check whether a doctor’s prescription is required."],
    ["I’m allergic to penicillin.", "Tell the pharmacist about an allergy."]
  ]
};

const situationLevelVariants = {
  beginner: {
    traffic: [["Is this the bus to downtown?", "Check a simple route."], ["Please stop here.", "Ask a driver to stop."], ["The traffic is slow.", "Describe a traffic problem."]],
    restaurant: [["A table for two, please.", "Ask for a table."], ["I would like water, please.", "Order a drink."], ["The bill, please.", "Ask to pay."]],
    park: [["Can I sit here?", "Ask about a seat."], ["It is a nice day.", "Make simple small talk."], ["Where is the bathroom?", "Ask for directions."]],
    museum: [["Where is the art room?", "Ask for a gallery."], ["Can I take a photo?", "Ask about a rule."], ["I like this painting.", "Share a simple opinion."]],
    stadium: [["Which team is playing?", "Ask about the game."], ["What is the score?", "Ask for the result."], ["Great goal!", "React to the game."]],
    "coffee shop": [["A small coffee, please.", "Order a drink."], ["For here, please.", "Say you will stay."], ["Can I pay by card?", "Ask about payment."]],
    mall: [["How much is this?", "Ask for a price."], ["Do you have a larger size?", "Ask for another size."], ["I am just looking.", "Reply politely to a shop assistant."]],
    bus: [["Does this bus go downtown?", "Check the route."], ["Where is the bus stop?", "Ask for the stop."], ["Is this seat free?", "Ask about a seat."]],
    airport: [["Where is my gate?", "Ask for airport directions."], ["Where do I check in?", "Ask for the counter."], ["Is the flight on time?", "Ask about a flight."]],
    hotel: [["I have a reservation.", "Tell the receptionist."], ["What time is breakfast?", "Ask about breakfast."], ["I need a towel, please.", "Request an item."]],
    pharmacy: [["I have a headache.", "Explain a simple problem."], ["How much is this medicine?", "Ask for the price."], ["How often do I take it?", "Ask about instructions."]]
  },
  elementary: {
    traffic: [["Could you show me another way downtown?", "Ask for a different route."], ["How long will the traffic take?", "Ask about a delay."], ["I may be late because of traffic.", "Explain a delay."]],
    restaurant: [["Could we have a table by the window?", "Make a seating request."], ["What dish do you recommend?", "Ask for a suggestion."], ["Could we have the check, please?", "Ask for the bill politely."]],
    park: [["Is anyone using this bench?", "Ask politely about a seat."], ["Would you like me to take a picture?", "Offer help."], ["How often do you come to this park?", "Start a conversation."]],
    museum: [["Could you point me toward the history exhibit?", "Ask for directions."], ["Are visitors allowed to take photographs?", "Ask about a museum rule."], ["Which exhibit do you like best?", "Ask for an opinion."]],
    stadium: [["Which section are our seats in?", "Ask about seating."], ["Who is winning right now?", "Ask about the result."], ["Would you like to get something to eat?", "Make a suggestion."]],
    "coffee shop": [["Could I get a medium coffee to go?", "Order a drink and specify takeaway."], ["Could you make that decaf?", "Request a different kind of coffee."], ["Do you have anything without dairy?", "Ask about ingredients."]],
    mall: [["Could I try this on in a different size?", "Ask about clothing."], ["Is this item on sale today?", "Ask about a discount."], ["What is your return policy?", "Ask about returning an item."]],
    bus: [["Which stop should I get off at?", "Ask where to leave the bus."], ["How much is a one-way ticket?", "Ask about the fare."], ["Could you tell me when we reach the museum?", "Ask for travel help."]],
    airport: [["Which line is for domestic flights?", "Ask about check-in."], ["Has the departure time changed?", "Ask about a delay."], ["Could you help me find my gate?", "Ask for directions."]],
    hotel: [["Is breakfast included in the room price?", "Ask about a hotel service."], ["Could I check out a little later?", "Make a polite request."], ["Could you call a taxi for me?", "Ask the front desk for help."]],
    pharmacy: [["Could you recommend something for a cough?", "Ask for medicine advice."], ["Are there any side effects?", "Ask about medicine safely."], ["Do I need a prescription for this?", "Ask about a pharmacy rule."]]
  },
  intermediate: {
    traffic: [["Would you mind suggesting an alternative route?", "Request a route when traffic is heavy."], ["Do you have any idea how long the delay will last?", "Ask for an estimate."], ["I am running behind because the highway is backed up.", "Explain a late arrival naturally."]],
    restaurant: [["Would it be possible to move to a quieter table?", "Make a detailed seating request."], ["Could you tell me which dishes are most popular?", "Ask for informed advice."], ["Could we split the check between two cards?", "Explain a payment request."]],
    park: [["Would you mind taking a photo of us?", "Make a polite offer or request."], ["Have you noticed how crowded the park is today?", "Start an observation-based conversation."], ["Is there a walking trail that you would recommend?", "Ask for a recommendation."]],
    museum: [["Could you explain the background of this exhibition?", "Ask for more information."], ["Is there a guided tour available this afternoon?", "Ask about an organized activity."], ["This collection gives a fascinating perspective on local history.", "Express an informed opinion."]],
    stadium: [["Do you know whether the game is likely to go into overtime?", "Discuss the game."], ["The atmosphere here is incredible tonight.", "Comment on the event."], ["Would you like to meet near the entrance after the match?", "Make a plan."]],
    "coffee shop": [["Could you recommend something that is not too sweet?", "Ask for a tailored recommendation."], ["Would it be possible to charge my laptop here?", "Make a practical request."], ["I will take an iced coffee with an extra shot.", "Place a specific order."]],
    mall: [["Do you happen to have this jacket in another color?", "Ask about stock naturally."], ["Would you be able to hold this item until this evening?", "Make a shopping request."], ["Could you explain the difference between these two models?", "Ask for product information."]],
    bus: [["Could you let me know when we are approaching the central station?", "Ask for a travel reminder."], ["Is there a faster route if I transfer downtown?", "Ask about alternatives."], ["I think I may have gotten on the wrong bus.", "Explain a travel problem."]],
    airport: [["Could you clarify whether this flight includes a checked bag?", "Ask about a travel service."], ["What are my options if the flight is delayed?", "Ask for solutions."], ["Would you mind pointing me toward the international departures area?", "Ask for precise directions."]],
    hotel: [["Would it be possible to change rooms because of the noise?", "Make a complaint politely."], ["Could you recommend a restaurant within walking distance?", "Ask the hotel for advice."], ["I would appreciate a wake-up call at seven.", "Request a hotel service."]],
    pharmacy: [["Could you explain how this medication should be taken?", "Ask for clear instructions."], ["I am currently taking another medication; is this safe?", "Share relevant health information."], ["Is there a generic alternative available?", "Ask about another product."]]
  },
  upper: {
    traffic: [["Given the congestion, would you recommend taking the expressway?", "Discuss a route strategically."], ["I am concerned that the delay may affect my appointment.", "Explain a consequence professionally."], ["Would you be willing to let me merge when there is an opening?", "Make a careful traffic request."]],
    restaurant: [["Could you accommodate a dietary restriction if we modify this dish?", "Discuss a special requirement."], ["Would you be able to recommend a wine that complements the main course?", "Request an expert recommendation."], ["There appears to be an error on the bill; could we review it?", "Resolve a payment problem politely."]],
    park: [["This park seems considerably quieter early in the morning.", "Make an observation with nuance."], ["Would you be interested in joining a walking group sometime?", "Extend a social invitation."], ["Could you tell me whether the trail is accessible in winter?", "Ask for detailed practical information."]],
    museum: [["How does this work reflect the social context in which it was created?", "Ask an analytical question."], ["I was struck by the contrast between the two collections.", "Express a developed opinion."], ["Would you recommend attending the curator’s lecture?", "Ask for a cultural recommendation."]],
    stadium: [["The team’s defensive strategy has changed considerably in the second half.", "Discuss the game analytically."], ["Do you think the coach’s decision will influence the outcome?", "Invite an opinion."], ["Let’s arrange a meeting point in case we get separated.", "Make a practical event plan."]],
    "coffee shop": [["Could you prepare this with an alternative milk and no added syrup?", "Place a detailed order."], ["Would it be possible to reserve a quiet table for a short meeting?", "Make a formal request."], ["I am looking for a coffee with a balanced, less acidic flavor profile.", "Describe a preference precisely."]],
    mall: [["Could you clarify the warranty terms before I make the purchase?", "Ask for important product information."], ["I would like to compare the cost after the current promotion is applied.", "Discuss price and discounts."], ["Would it be possible to exchange this item without the original packaging?", "Discuss a return exception."]],
    bus: [["Could you confirm whether this service connects with the airport line?", "Check a complex route."], ["In the event of a delay, where should passengers look for updates?", "Ask about contingency information."], ["I would appreciate it if you could let me know before the final stop.", "Make a formal request."]],
    airport: [["Could you clarify the procedure for rebooking a missed connection?", "Ask for help with a travel disruption."], ["Would you mind confirming whether my luggage will be transferred automatically?", "Check a detailed travel arrangement."], ["I am concerned that the gate change may not have been announced clearly.", "Raise a concern politely."]],
    hotel: [["Would it be possible to extend my stay by one night, subject to availability?", "Make a formal booking request."], ["Could you recommend an area that offers authentic local cuisine?", "Ask for a nuanced recommendation."], ["I would be grateful if someone could investigate the issue with the air conditioning.", "Report a problem politely."]],
    pharmacy: [["Could you advise me whether this treatment is appropriate given my allergy?", "Share a health concern and request advice."], ["Are there any interactions I should be aware of with this medication?", "Ask a detailed safety question."], ["Would you recommend consulting a doctor before using this product?", "Ask for responsible guidance."]]
  }
};

const idioms = [
  ["Break the ice", "Make people feel more comfortable when they first meet.", "I told a joke to break the ice."],
  ["Piece of cake", "Something very easy to do.", "The first exercise was a piece of cake."],
  ["Under the weather", "Feeling ill or not at your best.", "I’m a little under the weather today."],
  ["Hit the nail on the head", "Say or do exactly the right thing.", "You hit the nail on the head with that explanation."],
  ["Once in a blue moon", "Very rarely.", "We eat at that expensive restaurant once in a blue moon."],
  ["It’s up to you", "The decision is yours.", "We can go now or later—it’s up to you."]
];

const abbreviations = [
  ["ASAP", "as soon as possible", "Please send me the address ASAP."],
  ["FYI", "for your information", "FYI, the museum closes at six."],
  ["BTW", "by the way", "BTW, did you see the new exhibit?"],
  ["IDK", "I don’t know", "IDK what time the match starts."],
  ["IMO", "in my opinion", "IMO, this is the best seat in the stadium."],
  ["RSVP", "please respond", "Please RSVP before Friday."]
];

const smallTalk = [
  ["How’s your day going?", "A friendly, general opener."],
  ["Have you been here before?", "Useful when meeting someone in a new place."],
  ["What brings you here?", "Ask why someone is at an event or location."],
  ["That’s interesting—tell me more.", "Show interest and keep the conversation going."],
  ["How do you know the host?", "Useful at a party or social event."],
  ["It was nice talking with you.", "End a conversation politely."]
];

const speakLessons = {
  coffee: ["At a coffee shop", "Could I get a coffee with oat milk, please?", "A friendly way to order your drink."],
  "coffee-decaf": ["At a coffee shop", "Could I have a decaf latte, please?", "Order a latte made without caffeine."],
  "coffee-recommendation": ["At a coffee shop", "What would you recommend if I like sweet drinks?", "Ask the barista for a suggestion."],
  "coffee-here": ["At a coffee shop", "Can I get that for here, please?", "Let the barista know you plan to stay."],
  "coffee-thanks": ["At a coffee shop", "Thanks! I hope you have a great day.", "A cheerful way to finish your order."],
  directions: ["Getting around", "Could you tell me how to get to the library?", "A polite way to ask for help finding a place."],
  "travel-bus": ["Getting around", "Excuse me, where is the nearest bus stop?", "Find a nearby place to catch the bus."],
  "travel-train": ["Getting around", "Do you know which platform the train leaves from?", "Ask where to wait for your train."],
  "travel-walk": ["Getting around", "Is it close enough to walk there?", "Find out whether a destination is within walking distance."],
  "travel-lost": ["Getting around", "I think I'm lost. Could you help me find this address?", "Explain that you need help locating an address."],
  introduction: ["Meeting people", "Hi, I'm Alex. It's nice to meet you.", "A warm, simple introduction."],
  "people-name": ["Meeting people", "I'm sorry, I didn't catch your name.", "Politely ask someone to tell you their name again."],
  "people-from": ["Meeting people", "Have you lived here long?", "A friendly conversation starter."],
  "people-repeat": ["Meeting people", "Would you mind saying that one more time?", "Ask someone to repeat what they said."],
  "people-pleasure": ["Meeting people", "It was really nice talking with you.", "A warm way to say goodbye after a conversation."],
  restaurant: ["Eating out", "Could we get the check when you have a chance?", "A polite way to ask for the bill."],
  "food-menu": ["Eating out", "Could we take a few more minutes to look at the menu?", "Let your server know you need more time."],
  "food-vegetarian": ["Eating out", "Do you have any vegetarian options?", "Find out if the restaurant serves vegetarian dishes."],
  "food-water": ["Eating out", "Could I have a glass of water, please?", "A simple way to order water."],
  "food-recommendation": ["Eating out", "What is the most popular dish here?", "Ask what other diners enjoy."],
  weekend: ["Making plans", "Would you like to go for a walk this weekend?", "A relaxed way to invite someone for a walk."],
  "plans-movie": ["Making plans", "Would you like to see a movie with me sometime?", "A friendly invitation to see a movie."],
  "plans-time": ["Making plans", "What time works best for you?", "Let the other person choose a convenient time."],
  "plans-reschedule": ["Making plans", "Could we reschedule for another day?", "Ask to move plans to a different day."],
  "plans-accept": ["Making plans", "That sounds fun. I'd love to come!", "Enthusiastically accept an invitation."],
  "shopping-price": ["Shopping", "How much does this one cost?", "Ask the price of something you are looking at."],
  "shopping-size": ["Shopping", "Do you have this in a smaller size?", "Ask if an item is available in another size."],
  "shopping-fitting": ["Shopping", "Could I try this on?", "Ask permission to try on an item of clothing."],
  "shopping-color": ["Shopping", "Do you have this in a different color?", "Ask whether an item is available in another color."],
  "shopping-thanks": ["Shopping", "I'm just looking, thank you.", "A polite reply if you do not need help yet."],
  "help-charge": ["Everyday help", "Is there somewhere I can charge my phone?", "Find a place to charge your phone."],
  "help-wifi": ["Everyday help", "Could I get the Wi-Fi password, please?", "Politely ask to connect to the Wi-Fi."],
  "help-door": ["Everyday help", "Could you hold the door for a second?", "Ask someone nearby for a little help."],
  "help-wait": ["Everyday help", "Would you mind waiting here for a moment?", "Politely ask someone to wait briefly."],
  "help-find": ["Everyday help", "Excuse me, where is the restroom?", "Ask where to find the restroom."],
  "work-intro": ["Work and study", "Hi, I'm Jordan. I just joined the team.", "Introduce yourself to your new coworkers."],
  "work-repeat": ["Work and study", "Could you speak a little louder, please?", "Ask someone to speak up so you can hear them."],
  "work-question": ["Work and study", "I have a question about the first part of the lesson.", "Start a clear question in class or a meeting."],
  "work-feedback": ["Work and study", "Would you mind taking a look at my draft?", "Ask someone to review an early version of your work."],
  "work-thanks": ["Work and study", "Thanks for explaining that. It really helped.", "Show appreciation after getting help."]
};

const levelResources = {
  beginner: {
    phrasal: [
      ["wake up", "stop sleeping", "I wake up at seven."],
      ["sit down", "take a seat", "Please sit down here."],
      ["come in", "enter", "Come in and have a seat."],
      ["go out", "leave home for fun", "We go out on Fridays."]
    ],
    idioms: [
      ["Good luck!", "A friendly wish for success.", "Good luck on your test!"],
      ["Take it easy", "Relax; do not worry.", "Take it easy after a long day."],
      ["No problem", "It is okay; there is no difficulty.", "No problem, I can help."],
      ["See you soon", "A friendly goodbye.", "Thanks for visiting. See you soon!"]
    ],
    abbreviations: [
      ["OK", "okay", "OK, I understand."],
      ["TV", "television", "We watched TV last night."],
      ["ID", "identification", "May I see your ID?"],
      ["AM", "before noon", "The bus leaves at 9 AM."]
    ],
    speak: [
      ["beginner-coffee", "Coffee shop", "A small coffee, please.", "Order a simple drink."],
      ["beginner-bus", "Bus", "Does this bus go downtown?", "Check a simple route."],
      ["beginner-restaurant", "Restaurant", "A table for two, please.", "Ask for a table."],
      ["beginner-intro", "Meeting people", "Hi, I’m Sam. Nice to meet you.", "Introduce yourself."]
    ]
  },
  elementary: {
    phrasal: [
      ["look for", "try to find", "I am looking for the fitting room."],
      ["pick up", "collect or lift something", "I will pick up the tickets later."],
      ["try on", "put on clothes to see if they fit", "Can I try on this jacket?"],
      ["get on", "enter a bus, train, or plane", "We get on the bus at this stop."]
    ],
    idioms: [
      ["A piece of cake", "Very easy.", "The first exercise was a piece of cake."],
      ["Break a leg", "Good luck, especially before a performance.", "Break a leg at the concert!"],
      ["In a hurry", "Moving or acting quickly because there is little time.", "I am in a hurry this morning."],
      ["On time", "At the planned time.", "The train arrived on time."]
    ],
    abbreviations: [
      ["ASAP", "as soon as possible", "Please reply ASAP."],
      ["FYI", "for your information", "FYI, the shop closes at six."],
      ["ETA", "estimated time of arrival", "What is the bus’s ETA?"],
      ["DIY", "do it yourself", "This is a simple DIY project."]
    ],
    speak: [
      ["elementary-coffee", "Coffee shop", "Could I get a medium coffee to go?", "Order a drink and specify takeaway."],
      ["elementary-mall", "Mall", "Do you have this in another size?", "Ask about clothing."],
      ["elementary-hotel", "Hotel", "Is breakfast included in the room price?", "Ask about a hotel service."],
      ["elementary-small-talk", "Meeting people", "Have you been here before?", "Start a friendly conversation."]
    ]
  },
  intermediate: {
    phrasal: [
      ["figure out", "understand or solve", "We need to figure out another route."],
      ["look into", "investigate", "The manager will look into the complaint."],
      ["cut down on", "reduce", "I am trying to cut down on sugar."],
      ["run out of", "have none left", "We ran out of coffee this morning."]
    ],
    idioms: [
      ["Break the ice", "Make people feel comfortable when they first meet.", "A question helped break the ice."],
      ["Under the weather", "Feeling slightly ill.", "I am under the weather today."],
      ["Hit the nail on the head", "Say exactly the right thing.", "You hit the nail on the head."],
      ["Go the extra mile", "Make an additional effort.", "She always goes the extra mile for customers."]
    ],
    abbreviations: [
      ["BTW", "by the way", "BTW, the meeting moved to Friday."],
      ["IMO", "in my opinion", "IMO, this route is faster."],
      ["RSVP", "please respond", "Please RSVP by Monday."],
      ["TBA", "to be announced", "The speaker is TBA."]
    ],
    speak: [
      ["intermediate-coffee", "Coffee shop", "Could you recommend something that is not too sweet?", "Ask for a tailored recommendation."],
      ["intermediate-bus", "Bus", "Is there a faster route if I transfer downtown?", "Ask about alternatives."],
      ["intermediate-museum", "Museum", "Could you explain the background of this exhibition?", "Ask for more information."],
      ["intermediate-work", "Work and study", "Would you mind taking a look at my draft?", "Ask for feedback."]
    ]
  },
  upper: {
    phrasal: [
      ["brush up on", "improve a skill you have not used recently", "I need to brush up on my French."],
      ["come across", "find or meet unexpectedly", "I came across an interesting article."],
      ["carry out", "perform or complete", "The team carried out a detailed survey."],
      ["take into account", "consider something", "We should take the cost into account."]
    ],
    idioms: [
      ["A double-edged sword", "Something with both advantages and disadvantages.", "Technology can be a double-edged sword."],
      ["The tip of the iceberg", "A small visible part of a larger problem.", "This complaint is only the tip of the iceberg."],
      ["Read between the lines", "Look for an implied meaning.", "You need to read between the lines."],
      ["At the end of the day", "When everything is considered.", "At the end of the day, trust matters."]
    ],
    abbreviations: [
      ["N.B.", "please note", "N.B. The deadline has changed."],
      ["P.S.", "postscript", "P.S. Please call me tomorrow."],
      ["KPI", "key performance indicator", "The team reviewed its KPIs."],
      ["EOD", "end of day", "Please send the report by EOD."]
    ],
    speak: [
      ["upper-coffee", "Coffee shop", "Would it be possible to reserve a quiet table for a short meeting?", "Make a formal request."],
      ["upper-airport", "Airport", "Could you clarify the procedure for rebooking a missed connection?", "Ask for help with a disruption."],
      ["upper-restaurant", "Restaurant", "There appears to be an error on the bill; could we review it?", "Resolve a payment problem politely."],
      ["upper-museum", "Museum", "How does this work reflect the social context in which it was created?", "Ask an analytical question."]
    ]
  }
};

const extraPhrasalVerbs = {
  beginner: [
    ["stand up", "rise to your feet", "Please stand up."], ["come back", "return", "Come back soon."],
    ["go back", "return to a place", "I go back home at five."], ["turn on", "start a machine or light", "Turn on the light."],
    ["turn off", "stop a machine or light", "Turn off the TV."], ["put on", "dress in clothing", "Put on your coat."],
    ["take off", "remove clothing", "Take off your shoes."], ["look at", "watch or examine", "Look at this picture."],
    ["listen to", "pay attention to sound", "Listen to the teacher."], ["wait for", "stay until someone or something comes", "Wait for me."],
    ["ask for", "request something", "Ask for help."], ["help out", "help someone", "Can you help me out?"],
    ["clean up", "make a place clean", "Clean up your room."], ["hurry up", "move faster", "Hurry up or we will be late."],
    ["slow down", "move less quickly", "Slow down near the school."], ["write down", "record in writing", "Write down the address."],
    ["read over", "read quickly to check", "Read over your answer."], ["fill in", "complete a form", "Fill in your name."],
    ["log in", "enter a computer account", "Log in to the website."], ["log out", "leave a computer account", "Log out after class."],
    ["call back", "return a phone call", "I will call you back."], ["hang up", "end a phone call", "Please do not hang up."],
    ["speak up", "talk more loudly", "Please speak up."], ["calm down", "become calmer", "Take a breath and calm down."],
    ["cheer up", "become happier", "Cheer up; the weekend is near."], ["grow up", "become an adult", "I grew up in a small town."],
    ["look out", "be careful", "Look out! The car is coming."], ["move in", "start living in a place", "They moved in last week."],
    ["move out", "leave a home", "We move out on Friday."], ["come over", "visit someone at home", "Come over after dinner."],
    ["drop off", "take someone or something somewhere", "I will drop off the parcel."], ["get off", "leave a bus or train", "Get off at the next stop."],
    ["get up", "leave your bed", "I get up early."], ["lie down", "rest horizontally", "Lie down for a few minutes."],
    ["try out", "test something", "Try out this new game."], ["give back", "return something", "Please give back my pen."],
    ["give away", "give something for free", "They give away old books."], ["put away", "return something to its place", "Put away your toys."],
    ["throw away", "put in the rubbish", "Throw away the empty bottle."], ["wash up", "wash dishes or yourself", "I wash up after dinner."],
    ["eat out", "eat in a restaurant", "We eat out on Saturday."], ["stay in", "remain at home", "Let us stay in tonight."],
    ["check in", "arrive and register", "We check in at two."], ["check out", "leave a hotel", "We check out tomorrow."],
    ["show up", "arrive or appear", "He showed up late."], ["join in", "participate", "Come and join in."]
  ],
  elementary: [
    ["look after", "take care of", "She looks after her younger brother."], ["look forward to", "feel excited about a future event", "I look forward to the holiday."],
    ["get along with", "have a good relationship", "I get along with my coworkers."], ["get back", "return", "What time did you get back?"],
    ["get through", "finish or survive something", "We got through the difficult week."], ["find out", "discover information", "I need to find out the opening time."],
    ["fill out", "complete a form", "Please fill out this application."], ["hand in", "give work to a teacher", "Hand in your homework tomorrow."],
    ["hand out", "give to each person", "The teacher handed out the worksheets."], ["put off", "delay", "Do not put off your revision."],
    ["take back", "return something", "I took the shoes back to the shop."], ["take up", "begin a hobby or activity", "She took up painting."],
    ["take over", "assume control", "A new manager took over."], ["turn up", "increase volume or arrive", "Turn up the music."],
    ["turn down", "decrease volume or reject", "Please turn down the radio."], ["turn around", "change direction", "Turn around at the corner."],
    ["break down", "stop working", "Our car broke down."], ["break up", "end a relationship", "They broke up last month."],
    ["bring up", "mention a topic", "She brought up an important point."], ["bring back", "return something", "This song brings back memories."],
    ["carry on", "continue", "Please carry on with your work."], ["carry out", "complete a task", "They carried out the plan."],
    ["come across", "find by chance", "I came across an old photo."], ["come up with", "think of an idea", "He came up with a solution."],
    ["cut down on", "reduce", "I am cutting down on coffee."], ["cut off", "stop a supply or connection", "The storm cut off the village."],
    ["deal with", "handle a problem", "We need to deal with this complaint."], ["end up", "finally be in a place or situation", "We ended up taking the bus."],
    ["fall behind", "fail to stay up to date", "I fell behind in my reading."], ["fall over", "fall to the ground", "He fell over on the ice."],
    ["get rid of", "remove or discard", "We need to get rid of these boxes."], ["give up", "stop trying", "Do not give up."],
    ["go ahead", "start or continue", "Go ahead and ask your question."], ["go over", "review or examine", "Let us go over the notes."],
    ["hold on", "wait", "Hold on a moment."], ["keep up", "continue at the same speed", "Keep up with the class."],
    ["leave out", "omit", "Do not leave out the date."], ["make up", "invent or reconcile", "They made up after the argument."],
    ["pass away", "die", "Her grandfather passed away peacefully."], ["pick out", "choose", "Pick out a present."],
    ["point out", "draw attention to", "He pointed out a mistake."], ["put up with", "tolerate", "I cannot put up with the noise."],
    ["run into", "meet unexpectedly", "I ran into an old friend."], ["set up", "arrange or prepare", "We set up the equipment."],
    ["sort out", "solve or organize", "We will sort out the problem."], ["work out", "solve or exercise", "I worked out the answer."]
  ],
  intermediate: [
    ["back up", "support or make a copy", "Back up your files regularly."], ["blow up", "explode or become angry", "The argument blew up quickly."],
    ["break into", "enter by force", "Someone broke into the office."], ["bring about", "cause to happen", "The reform brought about change."],
    ["call off", "cancel", "They called off the match."], ["catch up on", "do something missed", "I need to catch up on my reading."],
    ["check up on", "make sure someone is well", "I called to check up on her."], ["come down with", "become ill", "He came down with flu."],
    ["come up against", "face a difficulty", "We came up against strong opposition."], ["count on", "rely on", "You can count on me."],
    ["crack down on", "act strictly against", "The city cracked down on illegal parking."], ["do away with", "abolish", "They did away with the old rule."],
    ["draw up", "prepare a formal document", "The lawyers drew up a contract."], ["drop out", "leave a course", "He dropped out of university."],
    ["fall apart", "break into pieces or fail", "The old plan fell apart."], ["get away with", "avoid punishment", "He got away with the mistake."],
    ["get by", "manage with difficulty", "We can get by on a small budget."], ["get down to", "start serious work", "Let us get down to business."],
    ["give in", "stop resisting", "They finally gave in."], ["go through", "experience or examine", "We went through the documents."],
    ["hold back", "restrain", "She held back her opinion."], ["iron out", "resolve difficulties", "We ironed out the final details."],
    ["keep on", "continue", "He kept on working."], ["lay off", "dismiss from a job", "The company laid off workers."],
    ["live up to", "meet expectations", "The film lived up to its reviews."], ["look down on", "consider inferior", "Never look down on others."],
    ["look up to", "admire", "Many students look up to their teacher."], ["make up for", "compensate for", "Extra practice made up for lost time."],
    ["narrow down", "reduce choices", "We narrowed down the options."], ["opt for", "choose", "She opted for a cheaper plan."],
    ["phase out", "remove gradually", "The factory phased out old equipment."], ["play down", "make seem less important", "The report played down the risk."],
    ["pull through", "recover from difficulty", "The patient pulled through."], ["put forward", "suggest", "He put forward a useful proposal."],
    ["rule out", "exclude as impossible", "We cannot rule out that possibility."], ["settle down", "become calm or stable", "The discussion settled down."],
    ["stand for", "represent or mean", "What does this abbreviation stand for?"], ["step down", "resign from a position", "The director stepped down."],
    ["take on", "accept work or responsibility", "She took on a new role."], ["take up on", "accept an offer", "I will take you up on that offer."],
    ["think over", "consider carefully", "Think over the proposal."], ["track down", "find after searching", "We tracked down the missing file."],
    ["turn out", "prove to be", "The event turned out well."], ["use up", "consume all", "We used up the supplies."],
    ["wind up", "finish or end", "The meeting wound up at six."], ["zero in on", "focus closely", "The study zeros in on inequality."]
  ],
  upper: [
    ["account for", "explain or make up a proportion", "These factors account for the difference."], ["act on", "take action because of", "The committee acted on the recommendation."],
    ["allow for", "consider or include", "The budget allows for unexpected costs."], ["boil down to", "be essentially about", "The debate boils down to trust."],
    ["branch out", "develop new activities", "The company branched out into education."], ["build on", "develop further", "The paper builds on earlier research."],
    ["call for", "require or demand", "The situation calls for patience."], ["center on", "focus on", "The analysis centers on access."],
    ["come down to", "be reduced to", "The decision comes down to evidence."], ["comply with", "act according to a rule", "All suppliers must comply with the policy."],
    ["conform to", "follow a standard", "The design conforms to safety standards."], ["consist of", "be composed of", "The sample consists of three groups."],
    ["delve into", "research deeply", "The chapter delves into social change."], ["differentiate between", "show a difference", "The model differentiates between causes."],
    ["draw on", "use as a source", "The author draws on historical records."], ["embark on", "start a significant activity", "They embarked on a long-term study."],
    ["factor in", "include in calculations", "We must factor in inflation."], ["follow up on", "investigate further", "The team followed up on the finding."],
    ["give rise to", "cause", "The policy gave rise to new concerns."], ["hinge on", "depend completely on", "The outcome hinges on funding."],
    ["impose on", "force an obligation", "The rule imposes costs on small firms."], ["infer from", "reach a conclusion from evidence", "We can infer from the data that demand rose."],
    ["invoke", "refer to a rule or authority", "The court invoked constitutional principles."], ["lead to", "result in", "Poor planning can lead to delays."],
    ["map out", "plan in detail", "The researchers mapped out the stages."], ["measure up to", "be good enough", "The results measured up to expectations."],
    ["open up", "create access or opportunity", "The program opened up new possibilities."], ["originate from", "come from", "The concept originated from fieldwork."],
    ["pass on", "transfer or communicate", "Please pass on the message."], ["pin down", "define precisely", "The study pins down the main variable."],
    ["prop up", "support artificially", "The subsidy propped up the industry."], ["rest on", "depend on", "The argument rests on two assumptions."],
    ["stem from", "originate in", "The disagreement stems from different priorities."], ["subscribe to", "agree with an idea", "The authors subscribe to this theory."],
    ["sum up", "state the main points", "The conclusion sums up the evidence."], ["take over from", "replace someone", "A new chair took over from her."],
    ["tie in with", "connect with", "The results tie in with previous research."], ["touch on", "mention briefly", "The lecture touched on ethics."],
    ["translate into", "result in a practical form", "The findings translate into better policy."], ["turn to", "begin to use or consult", "The team turned to experts."],
    ["weigh up", "consider carefully", "We weighed up the risks."], ["wind down", "gradually end", "The project is winding down."],
    ["work toward", "make progress toward", "They are working toward equality."], ["write off", "dismiss as worthless or cancel a debt", "Do not write off the proposal yet."],
    ["yield to", "give way to", "The old method yielded to a better approach."], ["zero in on", "focus precisely on", "The paper zeros in on one mechanism."]
  ]
};

Object.entries(extraPhrasalVerbs).forEach(([level, items]) => {
  levelResources[level].phrasal = [...levelResources[level].phrasal, ...items];
});

const academicWords = {
  beginner: [
    ["answer", "a response to a question", "Write a clear answer."], ["example", "something that shows an idea", "Give one example."],
    ["fact", "information known to be true", "Check the fact."], ["idea", "a thought or plan", "Share your idea."],
    ["method", "a way of doing something", "This method is simple."], ["reason", "a cause or explanation", "Give a reason."],
    ["result", "what happens after an action", "The result was positive."], ["topic", "the subject being discussed", "Today’s topic is travel."],
    ["question", "something asked to get information", "Ask a question."], ["explain", "make an idea clear", "Please explain the answer."]
  ],
  elementary: [
    ["advantage", "a helpful benefit", "The main advantage is speed."], ["approach", "a way of dealing with something", "We need a new approach."],
    ["compare", "examine similarities and differences", "Compare the two results."], ["conclude", "decide after considering evidence", "We can conclude that it worked."],
    ["context", "the situation around an idea", "The word changes meaning in context."], ["define", "state the exact meaning", "Define the key term."],
    ["evidence", "information supporting a claim", "The evidence is strong."], ["factor", "something that influences a result", "Cost is an important factor."],
    ["indicate", "show or suggest", "The figures indicate growth."], ["principle", "a basic rule or belief", "The principle is easy to understand."]
  ],
  intermediate: [
    ["analyse", "examine in detail", "Analyse the survey responses."], ["assess", "judge the quality or importance", "Assess the risks first."],
    ["assume", "accept as true without proof", "Do not assume the cause."], ["concept", "an abstract idea", "The concept is difficult."],
    ["contribute", "help to cause or produce", "Several factors contribute to success."], ["derive", "obtain from a source", "The term is derived from Latin."],
    ["establish", "prove or set up firmly", "The study establishes a link."], ["evaluate", "judge using evidence", "Evaluate the proposed solution."],
    ["hypothesis", "a testable explanation", "The results support the hypothesis."], ["significant", "important or meaningful", "There was a significant change."]
  ],
  upper: [
    ["ambiguous", "having more than one possible meaning", "The wording is ambiguous."], ["coherent", "logical and well connected", "The argument is coherent."],
    ["comprehensive", "including all or nearly all details", "The review is comprehensive."], ["contemporary", "belonging to the present time", "The article discusses contemporary issues."],
    ["empirical", "based on observation or experiment", "The claim needs empirical support."], ["implicit", "suggested but not directly stated", "The assumption is implicit."],
    ["inherent", "existing as a natural part", "The method has inherent limits."], ["methodology", "a system of methods used in research", "The methodology is clearly described."],
    ["paradigm", "a model or pattern of thought", "The discovery changed the paradigm."], ["subsequent", "following in time or order", "Subsequent studies confirmed the result."]
  ]
};

function currentLevelResources(type) {
  return levelResources[$("#levelSelect").value]?.[type] || [];
}

const irregularVerbForms = {
  be: ["is", "was", "been", "being"],
  become: ["becomes", "became", "become", "becoming"],
  begin: ["begins", "began", "begun", "beginning"],
  break: ["breaks", "broke", "broken", "breaking"],
  bring: ["brings", "brought", "brought", "bringing"],
  build: ["builds", "built", "built", "building"],
  buy: ["buys", "bought", "bought", "buying"],
  catch: ["catches", "caught", "caught", "catching"],
  choose: ["chooses", "chose", "chosen", "choosing"],
  come: ["comes", "came", "come", "coming"],
  cost: ["costs", "cost", "cost", "costing"],
  cut: ["cuts", "cut", "cut", "cutting"],
  do: ["does", "did", "done", "doing"],
  drink: ["drinks", "drank", "drunk", "drinking"],
  drive: ["drives", "drove", "driven", "driving"],
  eat: ["eats", "ate", "eaten", "eating"],
  feel: ["feels", "felt", "felt", "feeling"],
  find: ["finds", "found", "found", "finding"],
  fly: ["flies", "flew", "flown", "flying"],
  forget: ["forgets", "forgot", "forgotten", "forgetting"],
  get: ["gets", "got", "gotten", "getting"],
  give: ["gives", "gave", "given", "giving"],
  go: ["goes", "went", "gone", "going"],
  grow: ["grows", "grew", "grown", "growing"],
  have: ["has", "had", "had", "having"],
  hear: ["hears", "heard", "heard", "hearing"],
  keep: ["keeps", "kept", "kept", "keeping"],
  know: ["knows", "knew", "known", "knowing"],
  leave: ["leaves", "left", "left", "leaving"],
  lose: ["loses", "lost", "lost", "losing"],
  make: ["makes", "made", "made", "making"],
  mean: ["means", "meant", "meant", "meaning"],
  meet: ["meets", "met", "met", "meeting"],
  pay: ["pays", "paid", "paid", "paying"],
  put: ["puts", "put", "put", "putting"],
  read: ["reads", "read", "read", "reading"],
  ride: ["rides", "rode", "ridden", "riding"],
  run: ["runs", "ran", "run", "running"],
  say: ["says", "said", "said", "saying"],
  see: ["sees", "saw", "seen", "seeing"],
  sell: ["sells", "sold", "sold", "selling"],
  send: ["sends", "sent", "sent", "sending"],
  sing: ["sings", "sang", "sung", "singing"],
  sit: ["sits", "sat", "sat", "sitting"],
  sleep: ["sleeps", "slept", "slept", "sleeping"],
  speak: ["speaks", "spoke", "spoken", "speaking"],
  spend: ["spends", "spent", "spent", "spending"],
  stand: ["stands", "stood", "stood", "standing"],
  swim: ["swims", "swam", "swum", "swimming"],
  take: ["takes", "took", "taken", "taking"],
  teach: ["teaches", "taught", "taught", "teaching"],
  tell: ["tells", "told", "told", "telling"],
  think: ["thinks", "thought", "thought", "thinking"],
  understand: ["understands", "understood", "understood", "understanding"],
  wear: ["wears", "wore", "worn", "wearing"],
  win: ["wins", "won", "won", "winning"],
  write: ["writes", "wrote", "written", "writing"]
};

function regularVerbForms(base) {
  const third = /(s|sh|ch|x|z|o)$/.test(base) ? `${base}es` : /[^aeiou]y$/.test(base) ? `${base.slice(0, -1)}ies` : `${base}s`;
  const shortConsonantVowelConsonant = base.length <= 4
    && /^[^aeiou][aeiou][^aeiou]$/.test(base)
    && !/[wxyz]$/.test(base);
  const pastBase = shortConsonantVowelConsonant ? `${base}${base.slice(-1)}` : base;
  const past = /[^aeiou]y$/.test(base)
    ? `${base.slice(0, -1)}ied`
    : /e$/.test(base) ? `${base}d` : `${pastBase}ed`;
  const ing = /ie$/.test(base)
    ? `${base.slice(0, -2)}ying`
    : /e$/.test(base) && !/(ee|ye|oe)$/.test(base) ? `${base.slice(0, -1)}ing`
      : shortConsonantVowelConsonant ? `${base}${base.slice(-1)}ing` : `${base}ing`;
  return [third, past, past, ing];
}

function getVerbForms(input) {
  const base = input.trim().toLocaleLowerCase();
  return { base, forms: irregularVerbForms[base] || regularVerbForms(base), irregular: Boolean(irregularVerbForms[base]) };
}

function conjugatorExamples(forms) {
  const { base } = forms;
  if (base === "be") {
    return [
      ["Present simple", "I am ready for class."],
      ["Present continuous", "She is being very careful today."],
      ["Present perfect", "They have been helpful."],
      ["Past simple", "We were tired yesterday."],
      ["Past continuous", "He was being polite."],
      ["Past perfect", "I had been there before."],
      ["Future with will", "You will be ready soon."],
      ["Future going to", "We are going to be late."],
      ["Future perfect", "By noon, she will have been here for two hours."],
      ["Conditional", "I would be happier with more practice."]
    ];
  }
  const [, past, participle, ing] = forms.forms;
  return [
    ["Present simple", `I ${base} regularly.`],
    ["Present continuous", `I am ${ing} right now.`],
    ["Present perfect", `I have ${participle} before.`],
    ["Past simple", `I ${past} yesterday.`],
    ["Past continuous", `I was ${ing} at 7 p.m.`],
    ["Past perfect", `I had ${participle} before the lesson started.`],
    ["Future with will", `I will ${base} tomorrow.`],
    ["Future going to", `I am going to ${base} this evening.`],
    ["Future perfect", `By Friday, I will have ${participle} for five days.`],
    ["Conditional", `I would ${base} more if I had time.`]
  ];
}

function escapeConjugatorHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[character]));
}

function renderConjugator() {
  const panel = $("#resourcePanel");
  panel.innerHTML = `
    <div class="conjugator">
      <span class="eyebrow">Grammar tool · offline</span>
      <h2>Conjugate an English verb</h2>
      <p class="resource-intro">Enter a base-form verb to see its key forms and ten useful tense examples.</p>
      <form class="conjugator-form" id="conjugatorForm" novalidate>
        <label for="conjugatorInput">English verb</label>
        <div class="conjugator-input-row">
          <input id="conjugatorInput" type="text" value="go" autocomplete="off" placeholder="e.g. go, study, write" aria-describedby="conjugatorError">
          <button class="primary-button" type="submit">Conjugate</button>
        </div>
        <p class="conjugator-error" id="conjugatorError" role="alert"></p>
      </form>
      <div id="conjugatorResults" class="conjugator-results" aria-live="polite"></div>
    </div>
  `;
  const form = panel.querySelector("#conjugatorForm");
  const input = panel.querySelector("#conjugatorInput");
  const error = panel.querySelector("#conjugatorError");
  const results = panel.querySelector("#conjugatorResults");

  const showResults = () => {
    const value = input.value.trim().toLocaleLowerCase();
    if (!value) {
      error.textContent = "Enter a verb in its base form.";
      results.innerHTML = "";
      input.setAttribute("aria-invalid", "true");
      return;
    }
    if (!/^[a-z]+$/.test(value)) {
      error.textContent = "Use one English verb with letters only, such as “study” or “write.”";
      results.innerHTML = "";
      input.setAttribute("aria-invalid", "true");
      return;
    }
    error.textContent = "";
    input.removeAttribute("aria-invalid");
    const conjugated = getVerbForms(value);
    const [third, past, participle, ing] = conjugated.forms;
    const forms = [
      ["Base form", conjugated.base],
      ["Third person", third],
      ["Past", past],
      ["Past participle", participle],
      ["-ing form", ing]
    ];
    const tenseExamples = conjugatorExamples(conjugated);
    results.innerHTML = `
      <div class="conjugator-summary">
        <div><span class="resource-label">Verb</span><strong>${escapeConjugatorHtml(conjugated.base)}</strong></div>
        <span class="conjugator-badge">${conjugated.irregular ? "Irregular verb" : "Regular rule"}</span>
      </div>
      <div class="conjugator-form-grid">${forms.map(([label, formValue]) => `<div class="conjugator-form-card"><span>${label}</span><strong>${escapeConjugatorHtml(formValue)}</strong><button class="phrase-speak conjugator-speak" type="button" data-speak="${escapeConjugatorHtml(formValue)}">▶ Listen</button></div>`).join("")}</div>
      <div class="tense-heading"><h3>Major tense examples</h3><span>Listen and notice the verb pattern</span></div>
      <div class="tense-grid">${tenseExamples.map(([label, example]) => `<article class="tense-card"><span>${label}</span><p>${escapeConjugatorHtml(example)}</p><button class="phrase-speak conjugator-speak" type="button" data-speak="${escapeConjugatorHtml(example)}">▶ Listen</button></article>`).join("")}</div>
      <div class="conjugator-practice">
        <strong>Quick practice</strong>
        <span>What is the past participle of <b>${escapeConjugatorHtml(conjugated.base)}</b>?</span>
        <div class="conjugator-practice-row"><input id="conjugatorPracticeInput" type="text" placeholder="Type the form" autocomplete="off"><button class="secondary-button" id="conjugatorPracticeCheck" type="button">Check</button></div>
        <p id="conjugatorPracticeFeedback" class="feedback" role="status"></p>
      </div>
    `;
    results.querySelectorAll(".conjugator-speak").forEach((button) => {
      button.addEventListener("click", () => speakText(button.dataset.speak, button));
    });
    const practiceInput = results.querySelector("#conjugatorPracticeInput");
    const practiceFeedback = results.querySelector("#conjugatorPracticeFeedback");
    results.querySelector("#conjugatorPracticeCheck").addEventListener("click", () => {
      const answer = practiceInput.value.trim().toLocaleLowerCase();
      if (!answer) {
        practiceFeedback.textContent = "Type an answer before checking.";
        practiceFeedback.style.color = "var(--orange)";
      } else if (answer === participle) {
        recordActivity(true);
        practiceFeedback.textContent = "Correct! That is the past participle.";
        practiceFeedback.style.color = "var(--green)";
      } else {
        recordActivity(false);
        practiceFeedback.textContent = `Not quite. The past participle is “${participle}.”`;
        practiceFeedback.style.color = "var(--orange)";
      }
    });
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showResults();
  });
  showResults();
}

const placementQuestions = [
  { level: "beginner", prompt: "Choose the correct sentence.", choices: ["She go to school.", "She goes to school.", "She going school."], answer: 1 },
  { level: "beginner", prompt: "What does “hungry” mean?", choices: ["Wanting food", "Feeling cold", "Being late"], answer: 0 },
  { level: "elementary", prompt: "Complete: I have lived here ___ 2022.", choices: ["for", "since", "during"], answer: 1 },
  { level: "elementary", prompt: "Which word is closest to “begin”?", choices: ["finish", "start", "forget"], answer: 1 },
  { level: "intermediate", prompt: "Complete: If I had more time, I ___ another language.", choices: ["learn", "will learn", "would learn"], answer: 2 },
  { level: "intermediate", prompt: "Choose the natural collocation.", choices: ["make a decision", "do a decision", "take a decisioning"], answer: 0 },
  { level: "upper", prompt: "“Although” introduces a:", choices: ["contrast", "cause", "definition"], answer: 0 },
  { level: "upper", prompt: "Choose the most precise option: The evidence was ___ enough to support the claim.", choices: ["sufficient", "many", "quickly"], answer: 0 }
];

function renderPlacementTest() {
  const panel = $("#resourcePanel");
  panel.innerHTML = `
    <div class="placement">
      <span class="eyebrow">Personalized starting point</span>
      <h2>Find your recommended level</h2>
      <p class="resource-intro">Answer eight quick questions. Your result is saved only in this browser and helps LLapp choose a suitable level.</p>
      <div class="placement-progress"><span id="placementProgress"></span></div>
      <div id="placementQuestion" class="placement-question"></div>
      <div class="placement-actions">
        <button class="secondary-button" id="placementBack" type="button">Back</button>
        <button class="primary-button" id="placementNext" type="button">Start test</button>
      </div>
      <div id="placementResult" class="placement-result" hidden></div>
    </div>
  `;
  const questionElement = panel.querySelector("#placementQuestion");
  const nextButton = panel.querySelector("#placementNext");
  const backButton = panel.querySelector("#placementBack");
  const progress = panel.querySelector("#placementProgress");
  const result = panel.querySelector("#placementResult");
  let index = -1;
  const answers = [];

  const renderQuestion = () => {
    if (index < 0) {
      questionElement.innerHTML = `<div class="placement-welcome"><strong>Ready?</strong><span>You will see grammar and vocabulary from beginner to upper-intermediate levels.</span></div>`;
      progress.style.width = "0%";
      nextButton.textContent = "Start test";
      backButton.disabled = true;
      return;
    }
    const question = placementQuestions[index];
    questionElement.innerHTML = `
      <span class="resource-label">Question ${index + 1} of ${placementQuestions.length}</span>
      <h3>${question.prompt}</h3>
      <div class="placement-choices">${question.choices.map((choice, choiceIndex) => `<button class="choice-button ${answers[index] === choiceIndex ? "selected" : ""}" type="button" data-choice="${choiceIndex}">${choice}</button>`).join("")}</div>
    `;
    questionElement.querySelectorAll("[data-choice]").forEach((button) => {
      button.addEventListener("click", () => {
        answers[index] = Number(button.dataset.choice);
        renderQuestion();
      });
    });
    progress.style.width = `${((index + 1) / placementQuestions.length) * 100}%`;
    nextButton.textContent = index === placementQuestions.length - 1 ? "See my level" : "Next question";
    backButton.disabled = false;
  };

  const finish = () => {
    const score = answers.reduce((total, answer, questionIndex) => total + (answer === placementQuestions[questionIndex].answer ? 1 : 0), 0);
    const level = score <= 2 ? "beginner" : score <= 4 ? "elementary" : score <= 6 ? "intermediate" : "upper";
    const labels = { beginner: "Beginner · A1", elementary: "Elementary · A2", intermediate: "Intermediate · B1", upper: "Upper-intermediate · B2" };
    localStorage.setItem("llapp-recommended-level", level);
    result.hidden = false;
    result.innerHTML = `<strong>Your recommended level: ${labels[level]}</strong><span>You scored ${score} out of ${placementQuestions.length}. LLapp has selected this level in your learning library.</span><button class="primary-button" id="usePlacementLevel" type="button">Start learning at this level</button>`;
    result.querySelector("#usePlacementLevel").addEventListener("click", () => {
      $("#levelSelect").value = level;
      renderWordOptions();
      renderLesson();
      document.querySelector('[data-content="vocabulary"]').click();
    });
    questionElement.innerHTML = "";
    nextButton.hidden = true;
    backButton.hidden = true;
  };

  nextButton.addEventListener("click", () => {
    if (index >= 0 && answers[index] === undefined) {
      questionElement.insertAdjacentHTML("beforeend", `<p class="placement-error">Choose an answer before continuing.</p>`);
      return;
    }
    if (index === placementQuestions.length - 1) {
      finish();
      return;
    }
    index += 1;
    renderQuestion();
  });
  backButton.addEventListener("click", () => {
    if (index > 0) {
      index -= 1;
      renderQuestion();
    }
  });
  renderQuestion();
}

let currentIndex = 0;
let lesson = lessons[currentIndex];

const $ = (selector) => document.querySelector(selector);

function renderLesson() {
  $("#word").textContent = lesson.word;
  $("#pronunciation").textContent = lesson.pronunciation === `/${lesson.word}/`
    ? "Audio pronunciation available"
    : lesson.pronunciation;
  $("#partOfSpeech").textContent = lesson.partOfSpeech;
  $("#definitionText").textContent = lesson.definition;
  renderWordVisual();
  updateTranslation();
  const filteredLessons = lessons.filter((item) => item.level === $("#levelSelect").value);
  const currentLevelIndex = filteredLessons.indexOf(lesson);
  $("#nextWord").textContent = filteredLessons[(currentLevelIndex + 1) % filteredLessons.length].word;
  $("#question").textContent = lesson.question;
  $("#answerInput").value = "";
  $("#answerFeedback").textContent = "";
  $("#pronunciationFeedback").textContent = "";
  $("#saveButton").classList.remove("saved");
  $("#saveButton").textContent = "♡";
  $("#sentenceCount").textContent = `${lesson.sentences.length} examples`;
  updateMasteryUI();
  updateReviewSummary();
  $("#heroLevel").textContent = `English · ${$("#levelSelect").selectedOptions[0].text.replace(/ · [A-Z]\d$/, "")}`;
  if ($("#wordSelect")) {
    const filteredLessons = lessons.filter((item) => item.level === $("#levelSelect").value);
    $("#wordSelect").value = String(filteredLessons.indexOf(lesson));
  }

  function getMasteryData() {
    try {
      return JSON.parse(localStorage.getItem("llapp-mastery-v1") || "{}");
    } catch {
      return {};
    }
  }

  function saveMasteryData(data) {
    localStorage.setItem("llapp-mastery-v1", JSON.stringify(data));
  }

  function updateMasteryUI() {
    const data = getMasteryData()[lesson.word];
    document.querySelectorAll(".mastery-button").forEach((button) => button.classList.remove("selected"));
    if (data?.status === "known") $("#knownButton").classList.add("selected");
    if (data?.status === "practice") $("#practiceAgainButton").classList.add("selected");
  }

  function updateReviewSummary() {
    const data = getMasteryData();
    const due = Object.values(data).filter((item) => item.nextReview && item.nextReview <= Date.now()).length;
    $("#reviewDue").textContent = due === 0 ? "No reviews due" : `${due} review${due === 1 ? "" : "s"} due`;
    const levelGoals = {
      beginner: "Goal: recognize the word, say it clearly, and use it in one simple sentence.",
      elementary: "Goal: recall the word and use it in a practical everyday sentence.",
      intermediate: "Goal: explain the word and use it naturally in context.",
      upper: "Goal: distinguish the word’s nuance and use it precisely."
    };
    $("#planGoal").textContent = levelGoals[$("#levelSelect").value];
  }

  function markMastery(status) {
    const data = getMasteryData();
    const current = data[lesson.word] || { reviews: 0 };
    current.status = status;
    current.reviews += 1;
    current.nextReview = Date.now() + (status === "known" ? 3 : 1) * 24 * 60 * 60 * 1000;
    data[lesson.word] = current;
    saveMasteryData(data);
    updateMasteryUI();
    updateReviewSummary();
    $("#pronunciationFeedback").textContent = status === "known"
      ? "Great. This word is scheduled for a later review."
      : "Good choice. This word will return sooner for more practice.";
  }

  function visualForWord(word) {
    const visuals = {
      careful: ["🧤", "Handle the glass gently and pay attention."],
      create: ["🎨", "Imagine making something new from an idea."],
      improve: ["📈", "Picture progress moving upward step by step."],
      confident: ["🌟", "Stand tall and speak with confidence."],
      curious: ["🔎", "Look closely and ask a question."],
      friendly: ["😊", "Use a warm smile to welcome someone."],
      patient: ["⏳", "Wait calmly while something takes time."],
      comfortable: ["🛋️", "Relax in a comfortable place."],
      available: ["🟢", "A green light means something is available."],
      communicate: ["💬", "Share an idea clearly with another person."],
      flexible: ["🤸", "Adapt when a plan changes."],
      significant: ["💡", "Notice an important idea or change."],
      subtle: ["🪶", "Look for a small detail that is easy to miss."]
    };
    return visuals[word] || ["📚", "Connect this word to a picture, action, or personal memory."];
  }

  function renderWordVisual() {
    const [icon, description] = visualForWord(lesson.word);
    $("#visualWord").innerHTML = `<span class="visual-word-icon" aria-hidden="true">${icon}</span><span class="visual-word-copy"><strong>Picture it</strong><span>${description}</span></span>`;
  }

  $("#familyList").innerHTML = lesson.family
    .map(([word, type]) => `<span class="family-word"><strong>${word}</strong> · ${type}</span>`)
    .join("");

  $("#sentences").innerHTML = lesson.sentences
    .map((sentence, index) => `
      <div class="sentence">
        <span class="sentence-number">${index + 1}</span>
        <span class="sentence-text">${sentence}</span>
        <button class="sentence-listen" type="button" data-sentence="${index}" aria-label="Listen to sentence ${index + 1}">▶</button>
      </div>
    `)
    .join("");

  document.querySelectorAll(".sentence-listen").forEach((button) => {
    button.addEventListener("click", () => speakText(lesson.sentences[Number(button.dataset.sentence)], button));
  });
}

function updateTranslation() {
  const language = $("#languageSelect")?.value || localStorage.getItem("llapp-language") || "fr";
  if ($("#languageSelect")) $("#languageSelect").value = language;
  const wordKey = String(lesson.word || "").trim().toLowerCase();
  const wordTranslations = {
    ...(translations[wordKey] || {}),
    ...(lesson.translations || {})
  };
  const translated = wordTranslations[language] || generatedTranslations[language]?.[wordKey] || "Translation coming soon";
  if ($("#wordTranslation")) $("#wordTranslation").textContent = translated;
  localStorage.setItem("llapp-language", language);
}

function renderWordOptions() {
  const level = $("#levelSelect").value;
  const filteredLessons = lessons.filter((item) => item.level === level);
  if (!filteredLessons.length) return;
  if (!filteredLessons.includes(lesson)) {
    lesson = filteredLessons[0];
    currentIndex = lessons.indexOf(lesson);
  }
  $("#wordSelect").innerHTML = filteredLessons
    .map((item, index) => `<option value="${index}">${item.word}</option>`)
    .join("");
  $("#wordSelect").value = String(filteredLessons.indexOf(lesson));
  $("#librarySummary").textContent = `${filteredLessons.length} vocabulary lessons at this level`;
}

function getScoreData() {
  try {
    return JSON.parse(localStorage.getItem("llapp-progress-v1") || "{}");
  } catch {
    return {};
  }
}

function saveScoreData(data) {
  localStorage.setItem("llapp-progress-v1", JSON.stringify(data));
}

function renderScoreDashboard() {
  const level = $("#levelSelect").value;
  const data = getScoreData()[level] || { correct: 0, attempted: 0, history: [] };
  const accuracy = data.attempted ? Math.round((data.correct / data.attempted) * 100) : 0;
  const grade = accuracy >= 90 ? "A" : accuracy >= 80 ? "B" : accuracy >= 70 ? "C" : accuracy >= 60 ? "D" : "—";
  const history = data.history.slice(-7);
  const bars = history.map((value, index) => `<div class="score-bar" style="height:${Math.max(value, 8)}%"><span>${index + 1}</span></div>`).join("");
  return `
    <div class="score-dashboard">
      <div>
        <div class="score-main">
          <div class="grade-badge">${grade}</div>
          <div><h3>${$("#levelSelect").selectedOptions[0].text} progress</h3><p>${accuracy ? `${accuracy}% activity accuracy` : "Complete an activity to start your score."}</p></div>
        </div>
        <div class="score-graph">${bars || '<span class="score-note">Your recent activity will appear here.</span>'}</div>
      </div>
      <div class="score-stats">
        <div class="score-stat"><strong>${data.correct}</strong><span>Correct</span></div>
        <div class="score-stat"><strong>${data.attempted}</strong><span>Attempts</span></div>
        <div class="score-stat"><strong>${accuracy}%</strong><span>Accuracy</span></div>
      </div>
    </div>
  `;
}

function recordActivity(correct) {
  const level = $("#levelSelect").value;
  const data = getScoreData();
  const current = data[level] || { correct: 0, attempted: 0, history: [] };
  current.attempted += 1;
  if (correct) current.correct += 1;
  current.history = [...current.history, Math.round((current.correct / current.attempted) * 100)].slice(-7);
  data[level] = current;
  saveScoreData(data);
  if (document.querySelector(".content-tab.active")?.dataset.content === "activities") renderResources("activities");
}

function renderResources(type) {
  const panel = $("#resourcePanel");
  if (type === "conjugator") {
    renderConjugator();
    return;
  }
  if (type === "placement") {
    renderPlacementTest();
    return;
  }
  if (type === "vocabulary") {
    const level = $("#levelSelect").selectedOptions[0].text;
    const count = lessons.filter((item) => item.level === $("#levelSelect").value).length;
    panel.innerHTML = `<span class="eyebrow">Vocabulary</span><h2>${count} words for ${level}</h2><p class="resource-intro">Learn each word with its family, grammar, pronunciation, examples, and a short recall exercise.</p>`;
    return;
  }
  if (type === "phrasal-verbs") {
    const level = $("#levelSelect").selectedOptions[0].text;
    const phrasalItems = currentLevelResources("phrasal");
    panel.innerHTML = `<span class="eyebrow">Everyday English · ${level}</span><h2>Phrasal verbs for your level</h2><p class="resource-intro">Learn 50 phrasal verbs selected for your current level.</p><div class="resource-count">${phrasalItems.length} phrasal verbs</div>${renderResourceGrid(phrasalItems, "Meaning", true)}`;
    return;
  }
  if (type === "academic-words") {
    const level = $("#levelSelect").selectedOptions[0].text;
    const items = academicWords[$("#levelSelect").value] || [];
    panel.innerHTML = `<span class="eyebrow">Study and academic English · ${level}</span><h2>Academic words for your level</h2><p class="resource-intro">Use these words to discuss ideas, evidence, research, and explanations more clearly.</p>${renderResourceGrid(items, "Meaning", true)}`;
    return;
  }
  if (type === "situations") {
    const place = panel.dataset.place || "traffic";
    const level = $("#levelSelect").value;
    const levelLabel = $("#levelSelect").selectedOptions[0].text;
    const phrases = situationLevelVariants[level]?.[place] || situations[place];
    const visual = situationVisual(place);
    panel.innerHTML = `<span class="eyebrow">Useful phrases</span><h2>Speak naturally in real situations <span class="situation-level">${levelLabel}</span></h2><p class="resource-intro">These phrases are selected for ${levelLabel}. Listen, repeat, and use them in context.</p><div class="situation-picker">${Object.keys(situations).map((name) => `<button class="situation-button ${name === place ? "active" : ""}" data-place="${name}" type="button">${name[0].toUpperCase() + name.slice(1)}</button>`).join("")}</div><div class="situation-visual"><span class="situation-visual-icon" aria-hidden="true">${visual[0]}</span><span><strong>Visualize the situation</strong><span>${visual[1]}</span></span></div><div class="phrase-list">${phrases.map(([phrase, meaning]) => `<div class="phrase-line"><strong>${phrase}</strong><span>${meaning}</span><button class="phrase-speak" type="button" data-phrase="${phrase.replace(/"/g, "&quot;")}" aria-label="Listen and repeat: ${phrase.replace(/"/g, "&quot;")}">▶ Listen & repeat</button></div>`).join("")}</div>`;
    panel.querySelectorAll(".situation-button").forEach((button) => button.addEventListener("click", () => {
      panel.dataset.place = button.dataset.place;
      renderResources("situations");
    }));
    panel.querySelectorAll(".phrase-speak").forEach((button) => button.addEventListener("click", () => {
      speakText(button.dataset.phrase, button);
      button.textContent = "🔊 Playing";
      button.classList.add("playing");
      window.setTimeout(() => {
        button.textContent = "▶ Listen & repeat";
        button.classList.remove("playing");
      }, Math.max(1600, button.dataset.phrase.length * 55));
    }));
    return;
  }

  function situationVisual(place) {
    const visuals = {
      traffic: ["🚦", "Cars, buses, signs, and people moving through the street."],
      restaurant: ["🍽️", "A table, a menu, and a conversation with your server."],
      park: ["🌳", "A relaxed outdoor place for walking and friendly conversation."],
      museum: ["🖼️", "Exhibits, artwork, and questions about what you see."],
      stadium: ["🏟️", "Fans, seats, snacks, and exciting moments during a game."],
      "coffee shop": ["☕", "A counter, a barista, and your drink order."],
      mall: ["🛍️", "Stores, fitting rooms, prices, and helpful staff."],
      bus: ["🚌", "A route, a ticket, a seat, and the right stop."],
      airport: ["✈️", "Check-in, security, gates, and departure announcements."],
      hotel: ["🛎️", "A reservation, a room, and a helpful front desk."],
      pharmacy: ["💊", "A pharmacist, medicine, instructions, and health questions."]
    };
    return visuals[place] || ["📍", "Imagine yourself in this everyday situation."];
  }
  if (type === "speak-practice") {
    const level = $("#levelSelect").selectedOptions[0].text;
    const levelSpeak = currentLevelResources("speak");
    const options = levelSpeak
      .map(([key, situation, phrase]) => `<option value="${key}">${situation} · ${phrase}</option>`)
      .join("");
    const speakData = Object.fromEntries(levelSpeak.map(([key, situation, phrase, description]) => [key, [situation, phrase, description]]));
    panel.innerHTML = `
      <div class="speak-practice">
        <div class="speak-toolbar">
          <div>
            <span class="eyebrow">Listen · Practice · Compare</span>
            <h2>Speak a useful phrase <span class="situation-level">${level}</span></h2>
          </div>
          <label>
            <span class="visually-hidden">Choose a phrase</span>
            <select id="speakPhraseSelect" aria-label="Choose a speaking phrase">${options}</select>
          </label>
        </div>
        <span class="resource-label" id="speakSituation"></span>
        <p class="speak-phrase" id="speakPhrase"></p>
        <p class="speak-description" id="speakDescription"></p>
        <div class="speak-actions">
          <button class="primary-button" id="speakListenButton" type="button">▶ Listen</button>
          <button class="secondary-button" id="speakPracticeButton" type="button">◎ Your turn</button>
          <label>
            <span class="visually-hidden">Playback speed</span>
            <select id="speakSpeedSelect" aria-label="Playback speed">
              <option value="0.8">Slow</option>
              <option value="1" selected>Natural</option>
            </select>
          </label>
        </div>
        <p class="speak-status" id="speakStatus" role="status" aria-live="polite">Listen first, then try saying the phrase aloud.</p>
        <div class="speak-feedback" id="speakFeedback" hidden>
          <div class="speak-feedback-card"><small>The phrase</small><p id="speakTargetFeedback"></p></div>
          <div class="speak-feedback-card"><small>What the browser heard</small><p id="speakTranscript"></p></div>
          <p class="speak-comparison" id="speakComparison"></p>
        </div>
      </div>
    `;
    setupSpeakPractice(panel, speakData);
    return;
  }
  if (type === "activities") {
    const savedLanguage = localStorage.getItem("llapp-language") || $("#languageSelect").value || "fr";
    const languageOptions = [
      ["fr", "French"], ["es", "Spanish"], ["vi", "Vietnamese"], ["fa", "Dari"],
      ["ko", "Korean"], ["de", "German"], ["ar", "Arabic"], ["pt", "Portuguese"], ["zh", "Chinese"]
    ].map(([value, label]) => `<option value="${value}" ${value === savedLanguage ? "selected" : ""}>${label}</option>`).join("");
    const choices = [lesson.partOfSpeech, "noun", "verb", "adjective"].filter((value, index, list) => list.indexOf(value) === index)
      .sort(() => Math.random() - 0.5)
      .map((choice) => `<button class="choice-button" type="button" data-choice="${choice}">${choice}</button>`)
      .join("");
    panel.innerHTML = `
      <span class="eyebrow">Practice activities · ${$("#levelSelect").selectedOptions[0].text}</span>
      <h2>Use your language to learn English</h2>
      <p class="resource-intro">Choose a language, write the translation, and identify the word type. Each activity gives clear feedback and adds to your score.</p>
      ${renderScoreDashboard()}
      <div class="activity-grid">
        <article class="activity-card">
          <h3>1. Write the translation</h3>
          <p>Write the meaning of <strong>${lesson.word}</strong> in your selected language. Then press <strong>Check</strong>.</p>
          <div class="activity-controls">
            <select id="activityLanguage" aria-label="Translation language">${languageOptions}</select>
            <input id="translationAnswer" type="text" placeholder="Type the translation" autocomplete="off">
            <button class="primary-button" id="translationCheck" type="button">Check</button>
          </div>
          <p class="activity-feedback" id="translationFeedback" role="status"></p>
        </article>
        <article class="activity-card">
          <h3>2. Choose the word type</h3>
          <p>Is <strong>${lesson.word}</strong> a noun, verb, adjective, or another type of word?</p>
          <div class="activity-controls">${choices}</div>
          <p class="activity-feedback" id="partOfSpeechFeedback" role="status"></p>
        </article>
      </div>
    `;
    setupActivities(panel);
    return;
  }
  const data = type === "idioms" ? currentLevelResources("idioms") : smallTalk;
  const title = type === "idioms" ? "Idioms and their meaning" : "Small talk starters";
  const level = $("#levelSelect").selectedOptions[0].text;
  panel.innerHTML = `<span class="eyebrow">${type.replace("-", " ")} · ${level}</span><h2>${title} for your level</h2><p class="resource-intro">Save the expressions you want to use in your next conversation.</p>${renderResourceGrid(data, type === "idioms" ? "Meaning" : "Use")}`;
}

function setupActivities(panel) {
  const languageSelect = panel.querySelector("#activityLanguage");
  const answerInput = panel.querySelector("#translationAnswer");
  const feedback = panel.querySelector("#translationFeedback");
  languageSelect.value = localStorage.getItem("llapp-language") || $("#languageSelect").value || "fr";
  languageSelect.addEventListener("change", () => {
    $("#languageSelect").value = languageSelect.value;
    updateTranslation();
  });
  panel.querySelector("#translationCheck").addEventListener("click", () => {
    const expected = lesson.translations[languageSelect.value] || "";
    const answer = answerInput.value.trim().toLocaleLowerCase();
    if (!answer) {
      feedback.textContent = "Type your translation first.";
      feedback.style.color = "var(--orange)";
    } else if (answer === expected.toLocaleLowerCase()) {
      feedback.textContent = "Correct translation!";
      feedback.style.color = "var(--green)";
      recordActivity(true);
    } else {
      feedback.textContent = `Try again. The lesson answer is: ${expected || "not available yet"}.`;
      feedback.style.color = "var(--orange)";
      recordActivity(false);
    }
  });
  panel.querySelectorAll(".choice-button").forEach((button) => button.addEventListener("click", () => {
    const result = panel.querySelector("#partOfSpeechFeedback");
    const correct = button.dataset.choice === lesson.partOfSpeech;
    result.textContent = correct ? "Correct!" : `Not quite. “${lesson.word}” is a ${lesson.partOfSpeech}.`;
    result.style.color = correct ? "var(--green)" : "var(--orange)";
    if (correct) button.classList.add("correct");
    recordActivity(correct);
  }));
}

function setupSpeakPractice(panel, lessonsForLevel = speakLessons) {
  const phraseSelect = panel.querySelector("#speakPhraseSelect");
  const speedSelect = panel.querySelector("#speakSpeedSelect");
  const phraseElement = panel.querySelector("#speakPhrase");
  const situationElement = panel.querySelector("#speakSituation");
  const descriptionElement = panel.querySelector("#speakDescription");
  const listenButton = panel.querySelector("#speakListenButton");
  const practiceButton = panel.querySelector("#speakPracticeButton");
  const status = panel.querySelector("#speakStatus");
  const feedback = panel.querySelector("#speakFeedback");
  const targetFeedback = panel.querySelector("#speakTargetFeedback");
  const transcriptElement = panel.querySelector("#speakTranscript");
  const comparison = panel.querySelector("#speakComparison");
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition;

  const getLesson = () => lessonsForLevel[phraseSelect.value];
  const normalize = (text) => text.toLocaleLowerCase("en-US").replace(/[^\p{L}\p{N}\s]/gu, "").replace(/\s+/g, " ").trim();
  const setStatus = (message, kind = "") => {
    status.textContent = message;
    status.className = `speak-status ${kind}`;
  };
  const update = () => {
    const [situation, phrase, description] = getLesson();
    situationElement.textContent = situation;
    phraseElement.textContent = phrase;
    descriptionElement.textContent = description;
    feedback.hidden = true;
    setStatus("Listen to the new phrase, then give it a try.");
  };

  phraseSelect.addEventListener("change", update);
  listenButton.addEventListener("click", () => {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      setStatus("Speech playback is not supported in this browser.", "error");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(getLesson()[1]);
    utterance.lang = "en-US";
    utterance.rate = Number(speedSelect.value);
    utterance.onstart = () => setStatus("Listen closely, then try it in your own voice.");
    utterance.onend = () => setStatus("Ready when you are. Select “Your turn” to practice.");
    utterance.onerror = () => setStatus("The phrase could not be played. Check your audio settings and try again.", "error");
    window.speechSynthesis.speak(utterance);
  });
  practiceButton.addEventListener("click", () => {
    if (!SpeechRecognition) {
      setStatus("Speech recognition is not available in this browser. Try a recent browser with microphone speech recognition.", "error");
      return;
    }
    feedback.hidden = true;
    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    practiceButton.disabled = true;
    phraseSelect.disabled = true;
    setStatus("Listening… Say the phrase, then wait a moment.");
    recognition.onresult = (event) => {
      const heard = event.results[0] && event.results[0][0] ? event.results[0][0].transcript.trim() : "";
      const target = getLesson()[1];
      targetFeedback.textContent = target;
      transcriptElement.textContent = heard || "No words were recognized.";
      const matched = normalize(heard) === normalize(target);
      comparison.textContent = matched
        ? "The recognized words match the phrase. This checks the transcript only—not how the words were pronounced."
        : "The transcript is not an exact match. Listen again, compare the words, and try once more.";
      feedback.hidden = false;
      setStatus("Your transcript is ready. Compare the recognized words with the phrase.");
    };
    recognition.onerror = (event) => {
      const messages = {
        "not-allowed": "Microphone access was blocked. Allow microphone access, then try again.",
        "no-speech": "No speech was detected. Check your microphone and try again.",
        "audio-capture": "No microphone was found. Connect or enable one and try again.",
        network: "Speech recognition could not connect. Check your internet connection and try again."
      };
      setStatus(messages[event.error] || `Speech recognition failed (${event.error}). Please try again.`, "error");
    };
    recognition.onend = () => {
      practiceButton.disabled = false;
      phraseSelect.disabled = false;
    };
    try {
      recognition.start();
    } catch (error) {
      practiceButton.disabled = false;
      phraseSelect.disabled = false;
      setStatus(`Could not start speech recognition: ${error.message}`, "error");
    }
  });
  update();
}

function renderResourceGrid(items, secondLabel, includeExample = false) {
  return `<div class="resource-grid">${items.map((item) => `<article class="resource-card"><span class="resource-label">${secondLabel}</span><h3>${item[0]}</h3><p>${item[1]}</p>${includeExample || item[2] ? `<p><strong>Example:</strong> ${item[2] || ""}</p>` : ""}</article>`).join("")}</div>`;
}

function speakText(text, button = null) {
  if (!("speechSynthesis" in window)) {
    $("#pronunciationFeedback").textContent = "Audio is not supported in this browser.";
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = button ? 0.9 : 0.78;
  if (button) {
    button.classList.add("playing");
    utterance.onend = () => button.classList.remove("playing");
  }
  window.speechSynthesis.speak(utterance);
  $("#pronunciationFeedback").textContent = button
    ? "Listen to the sentence, then repeat it aloud."
    : "Listen carefully, then repeat the word aloud.";
}

function speakWord() {
  speakText(lesson.word);
}

function practicePronunciation() {
  if (!navigator.mediaDevices?.getUserMedia) {
    $("#pronunciationFeedback").textContent = "Microphone access is not available in this browser.";
    return;
  }

  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      stream.getTracks().forEach((track) => track.stop());
      $("#pronunciationFeedback").textContent = `Microphone ready. Say “${lesson.word}” clearly, then compare with the audio.`;
    })
    .catch(() => {
      $("#pronunciationFeedback").textContent = "Microphone permission was not granted.";
    });
}

function checkAnswer() {
  const answer = $("#answerInput").value.trim().toLowerCase();
  const feedback = $("#answerFeedback");

  if (answer === lesson.answer) {
    feedback.textContent = "Correct! You used the word naturally.";
    feedback.style.color = "var(--green)";
    $("#progressText").textContent = "3 / 5 words";
    $("#progressBar").style.width = "60%";
  } else if (!answer) {
    feedback.textContent = "Type an answer before checking.";
    feedback.style.color = "var(--orange)";
  } else {
    feedback.textContent = `Almost. Think about the word “${lesson.word}.”`;
    feedback.style.color = "var(--orange)";
  }
}

$("#listenButton").addEventListener("click", speakWord);
$("#recordButton").addEventListener("click", practicePronunciation);
$("#knownButton").addEventListener("click", () => markMastery("known"));
$("#practiceAgainButton").addEventListener("click", () => markMastery("practice"));
$("#checkButton").addEventListener("click", checkAnswer);
$("#answerInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") checkAnswer();
});
$("#saveButton").addEventListener("click", () => {
  $("#saveButton").classList.toggle("saved");
  $("#saveButton").textContent = $("#saveButton").classList.contains("saved") ? "♥" : "♡";
});
$("#wordSelect").addEventListener("change", (event) => {
  const filteredLessons = lessons.filter((item) => item.level === $("#levelSelect").value);
  lesson = filteredLessons[Number(event.target.value)];
  currentIndex = lessons.indexOf(lesson);
  renderLesson();
  if (document.querySelector(".content-tab.active")?.dataset.content === "activities") renderResources("activities");
});
$("#levelSelect").addEventListener("change", () => {
  renderWordOptions();
  renderLesson();
  const activeContent = document.querySelector(".content-tab.active")?.dataset.content || "vocabulary";
  renderResources(activeContent);
});
$("#languageSelect").addEventListener("change", () => {
  updateTranslation();
  if (document.querySelector(".content-tab.active")?.dataset.content === "activities") renderResources("activities");
});
$("#nextButton").addEventListener("click", () => {
  const filteredLessons = lessons.filter((item) => item.level === $("#levelSelect").value);
  const nextIndex = (filteredLessons.indexOf(lesson) + 1) % filteredLessons.length;
  lesson = filteredLessons[nextIndex];
  currentIndex = lessons.indexOf(lesson);
  renderLesson();
  if (document.querySelector(".content-tab.active")?.dataset.content === "activities") renderResources("activities");
});

renderLesson();
renderWordOptions();
renderResources("vocabulary");
document.querySelectorAll(".content-tab").forEach((tab) => tab.addEventListener("click", () => {
  document.querySelectorAll(".content-tab").forEach((item) => item.classList.remove("active"));
  tab.classList.add("active");
  document.querySelector(".lesson-layout").style.display = tab.dataset.content === "vocabulary" ? "" : "none";
  renderResources(tab.dataset.content);
}));
