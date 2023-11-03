import { Field, ObjectType } from "@nestjs/graphql";
import { UUIDv4Scalar } from "@sclable/nestjs-graphql-scalar-uuid";
import { Expose } from "class-transformer";

@ObjectType()
export class CvDto {
  @Field(() => UUIDv4Scalar)
  @Expose()
  guid: string;
}
