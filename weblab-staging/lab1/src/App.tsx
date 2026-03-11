import { useState } from 'react';
import UIKit from './pages/UIKit';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

function App() {
  const [view, setView] = useState<'portfolio' | 'uikit'>('portfolio');

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-200">
      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 left-0 bg-blue-800 text-white p-2 z-50">
        Ana icerige atla
      </a>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            {view === 'portfolio' ? 'Muhammed Tarik Menguc' : 'UI Kit Preview'}
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {view === 'portfolio' && (
                <>
                  <li><a href="#hakkimda" className="block px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Hakkimda</a></li>
                  <li><a href="#projeler" className="block px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Projeler</a></li>
                  <li><a href="#iletisim" className="block px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Iletisim</a></li>
                </>
              )}
              <li>
                <button
                  onClick={() => setView(view === 'portfolio' ? 'uikit' : 'portfolio')}
                  className="px-3 py-1 ml-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors cursor-pointer"
                >
                  {view === 'portfolio' ? 'UI Kit Goster' : 'Portfoye Don'}
                </button>
              </li>
              <li>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 ml-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-sm hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Tema degistir"
                  type="button"
                >
                  <span className="dark:hidden opacity-80" aria-hidden="true">&#9790;</span>
                  <span className="hidden dark:inline text-yellow-500" aria-hidden="true">&#9728;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {view === 'uikit' ? <UIKit /> : (
          <>
            <section id="hakkimda" className="py-16 px-4">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                <figure className="shrink-0 relative group">
                  <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl ring-4 ring-gray-100 dark:ring-gray-800 group-hover:ring-blue-500 transition-all duration-300">
                    <img src="/profil.jpg" alt="Muhammed Tarik Menguc" className="w-full h-full object-cover" />
                  </div>
                </figure>
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
                    Hakkimda
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-2xl">
                    Merhaba, ben Muhammed Tarik Menguc. Web gelistirme, semantik HTML ve
                    erisilebilirlik uzerine calismalar yapiyorum. Modern yapilarla
                    kullanici dostu arayuzler olusturmayi hedefliyorum.
                  </p>
                  <ul className="flex flex-wrap items-center justify-center md:justify-start gap-2" role="list">
                    <li className="bg-blue-800 dark:bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">HTML5</li>
                    <li className="bg-blue-800 dark:bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">CSS3</li>
                    <li className="bg-blue-800 dark:bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">JavaScript / React</li>
                    <li className="bg-blue-800 dark:bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">Tailwind CSS</li>
                    <li className="bg-blue-800 dark:bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">TypeScript</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                  Projelerim
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card
                    variant="elevated"
                    title="E-Ticaret Sitesi"
                    image="/eticaret.jpg"
                    imageAlt="E-ticaret sitesi anasayfa goruntusu"
                    footer={
                      <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-600 dark:text-gray-300">
                        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">React</span>
                        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Node.js</span>
                        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">MongoDB</span>
                      </div>
                    }
                  >
                    React ve Node.js kullanilarak gelistirilmis tam kapsamli e-ticaret platformu.
                  </Card>

                  <Card
                    variant="elevated"
                    title="Blog Uygulamasi"
                    image="/blog.jpg"
                    imageAlt="Blog uygulamasi goruntusu"
                    footer={
                      <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-600 dark:text-gray-300">
                        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Next.js</span>
                        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Tailwind</span>
                        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">PostgreSQL</span>
                      </div>
                    }
                  >
                    Kullanicilarin makale yazabildigi ve yorum yapabildigi modern blog uygulamasi.
                  </Card>
                </div>
              </div>
            </section>

            <section id="iletisim" className="py-20 px-4">
              <div className="max-w-lg mx-auto bg-white dark:bg-gray-800/80 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Iletisim
                </h2>
                <form className="space-y-5" action="#" method="POST" noValidate>
                  <Input id="name" name="name" label="Ad Soyad" placeholder="Adiniz Soyadiniz" required />
                  <Input id="email" name="email" label="E-posta" type="email" placeholder="ornek@mail.com" required />

                  <div className="space-y-1">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Konu</label>
                    <select id="subject" name="subject" required className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors">
                      <option value="">-- Seciniz --</option>
                      <option value="is">Is Teklifi</option>
                      <option value="soru">Soru</option>
                      <option value="oneri">Oneri</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Mesajiniz
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Mesajinizi buraya yazabilirsiniz..."
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors resize-y"
                    ></textarea>
                  </div>

                  <Button variant="primary" size="lg" type="submit" className="w-full cursor-pointer mt-2">
                    Gonder
                  </Button>
                </form>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-8 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <p>&copy; 2026 Muhammed Tarik Menguc. Tum haklari saklidir.</p>
          <ul className="flex justify-center gap-6 font-medium">
            <li><a href="https://github.com/tarikmenguc/weblab" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a></li>
            <li><a href="https://linkedin.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;