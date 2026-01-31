/*
 * Javascript to construct an individual game page (used by each game page) 
 */

function makeMaskPage (maskname) {


	console.log ("makeMaskPage for ", maskname)

	DataWrangler.init();

	var mask = DataWrangler.getMaskByName (maskname);

	// $('.model-view').text('<model-viewer id="mv-mask" src="'+mask[\'model\']'+'" poster ="+mask[\'poster\']'+" camera-controls > </model-viewer>)')
	document.getElementById('mv-mask').src = mask['model']
	document.getElementById('mv-mask').poster = mask['poster']
	$('.mask-title').text(mask['name'])
	$('.credit').text(mask['credit'].join(' / '))

	if (mask['description']) {
		$("#mask-description").append(mask['description']);
	}
}