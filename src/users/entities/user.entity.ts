import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export type UserDocument = User & Document;

@Schema({ collection: "User" })
export class User {
    @ApiProperty({ required: true }) // Indicate that name is required
    @Prop()
    name: string;

    @ApiProperty({ required: true }) // Indicate that email is required
    // @Prop()
    @Prop({ unique: true }) // Add uniqueness constraint
    email: string;

    @ApiProperty({ required: true }) // Indicate that password is required
    @Prop()
    password: string;

    @Prop({ default: 1 })
    role: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
