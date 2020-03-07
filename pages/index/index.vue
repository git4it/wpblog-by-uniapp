<template>
	<!-- 轮播图 -->
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper-wrapper">
			<swiper-item class="swiper-item-wrapper">
				<image src="https://static.256it.com/wp-blog/swiper/it_dl.jpg" class="swiper-item-img"></image>
				<text class="swiper-item-text">轮播图的文章名称轮播图的文章名称轮播图的文章名称轮播图的文章名称轮播图的文章名称轮播图的文章名称</text>
			</swiper-item>
			<swiper-item class="swiper-item-wrapper">
				<image src="https://static.256it.com/wp-blog/cover/idea.jpg" class="swiper-item-img"></image>
				<text class="swiper-item-text">轮播图的文章名称轮播图的文章名称轮播图的文章名称轮播图的文章名称轮播图的文章名称轮播图的文章名称</text>
			</swiper-item>
		</swiper>
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
