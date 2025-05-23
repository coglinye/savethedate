import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';

// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import CreateEventPage from './pages/dashboard/CreateEventPage';
import EventDetailsPage from './pages/dashboard/EventDetailsPage';
import GuestListPage from './pages/dashboard/GuestListPage';
import GiftRegistryPage from './pages/dashboard/GiftRegistryPage';
import PhotoGalleryPage from './pages/dashboard/PhotoGalleryPage';
import PublicEventPage from './pages/public/PublicEventPage';
import RsvpPage from './pages/public/RsvpPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Toaster position="top-right" />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="forgot-password" element={<ForgotPasswordPage />} />
              <Route path="events/:eventId" element={<PublicEventPage />} />
              <Route path="rsvp/:invitationId" element={<RsvpPage />} />
            </Route>
            
            {/* Protected dashboard routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="create-event" element={<CreateEventPage />} />
              <Route path="events/:eventId" element={<EventDetailsPage />} />
              <Route path="events/:eventId/guests" element={<GuestListPage />} />
              <Route path="events/:eventId/gifts" element={<GiftRegistryPage />} />
              <Route path="events/:eventId/photos" element={<PhotoGalleryPage />} />
            </Route>
            
            {/* 404 route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;