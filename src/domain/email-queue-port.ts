export interface EmailQueuePort {
  enqueueSendEmailJob(data: unknown): Promise<void>;
}
