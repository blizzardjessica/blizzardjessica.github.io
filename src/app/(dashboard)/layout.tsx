'use client'
import * as React from 'react';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import {useColorScheme} from "@mui/material";

export default function Layout(props: { children: React.ReactNode }) {
    const { mode } = useColorScheme();
    const gradient = (mode === 'dark') ?
        `linear-gradient(19deg, #999999 0%, #555555 100%)`
        : `linear-gradient(19deg, #FFFFFF 0%, #DDDDDD 100%)`;
    return (
    <DashboardLayout sx={{
        backgroundImage: gradient,
        backgroundAttachment: "fixed",
    }} disableCollapsibleSidebar>
      <PageContainer >{props.children}</PageContainer>
    </DashboardLayout>
  );
}
