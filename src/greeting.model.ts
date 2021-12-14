import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Greeting {
  @Field()
  text: string;
}
