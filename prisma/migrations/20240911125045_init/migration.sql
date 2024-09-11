-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "google_id" TEXT NOT NULL,
    "avatar_url" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "last_login" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "urls" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "original_url" TEXT NOT NULL,
    "shortened_hash" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiration_date" DATETIME,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "creator_ip" TEXT,
    "custom_alias" TEXT,
    "user_id" TEXT,
    CONSTRAINT "urls_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_google_id_key" ON "users"("google_id");

-- CreateIndex
CREATE INDEX "users_google_id_idx" ON "users"("google_id");

-- CreateIndex
CREATE UNIQUE INDEX "urls_shortened_hash_key" ON "urls"("shortened_hash");

-- CreateIndex
CREATE UNIQUE INDEX "urls_custom_alias_key" ON "urls"("custom_alias");

-- CreateIndex
CREATE INDEX "urls_shortened_hash_idx" ON "urls"("shortened_hash");
