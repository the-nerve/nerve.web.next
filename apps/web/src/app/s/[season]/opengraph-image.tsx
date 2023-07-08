/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server';

import { getDocumentTitle } from '@/features/seo/__scenarios__/getDocumentTitle';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Font
const interBlack = fetch(new URL('@og-assets/fonts/inter-black.woff', import.meta.url)).then((res) =>
  res.arrayBuffer()
);

const logoSrc = fetch(new URL('@og-assets/logos/nerve-logo--light.png', import.meta.url)).then((res) =>
  res.arrayBuffer()
);

export default async function Image({ params }: { params: { season: string } }) {
  const imageData = await logoSrc;
  const meta = await getDocumentTitle('season', params.season);
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: '#07121D',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <span tw="flex flex-col items-center justify-center">
          <span tw="text-[95.37px] leading-none text-[#F2F2F3]">{meta.title}</span>
          <span tw="text-[40.27px] leading-none text-[#A2A2A9]">season</span>
        </span>
        <span tw="absolute bottom-[36px] right-[36px]">
          <img src={imageData} alt="Nerve theatre logo" width={236} height={96} />
        </span>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Inter Black',
          data: await interBlack,
          style: 'normal',
          weight: 900,
        },
      ],
    }
  );
}
