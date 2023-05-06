import { createClient } from 'contentful';

export const cmsClient = createClient({
  space: "",
  accessToken: "",
  headers: { cache: 'no-cache' },
});




