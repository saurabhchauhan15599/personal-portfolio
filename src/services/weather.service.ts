/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from './index.service';

export async function getCurrentWeather(latitude: string, longitude: string) {
  try {
    const response = await httpClient.get(
      `?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.REACT_APP_OPEN_WEATHER_API}`
    );
    return response;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
