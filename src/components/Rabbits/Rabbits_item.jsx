import React from 'react';
// import Notiflix from 'notiflix';
// import { getRabbits } from '../../redux/rabbits/rabbitsSelector';
// import { nanoid } from 'nanoid';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/rabbits/rabbitsOperation';
// import RabbitsCss from '../Rabbits/Rabbits.module.css';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
// import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
// import Stack from '@mui/material/Stack';
let counterID = 0;

export const RabbitsItem = Rabbits => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'gender', headerName: 'Gender', width: 130 },
    { field: 'breed', headerName: 'Breed', width: 130 },
    { field: 'photoRabbit', headerName: 'Photo', width: 130 },
    { field: 'dateBirthDay', headerName: 'BirthDay', width: 130 },
    { field: 'cage', headerName: 'Cage', width: 130 },
    { field: 'Mother', headerName: 'Mother', width: 130 },
    { field: 'Father', headerName: 'Father', width: 130 },
    { field: 'favorite', headerName: 'Favorite', width: 130 },
  ];

  const rowsRabbit = [];

  Rabbits.Rabbits.map(el =>
    rowsRabbit.push({
      id: (counterID += 1),
      gender: el.gender,
      name: el.name,
      breed: el.breed,
      photoRabbit: el.photoRabbit,
      dateBirthDay: el.dateBirthDay,
      cage: el.cage,
      Mother: el.Mother,
      Father: el.Father,
      favorite: el.favorite,
    })
  );

  // useEffect(() => {
  //   console.log(Rabbits);
  //   if (Rabbits.Rabbits.length === 0)
  //     Notiflix.Notify.warning(
  //       'Ще не додано жодного кролика. Будь ласка додайте кролика!!!'
  //     );
  // }, [Rabbits]);

  // const rowsRabbit = JSON.stringify(Rabbits.Rabbits);
  // console.log(rowsRabbit);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowsRabbit}
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
};
