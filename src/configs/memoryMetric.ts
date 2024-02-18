import { logger } from "../utils/logger";

export class MemoryMetric {
    public meter(title: string): void {
        const used = process.memoryUsage();

        logger.info(
            `Memory Metric: ${title}\n\tRss Memory: ${Math.round((used.rss / 1024 / 1024) * 100) / 100} MB\n\tHeapTotal Memory: ${Math.round((used.heapTotal / 1024 / 1024) * 100) / 100} MB\n\tHeapUser Memory: ${Math.round((used.heapUsed / 1024 / 1024) * 100) / 100} MB\n\tExternal Memory: ${Math.round((used.external / 1024 / 1024) * 100) / 100} MB\n\tArrayBuffers Memory: ${Math.round((used.arrayBuffers / 1024 / 1024) * 100) / 100} MB`
        );

    }
}