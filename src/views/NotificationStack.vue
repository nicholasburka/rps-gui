<style scoped>
#notif_stack {
	position: absolute;
	top: 80vh;
	left: 5vw;
}

#notif_stack .open {
	top: 30vh;
	left: 5vw;
}
</style>

<template>
	<div id="notif_stack">
		<Notification v-for="notification in this.notifications" v-bind:msg="notification.msg" v-bind:game="notification.game" v-on:dismiss="dismissNotification"></Notification>
	</div>
</template>

<script>
	export default {
		props: ["notifications"],
		data: function() {
			return {
				notif_stack: notifications
			}
		},
		computed: {
			
		},
		methods: {
			dismissNotification: function(notif) {

			}
		}
	}
</script>