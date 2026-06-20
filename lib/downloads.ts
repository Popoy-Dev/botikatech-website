/**
 * Central place to manage installer download links and product metadata.
 *
 * Installers are served from GitHub Releases to avoid repository file-size limits.
 *
 * To update the version shown on the site, change APP_VERSION below.
 */

export const REPO = 'Popoy-Dev/pharma-free-software';
export const APP_VERSION = '1.0.0';

export const RELEASES_URL = `https://github.com/${REPO}/releases`;
export const LATEST_RELEASE_URL = `${RELEASES_URL}/latest`;

export type Platform = 'mac' | 'windows';

export interface DownloadTarget {
  /** Display name for the platform. */
  label: string;
  /** Direct download URL (or releases page when an artifact isn't ready yet). */
  url: string;
  /** Short note shown under the button (file type / arch / status). */
  note: string;
  /** Whether a real installer artifact is available for direct download. */
  available: boolean;
}

export const downloads: Record<Platform, DownloadTarget> = {
  mac: {
    label: 'macOS',
    // Matches the artifact in build/: BotikaTech-1.0.0-arm64.dmg
    url: `${RELEASES_URL}/latest/download/BotikaTech-${APP_VERSION}-arm64.dmg`,
    note: 'Apple Silicon · .dmg',
    available: true,
  },
  windows: {
    label: 'Windows',
    // Direct download from GitHub Releases.
    url: 'https://github.com/Popoy-Dev/botikatech-website/releases/download/installer/Botika.Tech.2.exe',
    note: 'Windows 10/11 · .exe installer',
    available: true,
  },
};

/** Detects the visitor's platform from a user-agent string. */
export function detectPlatform(userAgent: string): Platform {
  const ua = userAgent.toLowerCase();
  if (ua.includes('win')) return 'windows';
  return 'mac';
}
