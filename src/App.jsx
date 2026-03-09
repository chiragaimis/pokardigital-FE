import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load service pages
const SocialMedia = lazy(() => import('./pages/services/SocialMedia'));
const VideoEditing = lazy(() => import('./pages/services/VideoEditing'));
const WebsiteDev = lazy(() => import('./pages/services/WebsiteDev'));
const SoftwareDev = lazy(() => import('./pages/services/SoftwareDev'));
const BotDev = lazy(() => import('./pages/services/BotDev'));
const Automation = lazy(() => import('./pages/services/Automation'));
const GraphicDesign = lazy(() => import('./pages/services/GraphicDesign'));

// Loading component
const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-dark">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

// 404 Page
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-dark text-center px-4">
    <div>
      <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
      <a href="/" className="btn-primary inline-block">
        Go Home
      </a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            
            {/* Service Routes */}
            <Route path="services/social-media" element={<SocialMedia />} />
            <Route path="services/social-management" element={<SocialMedia />} />
            <Route path="services/video-editing" element={<VideoEditing />} />
            <Route path="services/web-development" element={<WebsiteDev />} />
            <Route path="services/software-development" element={<SoftwareDev />} />
            <Route path="services/bot-development" element={<BotDev />} />
            <Route path="services/automation" element={<Automation />} />
            <Route path="services/graphic-design" element={<GraphicDesign />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
