import clientPromise from '../../../../lib/mongodb';



export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("giveease");

    const formData = await req.formData();

    // Extract fields from the FormData
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      organization: formData.get("organization"),
      address: formData.get("address"),
      zipCode: formData.get("zipCode"),
      mission: formData.get("mission"),
      // File uploads are stored as Blob/File objects here
      registrationCertificate: formData.get("registrationCertificate")?.name || null,
      contactPersonID: formData.get("contactPersonID")?.name || null,
    };

    const result = await db.collection("submissions").insertOne(data);

    return new Response(JSON.stringify({ message: "Data saved", result }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}

