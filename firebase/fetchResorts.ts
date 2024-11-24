// firebase/fetchResorts.ts

import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from './firebaseConfig'; // Import Firebase app configuration

const db = getFirestore(app);

export const fetchResorts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'resorts'));
    const resorts = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Firebase document ID
      name: doc.data().name,
      description: doc.data().description,
      location: doc.data().location,
      image: doc.data().image || '',
      rating: doc.data().rating,
      tag: doc.data().tag // Make sure image is optional
      // Make sure image is optional
    }));
    return resorts;
  } catch (error) {
    console.error('Error fetching resorts from Firestore:', error);
    return []; // Return an empty array in case of error
  }
};
