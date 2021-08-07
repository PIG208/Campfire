/*
  Warnings:

  - A unique constraint covering the columns `[topic]` on the table `campfire` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `campfire.topic_unique` ON `campfire`(`topic`);
