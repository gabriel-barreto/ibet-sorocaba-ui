import { ChevronLeft as Prev } from 'styled-icons/boxicons-regular/ChevronLeft';
import { ChevronRight as Next } from 'styled-icons/boxicons-regular/ChevronRight';

import Slide1 from '../../assets/Structure/slide-1.jpg';
import Slide2 from '../../assets/Structure/slide-2.jpg';
import Slide3 from '../../assets/Structure/slide-3.jpg';
import Slide4 from '../../assets/Structure/slide-4.jpg';
import Slide5 from '../../assets/Structure/slide-5.jpg';
import Slide6 from '../../assets/Structure/slide-6.jpg';

export const slides = [
  { label: 'Slide 1', url: Slide1, key: '1' },
  { label: 'Slide 2', url: Slide2, key: '2' },
  { label: 'Slide 3', url: Slide3, key: '3' },
  { label: 'Slide 4', url: Slide4, key: '4' },
  { label: 'Slide 5', url: Slide5, key: '5' },
  { label: 'Slide 6', url: Slide6, key: '6' },
];

export const icons = { Prev, Next };
