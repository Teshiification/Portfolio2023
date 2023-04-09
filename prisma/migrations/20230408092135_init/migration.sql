-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_StorageItemTimestamps" (
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "storageId" INTEGER NOT NULL,
    CONSTRAINT "StorageItemTimestamps_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES "StorageItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_StorageItemTimestamps" ("storageId", "timestamp") SELECT "storageId", "timestamp" FROM "StorageItemTimestamps";
DROP TABLE "StorageItemTimestamps";
ALTER TABLE "new_StorageItemTimestamps" RENAME TO "StorageItemTimestamps";
CREATE UNIQUE INDEX "StorageItemTimestamps_timestamp_key" ON "StorageItemTimestamps"("timestamp");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
