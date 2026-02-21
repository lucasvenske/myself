import { ZardCommandDividerComponent } from '@/shared/zardui/components/command/command-divider.component';
import { ZardCommandEmptyComponent } from '@/shared/zardui/components/command/command-empty.component';
import { ZardCommandInputComponent } from '@/shared/zardui/components/command/command-input.component';
import { ZardCommandListComponent } from '@/shared/zardui/components/command/command-list.component';
import { ZardCommandOptionGroupComponent } from '@/shared/zardui/components/command/command-option-group.component';
import { ZardCommandOptionComponent } from '@/shared/zardui/components/command/command-option.component';
import { ZardCommandComponent } from '@/shared/zardui/components/command/command.component';

export const ZardCommandImports = [
  ZardCommandComponent,
  ZardCommandInputComponent,
  ZardCommandListComponent,
  ZardCommandEmptyComponent,
  ZardCommandOptionComponent,
  ZardCommandOptionGroupComponent,
  ZardCommandDividerComponent,
] as const;
