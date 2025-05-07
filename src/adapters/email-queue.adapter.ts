import { EmailQueuePort } from '../domain/email-queue-port.js';

export default class EmailQueueAdapter implements EmailQueuePort {
  enqueueSendEmailJob(data: unknown): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
