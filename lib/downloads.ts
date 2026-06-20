/**
 * Central place to manage installer download links and product metadata.
 *
 * Installers are NOT committed to the repo (the macOS .dmg is ~145MB).
 * Instead, build them with the desktop app's `npm run build:*` scripts and
 * upload the artifacts to a GitHub Release. The links below point at the
 * "latest" release so they keep working across versions.
 *
 * To update the version shown on the site, change APP_VERSION below.
 */

export const REPO = 'Popoy-Dev/pharma-free-software';
export const APP_VERSION = '1.0.0';

export const RELEASES_URL = `https://github.com/${REPO}/releases`;
export const LATEST_RELEASE_URL = `${RELEASES_URL}/latest`;

export type Platform = 'mac' | 'windows' | 'linux';

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
    // Upload the NSIS .exe to the release, then point this at it directly.
    url: LATEST_RELEASE_URL,
    note: 'Windows 10/11 · coming soon',
    available: false,
  },
  linux: {
    label: 'Linux',
    // Upload the AppImage/.deb to the release, then point this at it directly.
    url: LATEST_RELEASE_URL,
    note: 'AppImage / .deb · coming soon',
    available: false,
  },
};

/** Detects the visitor's platform from a user-agent string. */
export function detectPlatform(userAgent: string): Platform {
  const ua = userAgent.toLowerCase();
  if (ua.includes('win')) return 'windows';
  if (ua.includes('linux') && !ua.includes('android')) return 'linux';
  return 'mac';
}
