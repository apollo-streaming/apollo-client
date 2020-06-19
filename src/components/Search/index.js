import React from 'react';
import * as PropTypes from 'prop-types';

import GRID from '../../design-system/GRID';
import Flex from '../../design-system/Flex';
import Input from '../../design-system/Input';

function Search({ search, setSearch, onSubmit }) {
  return (
    <Flex justifyContent="space-between">
      <form onSubmit={onSubmit}>
        <Input
          icon="search"
          placeholder="O que você quer ouvir?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          width={GRID.GET(60)}
        />
      </form>
    </Flex>
  );
}

Search.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Search;
