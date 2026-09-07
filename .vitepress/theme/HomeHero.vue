<script setup lang="ts">
</script>

<template>
  <section class="et-hero">
    <div class="et-hero-glow" aria-hidden="true"></div>
    <div class="et-container et-hero-inner">
      <p class="et-eyebrow">Open Source · Ohne Login für Teilnehmer</p>
      <h1 class="et-hero-name">Eintrittli</h1>
      <p class="et-hero-text"><span>Anlass-Registrierung.</span> <span>Einfach gemacht.</span></p>
      <p class="et-hero-tagline">
        Konfigurierbare Formulare, QR-Codes und übersichtliches Dashboard.
        Ohne Bezahlsystem und ohne Login für Teilnehmer.
      </p>
      <div class="et-hero-actions">
        <a class="et-btn et-btn-primary" href="https://demo.eintrittli.ch" target="_blank" rel="noreferrer">
          Demo ausprobieren
          <svg class="et-btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <a class="et-btn et-btn-secondary" href="#kontakt">Kontakt</a>
      </div>
    </div>
    <div class="et-container et-hero-visual">
      <div class="et-hero-stage">
        <img
          src="/eintrittli_mockup.png"
          alt="Eintrittli App: QR-Code, Anmeldeformular, Bestätigung und Anmeldungs-Übersicht"
          width="1640"
          height="863"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.et-hero {
  position: relative;
  padding: 56px 24px 0;
  overflow: hidden;
}

.et-hero-glow {
  position: absolute;
  top: -320px;
  left: 50%;
  width: 1100px;
  height: 760px;
  transform: translateX(-50%);
  background: radial-gradient(closest-side, rgba(37, 125, 236, 0.16), rgba(37, 125, 236, 0) 100%);
  pointer-events: none;
}

.et-hero-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.et-hero-name {
  margin: 20px 0 8px;
  font-family: var(--et-font-display);
  font-size: clamp(44px, 7vw, 84px);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #0A55B5 0%, #257DEC 55%, #74B1FF 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.et-hero-text {
  margin: 0;
  max-width: 760px;
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.et-hero-text span {
  display: inline-block;
}

.et-hero-tagline {
  margin: 20px 0 0;
  max-width: 640px;
  font-size: clamp(17px, 1.6vw, 20px);
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.et-hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
}

.et-btn-icon {
  width: 18px;
  height: 18px;
  margin-left: 6px;
  transition: transform 0.2s;
}

.et-btn-primary:hover .et-btn-icon {
  transform: translateX(3px);
}

.et-hero-visual {
  position: relative;
  margin-top: 56px;
}

.et-hero-stage {
  position: relative;
  padding: clamp(16px, 3vw, 40px);
  border-radius: 24px;
  background: linear-gradient(180deg, #EAF2FE 0%, #F7FAFF 100%);
  border: 1px solid var(--et-c-border);
  box-shadow: 0 30px 80px -40px rgba(10, 85, 181, 0.35);
}

.et-hero-stage img {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 640px) {
  .et-hero {
    padding-top: 40px;
  }

  .et-hero-visual {
    margin-top: 40px;
  }

  .et-hero-actions {
    width: 100%;
    flex-direction: column;
  }

  .et-hero-actions .et-btn {
    width: 100%;
  }
}
</style>
