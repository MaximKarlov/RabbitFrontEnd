import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import RBCSS from './RabbitBreed.module.css';

let counterID = 0;

export default function RabbitBreedItems({ BreedList }) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'color', headerName: 'Color', width: 130 },
    { field: 'about', headerName: 'About', width: 400 },
  ];

  const rowsRabbitBreed = [];

  BreedList.map(el =>
    rowsRabbitBreed.push({
      id: (counterID += 1),
      name: el.name,
      color: el.color,
      about: el.about,
    })
  );

  return (
    <div className={RBCSS.tableBreed}>
      <DataGrid
        rows={rowsRabbitBreed}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
