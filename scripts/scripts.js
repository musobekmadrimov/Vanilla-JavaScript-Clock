const degree = 6; // 360graduslik aylanani 60 ga bo'lganimizdan kelib chiqqan. Bu strelkalarning necha gradusga siljishini belgilashimiz uchun kerak bo'ladi!
const hour = document.querySelector("#hr"); //Bu yerda DOM yordamida soat strelkasini o'zgaruvchimizda biriktirib olamiz!
const minute = document.querySelector("#mn"); //Bu yerda DOM yordamida minut strelkasini o'zgaruvchimizda biriktirib olamiz!
const secund = document.querySelector("#sc"); //Bu yerda DOM yordamida sekund strelkasini o'zgaruvchimizda biriktirib olamiz!


setInterval(() => {
  // Bu funksiya yordamida funksiya ichidagi amallarni qayta-qayta yangidan bajarishini ta'minlaymiz!
  let day = new Date(); // Hozirgi sanani o'zgaruvchiga biriktiramiz!
  let hh = day.getHours() * 30; // Soatimizda har bir soat 30 gradus joy olishi sababli, hozirgi soatni 30 ga ko'paytirib, o'zgaruvchimizga biriktiramiz!
  let mm = day.getMinutes() * degree; // Soatimizda har bir minut 6 gradus joyni olganligi sababli(360/60), hozirgi minutni degree o'zgaruvchisiga ko'paytirib, o'zgaruvchimizga biriktiramiz!
  let ss = day.getSeconds() * degree; // Soatimizda har bir sekund ham 6 gradus joyni olganligi sababli(360/60), hozirgi sekundni degree o'zgaruvchisiga ko'paytirib, o'zgaruvchimizga biriktiramiz!
  

  hour.style.transform = `rotateZ(${hh + mm / 12}deg`; // Soat stelkasi har 12 daqiqda 5 gradus surilishi uchun hozirgi minutni 6 gradusga ko'paytirib, 12 ga bo'lamiz va soatni gradusiga qo'shib qo'yamiz!
  minute.style.transform = `rotateZ(${mm}deg)`; // Minutni ma'lum gradusga surish kodi!
  secund.style.transform = `rotateZ(${ss}deg)`; // Sekundni ma'lum gradusga surish kodi!
}, 1000); // setIntervalni ikkinchi parametrniga 1000ms yani 1sekund beramiz, bunda har soniyada yuqoridagi algoritm qayta ishlaydi!
  
//   coded by Musobek Madrimov!
