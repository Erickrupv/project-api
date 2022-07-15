import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


export default function ShowCharacter({name, status}) {

    console.log(status)
  return (
    <div>
       


      <Card sx={{ maxWidth: 300, display: "flex" }}>
        <Box
          sx={{
            minWidth: 100,
            minHeight: 100,
            backgroundColor: "#f00",
          }}
        ></Box>
        <CardContent>

          <Typography variant="h5">{name}</Typography>
          <Typography variant="body2">{status}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
