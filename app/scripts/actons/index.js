export const SITE_LOADED = 'SITE_LOADED';

export function siteLoaded(props) {
  return {
    type: SITE_LOADED,
    payload: props
  };
}
