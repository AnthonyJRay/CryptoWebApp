import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// import Spinner from './ui/loadingSpinner';

import classes from './TokenList.module.css';

function TokenList(props) {
  return (
    <TableContainer component={Paper} elevation={5} className={classes.table}>
      <Table className={classes.table} aria-label='crypto token table'>
        {/* Table column labels */}
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableLabels} align='center'>
              Rank
            </TableCell>
            <TableCell className={classes.tableLabels} align='center'>
              Cryptocurrencies
            </TableCell>
            <TableCell className={classes.tableLabels} align='right'>
              Icon
            </TableCell>
            <TableCell className={classes.tableLabels} align='right'>
              Symbol
            </TableCell>
            <TableCell className={classes.tableLabels} align='right'>
              Price
            </TableCell>
            <TableCell className={classes.tableLabels} align='right'>
              Price Change 24h %
            </TableCell>
            <TableCell className={classes.tableLabels} align='right'>
              Market Cap
            </TableCell>
            <TableCell className={classes.tableLabels} align='center'>
              Volume
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Token data */}
        <TableBody>
          {props.tokens.map((token) => (
            <TableRow key={token.name} className={classes.tableData}>
              <TableCell align='center'>{token.market_cap_rank}</TableCell>
              <TableCell align='center' component='th' scope='row'>
                <img
                  style={{ maxWidth: '25%' }}
                  src={token.image}
                  alt='Cryptocurrent Logos'
                />
              </TableCell>
              <TableCell align='right'>{token.name}</TableCell>
              <TableCell align='right'>{token.symbol.toUpperCase()}</TableCell>
              <TableCell align='right'>
                $
                {token.current_price.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </TableCell>
              <TableCell
                align='right'
                className={
                  token.market_cap_change_percentage_24h < 0
                    ? classes.negativeChange
                    : classes.positiveChange
                }>
                {token.market_cap_change_percentage_24h.toFixed(2)}%
              </TableCell>
              <TableCell align='right'>
                ${token.market_cap.toLocaleString('en-US')}
              </TableCell>
              <TableCell align='right'>
                ${token.total_volume.toLocaleString('en-US')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TokenList;
