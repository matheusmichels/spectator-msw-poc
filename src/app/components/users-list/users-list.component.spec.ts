import { HttpClientModule } from '@angular/common/http';
import { byTestId, createComponentFactory, Spectator } from '@ngneat/spectator';

import { UsersListComponent } from './users-list.component';

describe('UsersListComponent', () => {
  let spectator: Spectator<UsersListComponent>;
  const createComponent = createComponentFactory({
    component: UsersListComponent,
    imports: [HttpClientModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should fetch users', (done) => {
    const button = spectator.query(byTestId('fetch-users'));
    spectator.click(button);

    setTimeout(() => {
      spectator.detectComponentChanges();

      const list = spectator.query(byTestId('users-list'));
      expect(list).toBeTruthy();
      done();
    });
  });
});
