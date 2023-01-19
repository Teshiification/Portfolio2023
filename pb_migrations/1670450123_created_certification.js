migrate((db) => {
  const collection = new Collection({
    "id": "hkfly6x5clsev4d",
    "created": "2022-12-07 21:55:23.021Z",
    "updated": "2022-12-07 21:55:23.021Z",
    "name": "certification",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lhzowo7c",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "b5nb0bq8",
        "name": "acquired",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hkfly6x5clsev4d");

  return dao.deleteCollection(collection);
})
