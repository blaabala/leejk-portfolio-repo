<template>
  <footer class="footer">
    <div class="container-lg">

      <!-- Main row: Logo | Nav | Language -->
      <div class="row gy-4 mb-4">

        <!-- Col 1: Logo -->
        <div class="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center">
          <router-link to="/">
            <brand-logo />
          </router-link>
        </div>

        <!-- Col 2: Nav links -->
        <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <nav class="footer-nav d-flex flex-column flex-sm-row justify-content-center gap-3">
            <a href="#home" @click.prevent="scrollTo('home')">{{ $t('nav.home') }}</a>
            <a href="#about" @click.prevent="scrollTo('about')">{{ $t('nav.about') }}</a>
            <a href="#skills" @click.prevent="scrollTo('skills')">{{ $t('nav.skills') }}</a>
            <a href="#projects" @click.prevent="scrollTo('projects')">{{ $t('nav.projects') }}</a>
            <a href="#contact" @click.prevent="scrollTo('contact')">{{ $t('nav.contact') }}</a>
          </nav>
        </div>

        <!-- Col 3: Language options -->
        <div class="col-12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
          <div class="lang-options d-flex gap-3">
            <a
              href="#"
              class="lang-link"
              :class="{ active: currentLang === 'en' }"
              @click.prevent="setLang('en')"
            >English</a>
            <span class="lang-divider">·</span>
            <a
              href="#"
              class="lang-link"
              :class="{ active: currentLang === 'zh' }"
              @click.prevent="setLang('zh')"
            >中文</a>
            <span class="lang-divider">·</span>
            <a
              href="#"
              class="lang-link"
              :class="{ active: currentLang === 'ms' }"
              @click.prevent="setLang('ms')"
            >BM</a>
          </div>
        </div>

      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Built with row -->
      <div class="row mt-3">
        <div class="col-12 text-center">
          <p class="footer-built">Built with Vue.js · Bootstrap · Deployed on Vercel</p>
        </div>
      </div>

      <!-- Copyright row -->
      <div class="row mt-1 mb-2">
        <div class="col-12 text-center">
          <p class="footer-copy">© {{ currentYear }} Lee Jun Khang. All rights reserved.</p>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
import BrandLogo from '../../assets/BrandLogo.vue'

export default {
  name: 'Footer',
  components: { BrandLogo },
  data() {
    return {
      currentLang: 'en',
      currentYear: new Date().getFullYear(),
    }
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    setLang(lang) {
      this.currentLang = lang
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--color-footer);
  color: var(--color-text);
  padding: 40px 0 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

/* Nav links */
.footer-nav a {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.footer-nav a:hover {
  color: var(--color-accent);
}

/* Language options */
.lang-options {
  align-items: center;
}

.lang-link {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: color 0.2s;
}

.lang-link:hover,
.lang-link.active {
  color: var(--color-accent);
}

.lang-divider {
  color: rgba(255, 255, 255, 0.2);
  font-size: 13px;
}

/* Divider */
.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
}

/* Bottom text */
.footer-built {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.35);
  margin: 0;
}

.footer-copy {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.25);
  margin: 0;
}

/* Mobile: center everything */
@media (max-width: 767px) {
  .footer-nav {
    text-align: center;
  }
}
</style>