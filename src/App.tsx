import { useEffect, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';
import { useState } from 'react';
import textileEditorial from './assets/textile-editorial.jpg';

const queryClient = new QueryClient();
const address =
  'Chinnappampatti - Jalakandampuram Rd, Salem, Pappampadi, Tamil Nadu 636306';
const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
const phoneUrl = 'tel:+919952457408';
const instagramUrl = 'https://www.instagram.com/sribalajisilk';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Sri Balaji Silk | Clothing for the Family in Pappampadi';
    const description =
      'A welcoming local clothing destination in Pappampadi for women, men and kids. Find Sri Balaji Silk on Chinnappampatti - Jalakandampuram Road.';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    const setOg = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    setOg('og:title', 'Sri Balaji Silk | ஸ்ரீ பாலாஜி சில்க்');
    setOg('og:description', description);
    setOg('og:type', 'website');
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell min-h-[100dvh] bg-background">
      <div className="grain" aria-hidden="true" />
      <div className="bg-primary px-5 py-2 text-center text-[10px] font-semibold tracking-[.15em] text-primary-foreground sm:text-[11px]">
        A LOCAL CLOTHING DESTINATION · PAPPAMPADI, TAMIL NADU
      </div>

      <header className="relative z-20 border-b border-foreground/10 bg-background/95">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3" aria-label="Sri Balaji Silk home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 text-[17px] text-accent" aria-hidden="true">
              ஸ்ரீ
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-bold tracking-[.01em]">Sri Balaji Silk</span>
              <span className="mt-1 block text-[11px] tracking-[.06em] text-muted-foreground">ஸ்ரீ பாலாஜி சில்க்</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 text-[12px] font-semibold text-foreground/75 md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#collections">Collections</a>
            <a className="nav-link" href="#kind-words">Kind words</a>
            <a className="nav-link" href="#visit">Find us</a>
          </nav>

          <a
            href={phoneUrl}
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-3 text-[12px] font-bold text-accent-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            <Phone size={14} strokeWidth={2.2} aria-hidden="true" />
            Call the store
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary md:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-border bg-background px-5 pb-5 pt-2 shadow-lg md:hidden" aria-label="Mobile navigation">
            {[
              ['Collections', '#collections'],
              ['Kind words', '#kind-words'],
              ['Find us', '#visit'],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-secondary">
                {label}
              </a>
            ))}
            <a href={phoneUrl} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-bold text-accent-foreground">
              <Phone size={15} aria-hidden="true" /> Call the store
            </a>
          </nav>
        )}
      </header>

      <section id="home" className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[1.03fr_.97fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="relative z-10 max-w-[630px]">
          <p className="eyebrow reveal text-accent">A place for every generation</p>
          <h1 className="display-font reveal reveal-delay-1 mt-5 text-[clamp(3.25rem,8vw,6.8rem)] leading-[.99] tracking-[-.055em] text-primary">
            Good clothes.
            <br />
            <span className="italic text-accent">Good people.</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-[450px] text-base leading-7 text-foreground/75 sm:text-[17px] sm:leading-8">
            A friendly stop in Pappampadi for the whole family. Come explore clothing for women, men and kids, with helpful people ready to make choosing easier.
          </p>
          <div className="reveal reveal-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-primary px-6 text-[13px] font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
              Get directions <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a href={phoneUrl} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-foreground/20 px-5 text-[13px] font-bold transition-colors hover:bg-secondary">
              <Phone size={14} aria-hidden="true" /> +91 99524 57408
            </a>
          </div>
          <a href="#collections" className="mt-12 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.16em] text-muted-foreground transition-colors hover:text-accent">
            Take a look <ArrowDown size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="relative mx-auto w-[calc(100%-14px)] max-w-[610px] lg:ml-auto lg:mr-3">
          <div className="textile-frame">
            <div className="absolute -left-5 -top-5 z-10 hidden h-28 w-28 rounded-full border border-accent/55 sm:block" aria-hidden="true" />
            <img
              src={textileEditorial}
              alt="An editorial still life of richly woven indigo, ivory and vermilion textiles; illustrative fabric imagery, not a photograph of the store."
              className="hero-image aspect-[.91] w-full object-cover sm:aspect-[1.02]"
            />
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between gap-3 bg-primary/95 px-5 py-4 text-primary-foreground sm:bottom-6 sm:left-6 sm:right-6 sm:px-6 sm:py-5">
              <div>
                <p className="eyebrow text-primary-foreground/65">Here in Pappampadi</p>
                <p className="display-font mt-1 text-xl sm:text-2xl">A warm welcome awaits.</p>
              </div>
              <span className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary-foreground/40" aria-hidden="true">
                <ArrowDownRight size={17} />
              </span>
            </div>
          </div>
          <p className="mt-5 text-right text-[10px] tracking-wide text-muted-foreground">Editorial fabric image · illustrative, not the shop</p>
        </div>
      </section>

      <div className="overflow-hidden border-y border-primary/15 bg-secondary py-4 text-primary">
        <div className="marquee flex w-max items-center gap-6 whitespace-nowrap" aria-hidden="true">
          {Array.from({ length: 4 }, (_, index) => (
            <span key={index} className="flex items-center gap-6">
              <span className="display-font text-[19px] italic">Made for the whole family</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="eyebrow">Women · Men · Kids</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="display-font text-[19px] italic">Pappampadi, Tamil Nadu</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>

      <section id="collections" className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[.72fr_1.28fr] md:items-end">
          <div>
            <p className="eyebrow text-accent">One stop, many stories</p>
            <h2 className="display-font mt-4 max-w-[400px] text-4xl leading-[1.08] tracking-[-.035em] text-primary sm:text-5xl">Find something for everyone.</h2>
          </div>
          <p className="max-w-[470px] pb-1 text-[15px] leading-7 text-muted-foreground md:ml-auto">
            Whether you’re choosing for yourself or bringing the family along, there’s room to browse and a helpful team to ask.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {[
            { number: '01', title: 'Women', tamil: 'பெண்கள்', detail: 'A thoughtful browse, with friendly help close by.' },
            { number: '02', title: 'Men', tamil: 'ஆண்கள்', detail: 'Take your time finding what feels right.' },
            { number: '03', title: 'Kids', tamil: 'குழந்தைகள்', detail: 'Bring the little ones along and look together.' },
          ].map((item, index) => (
            <article key={item.title} className={`relative min-h-[240px] overflow-hidden border border-border bg-card p-6 sm:min-h-[280px] sm:p-8 ${index === 1 ? 'sm:mt-8' : ''}`}>
              <span className="eyebrow text-accent">{item.number} / COLLECTION</span>
              <div className="mt-9">
                <div>
                  <h3 className="display-font text-4xl tracking-[-.03em] text-primary">{item.title}</h3>
                  <p lang="ta" className="mt-1 text-sm text-muted-foreground">{item.tamil}</p>
                </div>
              </div>
              <p className="mt-5 max-w-[245px] text-sm leading-6 text-muted-foreground">{item.detail}</p>
              <span className="absolute -bottom-8 -right-3 display-font text-[130px] leading-none text-primary/[.035]" aria-hidden="true">{item.number}</span>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 border-l-2 border-accent py-1 pl-5 sm:flex-row sm:items-center sm:justify-between sm:pl-7">
          <p className="max-w-[700px] text-sm leading-6 text-muted-foreground">
            A reviewer describes three organized floors, clothing for the family and branded clothes. Selection can vary in store.
          </p>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-[12px] font-bold text-primary hover:text-accent">
            Plan a visit <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:items-center lg:px-12">
          <div>
            <p className="eyebrow text-primary-foreground/60">What shoppers notice</p>
            <h2 className="display-font mt-4 text-4xl leading-tight tracking-[-.035em] sm:text-5xl">Good value.<br /><span className="italic text-[#e8b06f]">Kind service.</span></h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border-t border-primary-foreground/25 pt-5">
              <p className="display-font text-[22px] leading-snug">“Good quality, and nice service”</p>
              <p className="eyebrow mt-5 text-primary-foreground/55">Google review</p>
            </div>
            <div className="border-t border-primary-foreground/25 pt-5">
              <p className="display-font text-[22px] leading-snug">“Great prices and excellent customer service”</p>
              <p className="eyebrow mt-5 text-primary-foreground/55">Google review</p>
            </div>
            <div className="border-t border-primary-foreground/25 pt-5 sm:col-span-2">
              <p className="display-font text-[22px] leading-snug">“Price are reasonable and friendly staffs”</p>
              <p className="eyebrow mt-5 text-primary-foreground/55">Google review · quoted as written</p>
            </div>
          </div>
        </div>
      </section>

      <section id="kind-words" className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div>
            <p className="eyebrow text-accent">From the Google listing</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="display-font text-[72px] leading-none tracking-[-.06em] text-primary">4.5</span>
              <div>
                <div className="flex gap-1 text-accent" aria-label="Rated 4.5 out of 5 on Google">
                  {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />)}
                </div>
                <p className="mt-2 text-xs font-semibold text-muted-foreground">Google rating · 67 reviews</p>
              </div>
            </div>
            <p className="mt-5 max-w-[310px] text-sm leading-6 text-muted-foreground">
              The listed rating and review count are from the supplied Google business listing.
            </p>
          </div>
          <blockquote className="review-quote ml-2 border-t border-border pt-8 md:ml-10 md:pl-8">
            <p className="display-font relative z-10 max-w-[650px] text-[25px] leading-[1.45] tracking-[-.02em] text-primary sm:text-[32px]">
              The helpful welcome is what turns a quick browse into a comfortable family visit.
            </p>
            <footer className="eyebrow mt-6 text-muted-foreground">A local feeling, reflected in customer feedback</footer>
          </blockquote>
        </div>
      </section>

      <section id="visit" className="bg-secondary">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1.08fr_.92fr] md:items-center lg:px-12">
          <div>
            <p className="eyebrow text-accent">Come by when it suits you</p>
            <h2 className="display-font mt-4 max-w-[520px] text-4xl leading-[1.08] tracking-[-.04em] text-primary sm:text-5xl">
              Your next family browse starts here.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-5 text-[13px] font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
                <MapPin size={15} aria-hidden="true" /> Get directions <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-primary/25 px-5 text-[13px] font-bold text-primary transition-colors hover:bg-background">
                <Instagram size={15} aria-hidden="true" /> Instagram <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-6 md:ml-10 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-accent"><MapPin size={17} aria-hidden="true" /></span>
              <p className="eyebrow text-primary">Visit us in Pappampadi</p>
            </div>
            <address className="max-w-[410px] not-italic text-[16px] leading-7 text-primary/80">{address}</address>
            <a href={phoneUrl} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent">
              <Phone size={15} aria-hidden="true" /> +91 99524 57408
            </a>
            <p className="mt-5 border-t border-primary/15 pt-4 text-[12px] leading-5 text-muted-foreground">
              The supplied listing notes a closing time of 9:30 pm. Please check with the store for current hours.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-primary px-5 py-7 text-primary-foreground sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold">Sri Balaji Silk <span className="mx-1 text-primary-foreground/40">/</span> ஸ்ரீ பாலாஜி சில்க்</p>
            <p className="mt-1 text-[11px] text-primary-foreground/60">A friendly clothing destination in Pappampadi, Tamil Nadu.</p>
          </div>
          <div className="flex items-center gap-5 text-[11px] font-semibold text-primary-foreground/75">
            <a href={phoneUrl} className="transition-colors hover:text-primary-foreground">Call</a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary-foreground">Directions</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary-foreground">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
