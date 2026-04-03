import type { LucideIcon } from 'lucide-react';
import {
  ArrowRightLeft,
  ClipboardCheck,
  Gauge,
  LifeBuoy,
  Puzzle,
  Store,
} from 'lucide-react';

export const SERVICE_ICON_BY_ID: Record<string, LucideIcon> = {
  'store-setup': Store,
  'platform-migration': ArrowRightLeft,
  'app-integration': Puzzle,
  'performance-seo': Gauge,
  'cro-audit': ClipboardCheck,
  support: LifeBuoy,
};

export function getServiceIcon(id: string): LucideIcon {
  return SERVICE_ICON_BY_ID[id] ?? Puzzle;
}
