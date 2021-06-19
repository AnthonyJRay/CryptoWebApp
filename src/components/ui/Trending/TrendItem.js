import React from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

function TrendItem(props) {
  console.log(props, 'Props from within TrendItem');
  return (
    <Card className='trendItem' variant='outlined'>
      <Avatar className='trendItemImage' src={props.img} alt='' />
      <Typography>{props.name}</Typography>
      <Typography>{props.symbol}</Typography>
    </Card>
  );
}

export default TrendItem;
