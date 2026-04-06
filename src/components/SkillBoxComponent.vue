<template>
<!-- Skills grid -->
<div class="row g-4 mt-4">
<div
    class="col-12 col-md-6 col-lg-4"
    v-for="(group, index) in skillGroups"
    :key="index"
>
    <div class="skill-group">
    <div class="skill-group-title">
        <span class="skill-dot"></span>
        {{ group.title }}
    </div>
    <div class="skill-tags">
        <span
        class="skill-tag"
        v-for="(skill, i) in group.skills"
        :key="i"
        >{{ skill }}</span>
    </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: 'SkillBoxComponent',
  computed: {
    skillGroups() {
      return [
        {
          title: this.$t('skills.frontend'),
          skills: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
        },
        {
          title: this.$t('skills.backend'),
          skills: ['Express.js', 'PHP', 'RESTful API']
        },
        {
          title: this.$t('skills.databases'),
          skills: ['MySQL', 'MongoDB', 'Oracle SQL']
        },
        {
          title: this.$t('skills.toolsWorkflow'),
          skills: ['Git', 'GitHub', 'Vite', 'Figma', 'Canva', 'ServiceNow', 'Bomgar']
        },
      ]
    }
  }
}
</script>

<style scoped>
.section-skills {
  padding: 80px 0;
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

/* Skill group card */
.skill-group {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  padding: 28px;
  height: 100%;
  transition: border-color 0.2s, transform 0.2s;
}

.skill-group:hover {
  border-color: rgba(46, 255, 160, 0.3);
  transform: translateY(-2px);
}

/* Group title */
.skill-group-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-accent);
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.skill-dot {
  width: 7px;
  height: 7px;
  background: var(--color-accent);
  border-radius: 50%;
  flex-shrink: 0;
}

/* Skill tags */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  font-size: 13px;
  color: var(--color-text);
  font-weight: 400;
  transition: border-color 0.15s, color 0.15s;
  cursor: default;
}

.skill-tag:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
</style>