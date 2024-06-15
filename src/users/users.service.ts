import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SuccessStatus, ErrorStatus, BadRequestStatus, NotFoundStatus, UnAuthorized , CreatedStatus , ConflictStatus } from "../status-codes/status-code.constants"


@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async getAll() {
        try {
            const users = await this.userModel.find().exec();
            return { status: true, data: users, statusCode: SuccessStatus };
        } catch (error) {
            return { status: false, message: 'Error fetching users', statusCode: ErrorStatus };
        }
    }

    async create(inputUser: User) {
        try {
            if (inputUser.name && inputUser.email && inputUser.password) {
                if (typeof inputUser.name !== 'string') {
                    return { status: false, message: 'Invalid input type', statusCode: BadRequestStatus };
                } else {
                    const newUser = new this.userModel(inputUser);
                    await newUser.save();
                    return { status: true, message: 'New user added successfully', statusCode: CreatedStatus };
                }
            } else {
                return { status: false, message: 'Please Fill All fields', statusCode: BadRequestStatus };
            }
        } catch (error) {
            if (error.code === 11000) { // Check if it's a duplicate key error (email already exists)
                return { status: false, message: 'Email already exists', statusCode: ConflictStatus }; // Conflict status
            }
            return { status: false, message: 'New user not added', statusCode: ErrorStatus };
        }
    }


    async getById(id: string) {
        try {
            const users = await this.userModel.findById(id).exec();
            return { status: true, data: users, statusCode: SuccessStatus };
        } catch (error) {
            return { status: false, message: 'Error fetching users', statusCode: ErrorStatus };
        }
    }

    async update(id: string, inputUser: User) {
        try {
            if (inputUser.name && inputUser.email && inputUser.password) {
                if (typeof inputUser.name !== 'string') {
                    return { status: false, message: 'Invalid input type', statusCode: BadRequestStatus };
                } else {
                    await this.userModel.findByIdAndUpdate(id, inputUser, { new: true });
                    return { status: true, message: 'User updates successfully', statusCode: SuccessStatus };
                }
            } else {
                return { status: false, message: 'Please Fill All fields', statusCode: BadRequestStatus };
            }
        } catch (error) {
            if (error.code === 11000) { // Check if it's a duplicate key error (email already exists)
                return { status: false, message: 'Email already exists', statusCode: ConflictStatus }; // Conflict status
            }
            return { status: false, message: 'New user not added', statusCode: ErrorStatus };
        }
    }

    async delete(id: string) {
        try {
            const users = await this.userModel.findByIdAndDelete(id);
            return { status: true, data: users, statusCode: SuccessStatus };
        } catch (error) {
            return { status: false, message: 'Error deleting users', statusCode: ErrorStatus };
        }
    }
}
