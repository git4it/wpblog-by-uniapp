<template>
	<view class="page">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="page-block swiper-wrapper">
			<swiper-item class="swiper-item-wrapper">
				<image src="https://static.256it.com/wp-blog/swiper/it_dl.jpg"></image>
				<text>轮播图的文章名称轮播图的文章名称轮播图的文章名称轮播图的文章名称轮播图的文章名称轮播图的文章名称</text>
			</swiper-item>
			<swiper-item class="swiper-item-wrapper">
				<image src="https://static.256it.com/wp-blog/cover/idea.jpg" class="swiper-item-img"></image>
				<text class="swiper-item-text">轮播图的文章名称轮播图的文章名称轮播图的文章名称轮播图的文章名称轮播图的文章名称轮播图的文章名称</text>
			</swiper-item>
		</swiper>
		
		<!-- 精选栏目 -->
		<view class="page-block selected-wrapper">
			<view class='selected-subtitle'>
				<view class='selected-subtitle-left'>精选</view>
				<view class='selected-subtitle-right'>滑动查看</view>
			</view>
			
			<scroll-view scroll-x="true" class="selected-nav">
				<view class="selected-nav-item-wrapper">
					<view class="selected-nav-item">
						<image src="../../static/images/uploads/wp-blog.png"></image>
						<text>
							官网
						</text>
					</view>
				</view>
				<view class="selected-nav-item-wrapper">
					<view class="selected-nav-item">
						<image src="../../static/images/uploads/search.jpg"></image>
						<text>
							搜索
						</text>
					</view>
				</view>
				<view class="selected-nav-item-wrapper">
					<view class="selected-nav-item">
						<image src="../../static/images/uploads/comment.png"></image>
						<text>
							留言板
						</text>
					</view>
				</view>
				<view class="selected-nav-item-wrapper">
					<view class="selected-nav-item">
						<image src="../../static/images/uploads/rankings.jpg"></image>
						<text>
							排行
						</text>
					</view>
				</view>
				<view class="selected-nav-item-wrapper">
					<view class="selected-nav-item">
						<image src="../../static/images/uploads/miniprogram.png"></image>
						<text>
							小程序
						</text>
					</view>
				</view>
			</scroll-view>			
		</view>
		<!-- 文章列表 -->
		<view class="page-block post-list">
			<view class="post-item" v-for="(item, index) in postListData" :key="index">
				<image v-if="item.post_medium_image == null || item.post_medium_image == ''" src="../../static/images/uploads/post_cover.jpg" class="post-img"/>
				<image v-else :src="item.post_medium_image" class="post-img"/>
				<view class="post-desc">
				  <view class="post-title">
					<text>{{item.title.rendered}}</text>
				  </view>
				  <view class="post-data">
					<image src="../../static/images/calendar.png"></image>
					<text>{{item.post_date}}</text>
					<image src="../../static/images/comments.png"></image>
					<text class="">{{item.total_comments}}</text>
					<image src="../../static/images/home-like.png"></image>
					<text class="">{{item.like_count}}</text>
					<image src="../../static/images/pageviews.png"></image>
					<text class="">{{item.pageviews}}</text>
				  </view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				postListData: []
			}
		},
		onLoad() {
			let me = this;
			me.pagePost(1);
		},
		methods: {
			pagePost(e) {
				let me = this;
				uni.request({
					url:me.serverUrl + "/posts?page=" + e,
					method:"GET",
					success: (res) => {
						if (res.data != null) {
							me.postListData = me.postListData.concat(res.data);
							// console.log(me.postListData);
						}
					}
				});
			}
		}
	}
</script>

<style>
	@import url("index.css");
</style>
