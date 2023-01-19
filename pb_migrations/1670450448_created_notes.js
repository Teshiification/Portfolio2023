migrate((db) => {
  const collection = new Collection({
    "id": "rkn5d03hz0zc909",
    "created": "2022-12-07 22:00:48.946Z",
    "updated": "2022-12-07 22:00:48.946Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tetywhwl",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rkn5d03hz0zc909");

  return dao.deleteCollection(collection);
})
