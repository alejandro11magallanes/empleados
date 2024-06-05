import { Box, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DatosEmpleados } from './datos';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  axios.defaults.withCredentials = true;
  const [Ocultar, setOcultar] = useState(false);
  const [datos, setDatos] = useState([]);

  const columns = [
    { field: 'EmpleadoClave', headerName: 'ID', width: 100 },
    { field: 'EmpleadoNombre', headerName: 'Nombre', width: 200 }, 
  ];

  const handleGenerarClick = async () => {
    try {
      const response = await axios.get('/webgisa/api/gisa/ght001722');
      setDatos(response.data);
      console.log(response.data);
      setOcultar(true); // Mostrar el DataGrid y el botón "Limpiar"
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleLimpiarClick = () => {
    setOcultar(false); // Ocultar el DataGrid y el botón "Limpiar"
  };

  return (
    <div >
    <Box sx={{display: 'flex', justifyContent: 'center', width: "100%", backgroundColor: "#2644cd", height: "80px"}}>
      <Typography variant='h4' sx={{color: "#fff", marginTop: "20px"}}>Sistema de Cotizaciones</Typography>
    </Box> 
    <Box m={10}>
      <Box sx={{display: "flex"}}>
      <Typography>Solicitar Catalogo de Empleados</Typography>
      <Button sx={{marginLeft: "70%", }}  variant="contained" onClick={handleGenerarClick}>Generar</Button> 
      </Box>
      <br/>
      {Ocultar && ( // Mostrar el DataGrid y el botón "Limpiar" solo si Ocultar es verdadero
          <>
            <DataGrid
               rows={datos}
               columns={columns}
               getRowId={(row) => row.EmpleadoClave}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 20,
                  },
                },
              }}
              pageSizeOptions={[10, 20, 50]}
              disableRowSelectionOnClick
            />
            <Box sx={{ display: 'flex' }}>
              <Button sx={{ marginLeft: '93%' }} variant="contained" onClick={handleLimpiarClick}>Limpiar</Button>
            </Box>
          </>
        )}
    </Box>
    </div>
  );
}

export default App;
