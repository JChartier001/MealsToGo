import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components/native';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';

import { RestaurantsContextProvider } from './src/services/restaurant/restaurant.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavoritesContextProvider } from './src/services/favorites/favorites.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: "AIzaSyCJ23stATh2I-xUj2cLHzZSmARAbcRDsFU",
  authDomain: "mealstogo-7bbb3.firebaseapp.com",
  projectId: "mealstogo-7bbb3",
  storageBucket: "mealstogo-7bbb3.appspot.com",
  messagingSenderId: "503822756247",
  appId: "1:503822756247:web:8d33455af1c39baccc3cd2"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)


export default function App() {
	


	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	
	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthenticationContextProvider>
				<FavoritesContextProvider>
					<LocationContextProvider>
						<RestaurantsContextProvider>
							<Navigation />
						</RestaurantsContextProvider>
					</LocationContextProvider>
					</FavoritesContextProvider>
					</AuthenticationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style='auto' />
		</>
	);
}
