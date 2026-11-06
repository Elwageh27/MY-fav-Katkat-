



const envelopeMessages=[
  {title:'أجمل حاجة بحبها فيكي',text:'حنيتك ♡'},
  {title:'أكتر حاجة بتزعلني منك',text:'عمري ما بزعل منك ❤️'},
  {title:'أكتر حاجة نفسي فيها',text:'أشوفك أكبر دكتورة أسنان أطفال في الدنيا، وأشوفك ناجحة ومحققة كل اللي بتحلمي بيه.'},
  {title:'أكتر حاجة نفسي فيها كمان',text:'إني أشتري أفافيز ليكي 😂❤️'}
];
const envelopeButtons=[...document.querySelectorAll('.envelope')];
const revealBox=document.getElementById('envelopeReveal');
envelopeButtons.forEach((button)=>{
 button.addEventListener('click',()=>{
   const item=envelopeMessages[Number(button.dataset.envelope)];
   envelopeButtons.forEach(b=>b.classList.remove('opened'));
   button.classList.add('opened');
   document.getElementById('revealTitle').textContent=item.title;
   document.getElementById('revealText').textContent=item.text;
   revealBox.classList.add('show');
   revealBox.scrollIntoView({behavior:'smooth',block:'nearest'});
 });
});
document.getElementById('closeEnvelope').onclick=()=>{
 revealBox.classList.remove('show');
 envelopeButtons.forEach(b=>b.classList.remove('opened'));
};

const cdModal=document.getElementById('cdModal');document.getElementById('openCD').onclick=()=>{cdModal.classList.add('open');cdModal.setAttribute('aria-hidden','false');};document.getElementById('closeCD').onclick=()=>{cdModal.classList.remove('open');cdModal.setAttribute('aria-hidden','true');};cdModal.addEventListener('click',e=>{if(e.target===cdModal){cdModal.classList.remove('open');cdModal.setAttribute('aria-hidden','true');}});

const voiceAudio=document.getElementById('voiceAudio');
const voiceToggle=document.getElementById('voiceToggle');
const voiceSeek=document.getElementById('voiceSeek');
const voiceCurrent=document.getElementById('voiceCurrent');
const voiceDuration=document.getElementById('voiceDuration');
const fmtTime=(seconds)=>{if(!Number.isFinite(seconds))return '0:00';const m=Math.floor(seconds/60),s=Math.floor(seconds%60);return `${m}:${String(s).padStart(2,'0')}`};
voiceAudio.addEventListener('loadedmetadata',()=>{voiceDuration.textContent=fmtTime(voiceAudio.duration)});
voiceToggle.addEventListener('click',async()=>{if(voiceAudio.paused){try{await voiceAudio.play();voiceToggle.textContent='Ⅱ';voiceToggle.setAttribute('aria-label','إيقاف مؤقت')}catch(e){voiceToggle.textContent='▶'}}else{voiceAudio.pause();voiceToggle.textContent='▶';voiceToggle.setAttribute('aria-label','تشغيل')}});
voiceAudio.addEventListener('timeupdate',()=>{voiceCurrent.textContent=fmtTime(voiceAudio.currentTime);if(voiceAudio.duration){voiceSeek.value=(voiceAudio.currentTime/voiceAudio.duration)*100}});
voiceSeek.addEventListener('input',()=>{if(voiceAudio.duration)voiceAudio.currentTime=(Number(voiceSeek.value)/100)*voiceAudio.duration});
voiceAudio.addEventListener('ended',()=>{voiceToggle.textContent='▶';voiceToggle.setAttribute('aria-label','تشغيل');voiceSeek.value=0});

const journey=document.getElementById('journey');
const journeyScenes=[...journey.querySelectorAll('.journey-scene')];
let journeyIndex=0;
function showJourneyScene(i){journeyIndex=i;journeyScenes.forEach((s,n)=>s.classList.toggle('active',n===i));document.getElementById('journeyProgress').style.width=((i+1)/journeyScenes.length*100)+'%';journey.scrollTop=0;}
function openJourney(){journey.classList.add('open');journey.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';showJourneyScene(0);}
function closeJourney(){journey.classList.remove('open');journey.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.getElementById('startJourney').onclick=openJourney;
document.getElementById('thirdButton').onclick=()=>document.getElementById('thirdThing').scrollIntoView({behavior:'smooth'});
document.getElementById('journeyClose').onclick=closeJourney;
journey.querySelectorAll('.journey-next').forEach(btn=>btn.addEventListener('click',()=>{if(journeyIndex<journeyScenes.length-1)showJourneyScene(journeyIndex+1);}));
document.getElementById('journeyAgain').onclick=()=>showJourneyScene(0);

const floaties=document.getElementById('floaties');
for(let i=0;i<30;i++){const s=document.createElement('span');s.className='heart';s.textContent=['♡','♥','✿','✧','❀'][i%5];s.style.left=(Math.random()*100)+'%';s.style.fontSize=(13+Math.random()*24)+'px';s.style.animationDuration=(9+Math.random()*14)+'s';s.style.animationDelay=(-Math.random()*20)+'s';floaties.appendChild(s)}
const screens=['login','home','reader'];function show(id){screens.forEach(x=>document.getElementById(x).classList.toggle('active',x===id));window.scrollTo({top:0,behavior:'smooth'})}
document.getElementById('loginForm').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();const pass=document.getElementById('password').value.trim();const err=document.getElementById('error');if(name!=='كتكت'){err.textContent='الاسم من أربع حروف ❤️';return}if(pass!=='1922006'){err.textContent='الباسورد من 7 أرقام مش 6 🙈';return}err.textContent='';show('home')});
document.getElementById('goDown').onclick=()=>document.getElementById('more').scrollIntoView({behavior:'smooth'});
document.getElementById('homeBtn').onclick=()=>show('home');
const pages=[{"title":"كتكووتي","text":"كتكووتي \r\nفكره ان دي اخر ررساله مبينا حااجه اخر اععع بس بمعني اخر رساله مبينا ك معاكساتي او قله ادبي متقوليش الحمد لله ف سرك او اي كلام عدل بقولو عموما\r\nبس كل الفكره ان ان او انتي هنبقا موجودين عادي ال محتاج حاجه التاني موجود ملخص لحاجه اسئله صياح للكليه ولو مليون ريكورد بمليون ساعه عمري مزهق منك يكتكوته \r\nبس هيا كل الفكره يبقا الشات اي حد مسكه يبقا نضيف  حتي لو فيه كلام + ميبقاش كلامنا فيه حاجه حرام وانا باذن الله هحاول اعمل كده وامسك نفسي جداا من حلاوتك \r\nعارف ان الكلام الغلط كله مني وباذن الله هظبط نفسي علشانيي وعلشانك برضو جايز النصيب ميصبش وكدها ولو اتجوزتي ميبقاش حد قل ادبه غيره اعععععع ضيق نفس \r\n"},{"title":"خليني أقولك حاجة","text":"المهم يعني باذن الله انا هتعدل وابقا بني ادم كويس لان زي مقولتلك ان انا ليا فتره كبيره بعيد عن كل حاجه دينيا دنيويا حجات كتير كنت منتظم فيها و قطعت وبوظت حجات كتير حلوه كنت بعملها \r\nودا بسببك بصراحه لان حقيقي دماغي كلها فكتكوتي وبصراحه دماغي معاها حق انتي كل حاجه حلوه فيكي شكلا ملامح قصه الشعر شخضيه تحفه (معادا انك م هتقولي موافقه)\r\nوبجد حنيه مش متخيله انا ببقا مبسوط بالموضوع دا ازاي اه بتتعصبي مبتشوفيش قدامك و كمان عصبيه بس حقيقي حنيتك جميله جدا و ببقا مبسوط لو زعلتك وبتسامحيني علي طول |\r\n"},{"title":"حاجات جوايا","text":"وان مهما جيت اشتكتلك من اي حاجه بتسمعيني وحقيقي مفيش فيكي عيب كلك مميزات دي حقيققه دي مش حقيقه انا بس ال شايف كده ميهمنيش ال بيهمني ان انا عمري مشوفت واحده فيها الصفات دي كلها |\r\nمعظم الناس بتكلم واحده واتنين وتخون اه لانهم خاينين وولاد*** وملهمش مبرر اكيد بس اكيد لو واحده فيها كل حاجه حلوه هزار تلاقي ولما بتتفحي مبتوقفيش زعل ولما بتتقمصي مبتسكتيسش و تتصالحي بسرعه نكد تلاقي حنيه وحتي لو مبتتقالش ب اللفظ ف اكيد مش هحتاجها\r\nلانن مش كل ال بيتكلم بيعمل ياما نااس بتبيع كلام وملهوش لزمه وناس ب تصرفاتها ال مبقولش اوقات عليها ان دي حاجه حلوه ب النسبالي لانك بتتكسفييي بس بيبين انك بتقدريني فحجات كتير بس بقولك مبتقدريش علشان اسمعها منك يكتكوته \r\n"},{"title":"تفاصيل صغيرة","text":"المهم انا بشكرك جدا علي كل حاجه فعلا انتي انساننهه قليل لو حد لقي زيها وجايز دا من اسباب تمسكي بيكي ي كتكت ونفسي والله اشوفك حاجه حلوه جدا لانك تعبتيي كتيير وانا شاهد علي كدا ولو ب الاربع خمس شهور ال قضيناهم |\r\nحتيي لو تعبك النفسي عموما ف انتي تستحقيي كتير والله ووالله نفسيي اشوفككككك مبسوطه طول حياتك سواء الحاجه دي معايا او مع غيري بس بمجرد اشوفك مبسوطه فدايما هتلاقيني مبسوط والعكس يكتكت \r\n"},{"title":"حكاية الوصول","text":"وطبعااا انا مبسوط من نفسي اكيد ان عرفت اوصل لكتكت سواء ب جر كلام برساله باي حاجه زي مخدنا كورس انجليزي سوا وبسمعه علشانك وطبعا ايه المشكله بس لانيي كنت عايز اوصلك كام معلومه علشان تبقا كلام مش مني لاني لو بدايه كلامي كنت قولتلك بخاف عليكي من كذه وكذه كنتي هتقولي تفكير متحرش ومحدش بيفكر كدا\r\nل يوم كان نفسي اكلمك فيه وطبعا مبناش كلام ف افتكرت انك نزلتي استريك ب اسبايدر مان ف سالتك عليه حلو ولا لا وانا اساسا مكنتش هسمعه وبعدها خليتك ترشحيلي اسماء افلام و مسلسلات وناخد زوق بعض والكلام خدنا لزوقنا ف كل حاجه علشان اقول زوقيق ف البنات واخدصفاتك لحجاات كتيير\r\n"},{"title":"اللي بحبه فيكي","text":"والالعاب ال حملتها علشان اللعبها معاكي علشان نلاقي محتوي واكلمك بيه لحد معترفلك يكتكوته وختمت ب استوري نزلتهولك ومكنيتش فاهمه هو لمين او فاهمه الله اعلم ولما نزلته اتكلمنا اليوم دا وبعدها بعتلك رساله فيها تلميح بسيط ونمت صحيت لقيتك \r\nمردتيش فمسحت الرساله لانيي عرفتت ان الموضوع وقفف وبعدها ردييتي وحسيت انها مش نهايه العالم وتفااصييل كتيير لو هحكيلك لبكرا حجات انتي مش واخده بالك منها بس حقيقي تعبت نفسيا عقبال موصللت بس بصرراااحه تستاهليييي \r\nلذه الوصول بتنسي الطريق ( حكمه لسه مخترعها ) المهم يعني علشان مطولش عليكي قولي طول علي راي عمي محمود \r\n"},{"title":"كلام من قلبي","text":"انااا مش بختمها حاليا مبينا بس بختمها قله ادبي ومعاكسااتي وطبعا عمري مشوفت منك حاجه عدله كلمه يعني معادا ريبوستات التيك توك ال متابعها وباخدها عليا بصراحه بس بخاف اقولك شكرا عليها ت قوليلي دي مش عليك اساسا ف باخدها وانا ساااكت\r\nوكنت مبسوط بيهم جدا والله حتي يومها فضلت اقولك انا حابك بس مكنش بسبب الصهد بسوء ظنك دا \r\nوطبعاا بتااسف علي قله ادبي ومكنتش كتيرههه بجد يعني ان يطلع مني دول بس وقدامي حونشايه زيك فانا كده فوق الاحترام بشوييه وامسكك صهدي ف انا توب التوب بس لازم اتاسف بررضوو بيكتكت اما بعد كده لو فيه نصيب هنسيكي معني اللبس وهقفل الموضوع علشان متشتمش \r\n"},{"title":"ذكريات الطريق","text":"بس بجد طبعيي مش قله ادب و اوقات بنكشك بس ك رخامه ايوا اوقات قله ادب بتبقا صهد بس المعظم بحب ارخمم علييكي وافتكرييي حتي لو فيا قله ادب الدنيا كلهاا ف انا ف الاول والاخر بخاف عليكي يكتكوتي وان عمري مكلامي كان مصلحه وانتي اكيد عارف كده يحلوه \r\nوطبعاا لو قعدت لبكرااا احكيلك ان انا بحبك قد ايه وان قد ايه مبشوفش ف الدنيا غيرك مش هيكفيي وانتي عارفه كده يكتكت بسس عنديي كام طلب ليكي يكتكوته ودا حقيقي لان مش هيبقا ليا دعوه ب الموضوع دااا هبقاااا غرييبببب لاننا هنرجع زي الاول \r\n"},{"title":"اعتذار واعتراف","text":"طبعا الللبس الرقبه والايدين وانتي جميله ومبسوط بيكي جدا والله ف موضوع الشعر يارب تثبتي كده وكمانن القرايب سواء اولاد اعمام واولاد خال والناس ال مبحبهاش و اي ولد ف الكليه سواء بيسال علي حاجه بيعمل يسال اي حد هناك مجتش عليكي خليكي ناشففه ف التعامل \r\nانا كدا كدا بثق فيكي اكتر من نفسي بس اوقات دماغك بتوهي وبتتعاملي ب حسن نيتك انتي وال قدامك اولاد كلب وكماان متهزريييش مع قرايبناااا سواااء قدامي او من وراايياا وكل داا اعتبرييه مش ليااا ليكيي ولو ولولوولولوفيه نصيب قدام برصضو \r\n"},{"title":"طلبات حمود","text":"ودا حقيقي طلب لو عايزه تعمليه علشان خاطر حموود انااا اساسا كنت بفكر ارو ح عندد املل وانتي عماله تكلمينيي دلوقت علي الفيديو بتاع التنمر ومش فاضيللك لان ورايا براجراف ب اعمله فمش فاضي اساسا اجييي حتي لو نفسي اشوف كتكوتي \r\n"},{"title":"القرار الصح","text":"وفالنهايه يكتكوته قبل متدخلي تشوفي بقيه الموقع فانا بحبك جدا جداا وفعلاا طول عمريي كنتي حلم ب النسبالي ان اكلمك او بعد كده وواحد اتحقق والتاني هو ونصيبه وجاييز ربك يكرمم ب قد ايه سبت حاجه بحبها للدرجه دي ووالله مسايبك غير اننا بنعمل حاجه غلط كان نفسي اكون جمبك وتفضلي تصيحي الوقت كله بس الحاجه الحرام ممش هطولها ولو طلتها هيحصل مشاكل بعدين طب وهنشيل ذنوب طب واحنا علي ايهه ننهي حتي لو صعبه ونرجع زي مكنا زمان او انا بالاخص يعني وعلي قد مسبت كتكوتي ال بعشقههاا ربنا يكرمني بعدين ولو النصيب مظبطش ف اختيار ربنا احسن اكيد \r\n"},{"title":"وآخر الكلام","text":"وانا واننتيي نتوب عن الموضوع دا علشاان ربنا يغفرنا ال فات باذن الله وربنا يبعد عنك ولاد الحرام والحلال والولاد وكل حاجه لحد مجهز نفسي اما انا جايب الثقه منين ان الموضوع سهل اولاد باذن الله ان ربناا يكرمني بيهه بدونن مجهوود مني ثانيا هتعرفي السبب بعد شويه مالموقع\r\nوبس كدا يكتكوته اسيببك تكملي بقيه الحجات بمووت فييييييييييييييييييييييكييييييييييييييييييييييييييييييييييييييييييييييييييي"}];
let page=0,timer=null;
const visitedPages=new Set();
function renderPage(){
  clearInterval(timer);
  const p=pages[page];
  document.getElementById('pageTitle').textContent=p.title;
  document.getElementById('pageCount').textContent=`${page+1} / ${pages.length}`;
  document.getElementById('prev').disabled=page===0;
  document.getElementById('prev').style.opacity=page===0?'.45':'1';
  document.getElementById('next').style.display=page===pages.length-1?'none':'inline-block';
  document.getElementById('finishNote').classList.toggle('show',page===pages.length-1);
  const el=document.getElementById('story');
  el.textContent='';
  if(visitedPages.has(page)){el.textContent=p.text;return;}
  visitedPages.add(page);
  const cursor=document.createElement('span');
  cursor.className='cursor';
  el.appendChild(cursor);
  const chars=p.text;
  let i=0;
  timer=setInterval(()=>{
    if(i>=chars.length){clearInterval(timer);cursor.remove();return;}
    cursor.before(document.createTextNode(chars[i++]));
  },24);
}

function renderPage(){
  if(timer){clearInterval(timer);timer=null;}
  const p=pages[page];
  document.getElementById('pageTitle').textContent=p.title;
  document.getElementById('pageCount').textContent=`${page+1} / ${pages.length}`;
  document.getElementById('prev').disabled=page===0;
  document.getElementById('prev').style.opacity=page===0?'.45':'1';
  document.getElementById('next').style.display=page===pages.length-1?'none':'inline-block';
  document.getElementById('finishNote').classList.toggle('show',page===pages.length-1);

  // Important: insert the complete Arabic string as ONE text node.
  // Splitting Arabic into individual character nodes breaks letter joining in iOS Safari.
  const el=document.getElementById('story');
  el.classList.remove('story-reveal');
  el.textContent=p.text;
  void el.offsetWidth;
  el.classList.add('story-reveal');
}
document.getElementById('openBook').onclick=()=>{page=0;show('reader');renderPage()};
document.getElementById('prev').onclick=()=>{if(page>0){page--;renderPage()}};
document.getElementById('next').onclick=()=>{if(page<pages.length-1){page++;renderPage()}};

const thanksModal=document.getElementById('thanksModal');
let heartRain=null;
function makeHeart(){
  const h=document.createElement('span');h.className='flying-heart';
  h.textContent=['♡','♥','💗','💕','❤'][Math.floor(Math.random()*5)];
  h.style.setProperty('--x',(Math.random()*100)+'vw');
  h.style.setProperty('--dur',(4+Math.random()*4)+'s');
  h.style.setProperty('--rot',(-50+Math.random()*100)+'deg');
  h.style.fontSize=(18+Math.random()*28)+'px';
  document.body.appendChild(h);setTimeout(()=>h.remove(),8500);
}
function openThanks(){
  thanksModal.classList.add('open');thanksModal.setAttribute('aria-hidden','false');
  for(let i=0;i<34;i++)setTimeout(makeHeart,i*75);
  heartRain=setInterval(makeHeart,240);
}
function closeThanks(){
  thanksModal.classList.remove('open');thanksModal.setAttribute('aria-hidden','true');
  clearInterval(heartRain);heartRain=null;
}
document.getElementById('openThanks').addEventListener('click',openThanks);
document.getElementById('closeThanks').addEventListener('click',closeThanks);
thanksModal.addEventListener('click',e=>{if(e.target===thanksModal)closeThanks()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&thanksModal.classList.contains('open'))closeThanks()});

