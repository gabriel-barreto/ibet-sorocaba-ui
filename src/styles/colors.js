import { css } from 'styled-components';

export const Colors = {
  primaryLight: '#4d4d4d',
  primary: '#1a1a1a',
  primaryDark: '#000000',

  secondaryLight: '#B8907A',
  secondary: '#A37258',
  secondaryDark: '#74513E',

  light: '#EDEDED',
  lightest: '#FFFFFF',

  dark: '#212121',
  darkest: '#0D0D0D',

  success: '#27AE60',
  danger: '#C0392B',
};

export default css`
  :root {
    --primary-light: ${Colors.primaryLight};
    --primary: ${Colors.primary};
    --primary-dark: ${Colors.primaryDark};

    --secondary-light: ${Colors.secondaryLight};
    --secondary: ${Colors.secondary};
    --secondary-dark: ${Colors.secondaryDark};

    --light: ${Colors.light};
    --lightest: ${Colors.lightest};

    --dark: ${Colors.dark};
    --darkest: ${Colors.darkest};

    --success: ${Colors.success};
    --danger: ${Colors.danger};
  }
`;
