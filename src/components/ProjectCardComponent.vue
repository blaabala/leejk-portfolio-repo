<template>
    <!-- Projects grid -->
    <div class="projects-grid mt-4">

        <!-- Featured card (first project) -->
        <div class="project-card project-card--featured" v-if="projects.length > 0">
            <div class="project-thumb">
            <div class="project-accent-bar" :style="{ background: projects[0].accentColor }"></div>
            <img v-if="projects[0].image" :src="projects[0].image" :alt="projects[0].title" class="project-thumb-img" />
            <div v-else class="project-thumb-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 9 4-4 4 4 4-4 4 4"/><path d="M3 15h18"/></svg>
                <span>No image</span>
            </div>
            </div>
            <div class="project-body">
            <div class="project-meta">
                <span class="project-num">01</span>
                <span class="project-badge">{{ projects[0].badge }}</span>
            </div>
            <h3 class="project-title">{{ projects[0].title }}</h3>
            <p class="project-desc">{{ projects[0].desc }}</p>
            <div class="project-stack">
                <span class="stack-tag" v-for="(tech, i) in projects[0].stack" :key="i">{{ tech }}</span>
            </div>
            <div class="project-links">
                <a :href="projects[0].demo" target="_blank" class="proj-btn proj-btn--demo">{{ $t('projects.liveDemo') }}</a>
                <a :href="projects[0].github" target="_blank" class="proj-btn proj-btn--github">GitHub</a>
            </div>
            </div>
        </div>

        <!-- Regular cards (remaining projects) -->
        <div
            class="project-card"
            v-for="(project, index) in projects.slice(1)"
            :key="index"
        >
            <div class="project-thumb">
            <div class="project-accent-bar" :style="{ background: project.accentColor }"></div>
            <img v-if="project.image" :src="project.image" :alt="project.title" class="project-thumb-img" />
            <div v-else class="project-thumb-placeholder">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 9 4-4 4 4 4-4 4 4"/><path d="M3 15h18"/></svg>
                <span>Add project image</span>
            </div>
            </div>
            <div class="project-body">
            <div class="project-meta">
                <span class="project-num">0{{ index + 2 }}</span>
                <span class="project-badge">{{ project.badge }}</span>
            </div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="project-stack">
                <span class="stack-tag" v-for="(tech, i) in project.stack" :key="i">{{ tech }}</span>
            </div>
            <div class="project-links">
                <a :href="project.demo" target="_blank" class="proj-btn proj-btn--demo">{{ $t('projects.liveDemo') }}</a>
                <a :href="project.github" target="_blank" class="proj-btn proj-btn--github">GitHub</a>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'ProjectCardComponent',
  data() {
    return {
      projects: [
        {
          title: 'Appointment Management System',
          badge: this.$t('projects.fyp'),
          desc: 'A full-stack scheduling platform with role-based access for admins, students, and lecturers. Features real-time calendar views, appointment CRUD, and a dashboard with usage analytics.',
          stack: ['PHP', 'HTML', 'CSS', 'MySQL', 'Tailwind CSS', 'FullCalendar.js', 'JavaScript'],
          demo: 'https://leejk-ams.great-site.net',
          github: 'https://github.com/blaabala/FYP1-repo',
          image: '/images/fyp-image.png',
          accentColor: 'linear-gradient(90deg, #2EFFA0, #06b6d4)'
        },
        // {
        //   title: 'Developer Portfolio',
        //   badge: 'THIS SITE',
        //   desc: 'This portfolio — built with Vue.js and Bootstrap, deployed on Vercel. Responsive SPA with smooth scroll sections and a contact form.',
        //   stack: ['Vue.js', 'Bootstrap', 'Vite'],
        //   demo: '#',
        //   github: '#',
        //   image: '',
        //   accentColor: 'linear-gradient(90deg, #6366f1, #8b5cf6)'
        // },
      ]
    }
  }
}
</script>

<style scoped>
/* Grid layout */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Featured spans full row */
.project-card--featured {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
}

.project-card--featured .project-thumb {
  height: 100%;
  min-height: 260px;
}

/* Base card */
.project-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s, transform 0.2s;
}

.project-card:hover {
  border-color: rgba(46, 255, 160, 0.3);
  transform: translateY(-3px);
}

/* Thumbnail */
.project-thumb {
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.03);
  position: relative;
  overflow: hidden;
}

.project-accent-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 1;
}

.project-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Placeholder when no image */
.project-thumb-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.12);
  font-size: 12px;
}

/* Card body */
.project-body {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.project-num {
  font-size: 11px;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: 0.1em;
}

.project-badge {
  font-size: 10px;
  padding: 3px 8px;
  background: rgba(46, 255, 160, 0.08);
  color: var(--color-accent);
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.project-title {
  font-size: 19px;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
  margin-bottom: 10px;
  line-height: 1.2;
}

.project-desc {
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.75;
  margin-bottom: 20px;
  flex: 1;
}

/* Stack tags */
.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}

.stack-tag {
  padding: 3px 9px;
  font-size: 11px;
  font-weight: 500;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.5);
}

/* Buttons */
.project-links {
  display: flex;
  gap: 10px;
}

.proj-btn {
  flex: 1;
  padding: 9px;
  text-align: center;
  font-size: 12.5px;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.15s;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-text);
}

.proj-btn--demo {
  background: var(--color-accent);
  color: var(--color-bg);
  border-color: var(--color-accent);
  font-weight: 600;
}

.proj-btn--demo:hover {
  opacity: 0.85;
}

.proj-btn--github:hover {
  border-color: rgba(255, 255, 255, 0.3);
  color: var(--color-text);
}

/* Responsive */
@media (max-width: 991px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .project-card--featured {
    grid-template-columns: 1fr;
  }

  .project-card--featured .project-thumb {
    height: 220px;
    min-height: unset;
  }
}

@media (max-width: 575px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>