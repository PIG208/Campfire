-- CreateTable
CREATE TABLE `campfire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `topic` VARCHAR(255) NOT NULL,
    `creator_id` INTEGER,

    INDEX `creator_id`(`creator_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `campfire_id` INTEGER NOT NULL,
    `sender_id` INTEGER,
    `content` TEXT,
    `post_date` TIMESTAMP(0) NOT NULL DEFAULT (utc_timestamp()),

    INDEX `campfire_id`(`campfire_id`),
    INDEX `sender_id`(`sender_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `participation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `campfire_id` INTEGER NOT NULL,
    `user_id` INTEGER,
    `post_date` TIMESTAMP(0) NOT NULL DEFAULT (utc_timestamp()),

    INDEX `campfire_id`(`campfire_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `password_hash` CHAR(60) NOT NULL,

    UNIQUE INDEX `user.name_unique`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `campfire` ADD FOREIGN KEY (`creator_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD FOREIGN KEY (`campfire_id`) REFERENCES `campfire`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD FOREIGN KEY (`sender_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `participation` ADD FOREIGN KEY (`campfire_id`) REFERENCES `campfire`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `participation` ADD FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
