import { Module } from '@nestjs/common';
import { SuccessStatus, ErrorStatus, BadRequestStatus, NotFoundStatus, UnAuthorized } from './status-code.constants'; // Import the status codes

@Module({
  providers: [
    { provide: 'SuccessStatus', useValue: SuccessStatus },
    { provide: 'ErrorStatus', useValue: ErrorStatus },
    { provide: 'BadRequestStatus', useValue: BadRequestStatus },
    { provide: 'NotFoundStatus', useValue: NotFoundStatus },
    { provide: 'UnAuthorized', useValue: UnAuthorized },
  ],
  exports: ['SuccessStatus', 'ErrorStatus', 'BadRequestStatus', 'NotFoundStatus', 'UnAuthorized'],
})
export class StatusCodesModule {}
