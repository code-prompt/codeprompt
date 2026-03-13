// import type { MetadataRoute } from "next";

// import { getSiteUrl } from "@/lib/seo";

// export default function robots(): MetadataRoute.Robots {
//   const siteUrl = getSiteUrl();

//   return {
//     rules: [
//       {
//         userAgent: "*",
//         allow: "/",
//         disallow: ["/api/"],
//       },
//     ],
//     sitemap: `${siteUrl}/sitemap.xml`,
//     host: siteUrl,
//   };
// }

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/api/'
            ],
        },
        sitemap: 'https://codeprompt.in/sitemap.xml',
    }
}