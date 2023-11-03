import { Query, Resolver } from '@nestjs/graphql';
import { CvDto } from './dtos/cv.dto';

@Resolver(() => CvDto)
export class CvResolver {
  @Query(() => [CvDto])
  async getCvs(): Promise<CvDto[]> {
    return [];
  }
}
