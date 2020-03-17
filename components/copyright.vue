<template name="copyright">
	<view class="copyright">
		© 2020 {{siteName}} {{domain}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				siteName:this.$config.siteName,
				domain:this.$config.domain
			};
		}
	}
</script>

<style>

</style>
