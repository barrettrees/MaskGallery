/*
 * Javascript to construct an individual game page (used by each game page) 
 */

function makeMaskPage (maskname) {

	console.log ("makeMaskPage for ", maskname)

	DataWrangler.init();

	var mask = DataWrangler.getMaskByName (maskname);
	var observation_photo = document.createElement("img");
	var observation_photo_mouseover = document.createElement("img");

	document.getElementById('mv-mask').src = mask['model']
	document.getElementById('mv-mask').poster = mask['poster']
	document.getElementById('mask-illustration').appendChild(observation_photo);
	document.getElementById('mask-illustration')
	observation_photo.src = mask['obs_photo']
	observation_photo_mouseover.src = mask['obs_photo_mouseover']

	$('.mask-title').text(mask['name'])
	$('.credit').text(mask['credit'].join(' / '))

	if (mask['description']) {
		$("#mask-description").append(mask['description']);
	}
}