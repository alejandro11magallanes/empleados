import { Box, Button, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DatosEmpleados } from './datos';
import './App.css';
import { useState } from 'react';

function App() {
  const [Ocultar, setOcultar] = useState(false);
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'nombre', headerName: 'Nombre', width: 200 }, 
  ];

  const handleGenerarClick = () => {
    setOcultar(true); // Mostrar el DataGrid y el botón "Limpiar"
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
              rows={DatosEmpleados}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[10]}
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
