import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// import TokenListHeader from './TokenListHeader';
// import TokenItem from './Token';

import classes from './TokenList.module.css';

function TokenList(props) {
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Cryptocurrencies</TableCell>
            <TableCell align='right'>Icon</TableCell>
            <TableCell align='right'>Synbol</TableCell>
            <TableCell align='right'>Price</TableCell>
            <TableCell align='right'>Price Change (24h)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tokens.map((token) => (
            <TableRow key={token.name}>
              <TableCell component='th' scope='row'>
                {token.name}
              </TableCell>
              <TableCell align='right'>
                <img
                  style={{ height: '50px' }}
                  src={token.image}
                  alt='Cryptocurrent Logos'
                />
              </TableCell>
              <TableCell align='right'>{token.symbol.toUpperCase()}</TableCell>
              <TableCell align='right'>{token.current_price}</TableCell>
              <TableCell align='right'>
                {token.market_cap_change_percentage_24h}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    // <table className={classes.tokenList}>
    //   <TokenListHeader />
    //   {props.tokens.map((token) => {
    //     return (
    //       <TokenItem
    //         key={token.id}
    //         image={token.image}
    //         name={token.name}
    //         ticker={token.symbol}
    //         price={token.current_price}
    //         priceChange={token.market_cap_change_percentage_24h}
    //       />
    //     );
    //   })}
    // </table>
  );
}

export default TokenList;

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
