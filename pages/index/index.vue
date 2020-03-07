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
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	@import url("index.css");
</style>
