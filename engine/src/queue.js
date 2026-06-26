/**
 * Love Our Listings — Queue Manager
 * Persists all posts to a JSON file queue
 * States: pending → enriched → approved → published → rejected
 */

const fs = require('fs');
const path = require('path');

const QUEUE_FILE = path.join(__dirname, '..', 'queue', 'posts.json');
const PUBLISHED_FILE = path.join(__dirname, '..', 'queue', 'published.json');

function ensureFiles() {
  const qDir = path.dirname(QUEUE_FILE);
  if (!fs.existsSync(qDir)) fs.mkdirSync(qDir, { recursive: true });
  if (!fs.existsSync(QUEUE_FILE)) fs.writeFileSync(QUEUE_FILE, JSON.stringify([], null, 2));
  if (!fs.existsSync(PUBLISHED_FILE)) fs.writeFileSync(PUBLISHED_FILE, JSON.stringify([], null, 2));
}

function readQueue() {
  ensureFiles();
  try {
    return JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'));
  } catch { return []; }
}

function readPublished() {
  ensureFiles();
  try {
    return JSON.parse(fs.readFileSync(PUBLISHED_FILE, 'utf8'));
  } catch { return []; }
}

function writeQueue(items) {
  ensureFiles();
  fs.writeFileSync(QUEUE_FILE, JSON.stringify(items, null, 2));
}

function writePublished(items) {
  ensureFiles();
  fs.writeFileSync(PUBLISHED_FILE, JSON.stringify(items, null, 2));
}

function getExistingIds() {
  const queue = readQueue();
  const published = readPublished();
  return new Set([...queue, ...published].map(i => i.id));
}

function addToQueue(newItems) {
  const queue = readQueue();
  const existingIds = new Set(queue.map(i => i.id));
  const published = readPublished();
  const publishedIds = new Set(published.map(i => i.id));

  const fresh = newItems.filter(i => !existingIds.has(i.id) && !publishedIds.has(i.id));
  const updated = [...fresh, ...queue];
  writeQueue(updated);
  return fresh.length;
}

function updateItem(id, updates) {
  const queue = readQueue();
  const idx = queue.findIndex(i => i.id === id);
  if (idx === -1) return false;
  queue[idx] = { ...queue[idx], ...updates, updatedAt: new Date().toISOString() };
  writeQueue(queue);
  return true;
}

function updateBatch(items) {
  const queue = readQueue();
  const map = new Map(queue.map(i => [i.id, i]));
  items.forEach(item => {
    if (map.has(item.id)) map.set(item.id, { ...map.get(item.id), ...item });
  });
  writeQueue([...map.values()]);
}

function approveItem(id) {
  return updateItem(id, { status: 'approved', approvedAt: new Date().toISOString() });
}

function rejectItem(id, reason = '') {
  return updateItem(id, { status: 'rejected', rejectedAt: new Date().toISOString(), rejectReason: reason });
}

function publishItem(id) {
  const queue = readQueue();
  const item = queue.find(i => i.id === id);
  if (!item) return false;

  // Move to published
  const published = readPublished();
  published.unshift({ ...item, status: 'published', publishedAt: new Date().toISOString() });
  writePublished(published);

  // Remove from queue
  writeQueue(queue.filter(i => i.id !== id));
  return true;
}

function getByStatus(status) {
  return readQueue().filter(i => i.status === status);
}

function getStats() {
  const queue = readQueue();
  const published = readPublished();
  const counts = {};
  queue.forEach(i => { counts[i.status] = (counts[i.status] || 0) + 1; });
  return {
    ...counts,
    published: published.length,
    total: queue.length + published.length,
  };
}

module.exports = {
  readQueue,
  readPublished,
  addToQueue,
  updateItem,
  updateBatch,
  approveItem,
  rejectItem,
  publishItem,
  getByStatus,
  getExistingIds,
  getStats,
};
