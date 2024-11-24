import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "@/firebase/firebaseConfig"; // Ensure Firebase app is properly initialized
import { ResortProps } from '@/components/Resorts'; // Adjust according to your Resort type

const db = getFirestore(app);

export const fetchResorts = async (): Promise<ResortProps[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "resorts"));
    const resorts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name || '', // Ensure these fields match your Firestore schema
      location: doc.data().location || '',
      description: doc.data().description || '',
      image: doc.data().image || '', // Ensure image field exists in Firestore
      rating: doc.data().rating || '', // Ensure rating field exists in Firestore
    })) as ResortProps[];

    return resorts;
  } catch (error) {
    console.error("Error fetching resorts from Firestore:", error);
    throw error;
  }
};
