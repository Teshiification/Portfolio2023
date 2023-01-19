migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hkfly6x5clsev4d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xdlojgoe",
    "name": "description",
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
  const collection = dao.findCollectionByNameOrId("hkfly6x5clsev4d")

  // remove
  collection.schema.removeField("xdlojgoe")

  return dao.saveCollection(collection)
})
