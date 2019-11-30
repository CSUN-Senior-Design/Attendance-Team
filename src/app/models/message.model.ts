export enum Type{
    Announcement = "Announcement",
    Warning = "Warning"
}
export class Message {
    recipientName: string;
    recipientAddress: string;
    content: string;
    timestamp: Date;
    type: Type;
}