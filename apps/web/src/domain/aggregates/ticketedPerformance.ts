import { type Performance } from '../models/performance';
import { type Ticketing } from '../models/ticketing';

export interface TicketedPerformanceAggregate extends Performance {
  tickets: Ticketing;
}
