import {StanAPI} from '../';
import {filterEntries} from '../helper';
import {MOVIES} from '../constant';

export const getMovies = () => {
  return StanAPI().get('/data/feed/sample.json').then(response => {
    return filterEntries(response.data.entries, MOVIES);
  }).catch((error) => {
    return error.response.status;
  })
}

