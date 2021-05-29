import React from 'react';

import TokenListHeader from './TokenListHeader';
import TokenItem from './Token';

import classes from './TokenList.module.css';

function TokenList(props) {
  return (
    <table className={classes.tokenList}>
      <TokenListHeader />
      {props.tokens.map((token) => {
        return (
          <TokenItem
            key={token.id}
            image={token.image}
            name={token.name}
            ticker={token.symbol}
            price={token.current_price}
            priceChange={token.market_cap_change_percentage_24h}
          />
        );
      })}
    </table>
  );
}

export default TokenList;
