import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import RBCSS from './RabbitBreed.module.css';
import { Button, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RabbitBreedItems({ BreedList }) {
  let counterID = 0;
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

  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  console.log(rowSelectionModel);
  console.log(rowsRabbitBreed);
  return (
    <div className={RBCSS.tableBreed}>
      <DataGrid
        rows={rowsRabbitBreed}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        checkboxSelection
        onRowSelectionModelChange={newRowSelectionModel => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        sx={{ cursor: 'pointer', border: 'none' }}
        scope="row"
      />
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          type="text"
          // className={ContactCss.btn}
          // onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>
      </Stack>
    </div>
  );
}
