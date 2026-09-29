import React, { useState } from 'react';
import { CheckCircle2, Smartphone, Bell, Zap, Shield, Database, Home, Grid, User, ArrowRight, Star } from 'lucide-react';

export const AndroidSection = () => {
  const [activeScreen, setActiveScreen] = useState('home'); // home, services, notify, profile
  const [notificationOpen, setNotificationOpen] = useState(true);

  const points = [
    'Custom tailored UI/UX designed specifically for mobile ergonomics',
    'High-performance native Android application development',
    'Real-time API endpoints and secure database synchronization',
    'Push notification delivery pipelines for direct customer retention',
    'Rigorous device testing and seamless Google Play Store deployment'
  ];

  return (
    <section id="android-development" data-section="android-development" className="presentation-section bg-[#F8F9FB] border-b border-[#E8EAED]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Interactive Smartphone Device Mockup (7 cols) */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center justify-center">
            
            {/* Interactive Screen Selector Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-gray-200 shadow-xs mb-4">
              {[
                { id: 'home', label: 'Home Screen' },
                { id: 'services', label: 'Service Booking' },
                { id: 'notify', label: 'Push Alert' },
                { id: 'profile', label: 'User Account' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveScreen(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeScreen === tab.id
                      ? 'bg-[#326DED] text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Smartphone Hardware Frame */}
            <div className="relative w-[300px] sm:w-[330px] rounded-[42px] bg-[#0A0A0E] p-3.5 border-4 border-gray-800 shadow-2xl space-y-3">
              
              {/* Phone Dynamic Island / Camera Punch Hole */}
              <div className="flex justify-between items-center px-4 pt-1 text-[10px] font-mono text-white">
                <span>9:41</span>
                <div className="w-16 h-3.5 bg-black rounded-full mx-auto" />
                <span>5G 100%</span>
              </div>

              {/* Dynamic Screen Viewport Container */}
              <div className="bg-white rounded-[32px] p-4 min-h-[420px] flex flex-col justify-between text-[#0A0A0E] relative overflow-hidden shadow-inner">
                
                {/* Simulated Push Notification Banner */}
                {notificationOpen && (
                  <div
                    onClick={() => setNotificationOpen(false)}
                    className="p-2.5 rounded-2xl bg-[#0A0A0E] text-white text-xs shadow-xl flex items-start gap-2.5 cursor-pointer animate-fadeIn border border-white/10 mb-2"
                  >
                    <div className="p-1.5 bg-[#326DED] rounded-xl shrink-0 mt-0.5">
                      <Bell className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <strong className="block text-[11px] text-cyan-300 font-mono">Special Exclusive Offer</strong>
                      <p className="text-[10px] text-gray-300 leading-tight">Your 20% loyalty bonus is active. Tap to open!</p>
                    </div>
                  </div>
                )}

                {/* 1: Home Screen */}
                {activeScreen === 'home' && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-gray-400 font-bold block">WELCOME BACK</span>
                        <h4 className="text-sm font-extrabold font-['Outfit']">Sarah Jenkins</h4>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#F0F7FD] flex items-center justify-center text-[#326DED] font-bold text-xs">
                        SJ
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#326DED] to-[#00D2FF] text-white space-y-1 shadow-md">
                      <span className="text-[10px] uppercase font-mono font-bold tracking-wider">Fast Service Portal</span>
                      <h5 className="text-xs font-extrabold font-['Outfit']">Instant 1-Tap Booking</h5>
                      <p className="text-[10px] opacity-90">Manage orders, sync analytics & get instant status updates.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => setActiveScreen('services')}
                        className="p-3 rounded-2xl bg-[#F8F9FB] border border-gray-100 text-left cursor-pointer hover:border-[#326DED]"
                      >
                        <Zap className="w-4 h-4 text-[#326DED] mb-1" />
                        <span className="text-[11px] font-bold block">Services</span>
                        <span className="text-[9px] text-gray-400">4 Categories</span>
                      </button>
                      <button
                        onClick={() => setActiveScreen('profile')}
                        className="p-3 rounded-2xl bg-[#F8F9FB] border border-gray-100 text-left cursor-pointer hover:border-[#326DED]"
                      >
                        <Shield className="w-4 h-4 text-[#34A75D] mb-1" />
                        <span className="text-[11px] font-bold block">Security</span>
                        <span className="text-[9px] text-gray-400">256-Bit Encrypted</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 2: Services Screen */}
                {activeScreen === 'services' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    <h4 className="text-xs font-bold font-mono text-gray-400">ALL SERVICES</h4>
                    {[
                      { name: 'Website Engineering', price: 'Sub-second', badge: 'Popular' },
                      { name: 'SEO Optimization', price: 'Page 1 Schema', badge: 'Growth' },
                      { name: 'WordPress CMS', price: 'Self Managed', badge: 'Control' },
                    ].map((srv, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between text-xs">
                        <div>
                          <strong className="block text-[11px]">{srv.name}</strong>
                          <span className="text-[9px] text-[#326DED] font-mono">{srv.price}</span>
                        </div>
                        <span className="text-[9px] bg-white px-2 py-0.5 rounded border border-gray-200 font-bold">
                          {srv.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3: Notification Screen */}
                {activeScreen === 'notify' && (
                  <div className="space-y-3 animate-fadeIn">
                    <h4 className="text-xs font-bold font-mono text-gray-400">NOTIFICATION HUB</h4>
                    <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-[#326DED]">
                        <Bell className="w-3.5 h-3.5" />
                        <span>Real-time Push Pipeline</span>
                      </div>
                      <p className="text-[10px] text-gray-600">
                        Firebase Cloud Messaging (FCM) delivers 99.8% open rates directly to user home screens.
                      </p>
                    </div>
                    <button
                      onClick={() => setNotificationOpen(true)}
                      className="w-full py-2 bg-[#326DED] text-white text-xs font-bold rounded-xl shadow-xs"
                    >
                      Trigger Test Push Alert
                    </button>
                  </div>
                )}

                {/* 4: Profile Screen */}
                {activeScreen === 'profile' && (
                  <div className="space-y-3 animate-fadeIn text-center">
                    <div className="w-12 h-12 rounded-full bg-[#326DED] text-white mx-auto flex items-center justify-center font-bold text-sm">
                      SJ
                    </div>
                    <div>
                      <h4 className="text-xs font-bold">Sarah Jenkins</h4>
                      <span className="text-[10px] text-gray-400 font-mono">Customer ID: #8430-EC</span>
                    </div>
                    <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl text-[10px] font-mono font-bold">
                      ✓ Database Synced with Edge Cloud
                    </div>
                  </div>
                )}

                {/* Bottom App Navigation Bar */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-around text-gray-400">
                  <button onClick={() => setActiveScreen('home')} className={`p-1.5 ${activeScreen === 'home' ? 'text-[#326DED]' : ''}`}>
                    <Home className="w-4 h-4" />
                  </button>
                  <button onClick={() => setActiveScreen('services')} className={`p-1.5 ${activeScreen === 'services' ? 'text-[#326DED]' : ''}`}>
                    <Grid className="w-4 h-4" />
                  </button>
                  <button onClick={() => setActiveScreen('notify')} className={`p-1.5 ${activeScreen === 'notify' ? 'text-[#326DED]' : ''}`}>
                    <Bell className="w-4 h-4" />
                  </button>
                  <button onClick={() => setActiveScreen('profile')} className={`p-1.5 ${activeScreen === 'profile' ? 'text-[#326DED]' : ''}`}>
                    <User className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 order-1 lg:order-2">
            <div>
              <div className="service-number text-[#326DED] font-black text-4xl sm:text-5xl">04</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0E] tracking-tight font-['Outfit']">
                ANDROID APP DEVELOPMENT
              </h2>
            </div>

            <p className="text-xl sm:text-2xl text-[#0F172A] leading-relaxed font-bold font-['Outfit']">
              "Take your digital experience from the browser to your customer's pocket."
            </p>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
              Mobile users expect instant, responsive, and reliable experiences. We design and develop bespoke Android applications tailored to your specific workflows, service booking pipelines, and customer loyalty models.
            </p>

            {/* Supporting Bullet Points */}
            <div className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#326DED] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-semibold text-[#0F172A]">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              {['Custom UI', 'Native Performance', 'API Synced', 'Push Notifications', 'Play Store Live'].map((tag) => (
                <span key={tag} className="tag-pill font-bold text-[#0F172A] bg-white border border-[#CBD5E1] shadow-2xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
