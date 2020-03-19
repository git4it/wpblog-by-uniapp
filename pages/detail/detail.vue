<template style="height: 100%;">
	<view class="page">
		<view class="page-block post-content">
			<view class="post-title">{{detail.title.rendered}}</view>
			<view class="post-data">
				<image src="../../static/images/calendar.png"></image>
				<text>{{detail.post_date}}</text>
				<image src="../../static/images/comments.png"></image>
				<text>{{detail.total_comments}}</text>
				<image src="../../static/images/home-like.png"></image>
				<text>{{detail.like_count}}</text>
				<image src="../../static/images/pageviews.png"></image>
				<text>{{detail.pageviews}}</text>
			</view>
			<view class="post-summary" v-html="detail.content.rendered"></view>
		</view>
		<copyright></copyright>
	</view>
</template>

<script>
	import copyright from '../../components/copyright.vue';
	
	export default {
		data() {
			return {
				detail:{}
			}
		},
		onLoad(params) {
			let me = this;
			me.getPost(params);
		},
		methods: {
			getPost(params) {
				let me = this;
				let $config = me.$config;
				uni.request({
					url:$config.baseUrl + '/posts/' + params.postId,
					method:"GET",
					success:(res) => {
						console.log(res);
						if (res.statusCode === 200) {
							me.detail = res.data;
						}
					}
				})
			}
		},
		components:{
			copyright
		}
	}
</script>

<style>
	@import url("detail.css");
</style>
