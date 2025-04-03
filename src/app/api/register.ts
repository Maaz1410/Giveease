export async function POST(req: Request) {
    const { email, name, password } = await req.json();
  
    // Simulate successful registration (replace with actual logic)
    return new Response(JSON.stringify({ message: 'Registration successful!', user: { email, name } }), { status: 201 });
  }
  