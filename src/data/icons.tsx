// ============================================================
// CurtainMakers — SVG Icon Set
// Professional SVG icons replacing emoji/unicode placeholders
// ============================================================

import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function makeIcon(path: string, viewBox = '0 0 24 24'): React.FC<IconProps> {
  const IconComponent: React.FC<IconProps> = ({ size = 24, className = '', ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {path.split('|').map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
  IconComponent.displayName = `Icon(${path.slice(0, 20)})`;
  return IconComponent;
}

// ── Room Type Icons ──

export const IconBedroom = makeIcon(
  'M4 7v12M20 7v12M4 19h16M4 10h16M9 10V7M15 10V7M7 16h4M13 16h4M8 7V4h8v3'
);

export const IconLivingRoom = makeIcon(
  'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM9 22V12h6v10'
);

export const IconKidsRoom = makeIcon(
  'M12 2a4 4 0 00-4 4v2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V10a2 2 0 00-2-2h-3V6a4 4 0 00-4-4zM12 8v2M9 14h6M9 18h4'
);

export const IconGarden = makeIcon(
  'M2 22l4-4M6 18l4-4M10 14l4-4M14 10l4-4M18 6l2-2M12 22v-8a4 4 0 014-4h4M8 22v-4a4 4 0 014-4'
);

export const IconHotel = makeIcon(
  'M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2M3 7v12a2 2 0 002 2h14a2 2 0 002-2V7M3 7h18M7 12h2M11 12h2M15 12h2M7 16h2M11 16h2M15 16h2'
);

export const IconOffice = makeIcon(
  'M4 22V6a2 2 0 012-2h12a2 2 0 012 2v16M4 22h16M8 22V10h8v12M12 10v2M12 14v2'
);

// ── Process Step Icons ──

export const IconClipboard = makeIcon(
  'M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2M12 2a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2V4a2 2 0 012-2h4zM9 13h6M9 17h4'
);

export const IconCheckCircle = makeIcon(
  'M9 12l2 2 4-4M7.5 7.5A8.5 8.5 0 1112 20.5M3.5 12A8.5 8.5 0 1112 20.5'
);

export const IconTools = makeIcon(
  'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z'
);

// ── Blog Category Icons ──

export const IconGuide = makeIcon(
  'M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2zM8 7h8M8 11h6'
);

export const IconSmart = makeIcon(
  'M18.36 6.64a9 9 0 11-12.73 0M12 2v4M12 18v4M4.93 7.93l2.83 2.83M16.24 10.24l2.83-2.83M2 12h4M18 12h4'
);

export const IconCompare = makeIcon(
  'M16 3h5v5M8 3H3v5M3 16v5h5M21 16v5h-5M21 12h-4M7 12H3M12 7V3M12 21v-4'
);

export const IconTips = makeIcon(
  'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01'
);

export const IconEnergy = makeIcon(
  'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
);

export const IconFabric = makeIcon(
  'M2 8l4-4 4 4-4 4-4-4zM14 8l4-4 4 4-4 4-4-4zM8 14l4-4 4 4-4 4-4-4z'
);

export const IconRegulations = makeIcon(
  'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
);

// ── Category Icons (for Products page) ──

export const IconRoller = makeIcon(
  'M4 8h16M4 8v8a2 2 0 002 2h12a2 2 0 002-2V8M4 8l8-4 8 4M12 8v10'
);

export const IconVenetian = makeIcon(
  'M4 5h16M4 9h16M4 13h16M4 17h16M4 21h16M4 3h16'
);

export const IconVertical = makeIcon(
  'M4 5h16M6 5v14M10 5v14M14 5v14M18 5v14'
);

export const IconZebra = makeIcon(
  'M4 6h16M4 10h16M4 14h16M4 18h16M8 6v4M16 10v4M8 14v4M12 6v4M16 6v4M8 10v4M12 14v4'
);

export const IconRoman = makeIcon(
  'M4 5h16M4 9h16M4 13h16M4 17h16M4 21h16M8 5v16M16 5v16'
);

export const IconAluminium = makeIcon(
  'M4 6h16M4 10h16M4 14h16M4 18h16M6 6v12M18 6v12'
);

export const IconPleated = makeIcon(
  'M4 6h16M6 6v4a2 2 0 004 0V6M10 10v4a2 2 0 004 0v-4M14 14v4a2 2 0 004 0v-4'
);

export const IconPanel = makeIcon(
  'M4 4h16v16H4zM8 4v16M12 4v16M16 4v16'
);

export const IconSkylight = makeIcon(
  'M12 3L3 21h18L12 3zM8 14l4-6 4 6'
);

export const IconFlyscreen = makeIcon(
  'M4 4h16v16H4zM6 6l12 12M18 6L6 18'
);

// ── Fallback / Default ──

export const IconDefault = makeIcon(
  'M4 8l4-4 4 4M12 4v16'
);

// ── Map for easy lookup ──

export const ROOM_ICONS: Record<string, React.FC<IconProps>> = {
  bedroom: IconBedroom,
  'living-room': IconLivingRoom,
  'kids-room': IconKidsRoom,
  garden: IconGarden,
  hotel: IconHotel,
  office: IconOffice,
};

export const PROCESS_ICONS: Record<string, React.FC<IconProps>> = {
  clipboard: IconClipboard,
  check: IconCheckCircle,
  tools: IconTools,
};

export const BLOG_ICONS: Record<string, React.FC<IconProps>> = {
  '◆': IconGuide,
  '⚡': IconSmart,
  '▤': IconCompare,
  '🏠': IconTips,
  '🌡️': IconEnergy,
  '🧵': IconFabric,
  '📋': IconRegulations,
};

export const CATEGORY_ICONS_MAP: Record<string, React.FC<IconProps>> = {
  roller: IconRoller,
  venetian: IconVenetian,
  'aluminium-venetian': IconAluminium,
  vertical: IconVertical,
  smart: IconDefault,
  zebra: IconZebra,
  roman: IconRoman,
  pleated: IconPleated,
  panel: IconPanel,
  skylight: IconSkylight,
  flyscreen: IconFlyscreen,
};
