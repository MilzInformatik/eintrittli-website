<script setup lang="ts">
import { withBase } from 'vitepress'

const steps = [
  {
    title: 'Formular anlegen',
    text: 'Definiere die Felder, die du für deinen Anlass benötigst.',
    img: '/screenshots/formular_erstellen.png',
    alt: 'Screenshot: Formular-Builder',
    framed: true
  },
  {
    title: 'Anlass erstellen',
    text: 'Wähle ein Formular, setze den Zeitraum und erhalte automatisch einen QR-Code.',
    img: '/screenshots/anlass_erstellen.png',
    alt: 'Screenshot: Anlass erstellen',
    framed: true
  },
  {
    title: 'Teilnehmer registrieren sich',
    text: 'Teilnehmer scannen den QR-Code und füllen das Formular aus. Kein Login nötig.',
    img: '/screenshots/qr_code_anmeldung.png',
    alt: 'Screenshot: Registrierungsformular mit QR-Code und Bestätigung',
    framed: false
  },
  {
    title: 'Dashboard & CSV Export',
    text: 'Sieh neue Anmeldungen übersichtlich und exportiere alles als CSV.',
    img: '/screenshots/anmeldungen.png',
    alt: 'Screenshot: Anmeldungs-Übersicht mit CSV-Export',
    framed: true
  }
]
</script>

<template>
  <!-- How it works -->
  <section class="et-steps-section" id="so-funktioniert-es">
    <div class="et-container">
      <div class="et-section-head">
        <p class="et-eyebrow">Ablauf</p>
        <h2 class="et-section-title">So funktioniert Eintrittli</h2>
        <p class="et-section-subtitle">Von der Formularerstellung bis zur Registrierung.</p>
      </div>

      <ol class="et-steps">
        <li v-for="(step, i) in steps" :key="step.title" class="et-step" :class="{ reverse: i % 2 === 1 }">
          <div class="et-step-media">
            <div class="et-shot" :class="{ framed: step.framed }">
              <div v-if="step.framed" class="et-shot-bar" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
              <img :src="withBase(step.img)" :alt="step.alt" loading="lazy" />
            </div>
          </div>
          <div class="et-step-body">
            <span class="et-step-number">{{ i + 1 }}</span>
            <h3 class="et-step-title">{{ step.title }}</h3>
            <p class="et-step-text">{{ step.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <!-- Contact -->
  <section class="et-cta-section" id="kontakt">
    <div class="et-container">
      <div class="et-cta">
        <div class="et-cta-deco" aria-hidden="true"></div>
        <h2 class="et-cta-title">Interesse an Eintrittli?</h2>
        <p class="et-cta-subtitle">Schreib mir einfach eine E-Mail, dann helfe ich dir gerne weiter!</p>
        <a href="mailto:jannis@eintrittli.ch" class="et-btn et-btn-light">
          <svg class="et-btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" stroke-width="1.6" />
            <path d="m3 6 7 5 7-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          jannis@eintrittli.ch
        </a>
        <p class="et-cta-selfhost">
          Du kennst dich mit IT aus? Dann kannst du Eintrittli auch
          <a href="https://github.com/weborb-ch/eintrittli" target="_blank" rel="noreferrer">selbst hosten</a>.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---- Steps ---------------------------------------------------------- */

.et-steps-section {
  margin-top: 72px;
  padding: 72px 24px;
  background: var(--et-c-band);
  border-top: 1px solid var(--et-c-border);
  border-bottom: 1px solid var(--et-c-border);
  scroll-margin-top: var(--vp-nav-height);
}

.et-section-head {
  text-align: center;
}

.et-steps {
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin: 56px 0 0;
  padding: 0;
  list-style: none;
}

.et-step {
  display: flex;
  align-items: center;
  gap: 56px;
}

.et-step.reverse {
  flex-direction: row-reverse;
}

.et-step-media,
.et-step-body {
  flex: 1;
  min-width: 0;
}

.et-step-body {
  max-width: 440px;
}

.et-step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 6px 16px rgba(37, 125, 236, 0.3);
}

.et-step-title {
  margin: 16px 0 10px;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.25;
  color: var(--vp-c-text-1);
}

.et-step-text {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

/* Screenshot frame */
.et-shot img {
  display: block;
  width: 100%;
  height: auto;
}

.et-shot.framed {
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid var(--et-c-border);
  background: #fff;
  box-shadow: 0 18px 50px -20px rgba(15, 40, 80, 0.25), 0 2px 8px rgba(15, 40, 80, 0.05);
}

.et-shot-bar {
  display: flex;
  gap: 6px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--et-c-border);
  background: #F8FAFC;
}

.et-shot-bar span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #D6DEE8;
}

/* ---- CTA ------------------------------------------------------------ */

.et-cta-section {
  padding: 80px 24px 0;
  scroll-margin-top: var(--vp-nav-height);
}

.et-cta {
  position: relative;
  overflow: hidden;
  padding: 64px 32px;
  border-radius: 24px;
  text-align: center;
  color: #fff;
  background: linear-gradient(135deg, #0A55B5 0%, #257DEC 60%, #4C97F5 100%);
  box-shadow: 0 24px 60px -24px rgba(10, 85, 181, 0.55);
}

.et-cta-deco {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 12% 20%, rgba(255, 255, 255, 0.14) 0, rgba(255, 255, 255, 0) 30%),
    radial-gradient(circle at 88% 85%, rgba(255, 255, 255, 0.12) 0, rgba(255, 255, 255, 0) 32%);
  pointer-events: none;
}

.et-cta > * {
  position: relative;
}

.et-cta-title {
  margin: 0 0 12px;
  font-family: var(--et-font-display);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.et-cta-subtitle {
  margin: 0 auto 32px;
  max-width: 520px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.88);
}

.et-cta-selfhost {
  margin: 28px 0 0;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.82);
}

.et-cta-selfhost a {
  color: #fff;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.5);
  text-underline-offset: 3px;
  transition: text-decoration-color 0.2s;
}

.et-cta-selfhost a:hover {
  text-decoration-color: #fff;
}

/* ---- Responsive ----------------------------------------------------- */

@media (max-width: 768px) {
  .et-steps-section {
    margin-top: 48px;
    padding: 56px 24px;
  }

  .et-steps {
    gap: 48px;
    margin-top: 40px;
  }

  .et-step,
  .et-step.reverse {
    flex-direction: column;
    gap: 24px;
  }

  .et-step-body {
    max-width: none;
    text-align: center;
  }

  .et-step-title {
    font-size: 1.3rem;
  }

  .et-step-text {
    font-size: 1rem;
  }

  .et-cta-section {
    padding: 56px 16px 0;
  }

  .et-cta {
    padding: 48px 24px;
    border-radius: 20px;
  }
}
</style>
