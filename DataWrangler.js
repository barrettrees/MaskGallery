/* Singleton DataWrangler class
 * 
 * Interfaces with Loki.js to store, manage, and query data objects
 * 
 */

var DataWrangler = (function () {

	var db, masks_db

	function init () {

		db = new loki('db.json');
		if (!db.getCollection('masks')) {
			masks_db = db.addCollection('masks');
			masks_db.insert(masks);
		}
		db.saveDatabase();
	}
	
	function getAllMasks() {
		masks_db = db.getCollection('masks');
		// Get all masks sorted by name
		return masks_db.chain().simplesort("name").data();
	}
	
	function getMaskByName (name) {
		//games_db = db.getCollection('games');

		return masks_db.findOne({name: name});
	}

    return { // Public Functions:        
        init : init,
        getAllMasks : getAllMasks, 
        getMaskByName : getMaskByName,
 
        // Returns the unique instance
        // Creates the instance if it doesn't exist yet 
        getInstance : function () {
            if (!instance) {
                instance = createInstance ();
            }
            return instance;
        }

    };
})(); 