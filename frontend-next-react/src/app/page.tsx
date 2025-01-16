import { fetchLocations } from '@services/locationService';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface Location {
  code: number;
  name: string;
  image: string;
  creationDate: string;
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function Home() {
  const locations: Location[] = await fetchLocations();
  return (
    <div className="bg-gray-100 min-h-screen grid grid-rows-[auto,1fr]">
      <main>
        <div className="text-center pt-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Bienvenido a Locations App</h1>
          <p className="text-gray-600 mb-8">
            Aquí encontrarás una colección de sedes con su información y fecha de creación.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mx-4">
          {locations.map((location) => (
            <Card key={location.code} sx={{ width: 345, backgroundColor: '#1f2937', color: '#fff' }}>
              <CardMedia component="img" height="140" image={location.image} alt="Location" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="text.white">
                  {location.name}
                </Typography>
                <Typography variant="body2" color="text.white">
                  Codigo: {location.code}
                </Typography>
                <Typography variant="body2" color="text.white">
                  {formatDate(location.creationDate)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
