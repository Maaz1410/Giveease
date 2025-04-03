export async function POST(req: Request) {
    const { username, password } = await req.json();
  
    // Mock validation (replace with actual logic)
    if (username === 'user' && password === 'password123') {
      return new Response(JSON.stringify({ message: 'Login successful!', user: { username } }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
    }
  }
  