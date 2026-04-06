<template>
  <div class="row g-3 g-md-4 mt-2">
<!-- Experiences (dynamic) -->
    <div
      class="col-12 col-sm-6 col-lg-3"
      v-for="(exp, index) in experiences"
      :key="'exp-' + index"
    >
      <div class="info-box">
        <div class="info-box-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="6"/>
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
          </svg>
        </div>
        <h4 class="info-box-title">{{ exp.title }}</h4>
        <p class="info-box-desc">
          {{ exp.company }}<br/>{{ exp.period }}
        </p>
      </div>
    </div>

    <!-- Education -->
    <div class="col-12 col-sm-6 col-lg-3">
      <div class="info-box">
        <div class="info-box-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <h4 class="info-box-title">{{ $t('about.education') }}</h4>
        <p class="info-box-desc">
          Bachelor of Information Systems Engineering<br>Oct 2021 – June 2025 
        </p>
      </div>
    </div>

    <!-- Location -->
    <div class="col-12 col-sm-6 col-lg-3">
      <div class="info-box">
        <div class="info-box-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <h4 class="info-box-title">{{ $t('about.location') }}</h4>
        <p class="info-box-desc">
          {{ $t('about.basedInMy') }}
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BoxComponent',
  computed: {
    experiences() {
      return [
        {
          title: this.$t('about.jobTitle2'),
          company: 'Advocado Interactive Solution Sdn. Bhd.',
          period: 'Sept 2025 - Mar 2026'
        },
        {
          title: this.$t('about.jobTitle1'),
          company: 'Outlier (Scale AI)',
          period: 'Jan 2025 - June 2025'
        },
        {
          title: this.$t('about.internTitle'),
          company: 'Roche Services & Solutions (RSS) APAC',
          period: 'June 2023 - Oct 2023'
        }          
      ]
    }
  }
}
</script>

<style scoped>
.info-box {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 24px 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
  height: 100%;
}

.info-box:hover {
  border-color: rgba(46, 255, 160, 0.35);
  transform: translateY(-3px);
}

/* Accent variant — highlighted box */
.info-box--accent {
  border-color: rgba(46, 255, 160, 0.25);
  background: rgba(46, 255, 160, 0.04);
}

.info-box--accent .info-box-icon {
  color: var(--color-accent);
}

.info-box-icon {
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
}

.info-box-title {
  color: var(--color-text);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
}

.info-box-desc {
  color: rgba(255, 255, 255, 0.45);
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
}
</style>