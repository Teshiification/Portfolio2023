-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "StorageItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "StorageItemTimestamps" (
    "timestamp" DATETIME NOT NULL,
    "storageId" INTEGER NOT NULL,
    CONSTRAINT "StorageItemTimestamps_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES "StorageItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "StorageItemTimestamps_timestamp_key" ON "StorageItemTimestamps"("timestamp");
