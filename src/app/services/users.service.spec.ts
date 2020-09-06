import { HttpClientTestingModule } from '@angular/common/http/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let spectator: SpectatorService<UsersService>;
  const createComponent = createServiceFactory({
    service: UsersService,
    imports: [HttpClientTestingModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
