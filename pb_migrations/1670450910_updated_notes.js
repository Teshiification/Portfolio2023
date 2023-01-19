migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rkn5d03hz0zc909")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pdtkggjg",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rkn5d03hz0zc909")

  // remove
  collection.schema.removeField("pdtkggjg")

  return dao.saveCollection(collection)
})
