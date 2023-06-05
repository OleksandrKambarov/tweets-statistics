import { Typography, Box } from '@mui/material';
import { titleStyle, centredItemsStyles, wrapperStyle } from 'shared/basicStyles';
import Icon from 'img/users-tweets.png';

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
        <img src={Icon} alt="" width={90} height={90} />
        <Typography component="h1" sx={titleStyle}>
          Tweets
        </Typography>
      </Box>

      <Box sx={wrapperStyle}></Box>
    </Box>
  );
};
