import orderby from 'lodash.orderby';
import { Configure } from 'react-instantsearch-dom';

import {
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_INDEX_NAME,
  ALGOLIA_SEARCH_ONLY_API_KEY,
} from '../config';
import { InstantSearch } from '../utils/instantSearch';
import AlgoliaLogo from './AlgoliaLogo';
import RefinementList from './RefinementList';
import SearchBox from './SearchBox';
import Cards from './card/Cards';

const SpeakersList = ({ resultsState, searchState, onSearchStateChange }) => (
  <InstantSearch
    appId={ALGOLIA_APPLICATION_ID}
    apiKey={ALGOLIA_SEARCH_ONLY_API_KEY}
    indexName={ALGOLIA_INDEX_NAME}
    resultsState={resultsState}
    onSearchStateChange={onSearchStateChange}
    searchState={searchState}
  >
    <Configure hitsPerPage={10} />
    <SearchBox />
    <RefinementList
      attribute="currentLocation.continent.name"
      transformItems={items =>
        orderby(items, ['label', 'count'], ['asc', 'desc'])
      }
    />
    <Cards />

    <AlgoliaLogo />
  </InstantSearch>
);

export default SpeakersList;
