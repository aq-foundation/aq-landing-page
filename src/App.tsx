import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
// import { TeamPage } from './pages/TeamPage';
import { EndowmentPage } from './pages/EndowmentPage';
import { MusicPage } from './pages/MusicPage';
import { AASPage } from './pages/AASPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { VMFPage } from './pages/VMFPage';
import { VMFTeamPage } from './pages/VMFTeamPage';
import { DNAPage } from './pages/DNAPage';
import { QaraBazarPage } from './pages/QaraBazarPage';
import { NetworkingPage } from './pages/NetworkingPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/team" component={AboutPage} />
          <Route path="/endowment" component={EndowmentPage} />
          <Route path="/music" component={MusicPage} />
          <Route path="/aas" component={AASPage} />
          <Route path="/aas/events/:id" component={EventDetailPage} />
          <Route path="/vmf" component={VMFPage} />
          <Route path="/vmf/team" component={VMFTeamPage} />
          <Route path="/dna" component={DNAPage} />
          <Route path="/qara-bazar" component={QaraBazarPage} />
          <Route path="/networking" component={NetworkingPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
