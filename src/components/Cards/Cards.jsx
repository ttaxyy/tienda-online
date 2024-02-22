import {
  Container,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

const Cards = ({ data, titulo }) => {
  const formatNumberToChileanPesos = (number) => {
    // Formatea el número como un valor monetario con separadores de miles y decimales
    const formattedNumber = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(number);

    return formattedNumber;
  };

  return (
    <Container sx={{ my: "20px" }}>
      <Typography variant="h1" sx={{ mt: "100px" }}>
        {titulo}
      </Typography>
      <Grid container spacing={2} sx={{ mb: "20px" }}>
        {data.map((producto, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={producto.nombre}
                src={producto.imagen}
              />
              <CardContent sx={{ minHeight: "170px" }}>
                <Typography variant="h6">{producto.nombre}</Typography>
              </CardContent>
              <CardActions sx={{ px: "15px" }}>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  sx={{
                    textDecoration: "line-through",
                    lineHeight: "35px",
                    width: "50%",
                  }}
                >
                  {formatNumberToChileanPesos(producto.precio_anterior)}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ width: "50%", textAlign: "right" }}
                >
                  {formatNumberToChileanPesos(producto.nuevo_precio)}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
