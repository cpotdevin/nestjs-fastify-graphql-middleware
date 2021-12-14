import { Query, Resolver } from '@nestjs/graphql';
import { Greeting } from './greeting.model';

@Resolver(Greeting)
export class AppResolver {
  @Query(() => Greeting)
  greeting(): Greeting {
    return {
      text: 'Hello, World!',
    };
  }
}
