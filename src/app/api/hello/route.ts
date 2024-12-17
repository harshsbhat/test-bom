export const preferredRegion = ['iad1'];
export const dynamic = 'force-dynamic'; // no caching
 
export function GET() {
  return new Response(
    `I am an Edge Function! (executed on ${process.env.VERCEL_REGION})`,
    {
      status: 200,
    },
  );
}