<template>
	<view>
		<view class="detail-content">
			<view class="post-title">postId:{{postId}}</view>
			<view class="post-data"></view>
			<view class="post-summary"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				postId:''
			}
		},
		onLoad(params) {
			let me = this;
			// 获取上一个页面传入的参数
			let postId = params.postId;
			console.log(postId);
			me.postId = postId;
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
