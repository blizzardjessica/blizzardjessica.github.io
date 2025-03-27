import * as React from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import GamesIcon from '@mui/icons-material/SportsEsports';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type {Branding, Navigation} from '@toolpad/core/AppProvider';
import LinearProgress from '@mui/material/LinearProgress';
import theme from "@/theme";

const BRANDING: Branding = {
  logo: <AccountCircleIcon color='primary' fontSize='large'/>,
  title: 'Jessica Blizzard - Software Engineer',
}

const NAVIGATION: Navigation = [
  {
    segment: '',
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    segment: 'resume',
    title: 'Resume',
    icon: <DescriptionIcon />,
  },
  {
    segment: 'games',
    title: 'Games',
    icon: <GamesIcon />,
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <React.Suspense fallback={<LinearProgress />}>
            <NextAppProvider theme={theme} navigation={NAVIGATION} branding={BRANDING}>
              {children}
            </NextAppProvider>
          </React.Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
