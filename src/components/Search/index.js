import React from 'react';
import * as PropTypes from 'prop-types';

import GRID from '../../design-system/GRID';
import Flex from '../../design-system/Flex';
import Input from '../../design-system/Input';

function Search({ search, onSearch }) {
  return (
    <Flex justifyContent="space-between">
      <Input
        placeholder="O que você quer ouvir?"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        width={GRID.GET(60)}
      />
    </Flex>
  );
}

Search.propTypes = {
  search: PropTypes.string,
  onSearch: PropTypes.func,
};

export default Search;
