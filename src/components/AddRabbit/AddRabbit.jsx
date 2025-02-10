// import { useEffect, useState } from 'react';
import * as MUI from '@mui/material';

export const RabbitForm = () => {
  return (
    <div>
      <form>
        <MUI.Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        ></MUI.Box>
      </form>
    </div>
  );
};
