import * as React from 'react';
import type {Branding, Navigation} from '@toolpad/core/AppProvider';
import { NextAppProvider } from '@toolpad/core/nextjs';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import GamesIcon from '@mui/icons-material/SportsEsports';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
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
    segment: 'projects',
    title: 'Projects',
    icon: <Inventory2Icon />,
    children: [
      {
        segment: 'samd',
        title: 'Software as a Medical Device',
        icon: <MonitorHeartIcon />,
      },
      {
        segment: 'games',
        title: 'Games',
        icon: <GamesIcon />,
      },
    ],
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
