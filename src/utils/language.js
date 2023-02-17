import { currentLanguage } from "./currentLanguaje";

const language = {
  en: {
    tab1: "Home",
    tab2: "Search",
    tab3: "Favorites",
    tab4: "Settings",
    placeHolderSearch: "🔍 Search city",
    titleFav: "Favorites Cities",
    titleSettg: "Settings",
    errorLocate:
      "To see the information of the place where you are, activate the location and restart the application.",
    wait: "Wait",
    notFound: "city not found",
    cityAdded: "City already added",
    alertDeleteFav: "Are you sure to remove this city from your favourites?",
    cancel: "cancel",
    remove: "remove",
    theme: "Theme",
    light: "light",
    dark: "dark",
    useDS: "Use device settings",
    close: "close",
    clouds: "Cloudiness",
    feelsLike: "Feels Like",
    lastUpdate: "Last update",
    current: "Current",
    humidity: "Humidity",
    temperature: "Temperature",
    minimal: "Minimal",
    maximum: "Maximum",
    atmosphericTitle: "Atmospheric pressure",
    aboveSeaL: "Above sea level",
    atGroundL: "At ground level",
    wind: "Wind",
    visibility: "Visibility",
    direction: "Direction",
    gusts: "Gusts",
    sunrise: "Sunrise",
    sunset: "Sunset",
    overall: "Overall",
    na: "not available",
    noFavoritesMsg:
      "No favorites for now, to add one go to 🔍 and search for a city, then tap ⭐",
    loadingMsg: "We are updating the information of your favorite cities.",
  },
  es: {
    tab1: "Inicio",
    tab2: "Buscar",
    tab3: "Favoritos",
    tab4: "Ajustes",
    placeHolderSearch: "🔍 Buscar ciudad",
    titleFav: "Ciudades Favoritas",
    titleSettg: "Ajustes",
    errorLocate:
      "Para ver la información del lugar donde te encuentras activa la ubicación y reinicia la aplicación.",
    wait: "Espera",
    notFound: "ciudad no encontrada",
    cityAdded: "Ciudad ya agregada",
    alertDeleteFav: "¿Estás seguro de eliminar esta ciudad de tus favoritos?",
    cancel: "cancelar",
    remove: "eliminar",
    theme: "Tema",
    light: "claro",
    dark: "oscuro",
    useDS: "Usar configuración del dispositivo",
    close: "cerrar",
    clouds: "Nubosidad",
    feelsLike: "Sensación térmica",
    lastUpdate: "Última actualización",
    current: "Actual",
    humidity: "Humedad",
    temperature: "Temperatura",
    minimal: "Mínima",
    maximum: "Máxima",
    atmosphericTitle: "Presión atmosférica",
    aboveSeaL: "Sobre el nivel del mar",
    atGroundL: "A nivel del suelo",
    wind: "Viento",
    visibility: "Visibilidad",
    direction: "Dirección",
    gusts: "Ráfagas",
    sunrise: "Amanecer",
    sunset: "Atardecer",
    overall: "General",
    na: "no disponible",
    noFavoritesMsg:
      "No hay favoritos por ahora, para agregar uno, vaya a 🔍 y busque una ciudad, luego toque ⭐",
    loadingMsg:
      "Estamos actualizando la información de tus ciudades favoritas.",
  },
};
const handlerLanguage = (title) => {
  if (currentLanguage === "es" || currentLanguage === "en") {
    return language[currentLanguage][title];
  } else {
    return language.en[title];
  }
};

export default handlerLanguage;
