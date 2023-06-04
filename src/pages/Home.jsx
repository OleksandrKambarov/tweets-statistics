import { Typography, Box } from '@mui/material';
import { titleStyle, centredItemsStyles, wrapperStyle } from 'shared/basicStyles';
import Icon from 'img/follow.png';

export const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          ...centredItemsStyles,
          gap: '30px',
          justifyContent: 'flex-start',
          mb: '28px',
          flexWrap: 'wrap',
        }}
      >
        <Typography component="h1" sx={titleStyle}>
          Tweets
        </Typography>
      </Box>

      <Box sx={wrapperStyle}></Box>
    </Box>
  );
};
