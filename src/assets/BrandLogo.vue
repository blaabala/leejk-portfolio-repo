<template>
	<img class="brand-logo" src="/LJK.png" alt="LJK Logo" />
</template>

<script>
	export default {
		name: "BrandLogo",
		props: {},
		data() {
			return {};
		},
		components: {},
		computed: {},
		mounted() {},
		methods: {},
	};
</script>

<style scoped>
.brand-logo {
  height: 40px;
  width: auto;
  display: inline-block;
  margin: 0 auto;
}

@media (min-width: 425px) {
  .brand-logo {
    height: 60px;
  }
}

@media (min-width: 768px) {
  .brand-logo {
    height: 80px;
  }
}

@media (min-width: 992px) {
  .brand-logo {
    height: 80px;
  }
}
</style>