<template>
  <section id="contact" class="section-contact">
    <div class="container-lg">

      <!-- Section header -->
      <div class="section-header mb-5">
        <div class="section-label">{{ $t('contact.title') }}</div>
        <h2 class="section-title">{{ $t('contact.subtitle') }}</h2>
      </div>

      <!-- Two column grid -->
      <div class="row g-5">

        <!-- Left: Contact Info -->
        <div class="col-12 col-md-6">
          <p class="contact-intro">
            {{ $t('contact.desc') }}
          </p>

          <div class="contact-links">

            <!-- Email -->
            <a href="mailto:leejunkhang56@gmail.com" target="_blank" class="contact-link">
              <div class="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div class="contact-link-text">
                <span class="contact-link-label">{{ $t('contact.email') }}</span>
                <span>leejunkhang56@gmail.com</span>
              </div>
            </a>

            <!-- Phone -->
            <a href="https://wa.me/01110983279" target="_blank" class="contact-link">
              <div class="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div class="contact-link-text">
                <span class="contact-link-label">{{ $t('contact.phone') }}</span>
                <span>+60 11-1098 3279</span>
              </div>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/blaabala" target="_blank" class="contact-link">
              <div class="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </div>
              <div class="contact-link-text">
                <span class="contact-link-label">GitHub</span>
                <span>github.com/blaabala</span>
              </div>
            </a>

            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/lee-jun-khang-966415228" target="_blank" class="contact-link">
              <div class="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div class="contact-link-text">
                <span class="contact-link-label">LinkedIn</span>
                <span>linkedin.com/in/lee-jun-khang-966415228</span>
              </div>
            </a>

          </div>
        </div>

        <!-- Right: Contact Form -->
        <div class="col-12 col-md-6">
          <form class="contact-form" @submit.prevent="handleSubmit">

            <div class="form-group">
              <label>{{ $t('contact.name') }}</label>
              <input type="text" v-model="form.name" :placeholder="$t('contact.namePlaceholder')" required />
            </div>

            <div class="form-group">
              <label>{{ $t('contact.email') }}</label>
              <input type="email" v-model="form.email" placeholder="your@email.com" required />
            </div>

            <div class="form-group">
              <label>{{ $t('contact.subject') }}</label>
              <input type="text" v-model="form.subject" :placeholder="$t('contact.subjectPlaceholder')" />
            </div>

            <div class="form-group">
              <label>{{ $t('contact.message') }}</label>
              <textarea v-model="form.message" :placeholder="$t('contact.messagePlaceholder')" rows="5"></textarea>
            </div>

            <button type="submit" class="btn-send" :disabled="sending">
              <span v-if="!sent && !sending">{{ $t('contact.sendMessage') }}</span>
              <span v-if="sending">{{ $t('contact.sending') }}</span>
              <span v-if="sent">{{ $t('contact.sent') }}</span>
            </button>

          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'ContactSection',
  data() {
    return {
      sending: false,
      sent: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    }
  },
  methods: {
    handleSubmit() {
      this.sending = true
      emailjs.send(
        'service_2jvhnf4',
        'template_3waxvrc',
        {
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
        },
        'TTyWT-vqKe5xryOeN'
      )
      .then(() => {
        this.sending = false
        this.sent = true
        this.form = { name: '', email: '', subject: '', message: '' }
        setTimeout(() => { this.sent = false }, 3000)
      })
      .catch(() => {
        this.sending = false
        alert('Failed to send message. Please try again.')
      })
    }
  }
}
</script>

<style scoped>
.section-contact {
  min-height: 80vh;
  padding: 80px 0;
  display: flex;
  align-items: center;
  background-color: var(--color-header);
}

/* Section header */
.section-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-label::after {
  content: '';
  flex: none;
  width: 20px;
  height: 1px;
  background: var(--color-accent);
}

.section-title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-text);
  margin-bottom: 0;
}

/* Contact intro */
.contact-intro {
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 32px;
}

/* Contact links */
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  text-decoration: none;
  color: var(--color-text);
  font-size: 14px;
  transition: border-color 0.2s, background 0.2s;
}

.contact-link:hover {
  border-color: var(--color-accent);
  background: rgba(46, 255, 160, 0.04);
  color: var(--color-text);
}

.contact-link-icon {
  width: 38px;
  height: 38px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  flex-shrink: 0;
}

.contact-link-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-link-label {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Contact form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

label {
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

input,
textarea {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 9px;
  color: var(--color-text);
  font-size: 14px;
  padding: 12px 14px;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  resize: none;
  width: 100%;
  font-family: inherit;
}

input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.25);
}

input:focus,
textarea:focus {
  border-color: var(--color-accent);
  background: rgba(46, 255, 160, 0.03);
}

/* Send button */
.btn-send {
  width: 100%;
  padding: 14px;
  background: var(--color-accent);
  color: var(--color-text-btn);
  border: none;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  margin-top: 4px;
}

.btn-send:hover:not(:disabled) {
  opacity: 0.88;
  transform: translateY(-1px);
}

.btn-send:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-send span[v-if="sent"] {
  color: var(--color-bg);
}
</style>