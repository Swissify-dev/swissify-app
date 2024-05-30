export async function POST() {
  const value = {
    saludo: 'hola',
    ln: 'es',
  }
  return new Response(JSON.stringify(value), {
    headers: { 'content-type': 'application/json' },
    status: 201,
  })
}
