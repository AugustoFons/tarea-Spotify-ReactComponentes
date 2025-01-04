import Seccion from "./componentes/Seccion";
import './App.css';
import Header from "./componentes/Header";

const lista = [
	{
		id: 1,
		imagen: "https://i.scdn.co/image/ab67616d0000b273ba3c350f2a9c3690588a45f6",
		titulo: "La Vela Puerca",
		descripcion: "",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/26876646&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	},
	{
		id: 2,
		imagen: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da849d25907759522a25b86a3033",
		titulo: "Canciones que te gustan",
		descripcion: "",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/57262898&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
	},
	{
		id: 3,
		imagen: "https://i.scdn.co/image/ab67706f00000003fa6373e72855ebb90b973e5c",
		titulo: "This Is: Gustavo Cerati",
		descripcion: "",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1497258073&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	},
	{
		id: 4,
		imagen: "https://mosaic.scdn.co/640/ab67616d0000b2736c7112082b63beefffe40151ab67616d0000b273863e0e305637100311c91aa7ab67616d0000b273c8b444df094279e70d0ed856ab67616d0000b273de3c04b5fc750b68899b20a9",
		titulo: "Radiohead",
		descripcion: "",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1743811203&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
	},
	{
		id: 5,
		imagen: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84ccb68d799c276fb85a025a28",
		titulo: "Soft Indie Folk",
		descripcion: "",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/315781489&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	},
	{
		id: 6,
		imagen: "https://i.scdn.co/image/ab67616d00001e026383f3d57f21108771c05323",
		titulo: "The Lumineers",
		descripcion: "",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/134770981&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	},
	{
		id: 7,
		imagen: "https://i.scdn.co/image/ab67616d0000b273723dc9548f1c49e05b63ecde",
		titulo: "El paraiso de los Perros",
		descripcion: "El Kuelgue",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/701184723&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	},
	{
		id: 8,
		imagen: "https://i.scdn.co/image/ab67616d0000b273442a9fb6f763a2abff2ec763",
		titulo: "Habia una Vez...",
		descripcion: "Indio Solari, Los Fundamentalistas del...",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/262437024&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	},
	{
		id: 9,
		imagen: "https://seeded-session-images.scdn.co/v1/img/artist/3jO7X5KupvwmWTHGtHgcgo/en",
		titulo: "Charly Garcia Radio",
		descripcion: "With Fito Paez, Seru Giran, Luis Alberto...",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/130678278&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	},
	{
		id: 10,
		imagen: "https://i.scdn.co/image/ab67616d0000b273eed3fde2877221155601b242",
		titulo: "Sistema Nervioso...",
		descripcion: "Estelares",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/168465586&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	},
	{
		id:11,
		imagen: "https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_LARGE-en.jpg",
		titulo: "On Repeat",
		descripcion: "Songs you love right now",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/199188476&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	},
	{
		id:12,
		imagen: "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
		titulo: "The Beatles",
		descripcion: "The Beatles",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/191189974&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	},
	{
		id:13,
		imagen: "https://i.scdn.co/image/ab67616d00001e020fe864cc5162c51ab11f4492",
		titulo: "Musas (Un homenaje ...",
		descripcion: "Natalia Lafourcade",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/630628230&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	},
	{
		id:14,
		imagen: "https://i.scdn.co/image/ab67616d0000b273ee85b693f7e0dba5cdf85a12",
		titulo: "El Éxodo",
		descripcion: "Eté & Los Problems",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/70036786&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	},
	{
		id:15,
		imagen: "https://i.scdn.co/image/ab67616d0000b273a5a871eb5e81ec03d190aae3",
		titulo: "Invierno del 92",
		descripcion: "El Cuarteto de Nos",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1575143665&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	},
	{
		id:16,
		imagen: "https://i.scdn.co/image/ab67616d0000b273bd5be84fdac71137580eca2b",
		titulo: "Milongas Extremas",
		descripcion: "Milongas Extremas",
		src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/46504093&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
	}
]

function App() {

return (
    <div style={{
		background: "linear-gradient(to bottom, #202020, #1a1a1a, #141414, #0b0b0b, #000000)",
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center'
		}}
		>
		<div style={{width: '100%'}}>
			<Header />
		</div>
		<div><Seccion lista={lista} /></div>
    </div>
);
}

export default App;
