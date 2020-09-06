import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';

import { UsersListComponent } from './users-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsersListComponent', () => {
  let spectator: Spectator<UsersListComponent>;
  const createComponent = createComponentFactory({
    component: UsersListComponent,
    imports: [HttpClientTestingModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    const button = spectator.query(byTestId('fetch-users'));
    spectator.click(button);

    const list = spectator.query(byTestId('users-list'));
    expect(list).toBeTruthy();
  });
});
