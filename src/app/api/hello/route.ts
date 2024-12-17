export const dynamic = 'force-dynamic';
export const preferredRegion = ["bom1"];
 
export function GET() {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}