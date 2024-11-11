import { initializeApp } from 'firebase/app';
import { getFirestore, collection, deleteDoc, doc, getDocs, addDoc, Timestamp, query, where, getCountFromServer  } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import firebaseConfig from '../Utility/firebase';


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const sentenceCollection = collection(firestore, 'Sentences');
const StreakCollection = collection(firestore, 'WeeklyChallenges');

export const getSentences = async () => {
  const actualStreak = await loadStreak(new Date());
  const q = query(sentenceCollection, where('idStreak', '==', actualStreak.id)); 
  const snapshot = await getDocs(q);
  console.log("count " + await countSentencesByWeek());
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Función para añadir una nueva película
export const createSentence = async (sentence) => {
  const actualStreak = await loadStreak(sentence.date);
 
  await addDoc(sentenceCollection, {
    sentence: sentence.sentence,
    translation: sentence.translation,
    date: sentence.date,
    idStreak: actualStreak.id,
  });
};

export const deleteSentences = async(documentId) => {
  const documentRef = doc(firestore, `Sentences/${documentId}`);
  await deleteDoc(documentRef);
}


export const loadStreak = async (date) => {
  const q = query(StreakCollection, where('startDate', '<=', date),  where('finalDate', '>=', date)); 
  const documentRef = await getDocs(q);

  return documentRef.docs[0] ? { id: documentRef.docs[0].id, ...documentRef.docs[0].data() } : null;
}


export const countSentencesByWeek = async () => {
  const actualStreak = await loadStreak(new Date());
  const q = query(sentenceCollection, where('idStreak', '==', actualStreak.id)); 
  const snapshot = await getCountFromServer(q);

  return snapshot.data().count;
};

    


//const SentencesService = () => {
/* const [sentence, setSentence] = useState([]);
 
 const fetchSentence = async () => {
   const sentenceCollection = collection(firestore, 'Sentences');
   const querySnapshot = await getDocs(sentenceCollection);
   const sentenceData = querySnapshot.docs.map((doc) => doc.data());
   console.log(sentenceData);
   setSentence(sentenceData);
 };

 useEffect(() => {
  // fetchSentence();*
 }, []); // El segundo argumento [] significa que solo se ejecutará al montar el componente*/

/* const createSentence = async (sentence) => {
   const sentenceCollection = collection(firestore, 'Sentences');
   await addDoc(sentenceCollection, {
     sentence: sentence.sentence,
     translation: sentence.translation,
     date: sentence.date,
   });
   // Después de crear la película, volvemos a cargar la lista actualizada de películas
  // fetchSentence();
 };*/

/* return {
   sentence,
   createSentence,
 };
};*/


/*export default SentencesService;*/