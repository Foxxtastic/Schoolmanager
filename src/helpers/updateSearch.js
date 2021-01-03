import { history } from '../history'
import qs from 'qs';
import pickBy from 'lodash.pickby';

export function updateSearch(params) {
    const currentParams = qs.parse(history.location.search, { ignoreQueryPrefix: true });
    const finalParams = pickBy({ ...currentParams, ...params }, value => value !== null);
    history.push({
        search: `?${qs.stringify(finalParams)}`,
    });
}