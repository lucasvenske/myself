import { ContentComponent } from '@/shared/zardui/components/layout/content.component';
import { FooterComponent } from '@/shared/zardui/components/layout/footer.component';
import { HeaderComponent } from '@/shared/zardui/components/layout/header.component';
import { LayoutComponent } from '@/shared/zardui/components/layout/layout.component';
import {
  SidebarComponent,
  SidebarGroupComponent,
  SidebarGroupLabelComponent,
} from '@/shared/zardui/components/layout/sidebar.component';

export const LayoutImports = [
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
  ContentComponent,
  SidebarComponent,
  SidebarGroupComponent,
  SidebarGroupLabelComponent,
] as const;
