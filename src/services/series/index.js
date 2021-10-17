import {StanAPI} from '../';
import {filterEntries} from '../helper';
import {SERIES} from '../constant';

export const getSeries = () => {
  return StanAPI().get('/data/feed/sample.json').then(response => {
    return filterEntries(response.data.entries, SERIES);
  }).catch((error) => {
    return error.response.status;
  })
}

