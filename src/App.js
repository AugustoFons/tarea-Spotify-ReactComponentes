import Seccion from "./componentes/Seccion";
import './App.css';

const lista = [
  {
    id: 1,
    imagen: "https://mosaic.scdn.co/640/ab67616d0000b2736c7112082b63beefffe40151ab67616d0000b273863e0e305637100311c91aa7ab67616d0000b273c8b444df094279e70d0ed856ab67616d0000b273de3c04b5fc750b68899b20a9",
    titulo: "Radiohead",
    descripcion: ""
  },
  {
    id: 2,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8X_pxM9EV7wVEa4sGYMsBmpXYhDcgAJ2HYNES696Q19Dvv2buIEmydBUNz3SYePtRsF0&usqp=CAU",
    titulo: "Canciones que te gustan",
    descripcion: ""
  },
  {
    id: 3,
    imagen: "https://i.scdn.co/image/ab67706f00000003fa6373e72855ebb90b973e5c",
    titulo: "This Is: Gustavo Cerati",
    descripcion: ""
  },
  {
    id: 4,
    imagen: "https://i.scdn.co/image/ab67616d0000b273ba3c350f2a9c3690588a45f6",
    titulo: "La Vela Puerca",
    descripcion: ""
  },
  {
    id: 5,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jZIZ8-Cf55vmpvxEA-toRxTiiMaUFJcVoNxGwwVVk6XX5KI4L8CP6UFgWfwKma-DH8o&usqp=CAU7",
    titulo: "Soft Indie Folk",
    descripcion: ""
  },
  {
    id: 6,
    imagen: "https://i.scdn.co/image/ab67616d00001e026383f3d57f21108771c05323",
    titulo: "The Lumineers",
    descripcion: "",
  },
  {
    id: 7,
    imagen: "https://i.scdn.co/image/ab67616d0000b27339d185844610ef19eb6d93cc",
    titulo: "Rombo del Lago",
    descripcion: "El Kuelgue",
  },
  {
    id: 8,
    imagen: "https://i.scdn.co/image/ab67616d0000b273442a9fb6f763a2abff2ec763",
    titulo: "Habia una Vez...",
    descripcion: "Indio Solari, Los Fundamentalistas del...",
  },
  {
    id: 9,
    imagen: "https://seeded-session-images.scdn.co/v1/img/artist/3jO7X5KupvwmWTHGtHgcgo/en",
    titulo: "Charly Garcia Radio",
    descripcion: "With Divididos, Soda Stereo, Luis Alberto...",
  },
  {
    id: 10,
    imagen: "https://i.scdn.co/image/ab67616d0000b273eed3fde2877221155601b242",
    titulo: "Sistema Nervioso...",
    descripcion: "Estelares",
  },
  {
    id:11,
    imagen: "https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_LARGE-en.jpg",
    titulo: "On Repeat",
    descripcion: "Songs you love right now",
  },
  {
    id:12,
    imagen: "https://i.scdn.co/image/ab67616d0000b27334b14f4c2eeffe3d09b1ad3a",
    titulo: "Por qué no?",
    descripcion: "Bernardo Schiavi",
  },
  {
    id:13,
    imagen: "https://i.scdn.co/image/ab67616d0000b2732068aa68d0054825aebb8b8d",
    titulo: "Polos",
    descripcion: "Ella Es Tan Cargosa",
  },
  {
    id:14,
    imagen: "https://i.scdn.co/image/ab67616d0000b273ee85b693f7e0dba5cdf85a12",
    titulo: "El Éxodo",
    descripcion: "Eté & Los Problems",
  },
  {
    id:15,
    imagen: "https://misc.scdn.co/liked-songs/liked-songs-300.png",
    titulo: "Liked Songs",
    descripcion: "342 songs",
  },
  {
    id:16,
    imagen: "https://i.scdn.co/image/ab67616d0000b273c94c1e1d7dab155a6bd1b144",
    titulo: "Como Quieras",
    descripcion: "Milongas Extremas",
  }
]

function App() {
  return (
    <div style={{
      background: "linear-gradient(to bottom, #202020, #1a1a1a, #141414, #0b0b0b, #000000)",
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      border:' 2px solid white'
    }}
    >
    <div><Seccion lista={lista} /></div>
    </div>
  );
}

export default App;
