import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import firebaseConfig from '../Utility/firebase';


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const MovieService = () => {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const moviesCollection = collection(firestore, 'movies');
    const querySnapshot = await getDocs(moviesCollection);
    const moviesData = querySnapshot.docs.map((doc) => doc.data());
    setMovies(moviesData);
  };

  useEffect(() => {
    fetchMovies();
  }, []); // El segundo argumento [] significa que solo se ejecutará al montar el componente

  const createMovie = async (movie) => {
    const moviesCollection = collection(firestore, 'poesia');
    await addDoc(moviesCollection, {
      name: movie.name,
      autor: movie.autor,
      date: movie.date,
      message: movie.message
    });
    // Después de crear la película, volvemos a cargar la lista actualizada de películas
    fetchMovies();
  };

  return {
    movies,
    createMovie,
  };
};


export default MovieService;