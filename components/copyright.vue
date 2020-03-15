<template name="copyright">
	<view class="copyright">
		© 2020 {{siteName}} {{domain}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				siteName:this.$config.SITE_NAME,
				domain:this.$config.DOMAIN
			};
		}
	}
</script>

<style>

</style>
