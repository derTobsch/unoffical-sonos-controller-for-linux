let Constants = {

	ALBUM_ART_LOAD: '',

	VOLUME_CONTROLS_MUTE_SET: '',
	VOLUME_CONTROLS_VOLUME_SET: '',

	BROWSER_SELECT_ITEM: '',
	BROWSER_SCROLL_RESULT: '',
	BROWSER_BACK: '',
	BROWSER_PLAY: '',

	PLAYER_PAUSE: '',
	PLAYER_PLAY: '',
	PLAYER_PREV: '',
	PLAYER_NEXT: '',
	PLAYER_SEEK: '',

	QUEUE_GOTO: '',
	QUEUE_FLUSH: '',

	ZONE_GROUP_SELECT: '',
	ZONE_GROUP_SET: '',

	SONOS_SERVICE_ZONES_UPDATE: '',
	SONOS_SERVICE_ZONEGROUPS_DEFAULT: '',
	SONOS_SERVICE_QUEUE_UPDATE: '',
	SONOS_SERVICE_VOLUME_UPDATE: '',
	SONOS_SERVICE_PLAYSTATE_UPDATE: '',
	SONOS_SERVICE_CURRENT_TRACK_UPDATE: '',
	SONOS_SERVICE_NEXT_TRACK_UPDATE: '',
	SONOS_SERVICE_POSITION_INFO_UPDATE: '',
	SONOS_SERVICE_MUTED_UPDATE: '',
};

Object.keys(Constants).forEach((k) => {
	Constants[k] = k;
});

export default Constants;