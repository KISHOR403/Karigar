import { Worker, Job } from 'bullmq';
import IORedis from 'ioredis';
import * as dotenv from 'dotenv';

dotenv.config();

const redisConnection = new IORedis({
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD || undefined,
  maxRetriesPerRequest: null,
  lazyConnect: true,
});

console.info('🧵 Karigar Background Worker initializing...');

// Media Processing Worker (Image optimization, CDN upload, video transcodes)
const mediaWorker = new Worker(
  'media-processing',
  async (job: Job) => {
    console.info(`[Worker:media-processing] Processing job ${job.id}: ${job.name}`, job.data);
    return { success: true, processedUrl: job.data.url };
  },
  { connection: redisConnection },
);

// Notifications Dispatch Worker (Patron custom order alerts, email dispatches)
const notificationWorker = new Worker(
  'notifications',
  async (job: Job) => {
    console.info(`[Worker:notifications] Dispatching alert ${job.id}`, job.data);
    return { dispatched: true, recipient: job.data.email };
  },
  { connection: redisConnection },
);

mediaWorker.on('completed', (job) => {
  console.info(`[Worker:media-processing] Job ${job.id} completed.`);
});

notificationWorker.on('completed', (job) => {
  console.info(`[Worker:notifications] Job ${job.id} dispatched.`);
});

console.info('🚀 Karigar BullMQ background workers listening for jobs.');
