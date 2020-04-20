import { Timestamp } from 'rxjs';

export interface Message {
    id: Number;
    message: String;
    user_id: Number,
    created_at: Date;
    updated_at: Date;
}