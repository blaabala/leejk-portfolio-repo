<template>
  <main>

    <!-- Home / Hero -->
    <section id="home" class="section-home">
      <div class="container-lg">
        <div class="row align-items-center">
            <div class="col-12 col-md-6 mb-5">
                <div class="profile-avatar rounded-circle overflow-hidden mx-auto">
                    <div class="ratio ratio-1x1">
                        <img src="/profile.jpg" alt="Profile" class="w-100 h-100 object-fit-cover" />
                    </div>
                </div>                
            </div>

            <div class="col-12 col-md-6">
              <div class="text mb-5">
                <h1>{{ $t('hero.greeting') }}</h1>
                <h2 class="name-text">{{ $t('hero.name') }}</h2>
                <p class="hero-title">
                  <span>{{ typedText }}</span><span class="cursor"></span>
                </p>
                <p>{{ $t('hero.tagline') }}</p>
              </div>

              <div class="button-section d-flex gap-4 justify-content-center justify-content-md-start">
                <button class="btn-contact">{{ $t('hero.btnContact') }}</button>
                <a href="/LeeJunKhang-resume.pdf" download class="btn-download text-decoration-none">{{ $t('hero.btnDownload') }}</a>
              </div>
            </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="section-about bg-dark">
      <div class="container-lg">
        <h2>{{ $t('about.title') }}</h2>
        <p>I'm a <strong>junior frontend developer</strong> based in Malaysia, passionate about building 
            clean and responsive web applications. I graduated from <strong>Universiti Tunku Abdul 
            Rahman (UTAR)</strong> with a <strong>Bachelor's in Information Systems Engineering</strong>, and I have 
            hands-on experience with <strong>Vue.js, HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap</strong>.</p>
        <p>I also have experience in <strong>IT service desk support</strong> — 
giving me a well-rounded understanding of both building and supporting 
technology. I enjoy turning ideas into real products and I'm always looking 
to grow within a collaborative, forward-thinking team.</p>

        <c-box-component />
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="section-skills">
      <div class="container-lg">
        <h2>{{ $t('skills.title') }}</h2>
        <p class="section-title">{{ $t('skills.techIWorkWith') }}</p>

        <c-skill-box-component />
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="section-projects bg-dark">
      <div class="container-lg">
        <h2>{{ $t('projects.title') }}</h2>
        <p class="section-title">{{ $t('projects.subtitle') }}</p>

        <c-project-card-component />
      </div>
    </section>

    <!-- Contact -->
    <c-contact-section />

  </main>
</template>

<script>
import CContactSection from '../components/layout/ContactSection.vue';
import CBoxComponent from '../components/BoxComponent.vue';
import CSkillBoxComponent from '../components/SkillBoxComponent.vue';
import CProjectCardComponent from '../components/ProjectCardComponent.vue';

export default {
  name: 'HomeView',
  components: {
    CContactSection,
    CBoxComponent,
    CProjectCardComponent,
    CSkillBoxComponent
  },
  data() {
    return {
      roles: [
        'Junior Frontend Developer.',
        'Vue.js Enthusiast.',
        'IT Service Desk.',
        'Based in Malaysia.',
        'Open to Work.'
      ],
      roleIndex: 0,
      charIndex: 0,
      deleting: false,
      typedText: '',
    }
  },
  mounted() {
    this.type()
  },
  methods: {
    type() {
      const current = this.roles[this.roleIndex]

      if (!this.deleting) {
        this.typedText = current.slice(0, this.charIndex + 1)
        this.charIndex++
        if (this.charIndex === current.length) {
          this.deleting = true
          setTimeout(() => this.type(), 1800)
          return
        }
      } else {
        this.typedText = current.slice(0, this.charIndex - 1)
        this.charIndex--
        if (this.charIndex === 0) {
          this.deleting = false
          this.roleIndex = (this.roleIndex + 1) % this.roles.length
        }
      }

      setTimeout(() => this.type(), this.deleting ? 45 : 90)
    },
    scrollToContact() {
      const el = document.getElementById('contact')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

}
</script>

<style scoped>
section {
  min-height: 80vh;
  padding: 40px 0;
  display: flex;
  align-items: center;
}

.section-about p {
  color: var(--muted);
  font-weight: 500;
  margin-bottom: 20px;
}

.section-about p strong {
  color: var(--color-text);
  font-weight: 500;
}

.accent {
  color: var(--color-accent);
}

.profile-avatar {
    width: 200px;
}

.name-text {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.5;
    margin: 0 0 20px;
}

section h2 {
  font-weight: 700;
  margin-bottom: 30px;
}

.button-section {
  font-weight: 700;
}

.button-section button, .button-section a {
  padding: 10px;
  border-radius: 40px;
  border: 2px solid #ffffff;
  transition: all 0.3s;
}

.btn-contact {
  background-color: var(--color-btn-contact);
  color: var(--color-text-btn-contact);
}

.btn-download {
  background-color: var(--color-btn-download);
  color: var(--color-text-btn-download);
}

.btn-contact:active {
  background-color: var(--color-btn-active-contact);
  color: var(--color-text-btn-active-contact);
}
.btn-download:active {
  background-color: var(--color-btn-active-download);
  color: var(--color-text-btn-active-download);
}

/* Typewriter Styling */
  .hero-title {
    font-size: clamp(16px, 2.5vw, 22px);
    font-weight: 300;
    color: var(--color-text);
    margin-bottom: 32px;
    min-height: 32px;
  }

  .hero-title span { color: var(--color-accent); font-weight: 400; }
  .cursor { display: inline-block; width: 2px; height: 1.1em; background: var(--color-accent); vertical-align: middle; animation: blink 1s step-end infinite; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

.section-title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-text);
  margin-bottom: 0;
}

@media (min-width: 425px) {
    .profile-avatar {
        width: 300px;
    }
}

@media (min-width: 992px) {
  .name-text {
      font-size: 35px;
      margin: 0 0 30px;
  }
  p {
    font-size: 20PX;
  }
}

@media (min-width: 1200px) {
    .profile-avatar {
        width: 400px;
    }
}

</style>