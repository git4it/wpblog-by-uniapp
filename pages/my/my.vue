<template>
	<view>
		<!-- 用户信息 -->
		<view class="userinfo">
			<!-- 头像 -->
			<image class="userinfo-avatar" :src="userInfo.avatarUrl != null ? userInfo.avatarUrl : '../../static/images/uploads/wp-blog.png'"></image>
			<view class='userinfo-right'>
				<!-- 登录 -->
				<button v-if="userInfo.openId == null" size="mini" open-type='getUserInfo' @getuserinfo="wxLogin">登录</button>
				<!-- 昵称 -->
				<text v-else class="userinfo-nickname">{{userInfo.nickName}}</text>
			</view>
		</view>
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				userInfo : []
			}
		},
		onShow() {
			let me = this;
			// 用户状态的切换
			let userInfo = uni.getStorageSync("userInfo");
			if (userInfo != null && userInfo != "" && userInfo != undefined) {
				me.userInfo = userInfo;
			}
		},
		methods: {
			// 实现在微信小程序端的微信登录
			wxLogin(e) {
				let me = this;
				let $config = me.$config;
				console.log(e);
				// 通过微信开发能力，获得微信用户的基本信息
				let detail = e.detail;
				let userInfo = detail.userInfo;
				
				// 实现微信登录
				uni.login({
					provider: "weixin",
					success(loginResult) {
						console.log(loginResult);
						// 获得微信登录的code：授权码
						var code = loginResult.code;
						var param = {
								"avatarUrl" : userInfo.avatarUrl,
								"nickname" : userInfo.nickName,
								"iv" : detail.iv,
								"encryptedData" : detail.encryptedData,
								"js_code" : code
							}
						uni.request({
							url: $config.wpBlogUrl + "/weixin/getopenid",
							data: param,
							method: "POST",
							success(res) {
								console.log(res);
								if (res.statusCode == 200) {
									userInfo.openId = res.data.openid;
									uni.setStorageSync('userInfo', userInfo);
									me.userInfo = userInfo;
								}
							}
						});
					}
				})
			}
		}
	}
</script>

<style>
	@import url("my.css");
</style>
