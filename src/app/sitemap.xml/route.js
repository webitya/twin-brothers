import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export async function GET() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/services', changefreq: 'monthly', priority: 0.8 },
    { url: '/female-therapist', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  ];

  const stream = new SitemapStream({
    hostname: 'https://www.twinbrotherstherapy.in',
  });

  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
