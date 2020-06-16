import { TestBed } from '@angular/core/testing';

import { PostNewsService } from './post-news.service';

describe('PostNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostNewsService = TestBed.get(PostNewsService);
    expect(service).toBeTruthy();
  });
});
