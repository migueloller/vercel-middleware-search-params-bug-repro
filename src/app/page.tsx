export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return <pre>{JSON.stringify({ searchParams: await searchParams }, null, 2)}</pre>
}
