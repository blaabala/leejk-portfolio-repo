<template>
  <header class="header">
    <div class="container-lg">
      <div class="row align-items-center justify-content-between">

        <!-- Left: Hamburger (mobile) / hidden on desktop -->
        <div class="col-4 col-lg-auto d-lg-none">
          <button class="hamburger" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <!-- Center: Logo -->
        <div class="col-4 col-lg-auto text-center text-lg-start">
          <router-link to="/">
            <brand-logo />
          </router-link>
        </div>

        <!-- Desktop nav (sits between logo and contact on lg+) -->
        <div class="d-none d-lg-flex col-lg">
            <nav class="d-flex justify-content-center gap-4 w-100">
                <a href="#home" @click.prevent="scrollTo('home')">{{ $t('nav.home') }}</a>
                <a href="#about" @click.prevent="scrollTo('about')">{{ $t('nav.about') }}</a>
                <a href="#skills" @click.prevent="scrollTo('skills')">{{ $t('nav.skills') }}</a>
                <a href="#projects" @click.prevent="scrollTo('projects')">{{ $t('nav.projects') }}</a>
                <a href="#contact" @click.prevent="scrollTo('contact')">{{ $t('nav.contact') }}</a>
            </nav>
        </div>

        <!-- Right: Contact button -->
        <div class="col-4 col-lg-auto d-flex justify-content-end">
            <a href="#contact" @click.prevent="scrollTo('contact')" class="btn-contact">{{ $t('nav.hireMe') }}</a>
        </div>

      </div>
    </div>

    <!-- Mobile nav drawer -->
    <Transition name="slide-down">
        <div v-if="menuOpen" class="mobile-nav">
          <a href="#home" @click.prevent="scrollTo('home')">{{ $t('nav.home') }}</a>
          <a href="#about" @click.prevent="scrollTo('about')">{{ $t('nav.about') }}</a>
          <a href="#skills" @click.prevent="scrollTo('skills')">{{ $t('nav.skills') }}</a>
          <a href="#projects" @click.prevent="scrollTo('projects')">{{ $t('nav.projects') }}</a>
          <a href="#contact" @click.prevent="scrollTo('contact')">{{ $t('nav.contact') }}</a>
        </div>
    </Transition>
  </header>
</template>

<script>
import BrandLogo from '../../assets/BrandLogo.vue'

export default {
  name: 'Header',
  components: { BrandLogo },
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    scrollTo(id) {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    },
    scrollToAndClose(id) {
        this.scrollTo(id)
        this.menuOpen = false
    }
  },
}
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}

.header {
  background-color: var(--color-header);
  color: var(--color-text);
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

/* Hamburger */
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-text);
  border-radius: 1px;
  transition: all 0.25s;
}

/* Contact button */
.btn-contact {
  background: var(--color-accent);
  color: var(--color-bg);
  text-decoration: none;
  padding: 7px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.03em;
  transition: opacity 0.2s;
  white-space: nowrap;
}

.btn-contact:hover {
  opacity: 0.85;
}

/* Desktop nav links */
nav a {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.2s;
}

nav a:hover,
nav a.router-link-active {
  color: var(--color-accent);
}

/* Mobile nav drawer */
.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 24px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.mobile-nav a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: color 0.2s;
}

.mobile-nav a:hover,
.mobile-nav a.router-link-active {
  color: var(--color-accent);
}

/* Slide down transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
  max-height: 300px;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>