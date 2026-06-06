import { useState, useEffect, useRef } from 'react';
import './index.css';
import { heroImage } from './heroBase64';

/* ─── FAMILY ILLUSTRATED SVG ─────────────────────────── */
function FamilyIllustration() {
  return (
    <svg
      viewBox="0 0 480 340"
      xmlns="http://www.w3.org/2000/svg"
      className="family-svg"
      role="img"
      aria-label="Illustrated family with baby"
    >
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="60%" r="70%">
          <stop offset="0%" stopColor="#fde8d0"/>
          <stop offset="100%" stopColor="#f5ede0"/>
        </radialGradient>
        <radialGradient id="glowBaby" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe8d6" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#ffe8d6" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="480" height="340" fill="url(#bgGrad)" />

      {/* Soft floor shadow */}
      <ellipse cx="240" cy="315" rx="160" ry="14" fill="#e8c8a0" opacity="0.25"/>

      {/* Ambient floating shapes */}
      <circle cx="50" cy="55" r="22" fill="#fcd9b8" opacity="0.3">
        <animate attributeName="cy" values="55;42;55" dur="5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="430" cy="70" r="16" fill="#bfdbfe" opacity="0.3">
        <animate attributeName="cy" values="70;58;70" dur="4.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="420" cy="260" r="12" fill="#fcd9b8" opacity="0.25">
        <animate attributeName="cy" values="260;250;260" dur="3.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="55" cy="240" r="10" fill="#bfdbfe" opacity="0.25">
        <animate attributeName="cy" values="240;230;240" dur="4.5s" repeatCount="indefinite"/>
      </circle>

      {/* Sparkle stars */}
      <g>
        <text x="68" y="130" fontSize="14" fill="#f0b87a" opacity="0.7">✦</text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="2.4s" repeatCount="indefinite"/>
      </g>
      <g>
        <text x="388" y="120" fontSize="10" fill="#93c5fd" opacity="0.7">✦</text>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="3.1s" repeatCount="indefinite"/>
      </g>
      <g>
        <text x="100" y="280" fontSize="8" fill="#f0b87a" opacity="0.5">✦</text>
      </g>
      <g>
        <text x="360" y="290" fontSize="10" fill="#93c5fd" opacity="0.5">✦</text>
      </g>

      {/* ══════════════════════════════════
          MOM — left side, facing slightly right
          ══════════════════════════════════ */}

      {/* Mom shadow */}
      <ellipse cx="148" cy="316" rx="44" ry="8" fill="#c9a882" opacity="0.2"/>

      {/* Mom lower body / skirt */}
      <path d="M108 240 Q112 310 148 318 Q184 310 188 240 Z" fill="#7ecac2"/>
      {/* Mom torso */}
      <rect x="116" y="178" width="64" height="70" rx="18" fill="#f4956a"/>
      {/* Mom blouse collar accent */}
      <path d="M148 178 L136 198 L148 210 L160 198 Z" fill="#e07a54"/>

      {/* Mom left arm — wrapping around baby */}
      <path d="M116 200 Q88 220 90 255 Q92 270 108 272" stroke="#f9c49a" strokeWidth="22" fill="none" strokeLinecap="round"/>
      {/* Mom left hand */}
      <circle cx="108" cy="272" r="13" fill="#f9c49a"/>
      <circle cx="96" cy="267" r="8" fill="#f9c49a"/>
      <circle cx="102" cy="278" r="7" fill="#f9c49a"/>

      {/* Mom right arm — reaching toward baby */}
      <path d="M180 210 Q210 218 218 240" stroke="#f9c49a" strokeWidth="20" fill="none" strokeLinecap="round"/>

      {/* Mom neck */}
      <rect x="138" y="155" width="20" height="26" rx="8" fill="#f9c49a"/>

      {/* Mom head */}
      <ellipse cx="148" cy="128" rx="34" ry="36" fill="#f9c49a"/>

      {/* Mom long hair — back layer */}
      <path d="M114 115 Q108 160 112 210 Q130 230 148 228 Q166 230 184 210 Q188 160 182 115 Q164 100 148 98 Q132 100 114 115Z" fill="#2d1b0e" opacity="0.9"/>
      {/* Mom face shape overlay (skin) */}
      <ellipse cx="148" cy="132" rx="30" ry="32" fill="#f9c49a"/>
      {/* Mom hair top */}
      <path d="M118 110 Q130 90 148 86 Q166 90 178 110 Q172 104 148 102 Q124 104 118 110Z" fill="#2d1b0e"/>
      {/* Mom hair side strands */}
      <path d="M118 115 Q112 140 114 175" stroke="#2d1b0e" strokeWidth="10" fill="none" strokeLinecap="round"/>
      <path d="M178 115 Q184 140 182 175" stroke="#2d1b0e" strokeWidth="10" fill="none" strokeLinecap="round"/>

      {/* Mom eyebrows */}
      <path d="M134 118 Q140 114 146 116" stroke="#2d1b0e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M150 116 Q156 114 162 118" stroke="#2d1b0e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Mom eyes */}
      <ellipse cx="140" cy="126" rx="5.5" ry="6" fill="#fff"/>
      <ellipse cx="156" cy="126" rx="5.5" ry="6" fill="#fff"/>
      <circle cx="141" cy="127" r="3.5" fill="#3d200e"/>
      <circle cx="157" cy="127" r="3.5" fill="#3d200e"/>
      <circle cx="142" cy="125.5" r="1.2" fill="#fff"/>
      <circle cx="158" cy="125.5" r="1.2" fill="#fff"/>
      {/* Mom eyelashes top */}
      <path d="M135 121 Q138 118 140 120" stroke="#2d1b0e" strokeWidth="1.2" fill="none"/>
      <path d="M151 120 Q153 118 156 121" stroke="#2d1b0e" strokeWidth="1.2" fill="none"/>
      {/* Mom nose */}
      <path d="M145 134 Q148 138 151 134" stroke="#d4845a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Mom mouth — warm smile */}
      <path d="M138 145 Q148 154 158 145" stroke="#d4845a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M139 146 Q148 150 157 146" stroke="#f5a88a" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Mom cheeks */}
      <ellipse cx="130" cy="140" rx="8" ry="5" fill="#f09070" opacity="0.35"/>
      <ellipse cx="166" cy="140" rx="8" ry="5" fill="#f09070" opacity="0.35"/>

      {/* Mom earring */}
      <circle cx="114" cy="135" r="4" fill="#f9c49a"/>
      <circle cx="114" cy="142" r="3" fill="#f0b87a"/>


      {/* ══════════════════════════════════
          DAD — right side, facing slightly left
          ══════════════════════════════════ */}

      {/* Dad shadow */}
      <ellipse cx="332" cy="316" rx="46" ry="8" fill="#c9a882" opacity="0.2"/>

      {/* Dad lower body / trousers */}
      <path d="M288 245 Q290 312 332 318 Q374 312 376 245 Z" fill="#3a5068"/>
      {/* Dad torso — shirt */}
      <rect x="296" y="175" width="72" height="78" rx="20" fill="#5b8db8"/>
      {/* Dad shirt collar */}
      <path d="M332 175 L318 196 L332 206 L346 196 Z" fill="#4a7aa0"/>
      {/* Dad shirt button strip */}
      <rect x="329" y="178" width="6" height="72" rx="2" fill="#4a7aa0"/>

      {/* Dad right arm — wrapping around */}
      <path d="M368 205 Q396 222 394 258 Q392 272 374 274" stroke="#e8b888" strokeWidth="24" fill="none" strokeLinecap="round"/>
      {/* Dad right hand */}
      <circle cx="374" cy="274" r="14" fill="#e8b888"/>
      <circle cx="386" cy="268" r="9" fill="#e8b888"/>
      <circle cx="380" cy="280" r="8" fill="#e8b888"/>

      {/* Dad left arm — toward baby */}
      <path d="M296 215 Q266 222 258 244" stroke="#e8b888" strokeWidth="22" fill="none" strokeLinecap="round"/>

      {/* Dad neck */}
      <rect x="322" y="152" width="20" height="26" rx="8" fill="#e8b888"/>

      {/* Dad head */}
      <ellipse cx="332" cy="122" rx="36" ry="38" fill="#e8b888"/>

      {/* Dad hair — short, modern */}
      <path d="M296 112 Q300 82 332 76 Q364 82 368 112 Q360 96 332 94 Q304 96 296 112Z" fill="#1e120a"/>
      <path d="M296 114 Q294 125 297 132" stroke="#1e120a" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M368 114 Q370 125 367 132" stroke="#1e120a" strokeWidth="6" fill="none" strokeLinecap="round"/>
      {/* Hair fade sides */}
      <path d="M296 112 Q296 130 300 140" stroke="#1e120a" strokeWidth="3" fill="none" opacity="0.6"/>
      <path d="M368 112 Q368 130 364 140" stroke="#1e120a" strokeWidth="3" fill="none" opacity="0.6"/>

      {/* Dad eyebrows — thicker */}
      <path d="M316 110 Q323 106 330 108" stroke="#1e120a" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M334 108 Q341 106 348 110" stroke="#1e120a" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Dad eyes */}
      <ellipse cx="324" cy="119" rx="5.5" ry="6" fill="#fff"/>
      <ellipse cx="340" cy="119" rx="5.5" ry="6" fill="#fff"/>
      <circle cx="325" cy="120" r="3.8" fill="#2e1806"/>
      <circle cx="341" cy="120" r="3.8" fill="#2e1806"/>
      <circle cx="326" cy="118.5" r="1.3" fill="#fff"/>
      <circle cx="342" cy="118.5" r="1.3" fill="#fff"/>
      {/* Dad nose */}
      <path d="M329 130 Q332 135 335 130" stroke="#c0926a" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      {/* Dad mouth — relaxed smile */}
      <path d="M320 141 Q332 150 344 141" stroke="#b8744a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Dad slight stubble hint */}
      <ellipse cx="332" cy="148" rx="16" ry="5" fill="#c9956e" opacity="0.15"/>
      {/* Dad cheeks */}
      <ellipse cx="312" cy="134" rx="9" ry="5.5" fill="#d09060" opacity="0.25"/>
      <ellipse cx="352" cy="134" rx="9" ry="5.5" fill="#d09060" opacity="0.25"/>


      {/* ══════════════════════════════════
          BABY — center, gently floating
          ══════════════════════════════════ */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="2.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>

        {/* Baby glow */}
        <ellipse cx="240" cy="242" rx="52" ry="52" fill="url(#glowBaby)" opacity="0.5"/>

        {/* Baby swaddle wrap */}
        <path d="M200 245 Q202 298 240 302 Q278 298 280 245 Q268 270 240 272 Q212 270 200 245Z" fill="#fde8d6"/>
        {/* Swaddle body */}
        <ellipse cx="240" cy="252" rx="40" ry="38" fill="#fff4ee"/>
        {/* Swaddle crease */}
        <path d="M210 248 Q225 265 240 268 Q255 265 270 248" stroke="#f5d0bc" strokeWidth="2" fill="none"/>
        {/* Swaddle top fold */}
        <path d="M208 240 Q224 235 240 236 Q256 235 272 240 Q258 248 240 250 Q222 248 208 240Z" fill="#fde0cc"/>

        {/* Baby tiny hands peeking out */}
        <circle cx="202" cy="258" r="11" fill="#fcd9c0"/>
        <circle cx="192" cy="252" r="8" fill="#fcd9c0"/>
        <circle cx="193" cy="264" r="7" fill="#fcd9c0"/>

        <circle cx="278" cy="258" r="11" fill="#fcd9c0"/>
        <circle cx="288" cy="252" r="8" fill="#fcd9c0"/>
        <circle cx="287" cy="264" r="7" fill="#fcd9c0"/>

        {/* Baby neck */}
        <rect x="230" y="196" width="20" height="18" rx="7" fill="#fcd9c0"/>

        {/* Baby head */}
        <circle cx="240" cy="178" r="36" fill="#fcd9c0"/>

        {/* Baby hair — few tiny wisps */}
        <path d="M225 148 Q235 140 245 143" stroke="#c09060" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <path d="M240 143 Q248 138 255 142" stroke="#c09060" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

        {/* Baby eyebrows — soft tiny */}
        <path d="M226 166 Q230 163 234 165" stroke="#c09060" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M246 165 Q250 163 254 166" stroke="#c09060" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

        {/* Baby eyes — happy squint / closed curve */}
        <path d="M224 174 Q230 169 236 174" stroke="#4a2c10" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M244 174 Q250 169 256 174" stroke="#4a2c10" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Eyelash flicks */}
        <line x1="225" y1="174" x2="223" y2="171" stroke="#4a2c10" strokeWidth="1.2"/>
        <line x1="236" y1="174" x2="238" y2="171" stroke="#4a2c10" strokeWidth="1.2"/>
        <line x1="245" y1="174" x2="243" y2="171" stroke="#4a2c10" strokeWidth="1.2"/>
        <line x1="256" y1="174" x2="258" y2="171" stroke="#4a2c10" strokeWidth="1.2"/>

        {/* Baby nose — tiny dot */}
        <ellipse cx="240" cy="184" rx="3" ry="2.5" fill="#e8a880" opacity="0.7"/>

        {/* Baby mouth — happy open smile */}
        <path d="M231 193 Q240 202 249 193" stroke="#d0785a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M232 193 Q240 198 248 193" fill="#f0a080" opacity="0.5"/>

        {/* Baby cheeks — very rosy */}
        <ellipse cx="220" cy="188" rx="10" ry="7" fill="#f0907a" opacity="0.45"/>
        <ellipse cx="260" cy="188" rx="10" ry="7" fill="#f0907a" opacity="0.45"/>
      </g>

      {/* ══════════════════════════════════
          Floating hearts & decorations
          ══════════════════════════════════ */}

      {/* Big heart above baby */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-10;0,0" dur="2.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
        <path d="M240 128 C240 128 232 118 224 118 C216 118 210 124 210 132 C210 146 240 164 240 164 C240 164 270 146 270 132 C270 124 264 118 256 118 C248 118 240 128 240 128Z" fill="#ff8a80" opacity="0.85"/>
        {/* Heart shine */}
        <ellipse cx="228" cy="124" rx="5" ry="3" fill="#fff" opacity="0.4" transform="rotate(-30 228 124)"/>
      </g>

      {/* Small hearts floating */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;-4,-12;0,0" dur="3s" repeatCount="indefinite"/>
        <path d="M160 100 C160 100 156 95 152 95 C148 95 146 98 146 101 C146 107 160 114 160 114 C160 114 174 107 174 101 C174 98 172 95 168 95 C164 95 160 100 160 100Z" fill="#ffb3ae" opacity="0.6"/>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0;5,-10;0,0" dur="2.6s" repeatCount="indefinite"/>
        <path d="M320 94 C320 94 317 90 314 90 C311 90 309 93 309 95 C309 100 320 106 320 106 C320 106 331 100 331 95 C331 93 329 90 326 90 C323 90 320 94 320 94Z" fill="#ffb3ae" opacity="0.55"/>
      </g>

      {/* Tiny decorative dots trail */}
      <circle cx="180" cy="74" r="3" fill="#f0b87a" opacity="0.5"/>
      <circle cx="196" cy="66" r="2" fill="#f0b87a" opacity="0.35"/>
      <circle cx="300" cy="70" r="3" fill="#93c5fd" opacity="0.5"/>
      <circle cx="284" cy="62" r="2" fill="#93c5fd" opacity="0.35"/>
    </svg>
  );
}

/* ─── PHONE MOCKUP SVG ────────────────────────────────── */
function PhoneMockup() {
  return (
    <svg
      viewBox="0 0 200 380"
      xmlns="http://www.w3.org/2000/svg"
      className="phone-mockup"
      role="img"
      aria-label="FABY app mockup"
    >
      {/* Phone body */}
      <rect x="10" y="10" width="180" height="360" rx="24" ry="24" fill="#ffffff" />
      <rect x="14" y="14" width="172" height="352" rx="21" ry="21" fill="#f8fffe" />

      {/* Notch */}
      <rect x="70" y="18" width="60" height="14" rx="7" fill="#e0e0e0" />

      {/* Screen content */}
      {/* Header bar */}
      <rect x="20" y="42" width="160" height="30" rx="6" fill="#e8f5f4" />
      <text x="32" y="62" fontSize="9" fill="#2563eb" fontFamily="sans-serif" fontWeight="bold">FABY</text>
      <circle cx="168" cy="57" r="8" fill="#2563eb" />

      {/* Growth chart */}
      <rect x="20" y="82" width="160" height="80" rx="8" fill="#f0fafa" />
      <text x="30" y="97" fontSize="7" fill="#6b7280" fontFamily="sans-serif">Growth Tracking</text>
      {/* Chart bars */}
      <rect x="35" y="120" width="14" height="28" rx="3" fill="#bfdbfe" />
      <rect x="56" y="112" width="14" height="36" rx="3" fill="#93c5fd" />
      <rect x="77" y="105" width="14" height="43" rx="3" fill="#60a5fa" />
      <rect x="98" y="100" width="14" height="48" rx="3" fill="#3b82f6" />
      <rect x="119" y="95" width="14" height="53" rx="3" fill="#2563eb" />
      <rect x="140" y="108" width="14" height="40" rx="3" fill="#60a5fa" />
      {/* Line over bars */}
      <polyline points="42,118 63,110 84,103 105,98 126,93 147,106" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Dots */}
      <circle cx="42" cy="118" r="2.5" fill="#2563eb"/>
      <circle cx="63" cy="110" r="2.5" fill="#2563eb"/>
      <circle cx="84" cy="103" r="2.5" fill="#2563eb"/>
      <circle cx="105" cy="98" r="2.5" fill="#2563eb"/>
      <circle cx="126" cy="93" r="2.5" fill="#2563eb"/>
      <circle cx="147" cy="106" r="2.5" fill="#2563eb"/>

      {/* Stats row */}
      <rect x="20" y="172" width="74" height="42" rx="8" fill="#e8f5f4" />
      <text x="30" y="188" fontSize="6" fill="#6b7280" fontFamily="sans-serif">Height</text>
      <text x="30" y="203" fontSize="10" fill="#2563eb" fontFamily="sans-serif" fontWeight="bold">72 cm</text>

      <rect x="106" y="172" width="74" height="42" rx="8" fill="#fff3e0" />
      <text x="116" y="188" fontSize="6" fill="#6b7280" fontFamily="sans-serif">Weight</text>
      <text x="116" y="203" fontSize="10" fill="#f57c00" fontFamily="sans-serif" fontWeight="bold">8.2 kg</text>

      {/* Vaccine card */}
      <rect x="20" y="224" width="160" height="48" rx="8" fill="#f3e5f5" />
      <text x="30" y="240" fontSize="7" fill="#7b1fa2" fontFamily="sans-serif" fontWeight="600">Next Vaccination</text>
      <text x="30" y="254" fontSize="8" fill="#4a148c" fontFamily="sans-serif">MMR — Due in 3 days</text>
      <rect x="130" y="233" width="40" height="16" rx="5" fill="#7b1fa2" />
      <text x="139" y="244" fontSize="6" fill="#fff" fontFamily="sans-serif">Remind</text>

      {/* Community row */}
      <rect x="20" y="282" width="160" height="36" rx="8" fill="#e3f2fd" />
      <text x="30" y="298" fontSize="7" fill="#1565c0" fontFamily="sans-serif" fontWeight="600">Parenting Community</text>
      <text x="30" y="308" fontSize="6" fill="#6b7280" fontFamily="sans-serif">24 new messages</text>

      {/* Bottom nav */}
      <rect x="14" y="334" width="172" height="32" rx="0" fill="#f8fffe" />
      <rect x="14" y="334" width="172" height="1" fill="#e5e7eb" />
      {/* Nav icons */}
      <circle cx="50" cy="350" r="5" fill="#2563eb" />
      <circle cx="80" cy="350" r="5" fill="#e0e0e0" />
      <circle cx="120" cy="350" r="5" fill="#e0e0e0" />
      <circle cx="150" cy="350" r="5" fill="#e0e0e0" />
    </svg>
  );
}

/* ════════════════════════════════════════
   SVG ICON COMPONENTS
════════════════════════════════════════ */
const IconSyringe = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3a1 1 0 0 1-1.4 0l-2.6-2.6a1 1 0 0 1 0-1.4L14.4 5"/>
    <path d="m9 8 4 4"/><path d="m15 3 3 3"/><path d="m2 22 3-3"/>
  </svg>
);

const IconBook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const IconTrendUp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
);

const IconActivity = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

const IconBell = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

/* ════════════════════════════════════════
   NAVBAR
════════════════════════════════════════ */
function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        <span className="navbar-logo">
          FABY
        </span>
        <ul className="navbar-links">
          <li><a href="#how-it-works" className="active">Features</a></li>
          <li><a href="#problems">Challenges</a></li>
          <li><a href="#features">About</a></li>
        </ul>
        <a href="#cta" className="btn-nav">Get Started</a>
      </div>
    </nav>
  );
}

/* ════════════════════════════════════════
   HERO
════════════════════════════════════════ */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-content anim-1">
          <h1>
            Your child's health,<br />
            <span>all in one place.</span>
          </h1>
          <p>
            FABY brings growth tracking, vaccination management, developmental
            milestones, and a trusted parenting community together in one
            simple platform — so you can focus on what matters most.
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn-blue">
              Explore Features <IconArrow />
            </a>
            <a href="#problems" className="btn-ghost">Learn More</a>
          </div>
        </div>
        <div className="hero-illustration anim-2">
          <img src={heroImage} alt="Family" className="hero-img" />
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   PROBLEM STATEMENT
════════════════════════════════════════ */
function ProblemStatement() {
  const problems = [
    {
      Icon: IconSyringe,
      wrap: 'p-icon-orange',
      title: 'Missed Vaccinations',
      desc: 'Vaccination schedules are easy to forget. Missed doses leave children vulnerable to preventable diseases — a risk no parent should face.',
    },
    {
      Icon: IconBook,
      wrap: 'p-icon-blue',
      title: 'Scattered Information',
      desc: 'Reliable childcare guidance is hard to find. Parents juggle multiple sources with no single trusted place for accurate, age-specific advice.',
    },
    {
      Icon: IconTrendUp,
      wrap: 'p-icon-indigo',
      title: 'Untracked Milestones',
      desc: 'Developmental progress often goes unmonitored. Without structured tracking, early signs of delay can be missed during critical growth windows.',
    },
  ];

  return (
    <section className="problems" id="problems">
      <div className="problems-inner">
        <div className="problems-header">
          <span className="section-label">The Problem</span>
          <h2 className="section-title">Addressing Modern Parenting Challenges</h2>
          <p className="section-sub">
            Navigating early childhood health is overwhelming. FABY provides structured
            solutions to the most common concerns faced by new parents.
          </p>
        </div>
        <div className="problem-cards">
          {problems.map(({ Icon, wrap, title, desc }, i) => (
            <div className="problem-card" key={i}>
              <div className={`p-icon-wrap ${wrap}`}>
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   FEATURES
════════════════════════════════════════ */
function Features() {
  const features = [
    {
      Icon: IconActivity,
      title: 'Growth & Milestone Tracking',
      desc: 'Monitor height, weight, and head circumference against WHO standards. Record physical, cognitive, and emotional milestones with visual progress charts.',
    },
    {
      Icon: IconBell,
      title: 'Smart Vaccination Management',
      desc: 'Personalized vaccination schedules with timely reminders. Store complete immunization history in one easily accessible digital health record.',
    },
    {
      Icon: IconUsers,
      title: 'Parenting Community',
      desc: 'Connect with other parents. Share experiences, ask questions, and find support in a safe, moderated environment.',
    },
    {
      Icon: IconUser,
      title: 'Child Health Profiles',
      desc: 'Each child gets a dedicated digital profile — growth records, developmental milestones, and vaccination history all in one organized place.',
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features-inner">
        <div className="features-header">
          <span className="section-label">Features</span>
          <h2 className="section-title">Comprehensive Care Tools</h2>
          <p className="section-sub" style={{marginLeft:0}}>
            Everything you need to confidently manage your child's health and development — built around how real parents think and care.
          </p>
        </div>
        <div className="features-grid">
          <div className="features-list">
            {features.map(({ Icon, title, desc }, i) => (
              <div className="feature-item" key={i}>
                <div className="f-icon-wrap">
                  <Icon />
                </div>
                <div className="feature-text">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="phone-card">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   APP STORE ICONS
════════════════════════════════════════ */
const IconApple = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 11.125c-.031-2.438 1.969-3.625 2.063-3.688-1.125-1.656-2.875-1.875-3.531-1.906-1.5-.156-2.938.906-3.719.906-.75 0-1.938-.875-3.188-.844-1.625.031-3.156.938-4 2.406-1.719 2.969-.438 7.375 1.219 9.813.844 1.188 1.813 2.531 3.094 2.469 1.25-.063 1.719-.813 3.25-.813 1.5 0 1.938.813 3.25.844 1.344.031 2.188-1.219 3.031-2.438.969-1.406 1.375-2.75 1.406-2.813-.031-.031-2.844-1.125-2.875-3.938zM14.938 6.781c.688-.844 1.125-2.031 1-3.219-1.031.031-2.281.688-3 1.563-.563.688-1.094 1.906-.938 3.094 1.156.094 2.313-.563 2.938-1.438z"/>
  </svg>
);

/* ════════════════════════════════════════
   CTA
════════════════════════════════════════ */
function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="cta-inner">
        <h2>Get FABY on Your Phone</h2>
        <p>
          Join thousands of parents using FABY to track, manage, and celebrate
          their child's early years. Available exclusively on iOS.
        </p>
        <div className="cta-buttons">
          <a href="#" className="btn-store">
            <IconApple />
            <div className="btn-store-text">
              <span>Download on the</span>
              <strong>App Store</strong>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   FOOTER
════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner" style={{ justifyContent: 'center', textAlign: 'center' }}>
        <div className="footer-left">
          <div className="footer-logo" style={{ justifyContent: 'center' }}>
            FABY
          </div>
          <p>© 2024 FABY Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════
   APP INTERFACE SECTION — SVG icons
════════════════════════════════════════ */
const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
    <path d="M9 21V12h6v9"/>
  </svg>
);
const IconGrowth = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);
const IconMilestone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconVaccine = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4M12 2v4M16 2v4M2 8h20M5 8v12a1 1 0 001 1h12a1 1 0 001-1V8"/>
    <line x1="10" y1="13" x2="14" y2="13"/>
    <line x1="12" y1="11" x2="12" y2="15"/>
  </svg>
);
const IconExport = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
);
const IconCommunity = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
const IconChevron = ({ dir }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {dir === 'left'
      ? <polyline points="15 18 9 12 15 6"/>
      : <polyline points="9 18 15 12 9 6"/>
    }
  </svg>
);

function AppInterface() {
  const [activeImg, setActiveImg] = useState(0);
  const timerRef = useRef(null);

  const screens = [
    { src: '/home.png',      label: 'Home Dashboard',       Icon: IconHome,      desc: 'Get a quick overview of upcoming vaccinations, recent milestones, and daily tips tailored to your child\'s age.' },
    { src: '/GrowTrack.png', label: 'Growth Tracker',        Icon: IconGrowth,    desc: 'Visualize height and weight against WHO standards with beautiful charts and a comprehensive digital record.' },
    { src: '/mile.png',      label: 'Milestone Tracking',    Icon: IconMilestone, desc: 'Log and celebrate every developmental milestone — physical, cognitive, and emotional — in one place.' },
    { src: '/Vacci.png',     label: 'Vaccination Schedule',  Icon: IconVaccine,   desc: 'Never miss a dose. Automated schedules and reminders for all essential childhood immunizations.' },
    { src: '/export.png',    label: 'Export & Share',        Icon: IconExport,    desc: 'Share your child\'s health summary with doctors or family in a clean, exportable format.' },
    { src: '/Talk.png',      label: 'Parenting Community',   Icon: IconCommunity, desc: 'Connect with verified parents. Ask questions, share experiences, find support.' },
  ];

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveImg(prev => (prev + 1) % screens.length);
    }, 2800);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    setActiveImg(i);
    startTimer(); // reset timer on manual interaction
  };

  const prev = () => goTo((activeImg - 1 + screens.length) % screens.length);
  const next = () => goTo((activeImg + 1) % screens.length);

  return (
    <section className="app-interface" id="how-it-works">
      <div className="app-interface-inner">
        {/* Left Column */}
        <div className="app-interface-left">
          <span className="section-label">App Walkthrough</span>
          <h2 className="section-title">See FABY in Action</h2>
          <p className="interface-intro">
            Everything you need to confidently manage your child's health and
            development — built around how real parents think and care.
          </p>

          <div className="interface-feature-list">
            {screens.map((item, i) => {
              const FeatureIcon = item.Icon;
              return (
                <div
                  key={i}
                  className={`interface-feature-item ${activeImg === i ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                >
                  <div className="feature-icon-wrap">
                    <FeatureIcon />
                  </div>
                  <div className="feature-text">
                    <strong>{item.label}</strong>
                    {activeImg === i && <p>{item.desc}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
        <div className="app-interface-right">
          <div className="phone-showcase-card">
            {/* Nav arrows */}
            <button className="showcase-arrow left" onClick={prev} aria-label="Previous screen"><IconChevron dir="left"/></button>
            <button className="showcase-arrow right" onClick={next} aria-label="Next screen"><IconChevron dir="right"/></button>

            <div className="phone-showcase-frame">
              {screens.map((item, i) => (
                <img
                  key={i}
                  src={item.src}
                  alt={item.label}
                  className={`showcase-screen ${activeImg === i ? 'visible' : ''}`}
                />
              ))}
            </div>

            <div className="showcase-dots">
              {screens.map((_, i) => (
                <button
                  key={i}
                  className={`showcase-dot ${activeImg === i ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Screen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   ROOT APP
════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <Features />
        <AppInterface />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
