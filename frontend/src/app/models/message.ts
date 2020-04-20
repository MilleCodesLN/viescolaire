import { Timestamp } from 'rxjs';

export interface Message {
    id: Number;
    messages: String;
    user_id: Number,
    created_at: Date;
    updated_at: Date;
}