import {INavigation} from "../../interfaces/navigation.interface";
import {ISvgNavigation} from "../../interfaces/svg-navigation";

export const NAVIGATION_TYPES : INavigation[] = [
  {
    title: 'Техника',
    link: '/agricultural-machinery'
  },
  {
    title: 'Запчасти',
    link: '/spares'
  },
  {
    title: 'Конфигуратор',
    link: '/configurator'
  }
]

export const NAVIGATION_SVG_TYPES : ISvgNavigation[] = [
  {
    link: '/agricultural-machinery',
    svg: '<svg class="svg-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path class="symbol" d="M7.84315 0.00714136C6.63635 0.136279 5.31617 0.574565 4.31996 1.17721C3.30755 1.78768 2.40853 2.62903 1.75249 3.57996C0.885865 4.8322 0.424206 6.22141 0.363461 7.7515C0.201475 11.9113 3.31565 15.4959 7.59207 16.0633C8.17522 16.1415 9.23622 16.1455 9.83962 16.0672C11.0019 15.9185 12.2249 15.488 13.1765 14.8893L13.5086 14.6819L15.5213 16.7051C18.9959 20.1957 18.7448 19.9766 19.2631 19.9805C19.5264 19.9805 19.5952 19.9648 19.7855 19.8631C20.0407 19.7261 20.2107 19.5422 20.2958 19.2996C20.4092 18.9787 20.3646 18.6421 20.1743 18.3682C20.1298 18.3017 19.0161 17.1668 17.704 15.8481C16.3919 14.5293 15.2783 13.4062 15.2256 13.3475L15.1365 13.2457L15.416 12.8857C16.2907 11.7626 16.8495 10.4086 17.0358 8.96461C17.0966 8.4872 17.0844 7.55192 17.0156 7.01972C16.5377 3.46256 13.6625 0.613698 9.98946 0.0580139C9.5116 -0.012425 8.30481 -0.0437311 7.84315 0.00714136ZM9.82747 2.17509C12.3099 2.63686 14.2294 4.44088 14.7721 6.82406C14.9017 7.39148 14.9219 8.42067 14.8166 9.02331C14.3631 11.5787 12.3099 13.5471 9.67358 13.9579C9.23217 14.0245 8.26431 14.0323 7.8391 13.9736C5.59155 13.6449 3.74491 12.2048 2.92283 10.1386C2.47737 9.02723 2.41663 7.59106 2.7649 6.42882C3.2549 4.79698 4.3969 3.47038 5.97221 2.7073C6.61206 2.39424 7.2195 2.22205 8.10637 2.10074C8.3696 2.06552 9.49945 2.11248 9.82747 2.17509Z" fill="white"/>\n' +
      '</svg>\n'
  }
]
