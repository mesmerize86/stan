import {RELEASEYEAR, ENTRYSIZE} from '../constant';

/**
 * filter entries
 *
 * @param entries
 * @param type
 * @returns {*}
 */
export const filterEntries = (entries, type) => {
  return entries.filter(entry => entry.programType === type && entry.releaseYear >= RELEASEYEAR).slice(0, ENTRYSIZE).sort((a, b) => {
    return a.title.localeCompare(b.title)
  });
}