# CSS Kararlari

## 1. Breakpoint Secimi
- Neden 640px ve 1024px sectim?
En yaygin tablet ve masaustu genislikleridir. Mobil (<640px) varsayilan olarak hazirlanip, 640px uzeri icin iki/uc sutunlu gibi degisikliklere daha iyi bir yonetilebilirlik saglarlar.
- Icerigim bu noktalarda nasil degisiyor?
Alt sinirlarda genellikle header/nav icerikleri dikey yigilir iken (column), `md` (640px) den itibaren yatay listelemelere (row), 1024px itibariyle ise main alani 1200px genislikle ortalanmis kutuya (center alignment) dogru gecer.

## 2. Layout Tercihleri
- Header icin neden Flexbox sectim?
Logonun (kullanilmasa bile metnin) ve Nav elemanlarinin ayni hizalanmis duzlemde, esnek (esit) aralikli (`space-between`) durmasi Flexbox'un tek eksenli kontrol yetenegine en uygun ornektir.
- Proje kartlari icin neden Grid sectim?
Proje kartlarinin hem satirlar uzerinde duzluk kurmasi hem de yan yana birden fazla gelip kirilmasi gibi 2 boyutlu gereksinimler, Grid ve `repeat` yontemleriyle cok da az satirda temizce cozulebilmektedir.
- auto-fit mi auto-fill mi kullandim, neden?
`auto-fit` kullandim cunku genisleyen alanda tum track'lerin bosluga kadar dolmasini ve gereksiz "hayalet" kolon alanlarinin izgarada bos durmasini engeller. Kartlar alani paylasip uzar (`flex-grow` ile dikeyde ve auto-fit sayesinde yatayda).

## 3. Design Tokens
- Hangi renk paletini sectim ve neden?
Mavi tabanli temiz kurumsal bir renk paleti. A11y'ye uygun kontrast (`--color-text` / `--color-bg`), uyari mesajlari ve buton hover efektifleri ayrintilandirildi.
- Spacing skalasini nasil belirledim?
Temel padding yapisini 8-16-24... (katli artisan) (`xs, sm, md, lg, xl, 2xl, 3xl`) sistemiyle token haline getirerek marjin ve genislik/bossluk hatalarinin ve tutarsizliklarinin onunu aldim.
- Fluid typography icin clamp degerlerini nasil ayarladim?
Metin olcekleri `vw` kullanarak kisa (`1rem`) ve uzun (`1.125rem` vs) ekran durumlarina uygun "okume limitlerinin" altina inmedi-uzamadi mantiginda kurulmustur. Ornegin `--text-base` `clamp()` minimum 1rem ayarlandi.

## 4. Responsive Stratejiler
- Mobile-first yaklasimini nasil uyguladim?
Basta css elementleri dogrudan yazildi (`@media` disi). Cihaz boyutlari arttigi noktalarda `@media (min-width: ...)` kullaninarak bazi `column` yonelimleri `row` formuna gevrildi ve sinirlar eklendi.
- Hangi elemanlar breakpoint'lerde degisiyor?
Navbar 640px uzerinde dikeyden yataya gecer, `.project-grid` grid-template sütun yapıları (`grid-template-columns`) 1 den 3'e `1024px` sonrasi cikabilir. Ayrica section paddingleri gitgide buyur. 
- Gorsel boyutlari nasil yonettim?
Genel `img` etiketlerinde `max-width: 100%`, `height: auto`, özel kaplarda (örneğin `--project-card img`) ise zorunlu `height: 200px` ve görüntü kırpılmasına dair `object-fit: cover` uygulanmıştır.
