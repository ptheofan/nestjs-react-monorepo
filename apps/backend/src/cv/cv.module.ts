import { Module } from '@nestjs/common';
import { CvResolver } from './cv.resolver';
import { UUIDv4Scalar } from '@sclable/nestjs-graphql-scalar-uuid';

@Module({
  imports: [],
  controllers: [],
  providers: [UUIDv4Scalar, CvResolver],
})
export class CvModule {}
